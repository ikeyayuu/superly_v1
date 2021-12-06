import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Button, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { ThemeColours } from './ThemeColours';
import { Feedback } from './Feedback';

export function Signin ( props ) {
  const navigation = useNavigation()
  const [email,setEmail] = useState()
  const [password, setPassword] = useState()

  useEffect( () => {
    if( props.auth === true ) {
      navigation.reset({ index: 0, routes: [ {name: 'Home'} ] })
    }
  }, [props.auth] )



  return(
    <View style={styles.container}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
      <View style={styles.logoContainer}>
        <Image 
          style={styles.logo}
          source={require('../assets/SUPERLY_logo.png')}
        />
      </View>
      <View style={styles.inner}>
        <Text>Email</Text>
        <TextInput 
          style={styles.input} 
          onChangeText={ (val) => setEmail(val) } 
        />
        <Text>Password</Text>
        <TextInput style={styles.input} 
          secureTextEntry={true} 
          onChangeText={ (val) => setPassword(val) } 
        />
        <TouchableOpacity style={styles.button} onPress={ () => { props.handler(email,password) }}>
          <Text style={styles.buttonText}>Sign in</Text>
        </TouchableOpacity>
        <Feedback message={props.error} />
        <View style={ styles.meta }>
          <Text style={styles.metaText}>Don't have an account?</Text>
          <Button title="Register" onPress={() => navigation.navigate("Signup")} />
        </View>
      </View>
      </KeyboardAvoidingView>
      
    </View>
  )
}

const styles = StyleSheet.create( {
  logoContainer:{
    flex: 7/8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo:{
    width: '60%',
    resizeMode: 'contain',
    margin: 'auto',
  },
  input: {
    backgroundColor: ThemeColours.superGrey,
    fontSize: 16,
    padding: 5,
    borderRadius: 4,
    marginBottom: 15,
  },
  button: {
    marginVertical: 15,
    backgroundColor: ThemeColours.superAqua,
    padding: 10,
    borderRadius: 10,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 18,
  },
  inner: {
    width: 300,
    marginBottom: 90,
  },
  kb: {
    flex: 1,
  },
  meta: {
    backgroundColor: ThemeColours.culturedTranslucent,
    padding: 10,
    borderRadius: 10,
  },
  metaText: {
    textAlign: 'center',
  },
})