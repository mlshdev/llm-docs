> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/languagemodelerror/refusal/explanation

# explanation

**Framework:** Foundation Models  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The model’s explanation for why it refused to generate a response.

## Declaration

```swift
nonisolated(nonsending) var explanation: LanguageModelSession.Response<String> { get async throws }
```

## See Also

### Getting a refusal explanation

- [explanationStream](explanationstream.md): The model’s explanation for why it refused to generate a response, delivered as it streams.
