> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/contextoptions](https://developer.apple.com/documentation/foundationmodels/contextoptions)

# ContextOptions

**Framework:** Foundation Models  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Options that configure details that should appear in the prompt.

## Declaration

```swift
struct ContextOptions
```

## Mentioned In

- [Adding server-side intelligence with Private Cloud Compute](adding-server-side-intelligence-with-private-cloud-compute.md)

<a id="overview"></a>

## Overview

Create a [ContextOptions](contextoptions.md) structure when you need to bias the model’s behavior by adjusting how the model receives your prompt.

## Topics

### Creating context options

- [init(includeSchemaInPrompt:reasoningLevel:)](contextoptions/init%28includeschemainprompt_reasoninglevel_%29.md): Creates options that control how the model is prompted.

### Configuring the reasoning level

- [reasoningLevel](contextoptions/reasoninglevel-swift.property.md): Controls the amount of reasoning that the model is allowed to output before producing a response.
- [ContextOptions.ReasoningLevel](contextoptions/reasoninglevel-swift.enum.md): Controls the amount of reasoning that the model is allowed to output before producing a response.

### Including the schema

- [includeSchemaInPrompt](contextoptions/includeschemainprompt.md): A Boolean value that indicates whether to inject the schema into the prompt to bias the model.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Sessions and prompts

- [Prompting an on-device foundation model](prompting-an-on-device-foundation-model.md): Tailor your prompts to get effective results from an on-device model.
- [Managing the context window](managing-the-context-window.md): Optimize your app’s token usage when prompting a model with the Foundation Models framework.
- [Updating prompts for new model versions](updating-prompts-for-new-model-versions.md): Manage the prompts your app uses by versioning them to make the most out of model improvements.
- [LanguageModelSession](languagemodelsession.md): An object that represents a session that interacts with a language model.
- [Instructions](instructions.md): Details you provide that define the model’s intended behavior on prompts.
- [Prompt](prompt.md): A prompt from a person to the model.
- [GenerationOptions](generationoptions.md): Options that control how the model generates its response to a prompt.
