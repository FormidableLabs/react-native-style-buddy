import { extractTwColor } from "./handlers/twColors";
import { StyleSheet } from "react-native";

export const createDefaultTheme = ({
  baseFontSize = 14,
}: {
  baseFontSize?: number;
} = {}) =>
  ({
    spacing: {
      "0": 0,
      pt: 1,
      "0.5": 2,
      "1": 4,
      "1.5": 6,
      "2": 8,
      "2.5": 10,
      "3": 12,
      "3.5": 14,
      "4": 16,
      "5": 20,
      "6": 24,
      "7": 28,
      "8": 32,
      "9": 36,
      "10": 40,
      "11": 44,
      "12": 48,
      "14": 56,
      "16": 64,
      "20": 80,
      "24": 96,
      "28": 112,
      "32": 128,
      "36": 144,
      "40": 160,
      "48": 192,
      "56": 224,
      "64": 256,
      "72": 288,
      "80": 320,
      "96": 384,
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      "1/3": "33.3333333%",
      "2/3": "66.666666%",
      "1/5": "20%",
      "2/5": "40%",
      "3/5": "60%",
      "4/5": "80%",
      full: "100%",
    } as const,
    colors: {
      white: "#fff",
      black: "#000",
      ...extractTwColor({ twColor: "coolGray", name: "gray" }),
      ...extractTwColor({ twColor: "red", name: "red" }),
      ...extractTwColor({ twColor: "green", name: "green" }),
      ...extractTwColor({ twColor: "blue", name: "blue" }),
      ...extractTwColor({ twColor: "indigo", name: "indigo" }),
      ...extractTwColor({ twColor: "purple", name: "purple" }),
      ...extractTwColor({ twColor: "pink", name: "pink" }),
    } as const,
    opacities: {
      "0": 0,
      "5": 0.05,
      "10": 0.1,
      "20": 0.2,
      "25": 0.25,
      "30": 0.3,
      "40": 0.4,
      "50": 0.5,
      "60": 0.6,
      "70": 0.7,
      "75": 0.75,
      "80": 0.8,
      "90": 0.9,
      "95": 0.95,
    } as const,
    aspectRatios: {
      "1": [1, 1],
      "16-9": [16, 9],
      "9-16": [9, 16],
      "3-4": [3, 4],
      "4-3": [4, 3],
      "1-2": [1, 2],
      "2-1": [2, 1],
      "2-3": [2, 3],
      "3-2": [3, 2],
    } as const,
    borderSizes: {
      "0": 0,
      hairline: StyleSheet.hairlineWidth,
      "1": 1,
      "2": 2,
      "4": 4,
      "8": 8,
    } as const,
    borderRadii: {
      none: 0,
      sm: 0.125 * baseFontSize,
      base: 0.25 * baseFontSize,
      md: 0.375 * baseFontSize,
      lg: 0.5 * baseFontSize,
      xl: 0.75 * baseFontSize,
      "2xl": baseFontSize,
      "3xl": 1.5 * baseFontSize,
      full: 999,
    } as const,
    /**
     * Generated from https://ethercreative.github.io/react-native-shadow-generator/
     * android prop represents elevation.
     * ios is [shadowOffset.width, shadowOffset.height, shadowRadius, shadowOpacity]
     */
    shadows: {
      sm: { android: 1, ios: [0, 1, 1, 0.18] },
      base: { android: 2, ios: [0, 1, 1.41, 0.2] },
      md: { android: 5, ios: [0, 2, 3.84, 0.25] },
      lg: { android: 8, ios: [0, 4, 4.65, 0.3] },
      xl: { android: 12, ios: [0, 6, 7.49, 0.37] },
      "2xl": { android: 16, ios: [0, 8, 10.32, 0.44] },
    } as const,
    fontSizes: {
      xs: [0.75 * baseFontSize, baseFontSize],
      sm: [0.875 * baseFontSize, 1.25 * baseFontSize],
      base: [baseFontSize, 1.5 * baseFontSize],
      lg: [1.125 * baseFontSize, 1.75 * baseFontSize],
      xl: [1.25 * baseFontSize, 1.75 * baseFontSize],
      "2xl": [1.5 * baseFontSize, 2 * baseFontSize],
      "3xl": [1.875 * baseFontSize, 2.25 * baseFontSize],
      "4xl": [2.25 * baseFontSize, 2.5 * baseFontSize],
      "5xl": [3 * baseFontSize, 3 * baseFontSize],
      "6xl": [3.75 * baseFontSize, 3.75 * baseFontSize],
      "7xl": [4.5 * baseFontSize, 4.5 * baseFontSize],
      "8xl": [6 * baseFontSize, 6 * baseFontSize],
      "9xl": [8 * baseFontSize, 8 * baseFontSize],
    } as const,
    fontWeights: {
      thin: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      black: "900",
    } as const,
    letterSpacing: {
      tighter: -0.05 * baseFontSize,
      tight: -0.025 * baseFontSize,
      normal: 0,
      wide: 0.025 * baseFontSize,
      wider: 0.05 * baseFontSize,
      widest: 0.1 * baseFontSize,
    } as const,
    lineHeights: {
      none: "x1",
      tight: "x1.25",
      snug: "x1.375",
      normal: "x1.5",
      relaxed: "x1.625",
      loose: "x2",
    },
  } as const);

export const DefaultTheme = createDefaultTheme();
