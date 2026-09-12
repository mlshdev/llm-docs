> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/appintentstesting/intentdefinitions](https://developer.apple.com/documentation/appintentstesting/intentdefinitions)

# IntentDefinitions

**Framework:** App Intents Testing  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A collection of definitions that catalog your app’s intents, enums, entities, and queries.

## Declaration

```swift
struct IntentDefinitions
```

## Mentioned In

- [Testing your App Intents code](testing-your-app-intents-code.md)

<a id="overview"></a>

## Overview

Use the `IntentDefinitions` structure as the entry point for creating type-erased app intents for testing. Provide the bundle identifier of the app under test, then use subscript syntax to retrieve definitions for intents, entities, enums, or value queries as shown in the following example:

```swift
let definitions = IntentDefinitions(
    bundleIdentifier: "com.apple.example"
)

let intent = definitions.intents["OrderCoffeeIntent"]
    .makeIntent(size: "large")
let entity = definitions.entities["CoffeeEntity"]
    .makeReference(identifier: "latte-123")
let enumCase = definitions.enums["CoffeeSizeEnum"]
    .makeCase("large")
```

## Topics

### Creating an intent definition

- [init(bundleIdentifier:)](intentdefinitions/init%28bundleidentifier_%29.md): Creates a new collection of definitions for intents that the specified app bundle contains.
- [bundleIdentifier](intentdefinitions/bundleidentifier.md): The bundle identifier of the app target under test.

### Accessing app intents

- [intents](intentdefinitions/intents.md): The definitions for the target app’s app intents.
- [AppIntentDefinition](appintentdefinition.md): A definition you use to dynamically create intent instances for testing.

### Accessing app entities and queries

- [entities](intentdefinitions/entities.md): The definitions for the target app’s app entities.
- [AppEntityDefinition](appentitydefinition.md): A definition you use to dynamically create entity instances for testing.
- [valueQueries](intentdefinitions/valuequeries.md): The definitions for the app’s intent value queries.
- [IntentValueQueryDefinition](intentvaluequerydefinition.md): A definition you use to create an intent value query for testing.
- [transientEntities](intentdefinitions/transiententities.md): Retrieve a transient app entity definition using subscript syntax.
- [TransientAppEntityDefinition](transientappentitydefinition.md): A definition you use to dynamically create transient app entities for testing.

### Accessing app enums

- [enums](intentdefinitions/enums.md): The definitions for the target app’s app enums.
- [AppEnumDefinition](appenumdefinition.md): An app enumeration definition for testing and dynamic enumeration creation.

### Supporting types

- [IntentDefinitions.DefinitionCollection](intentdefinitions/definitioncollection.md): A collection of a specific type of definition.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
