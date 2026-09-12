> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/dictationtranscriber/reportingoption/volatileresults](https://developer.apple.com/documentation/speech/dictationtranscriber/reportingoption/volatileresults)

# DictationTranscriber.ReportingOption.volatileResults

**Framework:** Speech  
**Kind:** Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Provides tentative results for an audio range in addition to the finalized result.

## Declaration

```swift
case volatileResults
```

<a id="discussion"></a>

## Discussion

The transcriber will deliver several results for an audio range as it refines the transcription.

## See Also

### Reporting options

- [DictationTranscriber.ReportingOption.alternativeTranscriptions](alternativetranscriptions.md): Includes alternative transcriptions in addition to the most likely transcription.
- [DictationTranscriber.ReportingOption.frequentFinalization](frequentfinalization.md): Biases the transcriber towards responsiveness, resulting in more frequent but also less accurate finalized results.
