> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/speechanalyzer/preparetoanalyze(in:withprogressreadyhandler:)](https://developer.apple.com/documentation/speech/speechanalyzer/preparetoanalyze(in:withprogressreadyhandler:))

# prepareToAnalyze(in:withProgressReadyHandler:)

**Framework:** Speech  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Prepares the analyzer to begin work with minimal startup delay, reporting the progress of that preparation.

## Declaration

```swift
final func prepareToAnalyze(in audioFormat: AVAudioFormat?, withProgressReadyHandler progressReadyHandler: sending ((Progress) -> Void)?) async throws
```

## Parameters

- `audioFormat`: An audio format describing the expected input. The analyzer will load assets appropriate for the given format. If `nil` or if the input is not in this format, the analyzer will reconfigure itself when it processes the actual audio.
- `progressReadyHandler`: A closure that this method calls when progress reporting becomes available. The closure takes the following parameter:

  - **progress**: A `Progress` object that reports the progress of the preparation work.

## See Also

### Improving responsiveness

- [prepareToAnalyze(in:)](preparetoanalyze%28in_%29.md): Prepares the analyzer to begin work with minimal startup delay.
