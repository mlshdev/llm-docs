> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/mode-swift.struct/videochat](https://developer.apple.com/documentation/avfaudio/avaudiosession/mode-swift.struct/videochat)

# videoChat (Swift)

**Framework:** AVFAudio  
**Kind:** Type Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A mode that indicates that your app is engaging in online video conferencing.

## Declaration

```swift
static let videoChat: AVAudioSession.Mode
```

<a id="Discussion"></a>

## Discussion

This mode is appropriate for video chat apps that use the [playAndRecord](../category-swift.struct/playandrecord.md) or [record](../category-swift.struct/record.md) categories. When you set this mode, the session optimizes the device’s tonal equalization for voice and reduces the set of allowed audio routes to only those suitable for video chat. Setting this mode also causes the system to automatically apply the [allowBluetoothHFP](../categoryoptions-swift.struct/allowbluetoothhfp.md) and [defaultToSpeaker](../categoryoptions-swift.struct/defaulttospeaker.md) category options.

VoIP apps should also use the [Audio Unit Voice I/O](../../../audiotoolbox/audio-unit-voice-i-o.md) as it provides useful voice features, including automatic gain correction, adjustment of voice processing, and muting. When an app uses this Audio Unit without explicitly setting its mode to a chat variant (voice, video, or game), the session sets the [voiceChat](voicechat.md) mode implicitly. However, if an app previously set its category to [playAndRecord](../category-swift.struct/playandrecord.md) and mode to [videoChat](videochat.md) or [gameChat](gamechat.md), instantiating the Audio Unit doesn’t cause the mode to change.

For apps that use one or more chat modes (voice, video, or game), but don’t use [Audio Unit Voice I/O](../../../audiotoolbox/audio-unit-voice-i-o.md) or [AVAudioEngine](../../avaudioengine.md) with [setVoiceProcessingEnabled(\_:)](../../avaudioionode/setvoiceprocessingenabled%28__%29.md), the system reduces the processing it applies to audio signals. Specifically, it doesn’t apply voice-specific processing, like echo cancellation and automatic gain correction, and disables dynamic processing on input and output, which results in a lower playback level.

## See Also

### Getting Standard Session Modes

- [default](default.md): The default audio session mode.
- [dualRoute](dualroute.md): A mode that provides simultaneous use of the built-in microphone/speaker and a secondary audio device that supports input and output.
- [gameChat](gamechat.md): A mode that the GameKit framework sets on behalf of an application that uses GameKit’s voice chat service.
- [measurement](measurement.md): A mode that indicates that your app is performing measurement of audio input or output.
- [moviePlayback](movieplayback.md): A mode that indicates that your app is playing back movie content.
- [shortFormVideo](shortformvideo.md): Appropriate for applications playing short-form video content.
- [spokenAudio](spokenaudio.md): A mode used for continuous spoken audio to pause the audio when another app plays a short audio prompt.
- [videoRecording](videorecording.md): A mode that indicates that your app is recording a movie.
- [voiceChat](voicechat.md): A mode that indicates that your app is performing two-way voice communication, such as using Voice over Internet Protocol (VoIP).
- [voicePrompt](voiceprompt.md): A mode that indicates that your app plays audio using text-to-speech.

# AVAudioSessionModeVideoChat (Objective-C)

**Framework:** AVFAudio  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A mode that indicates that your app is engaging in online video conferencing.

## Declaration

```objectivec
extern AVAudioSessionMode const AVAudioSessionModeVideoChat;
```

<a id="Discussion"></a>

## Discussion

This mode is appropriate for video chat apps that use the [AVAudioSessionCategoryPlayAndRecord](../category-swift.struct/playandrecord.md) or [AVAudioSessionCategoryRecord](../category-swift.struct/record.md) categories. When you set this mode, the session optimizes the device’s tonal equalization for voice and reduces the set of allowed audio routes to only those suitable for video chat. Setting this mode also causes the system to automatically apply the [AVAudioSessionCategoryOptionAllowBluetoothHFP](../categoryoptions-swift.struct/allowbluetoothhfp.md) and [AVAudioSessionCategoryOptionDefaultToSpeaker](../categoryoptions-swift.struct/defaulttospeaker.md) category options.

VoIP apps should also use the [Audio Unit Voice I/O](../../../audiotoolbox/audio-unit-voice-i-o.md) as it provides useful voice features, including automatic gain correction, adjustment of voice processing, and muting. When an app uses this Audio Unit without explicitly setting its mode to a chat variant (voice, video, or game), the session sets the [AVAudioSessionModeVoiceChat](voicechat.md) mode implicitly. However, if an app previously set its category to [AVAudioSessionCategoryPlayAndRecord](../category-swift.struct/playandrecord.md) and mode to [AVAudioSessionModeVideoChat](videochat.md) or [AVAudioSessionModeGameChat](gamechat.md), instantiating the Audio Unit doesn’t cause the mode to change.

For apps that use one or more chat modes (voice, video, or game), but don’t use [Audio Unit Voice I/O](../../../audiotoolbox/audio-unit-voice-i-o.md) or [AVAudioEngine](../../avaudioengine.md) with [setVoiceProcessingEnabled:error:](../../avaudioionode/setvoiceprocessingenabled%28__%29.md), the system reduces the processing it applies to audio signals. Specifically, it doesn’t apply voice-specific processing, like echo cancellation and automatic gain correction, and disables dynamic processing on input and output, which results in a lower playback level.

## See Also

### Getting Standard Session Modes

- [AVAudioSessionModeDefault](default.md): The default audio session mode.
- [AVAudioSessionModeDualRoute](dualroute.md): A mode that provides simultaneous use of the built-in microphone/speaker and a secondary audio device that supports input and output.
- [AVAudioSessionModeGameChat](gamechat.md): A mode that the GameKit framework sets on behalf of an application that uses GameKit’s voice chat service.
- [AVAudioSessionModeMeasurement](measurement.md): A mode that indicates that your app is performing measurement of audio input or output.
- [AVAudioSessionModeMoviePlayback](movieplayback.md): A mode that indicates that your app is playing back movie content.
- [AVAudioSessionModeShortFormVideo](shortformvideo.md): Appropriate for applications playing short-form video content.
- [AVAudioSessionModeSpokenAudio](spokenaudio.md): A mode used for continuous spoken audio to pause the audio when another app plays a short audio prompt.
- [AVAudioSessionModeVideoRecording](videorecording.md): A mode that indicates that your app is recording a movie.
- [AVAudioSessionModeVoiceChat](voicechat.md): A mode that indicates that your app is performing two-way voice communication, such as using Voice over Internet Protocol (VoIP).
- [AVAudioSessionModeVoicePrompt](voiceprompt.md): A mode that indicates that your app plays audio using text-to-speech.
