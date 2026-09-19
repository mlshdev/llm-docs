> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/languagemodelsession/generationerror/refusal/explanationstream

# explanationStream

**Framework:** Foundation Models  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

A stream containing an explanation about why the model refused to respond.

## Declaration

```swift
var explanationStream: LanguageModelSession.ResponseStream<String> { get }
```

## See Also

### Getting the explanation

- [explanation](explanation.md): An explanation for why the model refused to respond.
