import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import LabelSelect from '../LabelSelect';

import mock from './__mock__/mock';

const {Label, ModalItem} = LabelSelect;

let selectedItems = mock.selectedList.map((item, index) =>
  <Label
    key={'label-' + index}
    data={item}
    onCancel={() => {mock.selectedList.splice(index);}}>
    {item.text}
  </Label>
);

let otherItems = mock.list.map((item, index) =>
  <ModalItem
    key={'modal-item-' + index}
    data={item}>
    {item.text}
  </ModalItem>
);

it('renders enabled LabelSelect', () => {
  let tree = renderer.create(
    <LabelSelect
      title="Test1"
      onConfirm={() => {}}
      >
      {selectedItems}
      {otherItems}
    </LabelSelect>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders readOnly LabelSelect', () => {
  let tree = renderer.create(
    <LabelSelect
      readOnly={true}
      title="Test2"
      onConfirm={() => {}}
      >
      {selectedItems}
      {otherItems}
    </LabelSelect>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders disabled LabelSelect', () => {
  let tree = renderer.create(
    <LabelSelect
      enable={false}
      title="Test3"
      onConfirm={() => {}}
      >
      {selectedItems}
      {otherItems}
    </LabelSelect>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders a modal item', () => {
  let item = mock.list[0];
  expect(renderer.create(
    <ModalItem data={item}>{item.text}</ModalItem>
  )).toMatchSnapshot();
});
