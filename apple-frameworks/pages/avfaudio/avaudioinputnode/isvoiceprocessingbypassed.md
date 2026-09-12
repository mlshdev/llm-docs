> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioinputnode/isvoiceprocessingbypassed](https://developer.apple.com/documentation/avfaudio/avaudioinputnode/isvoiceprocessingbypassed)

# isVoiceProcessingBypassed (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A Boolean that indicates whether the node bypasses all microphone uplink processing of the voice-processing unit.

## Declaration

```swift
var isVoiceProcessingBypassed: Bool { get set }
```

## See Also

### Getting and Setting Voice Processing Properties

- [isVoiceProcessingInputMuted](isvoiceprocessinginputmuted.md): A Boolean that indicates whether the input of the voice processing unit is in a muted state.
- [isVoiceProcessingAGCEnabled](isvoiceprocessingagcenabled.md): A Boolean that indicates whether automatic gain control on the processed microphone uplink signal is active.
- [voiceProcessingOtherAudioDuckingConfiguration](voiceprocessingotheraudioduckingconfiguration.md): The ducking configuration of nonvoice audio.
- [AVAudioVoiceProcessingOtherAudioDuckingConfiguration](../avaudiovoiceprocessingotheraudioduckingconfiguration.md): The configuration of ducking non-voice audio.

# voiceProcessingBypassed (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A Boolean that indicates whether the node bypasses all microphone uplink processing of the voice-processing unit.

## Declaration

```objectivec
@property (nonatomic, getter=isVoiceProcessingBypassed) BOOL voiceProcessingBypassed;
```

## See Also

### Getting and Setting Voice Processing Properties

- [voiceProcessingInputMuted](isvoiceprocessinginputmuted.md): A Boolean that indicates whether the input of the voice processing unit is in a muted state.
- [voiceProcessingAGCEnabled](isvoiceprocessingagcenabled.md): A Boolean that indicates whether automatic gain control on the processed microphone uplink signal is active.
- [voiceProcessingOtherAudioDuckingConfiguration](voiceprocessingotheraudioduckingconfiguration.md): The ducking configuration of nonvoice audio.
- [AVAudioVoiceProcessingOtherAudioDuckingConfiguration](../avaudiovoiceprocessingotheraudioduckingconfiguration.md): The configuration of ducking non-voice audio.
