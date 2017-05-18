import React from 'react'
import { View, Image, TouchableOpacity, Text } from 'react-native'
import { connect } from 'react-redux'

import RNFetchBlob from 'react-native-fetch-blob'

// Styles
import styles from './Styles/ListviewGridExampleStyles'

class PreviewScreen extends React.Component {

  uploadFile = () => {
    console.log(this.props.mediaUrl)
    // const form = new FormData()

    // form.append('image', {
    //   uri: this.props.mediaUrl,
    //   type: 'image/jpg',
    //   name: 'image.jpg'
    // })

    // fetch('https://www.googleapis.com/upload/storage/v1/b/eyespy/o?uploadType=media&name=myObject.jpg', {
    //   method: 'POST',
    //   body: form,
    //   headers: {
    //     Authorization: 'Bearer ya29.GltNBE01_Wko05wrd0MRpaAw985JrzyZLIOOM7aYeY_MWYrWY792U7Hf52-2RR2-dyM_3YcI3nhllonUViDS4GOcy8QuHJDuV57V_OFDT3pJxwNiNscpB6u4kjBt'
    //   }
    // }).then(data => console.log(data))
    //   .catch(data => console.log(data))

    RNFetchBlob.fetch('POST', 'https://www.googleapis.com/upload/storage/v1/b/eyespy/o?uploadType=media&name=test/myObject.jpg?key=876629c8738ecd11f21a89700b74b001519adffe', {
      // dropbox upload headers
      Authorization: 'Bearer 876629c8738ecd11f21a89700b74b001519adffe',
      'Content-Type': 'image/jpeg'
      // Change BASE64 encoded data to a file path with prefix `RNFetchBlob-file://`.
      // Or simply wrap the file path with RNFetchBlob.wrap().
    }, RNFetchBlob.wrap(this.props.mediaUrl))
      .then((res) => {
        var json = res.json()
        console.log(json)
      })
      .catch((err) => {
        // error handling ..
        console.log(err)
      })
  }

  render () {
    return (
      <View style={styles.container}>
        <Image source={{ uri: this.props.mediaUrl }}
          style={{ width: 400, height: 400 }} />
        <TouchableOpacity style={{
          backgroundColor: 'black',
          marginTop: 10,
          padding: 20
        }} onPress={this.uploadFile}>
          <Text style={{ color: 'white' }}>Upload File</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // ...redux state to props here
  }
}

export default connect(mapStateToProps)(PreviewScreen)
