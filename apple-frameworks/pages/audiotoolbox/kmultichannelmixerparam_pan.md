> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/kmultichannelmixerparam_pan](https://developer.apple.com/documentation/audiotoolbox/kmultichannelmixerparam_pan)

# kMultiChannelMixerParam_Pan (Swift)

**Framework:** Audio Toolbox  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The panning value for the mixer.

## Declaration

```swift
var kMultiChannelMixerParam_Pan: AudioUnitParameterID { get }
```

<a id="Discussion"></a>

## Discussion

Global scope. The value should be a number between `-1.0` and `1.0`, where `-1.0` represents far left and `1.0` represents far right. The default value is `0`. Setting [kAudioUnitProperty_MatrixLevels](kaudiounitproperty_matrixlevels.md) overrides any value set for `kMultiChannelMixerParam_Pan` and vice versa.

## See Also

### Constants

- [kMultiChannelMixerParam_Enable](kmultichannelmixerparam_enable.md): Enables a channel.
- [kMultiChannelMixerParam_PostAveragePower](kmultichannelmixerparam_postaveragepower.md): The average power level of the channel, after the mixer, in decibels.
- [kMultiChannelMixerParam_PostPeakHoldLevel](kmultichannelmixerparam_postpeakholdlevel.md): The peak hold level of the channel, after the mixer, in decibels.
- [kMultiChannelMixerParam_PreAveragePower](kmultichannelmixerparam_preaveragepower.md): The average power level of the channel, prior to the mixer, in decibels.
- [kMultiChannelMixerParam_PrePeakHoldLevel](kmultichannelmixerparam_prepeakholdlevel.md): The peak hold level of the channel, prior to the mixer, in decibels.
- [kMultiChannelMixerParam_Volume](kmultichannelmixerparam_volume.md): The linear gain of the channel.

# kMultiChannelMixerParam_Pan (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The panning value for the mixer.

## Declaration

```objectivec
kMultiChannelMixerParam_Pan
```

<a id="Discussion"></a>

## Discussion

Global scope. The value should be a number between `-1.0` and `1.0`, where `-1.0` represents far left and `1.0` represents far right. The default value is `0`. Setting [kAudioUnitProperty_MatrixLevels](kaudiounitproperty_matrixlevels.md) overrides any value set for `kMultiChannelMixerParam_Pan` and vice versa.

## See Also

### Constants

- [kMultiChannelMixerParam_Enable](kmultichannelmixerparam_enable.md): Enables a channel.
- [kMultiChannelMixerParam_PostAveragePower](kmultichannelmixerparam_postaveragepower.md): The average power level of the channel, after the mixer, in decibels.
- [kMultiChannelMixerParam_PostPeakHoldLevel](kmultichannelmixerparam_postpeakholdlevel.md): The peak hold level of the channel, after the mixer, in decibels.
- [kMultiChannelMixerParam_PreAveragePower](kmultichannelmixerparam_preaveragepower.md): The average power level of the channel, prior to the mixer, in decibels.
- [kMultiChannelMixerParam_PrePeakHoldLevel](kmultichannelmixerparam_prepeakholdlevel.md): The peak hold level of the channel, prior to the mixer, in decibels.
- [kMultiChannelMixerParam_Volume](kmultichannelmixerparam_volume.md): The linear gain of the channel.
