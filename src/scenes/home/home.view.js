import React from 'react';
import {View, Text, Button} from 'react-native';
import NavigationServices from '../../services/NavigationService';

const HomeView = () => {
  return (
    <View>
      <Button
        title="Speech To Text"
        onPress={() => NavigationServices.navigate('Voice')}
      />
    </View>
  );
};

export default HomeView;
