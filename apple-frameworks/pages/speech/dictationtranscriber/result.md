> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/dictationtranscriber/result](https://developer.apple.com/documentation/speech/dictationtranscriber/result)

# DictationTranscriber.Result

**Framework:** Speech  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

A phrase or passage of transcribed speech. The phrases are sent in order.

## Declaration

```swift
struct Result
```

<a id="overview"></a>

## Overview

If the transcriber is configured to send volatile results, each phrase is sent one or more times as the interpretation gets better and better until it is finalized.

## Topics

### Getting transcriptions

- [alternatives](result/alternatives.md): All the alternative interpretations of the audio in this range. The interpretations are in descending order of likelihood.
- [text](result/text.md): The most likely interpretation of the audio in this range.

### Working with transcriptions

- [AttributeScopes.SpeechAttributes.TimeRangeAttribute](../../foundation/attributescopes/speechattributes/timerangeattribute.md): The time range in the source audio corresponding to the associated transcription text.
- [AttributeScopes.SpeechAttributes.ConfidenceAttribute](../../foundation/attributescopes/speechattributes/confidenceattribute.md): A confidence level (0–1) of the associated transcription text.
- [rangeOfAudioTimeRangeAttributes(intersecting:)](../../foundation/attributedstring/rangeofaudiotimerangeattributes%28intersecting_%29.md): Returns the range of the attributed string that is within the given time range.

### Getting audio range

- [range](../speechmoduleresult/range.md): The audio input range that this result applies to.

### Getting finalization state

- [isFinal](../speechmoduleresult/isfinal.md): Whether this result is final at the time it is produced.
- [resultsFinalizationTime](../speechmoduleresult/resultsfinalizationtime.md): The audio input time up to which results from this module have been finalized (after this result). The module’s results are final up to but not including this time.

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SpeechModuleResult](../speechmoduleresult.md)

## See Also

### Getting results

- [results](results.md): The asynchronous sequence of transcription results.
