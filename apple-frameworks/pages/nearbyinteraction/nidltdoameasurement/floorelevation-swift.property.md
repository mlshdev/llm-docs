> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nearbyinteraction/nidltdoameasurement/floorelevation-swift.property](https://developer.apple.com/documentation/nearbyinteraction/nidltdoameasurement/floorelevation-swift.property)

# floorElevation (Swift)

**Framework:** Nearby Interaction  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

The floor elevation information for the anchor, if available.

## Declaration

```swift
@NSCopying var floorElevation: NIDLTDOAMeasurement.FloorElevation? { get }
```

<a id="discussion"></a>

## Discussion

This property represents a DL-TDOA anchor’s vertical positioning with support for multi-story buildings. When non-nil, this property contains the floor number and height above the floor where the anchor resides in the physical environment.

## See Also

### Locating the anchor

- [coordinates](coordinates.md): A triplet that represents the location in 3D space of the anchor that provides the measurement.
- [coordinatesType](coordinatestype.md): The type of coordinate system that the measurement conforms to.
- [signalStrength](signalstrength.md): A value that represents the received signal strength, in dBm, from the anchor that provides the measurement.
- [NIDLTDOAMeasurement.FloorElevation](floorelevation-swift.class.md): An object that describes how high off the ground DL-TDOA anchors reside in the environment.

# floorElevation (Objective-C)

**Framework:** Nearby Interaction  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+

The floor elevation information for the anchor, if available.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NIDLTDOAMeasurementFloorElevation * floorElevation;
```

<a id="discussion"></a>

## Discussion

This property represents a DL-TDOA anchor’s vertical positioning with support for multi-story buildings. When non-nil, this property contains the floor number and height above the floor where the anchor resides in the physical environment.

## See Also

### Locating the anchor

- [coordinates](coordinates.md): A triplet that represents the location in 3D space of the anchor that provides the measurement.
- [coordinatesType](coordinatestype.md): The type of coordinate system that the measurement conforms to.
- [signalStrength](signalstrength.md): A value that represents the received signal strength, in dBm, from the anchor that provides the measurement.
- [NIDLTDOAMeasurementFloorElevation](floorelevation-swift.class.md): An object that describes how high off the ground DL-TDOA anchors reside in the environment.
