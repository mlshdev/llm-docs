> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/mode-swift.struct](https://developer.apple.com/documentation/avfaudio/avaudiosession/mode-swift.struct)

# AVAudioSession.Mode (Swift)

**Framework:** AVFAudio  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS

Audio session mode identifiers.

## Declaration

```swift
struct Mode
```

<a id="overview"></a>

## Overview

While categories set the base behaviors for your app, you use modes to assign specialized behavior to an audio session category.

> **Important**

>  Specifying a mode that the audio session category doesn’t support, such as setting the [gameChat](mode-swift.struct/gamechat.md) mode for the [multiRoute](category-swift.struct/multiroute.md) category, results in the audio session using the [default](mode-swift.struct/default.md) mode behavior.

## Topics

### Creating a Mode

- [init(rawValue:)](mode-swift.struct/init%28rawvalue_%29.md): Creates a new instance with the raw value you specify.

### Getting Standard Session Modes

- [default](mode-swift.struct/default.md): The default audio session mode.
- [dualRoute](mode-swift.struct/dualroute.md): A mode that provides simultaneous use of the built-in microphone/speaker and a secondary audio device that supports input and output.
- [gameChat](mode-swift.struct/gamechat.md): A mode that the GameKit framework sets on behalf of an application that uses GameKit’s voice chat service.
- [measurement](mode-swift.struct/measurement.md): A mode that indicates that your app is performing measurement of audio input or output.
- [moviePlayback](mode-swift.struct/movieplayback.md): A mode that indicates that your app is playing back movie content.
- [shortFormVideo](mode-swift.struct/shortformvideo.md): Appropriate for applications playing short-form video content.
- [spokenAudio](mode-swift.struct/spokenaudio.md): A mode used for continuous spoken audio to pause the audio when another app plays a short audio prompt.
- [videoChat](mode-swift.struct/videochat.md): A mode that indicates that your app is engaging in online video conferencing.
- [videoRecording](mode-swift.struct/videorecording.md): A mode that indicates that your app is recording a movie.
- [voiceChat](mode-swift.struct/voicechat.md): A mode that indicates that your app is performing two-way voice communication, such as using Voice over Internet Protocol (VoIP).
- [voicePrompt](mode-swift.struct/voiceprompt.md): A mode that indicates that your app plays audio using text-to-speech.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Inspecting mode configuration

- [mode](mode-swift.property.md): The current audio session’s mode.
- [availableModes](availablemodes.md): The audio session modes available on the device.

# AVAudioSessionMode (Objective-C)

**Framework:** AVFAudio  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Audio session mode identifiers.

## Declaration

```objectivec
typedef NSString * AVAudioSessionMode;
```

<a id="overview"></a>

## Overview

While categories set the base behaviors for your app, you use modes to assign specialized behavior to an audio session category.

> **Important**

>  Specifying a mode that the audio session category doesn’t support, such as setting the [AVAudioSessionModeGameChat](mode-swift.struct/gamechat.md) mode for the [AVAudioSessionCategoryMultiRoute](category-swift.struct/multiroute.md) category, results in the audio session using the [AVAudioSessionModeDefault](mode-swift.struct/default.md) mode behavior.

## Topics

### Getting Standard Session Modes

- [AVAudioSessionModeDefault](mode-swift.struct/default.md): The default audio session mode.
- [AVAudioSessionModeDualRoute](mode-swift.struct/dualroute.md): A mode that provides simultaneous use of the built-in microphone/speaker and a secondary audio device that supports input and output.
- [AVAudioSessionModeGameChat](mode-swift.struct/gamechat.md): A mode that the GameKit framework sets on behalf of an application that uses GameKit’s voice chat service.
- [AVAudioSessionModeMeasurement](mode-swift.struct/measurement.md): A mode that indicates that your app is performing measurement of audio input or output.
- [AVAudioSessionModeMoviePlayback](mode-swift.struct/movieplayback.md): A mode that indicates that your app is playing back movie content.
- [AVAudioSessionModeShortFormVideo](mode-swift.struct/shortformvideo.md): Appropriate for applications playing short-form video content.
- [AVAudioSessionModeSpokenAudio](mode-swift.struct/spokenaudio.md): A mode used for continuous spoken audio to pause the audio when another app plays a short audio prompt.
- [AVAudioSessionModeVideoChat](mode-swift.struct/videochat.md): A mode that indicates that your app is engaging in online video conferencing.
- [AVAudioSessionModeVideoRecording](mode-swift.struct/videorecording.md): A mode that indicates that your app is recording a movie.
- [AVAudioSessionModeVoiceChat](mode-swift.struct/voicechat.md): A mode that indicates that your app is performing two-way voice communication, such as using Voice over Internet Protocol (VoIP).
- [AVAudioSessionModeVoicePrompt](mode-swift.struct/voiceprompt.md): A mode that indicates that your app plays audio using text-to-speech.

## See Also

### Inspecting mode configuration

- [mode](mode-swift.property.md): The current audio session’s mode.
- [availableModes](availablemodes.md): The audio session modes available on the device.
