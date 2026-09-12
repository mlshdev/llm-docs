> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/kmultichannelmixerparam_preaveragepower](https://developer.apple.com/documentation/audiotoolbox/kmultichannelmixerparam_preaveragepower)

# kMultiChannelMixerParam_PreAveragePower (Swift)

**Framework:** Audio Toolbox  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The average power level of the channel, prior to the mixer, in decibels.

## Declaration

```swift
var kMultiChannelMixerParam_PreAveragePower: AudioUnitParameterID { get }
```

<a id="Discussion"></a>

## Discussion

Input and output scope. This is a read-only property. Use the value of this constant to read the left channel and its value+1 to read the right channel.

## See Also

### Constants

- [kMultiChannelMixerParam_Enable](kmultichannelmixerparam_enable.md): Enables a channel.
- [kMultiChannelMixerParam_Pan](kmultichannelmixerparam_pan.md): The panning value for the mixer.
- [kMultiChannelMixerParam_PostAveragePower](kmultichannelmixerparam_postaveragepower.md): The average power level of the channel, after the mixer, in decibels.
- [kMultiChannelMixerParam_PostPeakHoldLevel](kmultichannelmixerparam_postpeakholdlevel.md): The peak hold level of the channel, after the mixer, in decibels.
- [kMultiChannelMixerParam_PrePeakHoldLevel](kmultichannelmixerparam_prepeakholdlevel.md): The peak hold level of the channel, prior to the mixer, in decibels.
- [kMultiChannelMixerParam_Volume](kmultichannelmixerparam_volume.md): The linear gain of the channel.

# kMultiChannelMixerParam_PreAveragePower (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The average power level of the channel, prior to the mixer, in decibels.

## Declaration

```objectivec
kMultiChannelMixerParam_PreAveragePower
```

<a id="Discussion"></a>

## Discussion

Input and output scope. This is a read-only property. Use the value of this constant to read the left channel and its value+1 to read the right channel.

## See Also

### Constants

- [kMultiChannelMixerParam_Enable](kmultichannelmixerparam_enable.md): Enables a channel.
- [kMultiChannelMixerParam_Pan](kmultichannelmixerparam_pan.md): The panning value for the mixer.
- [kMultiChannelMixerParam_PostAveragePower](kmultichannelmixerparam_postaveragepower.md): The average power level of the channel, after the mixer, in decibels.
- [kMultiChannelMixerParam_PostPeakHoldLevel](kmultichannelmixerparam_postpeakholdlevel.md): The peak hold level of the channel, after the mixer, in decibels.
- [kMultiChannelMixerParam_PrePeakHoldLevel](kmultichannelmixerparam_prepeakholdlevel.md): The peak hold level of the channel, prior to the mixer, in decibels.
- [kMultiChannelMixerParam_Volume](kmultichannelmixerparam_volume.md): The linear gain of the channel.
