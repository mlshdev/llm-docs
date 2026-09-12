> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudiotypes/audiochanneldescription](https://developer.apple.com/documentation/coreaudiotypes/audiochanneldescription)

# AudioChannelDescription (Swift)

**Framework:** Core Audio Types  
**Kind:** Structure  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

A structure that describes a channel of audio data.

## Declaration

```swift
struct AudioChannelDescription
```

## Topics

### Creating a Channel Description

- [init()](audiochanneldescription/init%28%29.md): Creates an empty channel description.
- [init(mChannelLabel:mChannelFlags:mCoordinates:)](audiochanneldescription/init%28mchannellabel_mchannelflags_mcoordinates_%29.md): Creates a channel description with a label, flags, and coordinates.

### Accessing the Data

- [mChannelFlags](audiochanneldescription/mchannelflags.md): The audio channel flags that indicate how to interpret the channel coordinates.
- [mChannelLabel](audiochanneldescription/mchannellabel.md): A label that describes the audio channel.
- [mCoordinates](audiochanneldescription/mcoordinates.md): The coordinates that specify a precise speaker location.
- [AudioChannelLabel](audiochannellabel.md): Identifies how an audio data channel is to be used.
- [Audio Channel Coordinates](audio-channel-coordinates.md): Used in the `mChannelFlags` field of an [AudioChannelDescription](audiochanneldescription.md) structure.
- [AudioChannelFlags](audiochannelflags.md): Constants that define the audio channel flags of an audio channel description.
- [Audio Channel Labels](audio-channel-labels.md): Channel labels for use in the `mChannelLabel` field of an [AudioChannelDescription](audiochanneldescription.md) structure.

### Operators

- [==(\_:\_:)](audiochanneldescription/==%28____%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Channels

- [AudioChannelLayout](audiochannellayout.md): A structure that specifies a channel layout in a file or in hardware.

# AudioChannelDescription (Objective-C)

**Framework:** Core Audio Types  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A structure that describes a channel of audio data.

## Declaration

```objectivec
struct AudioChannelDescription;
```

## Topics

### Accessing the Data

- [mChannelFlags](audiochanneldescription/mchannelflags.md): The audio channel flags that indicate how to interpret the channel coordinates.
- [mChannelLabel](audiochanneldescription/mchannellabel.md): A label that describes the audio channel.
- [mCoordinates](audiochanneldescription/mcoordinates.md): The coordinates that specify a precise speaker location.
- [AudioChannelLabel](audiochannellabel.md): Identifies how an audio data channel is to be used.
- [Audio Channel Coordinates](audio-channel-coordinates.md): Used in the `mChannelFlags` field of an [AudioChannelDescription](audiochanneldescription.md) structure.
- [AudioChannelFlags](audiochannelflags.md): Constants that define the audio channel flags of an audio channel description.

## See Also

### Channels

- [AudioChannelLayout](audiochannellayout.md): A structure that specifies a channel layout in a file or in hardware.
