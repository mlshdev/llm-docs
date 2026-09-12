> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfnotificationsuspensionbehavior/drop](https://developer.apple.com/documentation/corefoundation/cfnotificationsuspensionbehavior/drop)

# CFNotificationSuspensionBehavior.drop (Swift)

**Framework:** Core Foundation  
**Kind:** Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The server will not queue any notifications of the specified name and object while the receiving application is in the background.

## Declaration

```swift
case drop
```

## See Also

### Constants

- [CFNotificationSuspensionBehavior.coalesce](coalesce.md): The server will only queue the last notification of the specified name and object; earlier notifications are dropped.
- [CFNotificationSuspensionBehavior.hold](hold.md): The server will hold all matching notifications until the queue has been filled (queue size determined by the server) at which point the server may flush queued notifications.
- [CFNotificationSuspensionBehavior.deliverImmediately](deliverimmediately.md): The server will deliver notifications of the specified name and object whether or not the application is in the background. When a notification with this suspension behavior is matched, it has the effect of first flushing any queued notifications.

# CFNotificationSuspensionBehaviorDrop (Objective-C)

**Framework:** Core Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The server will not queue any notifications of the specified name and object while the receiving application is in the background.

## Declaration

```objectivec
CFNotificationSuspensionBehaviorDrop
```

## See Also

### Constants

- [CFNotificationSuspensionBehaviorCoalesce](coalesce.md): The server will only queue the last notification of the specified name and object; earlier notifications are dropped.
- [CFNotificationSuspensionBehaviorHold](hold.md): The server will hold all matching notifications until the queue has been filled (queue size determined by the server) at which point the server may flush queued notifications.
- [CFNotificationSuspensionBehaviorDeliverImmediately](deliverimmediately.md): The server will deliver notifications of the specified name and object whether or not the application is in the background. When a notification with this suspension behavior is matched, it has the effect of first flushing any queued notifications.
