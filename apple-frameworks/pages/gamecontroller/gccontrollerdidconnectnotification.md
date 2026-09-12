> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gccontrollerdidconnectnotification](https://developer.apple.com/documentation/gamecontroller/gccontrollerdidconnectnotification)

# GCControllerDidConnectNotification

**Interface language:** Objective-C

**Framework:** Game Controller  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

A notification that posts after a controller connects to the device.

## Declaration

```objectivec
extern NSString * const GCControllerDidConnectNotification;
```

## Mentioned In

- [Adding virtual controls to games that support game controllers in iOS](adding-virtual-controls-to-games-that-support-game-controllers-in-ios.md)
- [Discovering game controllers](discovering-game-controllers.md)

<a id="Discussion"></a>

## Discussion

The notification object is the [GCController](gccontroller.md) object that connects to the device.

The system posts this notification on the main thread.

## See Also

### Discovering controllers

- [controllers](gccontroller/controllers%28%29.md): Returns the connected controllers for the device.
- [startWirelessControllerDiscoveryWithCompletionHandler:](gccontroller/startwirelesscontrollerdiscovery%28completionhandler_%29.md): Starts searching for nearby wireless controllers.
- [stopWirelessControllerDiscovery](gccontroller/stopwirelesscontrollerdiscovery%28%29.md): Stops searching for nearby wireless controllers.
- [GCControllerDidDisconnectNotification](gccontrollerdiddisconnectnotification.md): A notification that posts after a controller disconnects from the device.
