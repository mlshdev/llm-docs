> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsevent/uniqueid](https://developer.apple.com/documentation/appkit/nsevent/uniqueid)

# uniqueID (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The unique identifier of the pointing device that generated this event.

## Declaration

```swift
var uniqueID: UInt64 { get }
```

<a id="Discussion"></a>

## Discussion

Also known as tool ID, this is a unique number recorded in the chip inside every pointing device. The unique ID makes it possible to assign a specific pointing device to a specific tablet. You can also use it to “sign” documents or to restrict access to document layers to a specific pointing device. This method is valid for mouse events with subtype `NSTabletProximityEventSubtype` and for `NSTabletProximity` events.

## See Also

### Related Documentation

- [vendorDefined](vendordefined.md): An array of three vendor-defined number objects associated with a pointing-type event.

### Getting tablet proximity information

- [capabilityMask](capabilitymask.md): A mask that indicates the capabilities of the tablet device that generated this event.
- [deviceID](deviceid.md): A special identifier the system matches against tablet-pointer and tablet-proximity events.
- [isEnteringProximity](isenteringproximity.md): A Boolean value that indicates whether a pointing device is entering or leaving the proximity of its tablet.
- [pointingDeviceID](pointingdeviceid.md): The index of the pointing device currently in proximity with the tablet.
- [pointingDeviceSerialNumber](pointingdeviceserialnumber.md): The vendor-assigned serial number of a pointing device.
- [pointingDeviceType](pointingdevicetype-swift.property.md): The kind of pointing device associated with this event.
- [NSEvent.PointingDeviceType](pointingdevicetype-swift.enum.md): The pointing-device types for tablet-proximity events or mouse events with a proximity event subtype.
- [systemTabletID](systemtabletid.md): The index of the tablet device connected to the system.
- [tabletID](tabletid.md): The USB model identifier of the tablet device associated with this event.
- [vendorID](vendorid.md): The vendor identifier of the tablet associated with the event.
- [vendorPointingDeviceType](vendorpointingdevicetype.md): A coded bit field whose set bits indicate the type of pointing device (within a vendor selection) associated with the event.

# uniqueID (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The unique identifier of the pointing device that generated this event.

## Declaration

```objectivec
@property (readonly) unsigned long long uniqueID;
```

<a id="Discussion"></a>

## Discussion

Also known as tool ID, this is a unique number recorded in the chip inside every pointing device. The unique ID makes it possible to assign a specific pointing device to a specific tablet. You can also use it to “sign” documents or to restrict access to document layers to a specific pointing device. This method is valid for mouse events with subtype `NSTabletProximityEventSubtype` and for `NSTabletProximity` events.

## See Also

### Related Documentation

- [vendorDefined](vendordefined.md): An array of three vendor-defined number objects associated with a pointing-type event.

### Getting tablet proximity information

- [capabilityMask](capabilitymask.md): A mask that indicates the capabilities of the tablet device that generated this event.
- [deviceID](deviceid.md): A special identifier the system matches against tablet-pointer and tablet-proximity events.
- [enteringProximity](isenteringproximity.md): A Boolean value that indicates whether a pointing device is entering or leaving the proximity of its tablet.
- [pointingDeviceID](pointingdeviceid.md): The index of the pointing device currently in proximity with the tablet.
- [pointingDeviceSerialNumber](pointingdeviceserialnumber.md): The vendor-assigned serial number of a pointing device.
- [pointingDeviceType](pointingdevicetype-swift.property.md): The kind of pointing device associated with this event.
- [NSPointingDeviceType](pointingdevicetype-swift.enum.md): The pointing-device types for tablet-proximity events or mouse events with a proximity event subtype.
- [systemTabletID](systemtabletid.md): The index of the tablet device connected to the system.
- [tabletID](tabletid.md): The USB model identifier of the tablet device associated with this event.
- [vendorID](vendorid.md): The vendor identifier of the tablet associated with the event.
- [vendorPointingDeviceType](vendorpointingdevicetype.md): A coded bit field whose set bits indicate the type of pointing device (within a vendor selection) associated with the event.
