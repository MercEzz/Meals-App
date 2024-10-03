import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/data";
import MealDetails from "../components/MealDetails";
import SubTitle from "../components/MealDetails/SubTitle";
import List from "../components/MealDetails/List";

const MealDetailsScreen = ({ route }) => {
  const mealId = route.params.mealId;

  const mealData = MEALS.find((meal) => meal.id === mealId);

  return (
    <ScrollView style={styles.mainContainer}>
      <Image source={{ uri: mealData.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{mealData.title}</Text>
      <MealDetails
        affordability={mealData.affordability}
        complexity={mealData.complexity}
        duration={mealData.duration}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <SubTitle subTitle={"Ingredients"} />
          <List data={mealData.ingredients} />
          <SubTitle subTitle={"Steps"} />
          <List data={mealData.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailsScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontSize: 24,
    margin: 8,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listContainer: {
    width: "80%",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  mainContainer: {
    marginBottom: 24,
  },
});
