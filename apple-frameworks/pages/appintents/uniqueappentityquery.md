> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appintents/uniqueappentityquery

# UniqueAppEntityQuery

**Framework:** App Intents  
**Kind:** Protocol  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A query designed for only returning a single possible value, provided by `uniqueEntity`. Protocol extensions will provide the other required query methods based on that.

## Declaration

```swift
protocol UniqueAppEntityQuery : EnumerableEntityQuery where Self.Entity : UniqueAppEntity
```

## Topics

### Associated Types

- [Unique](uniqueappentityquery/unique.md)

### Instance Methods

- [uniqueEntity()](uniqueappentityquery/uniqueentity%28%29.md)

## Relationships

### Inherits From

- [DynamicOptionsProvider](dynamicoptionsprovider.md)
- [EntityQuery](entityquery.md)
- [EnumerableEntityQuery](enumerableentityquery.md)
- [PersistentlyIdentifiable](persistentlyidentifiable.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

### Conforming Types

- [UniqueAppEntityProvider](uniqueappentityprovider.md)

## See Also

### Unique entity queries

- [UniqueAppEntityProvider](uniqueappentityprovider.md): A simplified query type conforming to `UniqueAppEntityQuery`. Use this as the value of the `defaultQuery` of an entity conforming to `UniqueAppEntity`.
