> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/languagemodelexecutorgenerationchannel](https://developer.apple.com/documentation/foundationmodels/languagemodelexecutorgenerationchannel)

# LanguageModelExecutorGenerationChannel

**Framework:** Foundation Models  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A type you use to send model output deltas and updates to the framework.

## Declaration

```swift
struct LanguageModelExecutorGenerationChannel
```

<a id="overview"></a>

## Overview

Use this to stream text as your model produces it. You can also use the channel to report metadata and usage that helps developers track what’s happening, like when you want to report model details and token usage updates:

```swift
func respond(
    to request: LanguageModelExecutorGenerationRequest,
    model: MyLanguageModel,
    streamingInto channel: LanguageModelExecutorGenerationChannel
) async throws {

    let entryID = UUID().uuidString

    // Calculate your total and cached tokens counts for the input.
    let totalTokens = 0
    let cachedTokens = 0

    // Send model identification.
    await channel.send(.response(entryID: entryID, action: .updateMetadata([
        "modelID": "my-model-2026-06-08",
        "requestID": request.id.uuidString
    ])))

    // Report prompt token usage upfront.
    await channel.send(.response(
        entryID: entryID,
        action: .updateUsage(
            input: .init(
                totalTokenCount: totalTokens,
                cachedTokenCount: cachedTokens
            ),
            output: .init(
                totalTokenCount: 0,
                reasoningTokenCount: 0
            )
        )
    ))
}
```

## Topics

### Creating a channel instance

- [init()](languagemodelexecutorgenerationchannel/init%28%29.md): Creates a generation channel instance.

### Sending an event

- [send(\_:)](languagemodelexecutorgenerationchannel/send%28__%29.md): Sends a generation event on the channel.
- [LanguageModelExecutorGenerationChannel.Event](languagemodelexecutorgenerationchannel/event.md): A generation event sent on a generation channel.

### Accessing the event types

- [LanguageModelExecutorGenerationChannel.Metadata](languagemodelexecutorgenerationchannel/metadata.md): Snapshot of an entry’s metadata dictionary.
- [LanguageModelExecutorGenerationChannel.Reasoning](languagemodelexecutorgenerationchannel/reasoning.md): A reasoning event.
- [LanguageModelExecutorGenerationChannel.ReasoningSignature](languagemodelexecutorgenerationchannel/reasoningsignature.md): Payload for a reasoning entry’s signature update.
- [LanguageModelExecutorGenerationChannel.TextFragment](languagemodelexecutorgenerationchannel/textfragment.md): Text appended to a streaming entry’s current text segment.
- [LanguageModelExecutorGenerationChannel.TextSegmentReplacement](languagemodelexecutorgenerationchannel/textsegmentreplacement.md): A replacement for a streaming entry’s current text segment.
- [LanguageModelExecutorGenerationChannel.Response](languagemodelexecutorgenerationchannel/response.md): A model-generated response event: text, segment replacements, citations, advisories, custom segments, metadata, or usage.
- [LanguageModelExecutorGenerationChannel.ToolCalls](languagemodelexecutorgenerationchannel/toolcalls.md): A tool-call lifecycle event, including per-call argument streaming, reasoning, metadata, usage, or retraction.
- [LanguageModelExecutorGenerationChannel.Usage](languagemodelexecutorgenerationchannel/usage.md): Snapshot of an entry’s token totals.

## Relationships

### Conforms To

- [AsyncSequence](https://developer.apple.com/documentation/swift/asyncsequence)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Custom language model provider

- [Running a Core AI model in a Foundation Models session](running-a-core-ai-model-in-a-foundation-models-session.md): Send requests on device to an open source model you export with Core AI to get a consistent API experience.
- [Optimizing key-value caching in language model sessions](optimizing-key-value-caching-in-language-model-sessions.md): Prevent repeated token processing by preserving the cached state across turns.
- [LanguageModel](languagemodel.md): A protocol that you use to interface with a model.
- [LanguageModelCapabilities](languagemodelcapabilities.md): A set of capabilities that a language model provides.
- [LanguageModelExecutor](languagemodelexecutor.md): A protocol that defines the interface for responding to session requests.
- [LanguageModelExecutorGenerationRequest](languagemodelexecutorgenerationrequest.md): A type that contains the details for a generation request.
