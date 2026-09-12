> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/speechmodule](https://developer.apple.com/documentation/speech/speechmodule)

# SpeechModule

**Framework:** Speech  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Protocol that all analyzer modules conform to.

## Declaration

```swift
protocol SpeechModule : AnyObject, Sendable
```

## Topics

### Checking audio format support

- [availableCompatibleAudioFormats](speechmodule/availablecompatibleaudioformats.md): The audio formats that this module is able to analyze, given its configuration.

### Getting results

- [results](speechmodule/results-swift.property.md): An asynchronous sequence containing this module’s analysis results. Results are added to the sequence as they are created.
- [Result](speechmodule/result.md)
- [Results](speechmodule/results-swift.associatedtype.md)

## Relationships

### Inherits From

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

### Inherited By

- [LocaleDependentSpeechModule](localedependentspeechmodule.md)

### Conforming Types

- [DictationTranscriber](dictationtranscriber.md)
- [SpeechDetector](speechdetector.md)
- [SpeechTranscriber](speechtranscriber.md)

## See Also

### Modules

- [SpeechTranscriber](speechtranscriber.md): A speech-to-text transcription module that’s appropriate for normal conversation and general purposes.
- [DictationTranscriber](dictationtranscriber.md): A speech-to-text transcription module that’s similar to system dictation features and compatible with older devices.
- [SpeechDetector](speechdetector.md): A module that performs a voice activity detection (VAD) analysis.
- [LocaleDependentSpeechModule](localedependentspeechmodule.md): A module that requires locale-specific assets.
