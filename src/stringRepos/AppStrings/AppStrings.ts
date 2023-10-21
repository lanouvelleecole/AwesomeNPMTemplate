
/* PLOP_INJECT_IMPORT */

import "intl-pluralrules";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

//empty for now
const resources = {
  src: {
    // Language resource for "src" language
    translation: {
      /* PLOP_INJECT_SRC_STRING */
      "xhpzrpkYg": "The program:",
      "xl4Ab8WU": "\"File upload in progress! Please wait, darling...\"",
      "xhpzrpkY": "The function:",
      "xziOfYCt": "Result:",
      "xcCehb3i": "Code:",
      "xLFuFy6p": "Failed request...",
      "xFN0o4dh": "Result:",
      "x3ezGsvB": "Request successfully completed!",
      "xKMRBTG": "A.I. model used:",
      "xDWbf3WQ": "Selected A.I. model:",
      "welcome": "Hello",
      "country": "The string 'fr' does not require translation as it appears to be a language code for French.",
      "x7CTz5XP": "Translation of object in progress...",
      "xWtfTMu": "Text translation in progress.... Please wait...",
      "x8H4nyVx": "Tentative No.",
      "xlqZy0Sf": "Text translation successful!",
      "xlqky0Sfn3": "Unable to translate this text",
      "xlqkylp0Sfn3": "An error has occurred",

      /* PLOP_INJECT_SRC_END */
    },
  },
  /* PLOP_INJECT_INTL_STRINGS */
};

i18n.use(initReactI18next).init({
  lng: 'en', // if you're using a language detector, do not define the lng option
  resources,
  //language to use if translations in user language are not available
  fallbackLng: "src",
  interpolation: {
    escapeValue: false, // not needed for react!!
  },
});

const app_strings = i18n;

export { app_strings };
