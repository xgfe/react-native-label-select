/**
 * Created by wangyi27 on 2017-01-03.
 */

import React, {Component, PropTypes} from 'react';
import {
  View,
  Text,
  Image,
  Modal,
  ScrollView,
  TouchableHighlight
} from 'react-native';
import Styles, {Color} from './LabelSelectStyle';

class LabelSelect extends Component {
  closeIcon = require('./img/close.png')
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
      isModalVisible: false,
      selectList: this.deepCopy(this.props.selectList)
    };
    this.toggleItem = this.toggleItem.bind(this);
    this.cancelSelect = this.cancelSelect.bind(this);
    this.confirmSelect = this.confirmSelect.bind(this);
    this.openModal = this.openModal.bind(this);
  }
  deepCopy(obj) {
    return JSON.parse(JSON.stringify(obj));
  }
  setModalVisible(isVisible) {
    this.setState({isModalVisible: isVisible});
  }
  cancelItem(item) {
    this.props.changeSelect(item, false);
    this.setState({selectList: this.deepCopy(this.props.selectList)});
  }
  cancelSelect() {
    this.setState({selectList: this.deepCopy(this.props.selectList)});
    this.setModalVisible(false);
  }
  confirmSelect() {
    this.props.confirmSelect(this.deepCopy(this.state.selectList));
    this.setModalVisible(false);
  }
  toggleItem(index) {
    const {selectAttr} = this.props;
    let list = this.state.selectList;
    list[index][selectAttr] = !list[index][selectAttr];
    this.setState({
      selectList: list
    });
  }
  openModal() {
    !this.props.disable && !this.props.readOnly && this.setModalVisible(true);
  }
  render() {
    const {selectAttr, selectList, disable, readOnly} = this.props;
    const selectedList = selectList.filter(item => item[selectAttr]);
    let selectedItems = selectedList.map((item, index) =>
      <View style={[Styles.selectedItem, disable ? Styles.disableColor : {}]}
        key={'select' + index}>
        <Text style={Styles.labelText}>{item.name}</Text>
        {!disable && !readOnly && <TouchableHighlight
          style={Styles.closeContainer}
          underlayColor="transparent"
          activeOpacity={0.5}
          onPress={() => {this.cancelItem(item);}}>
          <View>
            <Image
              style={Styles.closeIcon}
              source={this.closeIcon}
              resizeMode="cover"/>
          </View>
        </TouchableHighlight>}
      </View>
    );
    let modalItems = this.state.isModalVisible ? this.state.selectList.map((item, index) =>
      <TouchableHighlight
        key={'modalItem' + index}
        activeOpacity={0.5}
        underlayColor="transparent"
        onPress={() => {this.toggleItem(index);}}>
        <View style={[Styles.modalItem, index ? {} : {borderTopWidth: 0}]}>
          <Text>{item.name}</Text>
          <View style={[Styles.outerCircle, item[selectAttr] ? Styles.enableCircle : {}]}>
            {item[selectAttr] && <View style={Styles.innerCircle}></View>}
          </View>
        </View>
      </TouchableHighlight>
    ) : null;
    return (
      <TouchableHighlight
        style={[Styles.selectedContainer, disable ? Styles.disableColor : {}]}
        onPress={this.openModal}
        activeOpacity={disable || readOnly ? 1 : 0.8}
        underlayColor={disable ? Color.disableColor : 'transparent'}>
        <View style={Styles.selectedView}>
          {selectedItems}
          <Modal
            transparent={true}
            visible={this.state.isModalVisible}
            onRequestClose={this.cancelSelect}>
            <View style={{flex: 1}}>
              <TouchableHighlight
                style={Styles.modalMask}
                activeOpacity={1}
                underlayColor="transparent"
                onPress={this.cancelSelect}>
                <TouchableHighlight
                  activeOpacity={1}
                  underlayColor="transparent"
                  style={Styles.modalContainer}>
                  <View style={Styles.modal}>
                    <View style={Styles.title}><Text style={Styles.titleText}>标  签</Text></View>
                    <View style={Styles.scrollView}>
                      <ScrollView>
                        {modalItems}
                      </ScrollView>
                    </View>
                    <View style={Styles.buttonView}>
                      <TouchableHighlight
                        underlayColor="transparent"
                        style={Styles.modalButton}
                        onPress={this.cancelSelect}>
                        <Text style={Styles.buttonText}>取消</Text>
                      </TouchableHighlight>
                      <TouchableHighlight
                        underlayColor="transparent"
                        onPress={this.confirmSelect}
                        style={[Styles.modalButton, Styles.confirmButton]}>
                        <Text style={Styles.buttonText}>确定</Text>
                      </TouchableHighlight>
                    </View>
                  </View>
                </TouchableHighlight>
              </TouchableHighlight>
            </View>
          </Modal>
        </View>
      </TouchableHighlight>
    );
  }
}

LabelSelect.defaultProps = {
  selectList: [],
  selectAttr: 'isSelected',
  changeSelect: () => {},
  confirmSelect: () => {},
  disable: false,
  readOnly: false
};

LabelSelect.propTypes = {
  selectAttr: PropTypes.string,
  selectList: PropTypes.array,
  confirmSelect: PropTypes.func,
  changeSelect: PropTypes.func,
  readOnly: PropTypes.bool,
  enable: PropTypes.bool
};

export default LabelSelect;
