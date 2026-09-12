> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/uniqueappentityprovider](https://developer.apple.com/documentation/appintents/uniqueappentityprovider)

# UniqueAppEntityProvider

**Framework:** App Intents  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A simplified query type conforming to `UniqueAppEntityQuery`.  Use this as the value of the `defaultQuery` of an entity conforming to `UniqueAppEntity`.

## Declaration

```swift
struct UniqueAppEntityProvider<Entity> where Entity : UniqueAppEntity
```

## Topics

### Initializers

- [init(\_:)](uniqueappentityprovider/init%28__%29.md)

## Relationships

### Conforms To

- [DynamicOptionsProvider](dynamicoptionsprovider.md)
- [EntityQuery](entityquery.md)
- [EnumerableEntityQuery](enumerableentityquery.md)
- [PersistentlyIdentifiable](persistentlyidentifiable.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [UniqueAppEntityQuery](uniqueappentityquery.md)

## See Also

### Unique entity queries

- [UniqueAppEntityQuery](uniqueappentityquery.md): A query designed for only returning a single possible value, provided by `uniqueEntity`. Protocol extensions will provide the other required query methods based on that.
