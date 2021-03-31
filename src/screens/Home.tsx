import React, { useRef } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Animated, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BorderlessButton } from 'react-native-gesture-handler'

import { RectButton } from 'react-native-gesture-handler'
// import { SafeAreaView } from 'react-native-safe-area-context';

export default function Home(){
    const navigation = useNavigation()

    const fade = useRef(new Animated.Value(0)).current

    const fadeInAnimation = () => {
        Animated.timing(
            fade,
            {
                toValue: 1,
                duration: 1500,
                useNativeDriver: true
            }
        ).start()
    }

    function openNewScreen(screen: string){
        navigation.navigate(screen)
    }

    // <Animated.View style={[style.fadeInStyle, {opacity: fade}] } >
    // </Animated.View>
    return(
        <SafeAreaView style={style.Container}>
            <View>
                <RectButton onPress={() => alert('Tudo certo!')}>
                    <Text style={style.TextContent}> Home </Text>
                </RectButton>
                <Image source={ require('../img/logoGama.png') }/>
                <View>
                <BorderlessButton
                    onPress={ () => alert('Nice') }>
                    <Text onPress={ () => openNewScreen('home')}> Home </Text>
                </BorderlessButton>
                    <Text onPress={ () => openNewScreen('details')}> Details </Text>
                    <Text onPress={ fadeInAnimation }> Animation </Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#808080'
    },
    TextContent: {
        color: '#fff',
        fontSize: 22
    },
    fadeInStyle: {
        flex: 1
    }
})
