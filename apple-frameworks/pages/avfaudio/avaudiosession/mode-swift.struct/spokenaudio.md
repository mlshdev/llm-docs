> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/mode-swift.struct/spokenaudio](https://developer.apple.com/documentation/avfaudio/avaudiosession/mode-swift.struct/spokenaudio)

# spokenAudio (Swift)

**Framework:** AVFAudio  
**Kind:** Type Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A mode used for continuous spoken audio to pause the audio when another app plays a short audio prompt.

## Declaration

```swift
static let spokenAudio: AVAudioSession.Mode
```

<a id="Discussion"></a>

## Discussion

This mode is appropriate for apps that play continuous spoken audio, such as podcasts or audio books. Setting this mode indicates that your app should pause, rather than duck, its audio if another app plays a spoken audio prompt. After the interrupting app’s audio ends, you can resume your app’s audio playback.

## See Also

### Getting Standard Session Modes

- [default](default.md): The default audio session mode.
- [dualRoute](dualroute.md): A mode that provides simultaneous use of the built-in microphone/speaker and a secondary audio device that supports input and output.
- [gameChat](gamechat.md): A mode that the GameKit framework sets on behalf of an application that uses GameKit’s voice chat service.
- [measurement](measurement.md): A mode that indicates that your app is performing measurement of audio input or output.
- [moviePlayback](movieplayback.md): A mode that indicates that your app is playing back movie content.
- [shortFormVideo](shortformvideo.md): Appropriate for applications playing short-form video content.
- [videoChat](videochat.md): A mode that indicates that your app is engaging in online video conferencing.
- [videoRecording](videorecording.md): A mode that indicates that your app is recording a movie.
- [voiceChat](voicechat.md): A mode that indicates that your app is performing two-way voice communication, such as using Voice over Internet Protocol (VoIP).
- [voicePrompt](voiceprompt.md): A mode that indicates that your app plays audio using text-to-speech.

# AVAudioSessionModeSpokenAudio (Objective-C)

**Framework:** AVFAudio  
**Kind:** Global Variable  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A mode used for continuous spoken audio to pause the audio when another app plays a short audio prompt.

## Declaration

```objectivec
extern AVAudioSessionMode const AVAudioSessionModeSpokenAudio;
```

<a id="Discussion"></a>

## Discussion

This mode is appropriate for apps that play continuous spoken audio, such as podcasts or audio books. Setting this mode indicates that your app should pause, rather than duck, its audio if another app plays a spoken audio prompt. After the interrupting app’s audio ends, you can resume your app’s audio playback.

## See Also

### Getting Standard Session Modes

- [AVAudioSessionModeDefault](default.md): The default audio session mode.
- [AVAudioSessionModeDualRoute](dualroute.md): A mode that provides simultaneous use of the built-in microphone/speaker and a secondary audio device that supports input and output.
- [AVAudioSessionModeGameChat](gamechat.md): A mode that the GameKit framework sets on behalf of an application that uses GameKit’s voice chat service.
- [AVAudioSessionModeMeasurement](measurement.md): A mode that indicates that your app is performing measurement of audio input or output.
- [AVAudioSessionModeMoviePlayback](movieplayback.md): A mode that indicates that your app is playing back movie content.
- [AVAudioSessionModeShortFormVideo](shortformvideo.md): Appropriate for applications playing short-form video content.
- [AVAudioSessionModeVideoChat](videochat.md): A mode that indicates that your app is engaging in online video conferencing.
- [AVAudioSessionModeVideoRecording](videorecording.md): A mode that indicates that your app is recording a movie.
- [AVAudioSessionModeVoiceChat](voicechat.md): A mode that indicates that your app is performing two-way voice communication, such as using Voice over Internet Protocol (VoIP).
- [AVAudioSessionModeVoicePrompt](voiceprompt.md): A mode that indicates that your app plays audio using text-to-speech.
