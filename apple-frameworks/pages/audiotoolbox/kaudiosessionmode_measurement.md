> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/kaudiosessionmode_measurement](https://developer.apple.com/documentation/audiotoolbox/kaudiosessionmode_measurement)

# kAudioSessionMode_Measurement (Swift)

**Framework:** Audio Toolbox  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

Specify this mode if your app is performing measurement of incoming audio.

## Declaration

```swift
var kAudioSessionMode_Measurement: Int { get }
```

<a id="Discussion"></a>

## Discussion

When this mode is in use, the device does not perform automatic gain adjustment on incoming audio. For use with the [kAudioSessionCategory_RecordAudio](kaudiosessioncategory_recordaudio.md) or [kAudioSessionCategory_PlayAndRecord](kaudiosessioncategory_playandrecord.md) audio session categories. On devices with more than one built-in microphone, the primary microphone is used.

This mode is equivalent to the [measurement](../avfaudio/avaudiosession/mode-swift.struct/measurement.md) mode provided in the AVFoundation framework.

## See Also

### Constants

- [kAudioSessionMode_Default](kaudiosessionmode_default.md): Deprecated. The default mode; used unless you set a mode with the [AudioSessionSetProperty(\_:\_:\_:)](audiosessionsetproperty%28______%29.md) function.
- [kAudioSessionMode_VoiceChat](kaudiosessionmode_voicechat.md): Specify this mode if your app is performing two-way voice communication, such as using Voice over Internet Protocol (VoIP).
- [kAudioSessionMode_VideoRecording](kaudiosessionmode_videorecording.md): Specify this mode if your app is recording a movie.
- [kAudioSessionMode_GameChat](kaudiosessionmode_gamechat.md)

# kAudioSessionMode_Measurement (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

Specify this mode if your app is performing measurement of incoming audio.

## Declaration

```objectivec
kAudioSessionMode_Measurement
```

<a id="Discussion"></a>

## Discussion

When this mode is in use, the device does not perform automatic gain adjustment on incoming audio. For use with the [kAudioSessionCategory_RecordAudio](kaudiosessioncategory_recordaudio.md) or [kAudioSessionCategory_PlayAndRecord](kaudiosessioncategory_playandrecord.md) audio session categories. On devices with more than one built-in microphone, the primary microphone is used.

This mode is equivalent to the [AVAudioSessionModeMeasurement](../avfaudio/avaudiosession/mode-swift.struct/measurement.md) mode provided in the AVFoundation framework.

## See Also

### Constants

- [kAudioSessionMode_Default](kaudiosessionmode_default.md): Deprecated. The default mode; used unless you set a mode with the [AudioSessionSetProperty](audiosessionsetproperty%28______%29.md) function.
- [kAudioSessionMode_VoiceChat](kaudiosessionmode_voicechat.md): Specify this mode if your app is performing two-way voice communication, such as using Voice over Internet Protocol (VoIP).
- [kAudioSessionMode_VideoRecording](kaudiosessionmode_videorecording.md): Specify this mode if your app is recording a movie.
- [kAudioSessionMode_GameChat](kaudiosessionmode_gamechat.md)
