> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/generatedcontent](https://developer.apple.com/documentation/foundationmodels/generatedcontent)

# GeneratedContent

**Framework:** Foundation Models  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 27.0+

A type that represents structured, generated content.

## Declaration

```swift
struct GeneratedContent
```

## Mentioned In

- [Expanding generation with tool calling](expanding-generation-with-tool-calling.md)
- [Generating Swift data structures with guided generation](generating-swift-data-structures-with-guided-generation.md)

<a id="overview"></a>

## Overview

Generated content may contain a single value, an array, or key-value pairs with unique keys.

## Topics

### Creating generated content

- [init(\_:)](generatedcontent/init%28__%29.md): Creates generated content from another value.
- [init(\_:id:)](generatedcontent/init%28__id_%29.md): Creates content that contains a single value with a custom generation identifier.
- [init(elements:id:)](generatedcontent/init%28elements_id_%29.md): Creates content representing an array of elements you specify.
- [init(properties:id:)](generatedcontent/init%28properties_id_%29.md): Creates generated content representing a structure with the properties you specify.
- [init(properties:id:uniquingKeysWith:)](generatedcontent/init%28properties_id_uniquingkeyswith_%29.md): Creates generated content from key-value pairs, resolving duplicate keys with a combining closure.
- [init(json:)](generatedcontent/init%28json_%29.md): Creates equivalent content from a JSON string.
- [init(kind:id:)](generatedcontent/init%28kind_id_%29.md): Creates content with the specified kind and generation identifier.
- [GeneratedContent.ParsingError](generatedcontent/parsingerror.md): A failure that occurs when a string cannot be parsed into GeneratedContent.

### Accessing the content

- [kind](generatedcontent/kind-swift.property.md): The representation of the generated content.
- [GeneratedContent.Kind](generatedcontent/kind-swift.enum.md): A representation of the different types of content that can be stored in generated content.
- [value(\_:)](generatedcontent/value%28__%29.md): Reads a top level, concrete partially generable type from a named property.
- [value(\_:forProperty:)](generatedcontent/value%28__forproperty_%29.md): Reads a concrete generable type from a named property.
- [isComplete](generatedcontent/iscomplete.md): A Boolean value that indicates whether the generated content is complete.
- [generatedContent](generatedcontent/generatedcontent.md): A representation of this instance.
- [jsonString](generatedcontent/jsonstring.md): A JSON string representation of the generated content.
- [debugDescription](generatedcontent/debugdescription.md): A string representation for the debug description.

### Identifying a generation

- [id](generatedcontent/id.md): A unique id that is stable for the duration of a generated response.
- [GenerationID](generationid.md): A unique identifier that is stable for the duration of a response, but not across responses.

### Default Implementations

- [ConvertibleFromGeneratedContent Implementations](generatedcontent/convertiblefromgeneratedcontent-implementations.md)
- [ConvertibleToGeneratedContent Implementations](generatedcontent/convertibletogeneratedcontent-implementations.md)
- [CustomDebugStringConvertible Implementations](generatedcontent/customdebugstringconvertible-implementations.md)

## Relationships

### Conforms To

- [ConvertibleFromGeneratedContent](convertiblefromgeneratedcontent.md)
- [ConvertibleToGeneratedContent](convertibletogeneratedcontent.md)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Generable](generable.md)
- [InstructionsRepresentable](instructionsrepresentable.md)
- [PromptRepresentable](promptrepresentable.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Structured output

- [Generating Swift data structures with guided generation](generating-swift-data-structures-with-guided-generation.md): Create robust apps by describing output you want programmatically.
- [Generable(description:)](generable%28description_%29.md)
- [Guide(description:)](guide%28description_%29.md)
- [Generable](generable.md): A type that the model uses when responding to prompts.
- [GenerationSchema](generationschema.md): A type that describes the properties of an object and any guides on their values.
- [DynamicGenerationSchema](dynamicgenerationschema.md): The dynamic counterpart to the generation schema type that you use to construct schemas at runtime.
- [ConvertibleToGeneratedContent](convertibletogeneratedcontent.md): A type that can be converted to generated content.
- [ConvertibleFromGeneratedContent](convertiblefromgeneratedcontent.md): A type that can be initialized from generated content.
