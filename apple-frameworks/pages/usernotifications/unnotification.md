> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/unnotification](https://developer.apple.com/documentation/usernotifications/unnotification)

# UNNotification (Swift)

**Framework:** User Notifications  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The data for a local or remote notification the system delivers to your app.

## Declaration

```swift
class UNNotification
```

<a id="overview"></a>

## Overview

A [UNNotification](unnotification.md) object contains the initial notification request, which contains the notification’s payload, and the date that the system delivered the notification.

Don’t create notification objects directly. When handling notifications, the system delivers notification objects to your [UNUserNotificationCenterDelegate](unusernotificationcenterdelegate.md) object. The [UNUserNotificationCenter](unusernotificationcenter.md) object also maintains the list of notifications that the system delivers, and you use the [getDeliveredNotifications(completionHandler:)](unusernotificationcenter/getdeliverednotifications%28completionhandler_%29.md) method to retrieve those objects.

## Topics

### Getting the Notification Details

- [request](unnotification/request.md): The notification request containing the payload and trigger condition for the notification.
- [date](unnotification/date.md): The delivery date of the notification.

### Initializers

- [init(coder:)](unnotification/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

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

### Notification requests

- [Scheduling a notification locally from your app](scheduling-a-notification-locally-from-your-app.md): Create and schedule notifications from your app when you want to get the user’s attention.
- [UNNotificationRequest](unnotificationrequest.md): A request to schedule a local notification, which includes the content of the notification and the trigger conditions for delivery.

# UNNotification (Objective-C)

**Framework:** User Notifications  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The data for a local or remote notification the system delivers to your app.

## Declaration

```objectivec
@interface UNNotification : NSObject
```

<a id="overview"></a>

## Overview

A [UNNotification](unnotification.md) object contains the initial notification request, which contains the notification’s payload, and the date that the system delivered the notification.

Don’t create notification objects directly. When handling notifications, the system delivers notification objects to your [UNUserNotificationCenterDelegate](unusernotificationcenterdelegate.md) object. The [UNUserNotificationCenter](unusernotificationcenter.md) object also maintains the list of notifications that the system delivers, and you use the [getDeliveredNotificationsWithCompletionHandler:](unusernotificationcenter/getdeliverednotifications%28completionhandler_%29.md) method to retrieve those objects.

## Topics

### Getting the Notification Details

- [request](unnotification/request.md): The notification request containing the payload and trigger condition for the notification.
- [date](unnotification/date.md): The delivery date of the notification.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Notification requests

- [Scheduling a notification locally from your app](scheduling-a-notification-locally-from-your-app.md): Create and schedule notifications from your app when you want to get the user’s attention.
- [UNNotificationRequest](unnotificationrequest.md): A request to schedule a local notification, which includes the content of the notification and the trigger conditions for delivery.
