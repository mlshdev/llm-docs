> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/notificationqueue/notificationcoalescing/onsender

# onSender (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Coalesce notifications with the same object.

## Declaration

```swift
static var onSender: NotificationQueue.NotificationCoalescing { get }
```

## See Also

### Constants

- [none](none.md): Do not coalesce notifications in the queue.
- [onName](onname.md): Coalesce notifications with the same name.

# NSNotificationCoalescingOnSender (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Coalesce notifications with the same object.

## Declaration

```objectivec
NSNotificationCoalescingOnSender
```

## See Also

### Constants

- [NSNotificationNoCoalescing](none.md): Do not coalesce notifications in the queue.
- [NSNotificationCoalescingOnName](onname.md): Coalesce notifications with the same name.
