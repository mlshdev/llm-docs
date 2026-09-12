> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsnotificationposttoallsessions](https://developer.apple.com/documentation/foundation/nsnotificationposttoallsessions)

# NSNotificationPostToAllSessions (Swift)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

When set, the notification is posted to all sessions. When not set, the notification is sent only to applications within the same login session as the posting task.

## Declaration

```swift
var NSNotificationPostToAllSessions: DistributedNotificationCenter.Options { get }
```

## See Also

### Constants

- [NSNotificationDeliverImmediately](nsnotificationdeliverimmediately.md): When set, the notification is delivered immediately to all observers, regardless of their suspension behavior or suspension state. When not set, allows the normal suspension behavior of notification observers to take place.
- [deliverImmediately](distributednotificationcenter/options/deliverimmediately.md): When set, the notification is delivered immediately to all observers, regardless of their suspension behavior or suspension state.
- [postToAllSessions](distributednotificationcenter/options/posttoallsessions.md): When set, the notification is posted to all sessions. When not set, the notification is sent only to applications within the same login session as the posting task.

# NSNotificationPostToAllSessions (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

When set, the notification is posted to all sessions. When not set, the notification is sent only to applications within the same login session as the posting task.

## Declaration

```objectivec
static const NSDistributedNotificationOptions NSNotificationPostToAllSessions;
```

## See Also

### Constants

- [NSNotificationDeliverImmediately](nsnotificationdeliverimmediately.md): When set, the notification is delivered immediately to all observers, regardless of their suspension behavior or suspension state. When not set, allows the normal suspension behavior of notification observers to take place.
- [NSDistributedNotificationDeliverImmediately](distributednotificationcenter/options/deliverimmediately.md): When set, the notification is delivered immediately to all observers, regardless of their suspension behavior or suspension state.
- [NSDistributedNotificationPostToAllSessions](distributednotificationcenter/options/posttoallsessions.md): When set, the notification is posted to all sessions. When not set, the notification is sent only to applications within the same login session as the posting task.
