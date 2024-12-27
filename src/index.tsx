import React from "react";
import { Image } from "react-native";

interface CountryFlagProps {
  isoCode: string;
  size: number;
  style?: any;
  flags?: any;
}

const FLAG_CDN_URL = "https://flagcdn.com/w80/";
const FORMAT = ".png";

const CountryFlag = ({ isoCode, size, style, flags }: CountryFlagProps) => {
  const getFlagSource = () => {
    if (flags) {
      if (isoCode.toLowerCase() === "in") {
        return flags["ind"];
      } else if (isoCode.toLowerCase() === "do") {
        return flags["dom"];
      } else {
        return flags?.[isoCode.toLowerCase()];
      }
    } else {
      return { uri: FLAG_CDN_URL + isoCode.toLocaleLowerCase() + FORMAT };
    }
  };

  return (
    <Image
      source={getFlagSource()}
      style={[{ width: size * 1.6, height: size }, style]}
      resizeMode="contain"
    />
  );
};

export default CountryFlag;
