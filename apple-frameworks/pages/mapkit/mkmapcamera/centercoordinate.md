> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapcamera/centercoordinate](https://developer.apple.com/documentation/mapkit/mkmapcamera/centercoordinate)

# centerCoordinate (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

The map coordinate at the center of the map view.

## Declaration

```swift
var centerCoordinate: CLLocationCoordinate2D { get set }
```

<a id="Discussion"></a>

## Discussion

This point represents the coordinate on which the framework centers the map. When the camera pitch is `0`, this property also corresponds to the geographic position of the camera. Changing the pitch to a nonzero value moves the camera, but doesn’t affect this property.

## See Also

### Configuring the viewing angle

- [heading](heading.md): The heading of the camera (in degrees) relative to true north.
- [centerCoordinateDistance](centercoordinatedistance.md): The distance from the center point of the map to the camera, in meters.
- [pitch](pitch.md): The viewing angle of the camera, in degrees.
- [altitude](altitude.md): Deprecated. The altitude above the ground, in meters.

# centerCoordinate (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

The map coordinate at the center of the map view.

## Declaration

```objectivec
@property (nonatomic) CLLocationCoordinate2D centerCoordinate;
```

<a id="Discussion"></a>

## Discussion

This point represents the coordinate on which the framework centers the map. When the camera pitch is `0`, this property also corresponds to the geographic position of the camera. Changing the pitch to a nonzero value moves the camera, but doesn’t affect this property.

## See Also

### Configuring the viewing angle

- [heading](heading.md): The heading of the camera (in degrees) relative to true north.
- [centerCoordinateDistance](centercoordinatedistance.md): The distance from the center point of the map to the camera, in meters.
- [pitch](pitch.md): The viewing angle of the camera, in degrees.
- [altitude](altitude.md): Deprecated. The altitude above the ground, in meters.
