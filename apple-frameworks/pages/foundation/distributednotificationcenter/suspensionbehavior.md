> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/distributednotificationcenter/suspensionbehavior](https://developer.apple.com/documentation/foundation/distributednotificationcenter/suspensionbehavior)

# DistributedNotificationCenter.SuspensionBehavior (Swift)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

These constants specify the types of notification delivery suspension behaviors.

## Declaration

```swift
enum SuspensionBehavior
```

## Topics

### Constants

- [DistributedNotificationCenter.SuspensionBehavior.drop](suspensionbehavior/drop.md): The server doesn’t queue any notifications with this name and object until the notification center resumes notification delivery.
- [DistributedNotificationCenter.SuspensionBehavior.coalesce](suspensionbehavior/coalesce.md): The server only queues the last notification of the specified name and object; earlier notifications are dropped. In cover methods for which suspension behavior is not an explicit argument, `NSNotificationSuspensionBehaviorCoalesce` is the default.
- [DistributedNotificationCenter.SuspensionBehavior.hold](suspensionbehavior/hold.md): The server holds all matching notifications until the queue has been filled (queue size determined by the server), at which point the server may flush queued notifications.
- [DistributedNotificationCenter.SuspensionBehavior.deliverImmediately](suspensionbehavior/deliverimmediately.md)

### Initializers

- [init(rawValue:)](suspensionbehavior/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Constants

- [DistributedNotificationCenter.Options](options.md): These constants specify the behavior of notifications posted using the [postNotificationName(\_:object:userInfo:options:)](postnotificationname%28__object_userinfo_options_%29.md) method.
- [DistributedNotificationCenter.CenterType](centertype.md): This constant specifies the notification center type.

# NSNotificationSuspensionBehavior (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

These constants specify the types of notification delivery suspension behaviors.

## Declaration

```objectivec
enum NSNotificationSuspensionBehavior : NSUInteger;
```

## Topics

### Constants

- [NSNotificationSuspensionBehaviorDrop](suspensionbehavior/drop.md): The server doesn’t queue any notifications with this name and object until the notification center resumes notification delivery.
- [NSNotificationSuspensionBehaviorCoalesce](suspensionbehavior/coalesce.md): The server only queues the last notification of the specified name and object; earlier notifications are dropped. In cover methods for which suspension behavior is not an explicit argument, `NSNotificationSuspensionBehaviorCoalesce` is the default.
- [NSNotificationSuspensionBehaviorHold](suspensionbehavior/hold.md): The server holds all matching notifications until the queue has been filled (queue size determined by the server), at which point the server may flush queued notifications.
- [NSNotificationSuspensionBehaviorDeliverImmediately](suspensionbehavior/deliverimmediately.md)

## See Also

### Constants

- [NSDistributedNotificationOptions](options.md): These constants specify the behavior of notifications posted using the [postNotificationName:object:userInfo:options:](postnotificationname%28__object_userinfo_options_%29.md) method.
- [NSDistributedNotificationCenterType](centertype.md): This constant specifies the notification center type.
