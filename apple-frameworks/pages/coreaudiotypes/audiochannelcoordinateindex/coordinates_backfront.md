> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudiotypes/audiochannelcoordinateindex/coordinates_backfront](https://developer.apple.com/documentation/coreaudiotypes/audiochannelcoordinateindex/coordinates_backfront)

# AudioChannelCoordinateIndex.coordinates_BackFront (Swift)

**Framework:** Core Audio Types  
**Kind:** Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

For rectangular coordinates, negative is back and positive is front. The units are specified by the `mChannelFlags` field.

## Declaration

```swift
case coordinates_BackFront
```

## See Also

### Coordinates

- [AudioChannelCoordinateIndex.coordinates_DownUp](coordinates_downup.md): For rectangular coordinates, negative is below ground level, `0` is ground level, and positive is above ground level. The units are specified by the `mChannelFlags` field.
- [AudioChannelCoordinateIndex.coordinates_LeftRight](coordinates_leftright.md): For rectangular coordinates, negative is left and positive is right. The units are specified by the `mChannelFlags` field of the `AudioChannelDescription` structure.
- [coordinates_Azimuth](coordinates_azimuth.md): For spherical coordinates, `0` is front center, positive is right, negative is left, and measurements are in degrees.
- [coordinates_Distance](coordinates_distance.md): For spherical coordinates, distance is radially from the center. The units are specified by the `mChannelFlags` field of the `AudioChannelDescription` structure.
- [coordinates_Elevation](coordinates_elevation.md): For spherical coordinates, `+90` is zenith, `0` is horizontal, `-90` is nadir, and measurements are in degrees.

# kAudioChannelCoordinates_BackFront (Objective-C)

**Framework:** Core Audio Types  
**Kind:** Enumeration Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

For rectangular coordinates, negative is back and positive is front. The units are specified by the `mChannelFlags` field.

## Declaration

```objectivec
kAudioChannelCoordinates_BackFront
```

## See Also

### Coordinates

- [kAudioChannelCoordinates_DownUp](coordinates_downup.md): For rectangular coordinates, negative is below ground level, `0` is ground level, and positive is above ground level. The units are specified by the `mChannelFlags` field.
- [kAudioChannelCoordinates_LeftRight](coordinates_leftright.md): For rectangular coordinates, negative is left and positive is right. The units are specified by the `mChannelFlags` field of the `AudioChannelDescription` structure.
- [kAudioChannelCoordinates_Azimuth](coordinates_azimuth.md): For spherical coordinates, `0` is front center, positive is right, negative is left, and measurements are in degrees.
- [kAudioChannelCoordinates_Distance](coordinates_distance.md): For spherical coordinates, distance is radially from the center. The units are specified by the `mChannelFlags` field of the `AudioChannelDescription` structure.
- [kAudioChannelCoordinates_Elevation](coordinates_elevation.md): For spherical coordinates, `+90` is zenith, `0` is horizontal, `-90` is nadir, and measurements are in degrees.
