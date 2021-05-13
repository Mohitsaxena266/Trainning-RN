/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  const callFunction = () => {
    for (let i = 0; i < 10; i++) {
      setTimeout(() => {
        console.log('i value is', i);
      }, 1000);
    }

    // if (true) {
    //   var a = 20;
    //   console.log('Method call', a);
    // }
    // console.log('outer Method call', a);
  };
  function somevalue() {
    return 'my Name';
  }
  function defaultParameters(name = somevalue) {
    console.log('default parameters', name);
  }
  function templeteString() {
    // let value = 'either you run the code or code run you';
    let by = 'Mohit Saxena';

    console.log('either you run the code or code run you' + 'buy' + 'Hello');
    console.log(`either you run the code or code run you ${by} Hello`);
  }
  function findIndexVal() {
    let data = [10, 20, 7, 50, 1];
    console.log('findIndex');
    let result = data.find(function (item) {
      return item < 10;
    });
    //findIndex
    //its shows first index which got in array
    console.log('Result', result);
  }
  //********************    ARROW FUNCTION      ********************************* */
  let arrow1 = function () {
    return 1;
  };
  let arrow2 = () => 1;
  let data1 = [10, 20, 7, 50, 1];
  let newData = data1.map((item) => item * 2);

  class Fruits {
    name = 'orange'; //No need let and var
    constructor() {
      console.log('Fruits constructor', this.name);
    }
    getFruits() {
      console.log('Fruits Function');
    }
  }
  function callClass() {
    let f1 = new Fruits();
    f1.getFruits();
  }
  //********************    ARROW FUNCTION      ********************************* */
  //********************     Inharitance    ******************************** */
  class Categories {
    seniorEmp() {
      return 'A is a Senior Person';
    }
  }
  class Employees extends Categories {
    empName() {
      return 'B is a Employe in HCL';
    }
  }
  function InheritanceFunction() {
    let E1 = new Employees();
    console.log(E1.seniorEmp);
  }
  //********************     Inharitance    ******************************** */

  //************ LET AND VAR  ********************** */
  function letVar() {
    for (let i = 0; i < 5; i++) {
      console.log(i);
    }
    console.log('value us ', i);
    // var => function - scope
    // ES6 => let and const => block - scoped
  }
  //************ LET AND VAR  ********************** */

  //************* REST OPERATOR */
  function fruitsRest(a, ...b) {
    console.log('first parameter', a);
    console.log('rest parameter', b);
  }
  function spredOperator() {
    let fruits = ['apple', 'banana', 'kiwi'];
    let anotherArray = ['car', ...fruits, 'train'];
    let newFruits = [...fruits];
    // [...fruits];
    newFruits.push('test');
    // console.log(newFruits);
    console.log(anotherArray);
  }
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text>This is a exapmle of ESMA</Text>
        {/* {letVar()} */}
        {/* {defaultParameters('mohit')} */}
        {/* {templeteString()} */}
        {/* {findIndexVal()} */}
        {/* {console.log(arrow1())}
        {console.log(arrow2())} */}
        {/* {console.log(newData)} */}
        {/* {callClass()} */}
        {/* {InheritanceFunction()} */}
        {/* {fruitsRest('apple', 'banana', 'orange')} */}
        {/* {spredOperator()} */}
      </SafeAreaView>
    </>
  );
};

export default App;
