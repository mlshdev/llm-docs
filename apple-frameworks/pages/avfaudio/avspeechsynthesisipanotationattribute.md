> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avspeechsynthesisipanotationattribute](https://developer.apple.com/documentation/avfaudio/avspeechsynthesisipanotationattribute)

# AVSpeechSynthesisIPANotationAttribute (Swift)

**Framework:** AVFAudio  
**Kind:** Global Variable  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A string that contains International Phonetic Alphabet (IPA) symbols the speech synthesizer uses to control pronunciation of certain words or phrases.

## Declaration

```swift
let AVSpeechSynthesisIPANotationAttribute: String
```

<a id="Discussion"></a>

## Discussion

For example, the speech synthesizer uses an `AVSpeechSynthesisIPANotationAttribute` instance to control pronunciation of a proper name.

## See Also

### Creating an utterance

- [init(string:)](avspeechutterance/init%28string_%29.md): Creates an utterance with the text string that you specify for the speech synthesizer to speak.
- [init(attributedString:)](avspeechutterance/init%28attributedstring_%29.md): Creates an utterance with the attributed text string that you specify for the speech synthesizer to speak.
- [init(ssmlRepresentation:)](avspeechutterance/init%28ssmlrepresentation_%29-8zam9.md): Creates a speech utterance with an Speech Synthesis Markup Language (SSML) string.

# AVSpeechSynthesisIPANotationAttribute (Objective-C)

**Framework:** AVFAudio  
**Kind:** Global Variable  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A string that contains International Phonetic Alphabet (IPA) symbols the speech synthesizer uses to control pronunciation of certain words or phrases.

## Declaration

```objectivec
extern NSString * const AVSpeechSynthesisIPANotationAttribute;
```

<a id="Discussion"></a>

## Discussion

For example, the speech synthesizer uses an `AVSpeechSynthesisIPANotationAttribute` instance to control pronunciation of a proper name.

## See Also

### Creating an utterance

- [initWithString:](avspeechutterance/init%28string_%29.md): Creates an utterance with the text string that you specify for the speech synthesizer to speak.
- [speechUtteranceWithString:](avspeechutterance/speechutterancewithstring_.md): Creates an utterance with the text string that you specify for the speech synthesizer to speak.
- [initWithAttributedString:](avspeechutterance/init%28attributedstring_%29.md): Creates an utterance with the attributed text string that you specify for the speech synthesizer to speak.
- [speechUtteranceWithAttributedString:](avspeechutterance/speechutterancewithattributedstring_.md): Creates an utterance with the attributed text string that you specify for the speech synthesizer to speak.
- [speechUtteranceWithSSMLRepresentation:](avspeechutterance/speechutterancewithssmlrepresentation_.md): Returns a new speech utterance with an Speech Synthesis Markup Language (SSML) string.
- [initWithSSMLRepresentation:](avspeechutterance/init%28ssmlrepresentation_%29-8zam9.md): Creates a speech utterance with an Speech Synthesis Markup Language (SSML) string.
