> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avspeechutterance/speechutterancewithssmlrepresentation:](https://developer.apple.com/documentation/avfaudio/avspeechutterance/speechutterancewithssmlrepresentation:)

# speechUtteranceWithSSMLRepresentation:

**Interface language:** Objective-C

**Framework:** AVFAudio  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns a new speech utterance with an Speech Synthesis Markup Language (SSML) string.

## Declaration

```objectivec
+ (instancetype) speechUtteranceWithSSMLRepresentation:(NSString *) string;
```

## Parameters

- `string`: A string to speak that contains valid SSML markup. The initializer returns `nil` if you pass an invalid SSML string.

<a id="return-value"></a>

## Return Value

A new speech utterance, or [nil](../../objectivec/nil-227m0.md) if the SSML string is invalid.

<a id="Discussion"></a>

## Discussion

If using SSML to request voices that fall under certain attributes, the system may split a single utterance into multiple parts and send each to an appropriate synthesizer.

If no voice matches the properties, the utterance uses the voice set in its [voice](voice.md) property. If you don’t specify a voice, the system uses its default voice.

> **Note**

>  Speech utterance properties that affect the prosody of a voice, such as its [rate](rate.md) and [pitchMultiplier](pitchmultiplier.md), don’t apply to an utterance that uses an SSML representation.

## See Also

### Creating an utterance

- [initWithString:](init%28string_%29.md): Creates an utterance with the text string that you specify for the speech synthesizer to speak.
- [speechUtteranceWithString:](speechutterancewithstring_.md): Creates an utterance with the text string that you specify for the speech synthesizer to speak.
- [initWithAttributedString:](init%28attributedstring_%29.md): Creates an utterance with the attributed text string that you specify for the speech synthesizer to speak.
- [speechUtteranceWithAttributedString:](speechutterancewithattributedstring_.md): Creates an utterance with the attributed text string that you specify for the speech synthesizer to speak.
- [AVSpeechSynthesisIPANotationAttribute](../avspeechsynthesisipanotationattribute.md): A string that contains International Phonetic Alphabet (IPA) symbols the speech synthesizer uses to control pronunciation of certain words or phrases.
- [initWithSSMLRepresentation:](init%28ssmlrepresentation_%29-8zam9.md): Creates a speech utterance with an Speech Synthesis Markup Language (SSML) string.
