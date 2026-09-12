> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioinputnode/isvoiceprocessingagcenabled](https://developer.apple.com/documentation/avfaudio/avaudioinputnode/isvoiceprocessingagcenabled)

# isVoiceProcessingAGCEnabled (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A Boolean that indicates whether automatic gain control on the processed microphone uplink signal is active.

## Declaration

```swift
var isVoiceProcessingAGCEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

This property is in an enabled state by default.

## See Also

### Getting and Setting Voice Processing Properties

- [isVoiceProcessingInputMuted](isvoiceprocessinginputmuted.md): A Boolean that indicates whether the input of the voice processing unit is in a muted state.
- [isVoiceProcessingBypassed](isvoiceprocessingbypassed.md): A Boolean that indicates whether the node bypasses all microphone uplink processing of the voice-processing unit.
- [voiceProcessingOtherAudioDuckingConfiguration](voiceprocessingotheraudioduckingconfiguration.md): The ducking configuration of nonvoice audio.
- [AVAudioVoiceProcessingOtherAudioDuckingConfiguration](../avaudiovoiceprocessingotheraudioduckingconfiguration.md): The configuration of ducking non-voice audio.

# voiceProcessingAGCEnabled (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A Boolean that indicates whether automatic gain control on the processed microphone uplink signal is active.

## Declaration

```objectivec
@property (nonatomic, getter=isVoiceProcessingAGCEnabled) BOOL voiceProcessingAGCEnabled;
```

<a id="Discussion"></a>

## Discussion

This property is in an enabled state by default.

## See Also

### Getting and Setting Voice Processing Properties

- [voiceProcessingInputMuted](isvoiceprocessinginputmuted.md): A Boolean that indicates whether the input of the voice processing unit is in a muted state.
- [voiceProcessingBypassed](isvoiceprocessingbypassed.md): A Boolean that indicates whether the node bypasses all microphone uplink processing of the voice-processing unit.
- [voiceProcessingOtherAudioDuckingConfiguration](voiceprocessingotheraudioduckingconfiguration.md): The ducking configuration of nonvoice audio.
- [AVAudioVoiceProcessingOtherAudioDuckingConfiguration](../avaudiovoiceprocessingotheraudioduckingconfiguration.md): The configuration of ducking non-voice audio.
