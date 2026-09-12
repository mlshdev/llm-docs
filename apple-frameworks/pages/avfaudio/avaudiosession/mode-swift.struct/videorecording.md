> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/mode-swift.struct/videorecording](https://developer.apple.com/documentation/avfaudio/avaudiosession/mode-swift.struct/videorecording)

# videoRecording (Swift)

**Framework:** AVFAudio  
**Kind:** Type Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A mode that indicates that your app is recording a movie.

## Declaration

```swift
static let videoRecording: AVAudioSession.Mode
```

<a id="Discussion"></a>

## Discussion

This mode is valid only with the [record](../category-swift.struct/record.md) and [playAndRecord](../category-swift.struct/playandrecord.md) audio session categories. On devices with more than one built-in microphone, the audio session uses the microphone closest to the video camera.

Use this mode to ensure that the system provides appropriate audio-signal processing.

Use [AVCaptureSession](../../../avfoundation/avcapturesession.md) in conjunction with the video recording mode for greater control of input and output routes. For example, setting the [automaticallyConfiguresApplicationAudioSession](../../../avfoundation/avcapturesession/automaticallyconfiguresapplicationaudiosession.md) property results in the session automatically choosing the best input route for the device and camera used.

## See Also

### Getting Standard Session Modes

- [default](default.md): The default audio session mode.
- [dualRoute](dualroute.md): A mode that provides simultaneous use of the built-in microphone/speaker and a secondary audio device that supports input and output.
- [gameChat](gamechat.md): A mode that the GameKit framework sets on behalf of an application that uses GameKit’s voice chat service.
- [measurement](measurement.md): A mode that indicates that your app is performing measurement of audio input or output.
- [moviePlayback](movieplayback.md): A mode that indicates that your app is playing back movie content.
- [shortFormVideo](shortformvideo.md): Appropriate for applications playing short-form video content.
- [spokenAudio](spokenaudio.md): A mode used for continuous spoken audio to pause the audio when another app plays a short audio prompt.
- [videoChat](videochat.md): A mode that indicates that your app is engaging in online video conferencing.
- [voiceChat](voicechat.md): A mode that indicates that your app is performing two-way voice communication, such as using Voice over Internet Protocol (VoIP).
- [voicePrompt](voiceprompt.md): A mode that indicates that your app plays audio using text-to-speech.

# AVAudioSessionModeVideoRecording (Objective-C)

**Framework:** AVFAudio  
**Kind:** Global Variable  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A mode that indicates that your app is recording a movie.

## Declaration

```objectivec
extern AVAudioSessionMode const AVAudioSessionModeVideoRecording;
```

<a id="Discussion"></a>

## Discussion

This mode is valid only with the [AVAudioSessionCategoryRecord](../category-swift.struct/record.md) and [AVAudioSessionCategoryPlayAndRecord](../category-swift.struct/playandrecord.md) audio session categories. On devices with more than one built-in microphone, the audio session uses the microphone closest to the video camera.

Use this mode to ensure that the system provides appropriate audio-signal processing.

Use [AVCaptureSession](../../../avfoundation/avcapturesession.md) in conjunction with the video recording mode for greater control of input and output routes. For example, setting the [automaticallyConfiguresApplicationAudioSession](../../../avfoundation/avcapturesession/automaticallyconfiguresapplicationaudiosession.md) property results in the session automatically choosing the best input route for the device and camera used.

## See Also

### Getting Standard Session Modes

- [AVAudioSessionModeDefault](default.md): The default audio session mode.
- [AVAudioSessionModeDualRoute](dualroute.md): A mode that provides simultaneous use of the built-in microphone/speaker and a secondary audio device that supports input and output.
- [AVAudioSessionModeGameChat](gamechat.md): A mode that the GameKit framework sets on behalf of an application that uses GameKit’s voice chat service.
- [AVAudioSessionModeMeasurement](measurement.md): A mode that indicates that your app is performing measurement of audio input or output.
- [AVAudioSessionModeMoviePlayback](movieplayback.md): A mode that indicates that your app is playing back movie content.
- [AVAudioSessionModeShortFormVideo](shortformvideo.md): Appropriate for applications playing short-form video content.
- [AVAudioSessionModeSpokenAudio](spokenaudio.md): A mode used for continuous spoken audio to pause the audio when another app plays a short audio prompt.
- [AVAudioSessionModeVideoChat](videochat.md): A mode that indicates that your app is engaging in online video conferencing.
- [AVAudioSessionModeVoiceChat](voicechat.md): A mode that indicates that your app is performing two-way voice communication, such as using Voice over Internet Protocol (VoIP).
- [AVAudioSessionModeVoicePrompt](voiceprompt.md): A mode that indicates that your app plays audio using text-to-speech.
