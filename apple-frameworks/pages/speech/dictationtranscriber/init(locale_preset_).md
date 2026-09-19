> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/speech/dictationtranscriber/init(locale:preset:)

# init(locale:preset:)

**Framework:** Speech  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Creates a transcriber according to a preset.

## Declaration

```swift
convenience init(locale: Locale, preset: DictationTranscriber.Preset)
```

## Parameters

- `locale`: A locale indicating a spoken and written language or script.
- `preset`: A structure that contains some transcriber options.

## See Also

### Creating a transcriber

- [init(locale:contentHints:transcriptionOptions:reportingOptions:attributeOptions:)](init%28locale_contenthints_transcriptionoptions_reportingoptions_attributeoptions_%29.md): Creates a transcriber.
- [DictationTranscriber.Preset](preset.md): Predefined transcriber configurations.
