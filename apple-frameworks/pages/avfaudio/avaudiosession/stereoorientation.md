> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/stereoorientation](https://developer.apple.com/documentation/avfaudio/avaudiosession/stereoorientation)

# AVAudioSession.StereoOrientation (Swift)

**Framework:** AVFAudio  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS

Constants that define the supported stereo orientations.

## Declaration

```swift
enum StereoOrientation
```

## Topics

### Stereo Orientations

- [AVAudioSession.StereoOrientation.none](stereoorientation/none.md): The audio session isn’t configured for stereo recording.
- [AVAudioSession.StereoOrientation.portrait](stereoorientation/portrait.md): Audio capture should be vertically oriented, with the USB-C or Lightning connector on the bottom.
- [AVAudioSession.StereoOrientation.portraitUpsideDown](stereoorientation/portraitupsidedown.md): Audio capture should be vertically oriented, with the USB-C or Lightning connector on the top.
- [AVAudioSession.StereoOrientation.landscapeRight](stereoorientation/landscaperight.md): Audio capture should be horizontally oriented, with the USB-C or Lightning connector on the right.
- [AVAudioSession.StereoOrientation.landscapeLeft](stereoorientation/landscapeleft.md): Audio capture should be horizontally oriented, with the USB-C or Lightning connector on the left.

### Initializers

- [init(rawValue:)](stereoorientation/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Enabling stereo recording

- [inputOrientation](inputorientation.md): An orientation value that dictates which directions represent left and right when capturing audio from a built-in microphone configured for stereo recording.
- [preferredInputOrientation](preferredinputorientation.md): The audio session’s preferred stereo input orientation.
- [setPreferredInputOrientation(\_:)](setpreferredinputorientation%28__%29.md): Sets the audio session’s preferred stereo input orientation.

# AVAudioStereoOrientation (Objective-C)

**Framework:** AVFAudio  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constants that define the supported stereo orientations.

## Declaration

```objectivec
enum AVAudioStereoOrientation : NSInteger;
```

## Topics

### Stereo Orientations

- [AVAudioStereoOrientationNone](stereoorientation/none.md): The audio session isn’t configured for stereo recording.
- [AVAudioStereoOrientationPortrait](stereoorientation/portrait.md): Audio capture should be vertically oriented, with the USB-C or Lightning connector on the bottom.
- [AVAudioStereoOrientationPortraitUpsideDown](stereoorientation/portraitupsidedown.md): Audio capture should be vertically oriented, with the USB-C or Lightning connector on the top.
- [AVAudioStereoOrientationLandscapeRight](stereoorientation/landscaperight.md): Audio capture should be horizontally oriented, with the USB-C or Lightning connector on the right.
- [AVAudioStereoOrientationLandscapeLeft](stereoorientation/landscapeleft.md): Audio capture should be horizontally oriented, with the USB-C or Lightning connector on the left.

## See Also

### Enabling stereo recording

- [inputOrientation](inputorientation.md): An orientation value that dictates which directions represent left and right when capturing audio from a built-in microphone configured for stereo recording.
- [preferredInputOrientation](preferredinputorientation.md): The audio session’s preferred stereo input orientation.
- [setPreferredInputOrientation:error:](setpreferredinputorientation%28__%29.md): Sets the audio session’s preferred stereo input orientation.
