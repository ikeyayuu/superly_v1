import React, {useState,useEffect} from 'react'
import { View, Text, StyleSheet, Button, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { ThemeColours } from './ThemeColours';
import { Feedback } from './Feedback';

export function Signup(props) {
  const[validEmail, setValidEmail ] = useState( false )
  const[validPassword,setValidPassword ] = useState( false )
  const[validForm,setValidForm] = useState(false)

  const[email,setEmail] = useState()
  const[password,setPassword] = useState()

  const navigation = useNavigation()

  const validateEmail = ( emailVal ) => {
    if( emailVal.indexOf('@') > 0 ) {
      setValidEmail( true )
    }
    else {
      setValidEmail( false )
    }
    setEmail( emailVal )
  }

  const validatePassword = ( passwordVal ) => {
    if( passwordVal.length >= 8 ) {
      setValidPassword( true )
    }
    else {
      setValidPassword( false )
    }
    setPassword( passwordVal )
  }

  const submitHandler = () => {
    props.handler( email, password )
  }

  useEffect( () => {
    if(validEmail && validPassword) {
      setValidForm( true )
    }
    else {
      setValidForm( false )
    }
  }, [validEmail, validPassword])

  useEffect( () => {
    if( props.auth === true ) {
      navigation.reset({ index: 0, routes: [ {name: 'Home'} ] })
    }
  }, [props.auth])

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Please fill up to register</Text>
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
      <View style={styles.inner}>
        <Text style={styles.text}>email</Text>
        <TextInput 
          placeholder="john@email.com" 
          style={styles.input} 
          onChangeText={ (val) => validateEmail(val) }
        />

        <Text style={styles.text}>password</Text>
        <TextInput 
          style={styles.input} 
          onChangeText={ (val) => validatePassword(val) }
          secureTextEntry={true} 
        />
        <TouchableOpacity 
          style={ (validForm) ? styles.button : styles.buttonDisabled} 
          disabled={ (validForm) ? false : true }
          onPress={ () => submitHandler() }
        >
          <Text style={styles.buttonText}>Sign up</Text>
        </TouchableOpacity>
        <Feedback message={props.error} />
        <View style={styles.meta}>
          <Text style={styles.metaText}>Already have an account?</Text>
          <Button style={styles.metaText} title="Click here to sign in" onPress={() => navigation.navigate("Signin")} />
        </View>
      </View>
      </KeyboardAvoidingView>
      
    </View>
  )
}

const styles = StyleSheet.create( {
  text:{
    color: ThemeColours.superBlackish,
  },
  label:{
    fontSize: 20,
    fontWeight: '800',
    textTransform: 'uppercase',
    color: ThemeColours.superBlue,
    marginBottom: 30,
  },
  input: {
    backgroundColor: ThemeColours.superGrey,
    fontSize: 16,
    padding: 5,
    marginBottom: 15,
    marginTop: 5,
    borderRadius: 4,
  },
  button: {
    marginVertical: 15,
    backgroundColor: ThemeColours.superAqua,
    padding: 10,
    borderRadius: 10,
  },
  buttonDisabled: {
    marginVertical: 15,
    backgroundColor: ThemeColours.superGrayer,
    padding: 10,
    borderRadius: 10,
    borderColor: ThemeColours.superBlue,
    borderWidth: 2,
  },
  container: {
    flex: 1,
    backgroundColor: ThemeColours.superAqua,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: ThemeColours.superBlue,
    textAlign: 'center',
    fontWeight: '700',
  },
  inner: {
    width: 300,
    marginBottom: 90,
  },
  kb: {
    flex: 1,
  },
  meta: {
    backgroundColor: ThemeColours.superSalmon,
    padding: 10,
    borderRadius: 10,
  },
  metaText: {
    color: 'white',
    textAlign: 'center',
  },
})