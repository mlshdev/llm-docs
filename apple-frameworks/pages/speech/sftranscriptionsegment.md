> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/sftranscriptionsegment](https://developer.apple.com/documentation/speech/sftranscriptionsegment)

# SFTranscriptionSegment (Swift)

**Framework:** Speech  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.15+ · visionOS 1.0+

A discrete part of an entire transcription, as identified by the speech recognizer.

## Declaration

```swift
class SFTranscriptionSegment
```

<a id="overview"></a>

## Overview

Use [SFTranscriptionSegment](sftranscriptionsegment.md) to get details about a part of an overall [SFTranscription](sftranscription.md). An [SFTranscriptionSegment](sftranscriptionsegment.md) represents an utterance, which is a vocalized word or group of words that represent a single meaning to the speech recognizer ([SFSpeechRecognizer](sfspeechrecognizer.md)).

You don’t create transcription object segments directly. Instead, you access them from a transcription’s [segments](sftranscription/segments.md) property.

A transcription segment includes the following information:

- The text of the utterance, plus any alternative interpretations of the spoken word.
- The character range of the segment within the [formattedString](sftranscription/formattedstring.md) of its parent [SFTranscription](sftranscription.md).
- A [confidence](sftranscriptionsegment/confidence.md) value, indicating how likely it is that the specified string matches the audible speech.
- A [timestamp](sftranscriptionsegment/timestamp.md) and [duration](sftranscriptionsegment/duration.md) value, indicating the position of the segment within the provided audio stream.

## Topics

### Transcribing the segment

- [substring](sftranscriptionsegment/substring.md): The string representation of the utterance in the transcription segment.
- [substringRange](sftranscriptionsegment/substringrange.md): The range information for the transcription segment’s substring, relative to the overall transcription.
- [alternativeSubstrings](sftranscriptionsegment/alternativesubstrings.md): An array of alternate interpretations of the utterance in the transcription segment.

### Assessing the recognition confidence level

- [confidence](sftranscriptionsegment/confidence.md): The level of confidence the speech recognizer has in its recognition of the speech transcribed for the segment.

### Getting audio timing information

- [timestamp](sftranscriptionsegment/timestamp.md): The start time of the segment in the processed audio stream.
- [duration](sftranscriptionsegment/duration.md): The number of seconds it took for the user to speak the utterance represented by the segment.

### Deprecated

- [voiceAnalytics](sftranscriptionsegment/voiceanalytics.md): Deprecated. An analysis of the transcription segment’s vocal properties.

### Initializers

- [init(coder:)](sftranscriptionsegment/init%28coder_%29.md)

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

### Transcription results

- [SFSpeechRecognitionResult](sfspeechrecognitionresult.md): An object that contains the partial or final results of a speech recognition request.
- [SFSpeechRecognitionMetadata](sfspeechrecognitionmetadata.md): The metadata of speech in the audio of a speech recognition request.
- [SFTranscription](sftranscription.md): A textual representation of the specified speech in its entirety, as recognized by the speech recognizer.

# SFTranscriptionSegment (Objective-C)

**Framework:** Speech  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.15+ · visionOS 1.0+

A discrete part of an entire transcription, as identified by the speech recognizer.

## Declaration

```objectivec
@interface SFTranscriptionSegment : NSObject
```

<a id="overview"></a>

## Overview

Use [SFTranscriptionSegment](sftranscriptionsegment.md) to get details about a part of an overall [SFTranscription](sftranscription.md). An [SFTranscriptionSegment](sftranscriptionsegment.md) represents an utterance, which is a vocalized word or group of words that represent a single meaning to the speech recognizer ([SFSpeechRecognizer](sfspeechrecognizer.md)).

You don’t create transcription object segments directly. Instead, you access them from a transcription’s [segments](sftranscription/segments.md) property.

A transcription segment includes the following information:

- The text of the utterance, plus any alternative interpretations of the spoken word.
- The character range of the segment within the [formattedString](sftranscription/formattedstring.md) of its parent [SFTranscription](sftranscription.md).
- A [confidence](sftranscriptionsegment/confidence.md) value, indicating how likely it is that the specified string matches the audible speech.
- A [timestamp](sftranscriptionsegment/timestamp.md) and [duration](sftranscriptionsegment/duration.md) value, indicating the position of the segment within the provided audio stream.

## Topics

### Transcribing the segment

- [substring](sftranscriptionsegment/substring.md): The string representation of the utterance in the transcription segment.
- [substringRange](sftranscriptionsegment/substringrange.md): The range information for the transcription segment’s substring, relative to the overall transcription.
- [alternativeSubstrings](sftranscriptionsegment/alternativesubstrings.md): An array of alternate interpretations of the utterance in the transcription segment.

### Assessing the recognition confidence level

- [confidence](sftranscriptionsegment/confidence.md): The level of confidence the speech recognizer has in its recognition of the speech transcribed for the segment.

### Getting audio timing information

- [timestamp](sftranscriptionsegment/timestamp.md): The start time of the segment in the processed audio stream.
- [duration](sftranscriptionsegment/duration.md): The number of seconds it took for the user to speak the utterance represented by the segment.

### Deprecated

- [voiceAnalytics](sftranscriptionsegment/voiceanalytics.md): Deprecated. An analysis of the transcription segment’s vocal properties.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Transcription results

- [SFSpeechRecognitionResult](sfspeechrecognitionresult.md): An object that contains the partial or final results of a speech recognition request.
- [SFSpeechRecognitionMetadata](sfspeechrecognitionmetadata.md): The metadata of speech in the audio of a speech recognition request.
- [SFTranscription](sftranscription.md): A textual representation of the specified speech in its entirety, as recognized by the speech recognizer.
