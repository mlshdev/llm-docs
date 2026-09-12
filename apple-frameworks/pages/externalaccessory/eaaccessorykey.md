> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/externalaccessory/eaaccessorykey](https://developer.apple.com/documentation/externalaccessory/eaaccessorykey)

# EAAccessoryKey (Swift)

**Framework:** External Accessory  
**Kind:** Global Variable  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

A key that indicates the accessory object whose status changed.

## Declaration

```swift
let EAAccessoryKey: String
```

<a id="Discussion"></a>

## Discussion

The [EAAccessoryDidConnectNotification](eaaccessorydidconnectnotification.md) and [EAAccessoryDidDisconnectNotification](eaaccessorydiddisconnectnotification.md) notifications contain this key in their userInfo dictionary. The value is an [EAAccessory](eaaccessory.md) object.

## See Also

### Managing Connection Status Changes

- [registerForLocalNotifications()](eaaccessorymanager/registerforlocalnotifications%28%29.md): Begins the delivery of accessory-related notifications to the current application.
- [unregisterForLocalNotifications()](eaaccessorymanager/unregisterforlocalnotifications%28%29.md): Stops the delivery of accessory-related notifications to the current application.
- [EAAccessoryDidConnect](../foundation/nsnotification/name-swift.struct/eaaccessorydidconnect.md): A notification that the system sends when an accessory becomes connected and available for your application to use.
- [EAAccessoryDidDisconnect](../foundation/nsnotification/name-swift.struct/eaaccessorydiddisconnect.md): A notification that is posted when an accessory is disconnected and no longer available for your application to use.
- [EAAccessorySelectedKey](eaaccessoryselectedkey.md): A key that indicates the accessory object that the user selected.

# EAAccessoryKey (Objective-C)

**Framework:** External Accessory  
**Kind:** Global Variable  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

A key that indicates the accessory object whose status changed.

## Declaration

```objectivec
extern NSString * const EAAccessoryKey;
```

<a id="Discussion"></a>

## Discussion

The [EAAccessoryDidConnectNotification](eaaccessorydidconnectnotification.md) and [EAAccessoryDidDisconnectNotification](eaaccessorydiddisconnectnotification.md) notifications contain this key in their userInfo dictionary. The value is an [EAAccessory](eaaccessory.md) object.

## See Also

### Managing Connection Status Changes

- [registerForLocalNotifications](eaaccessorymanager/registerforlocalnotifications%28%29.md): Begins the delivery of accessory-related notifications to the current application.
- [unregisterForLocalNotifications](eaaccessorymanager/unregisterforlocalnotifications%28%29.md): Stops the delivery of accessory-related notifications to the current application.
- [EAAccessoryDidConnectNotification](eaaccessorydidconnectnotification.md): A notification that the system sends when an accessory becomes connected and available for your application to use.
- [EAAccessoryDidDisconnectNotification](eaaccessorydiddisconnectnotification.md): A notification that is posted when an accessory is disconnected and no longer available for your application to use.
- [EAAccessorySelectedKey](eaaccessoryselectedkey.md): A key that indicates the accessory object that the user selected.
