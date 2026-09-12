> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/dictationtranscriber/contenthint](https://developer.apple.com/documentation/speech/dictationtranscriber/contenthint)

# DictationTranscriber.ContentHint

**Framework:** Speech  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Expected characteristics of the spoken audio content and its delivery.

## Declaration

```swift
struct ContentHint
```

<a id="overview"></a>

## Overview

These hints optimize transcription, but do not preclude spoken audio with different characteristics.

## Topics

### Content hints

- [shortForm](contenthint/shortform.md): A processing hint indicating that the audio is only expected to be a minute or so long.
- [farField](contenthint/farfield.md): A processing hint indicating that the audio should be processed as if it were from a speaker far from the microphone.
- [customizedLanguage(modelConfiguration:)](contenthint/customizedlanguage%28modelconfiguration_%29.md): A hint specifying a custom language model applicable to the expected spoken audio content.
- [atypicalSpeech](contenthint/atypicalspeech.md): A processing hint indicating that the audio is from a speaker with a heavy accent, lisp, or other confounding factor.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring transcription

- [DictationTranscriber.ReportingOption](reportingoption.md): Options relating to the transcriber’s result delivery.
- [DictationTranscriber.ResultAttributeOption](resultattributeoption.md): Options relating to the attributes of the transcription.
- [DictationTranscriber.TranscriptionOption](transcriptionoption.md): Options relating to the text of the transcription.
