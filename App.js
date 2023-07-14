import React, { useEffect, useState } from "react";
import {
  ScrollView,
  View,
  SafeAreaView,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import styles from "./App.components";
import Header from "./components/Header";
import Task from "./components/Task";
import ModalForm from "./components/ModalForm";

export default function App() {
  const [taskList, setTaskList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const itemCount = 8;
  const screenHeight = Dimensions.get("window").height; // Chiều cao của màn hình
  const desiredHeight = (screenHeight * 0.82) / itemCount;

  const handleShowModal = (modalVisible) => {
    setModalVisible(modalVisible);
  };

  useEffect(() => {
    const getData = async () => {
      await fetch("http://192.168.2.103:8000/todos")
        .then((response) => response.json())
        .then((data) => {
          setTaskList(data);
          console.log(data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    };
    getData();
  }, []);

  return (
    <View style={styles.container}>
      <Header modalVisible={modalVisible} handleShowModal={handleShowModal} />
      <View style={styles.line}></View>
      <View style={styles.body}>
        {taskList ? (
          <ScrollView>
            {taskList?.map((task, index) => (
              <Task
                heightItem={desiredHeight}
                key={index}
                index={index + 1}
                tendv={task.tendv}
                chitietdv={task.chitietdv}
                id={task.id}
              />
            ))}
          </ScrollView>
        ) : (
          <SafeAreaView style={styles.load}>
            <ActivityIndicator size="large" />
          </SafeAreaView>
        )}
      </View>
      <ModalForm
        modalVisible={modalVisible}
        handleShowModal={handleShowModal}
        setModalVisible={setModalVisible}
      />
    </View>
  );
}
