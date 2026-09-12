> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avspeechsynthesisvoice/language](https://developer.apple.com/documentation/avfaudio/avspeechsynthesisvoice/language)

# language (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A BCP 47 code that contains the voice’s language and locale.

## Declaration

```swift
var language: String { get }
```

<a id="Discussion"></a>

## Discussion

The language of a voice controls the conversion of text to spoken phonemes. For best results, ensure that the language of an utterance’s text matches the voice for the utterance. The locale of a voice reflects regional variations in pronunciation or accent. For example, a voice with a language code of `en-US` speaks English text with a North American accent, and a language code of `en-AU` speaks English text with an Australian accent.

## See Also

### Working with language codes

- [currentLanguageCode()](currentlanguagecode%28%29.md): Returns the language and locale code for the user’s current locale.

# language (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A BCP 47 code that contains the voice’s language and locale.

## Declaration

```objectivec
@property (nonatomic, readonly) NSString * language;
```

<a id="Discussion"></a>

## Discussion

The language of a voice controls the conversion of text to spoken phonemes. For best results, ensure that the language of an utterance’s text matches the voice for the utterance. The locale of a voice reflects regional variations in pronunciation or accent. For example, a voice with a language code of `en-US` speaks English text with a North American accent, and a language code of `en-AU` speaks English text with an Australian accent.

## See Also

### Working with language codes

- [currentLanguageCode](currentlanguagecode%28%29.md): Returns the language and locale code for the user’s current locale.
