> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/kaudiosessionmode_videorecording](https://developer.apple.com/documentation/audiotoolbox/kaudiosessionmode_videorecording)

# kAudioSessionMode_VideoRecording (Swift)

**Framework:** Audio Toolbox  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

Specify this mode if your app is recording a movie.

## Declaration

```swift
var kAudioSessionMode_VideoRecording: Int { get }
```

<a id="Discussion"></a>

## Discussion

For use with the [kAudioSessionCategory_RecordAudio](kaudiosessioncategory_recordaudio.md) audio session category. Also works with the [kAudioSessionCategory_PlayAndRecord](kaudiosessioncategory_playandrecord.md) category. On devices with more than one built-in microphone, the microphone closest to the video camera is used.

Using this mode may result in the system providing appropriate audio signal processing.

This mode is equivalent to the [videoRecording](../avfaudio/avaudiosession/mode-swift.struct/videorecording.md) mode provided in the AVFoundation framework.

## See Also

### Constants

- [kAudioSessionMode_Default](kaudiosessionmode_default.md): Deprecated. The default mode; used unless you set a mode with the [AudioSessionSetProperty(\_:\_:\_:)](audiosessionsetproperty%28______%29.md) function.
- [kAudioSessionMode_VoiceChat](kaudiosessionmode_voicechat.md): Specify this mode if your app is performing two-way voice communication, such as using Voice over Internet Protocol (VoIP).
- [kAudioSessionMode_Measurement](kaudiosessionmode_measurement.md): Specify this mode if your app is performing measurement of incoming audio.
- [kAudioSessionMode_GameChat](kaudiosessionmode_gamechat.md)

# kAudioSessionMode_VideoRecording (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

Specify this mode if your app is recording a movie.

## Declaration

```objectivec
kAudioSessionMode_VideoRecording
```

<a id="Discussion"></a>

## Discussion

For use with the [kAudioSessionCategory_RecordAudio](kaudiosessioncategory_recordaudio.md) audio session category. Also works with the [kAudioSessionCategory_PlayAndRecord](kaudiosessioncategory_playandrecord.md) category. On devices with more than one built-in microphone, the microphone closest to the video camera is used.

Using this mode may result in the system providing appropriate audio signal processing.

This mode is equivalent to the [AVAudioSessionModeVideoRecording](../avfaudio/avaudiosession/mode-swift.struct/videorecording.md) mode provided in the AVFoundation framework.

## See Also

### Constants

- [kAudioSessionMode_Default](kaudiosessionmode_default.md): Deprecated. The default mode; used unless you set a mode with the [AudioSessionSetProperty](audiosessionsetproperty%28______%29.md) function.
- [kAudioSessionMode_VoiceChat](kaudiosessionmode_voicechat.md): Specify this mode if your app is performing two-way voice communication, such as using Voice over Internet Protocol (VoIP).
- [kAudioSessionMode_Measurement](kaudiosessionmode_measurement.md): Specify this mode if your app is performing measurement of incoming audio.
- [kAudioSessionMode_GameChat](kaudiosessionmode_gamechat.md)
