> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/mode-swift.struct/dualroute](https://developer.apple.com/documentation/avfaudio/avaudiosession/mode-swift.struct/dualroute)

# dualRoute (Swift)

**Framework:** AVFAudio  
**Kind:** Type Property  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+

A mode that provides simultaneous use of the built-in microphone/speaker and a secondary audio device that supports input and output.

## Declaration

```swift
static let dualRoute: AVAudioSession.Mode
```

<a id="discussion"></a>

## Discussion

This mode can only be used with the [multiRoute](../category-swift.struct/multiroute.md) category. It additionally requires you to set the [allowBluetoothHFP](../categoryoptions-swift.struct/allowbluetoothhfp.md) option.

Enabling this mode results in the following behavior:

- The primary audio route is always the built-in microphone/speaker.
- The supported secondary route types are [headsetMic](../port/headsetmic.md), [headphones](../port/headphones.md), [bluetoothLE](../port/bluetoothle.md), and [bluetoothHFP](../port/bluetoothhfp.md).
- Only audio routes that support input and output are available for use.
- The hardware volume controls adjusts the volume for both primary and secondary routes.
- The system may engage appropriate signal processing for output routes.

> **Important**

> This API may not be used to enable recordings of others without their awareness.

## See Also

### Getting Standard Session Modes

- [default](default.md): The default audio session mode.
- [gameChat](gamechat.md): A mode that the GameKit framework sets on behalf of an application that uses GameKit’s voice chat service.
- [measurement](measurement.md): A mode that indicates that your app is performing measurement of audio input or output.
- [moviePlayback](movieplayback.md): A mode that indicates that your app is playing back movie content.
- [shortFormVideo](shortformvideo.md): Appropriate for applications playing short-form video content.
- [spokenAudio](spokenaudio.md): A mode used for continuous spoken audio to pause the audio when another app plays a short audio prompt.
- [videoChat](videochat.md): A mode that indicates that your app is engaging in online video conferencing.
- [videoRecording](videorecording.md): A mode that indicates that your app is recording a movie.
- [voiceChat](voicechat.md): A mode that indicates that your app is performing two-way voice communication, such as using Voice over Internet Protocol (VoIP).
- [voicePrompt](voiceprompt.md): A mode that indicates that your app plays audio using text-to-speech.

# AVAudioSessionModeDualRoute (Objective-C)

**Framework:** AVFAudio  
**Kind:** Global Variable  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+

A mode that provides simultaneous use of the built-in microphone/speaker and a secondary audio device that supports input and output.

## Declaration

```objectivec
extern AVAudioSessionMode const AVAudioSessionModeDualRoute;
```

<a id="discussion"></a>

## Discussion

This mode can only be used with the [AVAudioSessionCategoryMultiRoute](../category-swift.struct/multiroute.md) category. It additionally requires you to set the [AVAudioSessionCategoryOptionAllowBluetoothHFP](../categoryoptions-swift.struct/allowbluetoothhfp.md) option.

Enabling this mode results in the following behavior:

- The primary audio route is always the built-in microphone/speaker.
- The supported secondary route types are [AVAudioSessionPortHeadsetMic](../port/headsetmic.md), [AVAudioSessionPortHeadphones](../port/headphones.md), [AVAudioSessionPortBluetoothLE](../port/bluetoothle.md), and [AVAudioSessionPortBluetoothHFP](../port/bluetoothhfp.md).
- Only audio routes that support input and output are available for use.
- The hardware volume controls adjusts the volume for both primary and secondary routes.
- The system may engage appropriate signal processing for output routes.

> **Important**

> This API may not be used to enable recordings of others without their awareness.

## See Also

### Getting Standard Session Modes

- [AVAudioSessionModeDefault](default.md): The default audio session mode.
- [AVAudioSessionModeGameChat](gamechat.md): A mode that the GameKit framework sets on behalf of an application that uses GameKit’s voice chat service.
- [AVAudioSessionModeMeasurement](measurement.md): A mode that indicates that your app is performing measurement of audio input or output.
- [AVAudioSessionModeMoviePlayback](movieplayback.md): A mode that indicates that your app is playing back movie content.
- [AVAudioSessionModeShortFormVideo](shortformvideo.md): Appropriate for applications playing short-form video content.
- [AVAudioSessionModeSpokenAudio](spokenaudio.md): A mode used for continuous spoken audio to pause the audio when another app plays a short audio prompt.
- [AVAudioSessionModeVideoChat](videochat.md): A mode that indicates that your app is engaging in online video conferencing.
- [AVAudioSessionModeVideoRecording](videorecording.md): A mode that indicates that your app is recording a movie.
- [AVAudioSessionModeVoiceChat](voicechat.md): A mode that indicates that your app is performing two-way voice communication, such as using Voice over Internet Protocol (VoIP).
- [AVAudioSessionModeVoicePrompt](voiceprompt.md): A mode that indicates that your app plays audio using text-to-speech.
