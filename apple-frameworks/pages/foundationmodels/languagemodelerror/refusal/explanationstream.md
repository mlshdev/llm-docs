> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/languagemodelerror/refusal/explanationstream

# explanationStream

**Framework:** Foundation Models  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The model’s explanation for why it refused to generate a response, delivered as it streams.

## Declaration

```swift
var explanationStream: LanguageModelSession.ResponseStream<String> { get }
```

## See Also

### Getting a refusal explanation

- [explanation](explanation.md): The model’s explanation for why it refused to generate a response.
