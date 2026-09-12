> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/kaudioqueueparam_pan](https://developer.apple.com/documentation/audiotoolbox/kaudioqueueparam_pan)

# kAudioQueueParam_Pan (Swift)

**Framework:** Audio Toolbox  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The stereo panning position of a source. For a monophonic source, panning is determined as follows:

## Declaration

```swift
var kAudioQueueParam_Pan: AudioQueueParameterID { get }
```

<a id="Discussion"></a>

## Discussion

- –1 = hard left
-   0 = center
- +1 = hard right

For a stereophonic source, this parameter affects the left/right balance. For a multichannel source, this parameter has no effect.

## See Also

### Constants

- [kAudioQueueParam_Volume](kaudioqueueparam_volume.md): The playback volume for the audio queue, ranging from `0.0` through `1.0` on a linear scale. A value of `0.0` indicates silence; a value of `1.0` (the default) indicates full volume for the audio queue instance.
- [kAudioQueueParam_PlayRate](kaudioqueueparam_playrate.md): The playback rate for the audio queue, in the range `0.5` through `2.0`. A value of `1.0` (the default) specifies that the audio queue should play at its normal rate.
- [kAudioQueueParam_Pitch](kaudioqueueparam_pitch.md): The number of cents to pitch-shift the audio queue’s playback, in the range `-2400` through `2400` cents (where 1200 cents corresponds to one musical octave.)
- [kAudioQueueParam_VolumeRampTime](kaudioqueueparam_volumeramptime.md): The number of seconds over which a volume change is ramped.

# kAudioQueueParam_Pan (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The stereo panning position of a source. For a monophonic source, panning is determined as follows:

## Declaration

```objectivec
kAudioQueueParam_Pan
```

<a id="Discussion"></a>

## Discussion

- –1 = hard left
-   0 = center
- +1 = hard right

For a stereophonic source, this parameter affects the left/right balance. For a multichannel source, this parameter has no effect.

## See Also

### Constants

- [kAudioQueueParam_Volume](kaudioqueueparam_volume.md): The playback volume for the audio queue, ranging from `0.0` through `1.0` on a linear scale. A value of `0.0` indicates silence; a value of `1.0` (the default) indicates full volume for the audio queue instance.
- [kAudioQueueParam_PlayRate](kaudioqueueparam_playrate.md): The playback rate for the audio queue, in the range `0.5` through `2.0`. A value of `1.0` (the default) specifies that the audio queue should play at its normal rate.
- [kAudioQueueParam_Pitch](kaudioqueueparam_pitch.md): The number of cents to pitch-shift the audio queue’s playback, in the range `-2400` through `2400` cents (where 1200 cents corresponds to one musical octave.)
- [kAudioQueueParam_VolumeRampTime](kaudioqueueparam_volumeramptime.md): The number of seconds over which a volume change is ramped.
