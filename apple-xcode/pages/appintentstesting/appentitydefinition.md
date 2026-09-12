> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/appintentstesting/appentitydefinition](https://developer.apple.com/documentation/appintentstesting/appentitydefinition)

# AppEntityDefinition

**Framework:** App Intents Testing  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A definition you use to dynamically create entity instances for testing.

## Declaration

```swift
struct AppEntityDefinition
```

## Mentioned In

- [Testing your App Intents code](testing-your-app-intents-code.md)

<a id="overview"></a>

## Overview

To create an app entity instance for testing, load the definition for your app entity, using [IntentDefinitions](intentdefinitions.md) and its [entities](intentdefinitions/entities.md) property, then create an entity instance as shown in the following example:

```swift
let definitions = IntentDefinitions(
    bundleIdentifier: "com.apple.example"
)
let landmarkEntity = definitions.entities[
    "LandmarkEntity"
]
let entity = landmarkEntity.makeReference(
    identifier: "yosemite-falls"
)
```

## Topics

### Creating an app entity instance

- [makeReference(identifier:)](appentitydefinition/makereference%28identifier_%29.md): Creates an app entity instance of the given entity type.

### Retrieving all entities

- [allEntities()](appentitydefinition/allentities%28%29.md): Fetches all available entities of this type.
- [allEntitiesQuery()](appentitydefinition/allentitiesquery%28%29.md): Creates an entity query that retrieves all available entities of this type.

### Searching matching entities

- [entities(identifiers:)](appentitydefinition/entities%28identifiers_%29.md): Retrieves entities by their identifiers.
- [entityQuery(identifiers:)](appentitydefinition/entityquery%28identifiers_%29.md): Creates an entity query that searches for entities by their identifiers.
- [entities(matching:)](appentitydefinition/entities%28matching_%29.md): Finds app entities that match a given string query.
- [entityQuery(matching:)](appentitydefinition/entityquery%28matching_%29.md): Creates an entity query that searches for entities that match a given string.
- [spotlightQuery(\_:)](appentitydefinition/spotlightquery%28__%29.md): Performs a Spotlight search query for entities of this type.

### Accessing suggested entities

- [suggestedEntities()](appentitydefinition/suggestedentities%28%29.md): Fetches all suggested entities of this type.
- [suggestedEntitiesQuery()](appentitydefinition/suggestedentitiesquery%28%29.md): Creates an entity query that retrieves suggested entities of this type.

### Accessing onscreen entities

- [viewAnnotations()](appentitydefinition/viewannotations%28%29.md): Provides the currently visible onscreen entities.

### Identifying the entity

- [typeIdentifier](appentitydefinition/typeidentifier.md): The entity type’s unique identifier.
- [bundleIdentifier](appentitydefinition/bundleidentifier.md): The bundle identifier of the app that includes the app entity.

### Instance Methods

- [resolved(from:)](appentitydefinition/resolved%28from_%29-2fld0.md): Resolves an entity from an exported intent file through the entity type’s transferable conformance.
- [resolved(from:)](appentitydefinition/resolved%28from_%29-4yp5n.md): Resolves an entity from a system intent value type through the entity type’s transferable conformance.
- [resolved(from:)](appentitydefinition/resolved%28from_%29-7c04a.md): Resolves an entity from a transferable intent value type through the entity type’s transferable conformance.

### Default Implementations

- [AppIntentTypeDefinition Implementations](appentitydefinition/appintenttypedefinition-implementations.md)

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
- [valueQueries](intentdefinitions/valuequeries.md): The definitions for the app’s intent value queries.
- [IntentValueQueryDefinition](intentvaluequerydefinition.md): A definition you use to create an intent value query for testing.
- [transientEntities](intentdefinitions/transiententities.md): Retrieve a transient app entity definition using subscript syntax.
- [TransientAppEntityDefinition](transientappentitydefinition.md): A definition you use to dynamically create transient app entities for testing.
