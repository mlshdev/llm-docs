> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/entitlements/com.apple.developer.usernotifications.critical-alerts](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.usernotifications.critical-alerts)

# Critical Alerts (Swift)

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

An entitlement that permits an app to receive critical alert notifications.

## Details

`com.apple.developer.usernotifications.critical-alerts`

<a id="Discussion"></a>

## Discussion

If your app has this entitlement, then it can request [criticalAlert](../../usernotifications/unauthorizationoptions/criticalalert.md) authorization to receive push notifications that cause the system to play a sound even when the app is locked, muted, or a person uses Do Not Disturb focus. Your app can specify a custom sound and volume for critical alerts.

To request this entitlement for your app, [fill out the request form](https://developer.apple.com/contact/request/notifications-critical-alerts-entitlement/).

## See Also

### Notifications

- [APS Environment Entitlement](aps-environment.md): The environment for push notifications.
- [APS Environment (macOS) Entitlement](com.apple.developer.aps-environment.md): The environment for push notifications in macOS apps.
- [com.apple.developer.usernotifications.filtering](com.apple.developer.usernotifications.filtering.md): Enable receiving notifications without displaying the notification to the user.

# Critical Alerts (Objective-C)

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

An entitlement that permits an app to receive critical alert notifications.

## Details

`com.apple.developer.usernotifications.critical-alerts`

<a id="Discussion"></a>

## Discussion

If your app has this entitlement, then it can request [UNAuthorizationOptionCriticalAlert](../../usernotifications/unauthorizationoptions/criticalalert.md) authorization to receive push notifications that cause the system to play a sound even when the app is locked, muted, or a person uses Do Not Disturb focus. Your app can specify a custom sound and volume for critical alerts.

To request this entitlement for your app, [fill out the request form](https://developer.apple.com/contact/request/notifications-critical-alerts-entitlement/).

## See Also

### Notifications

- [APS Environment Entitlement](aps-environment.md): The environment for push notifications.
- [APS Environment (macOS) Entitlement](com.apple.developer.aps-environment.md): The environment for push notifications in macOS apps.
- [com.apple.developer.usernotifications.filtering](com.apple.developer.usernotifications.filtering.md): Enable receiving notifications without displaying the notification to the user.
