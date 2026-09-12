> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/generationschema](https://developer.apple.com/documentation/foundationmodels/generationschema)

# GenerationSchema

**Framework:** Foundation Models  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 27.0+

A type that describes the properties of an object and any guides on their values.

## Declaration

```swift
struct GenerationSchema
```

## Mentioned In

- [Generating Swift data structures with guided generation](generating-swift-data-structures-with-guided-generation.md)

<a id="overview"></a>

## Overview

Generation schemas guide the output of a language model to deterministically ensure the output is in the desired format.

## Topics

### Creating a generation schema

- [init(root:dependencies:)](generationschema/init%28root_dependencies_%29.md): Creates a schema by providing an array of dynamic schemas.
- [init(type:description:anyOf:)](generationschema/init%28type_description_anyof_%29.md): Creates a schema for a string enumeration.
- [init(type:description:properties:)](generationschema/init%28type_description_properties_%29.md): Creates a schema by providing an array of properties.
- [init(type:description:representNilExplicitlyInGeneratedContent:properties:)](generationschema/init%28type_description_representnilexplicitlyingeneratedcontent_properties_%29.md): Creates a schema by providing an array of properties.
- [GenerationSchema.Property](generationschema/property.md): A named, strongly typed member of an object type with an optional description and guides.

### Accessing the name

- [name](generationschema/name.md): The name of this generation schema.

### Errors

- [GenerationSchema.SchemaError](generationschema/schemaerror.md): An error that occurs when there is a problem creating a generation schema.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Structured output

- [Generating Swift data structures with guided generation](generating-swift-data-structures-with-guided-generation.md): Create robust apps by describing output you want programmatically.
- [Generable(description:)](generable%28description_%29.md)
- [Guide(description:)](guide%28description_%29.md)
- [Generable](generable.md): A type that the model uses when responding to prompts.
- [DynamicGenerationSchema](dynamicgenerationschema.md): The dynamic counterpart to the generation schema type that you use to construct schemas at runtime.
- [GeneratedContent](generatedcontent.md): A type that represents structured, generated content.
- [ConvertibleToGeneratedContent](convertibletogeneratedcontent.md): A type that can be converted to generated content.
- [ConvertibleFromGeneratedContent](convertiblefromgeneratedcontent.md): A type that can be initialized from generated content.
