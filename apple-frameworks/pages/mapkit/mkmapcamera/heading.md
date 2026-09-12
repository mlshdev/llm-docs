> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapcamera/heading](https://developer.apple.com/documentation/mapkit/mkmapcamera/heading)

# heading (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

The heading of the camera (in degrees) relative to true north.

## Declaration

```swift
var heading: CLLocationDirection { get set }
```

<a id="Discussion"></a>

## Discussion

The value `0` means that the top edge of the map view corresponds to true north. The value `90` means the top of the map is pointing due east. The value `180` means the top of the map points due south, and so on.

## See Also

### Configuring the viewing angle

- [centerCoordinate](centercoordinate.md): The map coordinate at the center of the map view.
- [centerCoordinateDistance](centercoordinatedistance.md): The distance from the center point of the map to the camera, in meters.
- [pitch](pitch.md): The viewing angle of the camera, in degrees.
- [altitude](altitude.md): Deprecated. The altitude above the ground, in meters.

# heading (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

The heading of the camera (in degrees) relative to true north.

## Declaration

```objectivec
@property (nonatomic) CLLocationDirection heading;
```

<a id="Discussion"></a>

## Discussion

The value `0` means that the top edge of the map view corresponds to true north. The value `90` means the top of the map is pointing due east. The value `180` means the top of the map points due south, and so on.

## See Also

### Configuring the viewing angle

- [centerCoordinate](centercoordinate.md): The map coordinate at the center of the map view.
- [centerCoordinateDistance](centercoordinatedistance.md): The distance from the center point of the map to the camera, in meters.
- [pitch](pitch.md): The viewing angle of the camera, in degrees.
- [altitude](altitude.md): Deprecated. The altitude above the ground, in meters.
