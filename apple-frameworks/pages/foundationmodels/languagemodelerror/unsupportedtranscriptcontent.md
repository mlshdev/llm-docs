> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/languagemodelerror/unsupportedtranscriptcontent

# LanguageModelError.UnsupportedTranscriptContent

**Framework:** Foundation Models  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Information about unsupported prompt content.

## Declaration

```swift
struct UnsupportedTranscriptContent
```

## Topics

### Creating an error instance

- [init(unsupportedContent:debugDescription:metadata:)](unsupportedtranscriptcontent/init%28unsupportedcontent_debugdescription_metadata_%29.md): Creates information describing transcript content the model can’t process.

### Inspecting unsupported transcript content errors

- [metadata](unsupportedtranscriptcontent/metadata.md): Additional information about the failure, keyed by name.
- [unsupportedContent](unsupportedtranscriptcontent/unsupportedcontent.md): The transcript entries that the model can’t process.
- [debugDescription](unsupportedtranscriptcontent/debugdescription.md): A debug description to help developers diagnose issues during development.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Transcript content unsupported error

- [LanguageModelError.unsupportedTranscriptContent(\_:)](unsupportedtranscriptcontent%28__%29.md): The prompt contains content that the model cannot process.
