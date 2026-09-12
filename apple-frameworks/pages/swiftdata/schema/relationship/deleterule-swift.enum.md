> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/swiftdata/schema/relationship/deleterule-swift.enum](https://developer.apple.com/documentation/swiftdata/schema/relationship/deleterule-swift.enum)

# Schema.Relationship.DeleteRule

**Framework:** SwiftData  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+ · Swift 5.9+

Describes the rule to apply when deleting a model containing references to other models.

## Declaration

```swift
enum DeleteRule
```

## Mentioned In

- [Preserving your app’s model data across launches](../../preserving-your-apps-model-data-across-launches.md)

## Topics

### Accessing delete rules

- [Schema.Relationship.DeleteRule.cascade](deleterule-swift.enum/cascade.md): A rule that deletes any related models.
- [Schema.Relationship.DeleteRule.deny](deleterule-swift.enum/deny.md): A rule that prevents the deletion of a model because it contains one or more references to other models.
- [Schema.Relationship.DeleteRule.noAction](deleterule-swift.enum/noaction.md): A rule that doesn’t make changes to any related models.
- [Schema.Relationship.DeleteRule.nullify](deleterule-swift.enum/nullify.md): A rule that nullifies the related model’s reference to the deleted model.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)

## See Also

### Managing the configuration

- [keypath](keypath.md)
- [destination](destination.md)
- [inverseName](inversename.md)
- [inverseKeyPath](inversekeypath.md)
- [deleteRule](deleterule-swift.property.md)
- [isToOneRelationship](istoonerelationship.md)
