import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import Game from '~/containers/Game';
import Ranking from '~/containers/Ranking';

const Tab = createBottomTabNavigator();

function MyTabBar({state, descriptors, navigation}) {
  return (
    <View style={{flexDirection: 'row'}}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;
        const icon =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.icon !== undefined
            ? options.icon
            : 'coffee';

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            activeOpacity={0.95}
            style={{
              flex: 1,
              flexDirection: 'column',
              alignItems: 'center',

              paddingVertical: 8,

              backgroundColor: '#50803C',
            }}>
            <FontAwesomeIcon
              icon={icon}
              size={28}
              color={isFocused ? '#94D27B' : '#B8E1A7'}
              style={{marginBottom: 2}}
            />
            <Text
              style={[
                styles.text,
                {fontSize: 16, color: isFocused ? '#94D27B' : '#B8E1A7'},
              ]}>
              {String(label).toLowerCase()}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
      <Tab.Screen
        name="Game"
        component={Game}
        options={{title: 'Jogar', icon: 'gamepad'}}
      />
      <Tab.Screen
        name="Ranking"
        component={Ranking}
        options={{title: 'Ranking', icon: 'award'}}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;

const styles = StyleSheet.create({
  text: {
    // fontFamily: 'ComicNeue-Bold',
    fontFamily: 'KGWhYYouGoTtABeSoMeAn',
  },
});
