> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsnotificationdeliverimmediately](https://developer.apple.com/documentation/foundation/nsnotificationdeliverimmediately)

# NSNotificationDeliverImmediately (Swift)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

When set, the notification is delivered immediately to all observers, regardless of their suspension behavior or suspension state. When not set, allows the normal suspension behavior of notification observers to take place.

## Declaration

```swift
var NSNotificationDeliverImmediately: DistributedNotificationCenter.Options { get }
```

## See Also

### Constants

- [deliverImmediately](distributednotificationcenter/options/deliverimmediately.md): When set, the notification is delivered immediately to all observers, regardless of their suspension behavior or suspension state.
- [NSNotificationPostToAllSessions](nsnotificationposttoallsessions.md): When set, the notification is posted to all sessions. When not set, the notification is sent only to applications within the same login session as the posting task.
- [postToAllSessions](distributednotificationcenter/options/posttoallsessions.md): When set, the notification is posted to all sessions. When not set, the notification is sent only to applications within the same login session as the posting task.

# NSNotificationDeliverImmediately (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

When set, the notification is delivered immediately to all observers, regardless of their suspension behavior or suspension state. When not set, allows the normal suspension behavior of notification observers to take place.

## Declaration

```objectivec
static const NSDistributedNotificationOptions NSNotificationDeliverImmediately;
```

## See Also

### Constants

- [NSDistributedNotificationDeliverImmediately](distributednotificationcenter/options/deliverimmediately.md): When set, the notification is delivered immediately to all observers, regardless of their suspension behavior or suspension state.
- [NSNotificationPostToAllSessions](nsnotificationposttoallsessions.md): When set, the notification is posted to all sessions. When not set, the notification is sent only to applications within the same login session as the posting task.
- [NSDistributedNotificationPostToAllSessions](distributednotificationcenter/options/posttoallsessions.md): When set, the notification is posted to all sessions. When not set, the notification is sent only to applications within the same login session as the posting task.
