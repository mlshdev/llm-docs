> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/appintentstesting/appintentdefinition/makeintent](https://developer.apple.com/documentation/appintentstesting/appintentdefinition/makeintent)

# makeIntent

**Framework:** App Intents Testing  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates a populated instance of this intent.

## Declaration

```swift
var makeIntent: IntentValuePropertiesCallable<AnyAppIntent> { get }
```

## Mentioned In

- [Testing your App Intents code](../testing-your-app-intents-code.md)

<a id="discussion"></a>

## Discussion

The following example shows how you can create an intent instance:

```swift
let definitions = IntentDefinitions(bundleIdentifier: "com.example.exampleapp")
let exampleIntentDefinition = definitions.intents["MyExampleIntent"]

let intent = exampleIntentDefinition.makeIntent(
    paramA: "Hello World",
    paramB: 1234
)
```
