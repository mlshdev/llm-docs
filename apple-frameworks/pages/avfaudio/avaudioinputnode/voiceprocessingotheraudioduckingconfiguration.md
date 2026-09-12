> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioinputnode/voiceprocessingotheraudioduckingconfiguration](https://developer.apple.com/documentation/avfaudio/avaudioinputnode/voiceprocessingotheraudioduckingconfiguration)

# voiceProcessingOtherAudioDuckingConfiguration (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

The ducking configuration of nonvoice audio.

## Declaration

```swift
var voiceProcessingOtherAudioDuckingConfiguration: AVAudioVoiceProcessingOtherAudioDuckingConfiguration { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to configures the ducking of nonvoice audio, including advanced enablement and ducking level. Typically, when playing other audio during voice chat, applying a higher level of ducking can increase the intelligibility of the voice chat.

If not set, the default behavior is to disable advanced ducking, with a ducking level set to [AVAudioVoiceProcessingOtherAudioDuckingConfiguration.Level.default](../avaudiovoiceprocessingotheraudioduckingconfiguration/level/default.md).

## See Also

### Getting and Setting Voice Processing Properties

- [isVoiceProcessingInputMuted](isvoiceprocessinginputmuted.md): A Boolean that indicates whether the input of the voice processing unit is in a muted state.
- [isVoiceProcessingBypassed](isvoiceprocessingbypassed.md): A Boolean that indicates whether the node bypasses all microphone uplink processing of the voice-processing unit.
- [isVoiceProcessingAGCEnabled](isvoiceprocessingagcenabled.md): A Boolean that indicates whether automatic gain control on the processed microphone uplink signal is active.
- [AVAudioVoiceProcessingOtherAudioDuckingConfiguration](../avaudiovoiceprocessingotheraudioduckingconfiguration.md): The configuration of ducking non-voice audio.

# voiceProcessingOtherAudioDuckingConfiguration (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

The ducking configuration of nonvoice audio.

## Declaration

```objectivec
@property (nonatomic) AVAudioVoiceProcessingOtherAudioDuckingConfiguration voiceProcessingOtherAudioDuckingConfiguration;
```

<a id="Discussion"></a>

## Discussion

Use this property to configures the ducking of nonvoice audio, including advanced enablement and ducking level. Typically, when playing other audio during voice chat, applying a higher level of ducking can increase the intelligibility of the voice chat.

If not set, the default behavior is to disable advanced ducking, with a ducking level set to [AVAudioVoiceProcessingOtherAudioDuckingLevelDefault](../avaudiovoiceprocessingotheraudioduckingconfiguration/level/default.md).

## See Also

### Getting and Setting Voice Processing Properties

- [voiceProcessingInputMuted](isvoiceprocessinginputmuted.md): A Boolean that indicates whether the input of the voice processing unit is in a muted state.
- [voiceProcessingBypassed](isvoiceprocessingbypassed.md): A Boolean that indicates whether the node bypasses all microphone uplink processing of the voice-processing unit.
- [voiceProcessingAGCEnabled](isvoiceprocessingagcenabled.md): A Boolean that indicates whether automatic gain control on the processed microphone uplink signal is active.
- [AVAudioVoiceProcessingOtherAudioDuckingConfiguration](../avaudiovoiceprocessingotheraudioduckingconfiguration.md): The configuration of ducking non-voice audio.
