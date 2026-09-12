> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/notificationqueue/notificationcoalescing](https://developer.apple.com/documentation/foundation/notificationqueue/notificationcoalescing)

# NotificationQueue.NotificationCoalescing (Swift)

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The constants that specify how notifications are coalesced.

## Declaration

```swift
struct NotificationCoalescing
```

<a id="overview"></a>

## Overview

These constants are used by the [enqueue(\_:postingStyle:coalesceMask:forModes:)](enqueue%28__postingstyle_coalescemask_formodes_%29.md) method.

## Topics

### Constants

- [none](notificationcoalescing/none.md): Do not coalesce notifications in the queue.
- [onName](notificationcoalescing/onname.md): Coalesce notifications with the same name.
- [onSender](notificationcoalescing/onsender.md): Coalesce notifications with the same object.

### Initializers

- [init(rawValue:)](notificationcoalescing/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Constants

- [NotificationQueue.PostingStyle](postingstyle.md): The constants that specify when notifications are posted.

# NSNotificationCoalescing (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The constants that specify how notifications are coalesced.

## Declaration

```objectivec
enum NSNotificationCoalescing : NSUInteger;
```

<a id="overview"></a>

## Overview

These constants are used by the [enqueueNotification:postingStyle:coalesceMask:forModes:](enqueue%28__postingstyle_coalescemask_formodes_%29.md) method.

## Topics

### Constants

- [NSNotificationNoCoalescing](notificationcoalescing/none.md): Do not coalesce notifications in the queue.
- [NSNotificationCoalescingOnName](notificationcoalescing/onname.md): Coalesce notifications with the same name.
- [NSNotificationCoalescingOnSender](notificationcoalescing/onsender.md): Coalesce notifications with the same object.

## See Also

### Constants

- [NSPostingStyle](postingstyle.md): The constants that specify when notifications are posted.
