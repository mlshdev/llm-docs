> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapcamera/altitude](https://developer.apple.com/documentation/mapkit/mkmapcamera/altitude)

# altitude (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.9+ (deprecated in 27.0) · tvOS 9.2+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The altitude above the ground, in meters.

> Use [centerCoordinateDistance](centercoordinatedistance.md) instead.

## Declaration

```swift
var altitude: CLLocationDistance { get set }
```

<a id="Discussion"></a>

## Discussion

The value you specify for this property can’t be less than `0`.

Changing this property may also change the maximum pitch for the map. If the current pitch value exceeds the new maximum, the class clamps the [pitch](pitch.md) property to the new maximum.

## See Also

### Configuring the viewing angle

- [centerCoordinate](centercoordinate.md): The map coordinate at the center of the map view.
- [heading](heading.md): The heading of the camera (in degrees) relative to true north.
- [centerCoordinateDistance](centercoordinatedistance.md): The distance from the center point of the map to the camera, in meters.
- [pitch](pitch.md): The viewing angle of the camera, in degrees.

# altitude (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.9+ (deprecated in 27.0) · tvOS 9.2+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The altitude above the ground, in meters.

> Use [centerCoordinateDistance](centercoordinatedistance.md) instead.

## Declaration

```objectivec
@property (nonatomic) CLLocationDistance altitude;
```

<a id="Discussion"></a>

## Discussion

The value you specify for this property can’t be less than `0`.

Changing this property may also change the maximum pitch for the map. If the current pitch value exceeds the new maximum, the class clamps the [pitch](pitch.md) property to the new maximum.

## See Also

### Configuring the viewing angle

- [centerCoordinate](centercoordinate.md): The map coordinate at the center of the map view.
- [heading](heading.md): The heading of the camera (in degrees) relative to true north.
- [centerCoordinateDistance](centercoordinatedistance.md): The distance from the center point of the map to the camera, in meters.
- [pitch](pitch.md): The viewing angle of the camera, in degrees.
