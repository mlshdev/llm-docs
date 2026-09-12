> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/unpushnotificationtrigger](https://developer.apple.com/documentation/usernotifications/unpushnotificationtrigger)

# UNPushNotificationTrigger (Swift)

**Framework:** User Notifications  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A trigger condition that indicates Apple Push Notification Service (APNs) has sent the notification.

## Declaration

```swift
class UNPushNotificationTrigger
```

<a id="overview"></a>

## Overview

You don’t create instances of this class yourself. The system creates [UNPushNotificationTrigger](unpushnotificationtrigger.md) objects and associates them with requests that originated from Apple Push Notification service. You encounter instances of this class when managing your app’s delivered notification requests, which store an object of this type in their [trigger](unnotificationrequest/trigger.md) property.

## Relationships

### Inherits From

- [UNNotificationTrigger](unnotificationtrigger.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Triggers

- [UNCalendarNotificationTrigger](uncalendarnotificationtrigger.md): A trigger condition that causes a notification the system delivers at a specific date and time.
- [UNTimeIntervalNotificationTrigger](untimeintervalnotificationtrigger.md): A trigger condition that causes the system to deliver a notification after the amount of time you specify elapses.
- [UNLocationNotificationTrigger](unlocationnotificationtrigger.md): A trigger condition that causes the system to deliver a notification when the user’s device enters or exits a geographic region you specify.
- [UNNotificationTrigger](unnotificationtrigger.md): The common behavior for subclasses that trigger the delivery of a local or remote notification.

# UNPushNotificationTrigger (Objective-C)

**Framework:** User Notifications  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A trigger condition that indicates Apple Push Notification Service (APNs) has sent the notification.

## Declaration

```objectivec
@interface UNPushNotificationTrigger : UNNotificationTrigger
```

<a id="overview"></a>

## Overview

You don’t create instances of this class yourself. The system creates [UNPushNotificationTrigger](unpushnotificationtrigger.md) objects and associates them with requests that originated from Apple Push Notification service. You encounter instances of this class when managing your app’s delivered notification requests, which store an object of this type in their [trigger](unnotificationrequest/trigger.md) property.

## Relationships

### Inherits From

- [UNNotificationTrigger](unnotificationtrigger.md)

## See Also

### Triggers

- [UNCalendarNotificationTrigger](uncalendarnotificationtrigger.md): A trigger condition that causes a notification the system delivers at a specific date and time.
- [UNTimeIntervalNotificationTrigger](untimeintervalnotificationtrigger.md): A trigger condition that causes the system to deliver a notification after the amount of time you specify elapses.
- [UNLocationNotificationTrigger](unlocationnotificationtrigger.md): A trigger condition that causes the system to deliver a notification when the user’s device enters or exits a geographic region you specify.
- [UNNotificationTrigger](unnotificationtrigger.md): The common behavior for subclasses that trigger the delivery of a local or remote notification.
