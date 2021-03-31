import React from 'react';
import { View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function Details(){
    const navigation = useNavigation()

    const handleNextScreen = () => {
        navigation.navigate('contact')
    }

    return(
        <View>
            <Text onPress={ handleNextScreen }> Tela de contato </Text>
        </View>
    )
}
