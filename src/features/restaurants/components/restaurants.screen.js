import React from "react";
import { StatusBar, StyleSheet, Text, View, SafeAreaView } from "react-native";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "./restaurant-info-card.component";

const SafeArea = styled.SafeAreaView`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchBox = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const ListOfRestaurants = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => {
    setSearchQuery(query);
  };
  return (
    // We give the SafeAreaView elem flex: 1 coz its the parent elem in this render, but it also has its own parent-the App comp
    // We are hereby telling it to fill its parent (rather than just grow with its contents)
    <SafeArea>
      <SearchBox>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </SearchBox>
      {/* The search result view on the other hand is given a flex of 1 coz its ok for it to fill the remaining space available */}
      {/* Note that we could've given it a width of 100% instead, however it could grow n overflow it parent, while flex wouldn't. */}
      {/* Flex would make it grow responsively, n dynamically, and so it is preferrable */}
      <ListOfRestaurants>
        <RestaurantInfoCard />
      </ListOfRestaurants>
    </SafeArea>
  );
};
