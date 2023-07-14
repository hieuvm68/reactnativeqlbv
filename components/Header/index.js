import { View, Text, Image, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import webpImage from "../../assets/favicon.jpg";
import styles from "./style";
const Header = ({ handleShowModal, modalVisible }) => {
  const onShowModal = (modalVisible) => {
    handleShowModal(modalVisible);
  };
  const [clickCount, setClickCount] = useState(0);

  const handleButtonClick = () => {
    setClickCount((prevCount) => prevCount + 1);
  };
  useEffect(() => {
    if (clickCount >= 10) {
      onShowModal(!modalVisible);
      setClickCount(0);
    } else {
      onShowModal(modalVisible);
    }
  }, [clickCount]);
  return (
    <View style={styles.header}>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={handleButtonClick}
      >
        <Image source={webpImage} style={styles.logoHeader} />
      </Pressable>

      <View style={styles.headerRight}>
        <Text style={styles.headerTextTop}>BỆNH VIỆN QUÂN Y 7A</Text>
        <Text style={styles.headerTextBottom}>BỐC SỐ THỨ TỰ VÀO ĐĂNG KÝ</Text>
      </View>
    </View>
  );
};

export default Header;
