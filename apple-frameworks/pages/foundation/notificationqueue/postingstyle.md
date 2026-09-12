> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/notificationqueue/postingstyle](https://developer.apple.com/documentation/foundation/notificationqueue/postingstyle)

# NotificationQueue.PostingStyle (Swift)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The constants that specify when notifications are posted.

## Declaration

```swift
enum PostingStyle
```

<a id="overview"></a>

## Overview

These constants are used by the [enqueue(\_:postingStyle:)](enqueue%28__postingstyle_%29.md) and [enqueue(\_:postingStyle:coalesceMask:forModes:)](enqueue%28__postingstyle_coalescemask_formodes_%29.md) methods.

## Topics

### Constants

- [NotificationQueue.PostingStyle.asap](postingstyle/asap.md): The notification is posted at the end of the current notification callout or timer.
- [NotificationQueue.PostingStyle.whenIdle](postingstyle/whenidle.md): The notification is posted when the run loop is idle.
- [NotificationQueue.PostingStyle.now](postingstyle/now.md): The notification is posted immediately after coalescing.

### Initializers

- [init(rawValue:)](postingstyle/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Constants

- [NotificationQueue.NotificationCoalescing](notificationcoalescing.md): The constants that specify how notifications are coalesced.

# NSPostingStyle (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The constants that specify when notifications are posted.

## Declaration

```objectivec
enum NSPostingStyle : NSUInteger;
```

<a id="overview"></a>

## Overview

These constants are used by the [enqueueNotification:postingStyle:](enqueue%28__postingstyle_%29.md) and [enqueueNotification:postingStyle:coalesceMask:forModes:](enqueue%28__postingstyle_coalescemask_formodes_%29.md) methods.

## Topics

### Constants

- [NSPostASAP](postingstyle/asap.md): The notification is posted at the end of the current notification callout or timer.
- [NSPostWhenIdle](postingstyle/whenidle.md): The notification is posted when the run loop is idle.
- [NSPostNow](postingstyle/now.md): The notification is posted immediately after coalescing.

## See Also

### Constants

- [NSNotificationCoalescing](notificationcoalescing.md): The constants that specify how notifications are coalesced.
