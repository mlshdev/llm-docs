> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/convertibletogeneratedcontent](https://developer.apple.com/documentation/foundationmodels/convertibletogeneratedcontent)

# ConvertibleToGeneratedContent

**Framework:** Foundation Models  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 27.0+

A type that can be converted to generated content.

## Declaration

```swift
protocol ConvertibleToGeneratedContent : InstructionsRepresentable, PromptRepresentable
```

## Topics

### Getting the generated content

- [generatedContent](convertibletogeneratedcontent/generatedcontent.md): This instance represented as generated content.

## Relationships

### Inherits From

- [InstructionsRepresentable](instructionsrepresentable.md)
- [PromptRepresentable](promptrepresentable.md)

### Inherited By

- [Generable](generable.md)

### Conforming Types

- [GeneratedContent](generatedcontent.md)
- [ImageReference](imagereference.md)

## See Also

### Structured output

- [Generating Swift data structures with guided generation](generating-swift-data-structures-with-guided-generation.md): Create robust apps by describing output you want programmatically.
- [Generable(description:)](generable%28description_%29.md)
- [Guide(description:)](guide%28description_%29.md)
- [Generable](generable.md): A type that the model uses when responding to prompts.
- [GenerationSchema](generationschema.md): A type that describes the properties of an object and any guides on their values.
- [DynamicGenerationSchema](dynamicgenerationschema.md): The dynamic counterpart to the generation schema type that you use to construct schemas at runtime.
- [GeneratedContent](generatedcontent.md): A type that represents structured, generated content.
- [ConvertibleFromGeneratedContent](convertiblefromgeneratedcontent.md): A type that can be initialized from generated content.
