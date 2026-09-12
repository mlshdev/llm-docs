> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckrecordzonenotification](https://developer.apple.com/documentation/cloudkit/ckrecordzonenotification)

# CKRecordZoneNotification (Swift)

**Framework:** CloudKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

A notification that triggers when the contents of a record zone change.

## Declaration

```swift
class CKRecordZoneNotification
```

<a id="overview"></a>

## Overview

A record zone subscription executes when a user, or in certain scenarios, CloudKit, modifies a record in that zone, for example, when a field’s value changes in a record. When CloudKit registers the change, it sends push notifications to the user’s devices to inform your app about the change. You can then fetch the changes and cache them on-device. When appropriate, CloudKit excludes the device where the change originates.

You configure a subscription’s notifications by setting its [notificationInfo](cksubscription/notificationinfo-swift.property.md) property. Do this before you save it to the server. A subscription generates either high-priority or medium-priority push notifications. CloudKit delivers medium-priority notifications to your app in the background. High-priority notifications are visual and the system displays them to the user. Visual notifications need the user’s permission. For more information, see [Asking permission to use notifications](../usernotifications/asking-permission-to-use-notifications.md).

A subscription uses [CKSubscription.NotificationInfo](cksubscription/notificationinfo-swift.class.md) to configure its notifications. For background delivery, set only its [shouldSendContentAvailable](cksubscription/notificationinfo-swift.class/shouldsendcontentavailable.md) property to [true](https://developer.apple.com/documentation/swift/true). If you set any other property, CloudKit treats the notification as high-priority.

> **Note**

> To receive silent push notifications, add the Background Modes capability to your Xcode project, and select the “Background fetch” and “Remote notifications” options.

Don’t rely on push notifications for specific changes to records because the system can coalesce them. CloudKit can omit data to keep the notification’s payload size under the APNs size limit. Consider notifications an indication of remote changes. Use [databaseScope](ckrecordzonenotification/databasescope.md) to determine which database contains the changed record zone, and [recordZoneID](ckrecordzonenotification/recordzoneid.md) to determine which zone contains changed records. You can then fetch just those changes using [CKFetchRecordZoneChangesOperation](ckfetchrecordzonechangesoperation.md). A notification’s [isPruned](cknotification/ispruned.md) property is [true](https://developer.apple.com/documentation/swift/true) if CloudKit omits data.

You don’t instantiate this class. Instead, implement [application(\_:didReceiveRemoteNotification:fetchCompletionHandler:)](../uikit/uiapplicationdelegate/application%28__didreceiveremotenotification_fetchcompletionhandler_%29.md) in your app delegate. Initialize [CKNotification](cknotification.md) with the `userInfo` dictionary that CloudKit passes to the method. This returns an instance of the appropriate subclass. Use the [notificationType](cknotification/notificationtype-swift.property.md) property to determine the type. Then cast to that type to access type-specific properties and methods.

## Topics

### Getting the Record Zone ID

- [recordZoneID](ckrecordzonenotification/recordzoneid.md): The ID of the record zone that has changes.

### Getting the Database Scope

- [databaseScope](ckrecordzonenotification/databasescope.md): The type of database for the record zone.

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

### Record Zone Changes

- [CKRecordZoneSubscription](ckrecordzonesubscription.md): A subscription that generates push notifications when CloudKit modifies records in a specific record zone.
- [CKFetchRecordZoneChangesOperation](ckfetchrecordzonechangesoperation.md): An operation that fetches record zone changes.

# CKRecordZoneNotification (Objective-C)

**Framework:** CloudKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

A notification that triggers when the contents of a record zone change.

## Declaration

```objectivec
@interface CKRecordZoneNotification : CKNotification
```

<a id="overview"></a>

## Overview

A record zone subscription executes when a user, or in certain scenarios, CloudKit, modifies a record in that zone, for example, when a field’s value changes in a record. When CloudKit registers the change, it sends push notifications to the user’s devices to inform your app about the change. You can then fetch the changes and cache them on-device. When appropriate, CloudKit excludes the device where the change originates.

You configure a subscription’s notifications by setting its [notificationInfo](cksubscription/notificationinfo-swift.property.md) property. Do this before you save it to the server. A subscription generates either high-priority or medium-priority push notifications. CloudKit delivers medium-priority notifications to your app in the background. High-priority notifications are visual and the system displays them to the user. Visual notifications need the user’s permission. For more information, see [Asking permission to use notifications](../usernotifications/asking-permission-to-use-notifications.md).

A subscription uses [CKNotificationInfo](cksubscription/notificationinfo-swift.class.md) to configure its notifications. For background delivery, set only its [shouldSendContentAvailable](cksubscription/notificationinfo-swift.class/shouldsendcontentavailable.md) property to [true](https://developer.apple.com/documentation/swift/true). If you set any other property, CloudKit treats the notification as high-priority.

> **Note**

> To receive silent push notifications, add the Background Modes capability to your Xcode project, and select the “Background fetch” and “Remote notifications” options.

Don’t rely on push notifications for specific changes to records because the system can coalesce them. CloudKit can omit data to keep the notification’s payload size under the APNs size limit. Consider notifications an indication of remote changes. Use [databaseScope](ckrecordzonenotification/databasescope.md) to determine which database contains the changed record zone, and [recordZoneID](ckrecordzonenotification/recordzoneid.md) to determine which zone contains changed records. You can then fetch just those changes using [CKFetchRecordZoneChangesOperation](ckfetchrecordzonechangesoperation.md). A notification’s [isPruned](cknotification/ispruned.md) property is [true](https://developer.apple.com/documentation/swift/true) if CloudKit omits data.

You don’t instantiate this class. Instead, implement [application:didReceiveRemoteNotification:fetchCompletionHandler:](../uikit/uiapplicationdelegate/application%28__didreceiveremotenotification_fetchcompletionhandler_%29.md) in your app delegate. Initialize [CKNotification](cknotification.md) with the `userInfo` dictionary that CloudKit passes to the method. This returns an instance of the appropriate subclass. Use the [notificationType](cknotification/notificationtype-swift.property.md) property to determine the type. Then cast to that type to access type-specific properties and methods.

## Topics

### Getting the Record Zone ID

- [recordZoneID](ckrecordzonenotification/recordzoneid.md): The ID of the record zone that has changes.

### Getting the Database Scope

- [databaseScope](ckrecordzonenotification/databasescope.md): The type of database for the record zone.

## Relationships

### Inherits From

- [CKNotification](cknotification.md)

## See Also

### Record Zone Changes

- [CKRecordZoneSubscription](ckrecordzonesubscription.md): A subscription that generates push notifications when CloudKit modifies records in a specific record zone.
- [CKFetchRecordZoneChangesOperation](ckfetchrecordzonechangesoperation.md): An operation that fetches record zone changes.
