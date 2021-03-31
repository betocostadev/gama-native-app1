import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Details from './screens/Details'
import Home from './screens/Home'
import Contact from './screens/Contact'

import HeaderComponent from './components/Header'

const { Navigator, Screen } = createStackNavigator()
export default function Route(){
    return(
        <NavigationContainer>
            <Navigator
                screenOptions={{ headerShown: false, cardStyle: { backgroundColor: '#f2f2f2'} }}
            >
            <Screen
                name="home"
                component={Home}
                />
            <Screen
                name="details"
                component={Details}
                options={{
                    headerShown: true,
                    header: () => <HeaderComponent title="Details" showCancel={true} />
                }}
            />
            <Screen
                name="contact"
                component={Contact}
                options={{
                    headerShown: true,
                    header: () => <HeaderComponent title="Contact" showCancel={true} />
                }}
            />
            </Navigator>

        </NavigationContainer>
    )
}
