// Components/FilmList.js

import React from 'react'
import { StyleSheet, FlatList } from 'react-native'
import TaskItem from './TaskItem'

class TaskList extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      tasks: []
    }
  }

  render() {
    return (
        <FlatList
          style={styles.list}
          data={this.props.tasks}
          //extraData={this.props.favoritesFilm}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => (
            <TaskItem
              film={item}
            />
          )}
        />
    )
  }
}

const styles = StyleSheet.create({
  list: {
    flex: 1
  }
})

export default TaskList