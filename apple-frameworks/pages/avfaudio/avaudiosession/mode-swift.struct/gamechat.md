> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/mode-swift.struct/gamechat](https://developer.apple.com/documentation/avfaudio/avaudiosession/mode-swift.struct/gamechat)

# gameChat (Swift)

**Framework:** AVFAudio  
**Kind:** Type Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A mode that the GameKit framework sets on behalf of an application that uses GameKit’s voice chat service.

## Declaration

```swift
static let gameChat: AVAudioSession.Mode
```

<a id="Discussion"></a>

## Discussion

This mode is valid only with the [playAndRecord](../category-swift.struct/playandrecord.md) audio session category.

Don’t set this mode directly. If you need similar behavior and aren’t using a [GKVoiceChat](../../../gamekit/gkvoicechat.md) object, use [voiceChat](voicechat.md) or [videoChat](videochat.md) instead.

## See Also

### Getting Standard Session Modes

- [default](default.md): The default audio session mode.
- [dualRoute](dualroute.md): A mode that provides simultaneous use of the built-in microphone/speaker and a secondary audio device that supports input and output.
- [measurement](measurement.md): A mode that indicates that your app is performing measurement of audio input or output.
- [moviePlayback](movieplayback.md): A mode that indicates that your app is playing back movie content.
- [shortFormVideo](shortformvideo.md): Appropriate for applications playing short-form video content.
- [spokenAudio](spokenaudio.md): A mode used for continuous spoken audio to pause the audio when another app plays a short audio prompt.
- [videoChat](videochat.md): A mode that indicates that your app is engaging in online video conferencing.
- [videoRecording](videorecording.md): A mode that indicates that your app is recording a movie.
- [voiceChat](voicechat.md): A mode that indicates that your app is performing two-way voice communication, such as using Voice over Internet Protocol (VoIP).
- [voicePrompt](voiceprompt.md): A mode that indicates that your app plays audio using text-to-speech.

# AVAudioSessionModeGameChat (Objective-C)

**Framework:** AVFAudio  
**Kind:** Global Variable  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A mode that the GameKit framework sets on behalf of an application that uses GameKit’s voice chat service.

## Declaration

```objectivec
extern AVAudioSessionMode const AVAudioSessionModeGameChat;
```

<a id="Discussion"></a>

## Discussion

This mode is valid only with the [AVAudioSessionCategoryPlayAndRecord](../category-swift.struct/playandrecord.md) audio session category.

Don’t set this mode directly. If you need similar behavior and aren’t using a [GKVoiceChat](../../../gamekit/gkvoicechat.md) object, use [AVAudioSessionModeVoiceChat](voicechat.md) or [AVAudioSessionModeVideoChat](videochat.md) instead.

## See Also

### Getting Standard Session Modes

- [AVAudioSessionModeDefault](default.md): The default audio session mode.
- [AVAudioSessionModeDualRoute](dualroute.md): A mode that provides simultaneous use of the built-in microphone/speaker and a secondary audio device that supports input and output.
- [AVAudioSessionModeMeasurement](measurement.md): A mode that indicates that your app is performing measurement of audio input or output.
- [AVAudioSessionModeMoviePlayback](movieplayback.md): A mode that indicates that your app is playing back movie content.
- [AVAudioSessionModeShortFormVideo](shortformvideo.md): Appropriate for applications playing short-form video content.
- [AVAudioSessionModeSpokenAudio](spokenaudio.md): A mode used for continuous spoken audio to pause the audio when another app plays a short audio prompt.
- [AVAudioSessionModeVideoChat](videochat.md): A mode that indicates that your app is engaging in online video conferencing.
- [AVAudioSessionModeVideoRecording](videorecording.md): A mode that indicates that your app is recording a movie.
- [AVAudioSessionModeVoiceChat](voicechat.md): A mode that indicates that your app is performing two-way voice communication, such as using Voice over Internet Protocol (VoIP).
- [AVAudioSessionModeVoicePrompt](voiceprompt.md): A mode that indicates that your app plays audio using text-to-speech.
