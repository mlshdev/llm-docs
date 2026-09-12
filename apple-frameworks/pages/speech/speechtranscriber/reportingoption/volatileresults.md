> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/speechtranscriber/reportingoption/volatileresults](https://developer.apple.com/documentation/speech/speechtranscriber/reportingoption/volatileresults)

# SpeechTranscriber.ReportingOption.volatileResults

**Framework:** Speech  
**Kind:** Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

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

- [SpeechTranscriber.ReportingOption.alternativeTranscriptions](alternativetranscriptions.md): Includes alternative transcriptions in addition to the most likely transcription.
- [SpeechTranscriber.ReportingOption.fastResults](fastresults.md): Biases the transcriber towards responsiveness, yielding faster but also less accurate results.
