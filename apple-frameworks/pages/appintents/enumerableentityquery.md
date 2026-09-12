> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/enumerableentityquery](https://developer.apple.com/documentation/appintents/enumerableentityquery)

# EnumerableEntityQuery

**Framework:** App Intents  
**Kind:** Protocol  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

An interface you use to provide a short list of entities that are relatively small in size.

## Declaration

```swift
protocol EnumerableEntityQuery : EntityQuery
```

<a id="overview"></a>

## Overview

By implementing an `EnumerableEntityQuery`, you enable the Shortcuts app to generate a Find action and do filtering automatically. Use it in cases where the count of entities is relatively small, and their size in memory is limited. For situations where there may be many thousands of entities, or where individual entities may become large in memory usage, use [EntityPropertyQuery](entitypropertyquery.md) to allow better performance by fetching only the entities matching the criteria from your model.

## Topics

### Instance Methods

- [allEntities()](enumerableentityquery/allentities%28%29.md): Returns all available results.

### Type Properties

- [findIntentDescription](enumerableentityquery/findintentdescription.md): Defines how the generated ‘Find’ Shortcuts action of this query type is displayed to the user.

## Relationships

### Inherits From

- [DynamicOptionsProvider](dynamicoptionsprovider.md)
- [EntityQuery](entityquery.md)
- [PersistentlyIdentifiable](persistentlyidentifiable.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

### Inherited By

- [UniqueAppEntityQuery](uniqueappentityquery.md)

### Conforming Types

- [UniqueAppEntityProvider](uniqueappentityprovider.md)

## See Also

### Identifier-based queries

- [EntityQuery](entityquery.md): An interface for locating app entity instances by identifier.
- [IndexedEntityQuery](indexedentityquery.md): An interface that adds Spotlight reindexing support to your entity query.
