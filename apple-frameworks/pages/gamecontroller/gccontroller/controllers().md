> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gccontroller/controllers()](https://developer.apple.com/documentation/gamecontroller/gccontroller/controllers())

# controllers() (Swift)

**Framework:** Game Controller  
**Kind:** Type Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Returns the connected controllers for the device.

## Declaration

```swift
class func controllers() -> [GCController]
```

<a id="return-value"></a>

## Return Value

The currently connected controllers.

## Mentioned In

- [Discovering game controllers](../discovering-game-controllers.md)
- [Discovering and tracking spatial game controllers and styli](../discovering-and-tracking-spatial-game-controllers-and-styli.md)

<a id="Discussion"></a>

## Discussion

To track the connection status of controllers, observe the framework notifications. The framework posts the [GCControllerDidConnect](../../foundation/nsnotification/name-swift.struct/gccontrollerdidconnect.md) (Swift) and [GCControllerDidBecomeCurrent](../../foundation/nsnotification/name-swift.struct/gccontrollerdidbecomecurrent.md) (Swift) notifications when a controller connects to a device. For Objective-C, it posts the [GCControllerDidConnectNotification](../gccontrollerdidconnectnotification.md) and [GCControllerDidBecomeCurrentNotification](../gccontrollerdidbecomecurrentnotification.md) notifications. When a controller disconnects from a device, it posts the [GCControllerDidDisconnect](../../foundation/nsnotification/name-swift.struct/gccontrollerdiddisconnect.md) (Swift) and [GCControllerDidStopBeingCurrent](../../foundation/nsnotification/name-swift.struct/gccontrollerdidstopbeingcurrent.md) (Swift) notifications. For Objective-C, it posts the [GCControllerDidDisconnectNotification](../gccontrollerdiddisconnectnotification.md) and [GCControllerDidStopBeingCurrentNotification](../gccontrollerdidstopbeingcurrentnotification.md) notifications.

## See Also

### Discovering controllers

- [startWirelessControllerDiscovery(completionHandler:)](startwirelesscontrollerdiscovery%28completionhandler_%29.md): Starts searching for nearby wireless controllers.
- [stopWirelessControllerDiscovery()](stopwirelesscontrollerdiscovery%28%29.md): Stops searching for nearby wireless controllers.
- [GCControllerDidConnect](../../foundation/nsnotification/name-swift.struct/gccontrollerdidconnect.md): A notification that posts after a controller connects to the device.
- [GCControllerDidDisconnect](../../foundation/nsnotification/name-swift.struct/gccontrollerdiddisconnect.md): A notification that posts after a controller disconnects from the device.

# controllers (Objective-C)

**Framework:** Game Controller  
**Kind:** Type Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Returns the connected controllers for the device.

## Declaration

```objectivec
+ (NSArray<GCController *> *) controllers;
```

<a id="return-value"></a>

## Return Value

The currently connected controllers.

## Mentioned In

- [Discovering game controllers](../discovering-game-controllers.md)
- [Discovering and tracking spatial game controllers and styli](../discovering-and-tracking-spatial-game-controllers-and-styli.md)

<a id="Discussion"></a>

## Discussion

To track the connection status of controllers, observe the framework notifications. The framework posts the [GCControllerDidConnect](../../foundation/nsnotification/name-swift.struct/gccontrollerdidconnect.md) (Swift) and [GCControllerDidBecomeCurrent](../../foundation/nsnotification/name-swift.struct/gccontrollerdidbecomecurrent.md) (Swift) notifications when a controller connects to a device. For Objective-C, it posts the [GCControllerDidConnectNotification](../gccontrollerdidconnectnotification.md) and [GCControllerDidBecomeCurrentNotification](../gccontrollerdidbecomecurrentnotification.md) notifications. When a controller disconnects from a device, it posts the [GCControllerDidDisconnect](../../foundation/nsnotification/name-swift.struct/gccontrollerdiddisconnect.md) (Swift) and [GCControllerDidStopBeingCurrent](../../foundation/nsnotification/name-swift.struct/gccontrollerdidstopbeingcurrent.md) (Swift) notifications. For Objective-C, it posts the [GCControllerDidDisconnectNotification](../gccontrollerdiddisconnectnotification.md) and [GCControllerDidStopBeingCurrentNotification](../gccontrollerdidstopbeingcurrentnotification.md) notifications.

## See Also

### Discovering controllers

- [startWirelessControllerDiscoveryWithCompletionHandler:](startwirelesscontrollerdiscovery%28completionhandler_%29.md): Starts searching for nearby wireless controllers.
- [stopWirelessControllerDiscovery](stopwirelesscontrollerdiscovery%28%29.md): Stops searching for nearby wireless controllers.
- [GCControllerDidConnectNotification](../gccontrollerdidconnectnotification.md): A notification that posts after a controller connects to the device.
- [GCControllerDidDisconnectNotification](../gccontrollerdiddisconnectnotification.md): A notification that posts after a controller disconnects from the device.
