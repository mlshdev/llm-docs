> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/systemlanguagemodel](https://developer.apple.com/documentation/foundationmodels/systemlanguagemodel)

# SystemLanguageModel

**Framework:** Foundation Models  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

An on-device Apple Foundation Model capable of text generation tasks.

## Declaration

```swift
final class SystemLanguageModel
```

## Mentioned In

- [Improving the safety of generative model output](improving-the-safety-of-generative-model-output.md)
- [Adding server-side intelligence with Private Cloud Compute](adding-server-side-intelligence-with-private-cloud-compute.md)
- [Generating content and performing tasks with Foundation Models](generating-content-and-performing-tasks-with-foundation-models.md)

<a id="overview"></a>

## Overview

The `SystemLanguageModel` refers to the on-device text foundation model that powers Apple Intelligence. Use [default](systemlanguagemodel/default.md) to access the base version of the model and perform general-purpose text generation tasks. To access a specialized version of the model, initialize the model with [SystemLanguageModel.UseCase](systemlanguagemodel/usecase.md) to perform tasks like [contentTagging](systemlanguagemodel/usecase/contenttagging.md). Apple periodically updates `SystemLanguageModel` in routine OS updates to improve the on-device model’s abilities and performance. Currently, there are 3 model versions that align with:

- iOS, iPadOS, macOS, and visionOS **26.0 - 26.3**
- iOS, iPadOS, macOS, visionOS **26.4**
- iOS, iPadOS, macOS, and visionOS **27.0**

For more information about how model versions affect your app, see [Updating prompts for new model versions](updating-prompts-for-new-model-versions.md).

Before you use the model, you need to verify its availability. Model availability depends on whether the device and region supports Apple Intelligence. For a list of supported devices, see [Apple Intelligence](https://www.apple.com/apple-intelligence/).

Use [SystemLanguageModel.Availability](systemlanguagemodel/availability-swift.enum.md) to change what your app shows to people based on the availability condition:

```swift
struct GenerativeView: View {
    // Create a reference to the system language model.
    private var model = SystemLanguageModel.default

    var body: some View {
        switch model.availability {
        case .available:
            // Show your intelligence UI.
        case .unavailable(.deviceNotEligible):
            // Show an alternative UI.
        case .unavailable(.modelNotReady):
            // The model isn't ready because it's downloading or because
            // of other system reasons.
        case .unavailable(let other):
            // The model is unavailable for an unknown reason.
        }
    }
}
```

## Topics

### Getting the default model

- [default](systemlanguagemodel/default.md): The base version of the model.

### Creating a model for a use case

- [init(useCase:guardrails:)](systemlanguagemodel/init%28usecase_guardrails_%29.md): Creates a system language model instance for a specific use case.
- [SystemLanguageModel.UseCase](systemlanguagemodel/usecase.md): A type that represents the use case for prompting.
- [SystemLanguageModel.Guardrails](systemlanguagemodel/guardrails.md): A set of controls that flag sensitive content from model input and output.

### Accessing the model variant

- [variant](systemlanguagemodel/variant-swift.property.md): The variant of the on-device model backing this instance.
- [SystemLanguageModel.Variant](systemlanguagemodel/variant-swift.struct.md): The variant of an on-device model.

### Checking model availability

- [isAvailable](systemlanguagemodel/isavailable.md): A Boolean value that indicates whether the system is entirely ready.
- [availability](systemlanguagemodel/availability-swift.property.md): The availability of the language model.
- [SystemLanguageModel.Availability](systemlanguagemodel/availability-swift.enum.md): The availability status for a specific system language model.

### Inspecting model capabilities

- [contextSize](systemlanguagemodel/contextsize.md): The maximum context size in tokens that the model supports.
- [supportedLanguages](systemlanguagemodel/supportedlanguages.md): Languages that the model supports.
- [supportsLocale(\_:)](systemlanguagemodel/supportslocale%28__%29.md): Returns a Boolean value that indicates whether the given locale is supported by the model.

### Counting tokens

- [tokenCount(for:)](systemlanguagemodel/tokencount%28for_%29.md): Returns the token count for the specified instructions.

### Handling a language model error

- [SystemLanguageModel.Error](systemlanguagemodel/error.md): An error specific to the on-device system language model.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [LanguageModel](languagemodel.md)
- [Observable](https://developer.apple.com/documentation/observation/observable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### System language model

- [Supporting languages and locales with Foundation Models](supporting-languages-and-locales-with-foundation-models.md): Generate content in the language people prefer when they interact with your app.
- [Categorizing and organizing data with content tags](categorizing-and-organizing-data-with-content-tags.md): Identify topics, actions, objects, and emotions in input text with a content tagging model.
- [LanguageModelError](languagemodelerror.md): A failure that may occur while generating a response when using any language model.
