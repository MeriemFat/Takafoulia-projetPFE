import React, { useLayoutEffect, useRef, useState } from "react";
import {
  ScrollView,
  Text,
  View,
  Image,
  Dimensions,
  TouchableHighlight,
} from "react-native";
import styles from "./styles";
import Carousel, { Pagination } from "react-native-snap-carousel";
import {
  getIngredientName,
  getCategoryName,
  getCategoryById,
} from "../../data/MockDataAPI";
import BackButton from "../../components/BackButton/BackButton";
import ViewIngredientsButton from "../../components/ViewIngredientsButton/ViewIngredientsButton";
import { categories } from "../../data/dataArrays";

const { width: viewportWidth } = Dimensions.get("window");
export default function RecipeScreen({ navigation, route }) {

  const item = route.params?.item; 
// Obtenez le nom de la catégorie
const categoryName = getCategoryName(item?.categoryId);

// Vérifiez si le nom de la catégorie est défini
if (!categoryName) {
  return <Text>Category name not found</Text>;
}

// Convertissez le nom de la catégorie en majuscules
const upperCaseCategoryName = categoryName.toUpperCase();

  const categories = item ? getCategoryById(item.categoryId) : null; // Vérifiez si item est défini avant d'accéder à ses propriétés
  const title = item ? getCategoryName(item.categoryId) : null;
  
  // Vérifiez si item est défini et si item.photosArray est défini avant d'accéder à ses propriétés
  const photosArray = item && item.photosArray ? item.photosArray : [];
  
  const [activeSlide, setActiveSlide] = useState(0);

  const slider1Ref = useRef();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTransparent: true,
      headerLeft: () => (
        <BackButton
          onPress={() => {
            navigation.goBack();
          }}
        />
      ),
      headerRight: () => <View />,
    });
  }, [navigation]);

  const renderImage = ({ item }) => (
    <TouchableHighlight>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: item }} />
      </View>
    </TouchableHighlight>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.carouselContainer}>
        <View style={styles.carousel}>
          <Carousel
            ref={slider1Ref}
            data={photosArray} // Utilisez la variable photosArray définie ci-dessus
            renderItem={renderImage}
            sliderWidth={viewportWidth}
            itemWidth={viewportWidth}
            inactiveSlideScale={1}
            inactiveSlideOpacity={1}
            firstItem={0}
            loop={false}
            autoplay={false}
            autoplayDelay={500}
            autoplayInterval={3000}
            onSnapToItem={(index) => setActiveSlide(index)}
          />
          <Pagination
            dotsLength={photosArray.length} // Utilisez la variable photosArray définie ci-dessus
            activeDotIndex={activeSlide}
            containerStyle={styles.paginationContainer}
            dotColor="rgba(255, 255, 255, 0.92)"
            dotStyle={styles.paginationDot}
            inactiveDotColor="white"
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
            carouselRef={slider1Ref.current}
            tappableDots={!!slider1Ref.current}
          />
        </View>
      </View>
      {item && ( // Assurez-vous que item est défini avant d'accéder à ses propriétés
        <View style={styles.infoRecipeContainer}>
          <Text style={styles.infoRecipeName}>{item.title}</Text>
          <View style={styles.infoContainer}>
            <TouchableHighlight
              onPress={() =>
                navigation.navigate("RecipesList", { categories, title })
              }
            >
              <Text style={styles.categories}>
              {getCategoryName(item.categoryId).toUpperCase()}
              </Text>
            </TouchableHighlight>
          </View>
  
          <View style={styles.infoContainer}>
            <Image
              style={styles.infoPhoto}
              source={require("../../assets/icons/time.png")}
            />
            <Text style={styles.infoRecipe}>{item.time} minutes </Text>
          </View>
  
          <View style={styles.infoContainer}>
            <ViewIngredientsButton
              onPress={() => {
                let ingredients = item.ingredients;
                let title = "Ingredients for " + item.title;
                navigation.navigate("IngredientsDetails", { ingredients, title });
              }}
            />
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoDescriptionRecipe}>{item.description}</Text>
          </View>
        </View>
      )}
    </ScrollView>
  );
}

