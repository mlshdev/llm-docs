> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/generable](https://developer.apple.com/documentation/foundationmodels/generable)

# Generable

**Framework:** Foundation Models  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 27.0+

A type that the model uses when responding to prompts.

## Declaration

```swift
protocol Generable : ConvertibleFromGeneratedContent, ConvertibleToGeneratedContent
```

## Mentioned In

- [Analyzing the runtime performance of your Foundation Models app](analyzing-the-runtime-performance-of-your-foundation-models-app.md)
- [Prompting an on-device foundation model](prompting-an-on-device-foundation-model.md)
- [Analyzing images with multimodal prompting](analyzing-images-with-multimodal-prompting.md)
- [Categorizing and organizing data with content tags](categorizing-and-organizing-data-with-content-tags.md)
- [Generating Swift data structures with guided generation](generating-swift-data-structures-with-guided-generation.md)
- [Managing the context window](managing-the-context-window.md)

<a id="overview"></a>

## Overview

Annotate your Swift structure or enumeration with the `@Generable` macro to allow the model to respond to prompts by generating an instance of your type. Use the `@Guide` macro to provide natural language descriptions of your properties, and programmatically control the values that the model can generate.

```swift
@Generable
struct SearchSuggestions {
    @Guide(description: "A list of suggested search terms.", .count(4))
    var searchTerms: [SearchTerm]
    @Generable
    struct SearchTerm {
        // Use a generation identifier for data structures the framework generates.
        var id: GenerationID
        @Guide(description: "A two- or three- word search term, like 'Beautiful sunsets'.")
        var searchTerm: String
    }
}
```

For every [Generable](generable.md) type in a request, the framework converts its type and format information to a JSON schema and provides it to the model. This contributes to the available context window size. If the [LanguageModelSession](languagemodelsession.md) exceeds the available context size, it throws [LanguageModelError.contextSizeExceeded(\_:)](languagemodelerror/contextsizeexceeded%28__%29.md). To reduce the size of your generable type:

- Reduce the complexity of your [Generable](generable.md) type by evaluating whether properties are necessary to complete the task.
- Give your properties short and clear names.
- Use [Guide(description:)](guide%28description_%29.md) on properties only when it improves response quality.
- Add a [Guide(description:\_:)](guide%28description___%29.md) with [maximumCount(\_:)](generationguide/maximumcount%28__%29.md) to reduce token usage.

If the [Generable](generable.md) type includes properties with clear names the model may have all it needs to generate your type, eliminating the need of [Guide(description:)](guide%28description_%29.md). For more information on managing the context window size, see [Managing the context window](managing-the-context-window.md).

## Topics

### Creating a Generable type

- [Generable(description:)](generable%28description_%29.md)
- [Generable(description:representNilExplicitlyInGeneratedContent:)](generable%28description_representnilexplicitlyingeneratedcontent_%29.md)
- [Generable(name:description:representNilExplicitlyInGeneratedContent:)](generable%28name_description_representnilexplicitlyingeneratedcontent_%29.md)

### Creating a guide

- [Guide(description:)](guide%28description_%29.md)
- [Guide(description:\_:)](guide%28description___%29.md)
- [GenerationGuide](generationguide.md): Guides that control how values are generated.

### Getting the schema

- [generationSchema](generable/generationschema.md): An instance of the generation schema.

### Converting to partially generated

- [asPartiallyGenerated()](generable/aspartiallygenerated%28%29.md): Returns the partially generated representation of the current instance.
- [PartiallyGenerated](generable/partiallygenerated.md): A representation of partially generated content

## Relationships

### Inherits From

- [ConvertibleFromGeneratedContent](convertiblefromgeneratedcontent.md)
- [ConvertibleToGeneratedContent](convertibletogeneratedcontent.md)
- [InstructionsRepresentable](instructionsrepresentable.md)
- [PromptRepresentable](promptrepresentable.md)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

### Conforming Types

- [GeneratedContent](generatedcontent.md)
- [ImageReference](imagereference.md)

## See Also

### Structured output

- [Generating Swift data structures with guided generation](generating-swift-data-structures-with-guided-generation.md): Create robust apps by describing output you want programmatically.
- [Generable(description:)](generable%28description_%29.md)
- [Guide(description:)](guide%28description_%29.md)
- [GenerationSchema](generationschema.md): A type that describes the properties of an object and any guides on their values.
- [DynamicGenerationSchema](dynamicgenerationschema.md): The dynamic counterpart to the generation schema type that you use to construct schemas at runtime.
- [GeneratedContent](generatedcontent.md): A type that represents structured, generated content.
- [ConvertibleToGeneratedContent](convertibletogeneratedcontent.md): A type that can be converted to generated content.
- [ConvertibleFromGeneratedContent](convertiblefromgeneratedcontent.md): A type that can be initialized from generated content.
