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
      welcome: "Bonjour",
      country: "fr",
      /* PLOP_INJECT_SRC_END */
    },
  },
  /* PLOP_INJECT_INTL_STRINGS */
};

i18n.use(initReactI18next).init({
  resources,
  //language to use if translations in user language are not available
  fallbackLng: "src",
  interpolation: {
    escapeValue: false, // not needed for react!!
  },
});

const app_strings = i18n;

export { app_strings };
