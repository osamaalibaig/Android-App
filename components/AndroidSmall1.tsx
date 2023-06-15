import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const AndroidSmall1 = () => {
  return (
    <View style={[styles.androidSmall1, styles.kadomPosition]}>
      <Text style={[styles.kadom, styles.kadomPosition]}>Kadom</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  kadomPosition: {
    left: "50%",
    position: "absolute",
  },
  kadom: {
    marginTop: -120,
    marginLeft: -48,
    top: "50%",
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.black,
    textAlign: "center",
    width: 96,
    height: 40,
  },
  androidSmall1: {
    marginLeft: -180,
    top: 0,
    backgroundColor: Color.white,
    width: 360,
    height: 640,
    overflow: "hidden",
  },
});

export default AndroidSmall1;
