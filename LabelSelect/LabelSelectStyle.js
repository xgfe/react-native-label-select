/**
 * Created by TinySymphony on 2017-01-03.
 */

import {Dimensions, StyleSheet} from 'react-native';
const window = Dimensions.get('window');
const {width, height, scale} = window;

export const Color = {
  disableColor: '#eaeaea',
  main: '#40cca2'
};

export default StyleSheet.create({
  selectedView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  selectedItem: {
    margin: 4,
    borderWidth: 2 / scale,
    borderRadius: 6,
    borderColor: '#aaa',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    backgroundColor: '#f6f6f6'
  },
  addItem: {
    padding: 7
  },
  disableColor: {
    backgroundColor: Color.disableColor
  },
  labelText: {
    padding: 6,
    fontSize: 14,
    lineHeight: 14
  },
  closeContainer: {
    padding: 8,
    borderLeftWidth: 2 / scale,
    borderLeftColor: '#c8c8c8'
  },
  closeIcon: {
    width: 10,
    height: 10
  },
  addIcon: {
    width: 12,
    height: 12
  },
  modalMask: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000077'
  },
  modalContainer: {},
  modal: {
    height: height * 0.6,
    width: width * 0.6,
    overflow: 'hidden',
    borderRadius: 10,
    backgroundColor: '#fff'
  },
  title: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 2 / scale,
    borderBottomColor: '#bbb'
  },
  titleText: {
    fontSize: 18,
    lineHeight: 20
  },
  scrollView: {
    height: height * 0.6 - 80
  },
  buttonView: {
    height: 40,
    backgroundColor: Color.main,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  modalButton: {
    width: width * 0.3,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalItem: {
    height: 50,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 2 / scale,
    borderBottomColor: '#bbb'
  },
  modalText: {
    fontSize: 16
  },
  buttonText: {
    color: '#fff',
    fontSize: 16
  },
  confirmButton: {
    borderLeftWidth: 0.5,
    borderLeftColor: '#fff'
  },
  outerCircle: {
    borderWidth: 2 / scale,
    borderColor: '#888',
    width: 20,
    height: 20,
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center'
  },
  enableCircle: {
    borderColor: Color.main
  },
  innerCircle: {
    backgroundColor: Color.main,
    width: 16,
    height: 16,
    borderRadius: 8,
    overflow: 'hidden'
  },
  disableText: {
    color: '#999'
  }
});
