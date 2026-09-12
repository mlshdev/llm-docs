> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/languagemodelerror/unsupportedtranscriptcontent(_:)](https://developer.apple.com/documentation/foundationmodels/languagemodelerror/unsupportedtranscriptcontent(_:))

# LanguageModelError.unsupportedTranscriptContent(\_:)

**Framework:** Foundation Models  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The prompt contains content that the model cannot process.

## Declaration

```swift
case unsupportedTranscriptContent(LanguageModelError.UnsupportedTranscriptContent)
```

<a id="discussion"></a>

## Discussion

This failure occurs when you include unsupported file types, corrupted data, or custom content formats that the model doesn’t recognize.

## See Also

### Transcript content unsupported error

- [LanguageModelError.UnsupportedTranscriptContent](unsupportedtranscriptcontent.md): Information about unsupported prompt content.
