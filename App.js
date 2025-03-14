import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import { styles } from './styles/AppStyles';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* App Logo */}
        <Image
          source={require('./assets/logo.png')} 
          style={styles.logo}
        />

        {/* App Title */}
        <Text style={styles.title}>Welcome to MyApp</Text>

        {/* App Description */}
        <Text style={styles.description}>
          The perfect app for all your needs. Simple, fast, and easy to use.
        </Text>

        {/* Call to Action Button */}
        <TouchableOpacity style={styles.button} onPress={() => alert('Get Started!')}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default App; 