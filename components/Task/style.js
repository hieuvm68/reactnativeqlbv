import { StyleSheet } from "react-native";
import color from "../../contains/color";

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    marginBottom: 6,
    marginHorizontal: 10,
  },
  containerItem: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  even: {
    backgroundColor: color.evenItemBackGround,
  },
  odd: {
    backgroundColor: color.oddItemBackGround,
  },
  square: {
    width: 45,
    height: 45,
    borderRadius: 100,
    backgroundColor: color.white,
    justifyContent: "center",
    marginHorizontal: 13,
  },
  number: {
    fontSize: 12,
    textAlign: "center",
    color: color.number,
  },
  contentItem: {
    flex: 1,
    width: "80%",
    overflow: "hidden",
    marginHorizontal: 13,
    paddingVertical: 2,
  },
  title: {
    fontSize: 12,
    color: color.description,
  },
  description: {
    fontSize: 11,
    textAlign: "justify",
    letterSpacing: -0.3,
    color: color.description,
  },
});
export default styles;
