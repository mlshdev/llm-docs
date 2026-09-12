> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfnotificationsuspensionbehavior/coalesce](https://developer.apple.com/documentation/corefoundation/cfnotificationsuspensionbehavior/coalesce)

# CFNotificationSuspensionBehavior.coalesce (Swift)

**Framework:** Core Foundation  
**Kind:** Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The server will only queue the last notification of the specified name and object; earlier notifications are dropped.

## Declaration

```swift
case coalesce
```

## See Also

### Constants

- [CFNotificationSuspensionBehavior.drop](drop.md): The server will not queue any notifications of the specified name and object while the receiving application is in the background.
- [CFNotificationSuspensionBehavior.hold](hold.md): The server will hold all matching notifications until the queue has been filled (queue size determined by the server) at which point the server may flush queued notifications.
- [CFNotificationSuspensionBehavior.deliverImmediately](deliverimmediately.md): The server will deliver notifications of the specified name and object whether or not the application is in the background. When a notification with this suspension behavior is matched, it has the effect of first flushing any queued notifications.

# CFNotificationSuspensionBehaviorCoalesce (Objective-C)

**Framework:** Core Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The server will only queue the last notification of the specified name and object; earlier notifications are dropped.

## Declaration

```objectivec
CFNotificationSuspensionBehaviorCoalesce
```

## See Also

### Constants

- [CFNotificationSuspensionBehaviorDrop](drop.md): The server will not queue any notifications of the specified name and object while the receiving application is in the background.
- [CFNotificationSuspensionBehaviorHold](hold.md): The server will hold all matching notifications until the queue has been filled (queue size determined by the server) at which point the server may flush queued notifications.
- [CFNotificationSuspensionBehaviorDeliverImmediately](deliverimmediately.md): The server will deliver notifications of the specified name and object whether or not the application is in the background. When a notification with this suspension behavior is matched, it has the effect of first flushing any queued notifications.
