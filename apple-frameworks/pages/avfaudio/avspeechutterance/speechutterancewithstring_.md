> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avspeechutterance/speechutterancewithstring:](https://developer.apple.com/documentation/avfaudio/avspeechutterance/speechutterancewithstring:)

# speechUtteranceWithString:

**Interface language:** Objective-C

**Framework:** AVFAudio  
**Kind:** Type Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates an utterance with the text string that you specify for the speech synthesizer to speak.

## Declaration

```objectivec
+ (instancetype) speechUtteranceWithString:(NSString *) string;
```

## Parameters

- `string`: A string that contains the text to speak.

<a id="return-value"></a>

## Return Value

An [AVSpeechUtterance](../avspeechutterance.md) object that can speak the specified text.

<a id="Discussion"></a>

## Discussion

To speak the text, pass the utterance to an instance of [AVSpeechSynthesizer](../avspeechsynthesizer.md).

## See Also

### Creating an utterance

- [initWithString:](init%28string_%29.md): Creates an utterance with the text string that you specify for the speech synthesizer to speak.
- [initWithAttributedString:](init%28attributedstring_%29.md): Creates an utterance with the attributed text string that you specify for the speech synthesizer to speak.
- [speechUtteranceWithAttributedString:](speechutterancewithattributedstring_.md): Creates an utterance with the attributed text string that you specify for the speech synthesizer to speak.
- [AVSpeechSynthesisIPANotationAttribute](../avspeechsynthesisipanotationattribute.md): A string that contains International Phonetic Alphabet (IPA) symbols the speech synthesizer uses to control pronunciation of certain words or phrases.
- [speechUtteranceWithSSMLRepresentation:](speechutterancewithssmlrepresentation_.md): Returns a new speech utterance with an Speech Synthesis Markup Language (SSML) string.
- [initWithSSMLRepresentation:](init%28ssmlrepresentation_%29-8zam9.md): Creates a speech utterance with an Speech Synthesis Markup Language (SSML) string.
