> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/entitlements/com.apple.developer.aps-environment](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.aps-environment)

# APS Environment (macOS) Entitlement (Swift)

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** macOS 10.14+

The environment for push notifications in macOS apps.

## Details

`com.apple.developer.aps-environment`

## Possible Values

- `development`: The APNs development environment.
- `production`: The APNs production environment.

<a id="Discussion"></a>

## Discussion

This key specifies whether to use the development or production Apple Push Notification service (APNs) environment when registering for push notifications with [registerForRemoteNotifications()](https://developer.apple.com/documentation/appkit/nsapplication/registerforremotenotifications%28%29).

Xcode sets the value of the entitlement based on your app’s current provisioning profile. For example, if you’re using a development provisioning profile, Xcode sets the value to `development`.

To add this entitlement to your app, enable the Push Notifications capability in Xcode.

## See Also

### Related Documentation

- [Registering your app with APNs](../../usernotifications/registering-your-app-with-apns.md): Communicate with Apple Push Notification service (APNs) and receive a unique device token that identifies your app.

### Notifications

- [APS Environment Entitlement](aps-environment.md): The environment for push notifications.
- [Critical Alerts](com.apple.developer.usernotifications.critical-alerts.md): An entitlement that permits an app to receive critical alert notifications.
- [com.apple.developer.usernotifications.filtering](com.apple.developer.usernotifications.filtering.md): Enable receiving notifications without displaying the notification to the user.

# APS Environment (macOS) Entitlement (Objective-C)

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** macOS 10.14+

The environment for push notifications in macOS apps.

## Details

`com.apple.developer.aps-environment`

## Possible Values

- `development`: The APNs development environment.
- `production`: The APNs production environment.

<a id="Discussion"></a>

## Discussion

This key specifies whether to use the development or production Apple Push Notification service (APNs) environment when registering for push notifications with [registerForRemoteNotifications](https://developer.apple.com/documentation/appkit/nsapplication/registerforremotenotifications%28%29).

Xcode sets the value of the entitlement based on your app’s current provisioning profile. For example, if you’re using a development provisioning profile, Xcode sets the value to `development`.

To add this entitlement to your app, enable the Push Notifications capability in Xcode.

## See Also

### Related Documentation

- [Registering your app with APNs](../../usernotifications/registering-your-app-with-apns.md): Communicate with Apple Push Notification service (APNs) and receive a unique device token that identifies your app.

### Notifications

- [APS Environment Entitlement](aps-environment.md): The environment for push notifications.
- [Critical Alerts](com.apple.developer.usernotifications.critical-alerts.md): An entitlement that permits an app to receive critical alert notifications.
- [com.apple.developer.usernotifications.filtering](com.apple.developer.usernotifications.filtering.md): Enable receiving notifications without displaying the notification to the user.
