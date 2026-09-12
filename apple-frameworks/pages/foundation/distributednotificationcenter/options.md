> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/distributednotificationcenter/options](https://developer.apple.com/documentation/foundation/distributednotificationcenter/options)

# DistributedNotificationCenter.Options (Swift)

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

These constants specify the behavior of notifications posted using the [postNotificationName(\_:object:userInfo:options:)](postnotificationname%28__object_userinfo_options_%29.md) method.

## Declaration

```swift
struct Options
```

## Topics

### Constants

- [NSNotificationDeliverImmediately](../nsnotificationdeliverimmediately.md): When set, the notification is delivered immediately to all observers, regardless of their suspension behavior or suspension state. When not set, allows the normal suspension behavior of notification observers to take place.
- [deliverImmediately](options/deliverimmediately.md): When set, the notification is delivered immediately to all observers, regardless of their suspension behavior or suspension state.
- [NSNotificationPostToAllSessions](../nsnotificationposttoallsessions.md): When set, the notification is posted to all sessions. When not set, the notification is sent only to applications within the same login session as the posting task.
- [postToAllSessions](options/posttoallsessions.md): When set, the notification is posted to all sessions. When not set, the notification is sent only to applications within the same login session as the posting task.

### Initializers

- [init(rawValue:)](options/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Constants

- [DistributedNotificationCenter.CenterType](centertype.md): This constant specifies the notification center type.
- [DistributedNotificationCenter.SuspensionBehavior](suspensionbehavior.md): These constants specify the types of notification delivery suspension behaviors.

# NSDistributedNotificationOptions (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

These constants specify the behavior of notifications posted using the [postNotificationName:object:userInfo:options:](postnotificationname%28__object_userinfo_options_%29.md) method.

## Declaration

```objectivec
enum NSDistributedNotificationOptions : NSUInteger;
```

## Topics

### Constants

- [NSNotificationDeliverImmediately](../nsnotificationdeliverimmediately.md): When set, the notification is delivered immediately to all observers, regardless of their suspension behavior or suspension state. When not set, allows the normal suspension behavior of notification observers to take place.
- [NSDistributedNotificationDeliverImmediately](options/deliverimmediately.md): When set, the notification is delivered immediately to all observers, regardless of their suspension behavior or suspension state.
- [NSNotificationPostToAllSessions](../nsnotificationposttoallsessions.md): When set, the notification is posted to all sessions. When not set, the notification is sent only to applications within the same login session as the posting task.
- [NSDistributedNotificationPostToAllSessions](options/posttoallsessions.md): When set, the notification is posted to all sessions. When not set, the notification is sent only to applications within the same login session as the posting task.

## See Also

### Constants

- [NSDistributedNotificationCenterType](centertype.md): This constant specifies the notification center type.
- [NSNotificationSuspensionBehavior](suspensionbehavior.md): These constants specify the types of notification delivery suspension behaviors.
