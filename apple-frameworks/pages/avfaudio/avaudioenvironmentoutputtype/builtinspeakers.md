> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioenvironmentoutputtype/builtinspeakers](https://developer.apple.com/documentation/avfaudio/avaudioenvironmentoutputtype/builtinspeakers)

# AVAudioEnvironmentOutputType.builtInSpeakers (Swift)

**Framework:** AVFAudio  
**Kind:** Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Renders the audio output for built-in speakers on the current hardware.

## Declaration

```swift
case builtInSpeakers
```

<a id="Discussion"></a>

## Discussion

The output isn’t suitable for playback on other hardware.

In iOS devices, the rendering can be specific to device orientation. Manual rendering modes may not provide the rendering you expect if the device orientation changes between rendering the audio and playing it back.

## See Also

### Output Types

- [AVAudioEnvironmentOutputType.auto](auto.md): Automatically detects the playback route and picks the correct output.
- [AVAudioEnvironmentOutputType.headphones](headphones.md): Renders the audio output for headphones.
- [AVAudioEnvironmentOutputType.externalSpeakers](externalspeakers.md): Renders the audio output for external speakers according to the audio environment node’s output channel layout.

# AVAudioEnvironmentOutputTypeBuiltInSpeakers (Objective-C)

**Framework:** AVFAudio  
**Kind:** Enumeration Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Renders the audio output for built-in speakers on the current hardware.

## Declaration

```objectivec
AVAudioEnvironmentOutputTypeBuiltInSpeakers
```

<a id="Discussion"></a>

## Discussion

The output isn’t suitable for playback on other hardware.

In iOS devices, the rendering can be specific to device orientation. Manual rendering modes may not provide the rendering you expect if the device orientation changes between rendering the audio and playing it back.

## See Also

### Output Types

- [AVAudioEnvironmentOutputTypeAuto](auto.md): Automatically detects the playback route and picks the correct output.
- [AVAudioEnvironmentOutputTypeHeadphones](headphones.md): Renders the audio output for headphones.
- [AVAudioEnvironmentOutputTypeExternalSpeakers](externalspeakers.md): Renders the audio output for external speakers according to the audio environment node’s output channel layout.
