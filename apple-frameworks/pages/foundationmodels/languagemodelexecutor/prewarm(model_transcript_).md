> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/languagemodelexecutor/prewarm(model:transcript:)](https://developer.apple.com/documentation/foundationmodels/languagemodelexecutor/prewarm(model:transcript:))

# prewarm(model:transcript:)

**Framework:** Foundation Models  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Loads assets into memory or pre-fills caches ahead of a request.

## Declaration

```swift
func prewarm(model: Self.Model, transcript: Transcript)
```

<a id="discussion"></a>

## Discussion

> **Note**

> The default implementation is a no-op.

## Default Implementations

### LanguageModelExecutor Implementations

- [prewarm(model:transcript:)](prewarm%28model_transcript_%29-9bd8h.md): Loads assets into memory or pre-fills caches ahead of a request.

## See Also

### Prewarming the model

- [Model](model.md): The model type this executor processes requests for.
