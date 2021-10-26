import React from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import {Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const VoiceView = ({navigation}) => {
  return (
    <View>
      <Input
        placeholder="INPUT WITH ICON"
        rightIcon={{type: 'material', name: 'mic'}}
      />
    </View>
  );
};

export default VoiceView;
