> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudiotypes/audiochannelflags/rectangularcoordinates](https://developer.apple.com/documentation/coreaudiotypes/audiochannelflags/rectangularcoordinates)

# rectangularCoordinates (Swift)

**Framework:** Core Audio Types  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

A flag that indicates the channel uses the speaker position’s cartesian coordinates.

## Declaration

```swift
static var rectangularCoordinates: AudioChannelFlags { get }
```

<a id="Discussion"></a>

## Discussion

This flag is mutually exclusive with [sphericalCoordinates](sphericalcoordinates.md).

## See Also

### Flags

- [meters](meters.md): A flag that indicates that unit values are in meters.
- [sphericalCoordinates](sphericalcoordinates.md): A flag that indicates the channel uses the speaker position’s spherical coordinates.

# kAudioChannelFlags_RectangularCoordinates (Objective-C)

**Framework:** Core Audio Types  
**Kind:** Enumeration Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A flag that indicates the channel uses the speaker position’s cartesian coordinates.

## Declaration

```objectivec
kAudioChannelFlags_RectangularCoordinates
```

<a id="Discussion"></a>

## Discussion

This flag is mutually exclusive with [kAudioChannelFlags_SphericalCoordinates](sphericalcoordinates.md).

## See Also

### Flags

- [kAudioChannelFlags_AllOff](kaudiochannelflags_alloff.md): All flags are clear.
- [kAudioChannelFlags_Meters](meters.md): A flag that indicates that unit values are in meters.
- [kAudioChannelFlags_SphericalCoordinates](sphericalcoordinates.md): A flag that indicates the channel uses the speaker position’s spherical coordinates.
