> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/registerforremotenotifications(matching:)](https://developer.apple.com/documentation/appkit/nsapplication/registerforremotenotifications(matching:))

# registerForRemoteNotifications(matching:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Register to receive notifications of the specified types from a provider through the Apple Push Notification service.

## Declaration

```swift
func registerForRemoteNotifications(matching types: NSApplication.RemoteNotificationType)
```

## Parameters

- `types`: A bit mask specifying the types of notifications the app accepts. See [NSApplication.RemoteNotificationType](remotenotificationtype.md) for valid bit-mask values.

<a id="discussion"></a>

## Discussion

> **Deprecated**

> Use [registerForRemoteNotifications()](registerforremotenotifications%28%29.md) instead.

When you send this message, the device initiates the registration process with Apple Push Notification Service. If it succeeds, the app delegate receives a device token in the [application(\_:didRegisterForRemoteNotificationsWithDeviceToken:)](../nsapplicationdelegate/application%28__didregisterforremotenotificationswithdevicetoken_%29.md) method; if registration doesn’t succeed, the delegate is informed via the [application(\_:didFailToRegisterForRemoteNotificationsWithError:)](../nsapplicationdelegate/application%28__didfailtoregisterforremotenotificationswitherror_%29.md) method. If the app delegate receives a device token, it should connect with its provider and pass it the token.

> **Note**

>  Currently the only notification type supported in macOS for non-running apps is icon badging. However, the JSON payload, which may contain information related to sounds and alerts, is passed to a running app in [application(\_:didReceiveRemoteNotification:)](../nsapplicationdelegate/application%28__didreceiveremotenotification_%29.md). The app can do whatever it wants to with that information (for example, display an alert or play a sound).

## See Also

### Managing remote notifications

- [registerForRemoteNotifications()](registerforremotenotifications%28%29.md): Register for notifications sent by Apple Push Notification service (APNs).
- [unregisterForRemoteNotifications()](unregisterforremotenotifications%28%29.md): Unregister for notifications received from Apple Push Notification service.
- [enabledRemoteNotificationTypes](enabledremotenotificationtypes.md): The types of push notifications that the app accepts.
- [isRegisteredForRemoteNotifications](isregisteredforremotenotifications.md): A Boolean value indicating whether the app is registered with Apple Push Notification service (APNs).
- [NSApplication.RemoteNotificationType](remotenotificationtype.md): These constants determine whether apps launched by remote notifications display a badge.

# registerForRemoteNotificationTypes: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Register to receive notifications of the specified types from a provider through the Apple Push Notification service.

## Declaration

```objectivec
- (void) registerForRemoteNotificationTypes:(NSRemoteNotificationType) types;
```

## Parameters

- `types`: A bit mask specifying the types of notifications the app accepts. See [NSRemoteNotificationType](remotenotificationtype.md) for valid bit-mask values.

<a id="discussion"></a>

## Discussion

> **Deprecated**

> Use [registerForRemoteNotifications](registerforremotenotifications%28%29.md) instead.

When you send this message, the device initiates the registration process with Apple Push Notification Service. If it succeeds, the app delegate receives a device token in the [application:didRegisterForRemoteNotificationsWithDeviceToken:](../nsapplicationdelegate/application%28__didregisterforremotenotificationswithdevicetoken_%29.md) method; if registration doesn’t succeed, the delegate is informed via the [application:didFailToRegisterForRemoteNotificationsWithError:](../nsapplicationdelegate/application%28__didfailtoregisterforremotenotificationswitherror_%29.md) method. If the app delegate receives a device token, it should connect with its provider and pass it the token.

> **Note**

>  Currently the only notification type supported in macOS for non-running apps is icon badging. However, the JSON payload, which may contain information related to sounds and alerts, is passed to a running app in [application:didReceiveRemoteNotification:](../nsapplicationdelegate/application%28__didreceiveremotenotification_%29.md). The app can do whatever it wants to with that information (for example, display an alert or play a sound).

## See Also

### Managing remote notifications

- [registerForRemoteNotifications](registerforremotenotifications%28%29.md): Register for notifications sent by Apple Push Notification service (APNs).
- [unregisterForRemoteNotifications](unregisterforremotenotifications%28%29.md): Unregister for notifications received from Apple Push Notification service.
- [enabledRemoteNotificationTypes](enabledremotenotificationtypes.md): The types of push notifications that the app accepts.
- [registeredForRemoteNotifications](isregisteredforremotenotifications.md): A Boolean value indicating whether the app is registered with Apple Push Notification service (APNs).
- [NSRemoteNotificationType](remotenotificationtype.md): These constants determine whether apps launched by remote notifications display a badge.
