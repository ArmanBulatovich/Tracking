import { View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Expenses, Settings, Reports, Add } from '../screens';
import { TabBarIcon } from '../components/TabBarIcon';
import { theme } from '../theme';

const Tab = createBottomTabNavigator();

export const Home = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: theme.colors.card,
        }
      }}
    >
      <Tab.Screen options={{ tabBarIcon: (props) => <TabBarIcon {...props} type="expenses" /> }} name="Expenses" component={Expenses} />
      <Tab.Screen options={{ tabBarIcon: (props) => <TabBarIcon {...props} type="reports" /> }} name="Reports" component={Reports} />
      <Tab.Screen options={{ tabBarIcon: (props) => <TabBarIcon {...props} type="add" /> }} name="Add" component={Add} />
      <Tab.Screen options={{ tabBarIcon: (props) => <TabBarIcon {...props} type="settings" /> }} name="Settings" component={Settings} />
    </Tab.Navigator>
  )
}