> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/notificationqueue/notificationcoalescing/none](https://developer.apple.com/documentation/foundation/notificationqueue/notificationcoalescing/none)

# none (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Do not coalesce notifications in the queue.

## Declaration

```swift
static var none: NotificationQueue.NotificationCoalescing { get }
```

## See Also

### Constants

- [onName](onname.md): Coalesce notifications with the same name.
- [onSender](onsender.md): Coalesce notifications with the same object.

# NSNotificationNoCoalescing (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Do not coalesce notifications in the queue.

## Declaration

```objectivec
NSNotificationNoCoalescing
```

## See Also

### Constants

- [NSNotificationCoalescingOnName](onname.md): Coalesce notifications with the same name.
- [NSNotificationCoalescingOnSender](onsender.md): Coalesce notifications with the same object.
