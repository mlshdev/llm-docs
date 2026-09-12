> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gccontroller/stopwirelesscontrollerdiscovery()](https://developer.apple.com/documentation/gamecontroller/gccontroller/stopwirelesscontrollerdiscovery())

# stopWirelessControllerDiscovery() (Swift)

**Framework:** Game Controller  
**Kind:** Type Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Stops searching for nearby wireless controllers.

## Declaration

```swift
class func stopWirelessControllerDiscovery()
```

<a id="Discussion"></a>

## Discussion

If you call this method while the framework searches for wireless controllers, the framework stops searching and invokes the completion handler you pass to the [startWirelessControllerDiscovery(completionHandler:)](startwirelesscontrollerdiscovery%28completionhandler_%29.md) method.

## See Also

### Discovering controllers

- [controllers()](controllers%28%29.md): Returns the connected controllers for the device.
- [startWirelessControllerDiscovery(completionHandler:)](startwirelesscontrollerdiscovery%28completionhandler_%29.md): Starts searching for nearby wireless controllers.
- [GCControllerDidConnect](../../foundation/nsnotification/name-swift.struct/gccontrollerdidconnect.md): A notification that posts after a controller connects to the device.
- [GCControllerDidDisconnect](../../foundation/nsnotification/name-swift.struct/gccontrollerdiddisconnect.md): A notification that posts after a controller disconnects from the device.

# stopWirelessControllerDiscovery (Objective-C)

**Framework:** Game Controller  
**Kind:** Type Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Stops searching for nearby wireless controllers.

## Declaration

```objectivec
+ (void) stopWirelessControllerDiscovery;
```

<a id="Discussion"></a>

## Discussion

If you call this method while the framework searches for wireless controllers, the framework stops searching and invokes the completion handler you pass to the [startWirelessControllerDiscoveryWithCompletionHandler:](startwirelesscontrollerdiscovery%28completionhandler_%29.md) method.

## See Also

### Discovering controllers

- [controllers](controllers%28%29.md): Returns the connected controllers for the device.
- [startWirelessControllerDiscoveryWithCompletionHandler:](startwirelesscontrollerdiscovery%28completionhandler_%29.md): Starts searching for nearby wireless controllers.
- [GCControllerDidConnectNotification](../gccontrollerdidconnectnotification.md): A notification that posts after a controller connects to the device.
- [GCControllerDidDisconnectNotification](../gccontrollerdiddisconnectnotification.md): A notification that posts after a controller disconnects from the device.
