> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/speechanalyzer/preparetoanalyze(in:)](https://developer.apple.com/documentation/speech/speechanalyzer/preparetoanalyze(in:))

# prepareToAnalyze(in:)

**Framework:** Speech  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Prepares the analyzer to begin work with minimal startup delay.

## Declaration

```swift
final func prepareToAnalyze(in audioFormat: AVAudioFormat?) async throws
```

## Parameters

- `audioFormat`: An audio format describing the expected input. The analyzer will load assets appropriate for the given format. If `nil` or if the input is not in this format, the analyzer will reconfigure itself when it processes the actual audio.

<a id="discussion"></a>

## Discussion

The analyzer normally performs some configuration lazily as the first audio input becomes available. This method performs that work immediately to reduce or eliminate delays in analyzing the first audio input.

## See Also

### Improving responsiveness

- [prepareToAnalyze(in:withProgressReadyHandler:)](preparetoanalyze%28in_withprogressreadyhandler_%29.md): Prepares the analyzer to begin work with minimal startup delay, reporting the progress of that preparation.
