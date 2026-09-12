> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gccontroller/startwirelesscontrollerdiscovery(completionhandler:)](https://developer.apple.com/documentation/gamecontroller/gccontroller/startwirelesscontrollerdiscovery(completionhandler:))

# startWirelessControllerDiscovery(completionHandler:) (Swift)

**Framework:** Game Controller  
**Kind:** Type Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Starts searching for nearby wireless controllers.

## Declaration

```swift
class func startWirelessControllerDiscovery(completionHandler: (@Sendable () -> Void)? = nil)
```

```swift
class func startWirelessControllerDiscovery() async
```

## Parameters

- `completionHandler`: The block that the framework calls when it completes the request.

<a id="Discussion"></a>

## Discussion

Call this method when the user chooses to discover wireless controllers from your interface. The framework searches asynchronously for discoverable wireless controllers. The framework posts the [GCControllerDidConnect](../../foundation/nsnotification/name-swift.struct/gccontrollerdidconnect.md) (Swift) or [GCControllerDidConnectNotification](../gccontrollerdidconnectnotification.md) (Objective-C) notification when it discovers new controllers. Implement the completion handler you pass to this method to handle when the framework finishes discovering controllers or when it times out.

If you call the [startWirelessControllerDiscovery(completionHandler:)](startwirelesscontrollerdiscovery%28completionhandler_%29.md) method multiple times during discovery, the framework only calls the last completion handler you pass to this method.

## See Also

### Discovering controllers

- [controllers()](controllers%28%29.md): Returns the connected controllers for the device.
- [stopWirelessControllerDiscovery()](stopwirelesscontrollerdiscovery%28%29.md): Stops searching for nearby wireless controllers.
- [GCControllerDidConnect](../../foundation/nsnotification/name-swift.struct/gccontrollerdidconnect.md): A notification that posts after a controller connects to the device.
- [GCControllerDidDisconnect](../../foundation/nsnotification/name-swift.struct/gccontrollerdiddisconnect.md): A notification that posts after a controller disconnects from the device.

# startWirelessControllerDiscoveryWithCompletionHandler: (Objective-C)

**Framework:** Game Controller  
**Kind:** Type Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Starts searching for nearby wireless controllers.

## Declaration

```objectivec
+ (void) startWirelessControllerDiscoveryWithCompletionHandler:(void (^)()) completionHandler;
```

## Parameters

- `completionHandler`: The block that the framework calls when it completes the request.

<a id="Discussion"></a>

## Discussion

Call this method when the user chooses to discover wireless controllers from your interface. The framework searches asynchronously for discoverable wireless controllers. The framework posts the [GCControllerDidConnect](../../foundation/nsnotification/name-swift.struct/gccontrollerdidconnect.md) (Swift) or [GCControllerDidConnectNotification](../gccontrollerdidconnectnotification.md) (Objective-C) notification when it discovers new controllers. Implement the completion handler you pass to this method to handle when the framework finishes discovering controllers or when it times out.

If you call the [startWirelessControllerDiscoveryWithCompletionHandler:](startwirelesscontrollerdiscovery%28completionhandler_%29.md) method multiple times during discovery, the framework only calls the last completion handler you pass to this method.

## See Also

### Discovering controllers

- [controllers](controllers%28%29.md): Returns the connected controllers for the device.
- [stopWirelessControllerDiscovery](stopwirelesscontrollerdiscovery%28%29.md): Stops searching for nearby wireless controllers.
- [GCControllerDidConnectNotification](../gccontrollerdidconnectnotification.md): A notification that posts after a controller connects to the device.
- [GCControllerDidDisconnectNotification](../gccontrollerdiddisconnectnotification.md): A notification that posts after a controller disconnects from the device.
