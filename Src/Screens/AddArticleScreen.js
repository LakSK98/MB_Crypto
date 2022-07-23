import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import {theme} from '../Core/theme';
import {AutoGrowingTextInput} from 'react-native-autogrow-textinput';

function AddArticleScreen({navigation}) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  function publishPressed() {
    console.log(title, content);
  }
  return (
    <View style={Styles.container}>
      <View style={{width: '98%', height: '70%', marginTop: 20}}>
        <TextInput
          label="Article Title"
          underlineColor={theme.colors.primary}
          backgroundColor={theme.colors.white}
          // value={text}
          onChangeText={text => setTitle(text)}
        />
        <AutoGrowingTextInput
          style={Styles.textInput}
          placeholder={'Your content goes here'}
          onChangeText={text => setContent(text)}
        />
      </View>
      <View style={{width: '100%', alignItems: 'center'}}>
        <Button
          style={Styles.imageButton}
          mode="outlined"
          uppercase={false}
          labelStyle={Styles.labelStyle}
          // onPress={publishPressed}
        >
          Insert Image +
        </Button>
        <Button
          style={Styles.publishButton}
          mode="outlined"
          uppercase={false}
          labelStyle={Styles.publishButtonlabelStyle}
          // onPress={() => setOpen(true)}
        >
          Publish Article
        </Button>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    backgroundColor: theme.colors.white,
    // justifyContent: 'center'
  },
  title: {
    fontSize: 32,
    textAlign: 'center',
    fontWeight: 'bold',
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: 'column',
    width: '75%',
    marginTop: '90%',
  },
  imageButton: {
    marginTop: '1%',
    height: 70,
    width: '98%',
    backgroundColor: theme.colors.white,
    borderColor: theme.colors.primary,
    borderWidth: 1.5,
    borderStyle: 'dashed',
  },
  labelStyle: {
    fontSize: 15,
    marginTop: 24,
    color: theme.colors.medium,
  },
  publishButton: {
    marginTop: '10%',
    marginBottom: '-15%',
    width: '70%',
    alignSelf: 'center',
    backgroundColor: theme.colors.primary,
  },
  publishButtonlabelStyle: {
    color: theme.colors.white,
  },
  textInput: {
    paddingLeft: 10,
    width: '100%',
    height: '50%',
    fontSize: 17,
    flex: 1,
    backgroundColor: 'white',
    borderWidth: 0,
    borderRadius: 4,
  },
});

export default AddArticleScreen;
