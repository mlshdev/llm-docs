> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/notificationqueue/notificationcoalescing/onname](https://developer.apple.com/documentation/foundation/notificationqueue/notificationcoalescing/onname)

# onName (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Coalesce notifications with the same name.

## Declaration

```swift
static var onName: NotificationQueue.NotificationCoalescing { get }
```

## See Also

### Constants

- [none](none.md): Do not coalesce notifications in the queue.
- [onSender](onsender.md): Coalesce notifications with the same object.

# NSNotificationCoalescingOnName (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Coalesce notifications with the same name.

## Declaration

```objectivec
NSNotificationCoalescingOnName
```

## See Also

### Constants

- [NSNotificationNoCoalescing](none.md): Do not coalesce notifications in the queue.
- [NSNotificationCoalescingOnSender](onsender.md): Coalesce notifications with the same object.
