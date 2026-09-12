> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nearbyinteraction/nidltdoacoordinatestype/relative](https://developer.apple.com/documentation/nearbyinteraction/nidltdoacoordinatestype/relative)

# NIDLTDOACoordinatesType.relative (Swift)

**Framework:** Nearby Interaction  
**Kind:** Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

A coordinate type that specifies a 3D Cartesian triplet.

## Declaration

```swift
case relative
```

<a id="discussion"></a>

## Discussion

When the coordinate type ([coordinatesType](../nidltdoameasurement/coordinatestype.md)) for a given measurement ([NIDLTDOAMeasurement](../nidltdoameasurement.md)) is this option, the value of the measurement’s [coordinates](../nidltdoameasurement/coordinates.md) is a triplet of the format (x, y, z).

## See Also

### Identifying a coordinate type

- [NIDLTDOACoordinatesType.geodetic](geodetic.md): A coordinate type that specifies a latitude, longitude, and altitude triplet.

# NIDLTDOACoordinatesTypeRelative (Objective-C)

**Framework:** Nearby Interaction  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · watchOS

A coordinate type that specifies a 3D Cartesian triplet.

## Declaration

```objectivec
NIDLTDOACoordinatesTypeRelative
```

<a id="discussion"></a>

## Discussion

When the coordinate type ([coordinatesType](../nidltdoameasurement/coordinatestype.md)) for a given measurement ([NIDLTDOAMeasurement](../nidltdoameasurement.md)) is this option, the value of the measurement’s [coordinates](../nidltdoameasurement/coordinates.md) is a triplet of the format (x, y, z).

## See Also

### Identifying a coordinate type

- [NIDLTDOACoordinatesTypeGeodetic](geodetic.md): A coordinate type that specifies a latitude, longitude, and altitude triplet.
