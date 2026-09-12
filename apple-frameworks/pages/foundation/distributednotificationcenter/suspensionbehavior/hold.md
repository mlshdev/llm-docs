> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/distributednotificationcenter/suspensionbehavior/hold](https://developer.apple.com/documentation/foundation/distributednotificationcenter/suspensionbehavior/hold)

# DistributedNotificationCenter.SuspensionBehavior.hold (Swift)

**Framework:** Foundation  
**Kind:** Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The server holds all matching notifications until the queue has been filled (queue size determined by the server), at which point the server may flush queued notifications.

## Declaration

```swift
case hold
```

## See Also

### Constants

- [DistributedNotificationCenter.SuspensionBehavior.drop](drop.md): The server doesn’t queue any notifications with this name and object until the notification center resumes notification delivery.
- [DistributedNotificationCenter.SuspensionBehavior.coalesce](coalesce.md): The server only queues the last notification of the specified name and object; earlier notifications are dropped. In cover methods for which suspension behavior is not an explicit argument, `NSNotificationSuspensionBehaviorCoalesce` is the default.
- [DistributedNotificationCenter.SuspensionBehavior.deliverImmediately](deliverimmediately.md)

# NSNotificationSuspensionBehaviorHold (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The server holds all matching notifications until the queue has been filled (queue size determined by the server), at which point the server may flush queued notifications.

## Declaration

```objectivec
NSNotificationSuspensionBehaviorHold
```

## See Also

### Constants

- [NSNotificationSuspensionBehaviorDrop](drop.md): The server doesn’t queue any notifications with this name and object until the notification center resumes notification delivery.
- [NSNotificationSuspensionBehaviorCoalesce](coalesce.md): The server only queues the last notification of the specified name and object; earlier notifications are dropped. In cover methods for which suspension behavior is not an explicit argument, `NSNotificationSuspensionBehaviorCoalesce` is the default.
- [NSNotificationSuspensionBehaviorDeliverImmediately](deliverimmediately.md)
