> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiopanninginfo](https://developer.apple.com/documentation/audiotoolbox/audiopanninginfo)

# AudioPanningInfo (Swift)

**Framework:** Audio Toolbox  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Audio panning information.

## Declaration

```swift
struct AudioPanningInfo
```

## Topics

### Initializers

- [init(mPanningMode:mCoordinateFlags:mCoordinates:mGainScale:mOutputChannelMap:)](audiopanninginfo/init%28mpanningmode_mcoordinateflags_mcoordinates_mgainscale_moutputchannelmap_%29.md)

### Instance Properties

- [mCoordinateFlags](audiopanninginfo/mcoordinateflags.md): For the available coordinate flags, see Channel Coordinate Flags.
- [mCoordinates](audiopanninginfo/mcoordinates.md): For the available coordinate index constants, see Channel Coordinate Index Constants.
- [mGainScale](audiopanninginfo/mgainscale.md): A multiplier for audio panning values, typically representing a volume value in the range from 0 to 1. A value of 1 results in audio panning at unity gain. A value of 0 silences all channels.
- [mOutputChannelMap](audiopanninginfo/moutputchannelmap.md): The channel map used to determine channel volumes for the audio panning.
- [mPanningMode](audiopanninginfo/mpanningmode.md): The mode to use for panning.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### Data Types

- [AudioBalanceFade](audiobalancefade.md): Describes audio left/right balance and front/back fade values.
- [AudioFormatInfo](audioformatinfo.md): A structure that specifies an audio format.
- [AudioFormatListItem](../coreaudiotypes/audioformatlistitem.md)
- [ExtendedAudioFormatInfo](extendedaudioformatinfo.md): A specifier for the [kAudioFormatProperty_FormatList](kaudioformatproperty_formatlist.md) property, including the codec to use.
- [AudioFormatPropertyID](audioformatpropertyid.md): A type for four-char codes for audio format property identifiers.

# AudioPanningInfo (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Audio panning information.

## Declaration

```objectivec
struct AudioPanningInfo;
```

## Topics

### Instance Properties

- [mCoordinateFlags](audiopanninginfo/mcoordinateflags.md): For the available coordinate flags, see Channel Coordinate Flags.
- [mCoordinates](audiopanninginfo/mcoordinates.md): For the available coordinate index constants, see Channel Coordinate Index Constants.
- [mGainScale](audiopanninginfo/mgainscale.md): A multiplier for audio panning values, typically representing a volume value in the range from 0 to 1. A value of 1 results in audio panning at unity gain. A value of 0 silences all channels.
- [mOutputChannelMap](audiopanninginfo/moutputchannelmap.md): The channel map used to determine channel volumes for the audio panning.
- [mPanningMode](audiopanninginfo/mpanningmode.md): The mode to use for panning.

## See Also

### Data Types

- [AudioBalanceFade](audiobalancefade.md): Describes audio left/right balance and front/back fade values.
- [AudioFormatInfo](audioformatinfo.md): A structure that specifies an audio format.
- [AudioFormatListItem](../coreaudiotypes/audioformatlistitem.md)
- [ExtendedAudioFormatInfo](extendedaudioformatinfo.md): A specifier for the [kAudioFormatProperty_FormatList](kaudioformatproperty_formatlist.md) property, including the codec to use.
- [AudioFormatPropertyID](audioformatpropertyid.md): A type for four-char codes for audio format property identifiers.
