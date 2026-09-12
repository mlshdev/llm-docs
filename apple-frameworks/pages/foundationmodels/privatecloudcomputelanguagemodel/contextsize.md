> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/privatecloudcomputelanguagemodel/contextsize](https://developer.apple.com/documentation/foundationmodels/privatecloudcomputelanguagemodel/contextsize)

# contextSize

**Framework:** Foundation Models  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The maximum context size in tokens supported by the model.

## Declaration

```swift
nonisolated(nonsending) final var contextSize: Int { get async throws }
```

<a id="discussion"></a>

## Discussion

The context size represents the total number of tokens that can be used in a single session, including both input prompts and generated responses.
