import { FlatList } from "react-native";
import { CATEGORIES } from "../data/data";
import CategoryTile from "../components/CategoryTile";

function renderCategoryItem(itemData) {
  return (
    <CategoryTile title={itemData.item.title} color={itemData.item.color} />
  );
}

const CategoriesScreen = () => {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;
