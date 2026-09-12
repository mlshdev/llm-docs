> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/speechtranscriber/init(locale:transcriptionoptions:reportingoptions:attributeoptions:)](https://developer.apple.com/documentation/speech/speechtranscriber/init(locale:transcriptionoptions:reportingoptions:attributeoptions:))

# init(locale:transcriptionOptions:reportingOptions:attributeOptions:)

**Framework:** Speech  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Creates a general-purpose transcriber.

## Declaration

```swift
convenience init(locale: Locale, transcriptionOptions: Set<SpeechTranscriber.TranscriptionOption>, reportingOptions: Set<SpeechTranscriber.ReportingOption>, attributeOptions: Set<SpeechTranscriber.ResultAttributeOption>)
```

## Parameters

- `locale`: A locale indicating a spoken and written language or script.
- `transcriptionOptions`: A selection of options relating to the text of the transcription.
- `reportingOptions`: A selection of options relating to the transcriber’s result delivery.
- `attributeOptions`: A selection of options relating to the attributes of the transcription.

## See Also

### Creating a transcriber

- [init(locale:preset:)](init%28locale_preset_%29.md): Creates a general-purpose transcriber according to a preset.
- [SpeechTranscriber.Preset](preset.md): Predefined transcriber configurations.
