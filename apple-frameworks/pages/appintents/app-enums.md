> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/app-enums](https://developer.apple.com/documentation/appintents/app-enums)

# App enums

**Framework:** App Intents  
**Kind:** API Collection

Make your app’s enumerations and predefined values available to the system by using app enum types.

<a id="Overview"></a>

## Overview

If your app intents or app entities expose variables with predefined values, support the [AppEnum](appenum.md) protocol in those types. When an intent parameter or entity property conforms to this protocol, the system can suggest values readily in conversations. For example, consider a food ordering app that offers small, medium, and large beverages, and defines an intent that takes the beverage size as a parameter. If the person doesn’t specify a size when placing an order, but the parameter’s type supports the [AppEnum](appenum.md) protocol, the system can prompt for one of the defined sizes automatically. If you can represent each value of an enumeration as a URL, also add support for the [URLRepresentableEnum](urlrepresentableenum.md) protocol.

## Topics

### Enumerated types

- [AppEnum](appenum.md): An interface to express that a custom type has a predefined, static set of values.

### Universal link navigation

- [URLRepresentableEnum](urlrepresentableenum.md): An interface you apply to an app enum type so the system can handle it like a universal link.
- [EnumURLRepresentation](enumurlrepresentation.md): The type that provides the URL for an app enum.
- [CustomURLRepresentationParameterConvertible](customurlrepresentationparameterconvertible.md): An interface that allows a type to express its contents in a URL representation.

## See Also

### App-specific content

- [App intents](app-intents.md): Make your app’s custom actions available to the system by using app intent types.
- [App entities](app-entities.md): Make your app’s core types and data concepts available to the system using app entity types.
- [Common data types](common-data-types.md): Use framework-defined types for common parameter and result data types such as contacts, files, currencies, and more.
- [App extension](app-extension.md): Deliver app intents in an app extension or other package that lives outside your app’s code.
