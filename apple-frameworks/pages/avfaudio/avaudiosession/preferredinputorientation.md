> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/preferredinputorientation](https://developer.apple.com/documentation/avfaudio/avaudiosession/preferredinputorientation)

# preferredInputOrientation (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

The audio session’s preferred stereo input orientation.

## Declaration

```swift
var preferredInputOrientation: AVAudioSession.StereoOrientation { get }
```

## See Also

### Enabling stereo recording

- [inputOrientation](inputorientation.md): An orientation value that dictates which directions represent left and right when capturing audio from a built-in microphone configured for stereo recording.
- [setPreferredInputOrientation(\_:)](setpreferredinputorientation%28__%29.md): Sets the audio session’s preferred stereo input orientation.
- [AVAudioSession.StereoOrientation](stereoorientation.md): Constants that define the supported stereo orientations.

# preferredInputOrientation (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

The audio session’s preferred stereo input orientation.

## Declaration

```objectivec
@property (readonly) AVAudioStereoOrientation preferredInputOrientation;
```

## See Also

### Enabling stereo recording

- [inputOrientation](inputorientation.md): An orientation value that dictates which directions represent left and right when capturing audio from a built-in microphone configured for stereo recording.
- [setPreferredInputOrientation:error:](setpreferredinputorientation%28__%29.md): Sets the audio session’s preferred stereo input orientation.
- [AVAudioStereoOrientation](stereoorientation.md): Constants that define the supported stereo orientations.
