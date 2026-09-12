> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudiotypes/audiochanneldescription/mchannelflags](https://developer.apple.com/documentation/coreaudiotypes/audiochanneldescription/mchannelflags)

# mChannelFlags (Swift)

**Framework:** Core Audio Types  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

The audio channel flags that indicate how to interpret the channel coordinates.

## Declaration

```swift
var mChannelFlags: AudioChannelFlags
```

<a id="Discussion"></a>

## Discussion

See [Audio Channel Coordinates](../audio-channel-coordinates.md) for possible values.

## See Also

### Accessing the Data

- [mChannelLabel](mchannellabel.md): A label that describes the audio channel.
- [mCoordinates](mcoordinates.md): The coordinates that specify a precise speaker location.
- [AudioChannelLabel](../audiochannellabel.md): Identifies how an audio data channel is to be used.
- [Audio Channel Coordinates](../audio-channel-coordinates.md): Used in the `mChannelFlags` field of an [AudioChannelDescription](../audiochanneldescription.md) structure.
- [AudioChannelFlags](../audiochannelflags.md): Constants that define the audio channel flags of an audio channel description.
- [Audio Channel Labels](../audio-channel-labels.md): Channel labels for use in the `mChannelLabel` field of an [AudioChannelDescription](../audiochanneldescription.md) structure.

# mChannelFlags (Objective-C)

**Framework:** Core Audio Types  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The audio channel flags that indicate how to interpret the channel coordinates.

## Declaration

```objectivec
AudioChannelFlags mChannelFlags;
```

<a id="Discussion"></a>

## Discussion

See [Audio Channel Coordinates](../audio-channel-coordinates.md) for possible values.

## See Also

### Accessing the Data

- [mChannelLabel](mchannellabel.md): A label that describes the audio channel.
- [mCoordinates](mcoordinates.md): The coordinates that specify a precise speaker location.
- [AudioChannelLabel](../audiochannellabel.md): Identifies how an audio data channel is to be used.
- [Audio Channel Coordinates](../audio-channel-coordinates.md): Used in the `mChannelFlags` field of an [AudioChannelDescription](../audiochanneldescription.md) structure.
- [AudioChannelFlags](../audiochannelflags.md): Constants that define the audio channel flags of an audio channel description.
