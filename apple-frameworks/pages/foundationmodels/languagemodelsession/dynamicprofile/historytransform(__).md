> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/languagemodelsession/dynamicprofile/historytransform(_:)

# historyTransform(\_:)

**Framework:** Foundation Models  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Applies a transformation to the history prior to invoking the model.

## Declaration

```swift
func historyTransform(_ transform: @escaping ([Transcript.Entry]) -> [Transcript.Entry]) -> some LanguageModelSession.DynamicProfile

```

## Mentioned In

- [Composing dynamic sessions with instructions and profiles](../../composing-dynamic-sessions-with-instructions-and-profiles.md)
- [Optimizing key-value caching in language model sessions](../../optimizing-key-value-caching-in-language-model-sessions.md)
