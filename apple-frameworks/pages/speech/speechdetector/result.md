> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/speechdetector/result](https://developer.apple.com/documentation/speech/speechdetector/result)

# SpeechDetector.Result

**Framework:** Speech  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

A result from the speech detector. Please note, these must be enabled via [init(detectionOptions:reportResults:)](init%28detectionoptions_reportresults_%29.md) and currently only support error handling from the VAD model.

## Declaration

```swift
struct Result
```

## Topics

### Getting detection results

- [speechDetected](result/speechdetected.md)

### Getting audio range

- [range](../speechmoduleresult/range.md): The audio input range that this result applies to.

### Getting finalization state

- [isFinal](../speechmoduleresult/isfinal.md): Whether this result is final at the time it is produced.
- [resultsFinalizationTime](../speechmoduleresult/resultsfinalizationtime.md): The audio input time up to which results from this module have been finalized (after this result). The module’s results are final up to but not including this time.

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SpeechModuleResult](../speechmoduleresult.md)

## See Also

### Getting results

- [results](results.md): The asynchronous sequence of speech detection results.
