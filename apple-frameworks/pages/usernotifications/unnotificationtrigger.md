> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/unnotificationtrigger](https://developer.apple.com/documentation/usernotifications/unnotificationtrigger)

# UNNotificationTrigger (Swift)

**Framework:** User Notifications  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The common behavior for subclasses that trigger the delivery of a local or remote notification.

## Declaration

```swift
class UNNotificationTrigger
```

<a id="overview"></a>

## Overview

The [UNNotificationTrigger](unnotificationtrigger.md) class is an abstract class for representing an event that triggers the delivery of a notification. You don’t create instances of this class directly. Instead, you instantiate the concrete subclass that defines the trigger condition you want for your notification. You then assign the resulting object to the [UNNotificationRequest](unnotificationrequest.md) object that you use to schedule your notification.

Concrete trigger classes include the following:

- [UNTimeIntervalNotificationTrigger](untimeintervalnotificationtrigger.md)
- [UNCalendarNotificationTrigger](uncalendarnotificationtrigger.md)
- [UNLocationNotificationTrigger](unlocationnotificationtrigger.md)
- [UNPushNotificationTrigger](unpushnotificationtrigger.md)

## Topics

### Configuring the Trigger’s Behavior

- [repeats](unnotificationtrigger/repeats.md): A Boolean value indicating whether the system reschedules the notification after it’s delivered.

### Initializers

- [init(coder:)](unnotificationtrigger/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [UNCalendarNotificationTrigger](uncalendarnotificationtrigger.md)
- [UNLocationNotificationTrigger](unlocationnotificationtrigger.md)
- [UNPushNotificationTrigger](unpushnotificationtrigger.md)
- [UNTimeIntervalNotificationTrigger](untimeintervalnotificationtrigger.md)

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
- [UNPushNotificationTrigger](unpushnotificationtrigger.md): A trigger condition that indicates Apple Push Notification Service (APNs) has sent the notification.

# UNNotificationTrigger (Objective-C)

**Framework:** User Notifications  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The common behavior for subclasses that trigger the delivery of a local or remote notification.

## Declaration

```objectivec
@interface UNNotificationTrigger : NSObject
```

<a id="overview"></a>

## Overview

The [UNNotificationTrigger](unnotificationtrigger.md) class is an abstract class for representing an event that triggers the delivery of a notification. You don’t create instances of this class directly. Instead, you instantiate the concrete subclass that defines the trigger condition you want for your notification. You then assign the resulting object to the [UNNotificationRequest](unnotificationrequest.md) object that you use to schedule your notification.

Concrete trigger classes include the following:

- [UNTimeIntervalNotificationTrigger](untimeintervalnotificationtrigger.md)
- [UNCalendarNotificationTrigger](uncalendarnotificationtrigger.md)
- [UNLocationNotificationTrigger](unlocationnotificationtrigger.md)
- [UNPushNotificationTrigger](unpushnotificationtrigger.md)

## Topics

### Configuring the Trigger’s Behavior

- [repeats](unnotificationtrigger/repeats.md): A Boolean value indicating whether the system reschedules the notification after it’s delivered.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [UNCalendarNotificationTrigger](uncalendarnotificationtrigger.md)
- [UNLocationNotificationTrigger](unlocationnotificationtrigger.md)
- [UNPushNotificationTrigger](unpushnotificationtrigger.md)
- [UNTimeIntervalNotificationTrigger](untimeintervalnotificationtrigger.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Triggers

- [UNCalendarNotificationTrigger](uncalendarnotificationtrigger.md): A trigger condition that causes a notification the system delivers at a specific date and time.
- [UNTimeIntervalNotificationTrigger](untimeintervalnotificationtrigger.md): A trigger condition that causes the system to deliver a notification after the amount of time you specify elapses.
- [UNLocationNotificationTrigger](unlocationnotificationtrigger.md): A trigger condition that causes the system to deliver a notification when the user’s device enters or exits a geographic region you specify.
- [UNPushNotificationTrigger](unpushnotificationtrigger.md): A trigger condition that indicates Apple Push Notification Service (APNs) has sent the notification.
