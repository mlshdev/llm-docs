> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avspeechutterance](https://developer.apple.com/documentation/avfaudio/avspeechutterance)

# AVSpeechUtterance (Swift)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS · visionOS 1.0+ · watchOS 2.0+

An object that encapsulates the text for speech synthesis and parameters that affect the speech.

## Declaration

```swift
class AVSpeechUtterance
```

<a id="overview"></a>

## Overview

An `AVSpeechUtterance` is the basic unit of speech synthesis.

To synthesize speech, create an `AVSpeechUtterance` instance with text you want a speech synthesizer to speak. Optionally, change the [voice](avspeechutterance/voice.md), [pitchMultiplier](avspeechutterance/pitchmultiplier.md), [volume](avspeechutterance/volume.md), [rate](avspeechutterance/rate.md), [preUtteranceDelay](avspeechutterance/preutterancedelay.md), or [postUtteranceDelay](avspeechutterance/postutterancedelay.md) parameters for the utterance. Pass the utterance to an instance of [AVSpeechSynthesizer](avspeechsynthesizer.md) to begin speech, or enqueue the utterance to speak later if the synthesizer is already speaking.

Split a body of text into multiple utterances if you want to apply different speech parameters. For example, you can emphasize a sentence by increasing the pitch and decreasing the rate of that utterance relative to others, or you can introduce pauses between sentences by putting each into an utterance with a leading or trailing delay.

Set and use the [AVSpeechSynthesizerDelegate](avspeechsynthesizerdelegate.md) to receive notifications when the synthesizer starts or finishes speaking an utterance. Create an utterance for each meaningful unit in a body of text if you want to receive notifications as its speech progresses.

## Topics

### Creating an utterance

- [init(string:)](avspeechutterance/init%28string_%29.md): Creates an utterance with the text string that you specify for the speech synthesizer to speak.
- [init(attributedString:)](avspeechutterance/init%28attributedstring_%29.md): Creates an utterance with the attributed text string that you specify for the speech synthesizer to speak.
- [AVSpeechSynthesisIPANotationAttribute](avspeechsynthesisipanotationattribute.md): A string that contains International Phonetic Alphabet (IPA) symbols the speech synthesizer uses to control pronunciation of certain words or phrases.
- [init(ssmlRepresentation:)](avspeechutterance/init%28ssmlrepresentation_%29-8zam9.md): Creates a speech utterance with an Speech Synthesis Markup Language (SSML) string.

### Configuring an utterance

- [voice](avspeechutterance/voice.md): The voice the speech synthesizer uses when speaking the utterance.
- [pitchMultiplier](avspeechutterance/pitchmultiplier.md): The baseline pitch the speech synthesizer uses when speaking the utterance.
- [volume](avspeechutterance/volume.md): The volume the speech synthesizer uses when speaking the utterance.
- [prefersAssistiveTechnologySettings](avspeechutterance/prefersassistivetechnologysettings.md): A Boolean that specifies whether assistive technology settings take precedence over the property values of this utterance.

### Configuring utterance timing

- [rate](avspeechutterance/rate.md): The rate the speech synthesizer uses when speaking the utterance.
- [AVSpeechUtteranceMinimumSpeechRate](avspeechutteranceminimumspeechrate.md): The minimum rate the speech synthesizer uses when speaking an utterance.
- [AVSpeechUtteranceMaximumSpeechRate](avspeechutterancemaximumspeechrate.md): The maximum rate the speech synthesizer uses when speaking an utterance.
- [AVSpeechUtteranceDefaultSpeechRate](avspeechutterancedefaultspeechrate.md): The default rate the speech synthesizer uses when speaking an utterance.
- [preUtteranceDelay](avspeechutterance/preutterancedelay.md): The amount of time the speech synthesizer pauses before speaking the utterance.
- [postUtteranceDelay](avspeechutterance/postutterancedelay.md): The amount of time the speech synthesizer pauses after speaking an utterance before handling the next utterance in the queue.

### Inspecting utterance text

- [speechString](avspeechutterance/speechstring.md): A string that contains the text for speech synthesis.
- [attributedSpeechString](avspeechutterance/attributedspeechstring.md): An attributed string that contains the text for speech synthesis.

### Initializers

- [init(SSMLRepresentation:)](avspeechutterance/init%28ssmlrepresentation_%29-2aunp.md)
- [init(SSMLRepresentation:)](avspeechutterance/init%28ssmlrepresentation_%29-7rl77.md)
- [init(coder:)](avspeechutterance/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Spoken text attributes

- [AVSpeechSynthesisVoice](avspeechsynthesisvoice.md): A distinct voice for use in speech synthesis.

# AVSpeechUtterance (Objective-C)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS · visionOS 1.0+ · watchOS 2.0+

An object that encapsulates the text for speech synthesis and parameters that affect the speech.

## Declaration

```objectivec
@interface AVSpeechUtterance : NSObject
```

<a id="overview"></a>

## Overview

An `AVSpeechUtterance` is the basic unit of speech synthesis.

To synthesize speech, create an `AVSpeechUtterance` instance with text you want a speech synthesizer to speak. Optionally, change the [voice](avspeechutterance/voice.md), [pitchMultiplier](avspeechutterance/pitchmultiplier.md), [volume](avspeechutterance/volume.md), [rate](avspeechutterance/rate.md), [preUtteranceDelay](avspeechutterance/preutterancedelay.md), or [postUtteranceDelay](avspeechutterance/postutterancedelay.md) parameters for the utterance. Pass the utterance to an instance of [AVSpeechSynthesizer](avspeechsynthesizer.md) to begin speech, or enqueue the utterance to speak later if the synthesizer is already speaking.

Split a body of text into multiple utterances if you want to apply different speech parameters. For example, you can emphasize a sentence by increasing the pitch and decreasing the rate of that utterance relative to others, or you can introduce pauses between sentences by putting each into an utterance with a leading or trailing delay.

Set and use the [AVSpeechSynthesizerDelegate](avspeechsynthesizerdelegate.md) to receive notifications when the synthesizer starts or finishes speaking an utterance. Create an utterance for each meaningful unit in a body of text if you want to receive notifications as its speech progresses.

## Topics

### Creating an utterance

- [initWithString:](avspeechutterance/init%28string_%29.md): Creates an utterance with the text string that you specify for the speech synthesizer to speak.
- [speechUtteranceWithString:](avspeechutterance/speechutterancewithstring_.md): Creates an utterance with the text string that you specify for the speech synthesizer to speak.
- [initWithAttributedString:](avspeechutterance/init%28attributedstring_%29.md): Creates an utterance with the attributed text string that you specify for the speech synthesizer to speak.
- [speechUtteranceWithAttributedString:](avspeechutterance/speechutterancewithattributedstring_.md): Creates an utterance with the attributed text string that you specify for the speech synthesizer to speak.
- [AVSpeechSynthesisIPANotationAttribute](avspeechsynthesisipanotationattribute.md): A string that contains International Phonetic Alphabet (IPA) symbols the speech synthesizer uses to control pronunciation of certain words or phrases.
- [speechUtteranceWithSSMLRepresentation:](avspeechutterance/speechutterancewithssmlrepresentation_.md): Returns a new speech utterance with an Speech Synthesis Markup Language (SSML) string.
- [initWithSSMLRepresentation:](avspeechutterance/init%28ssmlrepresentation_%29-8zam9.md): Creates a speech utterance with an Speech Synthesis Markup Language (SSML) string.

### Configuring an utterance

- [voice](avspeechutterance/voice.md): The voice the speech synthesizer uses when speaking the utterance.
- [pitchMultiplier](avspeechutterance/pitchmultiplier.md): The baseline pitch the speech synthesizer uses when speaking the utterance.
- [volume](avspeechutterance/volume.md): The volume the speech synthesizer uses when speaking the utterance.
- [prefersAssistiveTechnologySettings](avspeechutterance/prefersassistivetechnologysettings.md): A Boolean that specifies whether assistive technology settings take precedence over the property values of this utterance.

### Configuring utterance timing

- [rate](avspeechutterance/rate.md): The rate the speech synthesizer uses when speaking the utterance.
- [AVSpeechUtteranceMinimumSpeechRate](avspeechutteranceminimumspeechrate.md): The minimum rate the speech synthesizer uses when speaking an utterance.
- [AVSpeechUtteranceMaximumSpeechRate](avspeechutterancemaximumspeechrate.md): The maximum rate the speech synthesizer uses when speaking an utterance.
- [AVSpeechUtteranceDefaultSpeechRate](avspeechutterancedefaultspeechrate.md): The default rate the speech synthesizer uses when speaking an utterance.
- [preUtteranceDelay](avspeechutterance/preutterancedelay.md): The amount of time the speech synthesizer pauses before speaking the utterance.
- [postUtteranceDelay](avspeechutterance/postutterancedelay.md): The amount of time the speech synthesizer pauses after speaking an utterance before handling the next utterance in the queue.

### Inspecting utterance text

- [speechString](avspeechutterance/speechstring.md): A string that contains the text for speech synthesis.
- [attributedSpeechString](avspeechutterance/attributedspeechstring.md): An attributed string that contains the text for speech synthesis.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Spoken text attributes

- [AVSpeechSynthesisVoice](avspeechsynthesisvoice.md): A distinct voice for use in speech synthesis.
