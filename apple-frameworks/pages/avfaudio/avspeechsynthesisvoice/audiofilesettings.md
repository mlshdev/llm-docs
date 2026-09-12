> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avspeechsynthesisvoice/audiofilesettings](https://developer.apple.com/documentation/avfaudio/avspeechsynthesisvoice/audiofilesettings)

# audioFileSettings (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A dictionary that contains audio file settings.

## Declaration

```swift
var audioFileSettings: [String : Any] { get }
```

<a id="Discussion"></a>

## Discussion

If you want to generate speech and save it as an audio file to share or play later, use this dictionary to create an [AVAudioFile](../avaudiofile.md) instance and pass it as the `settings` parameter.

You can determine the [AVAudioCommonFormat](../avaudiocommonformat.md) and interleaved properties of a voice from this dictionary. The format of this dictionary matches the data that [AVSpeechSynthesizer.BufferCallback](../avspeechsynthesizer/buffercallback.md) provides for the same voice.

## See Also

### Inspecting voices

- [identifier](identifier.md): The unique identifier of a voice.
- [name](name.md): The name of a voice.
- [quality](quality.md): The speech quality of a voice.
- [gender](gender.md): The gender for a voice.
- [voiceTraits](voicetraits.md): The traits of a voice.
- [AVSpeechSynthesisVoiceQuality](../avspeechsynthesisvoicequality.md): The speech quality of a voice.
- [AVSpeechSynthesisVoiceGender](../avspeechsynthesisvoicegender.md): The gender for a voice.
- [AVSpeechSynthesisVoice.Traits](traits.md): Traits that describe a voice.

# audioFileSettings (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A dictionary that contains audio file settings.

## Declaration

```objectivec
@property (nonatomic, readonly) NSDictionary<NSString *,id> * audioFileSettings;
```

<a id="Discussion"></a>

## Discussion

If you want to generate speech and save it as an audio file to share or play later, use this dictionary to create an [AVAudioFile](../avaudiofile.md) instance and pass it as the `settings` parameter.

You can determine the [AVAudioCommonFormat](../avaudiocommonformat.md) and interleaved properties of a voice from this dictionary. The format of this dictionary matches the data that [AVSpeechSynthesizerBufferCallback](../avspeechsynthesizer/buffercallback.md) provides for the same voice.

## See Also

### Inspecting voices

- [identifier](identifier.md): The unique identifier of a voice.
- [name](name.md): The name of a voice.
- [quality](quality.md): The speech quality of a voice.
- [gender](gender.md): The gender for a voice.
- [voiceTraits](voicetraits.md): The traits of a voice.
- [AVSpeechSynthesisVoiceQuality](../avspeechsynthesisvoicequality.md): The speech quality of a voice.
- [AVSpeechSynthesisVoiceGender](../avspeechsynthesisvoicegender.md): The gender for a voice.
- [AVSpeechSynthesisVoiceTraits](traits.md): Traits that describe a voice.
