> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcstylusdidconnectnotification](https://developer.apple.com/documentation/gamecontroller/gcstylusdidconnectnotification)

# GCStylusDidConnectNotification

**Interface language:** Objective-C

**Framework:** Game Controller  
**Kind:** Global Variable  
**Availability:** visionOS 26.0+

A notification that posts after a stylus accessory connects to the device.

## Declaration

```objectivec
extern NSString * const GCStylusDidConnectNotification;
```

## Mentioned In

- [Discovering and tracking spatial game controllers and styli](discovering-and-tracking-spatial-game-controllers-and-styli.md)

<a id="discussion"></a>

## Discussion

Use this constant with `NSNotificationCenter` to listen for stylus connection events.

Connections of stylus accessories will be reflected in the `styli` array of the `GCStylus` class when the notification posts.

The `object` property of the notification will contain the `GCStylus` that was connected.

## See Also

### Accessing the styli

- [styli](gcstylus/styli.md): Get the collection of stylus accessories currently connected to the device.
- [GCStylusDidDisconnectNotification](gcstylusdiddisconnectnotification.md): A notification that posts after a stylus accessory disconnects from the device.
