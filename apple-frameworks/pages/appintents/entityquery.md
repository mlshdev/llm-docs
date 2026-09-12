> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/entityquery](https://developer.apple.com/documentation/appintents/entityquery)

# EntityQuery

**Framework:** App Intents  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

An interface for locating app entity instances by identifier.

## Declaration

```swift
protocol EntityQuery : DynamicOptionsProvider, PersistentlyIdentifiable, Sendable
```

## Mentioned In

- [Defining app entities for your custom data types](defining-app-entities-for-your-custom-data-types.md)

<a id="overview"></a>

## Overview

An entity query defines how Apple Intelligence, Siri, and the Shortcuts app retrieve instances of a specific [AppEntity](appentity.md) type, and implements the lookup logic. To let Siri and Shortcuts retrieve `AppEntity` instances, create a type that conforms to [EntityQuery](entityquery.md).

<a id="Resolve-entities-by-identifier"></a>

### Resolve entities by identifier

In some scenarios, Apple Intelligence already knows exactly which entity the person is referring to, and needs to retrieve the actual entity instance given its unique identifier.

To support this retrieval method, implement [entities(for:)](entityquery/entities%28for_%29.md), which, given an array of [AppEntity](appentity.md) identifiers, returns corresponding entity instances. In your `entities(for:)` implementation, first look up whether the instance already exists in memory. If the instance doesn’t exist, make asynchronous calls — for example, retrieving from disk or a backend service. If the entity for a provided identifier is no longer available, omit it from the returned array.

```swift
struct MyPhotoQuery: EntityQuery {
    func entities(for identifiers: [UUID]) async throws -> [MyPhoto] {
        myPhotoStore.filter { identifiers.contains($0.id) }
    }
}
```

## Topics

### Creating a query

- [init()](entityquery/init%28%29.md)

### Searching for entities

- [entities(for:)](entityquery/entities%28for_%29.md): Retrieves instances by identifier.
- [Entity](entityquery/entity.md): The entity type that this query knows how to resolve.

### Suggesting entities

- [suggestedEntities()](entityquery/suggestedentities%28%29.md): Returns the initial results to display when the system presents options backed by this query.

### Associated Types

- [Result](entityquery/result.md)

### Instance Methods

- [displayRepresentations(for:)](entityquery/displayrepresentations%28for_%29.md): Returns display representations by identifier.

### Type Aliases

- [EntityQuery.ExecutionTargets](entityquery/executiontargets.md)

### Type Properties

- [allowedExecutionTargets](entityquery/allowedexecutiontargets.md): A set of targets that can run this query.

## Relationships

### Inherits From

- [DynamicOptionsProvider](dynamicoptionsprovider.md)
- [PersistentlyIdentifiable](persistentlyidentifiable.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

### Inherited By

- [EntityPropertyQuery](entitypropertyquery.md)
- [EntityStringQuery](entitystringquery.md)
- [EnumerableEntityQuery](enumerableentityquery.md)
- [IndexedEntityQuery](indexedentityquery.md)
- [UniqueAppEntityQuery](uniqueappentityquery.md)

### Conforming Types

- [UniqueAppEntityProvider](uniqueappentityprovider.md)

## See Also

### Identifier-based queries

- [IndexedEntityQuery](indexedentityquery.md): An interface that adds Spotlight reindexing support to your entity query.
- [EnumerableEntityQuery](enumerableentityquery.md): An interface you use to provide a short list of entities that are relatively small in size.
