import React from 'react'
import { StyleSheet, View, TextInput, Button, ActivityIndicator } from 'react-native'
import TaskList from './TaskList'

class ManageTask extends React.Component{
    constructor(props){
        super(props)
        this.writtenText=""
        this.state = {
            tasks : []
        }
    }
    
    _writtenTextInputChanged(text) {
        this.writtenText = text
    }
    
    _displayLoading() {
        if (this.state.isLoading) {
          return (
            <View style={styles.loading_container}>
              <ActivityIndicator size='large' />
            </View>
          )
        }
    }
    render() {
        return (
          <View style={styles.main_container}>
            <TextInput
              style={styles.textinput}
              placeholder='Saisissez une nouvelle tâche'
              onChangeText={(text) => this._writtenTextInputChanged(text)}
              onSubmitEditing={() => this._createTask()}
            />
            <TaskList
              tasks={this.state.tasks}
            />
            {this._displayLoading()}
            <Button title='Supprimer les tâches terminées' onPress={() => this._deleteFinishedTasks()}/>
          </View>
        )
    }
}
const styles = StyleSheet.create({
    main_container: {
      flex: 1
    },
    textinput: {
      height: 50,
      backgroundColor : '#F5F5F5',
      paddingLeft: 5
    },
    loading_container: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 100,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center'
    }
  })
export default ManageTask