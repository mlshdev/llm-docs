> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/notificationqueue/postingstyle/asap](https://developer.apple.com/documentation/foundation/notificationqueue/postingstyle/asap)

# NotificationQueue.PostingStyle.asap (Swift)

**Framework:** Foundation  
**Kind:** Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The notification is posted at the end of the current notification callout or timer.

## Declaration

```swift
case asap
```

## See Also

### Constants

- [NotificationQueue.PostingStyle.whenIdle](whenidle.md): The notification is posted when the run loop is idle.
- [NotificationQueue.PostingStyle.now](now.md): The notification is posted immediately after coalescing.

# NSPostASAP (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The notification is posted at the end of the current notification callout or timer.

## Declaration

```objectivec
NSPostASAP
```

## See Also

### Constants

- [NSPostWhenIdle](whenidle.md): The notification is posted when the run loop is idle.
- [NSPostNow](now.md): The notification is posted immediately after coalescing.
