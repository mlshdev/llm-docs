> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/externalaccessory/eaaccessoryselectedkey](https://developer.apple.com/documentation/externalaccessory/eaaccessoryselectedkey)

# EAAccessorySelectedKey (Swift)

**Framework:** External Accessory  
**Kind:** Global Variable  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

A key that indicates the accessory object that the user selected.

## Declaration

```swift
let EAAccessorySelectedKey: String
```

<a id="Discussion"></a>

## Discussion

The value assigned to this key is the [EAAccessory](eaaccessory.md) object that the user selected. This key is included in the info dictionary when the user pairs a Bluetooth accessory with the device using the Bluetooth picker.

## See Also

### Managing Connection Status Changes

- [registerForLocalNotifications()](eaaccessorymanager/registerforlocalnotifications%28%29.md): Begins the delivery of accessory-related notifications to the current application.
- [unregisterForLocalNotifications()](eaaccessorymanager/unregisterforlocalnotifications%28%29.md): Stops the delivery of accessory-related notifications to the current application.
- [EAAccessoryDidConnect](../foundation/nsnotification/name-swift.struct/eaaccessorydidconnect.md): A notification that the system sends when an accessory becomes connected and available for your application to use.
- [EAAccessoryDidDisconnect](../foundation/nsnotification/name-swift.struct/eaaccessorydiddisconnect.md): A notification that is posted when an accessory is disconnected and no longer available for your application to use.
- [EAAccessoryKey](eaaccessorykey.md): A key that indicates the accessory object whose status changed.

# EAAccessorySelectedKey (Objective-C)

**Framework:** External Accessory  
**Kind:** Global Variable  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

A key that indicates the accessory object that the user selected.

## Declaration

```objectivec
extern NSString * const EAAccessorySelectedKey;
```

<a id="Discussion"></a>

## Discussion

The value assigned to this key is the [EAAccessory](eaaccessory.md) object that the user selected. This key is included in the info dictionary when the user pairs a Bluetooth accessory with the device using the Bluetooth picker.

## See Also

### Managing Connection Status Changes

- [registerForLocalNotifications](eaaccessorymanager/registerforlocalnotifications%28%29.md): Begins the delivery of accessory-related notifications to the current application.
- [unregisterForLocalNotifications](eaaccessorymanager/unregisterforlocalnotifications%28%29.md): Stops the delivery of accessory-related notifications to the current application.
- [EAAccessoryDidConnectNotification](eaaccessorydidconnectnotification.md): A notification that the system sends when an accessory becomes connected and available for your application to use.
- [EAAccessoryDidDisconnectNotification](eaaccessorydiddisconnectnotification.md): A notification that is posted when an accessory is disconnected and no longer available for your application to use.
- [EAAccessoryKey](eaaccessorykey.md): A key that indicates the accessory object whose status changed.
