> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/generationoptions](https://developer.apple.com/documentation/foundationmodels/generationoptions)

# GenerationOptions

**Framework:** Foundation Models  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 27.0+

Options that control how the model generates its response to a prompt.

## Declaration

```swift
struct GenerationOptions
```

## Mentioned In

- [Generating content and performing tasks with Foundation Models](generating-content-and-performing-tasks-with-foundation-models.md)

<a id="overview"></a>

## Overview

Generation options determine the decoding strategy the framework uses to adjust the way the model chooses output tokens. When you interact with the model, it converts your input to a token sequence, and uses it to generate the response.

Only use [maximumResponseTokens](generationoptions/maximumresponsetokens.md) when you need to protect against unexpectedly verbose responses. Enforcing a strict token response limit can lead to the model producing malformed results or grammatically incorrect responses.

All input to the model contributes tokens to the context window of the [LanguageModelSession](languagemodelsession.md) — including the [Instructions](instructions.md), [Prompt](prompt.md), [Tool](tool.md), and [Generable](generable.md) types, and the model’s responses. If your session exceeds the available context size, it throws [LanguageModelError.contextSizeExceeded(\_:)](languagemodelerror/contextsizeexceeded%28__%29.md). For more information on managing the context window size, see [Managing the context window](managing-the-context-window.md).

## Topics

### Creating options

- [init(samplingMode:temperature:maximumResponseTokens:)](generationoptions/init%28samplingmode_temperature_maximumresponsetokens_%29.md)
- [init(samplingMode:temperature:maximumResponseTokens:toolCallingMode:)](generationoptions/init%28samplingmode_temperature_maximumresponsetokens_toolcallingmode_%29.md): Creates generation options that control token sampling behavior.
- [init(sampling:temperature:maximumResponseTokens:)](generationoptions/init%28sampling_temperature_maximumresponsetokens_%29.md): Deprecated. Creates generation options that control token sampling behavior.

### Configuring options

- [temperature](generationoptions/temperature.md): A value that influences the confidence of the model’s response.
- [sampling](generationoptions/sampling.md): Deprecated. A sampling strategy for how the model picks tokens when generating a response.
- [samplingMode](generationoptions/samplingmode-swift.property.md): A sampling strategy for how the model picks tokens when generating a response.
- [GenerationOptions.SamplingMode](generationoptions/samplingmode-swift.struct.md): A type that defines how values are sampled from a probability distribution.
- [toolCallingMode](generationoptions/toolcallingmode-swift.property.md): The tool calling requirements.
- [GenerationOptions.ToolCallingMode](generationoptions/toolcallingmode-swift.struct.md): A value you use to describe the model behavior when it comes to tool usage.
- [maximumResponseTokens](generationoptions/maximumresponsetokens.md): The maximum number of tokens the model is allowed to produce in its response.

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
- [ContextOptions](contextoptions.md): Options that configure details that should appear in the prompt.
