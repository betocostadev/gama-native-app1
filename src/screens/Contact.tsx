import React, { useCallback, useState } from 'react'
import { View, Text, TextInput, StyleSheet, Dimensions, Platform } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

import LottieView from 'lottie-react-native'

import sendContact from '../services/index'

{/* <LottieView
  source={require('../animation/mail.json')}
  autoPlay
  loop
  /> */}
export default function Contact() {
  const [ isSendMessage, setIsSendMessage ] = useState(false)
  const [ name, onChangeText ] = useState<string>()
  const [ phone, onChangeNumber ] = useState<string>()

  const handleSentData = () => {
    const postData = {
      name, phone
    }
    sendContact
      .post('', postData)
      .then(response => setIsSendMessage(true))
  }

  return (
    <View style={style.container}>
      <Text>Contato</Text>
      {
        isSendMessage
        ? (<View><Text>Is send Message</Text></View>)
        : (
          <View>
            <Text>Name:</Text>
            <TextInput
              value={name}
              style={style.input}
              onChangeText={text => onChangeText(text)}
              />
            <Text>Telefone:</Text>
            <TextInput
              value={phone}
              style={style.input}
              onChangeText={text => onChangeNumber(text)}
              />
            </View>
          )
      }
      <RectButton style={style.sendButton} onPress={handleSentData}>
        <Text>Enviar e-mail</Text>
      </RectButton>
      <RectButton onPress={() => alert(Platform.OS)}>
        <Text>Qual a plataforma?</Text>
      </RectButton>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    justifyContent: 'center'
  },
  input: {
    paddingHorizontal: 20,
    height: 50,
    width: Dimensions.get('screen').width - 60,
    borderWidth: 1,
    borderColor: '#9c8e8e',
    borderRadius: 12,
    marginVertical: 10
  },
  sendButton: {
    marginTop: 40,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#68de5a',
    color: '#fff',
    width: Dimensions.get('window').width - 100,
    height: 48,
    borderRadius: 22,
    fontSize: 20,
    marginRight: 6
  }
})
