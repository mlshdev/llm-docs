> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/speechanalyzer/start(inputaudiofile:finishafterfile:)](https://developer.apple.com/documentation/speech/speechanalyzer/start(inputaudiofile:finishafterfile:))

# start(inputAudioFile:finishAfterFile:)

**Framework:** Speech  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Starts analysis of an input sequence created from an audio file and returns immediately.

## Declaration

```swift
final func start(inputAudioFile audioFile: AVAudioFile, finishAfterFile: Bool = false) async throws
```

## Parameters

- `audioFile`: An AVAudioFile opened for reading.
- `finishAfterFile`: If `true`, the analysis will automatically finish after the audio file has been fully processed. Equivalent to calling [finalizeAndFinishThroughEndOfInput()](finalizeandfinishthroughendofinput%28%29.md).

<a id="discussion"></a>

## Discussion

This method stops the autonomous analysis of the previous input sequence. Any audio that hasn’t been consumed will be ignored but audio that has been consumed will continue to be analyzed. To ensure the previous sequence’s input is fully consumed, call [finalize(through:)](finalize%28through_%29.md) first.

## See Also

### Performing autonomous analysis

- [start(inputSequence:)](start%28inputsequence_%29.md): Starts analysis of an input sequence and returns immediately.
