> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/distributednotificationcenter/options/deliverimmediately](https://developer.apple.com/documentation/foundation/distributednotificationcenter/options/deliverimmediately)

# deliverImmediately (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

When set, the notification is delivered immediately to all observers, regardless of their suspension behavior or suspension state.

## Declaration

```swift
static var deliverImmediately: DistributedNotificationCenter.Options { get }
```

## See Also

### Constants

- [NSNotificationDeliverImmediately](../../nsnotificationdeliverimmediately.md): When set, the notification is delivered immediately to all observers, regardless of their suspension behavior or suspension state. When not set, allows the normal suspension behavior of notification observers to take place.
- [NSNotificationPostToAllSessions](../../nsnotificationposttoallsessions.md): When set, the notification is posted to all sessions. When not set, the notification is sent only to applications within the same login session as the posting task.
- [postToAllSessions](posttoallsessions.md): When set, the notification is posted to all sessions. When not set, the notification is sent only to applications within the same login session as the posting task.

# NSDistributedNotificationDeliverImmediately (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

When set, the notification is delivered immediately to all observers, regardless of their suspension behavior or suspension state.

## Declaration

```objectivec
NSDistributedNotificationDeliverImmediately
```

## See Also

### Constants

- [NSNotificationDeliverImmediately](../../nsnotificationdeliverimmediately.md): When set, the notification is delivered immediately to all observers, regardless of their suspension behavior or suspension state. When not set, allows the normal suspension behavior of notification observers to take place.
- [NSNotificationPostToAllSessions](../../nsnotificationposttoallsessions.md): When set, the notification is posted to all sessions. When not set, the notification is sent only to applications within the same login session as the posting task.
- [NSDistributedNotificationPostToAllSessions](posttoallsessions.md): When set, the notification is posted to all sessions. When not set, the notification is sent only to applications within the same login session as the posting task.
