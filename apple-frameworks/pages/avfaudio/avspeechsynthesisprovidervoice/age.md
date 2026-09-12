> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avspeechsynthesisprovidervoice/age](https://developer.apple.com/documentation/avfaudio/avspeechsynthesisprovidervoice/age)

# age (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The age of the voice, in years.

## Declaration

```swift
var age: Int { get set }
```

<a id="Discussion"></a>

## Discussion

The system treats this value as a personality trait and defaults to `0`.

## See Also

### Inspecting a voice

- [gender](gender.md): The gender of the voice.
- [AVSpeechSynthesisVoiceGender](../avspeechsynthesisvoicegender.md): The gender for a voice.
- [identifier](identifier.md): The unique identifier for the voice.
- [name](name.md): The localized name of the voice.
- [primaryLanguages](primarylanguages.md): A list of BCP 47 codes that identify the languages the synthesizer uses.
- [supportedLanguages](supportedlanguages.md): A list of BCP 47 codes that identify the languages a voice supports.
- [version](version.md): The version of the voice.
- [voiceSize](voicesize.md): The size of the voice package on disk, in bytes.

# age (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The age of the voice, in years.

## Declaration

```objectivec
@property (nonatomic, assign) NSInteger age;
```

<a id="Discussion"></a>

## Discussion

The system treats this value as a personality trait and defaults to `0`.

## See Also

### Inspecting a voice

- [gender](gender.md): The gender of the voice.
- [AVSpeechSynthesisVoiceGender](../avspeechsynthesisvoicegender.md): The gender for a voice.
- [identifier](identifier.md): The unique identifier for the voice.
- [name](name.md): The localized name of the voice.
- [primaryLanguages](primarylanguages.md): A list of BCP 47 codes that identify the languages the synthesizer uses.
- [supportedLanguages](supportedlanguages.md): A list of BCP 47 codes that identify the languages a voice supports.
- [version](version.md): The version of the voice.
- [voiceSize](voicesize.md): The size of the voice package on disk, in bytes.
