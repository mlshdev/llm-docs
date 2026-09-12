> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avspeechsynthesisprovidervoice/supportedlanguages](https://developer.apple.com/documentation/avfaudio/avspeechsynthesisprovidervoice/supportedlanguages)

# supportedLanguages (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A list of BCP 47 codes that identify the languages a voice supports.

## Declaration

```swift
var supportedLanguages: [String] { get }
```

<a id="Discussion"></a>

## Discussion

These languages are what a voice supports — when given a multi-language phrase — without the need to switch voice. For example, if the primary language is `zh-CN`, and this value contains `zh-CN` and `en-US`, a synthesizer that receives a phrase with both languages would speak the entire phrase.

## See Also

### Inspecting a voice

- [age](age.md): The age of the voice, in years.
- [gender](gender.md): The gender of the voice.
- [AVSpeechSynthesisVoiceGender](../avspeechsynthesisvoicegender.md): The gender for a voice.
- [identifier](identifier.md): The unique identifier for the voice.
- [name](name.md): The localized name of the voice.
- [primaryLanguages](primarylanguages.md): A list of BCP 47 codes that identify the languages the synthesizer uses.
- [version](version.md): The version of the voice.
- [voiceSize](voicesize.md): The size of the voice package on disk, in bytes.

# supportedLanguages (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A list of BCP 47 codes that identify the languages a voice supports.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<NSString *> * supportedLanguages;
```

<a id="Discussion"></a>

## Discussion

These languages are what a voice supports — when given a multi-language phrase — without the need to switch voice. For example, if the primary language is `zh-CN`, and this value contains `zh-CN` and `en-US`, a synthesizer that receives a phrase with both languages would speak the entire phrase.

## See Also

### Inspecting a voice

- [age](age.md): The age of the voice, in years.
- [gender](gender.md): The gender of the voice.
- [AVSpeechSynthesisVoiceGender](../avspeechsynthesisvoicegender.md): The gender for a voice.
- [identifier](identifier.md): The unique identifier for the voice.
- [name](name.md): The localized name of the voice.
- [primaryLanguages](primarylanguages.md): A list of BCP 47 codes that identify the languages the synthesizer uses.
- [version](version.md): The version of the voice.
- [voiceSize](voicesize.md): The size of the voice package on disk, in bytes.
