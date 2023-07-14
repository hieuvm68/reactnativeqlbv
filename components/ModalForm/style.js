import { StyleSheet } from "react-native";
import color from "../../contains/color";
const styles = StyleSheet.create({
  centeredView: {
    width: "100%",
    height: "100%",
    backgroundColor: color.white,
    opacity: 0.52,
  },
  centeredViewConfig: {
    position: "absolute",
    width: "100%",
    height: "100%",
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  modalView: {
    backgroundColor: color.bgConfig,
    padding: 18,
    alignItems: "center",
    width: "75%",
    flexDirection: "column",
    alignItems: "center",
  },
  titleConfig: {
    width: "75%",
    height: "5%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: color.primary,
  },
  textTitleConfig: {
    color: color.white,
    fontWeight: "bold",
    fontSize: 24,
  },
  textStyle: {
    textAlign: "center",
    fontSize: 24,
    borderColor: "#328048",
    borderWidth: 1,
    fontWeight: "bold",
  },
  modalText: {
    fontSize: 20,
    fontWeight: "500",
    textAlign: "center",
    color: "black",
  },

  itemConfig: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "justify",
  },
  input: {
    width: "80%",
    backgroundColor: color.white,
    borderRadius: 3,
    borderColor: "#328048",
    borderWidth: 1,
    paddingHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  submit: {
    marginTop: 22,
    flexDirection: "row",
    width: "100%",
    justifyContent: "flex-end",
  },
  button: {
    borderRadius: 5,
    paddingHorizontal: 10,
    width: "40%",
  },
});
export default styles;
