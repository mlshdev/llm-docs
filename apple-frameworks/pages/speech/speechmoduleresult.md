> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/speechmoduleresult](https://developer.apple.com/documentation/speech/speechmoduleresult)

# SpeechModuleResult

**Framework:** Speech  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Protocol that all module results conform to.

## Declaration

```swift
protocol SpeechModuleResult
```

## Topics

### Getting audio range

- [range](speechmoduleresult/range.md): The audio input range that this result applies to.

### Getting finalization state

- [isFinal](speechmoduleresult/isfinal.md): Whether this result is final at the time it is produced.
- [resultsFinalizationTime](speechmoduleresult/resultsfinalizationtime.md): The audio input time up to which results from this module have been finalized (after this result). The module’s results are final up to but not including this time.

## Relationships

### Conforming Types

- [DictationTranscriber.Result](dictationtranscriber/result.md)
- [SpeechDetector.Result](speechdetector/result.md)
- [SpeechTranscriber.Result](speechtranscriber/result.md)

## See Also

### Input and output

- [AnalyzerInput](analyzerinput.md): Time-coded audio data.
