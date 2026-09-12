> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/speechtranscriber/reportingoption](https://developer.apple.com/documentation/speech/speechtranscriber/reportingoption)

# SpeechTranscriber.ReportingOption

**Framework:** Speech  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Options relating to the transcriber’s result delivery.

## Declaration

```swift
enum ReportingOption
```

## Topics

### Reporting options

- [SpeechTranscriber.ReportingOption.alternativeTranscriptions](reportingoption/alternativetranscriptions.md): Includes alternative transcriptions in addition to the most likely transcription.
- [SpeechTranscriber.ReportingOption.fastResults](reportingoption/fastresults.md): Biases the transcriber towards responsiveness, yielding faster but also less accurate results.
- [SpeechTranscriber.ReportingOption.volatileResults](reportingoption/volatileresults.md): Provides tentative results for an audio range in addition to the finalized result.

## Relationships

### Conforms To

- [CaseIterable](https://developer.apple.com/documentation/swift/caseiterable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring transcription

- [SpeechTranscriber.ResultAttributeOption](resultattributeoption.md): Options relating to the attributes of the transcription.
- [SpeechTranscriber.TranscriptionOption](transcriptionoption.md): Options relating to the text of the transcription.
