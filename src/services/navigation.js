import {NavigationActions} from 'react-navigation';

let navigator;

export function setNavigator(ref) {
  navigator = ref;
}

export function navigate(routeName, params) {
  const action = NavigationActions.navigate(routeName, params);
  navigator.dispatch(action);
}
