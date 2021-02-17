import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  content: {
    marginHorizontal: "2.5%",
  },
  headerContainer: {
    paddingTop: Platform.OS === "ios" ? 50 : 40,
    paddingBottom: 10,
    backgroundColor: "#4981e2",
    alignItems: "center",
  },
  headerText: {
    fontFamily: "Lato-Black",
    fontSize: 20,
    textTransform: "uppercase",
    color: "#fff",
  },
  image: {
    width: "100%",
    height: 150,
    marginVertical: 20,
  },
  label: {
    fontFamily: "Lato-Black",
    fontSize: 20,
    textTransform: "uppercase",
    marginVertical: 10,
  },
  picker: {
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "#4981e2",
    marginVertical: 10,
  },
  quoteBtn: {
    backgroundColor: "#4981e2",
    padding: 10,
    marginTop: 20,
    alignItems: "center",
  },
  quoteText: { fontFamily: "Lato-Black", fontSize: 20, textTransform: "uppercase", color: "#fff" },
  priceView: {
    backgroundColor: "#4981e2",
    marginVertical: 10,
    paddingVertical: "2.5%",
    justifyContent: "space-between",

    flex: 1,
  },
  priceText: {
    paddingVertical: 5,
    marginHorizontal: "2.5%",
    color: "#fff",
    fontFamily: "Lato-Regular",
    fontSize: 18,
  },
  priceSpan: {
    fontFamily: "Lato-Black",
    fontSize: 20,
  },
  spinner: {
    justifyContent: "center",
    marginTop: 60,
  },
});

export default styles;
