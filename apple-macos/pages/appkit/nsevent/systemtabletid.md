> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsevent/systemtabletid](https://developer.apple.com/documentation/appkit/nsevent/systemtabletid)

# systemTabletID (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The index of the tablet device connected to the system.

## Declaration

```swift
var systemTabletID: Int { get }
```

<a id="Discussion"></a>

## Discussion

If multiple tablets are connected to the system, the system-tablet ID is incremented for each subsequent one. If there is only one tablet device, its system-tablet ID is zero. This property is valid for mouse events with the subtype `NSTabletProximityEventSubtype` or `NSTabletProximity` events.

## See Also

### Getting tablet proximity information

- [capabilityMask](capabilitymask.md): A mask that indicates the capabilities of the tablet device that generated this event.
- [deviceID](deviceid.md): A special identifier the system matches against tablet-pointer and tablet-proximity events.
- [isEnteringProximity](isenteringproximity.md): A Boolean value that indicates whether a pointing device is entering or leaving the proximity of its tablet.
- [pointingDeviceID](pointingdeviceid.md): The index of the pointing device currently in proximity with the tablet.
- [pointingDeviceSerialNumber](pointingdeviceserialnumber.md): The vendor-assigned serial number of a pointing device.
- [pointingDeviceType](pointingdevicetype-swift.property.md): The kind of pointing device associated with this event.
- [NSEvent.PointingDeviceType](pointingdevicetype-swift.enum.md): The pointing-device types for tablet-proximity events or mouse events with a proximity event subtype.
- [tabletID](tabletid.md): The USB model identifier of the tablet device associated with this event.
- [uniqueID](uniqueid.md): The unique identifier of the pointing device that generated this event.
- [vendorID](vendorid.md): The vendor identifier of the tablet associated with the event.
- [vendorPointingDeviceType](vendorpointingdevicetype.md): A coded bit field whose set bits indicate the type of pointing device (within a vendor selection) associated with the event.

# systemTabletID (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The index of the tablet device connected to the system.

## Declaration

```objectivec
@property (readonly) NSUInteger systemTabletID;
```

<a id="Discussion"></a>

## Discussion

If multiple tablets are connected to the system, the system-tablet ID is incremented for each subsequent one. If there is only one tablet device, its system-tablet ID is zero. This property is valid for mouse events with the subtype `NSTabletProximityEventSubtype` or `NSTabletProximity` events.

## See Also

### Getting tablet proximity information

- [capabilityMask](capabilitymask.md): A mask that indicates the capabilities of the tablet device that generated this event.
- [deviceID](deviceid.md): A special identifier the system matches against tablet-pointer and tablet-proximity events.
- [enteringProximity](isenteringproximity.md): A Boolean value that indicates whether a pointing device is entering or leaving the proximity of its tablet.
- [pointingDeviceID](pointingdeviceid.md): The index of the pointing device currently in proximity with the tablet.
- [pointingDeviceSerialNumber](pointingdeviceserialnumber.md): The vendor-assigned serial number of a pointing device.
- [pointingDeviceType](pointingdevicetype-swift.property.md): The kind of pointing device associated with this event.
- [NSPointingDeviceType](pointingdevicetype-swift.enum.md): The pointing-device types for tablet-proximity events or mouse events with a proximity event subtype.
- [tabletID](tabletid.md): The USB model identifier of the tablet device associated with this event.
- [uniqueID](uniqueid.md): The unique identifier of the pointing device that generated this event.
- [vendorID](vendorid.md): The vendor identifier of the tablet associated with the event.
- [vendorPointingDeviceType](vendorpointingdevicetype.md): A coded bit field whose set bits indicate the type of pointing device (within a vendor selection) associated with the event.
