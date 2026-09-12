> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudiotypes/audiochannellabel](https://developer.apple.com/documentation/coreaudiotypes/audiochannellabel)

# AudioChannelLabel (Swift)

**Framework:** Core Audio Types  
**Kind:** Type Alias  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Identifies how an audio data channel is to be used.

## Declaration

```swift
typealias AudioChannelLabel = UInt32
```

<a id="Discussion"></a>

## Discussion

This data type is used for the `mChannelLabel` field of the [AudioChannelDescription](audiochanneldescription.md) structure. See [Audio Channel Labels](audio-channel-labels.md) for possible values.

## See Also

### Accessing the Data

- [mChannelFlags](audiochanneldescription/mchannelflags.md): The audio channel flags that indicate how to interpret the channel coordinates.
- [mChannelLabel](audiochanneldescription/mchannellabel.md): A label that describes the audio channel.
- [mCoordinates](audiochanneldescription/mcoordinates.md): The coordinates that specify a precise speaker location.
- [Audio Channel Coordinates](audio-channel-coordinates.md): Used in the `mChannelFlags` field of an [AudioChannelDescription](audiochanneldescription.md) structure.
- [AudioChannelFlags](audiochannelflags.md): Constants that define the audio channel flags of an audio channel description.
- [Audio Channel Labels](audio-channel-labels.md): Channel labels for use in the `mChannelLabel` field of an [AudioChannelDescription](audiochanneldescription.md) structure.

# AudioChannelLabel (Objective-C)

**Framework:** Core Audio Types  
**Kind:** Type Alias  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Identifies how an audio data channel is to be used.

## Declaration

```objectivec
typedef UInt32 AudioChannelLabel;
```

<a id="Discussion"></a>

## Discussion

This data type is used for the `mChannelLabel` field of the [AudioChannelDescription](audiochanneldescription.md) structure. See [Audio Channel Labels](audio-channel-labels.md) for possible values.

## See Also

### Accessing the Data

- [mChannelFlags](audiochanneldescription/mchannelflags.md): The audio channel flags that indicate how to interpret the channel coordinates.
- [mChannelLabel](audiochanneldescription/mchannellabel.md): A label that describes the audio channel.
- [mCoordinates](audiochanneldescription/mcoordinates.md): The coordinates that specify a precise speaker location.
- [Audio Channel Coordinates](audio-channel-coordinates.md): Used in the `mChannelFlags` field of an [AudioChannelDescription](audiochanneldescription.md) structure.
- [AudioChannelFlags](audiochannelflags.md): Constants that define the audio channel flags of an audio channel description.
