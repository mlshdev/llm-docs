> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckquerynotification](https://developer.apple.com/documentation/cloudkit/ckquerynotification)

# CKQueryNotification (Swift)

**Framework:** CloudKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

A notification that triggers when a record that matches the subscription’s predicate changes.

## Declaration

```swift
class CKQueryNotification
```

<a id="overview"></a>

## Overview

Query subscriptions execute when a record that matches the subscription’s predicate changes, for example, when the user modifies a field’s value in the record. When CloudKit registers the change, it sends push notifications to the user’s devices to inform your app about the change. You can then fetch the changes and cache them on-device. When appropriate, CloudKit excludes the device where the change originates.

You configure a subscription’s notifications by setting its [notificationInfo](cksubscription/notificationinfo-swift.property.md) property. Do this before you save it to the server. A subscription generates either high-priority or medium-priority push notifications. CloudKit delivers medium-priority notifications to your app in the background. High-priority notifications are visual and the system displays them to the user. Visual notifications need the user’s permission. For more information, see [Asking permission to use notifications](../usernotifications/asking-permission-to-use-notifications.md).

A subscription uses [CKSubscription.NotificationInfo](cksubscription/notificationinfo-swift.class.md) to configure its notifications. For background delivery, set only its [shouldSendContentAvailable](cksubscription/notificationinfo-swift.class/shouldsendcontentavailable.md) property to [true](https://developer.apple.com/documentation/swift/true). If you set any other property, CloudKit treats the notification as high-priority.

> **Note**

> To receive silent push notifications, add the Background Modes capability to your Xcode project, and select the “Background fetch” and “Remote notifications” options.

Don’t rely on push notifications for changes because the system can coalesce them. CloudKit can omit data to keep the notification’s payload size under the APNs size limit. If you use [desiredKeys](cksubscription/notificationinfo-swift.class/desiredkeys.md) to include extra data in the payload, the server removes that first. A notification’s [isPruned](cknotification/ispruned.md) property is [true](https://developer.apple.com/documentation/swift/true) if CloudKit omits data.

Consider notifications an indication of remote changes. Use [databaseScope](ckdatabasenotification/databasescope.md) to determine which database contains the changed record. To fetch the changes, configure an instance of [CKQueryOperation](ckqueryoperation.md) to match the subscription and then execute it in the database. CloudKit returns all records that match the predicate, including the changed record. Dispose of any records you cache on-device and use the operation’s results instead.

You don’t instantiate this class. Instead, implement [application(\_:didReceiveRemoteNotification:fetchCompletionHandler:)](../uikit/uiapplicationdelegate/application%28__didreceiveremotenotification_fetchcompletionhandler_%29.md) in your app delegate. Initialize [CKNotification](cknotification.md) with the `userInfo` dictionary that CloudKit passes to the method. This returns an instance of the appropriate subclass. Use the [notificationType](cknotification/notificationtype-swift.property.md) property to determine the type. Then cast to that type to access type-specific properties and methods.

## Topics

### Getting the Database Scope

- [databaseScope](ckquerynotification/databasescope.md): The type of database for the record zone.

### Getting the Notification Attributes

- [queryNotificationReason](ckquerynotification/querynotificationreason.md): The event that triggers the push notification.
- [CKQueryNotification.Reason](ckquerynotification/reason.md): Constants that indicate the event that triggers the notification.

### Getting the Record Information

- [recordID](ckquerynotification/recordid.md): The ID of the record that CloudKit creates, updates, or deletes.
- [recordFields](ckquerynotification/recordfields.md): A dictionary of fields that have changes.

## Relationships

### Inherits From

- [CKNotification](cknotification.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Predicate-Driven Changes

- [CKQuerySubscription](ckquerysubscription.md): A subscription that generates push notifications when CloudKit modifies records that match a predicate.

# CKQueryNotification (Objective-C)

**Framework:** CloudKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

A notification that triggers when a record that matches the subscription’s predicate changes.

## Declaration

```objectivec
@interface CKQueryNotification : CKNotification
```

<a id="overview"></a>

## Overview

Query subscriptions execute when a record that matches the subscription’s predicate changes, for example, when the user modifies a field’s value in the record. When CloudKit registers the change, it sends push notifications to the user’s devices to inform your app about the change. You can then fetch the changes and cache them on-device. When appropriate, CloudKit excludes the device where the change originates.

You configure a subscription’s notifications by setting its [notificationInfo](cksubscription/notificationinfo-swift.property.md) property. Do this before you save it to the server. A subscription generates either high-priority or medium-priority push notifications. CloudKit delivers medium-priority notifications to your app in the background. High-priority notifications are visual and the system displays them to the user. Visual notifications need the user’s permission. For more information, see [Asking permission to use notifications](../usernotifications/asking-permission-to-use-notifications.md).

A subscription uses [CKNotificationInfo](cksubscription/notificationinfo-swift.class.md) to configure its notifications. For background delivery, set only its [shouldSendContentAvailable](cksubscription/notificationinfo-swift.class/shouldsendcontentavailable.md) property to [true](https://developer.apple.com/documentation/swift/true). If you set any other property, CloudKit treats the notification as high-priority.

> **Note**

> To receive silent push notifications, add the Background Modes capability to your Xcode project, and select the “Background fetch” and “Remote notifications” options.

Don’t rely on push notifications for changes because the system can coalesce them. CloudKit can omit data to keep the notification’s payload size under the APNs size limit. If you use [desiredKeys](cksubscription/notificationinfo-swift.class/desiredkeys.md) to include extra data in the payload, the server removes that first. A notification’s [isPruned](cknotification/ispruned.md) property is [true](https://developer.apple.com/documentation/swift/true) if CloudKit omits data.

Consider notifications an indication of remote changes. Use [databaseScope](ckdatabasenotification/databasescope.md) to determine which database contains the changed record. To fetch the changes, configure an instance of [CKQueryOperation](ckqueryoperation.md) to match the subscription and then execute it in the database. CloudKit returns all records that match the predicate, including the changed record. Dispose of any records you cache on-device and use the operation’s results instead.

You don’t instantiate this class. Instead, implement [application:didReceiveRemoteNotification:fetchCompletionHandler:](../uikit/uiapplicationdelegate/application%28__didreceiveremotenotification_fetchcompletionhandler_%29.md) in your app delegate. Initialize [CKNotification](cknotification.md) with the `userInfo` dictionary that CloudKit passes to the method. This returns an instance of the appropriate subclass. Use the [notificationType](cknotification/notificationtype-swift.property.md) property to determine the type. Then cast to that type to access type-specific properties and methods.

## Topics

### Getting the Database Scope

- [databaseScope](ckquerynotification/databasescope.md): The type of database for the record zone.

### Getting the Notification Attributes

- [queryNotificationReason](ckquerynotification/querynotificationreason.md): The event that triggers the push notification.
- [CKQueryNotificationReason](ckquerynotification/reason.md): Constants that indicate the event that triggers the notification.

### Getting the Record Information

- [recordID](ckquerynotification/recordid.md): The ID of the record that CloudKit creates, updates, or deletes.
- [recordFields](ckquerynotification/recordfields.md): A dictionary of fields that have changes.

## Relationships

### Inherits From

- [CKNotification](cknotification.md)

## See Also

### Predicate-Driven Changes

- [CKQuerySubscription](ckquerysubscription.md): A subscription that generates push notifications when CloudKit modifies records that match a predicate.
