> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/externalaccessory/eaaccessorydiddisconnectnotification](https://developer.apple.com/documentation/externalaccessory/eaaccessorydiddisconnectnotification)

# EAAccessoryDidDisconnectNotification

**Interface language:** Objective-C

**Framework:** External Accessory  
**Kind:** Global Variable  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

A notification that is posted when an accessory is disconnected and no longer available for your application to use.

## Declaration

```objectivec
extern NSString * const EAAccessoryDidDisconnectNotification;
```

<a id="Discussion"></a>

## Discussion

The notification object is the shared accessory manager. The `userInfo` dictionary contains an [EAAccessoryKey](eaaccessorykey.md), whose value is the [EAAccessory](eaaccessory.md) object representing the accessory that was disconnected. Before delivery of this notification can occur, you must call the [registerForLocalNotifications](eaaccessorymanager/registerforlocalnotifications%28%29.md) method to let the system know you are interested in receiving this notification.

If your accessory manager has a delegate, the delegate can use the [accessoryDidDisconnect:](eaaccessorydelegate/accessorydiddisconnect%28__%29.md) method to receive this notification instead.

## See Also

### Managing Connection Status Changes

- [registerForLocalNotifications](eaaccessorymanager/registerforlocalnotifications%28%29.md): Begins the delivery of accessory-related notifications to the current application.
- [unregisterForLocalNotifications](eaaccessorymanager/unregisterforlocalnotifications%28%29.md): Stops the delivery of accessory-related notifications to the current application.
- [EAAccessoryDidConnectNotification](eaaccessorydidconnectnotification.md): A notification that the system sends when an accessory becomes connected and available for your application to use.
- [EAAccessoryKey](eaaccessorykey.md): A key that indicates the accessory object whose status changed.
- [EAAccessorySelectedKey](eaaccessoryselectedkey.md): A key that indicates the accessory object that the user selected.
