> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/appintentstesting/intentvaluequerydefinition](https://developer.apple.com/documentation/appintentstesting/intentvaluequerydefinition)

# IntentValueQueryDefinition

**Framework:** App Intents Testing  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A definition you use to create an intent value query for testing.

## Declaration

```swift
struct IntentValueQueryDefinition
```

<a id="overview"></a>

## Overview

To create an intent value for testing and verify its results, first get its definition using [IntentDefinitions](intentdefinitions.md) and its [valueQueries](intentdefinitions/valuequeries.md) property. Then, perform the query and verify that it returns the expected results as shown in the following example:

```swift
let definitions = IntentDefinitions(
    bundleIdentifier: "com.apple.example"
)
let searchQuery = definitions.valueQueries[
    "LandmarkIntentValueQuery"
]

let result = try await searchQuery.values(for: "Arizona")

// Code to verify the query's results.
// ...
```

## Topics

### Performing the intent value query

- [values(for:)](intentvaluequerydefinition/values%28for_%29.md): Performs the value query with the given input and returns matching results.

### Identifying the query

- [bundleIdentifier](intentvaluequerydefinition/bundleidentifier.md): The bundle identifier of the app that includes the query.
- [queryIdentifier](intentvaluequerydefinition/queryidentifier.md): The query’s unique identifier.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing app entities and queries

- [entities](intentdefinitions/entities.md): The definitions for the target app’s app entities.
- [AppEntityDefinition](appentitydefinition.md): A definition you use to dynamically create entity instances for testing.
- [valueQueries](intentdefinitions/valuequeries.md): The definitions for the app’s intent value queries.
- [transientEntities](intentdefinitions/transiententities.md): Retrieve a transient app entity definition using subscript syntax.
- [TransientAppEntityDefinition](transientappentitydefinition.md): A definition you use to dynamically create transient app entities for testing.
