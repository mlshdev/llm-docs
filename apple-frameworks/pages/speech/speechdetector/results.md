> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/speechdetector/results](https://developer.apple.com/documentation/speech/speechdetector/results)

# results

**Framework:** Speech  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

The asynchronous sequence of speech detection results.

## Declaration

```swift
final var results: some Sendable & AsyncSequence<SpeechDetector.Result, any Error> { get }
```

<a id="discussion"></a>

## Discussion

This sequence may throw an error, but will otherwise remain empty.

Accessing this property does not create a new sequence.

## See Also

### Getting results

- [SpeechDetector.Result](result.md): A result from the speech detector. Please note, these must be enabled via [init(detectionOptions:reportResults:)](init%28detectionoptions_reportresults_%29.md) and currently only support error handling from the VAD model.
