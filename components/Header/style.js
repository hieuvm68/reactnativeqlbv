import { StyleSheet } from "react-native";
import color from "../../contains/color";
const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
  },
  headerRight: {
    flex: 3,
    justifyContent: "center",
    width: "100%",
  },
  headerTextTop: {
    fontSize: 20,
    color: color.organizationName,
    textAlign: "center",
  },
  headerTextBottom: {
    fontSize: 16,
    color: color.softwareName,
    textAlign: "center",
    fontWeight: "700",
    paddingHorizontal: 34,
  },
  logoHeader: {
    resizeMode: "contain",
    width: 90,
    height: 55,
    flex: 1,
    padding: 15,
    marginHorizontal: 15,
  },
  /////
});
export default styles;
