> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsevent/pointingdevicetype-swift.enum](https://developer.apple.com/documentation/appkit/nsevent/pointingdevicetype-swift.enum)

# NSEvent.PointingDeviceType (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

The pointing-device types for tablet-proximity events or mouse events with a proximity event subtype.

## Declaration

```swift
enum PointingDeviceType
```

<a id="overview"></a>

## Overview

The [pointingDeviceType](pointingdevicetype-swift.property.md) property returns one of these constants.

## Topics

### Enumeration Cases

- [NSEvent.PointingDeviceType.cursor](pointingdevicetype-swift.enum/cursor.md): Represents a cursor pointing device.
- [NSEvent.PointingDeviceType.eraser](pointingdevicetype-swift.enum/eraser.md): Represents the eraser end of a stylus-like pointing device.
- [NSEvent.PointingDeviceType.pen](pointingdevicetype-swift.enum/pen.md): Represents the tip end of a stylus-like pointing device.
- [NSEvent.PointingDeviceType.unknown](pointingdevicetype-swift.enum/unknown.md): Represents an unknown type of pointing device.

### Initializers

- [init(rawValue:)](pointingdevicetype-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting tablet proximity information

- [capabilityMask](capabilitymask.md): A mask that indicates the capabilities of the tablet device that generated this event.
- [deviceID](deviceid.md): A special identifier the system matches against tablet-pointer and tablet-proximity events.
- [isEnteringProximity](isenteringproximity.md): A Boolean value that indicates whether a pointing device is entering or leaving the proximity of its tablet.
- [pointingDeviceID](pointingdeviceid.md): The index of the pointing device currently in proximity with the tablet.
- [pointingDeviceSerialNumber](pointingdeviceserialnumber.md): The vendor-assigned serial number of a pointing device.
- [pointingDeviceType](pointingdevicetype-swift.property.md): The kind of pointing device associated with this event.
- [systemTabletID](systemtabletid.md): The index of the tablet device connected to the system.
- [tabletID](tabletid.md): The USB model identifier of the tablet device associated with this event.
- [uniqueID](uniqueid.md): The unique identifier of the pointing device that generated this event.
- [vendorID](vendorid.md): The vendor identifier of the tablet associated with the event.
- [vendorPointingDeviceType](vendorpointingdevicetype.md): A coded bit field whose set bits indicate the type of pointing device (within a vendor selection) associated with the event.

# NSPointingDeviceType (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

The pointing-device types for tablet-proximity events or mouse events with a proximity event subtype.

## Declaration

```objectivec
enum NSPointingDeviceType : NSUInteger;
```

<a id="overview"></a>

## Overview

The [pointingDeviceType](pointingdevicetype-swift.property.md) property returns one of these constants.

## Topics

### Enumeration Cases

- [NSPointingDeviceTypeCursor](pointingdevicetype-swift.enum/cursor.md): Represents a cursor pointing device.
- [NSPointingDeviceTypeEraser](pointingdevicetype-swift.enum/eraser.md): Represents the eraser end of a stylus-like pointing device.
- [NSPointingDeviceTypePen](pointingdevicetype-swift.enum/pen.md): Represents the tip end of a stylus-like pointing device.
- [NSPointingDeviceTypeUnknown](pointingdevicetype-swift.enum/unknown.md): Represents an unknown type of pointing device.

### Deprecated

- [NSCursorPointingDevice](../nscursorpointingdevice.md): Deprecated. Represents a cursor (or puck-like) pointing device.
- [NSEraserPointingDevice](../nseraserpointingdevice.md): Deprecated. Represents the eraser end of a stylus-like pointing device.
- [NSPenPointingDevice](../nspenpointingdevice.md): Deprecated. Represents the tip end of a stylus-like pointing device.
- [NSUnknownPointingDevice](../nsunknownpointingdevice.md): Deprecated. Represents an unknown type of pointing device.

## See Also

### Getting tablet proximity information

- [capabilityMask](capabilitymask.md): A mask that indicates the capabilities of the tablet device that generated this event.
- [deviceID](deviceid.md): A special identifier the system matches against tablet-pointer and tablet-proximity events.
- [enteringProximity](isenteringproximity.md): A Boolean value that indicates whether a pointing device is entering or leaving the proximity of its tablet.
- [pointingDeviceID](pointingdeviceid.md): The index of the pointing device currently in proximity with the tablet.
- [pointingDeviceSerialNumber](pointingdeviceserialnumber.md): The vendor-assigned serial number of a pointing device.
- [pointingDeviceType](pointingdevicetype-swift.property.md): The kind of pointing device associated with this event.
- [systemTabletID](systemtabletid.md): The index of the tablet device connected to the system.
- [tabletID](tabletid.md): The USB model identifier of the tablet device associated with this event.
- [uniqueID](uniqueid.md): The unique identifier of the pointing device that generated this event.
- [vendorID](vendorid.md): The vendor identifier of the tablet associated with the event.
- [vendorPointingDeviceType](vendorpointingdevicetype.md): A coded bit field whose set bits indicate the type of pointing device (within a vendor selection) associated with the event.
