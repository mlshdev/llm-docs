> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/languagemodelexecutor/respond(to:model:streaminginto:)](https://developer.apple.com/documentation/foundationmodels/languagemodelexecutor/respond(to:model:streaminginto:))

# respond(to:model:streamingInto:)

**Framework:** Foundation Models  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates a response stream containing deltas.

## Declaration

```swift
nonisolated(nonsending) func respond(to request: LanguageModelExecutorGenerationRequest, model: Self.Model, streamingInto channel: LanguageModelExecutorGenerationChannel) async throws
```

## Parameters

- `request`: The generation request.
- `model`: The model instance for this request, providing live model state.
- `channel`: A channel used to send events.

<a id="discussion"></a>

## Discussion

> **Note**

> If the model declares that it does not have a given capability via [capabilities](../languagemodel/capabilities.md), then the system will automatically throw an error instead of invoking this method. You do not need to manually validate the request for any functionality captured by [LanguageModelCapabilities](../languagemodelcapabilities.md).
