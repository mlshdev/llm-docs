> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/languagemodelcapabilities](https://developer.apple.com/documentation/foundationmodels/languagemodelcapabilities)

# LanguageModelCapabilities

**Framework:** Foundation Models  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A set of capabilities that a language model provides.

## Declaration

```swift
struct LanguageModelCapabilities
```

<a id="overview"></a>

## Overview

Use this to declare what your model can do, like tool calling and guided generation:

```swift
struct MyLanguageModel: LanguageModel {
    var capabilities: LanguageModelCapabilities {
        LanguageModelCapabilities([
            .toolCalling,
            .guidedGeneration,
            .reasoning
        ])
    }
}
```

Inspect [capabilities](languagemodel/capabilities.md) ahead of time to detect what the model supports before performing the request:

```swift
// Before prompting the model with a generable type, check whether it
// supports guided generation.
if selectedModel.capabilities.contains(.guidedGeneration) {
    let response = try await session.respond(to: "...", generating: MySchema.self)
}
```

When a model doesn’t support a capability, the framework can refuse to dispatch incompatible requests to the executor and throw an [LanguageModelError.unsupportedCapability(\_:)](languagemodelerror/unsupportedcapability%28__%29.md) error instead.

## Topics

### Creating an instance

- [init(\_:)](languagemodelcapabilities/init%28__%29.md): Creates a capabilities instance from a list of supported capabilities.
- [LanguageModelCapabilities.Capability](languagemodelcapabilities/capability.md): A capability that a given language model may or may not have.

### Inspecting model capabilities

- [contains(\_:)](languagemodelcapabilities/contains%28__%29.md): Returns a Boolean value that indicates whether the specified capability is supported.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Custom language model provider

- [Running a Core AI model in a Foundation Models session](running-a-core-ai-model-in-a-foundation-models-session.md): Send requests on device to an open source model you export with Core AI to get a consistent API experience.
- [Optimizing key-value caching in language model sessions](optimizing-key-value-caching-in-language-model-sessions.md): Prevent repeated token processing by preserving the cached state across turns.
- [LanguageModel](languagemodel.md): A protocol that you use to interface with a model.
- [LanguageModelExecutor](languagemodelexecutor.md): A protocol that defines the interface for responding to session requests.
- [LanguageModelExecutorGenerationChannel](languagemodelexecutorgenerationchannel.md): A type you use to send model output deltas and updates to the framework.
- [LanguageModelExecutorGenerationRequest](languagemodelexecutorgenerationrequest.md): A type that contains the details for a generation request.
