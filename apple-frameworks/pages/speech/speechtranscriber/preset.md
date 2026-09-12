> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/speechtranscriber/preset](https://developer.apple.com/documentation/speech/speechtranscriber/preset)

# SpeechTranscriber.Preset

**Framework:** Speech  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Predefined transcriber configurations.

## Declaration

```swift
struct Preset
```

<a id="overview"></a>

## Overview

You can configure a transcriber with a preset, or modify the values of a preset’s properties and configure a transcriber with the modified values. You can also create your own presets by extending this type.

It is not necessary to use a preset at all; you can also use the transcriber’s designated initializer to completely customize its configuration.

This example configures a transcriber according to the `timeIndexedTranscriptionWithAlternatives` preset, but adds etiquette filtering and removes alternative transcriptions:

```swift
let preset = SpeechTranscriber.Preset.timeIndexedTranscriptionWithAlternatives
let transcriber = SpeechTranscriber(
    locale: Locale.current,
    transcriptionOptions: preset.transcriptionOptions.union([.etiquetteReplacements])
    reportingOptions: preset.reportingOptions.subtracting([.alternativeTranscriptions])
    attributeOptions: preset.attributeOptions
)
```

This table lists the presets and their configurations:

| Preset | [volatileResults](reportingoption/volatileresults.md) | [fastResults](reportingoption/fastresults.md) | [alternativeTranscriptions](reportingoption/alternativetranscriptions.md) | [audioTimeRange](resultattributeoption/audiotimerange.md) |
| --- | --- | --- | --- | --- |
| `transcription` | No | No | No | No |
| `transcriptionWithAlternatives` | No | No | **Yes** | No |
| `timeIndexedTranscriptionWithAlternatives` | No | No | **Yes** | **Yes** |
| `progressiveTranscription` | **Yes** | **Yes** | No | No |
| `timeIndexedProgressiveTranscription` | **Yes** | **Yes** | No | **Yes** |

## Topics

### Standard presets

- [transcription](preset/transcription.md): Configuration for basic, accurate transcription.
- [transcriptionWithAlternatives](preset/transcriptionwithalternatives.md): Configuration for transcription with editing suggestions.
- [timeIndexedTranscriptionWithAlternatives](preset/timeindexedtranscriptionwithalternatives.md): Configuration for transcription with editing suggestions, cross-referenced to source audio.
- [progressiveTranscription](preset/progressivetranscription.md): Configuration for immediate transcription of live audio.
- [timeIndexedProgressiveTranscription](preset/timeindexedprogressivetranscription.md): Configuration for immediate transcription of live audio, cross-referenced to stream time-codes.

### Creating a preset

- [init(transcriptionOptions:reportingOptions:attributeOptions:)](preset/init%28transcriptionoptions_reportingoptions_attributeoptions_%29.md): Creates a preset.

### Getting preset properties

- [attributeOptions](preset/attributeoptions.md): Options relating to the attributes of the transcription appropriate for this preset.
- [reportingOptions](preset/reportingoptions.md): Options relating to the transcriber’s result delivery appropriate for this preset.
- [transcriptionOptions](preset/transcriptionoptions.md): Options relating to the text of the transcription appropriate for this preset.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating a transcriber

- [init(locale:preset:)](init%28locale_preset_%29.md): Creates a general-purpose transcriber according to a preset.
- [init(locale:transcriptionOptions:reportingOptions:attributeOptions:)](init%28locale_transcriptionoptions_reportingoptions_attributeoptions_%29.md): Creates a general-purpose transcriber.
