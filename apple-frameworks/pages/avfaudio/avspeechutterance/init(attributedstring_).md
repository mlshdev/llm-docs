> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avspeechutterance/init(attributedstring:)](https://developer.apple.com/documentation/avfaudio/avspeechutterance/init(attributedstring:))

# init(attributedString:) (Swift)

**Framework:** AVFAudio  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Creates an utterance with the attributed text string that you specify for the speech synthesizer to speak.

## Declaration

```swift
init(attributedString string: NSAttributedString)
```

## Parameters

- `string`: A string that contains the text to speak.

<a id="Discussion"></a>

## Discussion

To speak the text, pass the utterance to an instance of [AVSpeechSynthesizer](../avspeechsynthesizer.md).

## See Also

### Creating an utterance

- [init(string:)](init%28string_%29.md): Creates an utterance with the text string that you specify for the speech synthesizer to speak.
- [AVSpeechSynthesisIPANotationAttribute](../avspeechsynthesisipanotationattribute.md): A string that contains International Phonetic Alphabet (IPA) symbols the speech synthesizer uses to control pronunciation of certain words or phrases.
- [init(ssmlRepresentation:)](init%28ssmlrepresentation_%29-8zam9.md): Creates a speech utterance with an Speech Synthesis Markup Language (SSML) string.

# initWithAttributedString: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Creates an utterance with the attributed text string that you specify for the speech synthesizer to speak.

## Declaration

```objectivec
- (instancetype) initWithAttributedString:(NSAttributedString *) string;
```

## Parameters

- `string`: A string that contains the text to speak.

<a id="Discussion"></a>

## Discussion

To speak the text, pass the utterance to an instance of [AVSpeechSynthesizer](../avspeechsynthesizer.md).

## See Also

### Creating an utterance

- [initWithString:](init%28string_%29.md): Creates an utterance with the text string that you specify for the speech synthesizer to speak.
- [speechUtteranceWithString:](speechutterancewithstring_.md): Creates an utterance with the text string that you specify for the speech synthesizer to speak.
- [speechUtteranceWithAttributedString:](speechutterancewithattributedstring_.md): Creates an utterance with the attributed text string that you specify for the speech synthesizer to speak.
- [AVSpeechSynthesisIPANotationAttribute](../avspeechsynthesisipanotationattribute.md): A string that contains International Phonetic Alphabet (IPA) symbols the speech synthesizer uses to control pronunciation of certain words or phrases.
- [speechUtteranceWithSSMLRepresentation:](speechutterancewithssmlrepresentation_.md): Returns a new speech utterance with an Speech Synthesis Markup Language (SSML) string.
- [initWithSSMLRepresentation:](init%28ssmlrepresentation_%29-8zam9.md): Creates a speech utterance with an Speech Synthesis Markup Language (SSML) string.
