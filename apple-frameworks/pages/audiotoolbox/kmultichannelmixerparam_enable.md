> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/kmultichannelmixerparam_enable](https://developer.apple.com/documentation/audiotoolbox/kmultichannelmixerparam_enable)

# kMultiChannelMixerParam_Enable (Swift)

**Framework:** Audio Toolbox  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Enables a channel.

## Declaration

```swift
var kMultiChannelMixerParam_Enable: AudioUnitParameterID { get }
```

<a id="Discussion"></a>

## Discussion

Global scope. The value is a boolean: use `0` to disable the channel or `1` to enable the channel. The default value is `1`.

## See Also

### Constants

- [kMultiChannelMixerParam_Pan](kmultichannelmixerparam_pan.md): The panning value for the mixer.
- [kMultiChannelMixerParam_PostAveragePower](kmultichannelmixerparam_postaveragepower.md): The average power level of the channel, after the mixer, in decibels.
- [kMultiChannelMixerParam_PostPeakHoldLevel](kmultichannelmixerparam_postpeakholdlevel.md): The peak hold level of the channel, after the mixer, in decibels.
- [kMultiChannelMixerParam_PreAveragePower](kmultichannelmixerparam_preaveragepower.md): The average power level of the channel, prior to the mixer, in decibels.
- [kMultiChannelMixerParam_PrePeakHoldLevel](kmultichannelmixerparam_prepeakholdlevel.md): The peak hold level of the channel, prior to the mixer, in decibels.
- [kMultiChannelMixerParam_Volume](kmultichannelmixerparam_volume.md): The linear gain of the channel.

# kMultiChannelMixerParam_Enable (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Enables a channel.

## Declaration

```objectivec
kMultiChannelMixerParam_Enable
```

<a id="Discussion"></a>

## Discussion

Global scope. The value is a boolean: use `0` to disable the channel or `1` to enable the channel. The default value is `1`.

## See Also

### Constants

- [kMultiChannelMixerParam_Pan](kmultichannelmixerparam_pan.md): The panning value for the mixer.
- [kMultiChannelMixerParam_PostAveragePower](kmultichannelmixerparam_postaveragepower.md): The average power level of the channel, after the mixer, in decibels.
- [kMultiChannelMixerParam_PostPeakHoldLevel](kmultichannelmixerparam_postpeakholdlevel.md): The peak hold level of the channel, after the mixer, in decibels.
- [kMultiChannelMixerParam_PreAveragePower](kmultichannelmixerparam_preaveragepower.md): The average power level of the channel, prior to the mixer, in decibels.
- [kMultiChannelMixerParam_PrePeakHoldLevel](kmultichannelmixerparam_prepeakholdlevel.md): The peak hold level of the channel, prior to the mixer, in decibels.
- [kMultiChannelMixerParam_Volume](kmultichannelmixerparam_volume.md): The linear gain of the channel.
