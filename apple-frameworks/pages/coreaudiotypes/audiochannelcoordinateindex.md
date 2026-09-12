> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudiotypes/audiochannelcoordinateindex](https://developer.apple.com/documentation/coreaudiotypes/audiochannelcoordinateindex)

# AudioChannelCoordinateIndex (Swift)

**Framework:** Core Audio Types  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Indexes the fields of the `mCoordinates` array in an [AudioChannelDescription](audiochanneldescription.md) structure.

## Declaration

```swift
enum AudioChannelCoordinateIndex
```

## Topics

### Coordinates

- [AudioChannelCoordinateIndex.coordinates_BackFront](audiochannelcoordinateindex/coordinates_backfront.md): For rectangular coordinates, negative is back and positive is front. The units are specified by the `mChannelFlags` field.
- [AudioChannelCoordinateIndex.coordinates_DownUp](audiochannelcoordinateindex/coordinates_downup.md): For rectangular coordinates, negative is below ground level, `0` is ground level, and positive is above ground level. The units are specified by the `mChannelFlags` field.
- [AudioChannelCoordinateIndex.coordinates_LeftRight](audiochannelcoordinateindex/coordinates_leftright.md): For rectangular coordinates, negative is left and positive is right. The units are specified by the `mChannelFlags` field of the `AudioChannelDescription` structure.
- [coordinates_Azimuth](audiochannelcoordinateindex/coordinates_azimuth.md): For spherical coordinates, `0` is front center, positive is right, negative is left, and measurements are in degrees.
- [coordinates_Distance](audiochannelcoordinateindex/coordinates_distance.md): For spherical coordinates, distance is radially from the center. The units are specified by the `mChannelFlags` field of the `AudioChannelDescription` structure.
- [coordinates_Elevation](audiochannelcoordinateindex/coordinates_elevation.md): For spherical coordinates, `+90` is zenith, `0` is horizontal, `-90` is nadir, and measurements are in degrees.

### Initializers

- [init(rawValue:)](audiochannelcoordinateindex/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Coordinates

- [coordinates_Azimuth](audiochannelcoordinateindex/coordinates_azimuth.md): For spherical coordinates, `0` is front center, positive is right, negative is left, and measurements are in degrees.
- [coordinates_Distance](audiochannelcoordinateindex/coordinates_distance.md): For spherical coordinates, distance is radially from the center. The units are specified by the `mChannelFlags` field of the `AudioChannelDescription` structure.
- [coordinates_Elevation](audiochannelcoordinateindex/coordinates_elevation.md): For spherical coordinates, `+90` is zenith, `0` is horizontal, `-90` is nadir, and measurements are in degrees.

# AudioChannelCoordinateIndex (Objective-C)

**Framework:** Core Audio Types  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Indexes the fields of the `mCoordinates` array in an [AudioChannelDescription](audiochanneldescription.md) structure.

## Declaration

```objectivec
enum AudioChannelCoordinateIndex : UInt32;
```

## Topics

### Coordinates

- [kAudioChannelCoordinates_BackFront](audiochannelcoordinateindex/coordinates_backfront.md): For rectangular coordinates, negative is back and positive is front. The units are specified by the `mChannelFlags` field.
- [kAudioChannelCoordinates_DownUp](audiochannelcoordinateindex/coordinates_downup.md): For rectangular coordinates, negative is below ground level, `0` is ground level, and positive is above ground level. The units are specified by the `mChannelFlags` field.
- [kAudioChannelCoordinates_LeftRight](audiochannelcoordinateindex/coordinates_leftright.md): For rectangular coordinates, negative is left and positive is right. The units are specified by the `mChannelFlags` field of the `AudioChannelDescription` structure.
- [kAudioChannelCoordinates_Azimuth](audiochannelcoordinateindex/coordinates_azimuth.md): For spherical coordinates, `0` is front center, positive is right, negative is left, and measurements are in degrees.
- [kAudioChannelCoordinates_Distance](audiochannelcoordinateindex/coordinates_distance.md): For spherical coordinates, distance is radially from the center. The units are specified by the `mChannelFlags` field of the `AudioChannelDescription` structure.
- [kAudioChannelCoordinates_Elevation](audiochannelcoordinateindex/coordinates_elevation.md): For spherical coordinates, `+90` is zenith, `0` is horizontal, `-90` is nadir, and measurements are in degrees.

## See Also

### Coordinates

- [kAudioChannelCoordinates_Azimuth](audiochannelcoordinateindex/coordinates_azimuth.md): For spherical coordinates, `0` is front center, positive is right, negative is left, and measurements are in degrees.
- [kAudioChannelCoordinates_Distance](audiochannelcoordinateindex/coordinates_distance.md): For spherical coordinates, distance is radially from the center. The units are specified by the `mChannelFlags` field of the `AudioChannelDescription` structure.
- [kAudioChannelCoordinates_Elevation](audiochannelcoordinateindex/coordinates_elevation.md): For spherical coordinates, `+90` is zenith, `0` is horizontal, `-90` is nadir, and measurements are in degrees.
