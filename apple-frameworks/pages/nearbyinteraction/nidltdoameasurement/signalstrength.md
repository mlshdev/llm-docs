> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nearbyinteraction/nidltdoameasurement/signalstrength](https://developer.apple.com/documentation/nearbyinteraction/nidltdoameasurement/signalstrength)

# signalStrength (Swift)

**Framework:** Nearby Interaction  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

A value that represents the received signal strength, in dBm, from the anchor that provides the measurement.

## Declaration

```swift
var signalStrength: Double { get }
```

## See Also

### Locating the anchor

- [coordinates](coordinates.md): A triplet that represents the location in 3D space of the anchor that provides the measurement.
- [coordinatesType](coordinatestype.md): The type of coordinate system that the measurement conforms to.
- [floorElevation](floorelevation-swift.property.md): The floor elevation information for the anchor, if available.
- [NIDLTDOAMeasurement.FloorElevation](floorelevation-swift.class.md): An object that describes how high off the ground DL-TDOA anchors reside in the environment.

# signalStrength (Objective-C)

**Framework:** Nearby Interaction  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+

A value that represents the received signal strength, in dBm, from the anchor that provides the measurement.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) double signalStrength;
```

## See Also

### Locating the anchor

- [coordinates](coordinates.md): A triplet that represents the location in 3D space of the anchor that provides the measurement.
- [coordinatesType](coordinatestype.md): The type of coordinate system that the measurement conforms to.
- [floorElevation](floorelevation-swift.property.md): The floor elevation information for the anchor, if available.
- [NIDLTDOAMeasurementFloorElevation](floorelevation-swift.class.md): An object that describes how high off the ground DL-TDOA anchors reside in the environment.
