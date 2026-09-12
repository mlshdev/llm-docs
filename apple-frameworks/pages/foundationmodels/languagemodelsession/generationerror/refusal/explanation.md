> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/languagemodelsession/generationerror/refusal/explanation](https://developer.apple.com/documentation/foundationmodels/languagemodelsession/generationerror/refusal/explanation)

# explanation

**Framework:** Foundation Models  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

An explanation for why the model refused to respond.

## Declaration

```swift
nonisolated(nonsending) var explanation: LanguageModelSession.Response<String> { get async throws }
```

## See Also

### Getting the explanation

- [explanationStream](explanationstream.md): A stream containing an explanation about why the model refused to respond.
