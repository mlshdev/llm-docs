> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/languagemodelsession/responsestream/collect()

# collect()

**Framework:** Foundation Models  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 27.0+

Returns the result from a streaming response, after it completes.

## Declaration

```swift
nonisolated(nonsending) func collect() async throws -> sending LanguageModelSession.Response<Content>
```

<a id="discussion"></a>

## Discussion

If the streaming response was finished successfully before calling `collect()`, this method `Response` returns immediately.

If the streaming response was finished with an error before calling `collect()`, this method propagates that error.
