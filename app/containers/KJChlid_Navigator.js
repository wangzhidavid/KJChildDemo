
import { StackNavigator,TabNavigator,TabBarBottom } from 'react-navigation';
import { connect } from 'react-redux';

import Home from './Home/Home.js'
import Groups from './Groups/Group.js'
import Fair from './Fair/Fair.js'
import FairCategory from './Fair/FairCategory'
import FairScorePage from './Fair/FairScorePage'
import Mine from './Mine/Mine.js'
import MyBaby from '../pages/myBaby.js'
import Evaluation from '../pages/Evaluation.js'

import Regist from './Mine/Regist.js'
import Login from './Mine/Login.js'
import Course from './course/course.js'
import CourseDetails from './course/CourseDetails.js'
import EvaluateCommit from './course/EvaluateCommit.js'



import {tabBarIconStyle} from '../utils/KJStylesE.js'

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';


const RootTabNav = TabNavigator(
  {
    Home: { screen: Home },
    Groups: { screen: Groups },
    Fair:{screen:Fair},
    Mine: { screen: Mine },
  },
  {
    swipeEnabled: false,
    animationEnabled: false,
    lazyLoad: true,
    navigationOptions:{
      headerLeft:null,
      gesturesEnabled:false,
    },
    tabBarComponent:TabBarBottom,
    tabBarPosition:'bottom',
    tabBarOptions: {
      activeTintColor: tabBarIconStyle.activeColor,
      inactiveTintColor: tabBarIconStyle.inactiveColor,
      labelStyle: {
          fontSize: tabBarIconStyle.labelFontSize,
      },
    },
  }
);


const SimpleAppReactNavigation = StackNavigator(
  {
    RootTabNav: { screen: RootTabNav },
    MyBaby:{ screen: MyBaby },
    Regist:{ screen:Regist},
    Login:{screen:Login},
    Evaluation:{screen:Evaluation},
    Course:{screen:Course},
    CourseDetails:{screen:CourseDetails},
    EvaluateCommit:{screen:EvaluateCommit},
    FairCategory:{screen:FairCategory},
    FairScorePage:{screen:FairScorePage},
  },
  {
    initialRouteName:'RootTabNav',
  }
);

export default connect()(SimpleAppReactNavigation);
