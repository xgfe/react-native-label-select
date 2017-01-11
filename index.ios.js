/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  AppRegistry
} from 'react-native';
import LabelSelect from './LabelSelect/LabelSelect';

export default class checkbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [{
        name: 'Aspirin',
        isSelected: false,
        value: 1
      }, {
        name: 'MarginTop',
        isSelected: true,
        value: 2
      }, {
        name: 'Dooper',
        isSelected: true,
        value: 3
      }, {
        name: 'Young Skywalker',
        isSelected: false,
        value: 4
      }, {
        name: 'Jedi Master',
        isSelected: true,
        value: 5
      }, {
        name: 'Anakin',
        isSelected: false,
        value: 6
      }, {
        name: 'ナウシカ',
        isSelected: false,
        value: 7
      }, {
        name: '你好',
        isSelected: false,
        value: 8
      }]
    };
    this.selectConfirm = this.selectConfirm.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }
  selectConfirm(list) {
    let {arr} = this.state;
    for (let item of list) {
      let index = arr.findIndex(ele => ele === item);
      if (~index) arr[index].isSelected = true;
      else continue;
    }
    this.setState({arr: arr});
  }
  deleteItem(item) {
    let {arr} = this.state;
    let index = arr.findIndex(a => a === item);
    arr[index].isSelected = false;
    this.setState({arr: arr});
  }
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Button
            onPress={() => {this.refs.select.openModal();}}
            title="Choose More"
          />
        </View>
        {/* normal LabelSelect */}
        <LabelSelect
          title="Checkbox"
          ref="select"
          style={{marginTop: 20}}
          onConfirm={this.selectConfirm}
        >
          {this.state.arr.filter(item => item.isSelected).map((item, index) =>
            <LabelSelect.Label
              key={'label-' + index}
              data={item}
              onCancel={() => {this.deleteItem(item);}}
            >{item.name}</LabelSelect.Label>
          )}
          {this.state.arr.filter(item => !item.isSelected).map((item, index) =>
            <LabelSelect.ModalItem
              key={'modal-item-' + index}
              data={item}
            >{item.name}</LabelSelect.ModalItem>
          )}
        </LabelSelect>
        {/* read only LabelSelect */}
        <LabelSelect
          style={{marginTop: 20}}
          title="Checkbox"
          readOnly={true}
          onConfirm={this.selectConfirm}
        >
          {this.state.arr.filter(item => item.isSelected).map((item, index) =>
            <LabelSelect.Label
              key={'label-' + index}
              data={item}
              onCancel={() => {this.deleteItem(item);}}
            >{item.name}</LabelSelect.Label>
          )}
        </LabelSelect>
        {/* disabled LabelSelect */}
        <LabelSelect
          style={{marginTop: 20}}
          title="Checkbox"
          enable={false}
          onConfirm={this.selectConfirm}
        >
          {this.state.arr.filter(item => item.isSelected).map((item, index) =>
            <LabelSelect.Label
              key={'label-' + index}
              data={item}
              onCancel={() => {this.deleteItem(item);}}
            >{item.name}</LabelSelect.Label>
          )}
        </LabelSelect>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FCFCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});

AppRegistry.registerComponent('checkbox', () => checkbox);
