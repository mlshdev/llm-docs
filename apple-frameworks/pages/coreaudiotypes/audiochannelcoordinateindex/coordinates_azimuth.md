> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudiotypes/audiochannelcoordinateindex/coordinates_azimuth](https://developer.apple.com/documentation/coreaudiotypes/audiochannelcoordinateindex/coordinates_azimuth)

# coordinates_Azimuth (Swift)

**Framework:** Core Audio Types  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

For spherical coordinates, `0` is front center, positive is right, negative is left, and measurements are in degrees.

## Declaration

```swift
static var coordinates_Azimuth: AudioChannelCoordinateIndex { get }
```

## See Also

### Coordinates

- [AudioChannelCoordinateIndex](../audiochannelcoordinateindex.md): Indexes the fields of the `mCoordinates` array in an [AudioChannelDescription](../audiochanneldescription.md) structure.
- [coordinates_Distance](coordinates_distance.md): For spherical coordinates, distance is radially from the center. The units are specified by the `mChannelFlags` field of the `AudioChannelDescription` structure.
- [coordinates_Elevation](coordinates_elevation.md): For spherical coordinates, `+90` is zenith, `0` is horizontal, `-90` is nadir, and measurements are in degrees.

# kAudioChannelCoordinates_Azimuth (Objective-C)

**Framework:** Core Audio Types  
**Kind:** Enumeration Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

For spherical coordinates, `0` is front center, positive is right, negative is left, and measurements are in degrees.

## Declaration

```objectivec
kAudioChannelCoordinates_Azimuth
```

## See Also

### Coordinates

- [AudioChannelCoordinateIndex](../audiochannelcoordinateindex.md): Indexes the fields of the `mCoordinates` array in an [AudioChannelDescription](../audiochanneldescription.md) structure.
- [kAudioChannelCoordinates_Distance](coordinates_distance.md): For spherical coordinates, distance is radially from the center. The units are specified by the `mChannelFlags` field of the `AudioChannelDescription` structure.
- [kAudioChannelCoordinates_Elevation](coordinates_elevation.md): For spherical coordinates, `+90` is zenith, `0` is horizontal, `-90` is nadir, and measurements are in degrees.
