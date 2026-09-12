> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsevent/capabilitymask](https://developer.apple.com/documentation/appkit/nsevent/capabilitymask)

# capabilityMask (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A mask that indicates the capabilities of the tablet device that generated this event.

## Declaration

```swift
var capabilityMask: Int { get }
```

<a id="Discussion"></a>

## Discussion

These bits are vendor-defined. This property is valid only for mouse events with a subtype of `NSTabletProximityEventSubtype` and for events of type `NSTabletProximity`; otherwise, it is set to `0`.

## See Also

### Getting tablet proximity information

- [deviceID](deviceid.md): A special identifier the system matches against tablet-pointer and tablet-proximity events.
- [isEnteringProximity](isenteringproximity.md): A Boolean value that indicates whether a pointing device is entering or leaving the proximity of its tablet.
- [pointingDeviceID](pointingdeviceid.md): The index of the pointing device currently in proximity with the tablet.
- [pointingDeviceSerialNumber](pointingdeviceserialnumber.md): The vendor-assigned serial number of a pointing device.
- [pointingDeviceType](pointingdevicetype-swift.property.md): The kind of pointing device associated with this event.
- [NSEvent.PointingDeviceType](pointingdevicetype-swift.enum.md): The pointing-device types for tablet-proximity events or mouse events with a proximity event subtype.
- [systemTabletID](systemtabletid.md): The index of the tablet device connected to the system.
- [tabletID](tabletid.md): The USB model identifier of the tablet device associated with this event.
- [uniqueID](uniqueid.md): The unique identifier of the pointing device that generated this event.
- [vendorID](vendorid.md): The vendor identifier of the tablet associated with the event.
- [vendorPointingDeviceType](vendorpointingdevicetype.md): A coded bit field whose set bits indicate the type of pointing device (within a vendor selection) associated with the event.

# capabilityMask (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A mask that indicates the capabilities of the tablet device that generated this event.

## Declaration

```objectivec
@property (readonly) NSUInteger capabilityMask;
```

<a id="Discussion"></a>

## Discussion

These bits are vendor-defined. This property is valid only for mouse events with a subtype of `NSTabletProximityEventSubtype` and for events of type `NSTabletProximity`; otherwise, it is set to `0`.

## See Also

### Getting tablet proximity information

- [deviceID](deviceid.md): A special identifier the system matches against tablet-pointer and tablet-proximity events.
- [enteringProximity](isenteringproximity.md): A Boolean value that indicates whether a pointing device is entering or leaving the proximity of its tablet.
- [pointingDeviceID](pointingdeviceid.md): The index of the pointing device currently in proximity with the tablet.
- [pointingDeviceSerialNumber](pointingdeviceserialnumber.md): The vendor-assigned serial number of a pointing device.
- [pointingDeviceType](pointingdevicetype-swift.property.md): The kind of pointing device associated with this event.
- [NSPointingDeviceType](pointingdevicetype-swift.enum.md): The pointing-device types for tablet-proximity events or mouse events with a proximity event subtype.
- [systemTabletID](systemtabletid.md): The index of the tablet device connected to the system.
- [tabletID](tabletid.md): The USB model identifier of the tablet device associated with this event.
- [uniqueID](uniqueid.md): The unique identifier of the pointing device that generated this event.
- [vendorID](vendorid.md): The vendor identifier of the tablet associated with the event.
- [vendorPointingDeviceType](vendorpointingdevicetype.md): A coded bit field whose set bits indicate the type of pointing device (within a vendor selection) associated with the event.
