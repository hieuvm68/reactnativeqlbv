import {
  View,
  Text,
  Modal,
  Pressable,
  Alert,
  KeyboardAvoidingView,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import styles from "./style";
// import axios from "axios";

const ModalForm = ({ handleShowModal, modalVisible, setModalVisible }) => {
  // Sau khi nhận được phản hồi thành công từ server, gọi hàm saveClientFile với nội dung cần lưu
  const [hostTest, setHostTest] = useState("");
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [DB, setDB] = useState("");
  const onCloseModal = (modalVisible) => {
    handleShowModal(modalVisible);
  };
  const handleFormSubmit = () => {
    const data = {
      hostTest,
      user,
      pass,
      DB,
    };
    const jsonData = JSON.stringify(data);

    console.log("data", jsonData);
    const postData = async () => {
      try {
        const response = await fetch(
          "http://192.168.2.103:8000/editenv",
          // "https://nodejs-postgresql-vzu7.onrender.com/editenv",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: jsonData,
          }
        );

        if (response.ok) {
          const data = await response.json();
          console.log("dataaaaaa", data);
        } else {
          console.error("Lỗi:", response.status);
        }
      } catch (error) {
        console.error("Lỗi:", error);
      }
    };

    postData();
  };

  const handleconfig = () => {
    if (!hostTest.length && !user.length && !pass.length && !DB.length) {
      alert("Bạn cấu hình không thành công. Vui lòng thử lại!");
      return false;
    }
    handleFormSubmit(); // Keyboard.dismiss();
    onCloseModal(!modalVisible);
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.centeredView}> </View>
      <View style={styles.centeredViewConfig}>
        <View style={styles.titleConfig}>
          <Text style={styles.textTitleConfig}> CẤU HÌNH </Text>
        </View>
        <View style={styles.modalView}>
          <View style={styles.itemConfig}>
            <Text style={styles.modalText}> Host: </Text>
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
              keyboardVerticalOffset={10}
              style={[styles.input]}
            >
              <TextInput
                value={hostTest}
                onChangeText={(text) => setHostTest(text)}
              ></TextInput>
            </KeyboardAvoidingView>
          </View>
          <View style={styles.itemConfig}>
            <Text style={styles.modalText}> User: </Text>
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
              keyboardVerticalOffset={10}
              style={[styles.input]}
            >
              <TextInput
                value={user}
                onChangeText={(text) => setUser(text)}
              ></TextInput>
            </KeyboardAvoidingView>
          </View>
          <View style={styles.itemConfig}>
            <Text style={styles.modalText}> Pass: </Text>
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
              keyboardVerticalOffset={10}
              style={[styles.input]}
            >
              <TextInput
                value={pass}
                onChangeText={(text) => setPass(text)}
              ></TextInput>
            </KeyboardAvoidingView>
          </View>
          <View style={styles.itemConfig}>
            <Text style={styles.modalText}> DB: </Text>
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
              keyboardVerticalOffset={10}
              style={[styles.input]}
            >
              <TextInput
                value={DB}
                onChangeText={(text) => setDB(text)}
              ></TextInput>
            </KeyboardAvoidingView>
          </View>
          <View style={styles.submit}>
            <Pressable style={[styles.button]} onPress={handleconfig}>
              <Text style={styles.textStyle}> Đồng ý </Text>
            </Pressable>
            <Pressable
              style={[styles.button]}
              onPress={() => onCloseModal(!modalVisible)}
            >
              <Text style={styles.textStyle}> Thoát </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalForm;
