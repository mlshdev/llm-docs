> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/distributednotificationcenter/centertype](https://developer.apple.com/documentation/foundation/distributednotificationcenter/centertype)

# DistributedNotificationCenter.CenterType (Swift)

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

This constant specifies the notification center type.

## Declaration

```swift
struct CenterType
```

## Topics

### Type Properties

- [localNotificationCenterType](centertype/localnotificationcentertype.md): Distributes notifications to all tasks on the sender’s computer.

### Initializers

- [init(\_:)](centertype/init%28__%29.md)
- [init(rawValue:)](centertype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Constants

- [DistributedNotificationCenter.Options](options.md): These constants specify the behavior of notifications posted using the [postNotificationName(\_:object:userInfo:options:)](postnotificationname%28__object_userinfo_options_%29.md) method.
- [DistributedNotificationCenter.SuspensionBehavior](suspensionbehavior.md): These constants specify the types of notification delivery suspension behaviors.

# NSDistributedNotificationCenterType (Objective-C)

**Framework:** Foundation  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

This constant specifies the notification center type.

## Declaration

```objectivec
typedef NSString * NSDistributedNotificationCenterType;
```

## Topics

### Type Properties

- [NSLocalNotificationCenterType](centertype/localnotificationcentertype.md): Distributes notifications to all tasks on the sender’s computer.

## See Also

### Constants

- [NSDistributedNotificationOptions](options.md): These constants specify the behavior of notifications posted using the [postNotificationName:object:userInfo:options:](postnotificationname%28__object_userinfo_options_%29.md) method.
- [NSNotificationSuspensionBehavior](suspensionbehavior.md): These constants specify the types of notification delivery suspension behaviors.
