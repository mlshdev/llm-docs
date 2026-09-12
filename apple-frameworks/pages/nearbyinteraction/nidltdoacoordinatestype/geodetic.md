> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nearbyinteraction/nidltdoacoordinatestype/geodetic](https://developer.apple.com/documentation/nearbyinteraction/nidltdoacoordinatestype/geodetic)

# NIDLTDOACoordinatesType.geodetic (Swift)

**Framework:** Nearby Interaction  
**Kind:** Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

A coordinate type that specifies a latitude, longitude, and altitude triplet.

## Declaration

```swift
case geodetic
```

<a id="discussion"></a>

## Discussion

When the coordinate type ([coordinatesType](../nidltdoameasurement/coordinatestype.md)) for a given measurement ([NIDLTDOAMeasurement](../nidltdoameasurement.md)) is this option, the value of the measurement’s [coordinates](../nidltdoameasurement/coordinates.md) is a triplet of the format (latitude, longitude, altitude).

## See Also

### Identifying a coordinate type

- [NIDLTDOACoordinatesType.relative](relative.md): A coordinate type that specifies a 3D Cartesian triplet.

# NIDLTDOACoordinatesTypeGeodetic (Objective-C)

**Framework:** Nearby Interaction  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · watchOS

A coordinate type that specifies a latitude, longitude, and altitude triplet.

## Declaration

```objectivec
NIDLTDOACoordinatesTypeGeodetic
```

<a id="discussion"></a>

## Discussion

When the coordinate type ([coordinatesType](../nidltdoameasurement/coordinatestype.md)) for a given measurement ([NIDLTDOAMeasurement](../nidltdoameasurement.md)) is this option, the value of the measurement’s [coordinates](../nidltdoameasurement/coordinates.md) is a triplet of the format (latitude, longitude, altitude).

## See Also

### Identifying a coordinate type

- [NIDLTDOACoordinatesTypeRelative](relative.md): A coordinate type that specifies a 3D Cartesian triplet.
