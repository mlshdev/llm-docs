> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsdeleterule](https://developer.apple.com/documentation/coredata/nsdeleterule)

# NSDeleteRule (Swift)

**Framework:** Core Data  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constants that determine what happens when you delete a relationship’s owning managed object.

## Declaration

```swift
enum NSDeleteRule
```

## Topics

### Delete Rules

- [NSDeleteRule.noActionDeleteRule](nsdeleterule/noactiondeleterule.md): A rule that prevents modification of the referenced managed objects.
- [NSDeleteRule.nullifyDeleteRule](nsdeleterule/nullifydeleterule.md): A rule that nullifies the inverse relationship of the referenced managed objects.
- [NSDeleteRule.cascadeDeleteRule](nsdeleterule/cascadedeleterule.md): A rule that deletes the referenced managed objects.
- [NSDeleteRule.denyDeleteRule](nsdeleterule/denydeleterule.md): A rule that prevents the deletion of the owning managed object if the relationship has references to other objects.

### Initializers

- [init(rawValue:)](nsdeleterule/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring Delete Behavior

- [deleteRule](nsrelationshipdescription/deleterule.md): The rule to apply when you delete the relationship’s owning managed object.

# NSDeleteRule (Objective-C)

**Framework:** Core Data  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constants that determine what happens when you delete a relationship’s owning managed object.

## Declaration

```objectivec
enum NSDeleteRule : NSUInteger;
```

## Topics

### Delete Rules

- [NSNoActionDeleteRule](nsdeleterule/noactiondeleterule.md): A rule that prevents modification of the referenced managed objects.
- [NSNullifyDeleteRule](nsdeleterule/nullifydeleterule.md): A rule that nullifies the inverse relationship of the referenced managed objects.
- [NSCascadeDeleteRule](nsdeleterule/cascadedeleterule.md): A rule that deletes the referenced managed objects.
- [NSDenyDeleteRule](nsdeleterule/denydeleterule.md): A rule that prevents the deletion of the owning managed object if the relationship has references to other objects.

## See Also

### Configuring Delete Behavior

- [deleteRule](nsrelationshipdescription/deleterule.md): The rule to apply when you delete the relationship’s owning managed object.
