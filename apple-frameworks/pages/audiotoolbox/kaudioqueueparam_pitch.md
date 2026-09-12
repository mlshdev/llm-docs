> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/kaudioqueueparam_pitch](https://developer.apple.com/documentation/audiotoolbox/kaudioqueueparam_pitch)

# kAudioQueueParam_Pitch (Swift)

**Framework:** Audio Toolbox  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The number of cents to pitch-shift the audio queue’s playback, in the range `-2400` through `2400` cents (where 1200 cents corresponds to one musical octave.)

## Declaration

```swift
var kAudioQueueParam_Pitch: AudioQueueParameterID { get }
```

<a id="Discussion"></a>

## Discussion

This parameter is usable only if the time/pitch processor is enabled.

## See Also

### Constants

- [kAudioQueueParam_Volume](kaudioqueueparam_volume.md): The playback volume for the audio queue, ranging from `0.0` through `1.0` on a linear scale. A value of `0.0` indicates silence; a value of `1.0` (the default) indicates full volume for the audio queue instance.
- [kAudioQueueParam_PlayRate](kaudioqueueparam_playrate.md): The playback rate for the audio queue, in the range `0.5` through `2.0`. A value of `1.0` (the default) specifies that the audio queue should play at its normal rate.
- [kAudioQueueParam_VolumeRampTime](kaudioqueueparam_volumeramptime.md): The number of seconds over which a volume change is ramped.
- [kAudioQueueParam_Pan](kaudioqueueparam_pan.md): The stereo panning position of a source. For a monophonic source, panning is determined as follows:

# kAudioQueueParam_Pitch (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The number of cents to pitch-shift the audio queue’s playback, in the range `-2400` through `2400` cents (where 1200 cents corresponds to one musical octave.)

## Declaration

```objectivec
kAudioQueueParam_Pitch
```

<a id="Discussion"></a>

## Discussion

This parameter is usable only if the time/pitch processor is enabled.

## See Also

### Constants

- [kAudioQueueParam_Volume](kaudioqueueparam_volume.md): The playback volume for the audio queue, ranging from `0.0` through `1.0` on a linear scale. A value of `0.0` indicates silence; a value of `1.0` (the default) indicates full volume for the audio queue instance.
- [kAudioQueueParam_PlayRate](kaudioqueueparam_playrate.md): The playback rate for the audio queue, in the range `0.5` through `2.0`. A value of `1.0` (the default) specifies that the audio queue should play at its normal rate.
- [kAudioQueueParam_VolumeRampTime](kaudioqueueparam_volumeramptime.md): The number of seconds over which a volume change is ramped.
- [kAudioQueueParam_Pan](kaudioqueueparam_pan.md): The stereo panning position of a source. For a monophonic source, panning is determined as follows:
