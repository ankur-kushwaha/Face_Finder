import React from 'react'
import { View, Image, TouchableOpacity, Text } from 'react-native'
import { connect } from 'react-redux'

// Styles
import styles from './Styles/ListviewGridExampleStyles'

class PreviewScreen extends React.Component {

  uploadFile = () => {
    console.log(this.props.mediaUrl)
    const form = new FormData()

    form.append('image', {
      uri: this.props.mediaUrl,
      type: 'image/jpg',
      name: 'image.jpg'
    })

    fetch('https://www.googleapis.com/upload/storage/v1/b/eyespy/o?uploadType=media&name=myObject.jpg', {
      method: 'POST',
      body: form,
      headers: {
        Authorization: 'Bearer ya29.GltNBE01_Wko05wrd0MRpaAw985JrzyZLIOOM7aYeY_MWYrWY792U7Hf52-2RR2-dyM_3YcI3nhllonUViDS4GOcy8QuHJDuV57V_OFDT3pJxwNiNscpB6u4kjBt'
      }
    }).then(data => console.log(data))
      .catch(data => console.log(data))
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
