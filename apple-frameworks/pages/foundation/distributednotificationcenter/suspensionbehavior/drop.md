> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/distributednotificationcenter/suspensionbehavior/drop](https://developer.apple.com/documentation/foundation/distributednotificationcenter/suspensionbehavior/drop)

# DistributedNotificationCenter.SuspensionBehavior.drop (Swift)

**Framework:** Foundation  
**Kind:** Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The server doesn’t queue any notifications with this name and object until the notification center resumes notification delivery.

## Declaration

```swift
case drop
```

<a id="discussion"></a>

## Discussion

To resume notification delivery, set the [suspended](../suspended.md) to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Constants

- [DistributedNotificationCenter.SuspensionBehavior.coalesce](coalesce.md): The server only queues the last notification of the specified name and object; earlier notifications are dropped. In cover methods for which suspension behavior is not an explicit argument, `NSNotificationSuspensionBehaviorCoalesce` is the default.
- [DistributedNotificationCenter.SuspensionBehavior.hold](hold.md): The server holds all matching notifications until the queue has been filled (queue size determined by the server), at which point the server may flush queued notifications.
- [DistributedNotificationCenter.SuspensionBehavior.deliverImmediately](deliverimmediately.md)

# NSNotificationSuspensionBehaviorDrop (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The server doesn’t queue any notifications with this name and object until the notification center resumes notification delivery.

## Declaration

```objectivec
NSNotificationSuspensionBehaviorDrop
```

<a id="discussion"></a>

## Discussion

To resume notification delivery, set the [suspended](../suspended.md) to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Constants

- [NSNotificationSuspensionBehaviorCoalesce](coalesce.md): The server only queues the last notification of the specified name and object; earlier notifications are dropped. In cover methods for which suspension behavior is not an explicit argument, `NSNotificationSuspensionBehaviorCoalesce` is the default.
- [NSNotificationSuspensionBehaviorHold](hold.md): The server holds all matching notifications until the queue has been filled (queue size determined by the server), at which point the server may flush queued notifications.
- [NSNotificationSuspensionBehaviorDeliverImmediately](deliverimmediately.md)
