import {StyleSheet} from "react-native";

export default styles = StyleSheet.create({
  toolbar: {
    backgroundColor: '#3F51B5',
    height: 56,
    alignSelf: 'stretch',
    textAlign: 'center',
  },
  scrollView: {
    // flex: 1
  },
  cardStyle: {
    backgroundColor: '#ffffff',
    borderRadius: 2,
    borderColor: '#ffffff',
    shadowColor: 'rgba(0, 0, 0, 0.12)',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 2,
    },
  },
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#fcfcfc',
  },
  image: {
    alignSelf: 'stretch',
    width: '100%',
    height: 250,
    resizeMode: 'cover',
  },
});