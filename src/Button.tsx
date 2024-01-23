import React from 'react';
import {
  Animated,
  StyleSheet,
  type GestureResponderEvent,
  type StyleProp,
  type TextStyle,
  type ViewStyle,
} from 'react-native';
import { DefaultTheme } from 'react-native-paper/src/core/theming';
import RNPButton from 'react-native-paper/src/components/Button/Button';
import { type ButtonMode } from 'react-native-paper/src/components/Button/utils';
import { type IconSource } from 'react-native-paper/src/components/Icon';

export interface AppColorsInterface {
  primary: string;
}

export interface ButtonProps {
  mode?: ButtonMode;
  style?: Animated.WithAnimatedValue<StyleProp<ViewStyle>>;
  onPress?: (e: GestureResponderEvent) => void;
  textColor?: string;
  loading?: boolean;
  disabled?: boolean;
  leftIcon?: IconSource;
  rightIcon?: IconSource;
  labelStyle?: StyleProp<TextStyle>;
  testID?: string;
  appColors?: AppColorsInterface;
  children?: React.ReactNode;
}

function Button(props: ButtonProps) {
  const buttonTextColors = {
    'contained': '#FFFFFF',
    'text': props?.appColors?.primary,
    'outlined': props?.appColors?.primary,
    'elevated': '#FFFFFF',
    'contained-tonal': '#FFFFFF',
  };

  const buttonBackgroundColors = {
    'contained': props?.appColors?.primary,
    'text': 'transparent',
    'outlined': 'transparent',
    'elevated': props?.appColors?.primary,
    'contained-tonal': props?.appColors?.primary,
  };

  function onPress(e: GestureResponderEvent) {
    if (props?.onPress!) {
      props?.onPress(e);
    }
  }

  return (
    <RNPButton
      testID={`${props?.testID}.button`}
      theme={DefaultTheme}
      mode={props?.mode ?? 'contained'}
      style={[
        styles()?.container,
        {
          ...(props?.disabled
            ? {}
            : {
                backgroundColor:
                  buttonBackgroundColors[props?.mode! ?? 'contained'],
              }),
          ...(props?.disabled
            ? {}
            : props?.mode! === 'outlined'
            ? styles(props?.appColors)?.outlinedBorderStyle
            : {}),
        },
        props?.style,
      ]}
      contentStyle={{
        flexDirection: props?.rightIcon ? 'row-reverse' : 'row',
      }}
      labelStyle={[styles()?.lableStyle, props?.labelStyle]}
      onPress={onPress}
      textColor={
        props?.textColor ?? buttonTextColors[props?.mode! ?? 'contained']
      }
      loading={props?.loading}
      disabled={props?.disabled}
      icon={props?.leftIcon ?? props?.rightIcon}
    >
      {props?.children}
    </RNPButton>
  );
}

const styles = (appColors?: AppColorsInterface) =>
  StyleSheet.create({
    container: {
      borderRadius: 5,
    },
    lableStyle: {
      paddingVertical: 5,
    },
    outlinedBorderStyle: {
      borderColor: appColors?.primary,
    },
  });

Button.defaultProps = {
  appColors: {
    primary: '#3075bb',
  },
};

export default Button;
