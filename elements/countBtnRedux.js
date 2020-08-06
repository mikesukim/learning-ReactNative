import React, {useState} from 'react';

import {TouchableOpacity,Text, View}  from 'react-native';

import appStyle from '../AppStyle'

import { useSelector, useDispatch } from 'react-redux'
import {
  decrement,
  increment,
  incrementByAmount,
  reset,
  selectCount,
} from '../redux//slices/counterSlice'


export default function CountBtnRedux(){

    //Define data from redux
    const count = useSelector(selectCount)
    const dispatch = useDispatch()
    const [incrementAmount, setIncrementAmount] = useState('2')
    
    //Render
    return (
        <View>
            <TouchableOpacity
                onPress={() => dispatch(increment())} 
                style={appStyle.buttonRedux}>
                <Text style={appStyle.buttonText}>{count}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => dispatch(reset())} 
                style={appStyle.buttonRedux}>
                <Text style={appStyle.buttonText}>reset</Text>
            </TouchableOpacity>
        </View>

    )
}
