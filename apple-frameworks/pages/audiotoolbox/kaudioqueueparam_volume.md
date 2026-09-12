> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/kaudioqueueparam_volume](https://developer.apple.com/documentation/audiotoolbox/kaudioqueueparam_volume)

# kAudioQueueParam_Volume (Swift)

**Framework:** Audio Toolbox  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The playback volume for the audio queue, ranging from `0.0` through `1.0` on a linear scale. A value of `0.0` indicates silence; a value of `1.0` (the default) indicates full volume for the audio queue instance.

## Declaration

```swift
var kAudioQueueParam_Volume: AudioQueueParameterID { get }
```

<a id="Discussion"></a>

## Discussion

Use this property to control an audio queue’s volume relative to other audio output.

To provide UI in iOS for adjusting system audio playback volume, use the [MPVolumeView](../mediaplayer/mpvolumeview.md) class, which provides media playback controls that iOS users expect and whose appearance you can customize.

## See Also

### Constants

- [kAudioQueueParam_PlayRate](kaudioqueueparam_playrate.md): The playback rate for the audio queue, in the range `0.5` through `2.0`. A value of `1.0` (the default) specifies that the audio queue should play at its normal rate.
- [kAudioQueueParam_Pitch](kaudioqueueparam_pitch.md): The number of cents to pitch-shift the audio queue’s playback, in the range `-2400` through `2400` cents (where 1200 cents corresponds to one musical octave.)
- [kAudioQueueParam_VolumeRampTime](kaudioqueueparam_volumeramptime.md): The number of seconds over which a volume change is ramped.
- [kAudioQueueParam_Pan](kaudioqueueparam_pan.md): The stereo panning position of a source. For a monophonic source, panning is determined as follows:

# kAudioQueueParam_Volume (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The playback volume for the audio queue, ranging from `0.0` through `1.0` on a linear scale. A value of `0.0` indicates silence; a value of `1.0` (the default) indicates full volume for the audio queue instance.

## Declaration

```objectivec
kAudioQueueParam_Volume
```

<a id="Discussion"></a>

## Discussion

Use this property to control an audio queue’s volume relative to other audio output.

To provide UI in iOS for adjusting system audio playback volume, use the [MPVolumeView](../mediaplayer/mpvolumeview.md) class, which provides media playback controls that iOS users expect and whose appearance you can customize.

## See Also

### Constants

- [kAudioQueueParam_PlayRate](kaudioqueueparam_playrate.md): The playback rate for the audio queue, in the range `0.5` through `2.0`. A value of `1.0` (the default) specifies that the audio queue should play at its normal rate.
- [kAudioQueueParam_Pitch](kaudioqueueparam_pitch.md): The number of cents to pitch-shift the audio queue’s playback, in the range `-2400` through `2400` cents (where 1200 cents corresponds to one musical octave.)
- [kAudioQueueParam_VolumeRampTime](kaudioqueueparam_volumeramptime.md): The number of seconds over which a volume change is ramped.
- [kAudioQueueParam_Pan](kaudioqueueparam_pan.md): The stereo panning position of a source. For a monophonic source, panning is determined as follows:
