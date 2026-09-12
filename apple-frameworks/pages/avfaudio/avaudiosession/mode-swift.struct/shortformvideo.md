> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/mode-swift.struct/shortformvideo](https://developer.apple.com/documentation/avfaudio/avaudiosession/mode-swift.struct/shortformvideo)

# shortFormVideo (Swift)

**Framework:** AVFAudio  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Appropriate for applications playing short-form video content.

## Declaration

```swift
static let shortFormVideo: AVAudioSession.Mode
```

<a id="discussion"></a>

## Discussion

Only valid with [playback](../category-swift.struct/playback.md). Not applicable with [AVAudioSession.RouteSharingPolicy.longFormAudio](../routesharingpolicy-swift.enum/longformaudio.md), or [AVAudioSession.RouteSharingPolicy.longFormVideo](../routesharingpolicy-swift.enum/longformvideo.md).

When this mode is set:

- system will make informed decisions to automatically unmute the output of the media if the user shows intention of unmuting.

  - When auto-unmuted, [userIntentToUnmuteOutputNotification](../userintenttounmuteoutputnotification.md) and [outputMuteStateChangeNotification](../outputmutestatechangenotification.md) will be sent.
- if the session is output muted, system may prevent interrupting other active audio apps.

## See Also

### Getting Standard Session Modes

- [default](default.md): The default audio session mode.
- [dualRoute](dualroute.md): A mode that provides simultaneous use of the built-in microphone/speaker and a secondary audio device that supports input and output.
- [gameChat](gamechat.md): A mode that the GameKit framework sets on behalf of an application that uses GameKit’s voice chat service.
- [measurement](measurement.md): A mode that indicates that your app is performing measurement of audio input or output.
- [moviePlayback](movieplayback.md): A mode that indicates that your app is playing back movie content.
- [spokenAudio](spokenaudio.md): A mode used for continuous spoken audio to pause the audio when another app plays a short audio prompt.
- [videoChat](videochat.md): A mode that indicates that your app is engaging in online video conferencing.
- [videoRecording](videorecording.md): A mode that indicates that your app is recording a movie.
- [voiceChat](voicechat.md): A mode that indicates that your app is performing two-way voice communication, such as using Voice over Internet Protocol (VoIP).
- [voicePrompt](voiceprompt.md): A mode that indicates that your app plays audio using text-to-speech.

# AVAudioSessionModeShortFormVideo (Objective-C)

**Framework:** AVFAudio  
**Kind:** Global Variable  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Appropriate for applications playing short-form video content.

## Declaration

```objectivec
extern AVAudioSessionMode const AVAudioSessionModeShortFormVideo;
```

<a id="discussion"></a>

## Discussion

Only valid with [AVAudioSessionCategoryPlayback](../category-swift.struct/playback.md). Not applicable with [AVAudioSessionRouteSharingPolicyLongFormAudio](../routesharingpolicy-swift.enum/longformaudio.md), or [AVAudioSessionRouteSharingPolicyLongFormVideo](../routesharingpolicy-swift.enum/longformvideo.md).

When this mode is set:

- system will make informed decisions to automatically unmute the output of the media if the user shows intention of unmuting.

  - When auto-unmuted, [AVAudioSessionUserIntentToUnmuteOutputNotification](../userintenttounmuteoutputnotification.md) and [AVAudioSessionOutputMuteStateChangeNotification](../outputmutestatechangenotification.md) will be sent.
- if the session is output muted, system may prevent interrupting other active audio apps.

## See Also

### Getting Standard Session Modes

- [AVAudioSessionModeDefault](default.md): The default audio session mode.
- [AVAudioSessionModeDualRoute](dualroute.md): A mode that provides simultaneous use of the built-in microphone/speaker and a secondary audio device that supports input and output.
- [AVAudioSessionModeGameChat](gamechat.md): A mode that the GameKit framework sets on behalf of an application that uses GameKit’s voice chat service.
- [AVAudioSessionModeMeasurement](measurement.md): A mode that indicates that your app is performing measurement of audio input or output.
- [AVAudioSessionModeMoviePlayback](movieplayback.md): A mode that indicates that your app is playing back movie content.
- [AVAudioSessionModeSpokenAudio](spokenaudio.md): A mode used for continuous spoken audio to pause the audio when another app plays a short audio prompt.
- [AVAudioSessionModeVideoChat](videochat.md): A mode that indicates that your app is engaging in online video conferencing.
- [AVAudioSessionModeVideoRecording](videorecording.md): A mode that indicates that your app is recording a movie.
- [AVAudioSessionModeVoiceChat](voicechat.md): A mode that indicates that your app is performing two-way voice communication, such as using Voice over Internet Protocol (VoIP).
- [AVAudioSessionModeVoicePrompt](voiceprompt.md): A mode that indicates that your app plays audio using text-to-speech.
