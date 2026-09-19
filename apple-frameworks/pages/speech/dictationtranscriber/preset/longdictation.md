> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/speech/dictationtranscriber/preset/longdictation

# longDictation

**Framework:** Speech  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Configuration for more than a minute of audio.

## Declaration

```swift
static let longDictation: DictationTranscriber.Preset
```

## See Also

### Standard presets

- [phrase](phrase.md): Configuration for a short phrase without punctuation.
- [shortDictation](shortdictation.md): Configuration for about a minute of audio.
- [progressiveShortDictation](progressiveshortdictation.md): Configuration for immediate transcription of about a minute of live audio.
- [progressiveLongDictation](progressivelongdictation.md): Configuration for immediate transcription of lengthy audio.
- [timeIndexedLongDictation](timeindexedlongdictation.md): Configure for lengthy audio, cross-referencing words to time-codes.
