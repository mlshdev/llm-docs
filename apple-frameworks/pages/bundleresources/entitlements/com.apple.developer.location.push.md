> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/entitlements/com.apple.developer.location.push](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.location.push)

# Location Push Service Extension (Swift)

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · macOS 10.9+

An entitlement to enable a location-sharing app to query someone’s location in response to a push notification.

## Details

`com.apple.developer.location.push`

<a id="Discussion"></a>

## Discussion

This entitlement enables your app to monitor for Apple Push Notification service (APNs) pushes with the `location` push type, and receive pushes in your Location Push Service Extension. For more information about the `location` push type, see [Sending notification requests to APNs](../../usernotifications/sending-notification-requests-to-apns.md).

> **Note**

> Without this entitlement, your code receives an error when it calls [startMonitoringLocationPushes(completion:)](../../corelocation/cllocationmanager/startmonitoringlocationpushes%28completion_%29.md).

Add the entitlement to your app by following these steps:

1. Open your app’s Xcode project and select your app from the target list.
2. Select the Signing & Capabilities panel.
3. Click “+ Capabilities” and enter “push” in the search field; then double-click Location Push Service Extension to add the entitlement to your app’s entitlements file.

For more information about implementing your Location Push Service Extension, see [Creating a location push service extension](../../corelocation/creating-a-location-push-service-extension.md).

# Location Push Service Extension (Objective-C)

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · macOS 10.9+

An entitlement to enable a location-sharing app to query someone’s location in response to a push notification.

## Details

`com.apple.developer.location.push`

<a id="Discussion"></a>

## Discussion

This entitlement enables your app to monitor for Apple Push Notification service (APNs) pushes with the `location` push type, and receive pushes in your Location Push Service Extension. For more information about the `location` push type, see [Sending notification requests to APNs](../../usernotifications/sending-notification-requests-to-apns.md).

> **Note**

> Without this entitlement, your code receives an error when it calls [startMonitoringLocationPushesWithCompletion:](../../corelocation/cllocationmanager/startmonitoringlocationpushes%28completion_%29.md).

Add the entitlement to your app by following these steps:

1. Open your app’s Xcode project and select your app from the target list.
2. Select the Signing & Capabilities panel.
3. Click “+ Capabilities” and enter “push” in the search field; then double-click Location Push Service Extension to add the entitlement to your app’s entitlements file.

For more information about implementing your Location Push Service Extension, see [Creating a location push service extension](../../corelocation/creating-a-location-push-service-extension.md).
