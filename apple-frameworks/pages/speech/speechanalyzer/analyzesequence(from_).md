> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/speechanalyzer/analyzesequence(from:)](https://developer.apple.com/documentation/speech/speechanalyzer/analyzesequence(from:))

# analyzeSequence(from:)

**Framework:** Speech  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Analyzes an input sequence created from an audio file, returning when the file has been read.

## Declaration

```swift
final func analyzeSequence(from audioFile: AVAudioFile) async throws -> CMTime?
```

## Parameters

- `audioFile`: An `AVAudioFile` opened for reading.

<a id="return-value"></a>

## Return Value

The time-code of the last audio sample of the input, or `nil` if the file was empty. You may use this value for the parameter of [finalizeAndFinish(through:)](finalizeandfinish%28through_%29.md) (or other methods).

<a id="discussion"></a>

## Discussion

When this method returns, the file will have been read, but the last of the audio may still be undergoing analysis. To wait for the analysis to complete, call another method such as [finalize(through:)](finalize%28through_%29.md) and await its return.

## See Also

### Performing analysis

- [analyzeSequence(\_:)](analyzesequence%28__%29.md): Analyzes an input sequence, returning when the sequence terminates.
