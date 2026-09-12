> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/setpreferredinputorientation(_:)](https://developer.apple.com/documentation/avfaudio/avaudiosession/setpreferredinputorientation(_:))

# setPreferredInputOrientation(\_:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Sets the audio session’s preferred stereo input orientation.

## Declaration

```swift
func setPreferredInputOrientation(_ orientation: AVAudioSession.StereoOrientation) throws
```

## Parameters

- `orientation`: The stereo orientation.

<a id="Discussion"></a>

## Discussion

Configure the input orientation to match how the user is holding the device when they begin recording. In a single-window app, set the input orientation to a value corresponding to the app’s user interface orientation.

## See Also

### Enabling stereo recording

- [inputOrientation](inputorientation.md): An orientation value that dictates which directions represent left and right when capturing audio from a built-in microphone configured for stereo recording.
- [preferredInputOrientation](preferredinputorientation.md): The audio session’s preferred stereo input orientation.
- [AVAudioSession.StereoOrientation](stereoorientation.md): Constants that define the supported stereo orientations.

# setPreferredInputOrientation:error: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Sets the audio session’s preferred stereo input orientation.

## Declaration

```objectivec
- (BOOL) setPreferredInputOrientation:(AVAudioStereoOrientation) orientation error:(NSError **) outError;
```

## Parameters

- `orientation`: The stereo orientation.
- `outError`: On input, a pointer to an error object. If an error occurs, the framework sets the pointer to an [NSError](../../foundation/nserror.md) object that describes the error. If you don’t want error information, pass in `nil`.

<a id="Discussion"></a>

## Discussion

Configure the input orientation to match how the user is holding the device when they begin recording. In a single-window app, set the input orientation to a value corresponding to the app’s user interface orientation.

## See Also

### Enabling stereo recording

- [inputOrientation](inputorientation.md): An orientation value that dictates which directions represent left and right when capturing audio from a built-in microphone configured for stereo recording.
- [preferredInputOrientation](preferredinputorientation.md): The audio session’s preferred stereo input orientation.
- [AVAudioStereoOrientation](stereoorientation.md): Constants that define the supported stereo orientations.
