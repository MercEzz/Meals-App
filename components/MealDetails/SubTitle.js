import { StyleSheet, Text } from "react-native";

const SubTitle = ({ subTitle }) => {
  return <Text style={styles.subTitle}>{subTitle}</Text>;
};

export default SubTitle;

const styles = StyleSheet.create({
  subTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#e2b497",
    textAlign: "center",
    marginHorizontal: 12,
    marginVertical: 4,
    padding: 6,
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,
  },
});
