> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplication/registerforremotenotifications()](https://developer.apple.com/documentation/uikit/uiapplication/registerforremotenotifications())

# registerForRemoteNotifications() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Registers to receive remote notifications through Apple Push Notification service.

## Declaration

```swift
func registerForRemoteNotifications()
```

<a id="Discussion"></a>

## Discussion

Call this method to initiate the registration process with Apple Push Notification service. If registration succeeds, the app calls your app delegate object’s  [application(\_:didRegisterForRemoteNotificationsWithDeviceToken:)](../uiapplicationdelegate/application%28__didregisterforremotenotificationswithdevicetoken_%29.md) method and passes it a device token. You should pass this token along to the server you use to generate remote notifications for the device. If registration fails, the app calls its app delegate’s [application(\_:didFailToRegisterForRemoteNotificationsWithError:)](../uiapplicationdelegate/application%28__didfailtoregisterforremotenotificationswitherror_%29.md) method instead.

If you want your app’s remote notifications to display alerts, play sounds, or perform other user-facing actions, you must request authorization to do so using the [requestAuthorization(options:completionHandler:)](../../usernotifications/unusernotificationcenter/requestauthorization%28options_completionhandler_%29.md) method of [UNUserNotificationCenter](../../usernotifications/unusernotificationcenter.md). If you do not request and receive authorization for your app’s interactions, the system delivers all remote notifications to your app silently.

## See Also

### Registering for remote notifications

- [unregisterForRemoteNotifications()](unregisterforremotenotifications%28%29.md): Unregisters for all remote notifications received through Apple Push Notification service.
- [isRegisteredForRemoteNotifications](isregisteredforremotenotifications.md): A Boolean value that indicates whether the app is currently registered for remote notifications.

# registerForRemoteNotifications (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Registers to receive remote notifications through Apple Push Notification service.

## Declaration

```objectivec
- (void) registerForRemoteNotifications;
```

<a id="Discussion"></a>

## Discussion

Call this method to initiate the registration process with Apple Push Notification service. If registration succeeds, the app calls your app delegate object’s  [application:didRegisterForRemoteNotificationsWithDeviceToken:](../uiapplicationdelegate/application%28__didregisterforremotenotificationswithdevicetoken_%29.md) method and passes it a device token. You should pass this token along to the server you use to generate remote notifications for the device. If registration fails, the app calls its app delegate’s [application:didFailToRegisterForRemoteNotificationsWithError:](../uiapplicationdelegate/application%28__didfailtoregisterforremotenotificationswitherror_%29.md) method instead.

If you want your app’s remote notifications to display alerts, play sounds, or perform other user-facing actions, you must request authorization to do so using the [requestAuthorizationWithOptions:completionHandler:](../../usernotifications/unusernotificationcenter/requestauthorization%28options_completionhandler_%29.md) method of [UNUserNotificationCenter](../../usernotifications/unusernotificationcenter.md). If you do not request and receive authorization for your app’s interactions, the system delivers all remote notifications to your app silently.

## See Also

### Registering for remote notifications

- [unregisterForRemoteNotifications](unregisterforremotenotifications%28%29.md): Unregisters for all remote notifications received through Apple Push Notification service.
- [registeredForRemoteNotifications](isregisteredforremotenotifications.md): A Boolean value that indicates whether the app is currently registered for remote notifications.
