> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avspeechsynthesisprovidervoice/primarylanguages](https://developer.apple.com/documentation/avfaudio/avspeechsynthesisprovidervoice/primarylanguages)

# primaryLanguages (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A list of BCP 47 codes that identify the languages the synthesizer uses.

## Declaration

```swift
var primaryLanguages: [String] { get }
```

<a id="Discussion"></a>

## Discussion

These languages are what a voice primarily supports. For example, if the primary language is `zh-CN —` with no additional [supportedLanguages](supportedlanguages.md) — the system may switch voices to speak a phrase that contains other languages. Changing voices depends on user preferences and what accessibility feature is using the voice.

## See Also

### Inspecting a voice

- [age](age.md): The age of the voice, in years.
- [gender](gender.md): The gender of the voice.
- [AVSpeechSynthesisVoiceGender](../avspeechsynthesisvoicegender.md): The gender for a voice.
- [identifier](identifier.md): The unique identifier for the voice.
- [name](name.md): The localized name of the voice.
- [supportedLanguages](supportedlanguages.md): A list of BCP 47 codes that identify the languages a voice supports.
- [version](version.md): The version of the voice.
- [voiceSize](voicesize.md): The size of the voice package on disk, in bytes.

# primaryLanguages (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A list of BCP 47 codes that identify the languages the synthesizer uses.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<NSString *> * primaryLanguages;
```

<a id="Discussion"></a>

## Discussion

These languages are what a voice primarily supports. For example, if the primary language is `zh-CN —` with no additional [supportedLanguages](supportedlanguages.md) — the system may switch voices to speak a phrase that contains other languages. Changing voices depends on user preferences and what accessibility feature is using the voice.

## See Also

### Inspecting a voice

- [age](age.md): The age of the voice, in years.
- [gender](gender.md): The gender of the voice.
- [AVSpeechSynthesisVoiceGender](../avspeechsynthesisvoicegender.md): The gender for a voice.
- [identifier](identifier.md): The unique identifier for the voice.
- [name](name.md): The localized name of the voice.
- [supportedLanguages](supportedlanguages.md): A list of BCP 47 codes that identify the languages a voice supports.
- [version](version.md): The version of the voice.
- [voiceSize](voicesize.md): The size of the voice package on disk, in bytes.
