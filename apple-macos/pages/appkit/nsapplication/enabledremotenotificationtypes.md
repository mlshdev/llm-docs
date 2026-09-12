> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/enabledremotenotificationtypes](https://developer.apple.com/documentation/appkit/nsapplication/enabledremotenotificationtypes)

# enabledRemoteNotificationTypes (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

The types of push notifications that the app accepts.

## Declaration

```swift
var enabledRemoteNotificationTypes: NSApplication.RemoteNotificationType { get }
```

<a id="return-value"></a>

## Return Value

A bit mask whose values indicate the types of notifications the user has requested for the app. See [NSApplication.RemoteNotificationType](remotenotificationtype.md) for valid bit-mask values.

<a id="Discussion"></a>

## Discussion

This property contains a bitmask whose values indicate the types of push notifications that the app requested. You don’t set this property directly. Call the [registerForRemoteNotifications(matching:)](registerforremotenotifications%28matching_%29.md) method to register your app with Apple Push Notification Service and request the notification types your app supports. macOS delivers only notifications of types that the app supports. For a list of possible values, see [NSApplication.RemoteNotificationType](remotenotificationtype.md).

> **Note**

>  Currently the only notification type supported for non-running apps is the badging of app icons.

## See Also

### Managing remote notifications

- [registerForRemoteNotifications()](registerforremotenotifications%28%29.md): Register for notifications sent by Apple Push Notification service (APNs).
- [unregisterForRemoteNotifications()](unregisterforremotenotifications%28%29.md): Unregister for notifications received from Apple Push Notification service.
- [registerForRemoteNotifications(matching:)](registerforremotenotifications%28matching_%29.md): Register to receive notifications of the specified types from a provider through the Apple Push Notification service.
- [isRegisteredForRemoteNotifications](isregisteredforremotenotifications.md): A Boolean value indicating whether the app is registered with Apple Push Notification service (APNs).
- [NSApplication.RemoteNotificationType](remotenotificationtype.md): These constants determine whether apps launched by remote notifications display a badge.

# enabledRemoteNotificationTypes (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

The types of push notifications that the app accepts.

## Declaration

```objectivec
@property (readonly) NSRemoteNotificationType enabledRemoteNotificationTypes;
```

<a id="return-value"></a>

## Return Value

A bit mask whose values indicate the types of notifications the user has requested for the app. See [NSRemoteNotificationType](remotenotificationtype.md) for valid bit-mask values.

<a id="Discussion"></a>

## Discussion

This property contains a bitmask whose values indicate the types of push notifications that the app requested. You don’t set this property directly. Call the [registerForRemoteNotificationTypes:](registerforremotenotifications%28matching_%29.md) method to register your app with Apple Push Notification Service and request the notification types your app supports. macOS delivers only notifications of types that the app supports. For a list of possible values, see [NSRemoteNotificationType](remotenotificationtype.md).

> **Note**

>  Currently the only notification type supported for non-running apps is the badging of app icons.

## See Also

### Managing remote notifications

- [registerForRemoteNotifications](registerforremotenotifications%28%29.md): Register for notifications sent by Apple Push Notification service (APNs).
- [unregisterForRemoteNotifications](unregisterforremotenotifications%28%29.md): Unregister for notifications received from Apple Push Notification service.
- [registerForRemoteNotificationTypes:](registerforremotenotifications%28matching_%29.md): Register to receive notifications of the specified types from a provider through the Apple Push Notification service.
- [registeredForRemoteNotifications](isregisteredforremotenotifications.md): A Boolean value indicating whether the app is registered with Apple Push Notification service (APNs).
- [NSRemoteNotificationType](remotenotificationtype.md): These constants determine whether apps launched by remote notifications display a badge.
