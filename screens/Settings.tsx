import React from 'react';
import { View, Alert } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import { ListItem } from '../components/ListItem';
import { theme } from '../theme';

export const Settings = ({ navigation }: any) => {

  return (
    <View style={{ flexDirection: 'column', margin: 16, borderRadius: 11, overflow: 'hidden' }}>
      <ListItem
        label="Categories"
        detail={
          <Entypo
            name="chevron-thin-right"
            size={20}
            color='white'
            style={{ opacity: 0.3 }}
          />
        }
        onClick={() => { navigation.navigate('Categories') }
        }
      />
      {/* <ListItem
        label="Report a bug"
        detail={
          <Entypo
            name="chevron-thin-right"
            size={20}
            color="white"
            style={{ opacity: 0.3 }}
          />
        }
      /> */}
      <ListItem
        label="Erase all data"
        isDestructive
        onClick={() => {
          Alert.alert('Are you sure?', 'This action cannot be undone.', [
            { text: 'Cancel', style: 'cancel', onPress: () => console.log('Cancel Pressed') },
            { text: 'Erase data', style: 'destructive', onPress: () => console.log('OK Pressed') },
          ])
        }}
      />
    </View>
  );
}