> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/speech/speechtranscriber/preset/progressivetranscription

# progressiveTranscription

**Framework:** Speech  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Configuration for immediate transcription of live audio.

## Declaration

```swift
static let progressiveTranscription: SpeechTranscriber.Preset
```

## See Also

### Standard presets

- [transcription](transcription.md): Configuration for basic, accurate transcription.
- [transcriptionWithAlternatives](transcriptionwithalternatives.md): Configuration for transcription with editing suggestions.
- [timeIndexedTranscriptionWithAlternatives](timeindexedtranscriptionwithalternatives.md): Configuration for transcription with editing suggestions, cross-referenced to source audio.
- [timeIndexedProgressiveTranscription](timeindexedprogressivetranscription.md): Configuration for immediate transcription of live audio, cross-referenced to stream time-codes.
