import React, { Component } from "react";
import { View, Text,StackNavigator} from "react-native";

export default class Demo extends Component {
  constructor(props) {
    super(props);
  }
 static navigationOptions={
title:"Detail"
}

  render() {

    let data=this.props.navigation.state.params.item;
     
    return (
     <View>
         <Text>First Name : {data.name.first}</Text>
         <Text>Last Name :{data.name.last}</Text>
         <Text>Gender :{data.gender}</Text>
         </View>
    );
  }
}