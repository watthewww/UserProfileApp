import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Dimensions,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
} from "react-native";
import SearchBar from "./components/SearchBar";
import StatBlock from "./components/StatBlock";
import Button from "./components/Button";
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <Image
          style={styles.backImg}
          source={require("./assets/back.png")}
        ></Image>
          <SearchBar></SearchBar>
        <Image
          style={styles.settingImg}
          source={require("./assets/setting.png")}
        ></Image>
      </View>

      <View style={styles.infoContainer}>
        <Image
          style={styles.avatar}
          source={require("./assets/ava.jpg")}
        ></Image>
        <View style={styles.textInfoContainer}>
          <Text>Prashant Kumar Singh</Text>
          <Text>@devprashantt</Text>
          <Text>Love Editing & Designing!</Text>
        </View>
      </View>

      <View style={styles.statContainer}>
        <StatBlock title="Post" count="20"></StatBlock>
        <StatBlock title="Followers" count="378"></StatBlock>
        <StatBlock title="Following" count="99"></StatBlock>
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Edit Profile"></Button>
        <Button title="Follow"></Button>
      </View>

      <View style={styles.galleryContainer}>
        <ScrollView>
          <View style={styles.gallery}>
            <Image
              style={styles.galleryItem}
              source={require("./assets/ava.jpg")}
            ></Image>
            <Image
              style={styles.galleryItem}
              source={require("./assets/ava.jpg")}
            ></Image>
            <Image
              style={styles.galleryItem}
              source={require("./assets/ava.jpg")}
            ></Image>
            <Image
              style={styles.galleryItem}
              source={require("./assets/ava.jpg")}
            ></Image>
            <Image
              style={styles.galleryItem}
              source={require("./assets/ava.jpg")}
            ></Image>
            <Image
              style={styles.galleryItem}
              source={require("./assets/ava.jpg")}
            ></Image>
            <Image
              style={styles.galleryItem}
              source={require("./assets/ava.jpg")}
            ></Image>
            <Image
              style={styles.galleryItem}
              source={require("./assets/ava.jpg")}
            ></Image>
            <Image
              style={styles.galleryItem}
              source={require("./assets/ava.jpg")}
            ></Image>
            <Image
              style={styles.galleryItem}
              source={require("./assets/ava.jpg")}
            ></Image>
            <Image
              style={styles.galleryItem}
              source={require("./assets/ava.jpg")}
            ></Image>
            <Image
              style={styles.galleryItem}
              source={require("./assets/ava.jpg")}
            ></Image>
          </View>
        </ScrollView>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  searchContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 20,
    justifyContent: 'space-evenly',
    width: '100%'
  },
  backImg: {
    width: 30,
    height: 30,
  },
  settingImg: {
    width: 30,
    height: 30,
  },
  infoContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    width: "80%",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  textInfoContainer: {
    flex: 2,
    paddingLeft: 30,
  },
  statContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  galleryContainer: {
    flex: 5,
  },
  gallery: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "center",
    justifyContent: "center",
    gap: 10,
  },
  galleryItem: {
    width: 120,
    height: 120,
  },
});
