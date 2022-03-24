/*This is where we pool all of our theme code together for use in our app. Hence we eventually export one object; the 'theme' constant*/
/*We would bring it into our App.js (parent) component */
import { colors } from "./colors";
import { space, lineHeights } from "./spacing";
import { sizes } from "./sizes";
import { fonts, fontWeights, fontSizes } from "./fonts";

export const theme = {
  colors,
  space,
  lineHeights,
  sizes,
  fonts,
  fontSizes,
  fontWeights,
};
