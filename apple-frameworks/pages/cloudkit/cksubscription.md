> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksubscription](https://developer.apple.com/documentation/cloudkit/cksubscription)

# CKSubscription (Swift)

**Framework:** CloudKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

An abstract base class for subscriptions.

## Declaration

```swift
class CKSubscription
```

<a id="overview"></a>

## Overview

A subscription acts like a persistent query on the server that can track the creation, deletion, and modification of records. When changes occur, they trigger the delivery of push notifications so that your app can respond appropriately.

Subscriptions don’t become active until you save them to the server and the server has time to index them. To save a subscription, use an instance of [CKModifySubscriptionsOperation](ckmodifysubscriptionsoperation.md) or the [save(\_:completionHandler:)](ckdatabase/save%28__completionhandler_%29-9pona.md) method of [CKDatabase](ckdatabase.md). To cancel a subscription, delete the corresponding subscription from the server.

> **Note**

> You don’t need to enable push notifications for the app’s explicit App ID in your developer account at [developer.apple.com](https://developer.apple.com) to receive subscription notifications. Xcode automatically adds the APNs entitlement to your entitlement file when you enable CloudKit. To learn about enabling CloudKit, see [Enabling CloudKit in Your App](https://developer.apple.com/library/archive/documentation/DataManagement/Conceptual/CloudKitQuickStart/EnablingiCloudandConfiguringCloudKit/EnablingiCloudandConfiguringCloudKit.html#//apple_ref/doc/uid/TP40014987-CH2).

Most of a subscription’s configuration happens at initialization time. You must, however, specify how to deliver push notifications to the user’s device. Use the [notificationInfo](cksubscription/notificationinfo-swift.property.md) property to configure the delivery options. You must save the subscription before the changes take effect.

> **Note**

> Create subscriptions in the development environment first and then promote them to production. Attempting to create a subscription directly in the production environment results in an error.

<a id="Handling-the-Resulting-Push-Notifications"></a>

### Handling the Resulting Push Notifications

When CloudKit modifies a record and triggers a subscription, the server sends push notifications to all devices with that subscription except for the one that makes the original changes. For subscription-based push notifications, the server can add data to the notification payload that indicates the condition that triggers the notification. In the [application(\_:didReceiveRemoteNotification:fetchCompletionHandler:)](../uikit/uiapplicationdelegate/application%28__didreceiveremotenotification_fetchcompletionhandler_%29.md) method of your app delegate, create a [CKNotification](cknotification.md) object from the provided `userInfo` dictionary. You can then query it for the information that’s relevant to the notification.

In addition to sending a record ID with a push notification, you can ask the server to send a limited amount of data from the record that triggers the notification. Use the [desiredKeys](cksubscription/notificationinfo-swift.class/desiredkeys.md) property of the object you assign to [notificationInfo](cksubscription/notificationinfo-swift.property.md) to specify the keys to include.

APNs limits the size of a push notification’s payload and CloudKit may omit keys and other pieces of data to keep the payload’s size under that limit. If this happens, you can fetch the entire payload from the server using an instance of `CKFetchNotificationChangesOperation`. This operation provides instances of [CKQueryNotification](ckquerynotification.md) or [CKRecordZoneNotification](ckrecordzonenotification.md), which contain information about the push notifications that CloudKit delivers to your app.

## Topics

### Specifying the Push Notification Data

- [notificationInfo](cksubscription/notificationinfo-swift.property.md): The configuration for a subscription’s push notifications.
- [CKSubscription.NotificationInfo](cksubscription/notificationinfo-swift.class.md): An object that describes the configuration of a subscription’s push notifications.

### Accessing the Subscription Metadata

- [subscriptionID](cksubscription/subscriptionid-6fp3j.md): The subscription’s unique identifier.
- [CKSubscription.ID](cksubscription/id.md): A type that represents a subscription’s identifier.
- [subscriptionType](cksubscription/subscriptiontype-swift.property.md): The behavior that a subscription provides.
- [CKSubscription.SubscriptionType](cksubscription/subscriptiontype-swift.enum.md): Constants that identify a subscription’s behavior.

### Initializers

- [init(coder:)](cksubscription/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [CKDatabaseSubscription](ckdatabasesubscription.md)
- [CKQuerySubscription](ckquerysubscription.md)
- [CKRecordZoneSubscription](ckrecordzonesubscription.md)

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
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Base Objects

- [CKNotification](cknotification.md): The abstract base class for CloudKit notifications.
- [CKDatabaseOperation](ckdatabaseoperation.md): The abstract base class for operations that act upon databases in CloudKit.

# CKSubscription (Objective-C)

**Framework:** CloudKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

An abstract base class for subscriptions.

## Declaration

```objectivec
@interface CKSubscription : NSObject
```

<a id="overview"></a>

## Overview

A subscription acts like a persistent query on the server that can track the creation, deletion, and modification of records. When changes occur, they trigger the delivery of push notifications so that your app can respond appropriately.

Subscriptions don’t become active until you save them to the server and the server has time to index them. To save a subscription, use an instance of [CKModifySubscriptionsOperation](ckmodifysubscriptionsoperation.md) or the [saveSubscription:completionHandler:](ckdatabase/save%28__completionhandler_%29-9pona.md) method of [CKDatabase](ckdatabase.md). To cancel a subscription, delete the corresponding subscription from the server.

> **Note**

> You don’t need to enable push notifications for the app’s explicit App ID in your developer account at [developer.apple.com](https://developer.apple.com) to receive subscription notifications. Xcode automatically adds the APNs entitlement to your entitlement file when you enable CloudKit. To learn about enabling CloudKit, see [Enabling CloudKit in Your App](https://developer.apple.com/library/archive/documentation/DataManagement/Conceptual/CloudKitQuickStart/EnablingiCloudandConfiguringCloudKit/EnablingiCloudandConfiguringCloudKit.html#//apple_ref/doc/uid/TP40014987-CH2).

Most of a subscription’s configuration happens at initialization time. You must, however, specify how to deliver push notifications to the user’s device. Use the [notificationInfo](cksubscription/notificationinfo-swift.property.md) property to configure the delivery options. You must save the subscription before the changes take effect.

> **Note**

> Create subscriptions in the development environment first and then promote them to production. Attempting to create a subscription directly in the production environment results in an error.

<a id="Handling-the-Resulting-Push-Notifications"></a>

### Handling the Resulting Push Notifications

When CloudKit modifies a record and triggers a subscription, the server sends push notifications to all devices with that subscription except for the one that makes the original changes. For subscription-based push notifications, the server can add data to the notification payload that indicates the condition that triggers the notification. In the [application:didReceiveRemoteNotification:fetchCompletionHandler:](../uikit/uiapplicationdelegate/application%28__didreceiveremotenotification_fetchcompletionhandler_%29.md) method of your app delegate, create a [CKNotification](cknotification.md) object from the provided `userInfo` dictionary. You can then query it for the information that’s relevant to the notification.

In addition to sending a record ID with a push notification, you can ask the server to send a limited amount of data from the record that triggers the notification. Use the [desiredKeys](cksubscription/notificationinfo-swift.class/desiredkeys.md) property of the object you assign to [notificationInfo](cksubscription/notificationinfo-swift.property.md) to specify the keys to include.

APNs limits the size of a push notification’s payload and CloudKit may omit keys and other pieces of data to keep the payload’s size under that limit. If this happens, you can fetch the entire payload from the server using an instance of `CKFetchNotificationChangesOperation`. This operation provides instances of [CKQueryNotification](ckquerynotification.md) or [CKRecordZoneNotification](ckrecordzonenotification.md), which contain information about the push notifications that CloudKit delivers to your app.

## Topics

### Specifying the Push Notification Data

- [notificationInfo](cksubscription/notificationinfo-swift.property.md): The configuration for a subscription’s push notifications.
- [CKNotificationInfo](cksubscription/notificationinfo-swift.class.md): An object that describes the configuration of a subscription’s push notifications.

### Accessing the Subscription Metadata

- [subscriptionID](cksubscription/subscriptionid-12vxy.md): The subscription’s unique identifier.
- [CKSubscriptionID](cksubscriptionid.md): A type that represents a subscription’s identifier.
- [subscriptionType](cksubscription/subscriptiontype-swift.property.md): The behavior that a subscription provides.
- [CKSubscriptionType](cksubscription/subscriptiontype-swift.enum.md): Constants that identify a subscription’s behavior.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [CKDatabaseSubscription](ckdatabasesubscription.md)
- [CKQuerySubscription](ckquerysubscription.md)
- [CKRecordZoneSubscription](ckrecordzonesubscription.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Base Objects

- [CKNotification](cknotification.md): The abstract base class for CloudKit notifications.
- [CKDatabaseOperation](ckdatabaseoperation.md): The abstract base class for operations that act upon databases in CloudKit.
