> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/dictationtranscriber/contenthint/atypicalspeech](https://developer.apple.com/documentation/speech/dictationtranscriber/contenthint/atypicalspeech)

# atypicalSpeech

**Framework:** Speech  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

A processing hint indicating that the audio is from a speaker with a heavy accent, lisp, or other confounding factor.

## Declaration

```swift
static let atypicalSpeech: DictationTranscriber.ContentHint
```

## See Also

### Content hints

- [shortForm](shortform.md): A processing hint indicating that the audio is only expected to be a minute or so long.
- [farField](farfield.md): A processing hint indicating that the audio should be processed as if it were from a speaker far from the microphone.
- [customizedLanguage(modelConfiguration:)](customizedlanguage%28modelconfiguration_%29.md): A hint specifying a custom language model applicable to the expected spoken audio content.
