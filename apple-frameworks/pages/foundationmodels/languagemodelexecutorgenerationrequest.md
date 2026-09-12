> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/languagemodelexecutorgenerationrequest](https://developer.apple.com/documentation/foundationmodels/languagemodelexecutorgenerationrequest)

# LanguageModelExecutorGenerationRequest

**Framework:** Foundation Models  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A type that contains the details for a generation request.

## Declaration

```swift
struct LanguageModelExecutorGenerationRequest
```

<a id="overview"></a>

## Overview

A generation request is the input payload that [respond(to:model:streamingInto:)](languagemodelexecutor/respond%28to_model_streaminginto_%29.md) handles. It bundles everything the executor needs to translate a framework call into a backend request, like the conversation so far, what tools are available, and so on.

## Topics

### Creating a generation request

- [init(id:transcript:enabledTools:schema:generationOptions:contextOptions:metadata:)](languagemodelexecutorgenerationrequest/init%28id_transcript_enabledtools_schema_generationoptions_contextoptions_metadata_%29.md): Creates a generation request.

### Configuring a generation request

- [id](languagemodelexecutorgenerationrequest/id.md): A request id for logging and tracing purposes
- [metadata](languagemodelexecutorgenerationrequest/metadata.md): Metadata to attach to the request
- [contextOptions](languagemodelexecutorgenerationrequest/contextoptions.md): Settings that configure how the model is prompted
- [enabledToolDefinitions](languagemodelexecutorgenerationrequest/enabledtooldefinitions.md): The subset tool definitions that the model is allowed to call
- [generationOptions](languagemodelexecutorgenerationrequest/generationoptions.md): Generation options that control sampling behavior
- [schema](languagemodelexecutorgenerationrequest/schema.md): An optional schema dictating the required output format
- [transcript](languagemodelexecutorgenerationrequest/transcript.md): A transcript to generate the next entry for

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Custom language model provider

- [Running a Core AI model in a Foundation Models session](running-a-core-ai-model-in-a-foundation-models-session.md): Send requests on device to an open source model you export with Core AI to get a consistent API experience.
- [Optimizing key-value caching in language model sessions](optimizing-key-value-caching-in-language-model-sessions.md): Prevent repeated token processing by preserving the cached state across turns.
- [LanguageModel](languagemodel.md): A protocol that you use to interface with a model.
- [LanguageModelCapabilities](languagemodelcapabilities.md): A set of capabilities that a language model provides.
- [LanguageModelExecutor](languagemodelexecutor.md): A protocol that defines the interface for responding to session requests.
- [LanguageModelExecutorGenerationChannel](languagemodelexecutorgenerationchannel.md): A type you use to send model output deltas and updates to the framework.
