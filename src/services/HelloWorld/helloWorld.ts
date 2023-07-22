import { app_strings } from "../../stringRepos/AppStrings/AppStrings.js";

export default function helloWorld(name: string) {
  console.log(`Howdy Ho ! ${app_strings.t("welcome")}, ${name}`);

  return;
}
