> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nearbyinteraction/nidltdoameasurement/coordinates](https://developer.apple.com/documentation/nearbyinteraction/nidltdoameasurement/coordinates)

# coordinates (Swift)

**Framework:** Nearby Interaction  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

A triplet that represents the location in 3D space of the anchor that provides the measurement.

## Declaration

```swift
var coordinates: simd_double3 { get }
```

<a id="discussion"></a>

## Discussion

The measurement’s [coordinatesType](coordinatestype.md) determines the manner in which you interpret this property’s value.

## See Also

### Locating the anchor

- [coordinatesType](coordinatestype.md): The type of coordinate system that the measurement conforms to.
- [signalStrength](signalstrength.md): A value that represents the received signal strength, in dBm, from the anchor that provides the measurement.
- [floorElevation](floorelevation-swift.property.md): The floor elevation information for the anchor, if available.
- [NIDLTDOAMeasurement.FloorElevation](floorelevation-swift.class.md): An object that describes how high off the ground DL-TDOA anchors reside in the environment.

# coordinates (Objective-C)

**Framework:** Nearby Interaction  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+

A triplet that represents the location in 3D space of the anchor that provides the measurement.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) simd_double3 coordinates;
```

<a id="discussion"></a>

## Discussion

The measurement’s [coordinatesType](coordinatestype.md) determines the manner in which you interpret this property’s value.

## See Also

### Locating the anchor

- [coordinatesType](coordinatestype.md): The type of coordinate system that the measurement conforms to.
- [signalStrength](signalstrength.md): A value that represents the received signal strength, in dBm, from the anchor that provides the measurement.
- [floorElevation](floorelevation-swift.property.md): The floor elevation information for the anchor, if available.
- [NIDLTDOAMeasurementFloorElevation](floorelevation-swift.class.md): An object that describes how high off the ground DL-TDOA anchors reside in the environment.
