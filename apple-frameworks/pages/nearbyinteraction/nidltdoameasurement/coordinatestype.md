> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nearbyinteraction/nidltdoameasurement/coordinatestype](https://developer.apple.com/documentation/nearbyinteraction/nidltdoameasurement/coordinatestype)

# coordinatesType (Swift)

**Framework:** Nearby Interaction  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The type of coordinate system that the measurement conforms to.

## Declaration

```swift
var coordinatesType: NIDLTDOACoordinatesType { get }
```

<a id="discussion"></a>

## Discussion

Measurements provide coordinates for the anchor that sends the message. Depending on the configuration of the anchor, the coordinates are in one of two formats: [NIDLTDOACoordinatesType.geodetic](../nidltdoacoordinatestype/geodetic.md) or [NIDLTDOACoordinatesType.relative](../nidltdoacoordinatestype/relative.md).

The value of this property determines the manner in which your app interprets the value of the anchor’s [coordinates](coordinates.md).

## See Also

### Locating the anchor

- [coordinates](coordinates.md): A triplet that represents the location in 3D space of the anchor that provides the measurement.
- [signalStrength](signalstrength.md): A value that represents the received signal strength, in dBm, from the anchor that provides the measurement.
- [floorElevation](floorelevation-swift.property.md): The floor elevation information for the anchor, if available.
- [NIDLTDOAMeasurement.FloorElevation](floorelevation-swift.class.md): An object that describes how high off the ground DL-TDOA anchors reside in the environment.

# coordinatesType (Objective-C)

**Framework:** Nearby Interaction  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+

The type of coordinate system that the measurement conforms to.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) NIDLTDOACoordinatesType coordinatesType;
```

<a id="discussion"></a>

## Discussion

Measurements provide coordinates for the anchor that sends the message. Depending on the configuration of the anchor, the coordinates are in one of two formats: [NIDLTDOACoordinatesTypeGeodetic](../nidltdoacoordinatestype/geodetic.md) or [NIDLTDOACoordinatesTypeRelative](../nidltdoacoordinatestype/relative.md).

The value of this property determines the manner in which your app interprets the value of the anchor’s [coordinates](coordinates.md).

## See Also

### Locating the anchor

- [coordinates](coordinates.md): A triplet that represents the location in 3D space of the anchor that provides the measurement.
- [signalStrength](signalstrength.md): A value that represents the received signal strength, in dBm, from the anchor that provides the measurement.
- [floorElevation](floorelevation-swift.property.md): The floor elevation information for the anchor, if available.
- [NIDLTDOAMeasurementFloorElevation](floorelevation-swift.class.md): An object that describes how high off the ground DL-TDOA anchors reside in the environment.
