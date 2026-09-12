> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/appintentstesting/intentdefinitions/intents](https://developer.apple.com/documentation/appintentstesting/intentdefinitions/intents)

# intents

**Framework:** App Intents Testing  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The definitions for the target app’s app intents.

## Declaration

```swift
var intents: IntentDefinitions.DefinitionCollection<AppIntentDefinition> { get }
```

## Mentioned In

- [Testing your App Intents code](../testing-your-app-intents-code.md)

<a id="discussion"></a>

## Discussion

Access individual intent definitions using subscript syntax with the intent’s type name as shown in the following example:

```swift
let definitions = IntentDefinitions(
    bundleIdentifier: "com.apple.example"
)
let orderIntent = definitions.intents[
    "OrderCoffeeIntent"
]
```

## See Also

### Accessing app intents

- [AppIntentDefinition](../appintentdefinition.md): A definition you use to dynamically create intent instances for testing.
