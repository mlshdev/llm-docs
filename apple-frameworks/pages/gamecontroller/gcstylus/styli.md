> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcstylus/styli](https://developer.apple.com/documentation/gamecontroller/gcstylus/styli)

# styli (Swift)

**Framework:** Game Controller  
**Kind:** Type Property  
**Availability:** visionOS

Get the collection of stylus accessories currently connected to the device.

## Declaration

```swift
class var styli: [GCStylus] { get }
```

## Mentioned In

- [Discovering and tracking spatial game controllers and styli](../discovering-and-tracking-spatial-game-controllers-and-styli.md)

<a id="discussion"></a>

## Discussion

This property returns an array of all currently connected stylus accessories. The array is empty when no stylus accessories are connected.  The array updates automatically as stylus accessories connect and disconnect.

To be notified when the array changes, register for the `GCStylusDidConnectNotification` and `GCStylusDidDisconnectNotification`.

# styli (Objective-C)

**Framework:** Game Controller  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Get the collection of stylus accessories currently connected to the device.

## Declaration

```objectivec
@property (class, readonly) NSArray<GCStylus *> * styli;
```

## Mentioned In

- [Discovering and tracking spatial game controllers and styli](../discovering-and-tracking-spatial-game-controllers-and-styli.md)

<a id="discussion"></a>

## Discussion

This property returns an array of all currently connected stylus accessories. The array is empty when no stylus accessories are connected.  The array updates automatically as stylus accessories connect and disconnect.

To be notified when the array changes, register for the `GCStylusDidConnectNotification` and `GCStylusDidDisconnectNotification`.

## See Also

### Accessing the styli

- [GCStylusDidConnectNotification](../gcstylusdidconnectnotification.md): A notification that posts after a stylus accessory connects to the device.
- [GCStylusDidDisconnectNotification](../gcstylusdiddisconnectnotification.md): A notification that posts after a stylus accessory disconnects from the device.
