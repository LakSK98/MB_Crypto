import React, { useEffect, useState } from 'react';
import {View, Text, SafeAreaView, FlatList, Image} from 'react-native';
import {Button, Card, IconButton, Title} from 'react-native-paper';
import {theme} from '../Core/theme';
import axios from 'axios';
//f
const questionsM = [
  {
    questionId: 1,
    userName: 'Saman Jayakodi',
    date: '27/03/2022',
  },
  {
    questionId: 2,
    userName: 'Saman Jayakodi',
    date: '27/03/2022',
  },
  {
    questionId: 3,
    userName: 'Saman Jayakodi',
    date: '27/03/2022',
  },
  {
    questionId: 5,
    userName: 'Saman Jayakodi',
    date: '27/03/2022',
  },
  {
    questionId: 6,
    userName: 'Saman Jayakodi',
    date: '27/03/2022',
  },
  {
    questionId: 7,
    userName: 'Saman Jayakodi',
    date: '27/03/2022',
  },
  {
    questionId: 8,
    userName: 'Saman Jayakodi',
    date: '27/03/2022',
  },
  {
    questionId: 9,
    userName: 'Saman Jayakodi',
    date: '27/03/2022',
  },
  {
    questionId: 10,
    userName: 'Saman Jayakodi',
    date: '27/03/2022',
  },
];

function ProfilePic() {
  return (
    <Image
      style={{width: 37, height: 37, marginRight: 15}}
      source={require('../Assets/Profile.png')}
    />
  );
}

export default function PostedQuestionScreen({navigation}) {

  const [questions,setQuestions] = useState([]);
  
  useEffect(()=>{
    axios.get('http://10.0.2.2:5000/api/Question')
      .then((res)=>{
        setQuestions(res.data);
      }).catch(err=>console.log(err));
  },[]);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: theme.colors.light}}>
      {questions.length>0&&<View style={{marginTop: 8}}>
        <FlatList
          data={questions}
          keyExtractor={data => data.id}
          contentContainerStyle={{}}
          style={{
            shadowColor: theme.colors.medium,
            shadowOpacity: 0.7,
            shadowOffset: {height: 5, width: 0},
          }}
          renderItem={({item}) => (
            <View style={{marginVertical: 3, marginHorizontal: 7}}>
              <Card.Title
                style={{
                  borderWidth: 1,
                  borderColor: theme.colors.light,
                  backgroundColor: 'white',
                }}
                title={item.userName}
                subtitle={item.date}
                left={props => <ProfilePic {...props} />}
                right={() => (
                  <IconButton
                    icon="square-edit-outline"
                    onPress={() =>
                      navigation.navigate('Edit Question', {date: item.date})
                    }
                  />
                )}
              />
            </View>
          )}
        />
      </View>}
    </SafeAreaView>
  );
}
