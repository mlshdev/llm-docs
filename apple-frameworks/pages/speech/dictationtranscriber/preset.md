> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/dictationtranscriber/preset](https://developer.apple.com/documentation/speech/dictationtranscriber/preset)

# DictationTranscriber.Preset

**Framework:** Speech  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Predefined transcriber configurations.

## Declaration

```swift
struct Preset
```

<a id="overview"></a>

## Overview

You can configure a transcriber with a preset, or modify the values of a preset’s properties and configure a transcriber with the modified values. You can also create your own presets by extending this type.

It is not necessary to use a preset at all; you can also use the transcriber’s designated initializer to completely customize its configuration.

This example configures a transcriber according to the `shortDictation` preset, but adds emoji recognition:

```swift
let preset = DictationTranscriber.Preset.shortDictation
let transcriber = DictationTranscriber(
    locale: Locale.current,
    contentHints: preset.contentHints,
    transcriptionOptions: preset.transcriptionOptions.union([.emoji])
    reportingOptions: preset.reportingOptions
    attributeOptions: preset.attributeOptions
)
```

This table lists the presets and their configurations:

| Preset | [shortForm](contenthint/shortform.md) | [volatileResults](reportingoption/volatileresults.md) | [frequentFinalization](reportingoption/frequentfinalization.md) | [audioTimeRange](resultattributeoption/audiotimerange.md) | [punctuation](transcriptionoption/punctuation.md) |
| --- | --- | --- | --- | --- | --- |
| `phrase` | **Yes** | No | No | No | No |
| `shortDictation` | **Yes** | No | No | No | **Yes** |
| `progressiveShortDictation` | **Yes** | **Yes** | **Yes** | No | **Yes** |
| `longDictation` | No | No | No | No | **Yes** |
| `progressiveLongDictation` | No | **Yes** | No | No | **Yes** |
| `timeIndexedLongDictation` | No | No | No | **Yes** | **Yes** |

## Topics

### Standard presets

- [phrase](preset/phrase.md): Configuration for a short phrase without punctuation.
- [shortDictation](preset/shortdictation.md): Configuration for about a minute of audio.
- [progressiveShortDictation](preset/progressiveshortdictation.md): Configuration for immediate transcription of about a minute of live audio.
- [longDictation](preset/longdictation.md): Configuration for more than a minute of audio.
- [progressiveLongDictation](preset/progressivelongdictation.md): Configuration for immediate transcription of lengthy audio.
- [timeIndexedLongDictation](preset/timeindexedlongdictation.md): Configure for lengthy audio, cross-referencing words to time-codes.

### Creating a preset

- [init(contentHints:transcriptionOptions:reportingOptions:attributeOptions:)](preset/init%28contenthints_transcriptionoptions_reportingoptions_attributeoptions_%29.md): Creates a preset.

### Getting preset properties

- [attributeOptions](preset/attributeoptions.md): Options relating to the attributes of the transcription appropriate for this preset.
- [contentHints](preset/contenthints.md): Expected characteristics of the spoken audio appropriate for this preset.
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

- [init(locale:preset:)](init%28locale_preset_%29.md): Creates a transcriber according to a preset.
- [init(locale:contentHints:transcriptionOptions:reportingOptions:attributeOptions:)](init%28locale_contenthints_transcriptionoptions_reportingoptions_attributeoptions_%29.md): Creates a transcriber.
