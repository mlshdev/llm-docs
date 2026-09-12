> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioinputnode/isvoiceprocessinginputmuted](https://developer.apple.com/documentation/avfaudio/avaudioinputnode/isvoiceprocessinginputmuted)

# isVoiceProcessingInputMuted (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A Boolean that indicates whether the input of the voice processing unit is in a muted state.

## Declaration

```swift
var isVoiceProcessingInputMuted: Bool { get set }
```

## See Also

### Getting and Setting Voice Processing Properties

- [isVoiceProcessingBypassed](isvoiceprocessingbypassed.md): A Boolean that indicates whether the node bypasses all microphone uplink processing of the voice-processing unit.
- [isVoiceProcessingAGCEnabled](isvoiceprocessingagcenabled.md): A Boolean that indicates whether automatic gain control on the processed microphone uplink signal is active.
- [voiceProcessingOtherAudioDuckingConfiguration](voiceprocessingotheraudioduckingconfiguration.md): The ducking configuration of nonvoice audio.
- [AVAudioVoiceProcessingOtherAudioDuckingConfiguration](../avaudiovoiceprocessingotheraudioduckingconfiguration.md): The configuration of ducking non-voice audio.

# voiceProcessingInputMuted (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A Boolean that indicates whether the input of the voice processing unit is in a muted state.

## Declaration

```objectivec
@property (nonatomic, getter=isVoiceProcessingInputMuted) BOOL voiceProcessingInputMuted;
```

## See Also

### Getting and Setting Voice Processing Properties

- [voiceProcessingBypassed](isvoiceprocessingbypassed.md): A Boolean that indicates whether the node bypasses all microphone uplink processing of the voice-processing unit.
- [voiceProcessingAGCEnabled](isvoiceprocessingagcenabled.md): A Boolean that indicates whether automatic gain control on the processed microphone uplink signal is active.
- [voiceProcessingOtherAudioDuckingConfiguration](voiceprocessingotheraudioduckingconfiguration.md): The ducking configuration of nonvoice audio.
- [AVAudioVoiceProcessingOtherAudioDuckingConfiguration](../avaudiovoiceprocessingotheraudioduckingconfiguration.md): The configuration of ducking non-voice audio.
