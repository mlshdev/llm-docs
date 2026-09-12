> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudiotypes/audiochannelflags/sphericalcoordinates](https://developer.apple.com/documentation/coreaudiotypes/audiochannelflags/sphericalcoordinates)

# sphericalCoordinates (Swift)

**Framework:** Core Audio Types  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

A flag that indicates the channel uses the speaker position’s spherical coordinates.

## Declaration

```swift
static var sphericalCoordinates: AudioChannelFlags { get }
```

<a id="Discussion"></a>

## Discussion

This flag is mutually exclusive with [rectangularCoordinates](rectangularcoordinates.md).

## See Also

### Flags

- [meters](meters.md): A flag that indicates that unit values are in meters.
- [rectangularCoordinates](rectangularcoordinates.md): A flag that indicates the channel uses the speaker position’s cartesian coordinates.

# kAudioChannelFlags_SphericalCoordinates (Objective-C)

**Framework:** Core Audio Types  
**Kind:** Enumeration Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A flag that indicates the channel uses the speaker position’s spherical coordinates.

## Declaration

```objectivec
kAudioChannelFlags_SphericalCoordinates
```

<a id="Discussion"></a>

## Discussion

This flag is mutually exclusive with [kAudioChannelFlags_RectangularCoordinates](rectangularcoordinates.md).

## See Also

### Flags

- [kAudioChannelFlags_AllOff](kaudiochannelflags_alloff.md): All flags are clear.
- [kAudioChannelFlags_Meters](meters.md): A flag that indicates that unit values are in meters.
- [kAudioChannelFlags_RectangularCoordinates](rectangularcoordinates.md): A flag that indicates the channel uses the speaker position’s cartesian coordinates.
