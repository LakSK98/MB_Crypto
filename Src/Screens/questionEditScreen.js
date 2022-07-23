import React, {useState} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import TextInput from '../Components/TextInput';
import {Button} from 'react-native-paper';
import axios from 'axios';
//i
export default function QuestionEditScreen({route}) {
  const {date} = route.params;
  const [textInput, setTextInput] = useState('');
  const onSave = () => {
    console.log('Saved');
    const editedQuestion = {
      id:0,
      questionDestription:'',
      date:'',
      uId:1
    }
    axios.put('http://10.0.2.2:5000/api/Question/editQuestion',editedQuestion)
      .then((res)=>console.log(res))
      .catch((err)=>console.log(err));
  };
  return (
    <SafeAreaView>
      <View>
        <View style={{alignItems: 'flex-end', marginRight: 15, marginTop: 20}}>
          <Text style={{fontSize: 18}}>{date}</Text>
        </View>
        <TextInput
          multiline
          style={Styles.input}
          placeholder="Enter Your Question Here..."
          numberOfLines={7}
          maxLength={200}
          onChangeText={text => setTextInput(text)}
        />
        <View style={{alignItems: 'flex-end', marginRight: 12}}>
          <Button mode="contained" style={{width: '30%'}} onPress={onSave}>
            SAVE
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
}

const Styles = {
  input: {
    marginHorizontal: 12,
  },
};
