> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/speechanalyzer/start(inputsequence:)](https://developer.apple.com/documentation/speech/speechanalyzer/start(inputsequence:))

# start(inputSequence:)

**Framework:** Speech  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Starts analysis of an input sequence and returns immediately.

## Declaration

```swift
final func start<InputSequence>(inputSequence: InputSequence) async throws where InputSequence : Sendable, InputSequence : AsyncSequence, InputSequence.Element == AnalyzerInput
```

## Parameters

- `inputSequence`: A new input sequence.

<a id="discussion"></a>

## Discussion

This method stops the autonomous analysis of the previous input sequence. Any audio that hasn’t been consumed will be ignored but audio that has been consumed will continue to be analyzed. To ensure the previous sequence’s input is fully consumed, call [finalize(through:)](finalize%28through_%29.md) first.

The previous input sequence may be rendered inoperable depending on its implementation.

## See Also

### Performing autonomous analysis

- [start(inputAudioFile:finishAfterFile:)](start%28inputaudiofile_finishafterfile_%29.md): Starts analysis of an input sequence created from an audio file and returns immediately.
