import React from 'react';
import {View, Text, ImageBackground, StyleSheet} from 'react-native';

// React Stateless Function
function FlexScreen(props) {
  return (
    <View
      style={{
        backgroundColor: "grey",
        flex: 1,
        // height: 100,
        flexDirection: "row", // y-axis = column, x-axis = row
        justifyContent: "center", // flexDirection x/y center axis
        // justifyContent: "flex-start",// left/top aligned
        // justifyContent: "flex-end", // right/bottom aligned
        // justifyContent: "space-around/between/evenly", // spread
        alignItems: "center", // vertical aligned for row justify per line / not applicable for wrap
        // alignItems: "flex-end", // bottom aligned for row justify
        // alignItems: "flex-end", // default top aligned for row justify
        // alignItems: "baseline", // bottom aligned for the group
        // alignItems: "stretch", // default top aligned for the group

        // flexWrap: "no-wrap", //default no wrapping per line
        // flexWrap: "wrap", //wrapping of content / not applicable for alignItems when wrapped
        // alignContent: "flex-start", // default wrap to flexWrap
        // alignContent: "center", // Align wrapped content vertically
        // alignContent: "flex-end", // Bottom aligned for the entire content
        // alignContent: "space-around", // Spaced
      }}
    >
      <View
        style={{
          backgroundColor: "dodgerblue",
          // flex: -1, // fill available spaces / no shrink
          flex: 1, // fill available row/column spaces
          width: 100,
          height: 400,
          // flexShrink: 1, // same as flex -1 / dont shrink
          // flexBasis: 100, // map for width or height
          // flexGrow: 1, // same as flex 1, fills the available row/colum spaces
          // override alignment for individial views
          // alignSelf: "flex-start", // align this to top
          // alignSelf: "flex-end", // align this to bottom
          // alignSelf: "baseline", // align everything on top
          // alignSelf: "stretch", // fills when no height/width
          // alignSelf: "auto", // default / parent alignment
          // alignSelf: "center", // center aligned

        }} />
      <View
        style={{
          backgroundColor: "yellow",
          //flex: 1,
          width: 100,
          height: 100,
          // position: "relative", // absolute by parent
          // top: -20,
          // left: 20,
        }} />
      <View
        style={{
          backgroundColor: "red",
          //flex: 1,
          width: 100,
          height: 100,
        }} />
      {/* <View
      style={{
        backgroundColor: "grey",
        //flex: 1,
        width: 100,
        height: 100,
      }} />
    <View
      style={{
        backgroundColor: "green",
        //flex: 1,
        width: 100,
        height: 100,
      }} /> */}

    </View>
  );
}

const style = StyleSheet.create({
  background: {
    flex: 1,
  }
})
export default FlexScreen;