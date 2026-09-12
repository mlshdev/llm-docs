> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcracingwheeldiddisconnectnotification](https://developer.apple.com/documentation/gamecontroller/gcracingwheeldiddisconnectnotification)

# GCRacingWheelDidDisconnectNotification

**Interface language:** Objective-C

**Framework:** Game Controller  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 16.0+ · macOS 13.0+

A notification that posts after a racing wheel controller disconnects from the device.

## Declaration

```objectivec
extern NSString * const GCRacingWheelDidDisconnectNotification;
```

<a id="Discussion"></a>

## Discussion

The notification object is the [GCRacingWheel](gcracingwheel.md) object that disconnects from the device.

The system posts this notification on the main thread.

## See Also

### Discovering racing wheels

- [connectedRacingWheels](gcracingwheel/connectedracingwheels.md): The racing wheels connected to the device.
- [GCRacingWheelDidConnectNotification](gcracingwheeldidconnectnotification.md): A notification that posts after a racing wheel controller connects to the device.
