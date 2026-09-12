> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/appintentstesting/transientappentitydefinition](https://developer.apple.com/documentation/appintentstesting/transientappentitydefinition)

# TransientAppEntityDefinition

**Framework:** App Intents Testing  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A definition you use to dynamically create transient app entities for testing.

## Declaration

```swift
struct TransientAppEntityDefinition
```

<a id="overview"></a>

## Overview

To create a transient app entity instance for testing, load the definition for your transient app entity using [IntentDefinitions](intentdefinitions.md) and its [transientEntities](intentdefinitions/transiententities.md) property, then create an entity instance as shown in the following example:

```swift
let definitions = IntentDefinitions(
    bundleIdentifier: "com.apple.example"
)
let sessionEntity = definitions.transientEntities[
    "UserSessionEntity"
]
let entity = sessionEntity.makeEntity(
    sessionId: "temp-session-123",
    startTime: Date()
)
```

## Topics

### Creating a transient entity instance

- [makeEntity](transientappentitydefinition/makeentity.md): Creates a populated instance of this transient entity.

### Identifying the entity

- [bundleIdentifier](transientappentitydefinition/bundleidentifier.md): The bundle identifier of the app that contains this entity.
- [typeIdentifier](transientappentitydefinition/typeidentifier.md): The entity type’s identifier.

### Instance Methods

- [resolved(from:)](transientappentitydefinition/resolved%28from_%29-1lap2.md): Resolves a transient entity from a transferable intent value type through the entity type’s `Transferable` conformance.
- [resolved(from:)](transientappentitydefinition/resolved%28from_%29-3jjpx.md): Resolves a transient entity from a system intent value type through the entity type’s `Transferable` conformance.
- [resolved(from:)](transientappentitydefinition/resolved%28from_%29-6xsjl.md): Resolves a transient entity from an exported `IntentFile` through the entity type’s `Transferable` conformance.

### Default Implementations

- [AppIntentTypeDefinition Implementations](transientappentitydefinition/appintenttypedefinition-implementations.md)

## Relationships

### Conforms To

- [AppIntentTypeDefinition](appintenttypedefinition.md)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing app entities and queries

- [entities](intentdefinitions/entities.md): The definitions for the target app’s app entities.
- [AppEntityDefinition](appentitydefinition.md): A definition you use to dynamically create entity instances for testing.
- [valueQueries](intentdefinitions/valuequeries.md): The definitions for the app’s intent value queries.
- [IntentValueQueryDefinition](intentvaluequerydefinition.md): A definition you use to create an intent value query for testing.
- [transientEntities](intentdefinitions/transiententities.md): Retrieve a transient app entity definition using subscript syntax.
