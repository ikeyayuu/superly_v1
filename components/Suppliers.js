import React, {useEffect,useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

export function Suppliers ( props ) {
    const navigation = useNavigation()

    return (
        <View>
            <Text>Suppliers</Text>
        </View>
    )
}

export default Suppliers

const styles = StyleSheet.create({
    
})
