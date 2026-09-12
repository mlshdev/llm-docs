> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/appintentstesting/appintentdefinition](https://developer.apple.com/documentation/appintentstesting/appintentdefinition)

# AppIntentDefinition

**Framework:** App Intents Testing  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A definition you use to dynamically create intent instances for testing.

## Declaration

```swift
struct AppIntentDefinition
```

## Mentioned In

- [Testing your App Intents code](testing-your-app-intents-code.md)

<a id="overview"></a>

## Overview

To create an app intent instance for testing, instantiate its corresponding intent definition for your app intent using [IntentDefinitions](intentdefinitions.md), then create an intent instance using [makeIntent](appintentdefinition/makeintent.md) as shown in the following example:

```swift
let definitions = IntentDefinitions(
    bundleIdentifier: "com.apple.example"
)
let orderIntent = definitions.intents[
    "OrderCoffeeIntent"
]
let intent = orderIntent.makeIntent(
    size: "large",
    type: "latte"
)
```

## Topics

### Creating an app intent instance

- [makeIntent](appintentdefinition/makeintent.md): Creates a populated instance of this intent.

### Identifying the intent

- [identifier](appintentdefinition/identifier.md): The intent’s identifier.
- [bundleIdentifier](appintentdefinition/bundleidentifier.md): The bundle identifier of the app that includes this intent.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing app intents

- [intents](intentdefinitions/intents.md): The definitions for the target app’s app intents.
