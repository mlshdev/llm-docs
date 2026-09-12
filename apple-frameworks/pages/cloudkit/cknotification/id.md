> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cknotification/id](https://developer.apple.com/documentation/cloudkit/cknotification/id)

# CKNotification.ID (Swift)

**Framework:** CloudKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

An object that uniquely identifies a push notification that a container sends.

## Declaration

```swift
class ID
```

<a id="overview"></a>

## Overview

You don’t create notification IDs directly. The server creates them when it creates instances of [CKNotification](../cknotification.md) that correspond to the push notifications that CloudKit sends to your app. You can compare two IDs using the [isEqual(\_:)](../../objectivec/nsobjectprotocol/isequal%28__%29.md) method to determine whether two notifications are the same. This class defines no methods or properties.

## Topics

### Initializers

- [init(coder:)](id/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../../foundation/nscoding.md)
- [NSCopying](../../foundation/nscopying.md)
- [NSObjectProtocol](../../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Identifying the Notification

- [notificationID](notificationid.md): The notification’s ID.
- [notificationType](notificationtype-swift.property.md): The type of event that generates the notification.
- [CKNotification.NotificationType](notificationtype-swift.enum.md): Constants that indicate the type of event that generates the push notification.
- [containerIdentifier](containeridentifier.md): The ID of the container with the content that triggers the notification.

# CKNotificationID (Objective-C)

**Framework:** CloudKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

An object that uniquely identifies a push notification that a container sends.

## Declaration

```objectivec
@interface CKNotificationID : NSObject
```

<a id="overview"></a>

## Overview

You don’t create notification IDs directly. The server creates them when it creates instances of [CKNotification](../cknotification.md) that correspond to the push notifications that CloudKit sends to your app. You can compare two IDs using the [isEqual:](../../objectivec/nsobjectprotocol/isequal%28__%29.md) method to determine whether two notifications are the same. This class defines no methods or properties.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../../foundation/nscopying.md)
- [NSSecureCoding](../../foundation/nssecurecoding.md)

## See Also

### Identifying the Notification

- [notificationID](notificationid.md): The notification’s ID.
- [notificationType](notificationtype-swift.property.md): The type of event that generates the notification.
- [CKNotificationType](notificationtype-swift.enum.md): Constants that indicate the type of event that generates the push notification.
- [containerIdentifier](containeridentifier.md): The ID of the container with the content that triggers the notification.
