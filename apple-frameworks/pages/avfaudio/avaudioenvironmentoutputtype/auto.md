> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioenvironmentoutputtype/auto](https://developer.apple.com/documentation/avfaudio/avaudioenvironmentoutputtype/auto)

# AVAudioEnvironmentOutputType.auto (Swift)

**Framework:** AVFAudio  
**Kind:** Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Automatically detects the playback route and picks the correct output.

## Declaration

```swift
case auto
```

<a id="Discussion"></a>

## Discussion

When using the automatic output type, wired output defaults to [AVAudioEnvironmentOutputType.headphones](headphones.md), and manual rendering with a two-channel output layout defaults to [AVAudioEnvironmentOutputType.externalSpeakers](externalspeakers.md).

## See Also

### Output Types

- [AVAudioEnvironmentOutputType.headphones](headphones.md): Renders the audio output for headphones.
- [AVAudioEnvironmentOutputType.builtInSpeakers](builtinspeakers.md): Renders the audio output for built-in speakers on the current hardware.
- [AVAudioEnvironmentOutputType.externalSpeakers](externalspeakers.md): Renders the audio output for external speakers according to the audio environment node’s output channel layout.

# AVAudioEnvironmentOutputTypeAuto (Objective-C)

**Framework:** AVFAudio  
**Kind:** Enumeration Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Automatically detects the playback route and picks the correct output.

## Declaration

```objectivec
AVAudioEnvironmentOutputTypeAuto
```

<a id="Discussion"></a>

## Discussion

When using the automatic output type, wired output defaults to [AVAudioEnvironmentOutputTypeHeadphones](headphones.md), and manual rendering with a two-channel output layout defaults to [AVAudioEnvironmentOutputTypeExternalSpeakers](externalspeakers.md).

## See Also

### Output Types

- [AVAudioEnvironmentOutputTypeHeadphones](headphones.md): Renders the audio output for headphones.
- [AVAudioEnvironmentOutputTypeBuiltInSpeakers](builtinspeakers.md): Renders the audio output for built-in speakers on the current hardware.
- [AVAudioEnvironmentOutputTypeExternalSpeakers](externalspeakers.md): Renders the audio output for external speakers according to the audio environment node’s output channel layout.
