> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcmousediddisconnectnotification](https://developer.apple.com/documentation/gamecontroller/gcmousediddisconnectnotification)

# GCMouseDidDisconnectNotification

**Interface language:** Objective-C

**Framework:** Game Controller  
**Kind:** Global Variable  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A notification that posts after a mouse disconnects from the device.

## Declaration

```objectivec
extern NSString * const GCMouseDidDisconnectNotification;
```

<a id="Discussion"></a>

## Discussion

The notification object is a [GCMouse](gcmouse.md) object that represents the mouse.

The system posts this notification on the main thread.

## See Also

### Discovering mouse devices

- [mice](gcmouse/mice%28%29.md): Returns any mice that the user connects to the device.
- [GCMouseDidConnectNotification](gcmousedidconnectnotification.md): A notification that posts after a mouse connects to the device.
