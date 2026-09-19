> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/speech/dictationtranscriber/transcriptionoption/emoji

# DictationTranscriber.TranscriptionOption.emoji

**Framework:** Speech  
**Kind:** Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Transcribes named emoji as emoji.

## Declaration

```swift
case emoji
```

<a id="discussion"></a>

## Discussion

If included, the spoken phrase “smiling emoji” would be transcribed as “🙂”.

## See Also

### Transcription options

- [DictationTranscriber.TranscriptionOption.etiquetteReplacements](etiquettereplacements.md): Replaces certain words and phrases with a redacted form.
- [DictationTranscriber.TranscriptionOption.punctuation](punctuation.md): Automatically punctuates the transcription.
