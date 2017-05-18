import React from 'react'
import { ScrollView, Text, Image, View, TouchableOpacity } from 'react-native'
import { Images } from '../Themes'

// Styles
import styles from './Styles/LaunchScreenStyles'
import { Actions } from 'react-native-router-flux'

export default class LaunchScreen extends React.Component {
  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Image source={Images.launch} style={styles.logo} />
          </View>
          <TouchableOpacity style={styles.loginButtonWrapper} onPress={() => {
            Actions.cameraView()
          }}>
            <View style={styles.loginButton}>
              <Text style={styles.loginText}>Camera</Text>
            </View>
          </TouchableOpacity>

        </ScrollView>
      </View>
    )
  }
}
