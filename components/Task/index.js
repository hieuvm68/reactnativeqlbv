import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./style";

const Task = (props) => {
  const { index } = props;
  const numberText = index < 10 ? `0${index}` : index;
  const itemBg = index % 2 == 0 ? styles.even : styles.odd;
  const [screenOrientation, setScreenOrientation] = useState("portrait");

  useEffect(() => {
    const handleOrientationChange = () => {
      const { width, height } = Dimensions.get("window");
      if (width > height) {
        setScreenOrientation("landscape");
      } else {
        setScreenOrientation("portrait");
      }
    };

    Dimensions.addEventListener("change", handleOrientationChange);

    return () => {
      Dimensions.removeEventListener("change", handleOrientationChange);
    };
  }, []);

  const renderChitietdv = () => {
    if (screenOrientation === "landscape") {
      return (
        <Text numberOfLines={4} style={styles.chitietdv}>
          {props.chitietdv}
        </Text>
      );
    } else {
      return (
        <Text numberOfLines={3} style={styles.chitietdv}>
          {props.chitietdv}
        </Text>
      );
    }
  };

  return (
    <TouchableOpacity>
      <View style={[styles.item, { height: props.heightItem }]}>
        <View style={[styles.containerItem, itemBg]}>
          <View style={styles.square}>
            <Text style={styles.number}>{numberText}</Text>
          </View>
          <View style={styles.contentItem}>
            <Text style={styles.title}>{props.tendv}</Text>
            {renderChitietdv()}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Task;
