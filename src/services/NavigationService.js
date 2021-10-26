import {CommonActions} from '@react-navigation/native';

let _navigator;

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

function navigate(name, params) {
  _navigator.dispatch(
    CommonActions.navigate({
      name,
      params,
    }),
  );
}

export function getParams(props) {
  return props.route.params || {};
}

// add other navigation functions that you need and export them
const NavigationServices = {
  navigate,
  setTopLevelNavigator,
};
export default NavigationServices;
