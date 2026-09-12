> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/appintentstesting/appenumdefinition](https://developer.apple.com/documentation/appintentstesting/appenumdefinition)

# AppEnumDefinition

**Framework:** App Intents Testing  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

An app enumeration definition for testing and dynamic enumeration creation.

## Declaration

```swift
struct AppEnumDefinition
```

## Mentioned In

- [Testing your App Intents code](testing-your-app-intents-code.md)

<a id="overview"></a>

## Overview

To create an app enum for testing, load the enum definition using [IntentDefinitions](intentdefinitions.md) and its [enums](intentdefinitions/enums.md) property. Then, set its value as shown in the following example:

```swift
let definitions = IntentDefinitions(
    bundleIdentifier: "com.apple.example"
)
let colorEnum = definitions.enums["Color"]
let redCase = colorEnum.makeCase("red") // Matches `Color.red`.
```

## Topics

### Creating an enumeration case

- [makeCase(\_:)](appenumdefinition/makecase%28__%29.md): Creates an enumeration case with the specified raw value.

### Identifying the enum

- [typeIdentifier](appenumdefinition/typeidentifier.md): The enum type’s unique identifier.

### Default Implementations

- [AppIntentTypeDefinition Implementations](appenumdefinition/appintenttypedefinition-implementations.md)

## Relationships

### Conforms To

- [AppIntentTypeDefinition](appintenttypedefinition.md)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)

## See Also

### Accessing app enums

- [enums](intentdefinitions/enums.md): The definitions for the target app’s app enums.
