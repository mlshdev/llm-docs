> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels](https://developer.apple.com/documentation/foundationmodels)

# Foundation Models

**Framework:** Foundation Models  
**Kind:** Framework  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 27.0+

Perform tasks with models that specialize in language understanding, structured output, and tool calling.

## Mentioned In

- [Updating prompts for new model versions](foundationmodels/updating-prompts-for-new-model-versions.md)

<a id="overview"></a>

## Overview

The Foundation Models framework provides access to any large language model, like the on-device and Private Cloud Compute models designed for Apple Intelligence. These models help you perform intelligent tasks specific to your use case.

![An illustration that represents a foundation model.](https://developer.apple.com/images/com.apple.foundationmodels/foundation-models-framework-hero@2x.png)

On-device models excel at a diverse range of text generation tasks, like summarization, entity extraction, text and image understanding, refinement, dialog for games, generating creative content, and more. When you need more reasoning capabilities and context size, use Private Cloud Compute or any server model provider.

The dynamic profile API provides the flexibility to select the best model configuration for your task, and lets you build many useful abstractions, such as agents or skills.

Generate entire Swift data structures with guided generation. With the `@Generable` macro, you can define custom data structures and the framework provides strong guarantees that the model generates instances of your type.

Use [Tool](foundationmodels/tool.md) to create custom tools that the model can call to assist with handling your request. For example, the model can call a tool that searches a local or online database for information, or calls a service in your app.

To use Apple Foundation Models, people need a device that supports Apple Intelligence. For a list of supported devices, see [Apple Intelligence](https://www.apple.com/apple-intelligence/).

<a id="Whats-new"></a>

### What’s new

- [Adding server-side intelligence with Private Cloud Compute](foundationmodels/adding-server-side-intelligence-with-private-cloud-compute.md): Access a larger context window and stronger reasoning by routing session requests through Private Cloud Compute.
- [Composing dynamic sessions with instructions and profiles](foundationmodels/composing-dynamic-sessions-with-instructions-and-profiles.md): Adapt sessions dynamically at runtime by loading instructions and tools based on the state of your app.
- [Analyzing images with multimodal prompting](foundationmodels/analyzing-images-with-multimodal-prompting.md): Analyze and extract information from images by combining them with descriptive text prompts.
- [Build agentic app experiences with the Foundation Models framework](https://developer.apple.com/videos/play/wwdc2026/242): Learn how to take your intelligence features further with Foundation Models framework primitives for dynamic context and agentic workflows. We’ll walk through engineering shared context, setting up privacy boundaries, and managing key value caching. Discover how to orchestrate smooth handoffs between local and server models.
- [Bring an LLM provider to the Foundation Models framework](https://developer.apple.com/videos/play/wwdc2026/339): Extend the Foundation Models framework by implementing a LanguageModelExecutor for new models. Explore how to interface with the LanguageModelSession’s transcript, manage session state effectively, and optimize KV cache utilization. Find out how to support custom segment types and unlock advanced capabilities for your generative AI features.
- [Debug and profile agentic app experiences with Instruments](https://developer.apple.com/videos/play/wwdc2026/243): Explore the enhanced FoundationModels instrument in Xcode to inspect behavior and optimize the performance of agentic flows. Learn how to inspect prompts, analyze latency, and trace control flow in advanced use cases that leverage multiple LanguageModelSessions and profiles.

## Topics

### Essentials

- [Foundation Models updates](https://developer.apple.com/documentation/updates/foundationmodels): Learn about important changes to Foundation Models.
- [Generating content and performing tasks with Foundation Models](foundationmodels/generating-content-and-performing-tasks-with-foundation-models.md): Enhance the experience in your app by prompting an on-device large language model.
- [Adding intelligent app features with generative models](foundationmodels/adding-intelligent-app-features-with-generative-models.md): Build robust apps with guided generation and tool calling by adopting the Foundation Models framework.

### Sessions and prompts

- [Prompting an on-device foundation model](foundationmodels/prompting-an-on-device-foundation-model.md): Tailor your prompts to get effective results from an on-device model.
- [Managing the context window](foundationmodels/managing-the-context-window.md): Optimize your app’s token usage when prompting a model with the Foundation Models framework.
- [Updating prompts for new model versions](foundationmodels/updating-prompts-for-new-model-versions.md): Manage the prompts your app uses by versioning them to make the most out of model improvements.
- [LanguageModelSession](foundationmodels/languagemodelsession.md): An object that represents a session that interacts with a language model.
- [Instructions](foundationmodels/instructions.md): Details you provide that define the model’s intended behavior on prompts.
- [Prompt](foundationmodels/prompt.md): A prompt from a person to the model.
- [GenerationOptions](foundationmodels/generationoptions.md): Options that control how the model generates its response to a prompt.
- [ContextOptions](foundationmodels/contextoptions.md): Options that configure details that should appear in the prompt.

### Session transcripts

- [Transcripts](foundationmodels/transcripts.md): Inspect a session’s history and work with the entries, segments, and attachments it contains.

### Prompt attachments

- [Analyzing images with multimodal prompting](foundationmodels/analyzing-images-with-multimodal-prompting.md): Analyze and extract information from images by combining them with descriptive text prompts.
- [Attachment](foundationmodels/attachment.md): An asset provided to the model.
- [ImageAttachmentContent](foundationmodels/imageattachmentcontent.md): A type that holds image data.
- [ImageReference](foundationmodels/imagereference.md): A reference to an image in a session’s transcript.

### Dynamic profiles

- [Composing dynamic sessions with instructions and profiles](foundationmodels/composing-dynamic-sessions-with-instructions-and-profiles.md): Adapt sessions dynamically at runtime by loading instructions and tools based on the state of your app.
- [Origami: Crafting a dynamic tutorial for Apple Intelligence](foundationmodels/origami-crafting-a-dynamic-tutorial-for-apple-intelligence.md): Build interactive experiences with Foundation Models and Private Cloud Compute using multimodal prompts.
- [DynamicInstructions](foundationmodels/dynamicinstructions.md): A type that represents dynamic instructions.
- [DynamicInstructionsForEach](foundationmodels/dynamicinstructionsforeach.md)
- [LanguageModelSession.DynamicProfile](foundationmodels/languagemodelsession/dynamicprofile.md): A dynamic profile that contains one or more profiles.
- [LanguageModelSession.DynamicProfileModifier](foundationmodels/languagemodelsession/dynamicprofilemodifier.md): A protocol for creating reusable wrappers around dynamic profile content.
- [LanguageModelSession.Profile](foundationmodels/languagemodelsession/profile.md): A profile that contains dynamic instructions.

### Structured output

- [Generating Swift data structures with guided generation](foundationmodels/generating-swift-data-structures-with-guided-generation.md): Create robust apps by describing output you want programmatically.
- [Generable(description:)](foundationmodels/generable%28description_%29.md)
- [Guide(description:)](foundationmodels/guide%28description_%29.md)
- [Generable](foundationmodels/generable.md): A type that the model uses when responding to prompts.
- [GenerationSchema](foundationmodels/generationschema.md): A type that describes the properties of an object and any guides on their values.
- [DynamicGenerationSchema](foundationmodels/dynamicgenerationschema.md): The dynamic counterpart to the generation schema type that you use to construct schemas at runtime.
- [GeneratedContent](foundationmodels/generatedcontent.md): A type that represents structured, generated content.
- [ConvertibleToGeneratedContent](foundationmodels/convertibletogeneratedcontent.md): A type that can be converted to generated content.
- [ConvertibleFromGeneratedContent](foundationmodels/convertiblefromgeneratedcontent.md): A type that can be initialized from generated content.

### Tools

- [Expanding generation with tool calling](foundationmodels/expanding-generation-with-tool-calling.md): Build tools that enable the model to perform tasks that are specific to your use case.
- [Generate dynamic game content with guided generation and tools](foundationmodels/generate-dynamic-game-content-with-guided-generation-and-tools.md): Make gameplay more lively with AI generated dialog and encounters personalized to the player.
- [Tool](foundationmodels/tool.md): A tool that a model can call to gather information at runtime or perform side effects.

### System language model

- [Supporting languages and locales with Foundation Models](foundationmodels/supporting-languages-and-locales-with-foundation-models.md): Generate content in the language people prefer when they interact with your app.
- [Categorizing and organizing data with content tags](foundationmodels/categorizing-and-organizing-data-with-content-tags.md): Identify topics, actions, objects, and emotions in input text with a content tagging model.
- [SystemLanguageModel](foundationmodels/systemlanguagemodel.md): An on-device Apple Foundation Model capable of text generation tasks.
- [LanguageModelError](foundationmodels/languagemodelerror.md): A failure that may occur while generating a response when using any language model.

### Private Cloud Compute

- [Adding server-side intelligence with Private Cloud Compute](foundationmodels/adding-server-side-intelligence-with-private-cloud-compute.md): Access a larger context window and stronger reasoning by routing session requests through Private Cloud Compute.
- [com.apple.developer.private-cloud-compute](bundleresources/entitlements/com.apple.developer.private-cloud-compute.md): A Boolean value that indicates whether the app can use Private Cloud Compute.
- [PrivateCloudComputeLanguageModel](foundationmodels/privatecloudcomputelanguagemodel.md): A variant of Apple Foundation Models that runs on Private Cloud Compute to provide enhanced capabilities while maintaining privacy guarantees.

### Custom language model provider

- [Running a Core AI model in a Foundation Models session](foundationmodels/running-a-core-ai-model-in-a-foundation-models-session.md): Send requests on device to an open source model you export with Core AI to get a consistent API experience.
- [Optimizing key-value caching in language model sessions](foundationmodels/optimizing-key-value-caching-in-language-model-sessions.md): Prevent repeated token processing by preserving the cached state across turns.
- [LanguageModel](foundationmodels/languagemodel.md): A protocol that you use to interface with a model.
- [LanguageModelCapabilities](foundationmodels/languagemodelcapabilities.md): A set of capabilities that a language model provides.
- [LanguageModelExecutor](foundationmodels/languagemodelexecutor.md): A protocol that defines the interface for responding to session requests.
- [LanguageModelExecutorGenerationChannel](foundationmodels/languagemodelexecutorgenerationchannel.md): A type you use to send model output deltas and updates to the framework.
- [LanguageModelExecutorGenerationRequest](foundationmodels/languagemodelexecutorgenerationrequest.md): A type that contains the details for a generation request.

### Custom session properties

- [LanguageModelSession.SessionProperty](foundationmodels/languagemodelsession/sessionproperty.md): A property wrapper that provides access to properties from within profiles, dynamic instructions, and tools.
- [SessionPropertyKey](foundationmodels/sessionpropertykey.md): A protocol for defining a custom session property key.
- [SessionPropertyValues](foundationmodels/sessionpropertyvalues.md): A container for property values.
- [SessionPropertyEntry()](foundationmodels/sessionpropertyentry%28%29.md)

### Safety

- [Improving the safety of generative model output](foundationmodels/improving-the-safety-of-generative-model-output.md): Create generative experiences that appropriately handle sensitive inputs and respect people.

### Performance and evaluation

- [Evaluating prompts to measure performance and improve model responses](foundationmodels/evaluating-prompts-to-measure-performance-and-improve-model-responses.md): Systematically measure and improve the quality of your prompts by using structured evaluation.
- [Evaluating language model responses](evaluations/evaluating-language-model-responses.md): Build an evaluation that runs your intelligence-powered feature against samples and scores each response.
- [Analyzing the runtime performance of your Foundation Models app](foundationmodels/analyzing-the-runtime-performance-of-your-foundation-models-app.md): Measure how prompts, responses, and tool calls affect token consumption and response times in Instruments.
