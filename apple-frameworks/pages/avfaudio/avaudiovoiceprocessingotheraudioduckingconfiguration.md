> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiovoiceprocessingotheraudioduckingconfiguration](https://developer.apple.com/documentation/avfaudio/avaudiovoiceprocessingotheraudioduckingconfiguration)

# AVAudioVoiceProcessingOtherAudioDuckingConfiguration (Swift)

**Framework:** AVFAudio  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

The configuration of ducking non-voice audio.

## Declaration

```swift
struct AVAudioVoiceProcessingOtherAudioDuckingConfiguration
```

## Topics

### Configuring ducking

- [enableAdvancedDucking](avaudiovoiceprocessingotheraudioduckingconfiguration/enableadvancedducking.md): Enables advanced ducking which ducks other audio based on the presence of voice activity from local and remote chat participants.
- [duckingLevel](avaudiovoiceprocessingotheraudioduckingconfiguration/duckinglevel.md): The ducking level of other audio.
- [AVAudioVoiceProcessingOtherAudioDuckingConfiguration.Level](avaudiovoiceprocessingotheraudioduckingconfiguration/level.md): Constants that define the supported ducking levels.

### Initializers

- [init()](avaudiovoiceprocessingotheraudioduckingconfiguration/init%28%29.md)
- [init(enableAdvancedDucking:duckingLevel:)](avaudiovoiceprocessingotheraudioduckingconfiguration/init%28enableadvancedducking_duckinglevel_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Getting and Setting Voice Processing Properties

- [isVoiceProcessingInputMuted](avaudioinputnode/isvoiceprocessinginputmuted.md): A Boolean that indicates whether the input of the voice processing unit is in a muted state.
- [isVoiceProcessingBypassed](avaudioinputnode/isvoiceprocessingbypassed.md): A Boolean that indicates whether the node bypasses all microphone uplink processing of the voice-processing unit.
- [isVoiceProcessingAGCEnabled](avaudioinputnode/isvoiceprocessingagcenabled.md): A Boolean that indicates whether automatic gain control on the processed microphone uplink signal is active.
- [voiceProcessingOtherAudioDuckingConfiguration](avaudioinputnode/voiceprocessingotheraudioduckingconfiguration.md): The ducking configuration of nonvoice audio.

# AVAudioVoiceProcessingOtherAudioDuckingConfiguration (Objective-C)

**Framework:** AVFAudio  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

The configuration of ducking non-voice audio.

## Declaration

```objectivec
typedef struct AVAudioVoiceProcessingOtherAudioDuckingConfiguration { ... } AVAudioVoiceProcessingOtherAudioDuckingConfiguration;
```

## Topics

### Configuring ducking

- [enableAdvancedDucking](avaudiovoiceprocessingotheraudioduckingconfiguration/enableadvancedducking.md): Enables advanced ducking which ducks other audio based on the presence of voice activity from local and remote chat participants.
- [duckingLevel](avaudiovoiceprocessingotheraudioduckingconfiguration/duckinglevel.md): The ducking level of other audio.
- [AVAudioVoiceProcessingOtherAudioDuckingLevel](avaudiovoiceprocessingotheraudioduckingconfiguration/level.md): Constants that define the supported ducking levels.

## See Also

### Getting and Setting Voice Processing Properties

- [voiceProcessingInputMuted](avaudioinputnode/isvoiceprocessinginputmuted.md): A Boolean that indicates whether the input of the voice processing unit is in a muted state.
- [voiceProcessingBypassed](avaudioinputnode/isvoiceprocessingbypassed.md): A Boolean that indicates whether the node bypasses all microphone uplink processing of the voice-processing unit.
- [voiceProcessingAGCEnabled](avaudioinputnode/isvoiceprocessingagcenabled.md): A Boolean that indicates whether automatic gain control on the processed microphone uplink signal is active.
- [voiceProcessingOtherAudioDuckingConfiguration](avaudioinputnode/voiceprocessingotheraudioduckingconfiguration.md): The ducking configuration of nonvoice audio.
