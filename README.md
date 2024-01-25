# @react-native-ui-design/button

@react-native-ui-design/button have lot of predefined customizations

## Installation

```sh
npm install @react-native-ui-design/button
```
## Required dependencies
```sh
npm i react-native-paper react-native-safe-area-context react-native-vector-icons
```

## Usage

Wrap your root component in `PaperProvider` from `react-native-paper`. This will usually be in the `index.js` file. If you have an Expo project, you can do this inside the exported component in the `App.js` file.

Example:
```js
import * as React from 'react';
import { AppRegistry } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { name as appName } from './app.json';
import App from './src/App';

export default function Main() {
  return (
    <PaperProvider>
      <App />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
```

Import Button component and use

Example:

```js
import { Button } from '@react-native-ui-design/button';

return (
    <Button mode="contained">
        Contained Button
    </Button>
)

```

## User Guide

#### Props
## Props
| Prop name                 | Description                                   | type                              | Default value             |
| ------------------------- | --------------------------------------------- | --------------------------------- | ------------------------- |
| mode                      | Button mode                                   | `text`                            | `contained`               |    
|                           |                                               | \| `outlined`                     |                           |          
|                           |                                               | \| `contained`                    |                           |          
|                           |                                               | \| `elevated`                     |                           |          
|                           |                                               | \| `contained-tonal`              |                           |
| style                     | Button style                                  | ViewStyle                         | N/A                       |
| onPress                   | Function call for on button press             | Function                          | N/A                       |
| textColor                 | Button title color                            | string                            | `#3075bb`                 |
| loading                   | Button loading state                          | boolean                           | `false`                   |
| disabled                  | Button disable state                          | boolean                           | `false`                   |
| leftIcon                  | Left side icon of Button                      | IconSource                        | N/A                       |
| rightIcon                 | Right side icon of Button                     | IconSource                        | N/A                       |
| labelStyle                | Button title style                            | TextStyle                         | N/A                       |
| testID                    | Test id for testing purpose                   | string                            | N/A                       |
| appColors                 | Button theme                                  | `{primary: string;}`              | `{primary: '#3075bb',}`   |
| children                  | Children of the Button                        | ReactNode                         | N/A                       |

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

The MIT License.

## Author

<table>
  <tr>
    <td >
      <img src="https://avatars.githubusercontent.com/u/41302126?v=4" width="64" height="64" alt="Abiraman K">
    </td>
    <td>
      <a href="https://github.com/AbiramanK" target="_blank">Abiraman K</a>
    </td>
  </tr>
</table>

## Thank you

### Sponsors

Thank you to all our sponsors! [Become a sponsor](https://opencollective.com/react-native-ui-design-button#sponsor) and get your image on our README on GitHub.

<a href="https://opencollective.com/react-native-ui-design-button#sponsors" target="_blank"><img src="https://opencollective.com/react-native-ui-design-button/sponsors.svg?width=890" alt="@react-native-ui-design/button"></a>


---
