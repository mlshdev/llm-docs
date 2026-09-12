> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfnotificationsuspensionbehavior](https://developer.apple.com/documentation/corefoundation/cfnotificationsuspensionbehavior)

# CFNotificationSuspensionBehavior (Swift)

**Framework:** Core Foundation  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Suspension flags that indicate how distributed notifications should be handled when the receiving application is in the background.

## Declaration

```swift
enum CFNotificationSuspensionBehavior
```

<a id="overview"></a>

## Overview

An application selects the suspension behavior for a given notification when it registers an observer for that notification with [CFNotificationCenterAddObserver(\_:\_:\_:\_:\_:\_:)](cfnotificationcenteraddobserver%28____________%29.md).

## Topics

### Constants

- [CFNotificationSuspensionBehavior.drop](cfnotificationsuspensionbehavior/drop.md): The server will not queue any notifications of the specified name and object while the receiving application is in the background.
- [CFNotificationSuspensionBehavior.coalesce](cfnotificationsuspensionbehavior/coalesce.md): The server will only queue the last notification of the specified name and object; earlier notifications are dropped.
- [CFNotificationSuspensionBehavior.hold](cfnotificationsuspensionbehavior/hold.md): The server will hold all matching notifications until the queue has been filled (queue size determined by the server) at which point the server may flush queued notifications.
- [CFNotificationSuspensionBehavior.deliverImmediately](cfnotificationsuspensionbehavior/deliverimmediately.md): The server will deliver notifications of the specified name and object whether or not the application is in the background. When a notification with this suspension behavior is matched, it has the effect of first flushing any queued notifications.

### Initializers

- [init(rawValue:)](cfnotificationsuspensionbehavior/init%28rawvalue_%29.md)

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

- [Notification Posting Options](1569610-notification-posting-options.md): Possible options when posting notifications.

# CFNotificationSuspensionBehavior (Objective-C)

**Framework:** Core Foundation  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Suspension flags that indicate how distributed notifications should be handled when the receiving application is in the background.

## Declaration

```objectivec
enum CFNotificationSuspensionBehavior : CFIndex;
```

<a id="overview"></a>

## Overview

An application selects the suspension behavior for a given notification when it registers an observer for that notification with [CFNotificationCenterAddObserver](cfnotificationcenteraddobserver%28____________%29.md).

## Topics

### Constants

- [CFNotificationSuspensionBehaviorDrop](cfnotificationsuspensionbehavior/drop.md): The server will not queue any notifications of the specified name and object while the receiving application is in the background.
- [CFNotificationSuspensionBehaviorCoalesce](cfnotificationsuspensionbehavior/coalesce.md): The server will only queue the last notification of the specified name and object; earlier notifications are dropped.
- [CFNotificationSuspensionBehaviorHold](cfnotificationsuspensionbehavior/hold.md): The server will hold all matching notifications until the queue has been filled (queue size determined by the server) at which point the server may flush queued notifications.
- [CFNotificationSuspensionBehaviorDeliverImmediately](cfnotificationsuspensionbehavior/deliverimmediately.md): The server will deliver notifications of the specified name and object whether or not the application is in the background. When a notification with this suspension behavior is matched, it has the effect of first flushing any queued notifications.

## See Also

### Constants

- [Notification Posting Options](1569610-notification-posting-options.md): Possible options when posting notifications.
