> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/dictationtranscriber/preset/init(contenthints:transcriptionoptions:reportingoptions:attributeoptions:)](https://developer.apple.com/documentation/speech/dictationtranscriber/preset/init(contenthints:transcriptionoptions:reportingoptions:attributeoptions:))

# init(contentHints:transcriptionOptions:reportingOptions:attributeOptions:)

**Framework:** Speech  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Creates a preset.

## Declaration

```swift
init(contentHints: Set<DictationTranscriber.ContentHint>, transcriptionOptions: Set<DictationTranscriber.TranscriptionOption>, reportingOptions: Set<DictationTranscriber.ReportingOption>, attributeOptions: Set<DictationTranscriber.ResultAttributeOption>)
```

## Parameters

- `contentHints`: A selection of expected characteristics of the spoken audio.
- `transcriptionOptions`: A selection of options relating to the text of the transcription.
- `reportingOptions`: A selection of options relating to the transcriber’s result delivery.
- `attributeOptions`: A selection of options relating to the attributes of the transcription.
