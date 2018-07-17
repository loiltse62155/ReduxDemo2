import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import {connect} from 'react-redux';
 class ChangrColor extends Component {
    state = {}
   
    render() {
        const color = this.props.highlight ? 'red' : 'blue';
        return (
            <TouchableOpacity  onPress={
                () => {
                    this.props.dispatch({type: 'CHANGECOLOR'});
                }
            }>
                <Text style = {{color}}>
                    Change Color
                </Text>
            </TouchableOpacity>
        );
    }
}

export default connect(function(state){
   return  {highlight: state.highlight};
})(ChangrColor);