> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/externalaccessory/eaaccessorydelegate/accessorydiddisconnect(_:)](https://developer.apple.com/documentation/externalaccessory/eaaccessorydelegate/accessorydiddisconnect(_:))

# accessoryDidDisconnect(\_:) (Swift)

**Framework:** External Accessory  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Tells the delegate that the specified accessory was disconnected from the device.

## Declaration

```swift
optional func accessoryDidDisconnect(_ accessory: EAAccessory)
```

## Parameters

- `accessory`: The accessory that was disconnected.

<a id="Discussion"></a>

## Discussion

The accessory manager calls this method as a convenience whenever it receives an [EAAccessoryDidDisconnectNotification](../eaaccessorydiddisconnectnotification.md) notification. You can use this method to remove any references to the specified accessory object and to stop any services currently using the accessory.

Because this is a convenience method, your delegate does not also need to register as an observer of the [EAAccessoryDidDisconnectNotification](../eaaccessorydiddisconnectnotification.md) notification. However, if you want your delegate to be notified of newly connected accessories, you should configure it as an observer of the [EAAccessoryDidConnectNotification](../eaaccessorydidconnectnotification.md) notification.

# accessoryDidDisconnect: (Objective-C)

**Framework:** External Accessory  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Tells the delegate that the specified accessory was disconnected from the device.

## Declaration

```objectivec
- (void) accessoryDidDisconnect:(EAAccessory *) accessory;
```

## Parameters

- `accessory`: The accessory that was disconnected.

<a id="Discussion"></a>

## Discussion

The accessory manager calls this method as a convenience whenever it receives an [EAAccessoryDidDisconnectNotification](../eaaccessorydiddisconnectnotification.md) notification. You can use this method to remove any references to the specified accessory object and to stop any services currently using the accessory.

Because this is a convenience method, your delegate does not also need to register as an observer of the [EAAccessoryDidDisconnectNotification](../eaaccessorydiddisconnectnotification.md) notification. However, if you want your delegate to be notified of newly connected accessories, you should configure it as an observer of the [EAAccessoryDidConnectNotification](../eaaccessorydidconnectnotification.md) notification.
