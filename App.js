import React from 'react';
import {View, Text} from 'react-native';

const Welcome = ({code, name}) => {
  return (
    <View>
      <Text>
        Welcome to {code} - {name}
      </Text>
    </View>
  );
};

class ModuleInfo extends React.Component {
  render() {
    return (
      <View>
        <Text> </Text>
        <Text>These are my modules this semester:</Text>
        <Welcome code="C346" name="Mobile App Development" />
        <Welcome code="C237" name="Web Application Development" />
        <Welcome code="C270" name="Software Engineering" />
      </View>
    );
  }
}

export default ModuleInfo;