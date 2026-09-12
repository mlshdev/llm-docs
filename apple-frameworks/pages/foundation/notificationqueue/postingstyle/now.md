> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/notificationqueue/postingstyle/now](https://developer.apple.com/documentation/foundation/notificationqueue/postingstyle/now)

# NotificationQueue.PostingStyle.now (Swift)

**Framework:** Foundation  
**Kind:** Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The notification is posted immediately after coalescing.

## Declaration

```swift
case now
```

## See Also

### Constants

- [NotificationQueue.PostingStyle.asap](asap.md): The notification is posted at the end of the current notification callout or timer.
- [NotificationQueue.PostingStyle.whenIdle](whenidle.md): The notification is posted when the run loop is idle.

# NSPostNow (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The notification is posted immediately after coalescing.

## Declaration

```objectivec
NSPostNow
```

## See Also

### Constants

- [NSPostASAP](asap.md): The notification is posted at the end of the current notification callout or timer.
- [NSPostWhenIdle](whenidle.md): The notification is posted when the run loop is idle.
