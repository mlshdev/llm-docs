> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapcamera/pitch](https://developer.apple.com/documentation/mapkit/mkmapcamera/pitch)

# pitch (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

The viewing angle of the camera, in degrees.

## Declaration

```swift
var pitch: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

A value of `0` results in a camera that points straight down at the map. Angles greater than `0` result in a camera that pitches toward the horizon by the specified number of degrees. If the map type is [MKMapType.satellite](../mkmaptype/satellite.md) or [MKMapType.hybrid](../mkmaptype/hybrid.md), the object clamps the pitch value to `0`.

The class may clamp the value in this property to a maximum value to maintain map readability. There’s no fixed maximum value, though, because the actual maximum value is dependent on the altitude of the camera.

## See Also

### Configuring the viewing angle

- [centerCoordinate](centercoordinate.md): The map coordinate at the center of the map view.
- [heading](heading.md): The heading of the camera (in degrees) relative to true north.
- [centerCoordinateDistance](centercoordinatedistance.md): The distance from the center point of the map to the camera, in meters.
- [altitude](altitude.md): Deprecated. The altitude above the ground, in meters.

# pitch (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

The viewing angle of the camera, in degrees.

## Declaration

```objectivec
@property (nonatomic) CGFloat pitch;
```

<a id="Discussion"></a>

## Discussion

A value of `0` results in a camera that points straight down at the map. Angles greater than `0` result in a camera that pitches toward the horizon by the specified number of degrees. If the map type is [MKMapTypeSatellite](../mkmaptype/satellite.md) or [MKMapTypeHybrid](../mkmaptype/hybrid.md), the object clamps the pitch value to `0`.

The class may clamp the value in this property to a maximum value to maintain map readability. There’s no fixed maximum value, though, because the actual maximum value is dependent on the altitude of the camera.

## See Also

### Configuring the viewing angle

- [centerCoordinate](centercoordinate.md): The map coordinate at the center of the map view.
- [heading](heading.md): The heading of the camera (in degrees) relative to true north.
- [centerCoordinateDistance](centercoordinatedistance.md): The distance from the center point of the map to the camera, in meters.
- [altitude](altitude.md): Deprecated. The altitude above the ground, in meters.
