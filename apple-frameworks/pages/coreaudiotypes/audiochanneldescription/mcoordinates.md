> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudiotypes/audiochanneldescription/mcoordinates](https://developer.apple.com/documentation/coreaudiotypes/audiochanneldescription/mcoordinates)

# mCoordinates (Swift)

**Framework:** Core Audio Types  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

The coordinates that specify a precise speaker location.

## Declaration

```swift
var mCoordinates: (Float32, Float32, Float32)
```

<a id="Discussion"></a>

## Discussion

See [AudioChannelCoordinateIndex](../audiochannelcoordinateindex.md) for the interpretation of the items in the array.

## See Also

### Accessing the Data

- [mChannelFlags](mchannelflags.md): The audio channel flags that indicate how to interpret the channel coordinates.
- [mChannelLabel](mchannellabel.md): A label that describes the audio channel.
- [AudioChannelLabel](../audiochannellabel.md): Identifies how an audio data channel is to be used.
- [Audio Channel Coordinates](../audio-channel-coordinates.md): Used in the `mChannelFlags` field of an [AudioChannelDescription](../audiochanneldescription.md) structure.
- [AudioChannelFlags](../audiochannelflags.md): Constants that define the audio channel flags of an audio channel description.
- [Audio Channel Labels](../audio-channel-labels.md): Channel labels for use in the `mChannelLabel` field of an [AudioChannelDescription](../audiochanneldescription.md) structure.

# mCoordinates (Objective-C)

**Framework:** Core Audio Types  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The coordinates that specify a precise speaker location.

## Declaration

```objectivec
Float32 mCoordinates[3];
```

<a id="Discussion"></a>

## Discussion

See [AudioChannelCoordinateIndex](../audiochannelcoordinateindex.md) for the interpretation of the items in the array.

## See Also

### Accessing the Data

- [mChannelFlags](mchannelflags.md): The audio channel flags that indicate how to interpret the channel coordinates.
- [mChannelLabel](mchannellabel.md): A label that describes the audio channel.
- [AudioChannelLabel](../audiochannellabel.md): Identifies how an audio data channel is to be used.
- [Audio Channel Coordinates](../audio-channel-coordinates.md): Used in the `mChannelFlags` field of an [AudioChannelDescription](../audiochanneldescription.md) structure.
- [AudioChannelFlags](../audiochannelflags.md): Constants that define the audio channel flags of an audio channel description.
