import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'

// For empty lists

import CameraView from '../Components/CameraView'

// Styles
import styles from './Styles/ListviewExampleStyles'

class ListviewExample extends React.Component {

  render () {
    return (
      <View style={styles.container}>
        <CameraView />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // ...redux state to props here
  }
}

export default connect(mapStateToProps)(ListviewExample)
