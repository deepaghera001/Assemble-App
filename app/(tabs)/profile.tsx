import { StyleSheet, Text, View } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <Text style={styles.title}>John Doe</Text>
        <Text style={styles.subtitle}>Software Developer</Text>
      </View>
      <View style={styles.profileContent}>
        <Text style={styles.bio}>
          Passionate about building innovative mobile applications with React Native.
          Currently working on exciting projects at Awesome Company.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 30,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  profileContent: {
    width: '100%',
  },
  bio: {
    textAlign: 'center',
    lineHeight: 24,
    color: '#444',
  },
});