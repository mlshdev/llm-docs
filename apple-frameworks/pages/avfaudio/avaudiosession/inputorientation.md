> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/inputorientation](https://developer.apple.com/documentation/avfaudio/avaudiosession/inputorientation)

# inputOrientation (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

An orientation value that dictates which directions represent left and right when capturing audio from a built-in microphone configured for stereo recording.

## Declaration

```swift
var inputOrientation: AVAudioSession.StereoOrientation { get }
```

<a id="Discussion"></a>

## Discussion

If you’re recording video, set the input orientation to match the video orientation. If you’re recording audio only, set the input orientation to match the user interface orientation. In either case, don’t modify the input orientation during recording.

> **Important**

>  The audio session’s input orientation is independent of the [orientation](../avaudiosessiondatasourcedescription/orientation.md) property of an [AVAudioSessionDataSourceDescription](../avaudiosessiondatasourcedescription.md).

## See Also

### Enabling stereo recording

- [preferredInputOrientation](preferredinputorientation.md): The audio session’s preferred stereo input orientation.
- [setPreferredInputOrientation(\_:)](setpreferredinputorientation%28__%29.md): Sets the audio session’s preferred stereo input orientation.
- [AVAudioSession.StereoOrientation](stereoorientation.md): Constants that define the supported stereo orientations.

# inputOrientation (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

An orientation value that dictates which directions represent left and right when capturing audio from a built-in microphone configured for stereo recording.

## Declaration

```objectivec
@property (readonly) AVAudioStereoOrientation inputOrientation;
```

<a id="Discussion"></a>

## Discussion

If you’re recording video, set the input orientation to match the video orientation. If you’re recording audio only, set the input orientation to match the user interface orientation. In either case, don’t modify the input orientation during recording.

> **Important**

>  The audio session’s input orientation is independent of the [orientation](../avaudiosessiondatasourcedescription/orientation.md) property of an [AVAudioSessionDataSourceDescription](../avaudiosessiondatasourcedescription.md).

## See Also

### Enabling stereo recording

- [preferredInputOrientation](preferredinputorientation.md): The audio session’s preferred stereo input orientation.
- [setPreferredInputOrientation:error:](setpreferredinputorientation%28__%29.md): Sets the audio session’s preferred stereo input orientation.
- [AVAudioStereoOrientation](stereoorientation.md): Constants that define the supported stereo orientations.
