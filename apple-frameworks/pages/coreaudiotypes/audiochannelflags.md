> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudiotypes/audiochannelflags](https://developer.apple.com/documentation/coreaudiotypes/audiochannelflags)

# AudioChannelFlags (Swift)

**Framework:** Core Audio Types  
**Kind:** Structure  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Constants that define the audio channel flags of an audio channel description.

## Declaration

```swift
struct AudioChannelFlags
```

## Topics

### Flags

- [meters](audiochannelflags/meters.md): A flag that indicates that unit values are in meters.
- [rectangularCoordinates](audiochannelflags/rectangularcoordinates.md): A flag that indicates the channel uses the speaker position’s cartesian coordinates.
- [sphericalCoordinates](audiochannelflags/sphericalcoordinates.md): A flag that indicates the channel uses the speaker position’s spherical coordinates.

### Initializers

- [init(rawValue:)](audiochannelflags/init%28rawvalue_%29.md): Creates a audio channel flags structure with a unsigned integer value.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Accessing the Data

- [mChannelFlags](audiochanneldescription/mchannelflags.md): The audio channel flags that indicate how to interpret the channel coordinates.
- [mChannelLabel](audiochanneldescription/mchannellabel.md): A label that describes the audio channel.
- [mCoordinates](audiochanneldescription/mcoordinates.md): The coordinates that specify a precise speaker location.
- [AudioChannelLabel](audiochannellabel.md): Identifies how an audio data channel is to be used.
- [Audio Channel Coordinates](audio-channel-coordinates.md): Used in the `mChannelFlags` field of an [AudioChannelDescription](audiochanneldescription.md) structure.
- [Audio Channel Labels](audio-channel-labels.md): Channel labels for use in the `mChannelLabel` field of an [AudioChannelDescription](audiochanneldescription.md) structure.

# AudioChannelFlags (Objective-C)

**Framework:** Core Audio Types  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Constants that define the audio channel flags of an audio channel description.

## Declaration

```objectivec
enum AudioChannelFlags : UInt32;
```

## Topics

### Flags

- [kAudioChannelFlags_AllOff](audiochannelflags/kaudiochannelflags_alloff.md): All flags are clear.
- [kAudioChannelFlags_Meters](audiochannelflags/meters.md): A flag that indicates that unit values are in meters.
- [kAudioChannelFlags_RectangularCoordinates](audiochannelflags/rectangularcoordinates.md): A flag that indicates the channel uses the speaker position’s cartesian coordinates.
- [kAudioChannelFlags_SphericalCoordinates](audiochannelflags/sphericalcoordinates.md): A flag that indicates the channel uses the speaker position’s spherical coordinates.

## See Also

### Accessing the Data

- [mChannelFlags](audiochanneldescription/mchannelflags.md): The audio channel flags that indicate how to interpret the channel coordinates.
- [mChannelLabel](audiochanneldescription/mchannellabel.md): A label that describes the audio channel.
- [mCoordinates](audiochanneldescription/mcoordinates.md): The coordinates that specify a precise speaker location.
- [AudioChannelLabel](audiochannellabel.md): Identifies how an audio data channel is to be used.
- [Audio Channel Coordinates](audio-channel-coordinates.md): Used in the `mChannelFlags` field of an [AudioChannelDescription](audiochanneldescription.md) structure.
