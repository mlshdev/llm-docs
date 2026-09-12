> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/languagemodelsession](https://developer.apple.com/documentation/foundationmodels/languagemodelsession)

# LanguageModelSession

**Framework:** Foundation Models  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 27.0+

An object that represents a session that interacts with a language model.

## Declaration

```swift
final class LanguageModelSession
```

## Mentioned In

- [Composing dynamic sessions with instructions and profiles](composing-dynamic-sessions-with-instructions-and-profiles.md)
- [Generating content and performing tasks with Foundation Models](generating-content-and-performing-tasks-with-foundation-models.md)
- [Adding server-side intelligence with Private Cloud Compute](adding-server-side-intelligence-with-private-cloud-compute.md)
- [Analyzing images with multimodal prompting](analyzing-images-with-multimodal-prompting.md)
- [Categorizing and organizing data with content tags](categorizing-and-organizing-data-with-content-tags.md)
- [Generating Swift data structures with guided generation](generating-swift-data-structures-with-guided-generation.md)
- [Improving the safety of generative model output](improving-the-safety-of-generative-model-output.md)
- [Managing the context window](managing-the-context-window.md)
- [Prompting an on-device foundation model](prompting-an-on-device-foundation-model.md)
- [Running a Core AI model in a Foundation Models session](running-a-core-ai-model-in-a-foundation-models-session.md)
- [Supporting languages and locales with Foundation Models](supporting-languages-and-locales-with-foundation-models.md)

<a id="overview"></a>

## Overview

A session is a single context that you use to generate content with, and maintains state between requests. You can reuse the existing instance or create a new one each time you call the model. When you create a session you can provide instructions that tells the model what its role is and provides guidance on how to respond.

```swift
let session = LanguageModelSession(instructions: """
    You are a motivational workout coach that provides quotes to inspire \
    and motivate athletes.
    """
)
let prompt = "Generate a motivational quote for my next workout."
let response = try await session.respond(to: prompt)
```

The framework records each call to the model in a [Transcript](transcript.md) that includes all prompts and responses. If your session exceeds the available context size, it throws [LanguageModelError.contextSizeExceeded(\_:)](languagemodelerror/contextsizeexceeded%28__%29.md). For more information on managing the context window size, see [Managing the context window](managing-the-context-window.md).

Use Instruments to analyze token consumption while your app is running and to look for opportunities to improve performance, like with [prewarm(promptPrefix:)](languagemodelsession/prewarm%28promptprefix_%29.md). For more information on Instruments, see [Analyzing the runtime performance of your Foundation Models app](analyzing-the-runtime-performance-of-your-foundation-models-app.md).

## Topics

### Creating a session

- [init(model:tools:instructions:)](languagemodelsession/init%28model_tools_instructions_%29.md): Creates a session in a blank slate state with an instructions builder.
- [init(model:tools:transcript:)](languagemodelsession/init%28model_tools_transcript_%29.md): Creates a session by rehydrating from a transcript.

### Creating a session with a dynamic profile

- [init(profile:history:)](languagemodelsession/init%28profile_history_%29.md): Creates a session with a profile.
- [init(model:dynamicInstructions:history:)](languagemodelsession/init%28model_dynamicinstructions_history_%29.md): Creates a session with dynamic instructions.
- [LanguageModelSession.DynamicProfile](languagemodelsession/dynamicprofile.md): A dynamic profile that contains one or more profiles.
- [LanguageModelSession.DynamicProfileModifier](languagemodelsession/dynamicprofilemodifier.md): A protocol for creating reusable wrappers around dynamic profile content.
- [LanguageModelSession.ConditionalDynamicProfile](languagemodelsession/conditionaldynamicprofile.md)
- [LanguageModelSession.DynamicProfileBuilder](languagemodelsession/dynamicprofilebuilder.md): A type that represents a dynamic profile builder.
- [LanguageModelSession.DynamicProfileModifierContent](languagemodelsession/dynamicprofilemodifiercontent.md)
- [LanguageModelSession.ModifiedDynamicProfile](languagemodelsession/modifieddynamicprofile.md)
- [LanguageModelSession.AnyDynamicProfile](languagemodelsession/anydynamicprofile.md)
- [LanguageModelSession.Profile](languagemodelsession/profile.md): A profile that contains dynamic instructions.

### Preloading the model

- [prewarm(promptPrefix:)](languagemodelsession/prewarm%28promptprefix_%29.md): Loads the resources required for this session into memory ahead of a request.

### Accessing session properties

- [properties](languagemodelsession/properties.md)

### Inspecting the accumulated usage

- [usage](languagemodelsession/usage-swift.property.md): The total accumulated usage across all responses generated by this session.
- [LanguageModelSession.Usage](languagemodelsession/usage-swift.struct.md): Information about how many tokens were used by a response.

### Configuring the transcript error handling policy

- [transcriptErrorHandlingPolicy](languagemodelsession/transcripterrorhandlingpolicy.md): The session’s policy for managing the transcript when errors occur.
- [TranscriptErrorHandlingPolicy](transcripterrorhandlingpolicy.md): Options for controlling how a language model session manages the transcript when errors occur.

### Generating a response

- [isResponding](languagemodelsession/isresponding.md): A Boolean value that indicates whether a response is being generated.
- [respond(options:prompt:)](languagemodelsession/respond%28options_prompt_%29.md): Produces a response to a prompt.
- [respond(generating:includeSchemaInPrompt:options:prompt:)](languagemodelsession/respond%28generating_includeschemainprompt_options_prompt_%29.md): Produces a generable object as a response to a prompt.
- [respond(schema:includeSchemaInPrompt:options:prompt:)](languagemodelsession/respond%28schema_includeschemainprompt_options_prompt_%29.md): Produces a generated content type as a response to a prompt and schema.
- [respond(to:options:)](languagemodelsession/respond%28to_options_%29.md): Produces a response to a prompt.
- [respond(to:generating:includeSchemaInPrompt:options:)](languagemodelsession/respond%28to_generating_includeschemainprompt_options_%29.md): Produces a generable object as a response to a prompt.
- [respond(to:schema:includeSchemaInPrompt:options:)](languagemodelsession/respond%28to_schema_includeschemainprompt_options_%29.md): Produces a generated content type as a response to a prompt and schema.
- [LanguageModelSession.Response](languagemodelsession/response.md): A structure that stores the output of a response call.

### Generating a response with metadata

- [respond(options:contextOptions:metadata:prompt:)](languagemodelsession/respond%28options_contextoptions_metadata_prompt_%29.md): Produces a response to a prompt.
- [respond(generating:options:contextOptions:metadata:prompt:)](languagemodelsession/respond%28generating_options_contextoptions_metadata_prompt_%29.md): Produces a generable object as a response to a prompt.
- [respond(schema:options:contextOptions:metadata:prompt:)](languagemodelsession/respond%28schema_options_contextoptions_metadata_prompt_%29.md): Produces a generated content type as a response to a prompt and schema.
- [respond(to:options:contextOptions:metadata:)](languagemodelsession/respond%28to_options_contextoptions_metadata_%29.md): Produces a response to a prompt.
- [respond(to:generating:options:contextOptions:metadata:)](languagemodelsession/respond%28to_generating_options_contextoptions_metadata_%29.md): Produces a generable object as a response to a prompt.
- [respond(to:schema:options:contextOptions:metadata:)](languagemodelsession/respond%28to_schema_options_contextoptions_metadata_%29.md): Produces a generated content type as a response to a prompt and schema.

### Streaming a response

- [streamResponse(options:prompt:)](languagemodelsession/streamresponse%28options_prompt_%29.md): Produces a response stream to a prompt.
- [streamResponse(generating:includeSchemaInPrompt:options:prompt:)](languagemodelsession/streamresponse%28generating_includeschemainprompt_options_prompt_%29.md): Produces a response stream to a prompt.
- [streamResponse(schema:includeSchemaInPrompt:options:prompt:)](languagemodelsession/streamresponse%28schema_includeschemainprompt_options_prompt_%29.md): Produces a response stream to a prompt and schema.
- [streamResponse(to:options:)](languagemodelsession/streamresponse%28to_options_%29.md): Produces a response stream to a prompt.
- [streamResponse(to:generating:includeSchemaInPrompt:options:)](languagemodelsession/streamresponse%28to_generating_includeschemainprompt_options_%29.md): Produces a response stream to a prompt.
- [streamResponse(to:schema:includeSchemaInPrompt:options:)](languagemodelsession/streamresponse%28to_schema_includeschemainprompt_options_%29.md): Produces a response stream to a prompt and schema.
- [LanguageModelSession.ResponseStream](languagemodelsession/responsestream.md): An async sequence of snapshots of partially generated content.

### Streaming a response with metadata

- [streamResponse(options:contextOptions:metadata:prompt:)](languagemodelsession/streamresponse%28options_contextoptions_metadata_prompt_%29.md): Produces a response stream to a prompt.
- [streamResponse(generating:options:contextOptions:metadata:prompt:)](languagemodelsession/streamresponse%28generating_options_contextoptions_metadata_prompt_%29.md): Produces a response stream to a prompt.
- [streamResponse(schema:options:contextOptions:metadata:prompt:)](languagemodelsession/streamresponse%28schema_options_contextoptions_metadata_prompt_%29.md): Produces a response stream to a prompt and schema.
- [streamResponse(to:options:contextOptions:metadata:)](languagemodelsession/streamresponse%28to_options_contextoptions_metadata_%29.md): Produces a response stream to a prompt.
- [streamResponse(to:generating:options:contextOptions:metadata:)](languagemodelsession/streamresponse%28to_generating_options_contextoptions_metadata_%29.md): Produces a response stream to a prompt.
- [streamResponse(to:schema:options:contextOptions:metadata:)](languagemodelsession/streamresponse%28to_schema_options_contextoptions_metadata_%29.md): Produces a response stream to a prompt and schema.

### Accessing the transcript

- [transcript](languagemodelsession/transcript.md): A full history of interactions, including user inputs and model responses.

### Generating feedback

- [logFeedbackAttachment(sentiment:issues:desiredOutput:)](languagemodelsession/logfeedbackattachment%28sentiment_issues_desiredoutput_%29.md): Logs and serializes a feedback attachment that can be submitted to Apple.
- [logFeedbackAttachment(sentiment:issues:desiredResponseContent:)](languagemodelsession/logfeedbackattachment%28sentiment_issues_desiredresponsecontent_%29.md)
- [logFeedbackAttachment(sentiment:issues:desiredResponseText:)](languagemodelsession/logfeedbackattachment%28sentiment_issues_desiredresponsetext_%29.md)
- [LanguageModelFeedback](languagemodelfeedback.md): Feedback appropriate for logging or attaching to Feedback Assistant.

### Session properties

- [LanguageModelSession.SessionProperty](languagemodelsession/sessionproperty.md): A property wrapper that provides access to properties from within profiles, dynamic instructions, and tools.

### Errors

- [LanguageModelSession.Error](languagemodelsession/error.md): A failure caused by incorrect use of a language model session.
- [LanguageModelSession.ToolCallError](languagemodelsession/toolcallerror.md): An error that occurs while a language model is calling a tool.
- [LanguageModelSession.GenerationError](languagemodelsession/generationerror.md): Deprecated. An error that may occur while generating a response.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Observable](https://developer.apple.com/documentation/observation/observable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Sessions and prompts

- [Prompting an on-device foundation model](prompting-an-on-device-foundation-model.md): Tailor your prompts to get effective results from an on-device model.
- [Managing the context window](managing-the-context-window.md): Optimize your app’s token usage when prompting a model with the Foundation Models framework.
- [Updating prompts for new model versions](updating-prompts-for-new-model-versions.md): Manage the prompts your app uses by versioning them to make the most out of model improvements.
- [Instructions](instructions.md): Details you provide that define the model’s intended behavior on prompts.
- [Prompt](prompt.md): A prompt from a person to the model.
- [GenerationOptions](generationoptions.md): Options that control how the model generates its response to a prompt.
- [ContextOptions](contextoptions.md): Options that configure details that should appear in the prompt.
