> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/swiftdata/schema/relationship](https://developer.apple.com/documentation/swiftdata/schema/relationship)

# Schema.Relationship

**Framework:** SwiftData  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+ · Swift 5.9+

An object that describes the configuration and behavior of a relationship between two model classes.

## Declaration

```swift
final class Relationship
```

## Topics

### Creating a relationship

- [init(\_:deleteRule:minimumModelCount:maximumModelCount:originalName:inverse:hashModifier:)](relationship/init%28__deleterule_minimummodelcount_maximummodelcount_originalname_inverse_hashmodifier_%29.md)

### Managing the configuration

- [keypath](relationship/keypath.md)
- [destination](relationship/destination.md)
- [inverseName](relationship/inversename.md)
- [inverseKeyPath](relationship/inversekeypath.md)
- [deleteRule](relationship/deleterule-swift.property.md)
- [Schema.Relationship.DeleteRule](relationship/deleterule-swift.enum.md): Describes the rule to apply when deleting a model containing references to other models.
- [isToOneRelationship](relationship/istoonerelationship.md)

### Determining behavior

- [options](relationship/options.md)

### Versioning

- [hashModifier](relationship/hashmodifier.md)

### Structures

- [Schema.Relationship.Option](relationship/option.md)

### Instance Properties

- [maximumModelCount](relationship/maximummodelcount.md)
- [minimumModelCount](relationship/minimummodelcount.md)

## Relationships

### Conforms To

- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [SchemaProperty](../schemaproperty.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
