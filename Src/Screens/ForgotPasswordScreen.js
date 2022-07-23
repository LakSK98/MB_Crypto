import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { Title,TextInput,Button } from 'react-native-paper'
import { theme } from '../Core/theme'

export default function ForgotPasswordScreen() {
    return (
        <SafeAreaView style={{flex:1, backgroundColor:'white'}}>
            <View style={{alignItems:'center'}}>
                <Title style={{marginTop:10}}>Reset Your Password</Title>
                <Text style={{alignItems:'center', color:'black', fontSize:15, width:'80%', marginTop:20,textAlign:'center'}} >Enter your email address. We will send you a email to reset your password </Text>
            </View>
            <View style={{alignItems:'center'}}>
            <TextInput
              mode="outlined"
              style={Styles.input}
              label="email"
              right={<TextInput.Icon name="email" />}
              outlineColor={theme.colors.primary}
            />
            <Button mode='contained'
                    uppercase={false}
                    style={Styles.Button}
                    labelStyle={Styles.labelStyle}
                    onPress={()=>{console.log('confirm email')}}
                    >
                    Confirm Email
            </Button>
            </View>
            
        </SafeAreaView>
    )
}

const Styles = {
    input:{
        width: '90%',
        height: 45,
        marginTop: 40,
        alignSelf: 'center',
        borderColor: theme.colors.primary,
    },
    Button:{
        marginTop: 20,
        height: 46,
        width: '60%',
    },
    labelStyle:{
        fontSize: 18,
        fontWeight: 'bold',
        justifyContent: 'center',
        marginTop: 12,
        color: theme.colors.white,
    }
}