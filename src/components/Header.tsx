import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'

import { useNavigation } from '@react-navigation/native'

import { Feather } from '@expo/vector-icons'

interface HeaderProps {
  title: string,
  showCancel: boolean
}

export default function HeaderComponent({ title, showCancel = true }: HeaderProps) {

  const navigation = useNavigation()


  const handleReturnHome = () => {
    navigation.navigate('home')
  }

  return (
    <View style={style.header}>
      <BorderlessButton
        onPress={ navigation.goBack }
        >
        <Feather name="arrow-left" size={20} color="#1f1c1c" />
      </BorderlessButton>
      <Text style={style.titleStyle}> { title } </Text>
      {
        showCancel ? (
          <BorderlessButton
            onPress={ handleReturnHome }>
            <Feather name="x" size={25} color="#1f1c1c" />
          </BorderlessButton>
        ) : (<View></View>)
      }
    </View>
  )
}

const style = StyleSheet.create({
  header: {
    zIndex: 1,
    paddingVertical: 30,
    backgroundColor: '#c05252',
    width: Dimensions.get('screen').width,
    padding: 24,
    borderBottomWidth: 1,
    flexDirection: 'row',
    paddingTop: 44,
    justifyContent: 'space-between'
  },
  titleStyle: {
    zIndex: 2,
    textDecorationColor: '#002a9e',
  }
})


