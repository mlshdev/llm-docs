> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/speechtranscriber/results](https://developer.apple.com/documentation/speech/speechtranscriber/results)

# results

**Framework:** Speech  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

The asynchronous sequence of transcription results.

## Declaration

```swift
final var results: some Sendable & AsyncSequence<SpeechTranscriber.Result, any Error> { get }
```

<a id="discussion"></a>

## Discussion

Accessing this property does not create a new sequence.

## See Also

### Getting results

- [SpeechTranscriber.Result](result.md): A phrase or passage of transcribed speech. The phrases are sent in order.
