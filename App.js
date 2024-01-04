/* eslint-disable comma-dangle */
/* eslint-disable eol-last */
/* eslint-disable no-unused-vars */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable space-infix-ops */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */






/*Reanimated Demo 3 for Gesture Handle using Animation. For Reference : https://www.youtube.com/watch?v=MZVFd-mTSUg&t=12s  */






//import liraries
import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { GestureHandlerRootView, PanGestureHandler } from 'react-native-gesture-handler';
import Animated, { useSharedValue, withSpring, useAnimatedGestureHandler, useAnimatedStyle, } from 'react-native-reanimated';

// create a component
const App = () => {
  
  
  
  
  const x=useSharedValue(0);
  const y=useSharedValue(0);






  const gestureHandler = useAnimatedGestureHandler({
  onStart:(e,c)=>{
    c.startX=x.value;
    c.startY=y.value;
  },
  onActive:(e,c)=>{
    x.value=c.startX+e.translationX;
    y.value=c.startY+e.translationY;
    
  },
  onEnd:(e,c)=>{
    
    
    x.value=withSpring(0);
    y.value=withSpring(0);
    
    
    /* 
    If we want to place our orange box at some specific position of x and y then we will pass the value like here we have passed 100, so when we will stop our animation i.e. when we will once pull our box from its initial state and release it, then the box will get placed in position of 100 in x and y automatically with spring effect.

    x.value=withSpring(100);
    y.value=withSpring(100); 
    
    */
    
  }
});


const animatedStyle=useAnimatedStyle(()=>{
  return {
    transform:[{translateX:x.value},{translateY:y.value}]
  };
});


  return (
    <GestureHandlerRootView>
    
    <PanGestureHandler onGestureEvent={gestureHandler}>
    <Animated.View style={[{width:100,height:100,backgroundColor:'orange'},animatedStyle]}></Animated.View>
      </PanGestureHandler>
    
    </GestureHandlerRootView>
  );
};



//make this component available to the app
export default App;