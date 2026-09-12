> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cknotification](https://developer.apple.com/documentation/cloudkit/cknotification)

# CKNotification (Swift)

**Framework:** CloudKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

The abstract base class for CloudKit notifications.

## Declaration

```swift
class CKNotification
```

<a id="overview"></a>

## Overview

Use subclasses of `CKNotification` to extract data from push notifications that the system receives, or to fetch a container’s previous push notifications. In both cases, the object indicates the changed data.

`CKNotification` is an abstract class. When you create a notification from a payload dictionary, the [init(fromRemoteNotificationDictionary:)](cknotification/init%28fromremotenotificationdictionary_%29.md) method returns an instance of the appropriate subclass. Similarly, when you fetch notifications from a container, you receive instances of a concrete subclass. `CKNotification` provides information about the push notification and its method of delivery. Subclasses contain specific data that provides the changes.

The system delivers notifications with alerts, badges, or sounds via the `UserNotifications` framework, in the form of a `UNNotification`.

Applications should use the `UserNotifications` framework to interact with the alert, badge, and sound properties of the notification.

Applications may create a [CKNotification](cknotification.md) from a `UNNotification` in their `UNUserNotificationCenterDelegate`:

```swift
 func userNotificationCenter(
     _ center: UNUserNotificationCenter, willPresent notification: UNNotification
 ) async -> UNNotificationPresentationOptions {
    let ckNotification = CKNotification(fromRemoteNotificationDictionary: notification.request.content.userInfo)
}
```

Notifications without alerts, badges, or sounds are delivered via an application delegate, in the form of a remote notification.

For example: `UIApplicationDelegate.application(_:didReceiveRemoteNotification:) async`

Applications may create a [CKNotification](cknotification.md) from the remote notification in their `UIApplicationDelegate`:

```swift
func application(
    _ application: UIApplication, didReceiveRemoteNotification userInfo: [AnyHashable : Any]
) async -> UIBackgroundFetchResult {
    let ckNotification = CKNotification(fromRemoteNotificationDictionary: userInfo)
}
```

## Topics

### Creating a Notification

- [init(fromRemoteNotificationDictionary:)](cknotification/init%28fromremotenotificationdictionary_%29.md): Creates a new notification using the specified payload data.

### Identifying the Notification

- [notificationID](cknotification/notificationid.md): The notification’s ID.
- [CKNotification.ID](cknotification/id.md): An object that uniquely identifies a push notification that a container sends.
- [notificationType](cknotification/notificationtype-swift.property.md): The type of event that generates the notification.
- [CKNotification.NotificationType](cknotification/notificationtype-swift.enum.md): Constants that indicate the type of event that generates the push notification.
- [containerIdentifier](cknotification/containeridentifier.md): The ID of the container with the content that triggers the notification.

### Getting the Notification’s Status

- [isPruned](cknotification/ispruned.md): A Boolean value that indicates whether the system removes some push notification content before delivery.

### Accessing the Notification Info

- [alertBody](cknotification/alertbody.md): Deprecated. The notification’s alert body.
- [alertLocalizationKey](cknotification/alertlocalizationkey.md): Deprecated. The key that identifies the localized text for the alert body.
- [alertLocalizationArgs](cknotification/alertlocalizationargs.md): Deprecated. The fields for building a notification’s alert.
- [alertActionLocalizationKey](cknotification/alertactionlocalizationkey.md): Deprecated. The key that identifies the localized string for the notification’s action.
- [alertLaunchImage](cknotification/alertlaunchimage.md): Deprecated. The filename of an image to use as a launch image.
- [soundName](cknotification/soundname.md): Deprecated. The name of the sound file to play when a notification arrives.
- [badge](cknotification/badge.md): Deprecated. The value that the app icon’s badge displays.
- [category](cknotification/category.md): Deprecated. The name of the action group that corresponds to this notification.
- [subscriptionID](cknotification/subscriptionid-16ygj.md): The ID of the subscription that triggers the notification.
- [subscriptionOwnerUserRecordID](cknotification/subscriptionowneruserrecordid.md): The ID of the user record that creates the subscription that generates the push notification.
- [title](cknotification/title.md): Deprecated. The notification’s title.
- [titleLocalizationKey](cknotification/titlelocalizationkey.md): Deprecated. The key that identifies the localized string for the notification’s title.
- [titleLocalizationArgs](cknotification/titlelocalizationargs.md): Deprecated. The fields for building a notification’s title.
- [subtitle](cknotification/subtitle.md): Deprecated. The notification’s subtitle.
- [subtitleLocalizationKey](cknotification/subtitlelocalizationkey.md): Deprecated. The key that identifies the localized string for the notification’s subtitle.
- [subtitleLocalizationArgs](cknotification/subtitlelocalizationargs.md): Deprecated. The fields for building a notification’s subtitle.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [CKDatabaseNotification](ckdatabasenotification.md)
- [CKQueryNotification](ckquerynotification.md)
- [CKRecordZoneNotification](ckrecordzonenotification.md)

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

### Base Objects

- [CKSubscription](cksubscription.md): An abstract base class for subscriptions.
- [CKDatabaseOperation](ckdatabaseoperation.md): The abstract base class for operations that act upon databases in CloudKit.

# CKNotification (Objective-C)

**Framework:** CloudKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

The abstract base class for CloudKit notifications.

## Declaration

```objectivec
@interface CKNotification : NSObject
```

<a id="overview"></a>

## Overview

Use subclasses of `CKNotification` to extract data from push notifications that the system receives, or to fetch a container’s previous push notifications. In both cases, the object indicates the changed data.

`CKNotification` is an abstract class. When you create a notification from a payload dictionary, the [notificationFromRemoteNotificationDictionary:](cknotification/init%28fromremotenotificationdictionary_%29.md) method returns an instance of the appropriate subclass. Similarly, when you fetch notifications from a container, you receive instances of a concrete subclass. `CKNotification` provides information about the push notification and its method of delivery. Subclasses contain specific data that provides the changes.

The system delivers notifications with alerts, badges, or sounds via the `UserNotifications` framework, in the form of a `UNNotification`.

Applications should use the `UserNotifications` framework to interact with the alert, badge, and sound properties of the notification.

Applications may create a [CKNotification](cknotification.md) from a `UNNotification` in their `UNUserNotificationCenterDelegate`:

```swift
 func userNotificationCenter(
     _ center: UNUserNotificationCenter, willPresent notification: UNNotification
 ) async -> UNNotificationPresentationOptions {
    let ckNotification = CKNotification(fromRemoteNotificationDictionary: notification.request.content.userInfo)
}
```

Notifications without alerts, badges, or sounds are delivered via an application delegate, in the form of a remote notification.

For example: `UIApplicationDelegate.application(_:didReceiveRemoteNotification:) async`

Applications may create a [CKNotification](cknotification.md) from the remote notification in their `UIApplicationDelegate`:

```swift
func application(
    _ application: UIApplication, didReceiveRemoteNotification userInfo: [AnyHashable : Any]
) async -> UIBackgroundFetchResult {
    let ckNotification = CKNotification(fromRemoteNotificationDictionary: userInfo)
}
```

## Topics

### Creating a Notification

- [notificationFromRemoteNotificationDictionary:](cknotification/init%28fromremotenotificationdictionary_%29.md): Creates a new notification using the specified payload data.

### Identifying the Notification

- [notificationID](cknotification/notificationid.md): The notification’s ID.
- [CKNotificationID](cknotification/id.md): An object that uniquely identifies a push notification that a container sends.
- [notificationType](cknotification/notificationtype-swift.property.md): The type of event that generates the notification.
- [CKNotificationType](cknotification/notificationtype-swift.enum.md): Constants that indicate the type of event that generates the push notification.
- [containerIdentifier](cknotification/containeridentifier.md): The ID of the container with the content that triggers the notification.

### Getting the Notification’s Status

- [isPruned](cknotification/ispruned.md): A Boolean value that indicates whether the system removes some push notification content before delivery.

### Accessing the Notification Info

- [alertBody](cknotification/alertbody.md): Deprecated. The notification’s alert body.
- [alertLocalizationKey](cknotification/alertlocalizationkey.md): Deprecated. The key that identifies the localized text for the alert body.
- [alertLocalizationArgs](cknotification/alertlocalizationargs.md): Deprecated. The fields for building a notification’s alert.
- [alertActionLocalizationKey](cknotification/alertactionlocalizationkey.md): Deprecated. The key that identifies the localized string for the notification’s action.
- [alertLaunchImage](cknotification/alertlaunchimage.md): Deprecated. The filename of an image to use as a launch image.
- [soundName](cknotification/soundname.md): Deprecated. The name of the sound file to play when a notification arrives.
- [badge](cknotification/badge.md): Deprecated. The value that the app icon’s badge displays.
- [category](cknotification/category.md): Deprecated. The name of the action group that corresponds to this notification.
- [subscriptionID](cknotification/subscriptionid-90zhj.md): The ID of the subscription that triggers the notification.
- [subscriptionOwnerUserRecordID](cknotification/subscriptionowneruserrecordid.md): The ID of the user record that creates the subscription that generates the push notification.
- [title](cknotification/title.md): Deprecated. The notification’s title.
- [titleLocalizationKey](cknotification/titlelocalizationkey.md): Deprecated. The key that identifies the localized string for the notification’s title.
- [titleLocalizationArgs](cknotification/titlelocalizationargs.md): Deprecated. The fields for building a notification’s title.
- [subtitle](cknotification/subtitle.md): Deprecated. The notification’s subtitle.
- [subtitleLocalizationKey](cknotification/subtitlelocalizationkey.md): Deprecated. The key that identifies the localized string for the notification’s subtitle.
- [subtitleLocalizationArgs](cknotification/subtitlelocalizationargs.md): Deprecated. The fields for building a notification’s subtitle.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [CKDatabaseNotification](ckdatabasenotification.md)
- [CKQueryNotification](ckquerynotification.md)
- [CKRecordZoneNotification](ckrecordzonenotification.md)

## See Also

### Base Objects

- [CKSubscription](cksubscription.md): An abstract base class for subscriptions.
- [CKDatabaseOperation](ckdatabaseoperation.md): The abstract base class for operations that act upon databases in CloudKit.
