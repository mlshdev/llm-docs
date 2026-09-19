> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/speech/dictationtranscriber/preset/contenthints

# contentHints

**Framework:** Speech  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Expected characteristics of the spoken audio appropriate for this preset.

## Declaration

```swift
var contentHints: Set<DictationTranscriber.ContentHint>
```

## See Also

### Getting preset properties

- [attributeOptions](attributeoptions.md): Options relating to the attributes of the transcription appropriate for this preset.
- [reportingOptions](reportingoptions.md): Options relating to the transcriber’s result delivery appropriate for this preset.
- [transcriptionOptions](transcriptionoptions.md): Options relating to the text of the transcription appropriate for this preset.
