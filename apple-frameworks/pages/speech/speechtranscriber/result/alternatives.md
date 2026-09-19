> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/speech/speechtranscriber/result/alternatives

# alternatives

**Framework:** Speech  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

All the alternative interpretations of the audio in this range. The interpretations are in descending order of likelihood.

## Declaration

```swift
let alternatives: [AttributedString]
```

<a id="discussion"></a>

## Discussion

The array will not be empty, but may contain an empty string, indicating an alternative where the audio has no transcription.

To receive alternatives, set the [SpeechTranscriber.ReportingOption.alternativeTranscriptions](../reportingoption/alternativetranscriptions.md) option.

## See Also

### Getting transcriptions

- [text](text.md): The most likely interpretation of the audio in this range.
