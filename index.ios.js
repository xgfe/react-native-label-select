/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import LabelSelect from './LabelSelect/LabelSelect';

export default class checkbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [{
        name: '水电费水',
        isSelected: false,
        value: 1
      }, {
        name: '没事干',
        isSelected: true,
        value: 2
      }, {
        name: '我去出',
        isSelected: true,
        value: 3
      }, {
        name: '充满了',
        isSelected: false,
        value: 4
      }, {
        name: '没啦',
        isSelected: true,
        value: 5
      }, {
        name: '阿斯蒂芬',
        isSelected: false,
        value: 6
      }, {
        name: '问啦',
        isSelected: false,
        value: 7
      }, {
        name: '撒地方',
        isSelected: false,
        value: 8
      }]
    };
  }
  render() {
    const arr = this.state.arr;
    return (
      <View style={styles.container}>
        <LabelSelect
          selectAttr="isSelected"
          selectList={arr}
          changeSelect={(target, isSelected) => {
            let index = arr.findIndex(item => item.value === target.value);
            let temp = arr.slice();
            temp[index].isSelected = !temp[index].isSelected;
            this.setState({arr: temp});
          }}
          confirmSelect={(list) => {
            this.setState({arr: list});
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FCFCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('checkbox', () => checkbox);
