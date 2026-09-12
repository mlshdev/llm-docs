> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksubscription/notificationinfo-swift.class](https://developer.apple.com/documentation/cloudkit/cksubscription/notificationinfo-swift.class)

# CKSubscription.NotificationInfo (Swift)

**Framework:** CloudKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 6.0+

An object that describes the configuration of a subscription’s push notifications.

## Declaration

```swift
class NotificationInfo
```

<a id="overview"></a>

## Overview

When configuring a subscription, use this class to specify the type of push notifications you want to generate when conditions meet the subscription’s trigger. You can provide content that the system displays to the user, describe the sounds to play, and indicate whether the app’s icon has a badge. You can request that the notification include information about the record that triggers it.

When your app receives a push notification that a subscription generates, instantiate an instance of [CKNotification](../cknotification.md) using the [init(fromRemoteNotificationDictionary:)](../cknotification/init%28fromremotenotificationdictionary_%29.md) method and pass the notification’s payload. The object that the method returns contains the data you specify when configuring the subscription.

For more information about push notification alerts and how they display to the user, see [Apple Push Notification Service](https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/Chapters/ApplePushService.html#//apple_ref/doc/uid/TP40008194-CH100) in [Local and Remote Notification Programming Guide](https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/index.html#//apple_ref/doc/uid/TP40008194).

> **Note**

> If you don’t set any of the [alertBody](notificationinfo-swift.class/alertbody.md), [soundName](notificationinfo-swift.class/soundname.md), or [shouldBadge](notificationinfo-swift.class/shouldbadge.md) properties, CloudKit sends the push notification using a lower priority and doesn’t display any content to the user.

## Topics

### Creating Notification Information

- [init(alertBody:alertLocalizationKey:alertLocalizationArgs:title:titleLocalizationKey:titleLocalizationArgs:subtitle:subtitleLocalizationKey:subtitleLocalizationArgs:alertActionLocalizationKey:alertLaunchImage:soundName:desiredKeys:shouldBadge:shouldSendContentAvailable:shouldSendMutableContent:category:collapseIDKey:)](notificationinfo-swift.class/init%28alertbody_alertlocalizationkey_alertlocalizationargs_title_titlelocalizationkey_titlelocalizationargs_subtitle_subtitlelocalizationkey_subtitlelocalizationargs_alertactionloca~a72a0c89.md): Creates a notification with the specified values.

### Grouping Notifications

- [category](notificationinfo-swift.class/category.md): The name of the action group that corresponds to this notification.
- [collapseIDKey](notificationinfo-swift.class/collapseidkey.md): A value that the system uses to coalesce unseen push notifications.

### Displaying Badges

- [shouldBadge](notificationinfo-swift.class/shouldbadge.md): A Boolean value that determines whether an app’s icon badge increments its value.

### Accessing the Notification Alert

- [alertBody](notificationinfo-swift.class/alertbody.md): The text for the notification’s alert.
- [alertLocalizationKey](notificationinfo-swift.class/alertlocalizationkey.md): The key that identifies the localized string for the notification’s alert.
- [alertLocalizationArgs](notificationinfo-swift.class/alertlocalizationargs.md): The fields for building a notification’s alert.
- [alertActionLocalizationKey](notificationinfo-swift.class/alertactionlocalizationkey.md): The key that identifies the localized string for the notification’s action.
- [alertLaunchImage](notificationinfo-swift.class/alertlaunchimage.md): The filename of an image to use as a launch image.
- [soundName](notificationinfo-swift.class/soundname.md): The filename of the sound file to play when a notification arrives.

### Accessing the Notification Info

- [shouldSendContentAvailable](notificationinfo-swift.class/shouldsendcontentavailable.md): A Boolean value that indicates whether the push notification includes the content available flag.
- [shouldSendMutableContent](notificationinfo-swift.class/shouldsendmutablecontent.md): A Boolean value that indicates whether the push notification sets the mutable content flag.

### Accessing the Record’s Data

- [desiredKeys](notificationinfo-swift.class/desiredkeys.md): The names of fields to include in the push notification’s payload.

### Accessing the Notification Title

- [title](notificationinfo-swift.class/title.md): The notification’s title.
- [titleLocalizationKey](notificationinfo-swift.class/titlelocalizationkey.md): The key that identifies the localized string for the notification’s title.
- [titleLocalizationArgs](notificationinfo-swift.class/titlelocalizationargs.md): The fields for building a notification’s title.

### Accessing the Notification Subtitle

- [subtitle](notificationinfo-swift.class/subtitle.md): The notification’s subtitle.
- [subtitleLocalizationKey](notificationinfo-swift.class/subtitlelocalizationkey.md): The key that identifies the localized string for the notification’s subtitle.
- [subtitleLocalizationArgs](notificationinfo-swift.class/subtitlelocalizationargs.md): The fields for building a notification’s subtitle.

### Initializers

- [init(coder:)](notificationinfo-swift.class/init%28coder_%29.md)

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

### Specifying the Push Notification Data

- [notificationInfo](notificationinfo-swift.property.md): The configuration for a subscription’s push notifications.

# CKNotificationInfo (Objective-C)

**Framework:** CloudKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 6.0+

An object that describes the configuration of a subscription’s push notifications.

## Declaration

```objectivec
@interface CKNotificationInfo : NSObject
```

<a id="overview"></a>

## Overview

When configuring a subscription, use this class to specify the type of push notifications you want to generate when conditions meet the subscription’s trigger. You can provide content that the system displays to the user, describe the sounds to play, and indicate whether the app’s icon has a badge. You can request that the notification include information about the record that triggers it.

When your app receives a push notification that a subscription generates, instantiate an instance of [CKNotification](../cknotification.md) using the [notificationFromRemoteNotificationDictionary:](../cknotification/init%28fromremotenotificationdictionary_%29.md) method and pass the notification’s payload. The object that the method returns contains the data you specify when configuring the subscription.

For more information about push notification alerts and how they display to the user, see [Apple Push Notification Service](https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/Chapters/ApplePushService.html#//apple_ref/doc/uid/TP40008194-CH100) in [Local and Remote Notification Programming Guide](https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/index.html#//apple_ref/doc/uid/TP40008194).

> **Note**

> If you don’t set any of the [alertBody](notificationinfo-swift.class/alertbody.md), [soundName](notificationinfo-swift.class/soundname.md), or [shouldBadge](notificationinfo-swift.class/shouldbadge.md) properties, CloudKit sends the push notification using a lower priority and doesn’t display any content to the user.

## Topics

### Grouping Notifications

- [category](notificationinfo-swift.class/category.md): The name of the action group that corresponds to this notification.
- [collapseIDKey](notificationinfo-swift.class/collapseidkey.md): A value that the system uses to coalesce unseen push notifications.

### Displaying Badges

- [shouldBadge](notificationinfo-swift.class/shouldbadge.md): A Boolean value that determines whether an app’s icon badge increments its value.

### Accessing the Notification Alert

- [alertBody](notificationinfo-swift.class/alertbody.md): The text for the notification’s alert.
- [alertLocalizationKey](notificationinfo-swift.class/alertlocalizationkey.md): The key that identifies the localized string for the notification’s alert.
- [alertLocalizationArgs](../cknotificationinfo/alertlocalizationargs.md): The fields for building a notification’s alert.
- [alertActionLocalizationKey](notificationinfo-swift.class/alertactionlocalizationkey.md): The key that identifies the localized string for the notification’s action.
- [alertLaunchImage](notificationinfo-swift.class/alertlaunchimage.md): The filename of an image to use as a launch image.
- [soundName](notificationinfo-swift.class/soundname.md): The filename of the sound file to play when a notification arrives.

### Accessing the Notification Info

- [shouldSendContentAvailable](notificationinfo-swift.class/shouldsendcontentavailable.md): A Boolean value that indicates whether the push notification includes the content available flag.
- [shouldSendMutableContent](notificationinfo-swift.class/shouldsendmutablecontent.md): A Boolean value that indicates whether the push notification sets the mutable content flag.

### Accessing the Record’s Data

- [desiredKeys](../cknotificationinfo/desiredkeys.md): The names of fields to include in the push notification’s payload.

### Accessing the Notification Title

- [title](notificationinfo-swift.class/title.md): The notification’s title.
- [titleLocalizationKey](notificationinfo-swift.class/titlelocalizationkey.md): The key that identifies the localized string for the notification’s title.
- [titleLocalizationArgs](../cknotificationinfo/titlelocalizationargs.md): The fields for building a notification’s title.

### Accessing the Notification Subtitle

- [subtitle](notificationinfo-swift.class/subtitle.md): The notification’s subtitle.
- [subtitleLocalizationKey](notificationinfo-swift.class/subtitlelocalizationkey.md): The key that identifies the localized string for the notification’s subtitle.
- [subtitleLocalizationArgs](../cknotificationinfo/subtitlelocalizationargs.md): The fields for building a notification’s subtitle.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../../foundation/nscopying.md)
- [NSSecureCoding](../../foundation/nssecurecoding.md)

## See Also

### Specifying the Push Notification Data

- [notificationInfo](notificationinfo-swift.property.md): The configuration for a subscription’s push notifications.
