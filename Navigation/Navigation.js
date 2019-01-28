// Navigation/Navigations.js

import React from 'react'
import { StyleSheet } from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import ManageTask from '../Components/ManageTask'


const TaskStackNavigator = createStackNavigator({
  Task: {
    screen: ManageTask,
    navigationOptions: {
      title: 'TodoNative'
    }
  }
})

const styles = StyleSheet.create({
    icon: {
      width: 30,
      height: 30
    }
})

export default createAppContainer(TaskStackNavigator)