> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/externalaccessory/eaaccessorymanager/unregisterforlocalnotifications()](https://developer.apple.com/documentation/externalaccessory/eaaccessorymanager/unregisterforlocalnotifications())

# unregisterForLocalNotifications() (Swift)

**Framework:** External Accessory  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Stops the delivery of accessory-related notifications to the current application.

## Declaration

```swift
func unregisterForLocalNotifications()
```

<a id="Discussion"></a>

## Discussion

Typically, you would call this method either when your application exits or when you no longer want to receive accessory-related notifications. Calls to this method must be balanced with a preceding call to the [registerForLocalNotifications()](registerforlocalnotifications%28%29.md) method.

## See Also

### Managing Connection Status Changes

- [registerForLocalNotifications()](registerforlocalnotifications%28%29.md): Begins the delivery of accessory-related notifications to the current application.
- [EAAccessoryDidConnect](../../foundation/nsnotification/name-swift.struct/eaaccessorydidconnect.md): A notification that the system sends when an accessory becomes connected and available for your application to use.
- [EAAccessoryDidDisconnect](../../foundation/nsnotification/name-swift.struct/eaaccessorydiddisconnect.md): A notification that is posted when an accessory is disconnected and no longer available for your application to use.
- [EAAccessoryKey](../eaaccessorykey.md): A key that indicates the accessory object whose status changed.
- [EAAccessorySelectedKey](../eaaccessoryselectedkey.md): A key that indicates the accessory object that the user selected.

# unregisterForLocalNotifications (Objective-C)

**Framework:** External Accessory  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Stops the delivery of accessory-related notifications to the current application.

## Declaration

```objectivec
- (void) unregisterForLocalNotifications;
```

<a id="Discussion"></a>

## Discussion

Typically, you would call this method either when your application exits or when you no longer want to receive accessory-related notifications. Calls to this method must be balanced with a preceding call to the [registerForLocalNotifications](registerforlocalnotifications%28%29.md) method.

## See Also

### Managing Connection Status Changes

- [registerForLocalNotifications](registerforlocalnotifications%28%29.md): Begins the delivery of accessory-related notifications to the current application.
- [EAAccessoryDidConnectNotification](../eaaccessorydidconnectnotification.md): A notification that the system sends when an accessory becomes connected and available for your application to use.
- [EAAccessoryDidDisconnectNotification](../eaaccessorydiddisconnectnotification.md): A notification that is posted when an accessory is disconnected and no longer available for your application to use.
- [EAAccessoryKey](../eaaccessorykey.md): A key that indicates the accessory object whose status changed.
- [EAAccessorySelectedKey](../eaaccessoryselectedkey.md): A key that indicates the accessory object that the user selected.
