> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/kaudiosessionmode_default](https://developer.apple.com/documentation/audiotoolbox/kaudiosessionmode_default)

# kAudioSessionMode_Default (Swift)

**Framework:** Audio Toolbox  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

The default mode; used unless you set a mode with the [AudioSessionSetProperty(\_:\_:\_:)](audiosessionsetproperty%28______%29.md) function.

> Deprecated in iOS 7.0.

## Declaration

```swift
var kAudioSessionMode_Default: Int { get }
```

<a id="Discussion"></a>

## Discussion

When this mode is in use, audio session behavior matches that of iOS versions prior to iOS 5.0. You can use this mode with every audio session category. On devices with more than one built-in microphone, the primary microphone is used.

This mode is equivalent to the [default](../avfaudio/avaudiosession/mode-swift.struct/default.md) mode provided in the AVFoundation framework.

## See Also

### Constants

- [kAudioSessionMode_VoiceChat](kaudiosessionmode_voicechat.md): Specify this mode if your app is performing two-way voice communication, such as using Voice over Internet Protocol (VoIP).
- [kAudioSessionMode_VideoRecording](kaudiosessionmode_videorecording.md): Specify this mode if your app is recording a movie.
- [kAudioSessionMode_Measurement](kaudiosessionmode_measurement.md): Specify this mode if your app is performing measurement of incoming audio.
- [kAudioSessionMode_GameChat](kaudiosessionmode_gamechat.md)

# kAudioSessionMode_Default (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

The default mode; used unless you set a mode with the [AudioSessionSetProperty](audiosessionsetproperty%28______%29.md) function.

> Deprecated in iOS 7.0.

## Declaration

```objectivec
kAudioSessionMode_Default
```

<a id="Discussion"></a>

## Discussion

When this mode is in use, audio session behavior matches that of iOS versions prior to iOS 5.0. You can use this mode with every audio session category. On devices with more than one built-in microphone, the primary microphone is used.

This mode is equivalent to the [AVAudioSessionModeDefault](../avfaudio/avaudiosession/mode-swift.struct/default.md) mode provided in the AVFoundation framework.

## See Also

### Constants

- [kAudioSessionMode_VoiceChat](kaudiosessionmode_voicechat.md): Specify this mode if your app is performing two-way voice communication, such as using Voice over Internet Protocol (VoIP).
- [kAudioSessionMode_VideoRecording](kaudiosessionmode_videorecording.md): Specify this mode if your app is recording a movie.
- [kAudioSessionMode_Measurement](kaudiosessionmode_measurement.md): Specify this mode if your app is performing measurement of incoming audio.
- [kAudioSessionMode_GameChat](kaudiosessionmode_gamechat.md)
