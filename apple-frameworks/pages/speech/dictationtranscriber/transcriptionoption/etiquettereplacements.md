> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/dictationtranscriber/transcriptionoption/etiquettereplacements](https://developer.apple.com/documentation/speech/dictationtranscriber/transcriptionoption/etiquettereplacements)

# DictationTranscriber.TranscriptionOption.etiquetteReplacements

**Framework:** Speech  
**Kind:** Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Replaces certain words and phrases with a redacted form.

## Declaration

```swift
case etiquetteReplacements
```

<a id="discussion"></a>

## Discussion

If included, a phrase recognized as an expletive would be transcribed with asterisks.

## See Also

### Transcription options

- [DictationTranscriber.TranscriptionOption.emoji](emoji.md): Transcribes named emoji as emoji.
- [DictationTranscriber.TranscriptionOption.punctuation](punctuation.md): Automatically punctuates the transcription.
