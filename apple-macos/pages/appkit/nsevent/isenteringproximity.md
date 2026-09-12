> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsevent/isenteringproximity](https://developer.apple.com/documentation/appkit/nsevent/isenteringproximity)

# isEnteringProximity (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether a pointing device is entering or leaving the proximity of its tablet.

## Declaration

```swift
var isEnteringProximity: Bool { get }
```

<a id="Discussion"></a>

## Discussion

This property is set to [true](https://developer.apple.com/documentation/swift/true) when the pointing device enters the proximity of its tablet and [false](https://developer.apple.com/documentation/swift/false) when it leaves.

This method is valid only for mouse events with subtype `NSTabletProximityEventSubtype` and for `NSTabletProximity` events; otherwise it is set to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Getting tablet proximity information

- [capabilityMask](capabilitymask.md): A mask that indicates the capabilities of the tablet device that generated this event.
- [deviceID](deviceid.md): A special identifier the system matches against tablet-pointer and tablet-proximity events.
- [pointingDeviceID](pointingdeviceid.md): The index of the pointing device currently in proximity with the tablet.
- [pointingDeviceSerialNumber](pointingdeviceserialnumber.md): The vendor-assigned serial number of a pointing device.
- [pointingDeviceType](pointingdevicetype-swift.property.md): The kind of pointing device associated with this event.
- [NSEvent.PointingDeviceType](pointingdevicetype-swift.enum.md): The pointing-device types for tablet-proximity events or mouse events with a proximity event subtype.
- [systemTabletID](systemtabletid.md): The index of the tablet device connected to the system.
- [tabletID](tabletid.md): The USB model identifier of the tablet device associated with this event.
- [uniqueID](uniqueid.md): The unique identifier of the pointing device that generated this event.
- [vendorID](vendorid.md): The vendor identifier of the tablet associated with the event.
- [vendorPointingDeviceType](vendorpointingdevicetype.md): A coded bit field whose set bits indicate the type of pointing device (within a vendor selection) associated with the event.

# enteringProximity (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether a pointing device is entering or leaving the proximity of its tablet.

## Declaration

```objectivec
@property (readonly, getter=isEnteringProximity) BOOL enteringProximity;
```

<a id="Discussion"></a>

## Discussion

This property is set to [true](https://developer.apple.com/documentation/swift/true) when the pointing device enters the proximity of its tablet and [false](https://developer.apple.com/documentation/swift/false) when it leaves.

This method is valid only for mouse events with subtype `NSTabletProximityEventSubtype` and for `NSTabletProximity` events; otherwise it is set to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Getting tablet proximity information

- [capabilityMask](capabilitymask.md): A mask that indicates the capabilities of the tablet device that generated this event.
- [deviceID](deviceid.md): A special identifier the system matches against tablet-pointer and tablet-proximity events.
- [pointingDeviceID](pointingdeviceid.md): The index of the pointing device currently in proximity with the tablet.
- [pointingDeviceSerialNumber](pointingdeviceserialnumber.md): The vendor-assigned serial number of a pointing device.
- [pointingDeviceType](pointingdevicetype-swift.property.md): The kind of pointing device associated with this event.
- [NSPointingDeviceType](pointingdevicetype-swift.enum.md): The pointing-device types for tablet-proximity events or mouse events with a proximity event subtype.
- [systemTabletID](systemtabletid.md): The index of the tablet device connected to the system.
- [tabletID](tabletid.md): The USB model identifier of the tablet device associated with this event.
- [uniqueID](uniqueid.md): The unique identifier of the pointing device that generated this event.
- [vendorID](vendorid.md): The vendor identifier of the tablet associated with the event.
- [vendorPointingDeviceType](vendorpointingdevicetype.md): A coded bit field whose set bits indicate the type of pointing device (within a vendor selection) associated with the event.
