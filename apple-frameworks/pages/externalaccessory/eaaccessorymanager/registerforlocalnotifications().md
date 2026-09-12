> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/externalaccessory/eaaccessorymanager/registerforlocalnotifications()](https://developer.apple.com/documentation/externalaccessory/eaaccessorymanager/registerforlocalnotifications())

# registerForLocalNotifications() (Swift)

**Framework:** External Accessory  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Begins the delivery of accessory-related notifications to the current application.

## Declaration

```swift
func registerForLocalNotifications()
```

<a id="Discussion"></a>

## Discussion

Call this method to be notified when an accessory becomes connected or disconnected. The system does not send [EAAccessoryDidConnectNotification](../eaaccessorydidconnectnotification.md) and [EAAccessoryDidDisconnectNotification](../eaaccessorydiddisconnectnotification.md) notifications automatically, so calling this method lets the system know that your application wants to receive them. Typically, you would call this method only once early in your application, either before or after configuring your notification observers. When you no longer need to monitor these notifications, you should call the matching [unregisterForLocalNotifications()](unregisterforlocalnotifications%28%29.md) method.

You can configure your notification observers either before or after calling this method. Because the shared accessory manager is the only object that sends accessory-related notifications, specifying that object or `nil` for the notification sender has the same outcome.

## See Also

### Managing Connection Status Changes

- [unregisterForLocalNotifications()](unregisterforlocalnotifications%28%29.md): Stops the delivery of accessory-related notifications to the current application.
- [EAAccessoryDidConnect](../../foundation/nsnotification/name-swift.struct/eaaccessorydidconnect.md): A notification that the system sends when an accessory becomes connected and available for your application to use.
- [EAAccessoryDidDisconnect](../../foundation/nsnotification/name-swift.struct/eaaccessorydiddisconnect.md): A notification that is posted when an accessory is disconnected and no longer available for your application to use.
- [EAAccessoryKey](../eaaccessorykey.md): A key that indicates the accessory object whose status changed.
- [EAAccessorySelectedKey](../eaaccessoryselectedkey.md): A key that indicates the accessory object that the user selected.

# registerForLocalNotifications (Objective-C)

**Framework:** External Accessory  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Begins the delivery of accessory-related notifications to the current application.

## Declaration

```objectivec
- (void) registerForLocalNotifications;
```

<a id="Discussion"></a>

## Discussion

Call this method to be notified when an accessory becomes connected or disconnected. The system does not send [EAAccessoryDidConnectNotification](../eaaccessorydidconnectnotification.md) and [EAAccessoryDidDisconnectNotification](../eaaccessorydiddisconnectnotification.md) notifications automatically, so calling this method lets the system know that your application wants to receive them. Typically, you would call this method only once early in your application, either before or after configuring your notification observers. When you no longer need to monitor these notifications, you should call the matching [unregisterForLocalNotifications](unregisterforlocalnotifications%28%29.md) method.

You can configure your notification observers either before or after calling this method. Because the shared accessory manager is the only object that sends accessory-related notifications, specifying that object or `nil` for the notification sender has the same outcome.

## See Also

### Managing Connection Status Changes

- [unregisterForLocalNotifications](unregisterforlocalnotifications%28%29.md): Stops the delivery of accessory-related notifications to the current application.
- [EAAccessoryDidConnectNotification](../eaaccessorydidconnectnotification.md): A notification that the system sends when an accessory becomes connected and available for your application to use.
- [EAAccessoryDidDisconnectNotification](../eaaccessorydiddisconnectnotification.md): A notification that is posted when an accessory is disconnected and no longer available for your application to use.
- [EAAccessoryKey](../eaaccessorykey.md): A key that indicates the accessory object whose status changed.
- [EAAccessorySelectedKey](../eaaccessoryselectedkey.md): A key that indicates the accessory object that the user selected.
