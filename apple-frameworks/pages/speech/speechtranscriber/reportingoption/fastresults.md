> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/speechtranscriber/reportingoption/fastresults](https://developer.apple.com/documentation/speech/speechtranscriber/reportingoption/fastresults)

# SpeechTranscriber.ReportingOption.fastResults

**Framework:** Speech  
**Kind:** Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Biases the transcriber towards responsiveness, yielding faster but also less accurate results.

## Declaration

```swift
case fastResults
```

<a id="discussion"></a>

## Discussion

If included, the transcriber reduces result latency by using a smaller “context window”.

## See Also

### Reporting options

- [SpeechTranscriber.ReportingOption.alternativeTranscriptions](alternativetranscriptions.md): Includes alternative transcriptions in addition to the most likely transcription.
- [SpeechTranscriber.ReportingOption.volatileResults](volatileresults.md): Provides tentative results for an audio range in addition to the finalized result.
