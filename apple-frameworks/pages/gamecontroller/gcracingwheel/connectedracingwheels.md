> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcracingwheel/connectedracingwheels](https://developer.apple.com/documentation/gamecontroller/gcracingwheel/connectedracingwheels)

# connectedRacingWheels (Swift)

**Framework:** Game Controller  
**Kind:** Type Property  
**Availability:** Mac Catalyst 16.0+ · macOS 13.0+

The racing wheels connected to the device.

## Declaration

```swift
class var connectedRacingWheels: Set<GCRacingWheel> { get }
```

## See Also

### Discovering racing wheels

- [GCRacingWheelDidConnect](../../foundation/nsnotification/name-swift.struct/gcracingwheeldidconnect.md): A notification that posts after a racing wheel controller connects to the device.
- [GCRacingWheelDidDisconnect](../../foundation/nsnotification/name-swift.struct/gcracingwheeldiddisconnect.md): A notification that posts after a racing wheel controller disconnects from the device.

# connectedRacingWheels (Objective-C)

**Framework:** Game Controller  
**Kind:** Type Property  
**Availability:** Mac Catalyst 16.0+ · macOS 13.0+

The racing wheels connected to the device.

## Declaration

```objectivec
@property (class, nonatomic, readonly) NSSet<GCRacingWheel *> * connectedRacingWheels;
```

## See Also

### Discovering racing wheels

- [GCRacingWheelDidConnectNotification](../gcracingwheeldidconnectnotification.md): A notification that posts after a racing wheel controller connects to the device.
- [GCRacingWheelDidDisconnectNotification](../gcracingwheeldiddisconnectnotification.md): A notification that posts after a racing wheel controller disconnects from the device.
