> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/dynamicgenerationschema](https://developer.apple.com/documentation/foundationmodels/dynamicgenerationschema)

# DynamicGenerationSchema

**Framework:** Foundation Models  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 27.0+

The dynamic counterpart to the generation schema type that you use to construct schemas at runtime.

## Declaration

```swift
struct DynamicGenerationSchema
```

## Mentioned In

- [Generating Swift data structures with guided generation](generating-swift-data-structures-with-guided-generation.md)

<a id="overview"></a>

## Overview

An individual schema may reference other schemas by name, and references are resolved when converting a set of dynamic schemas into a [GenerationSchema](generationschema.md).

## Topics

### Creating a dynamic schema

- [init(arrayOf:minimumElements:maximumElements:)](dynamicgenerationschema/init%28arrayof_minimumelements_maximumelements_%29.md): Creates an array schema.
- [init(name:description:anyOf:)](dynamicgenerationschema/init%28name_description_anyof_%29.md): Creates an any-of schema.
- [init(name:description:properties:)](dynamicgenerationschema/init%28name_description_properties_%29.md): Creates an object schema.
- [init(name:description:representNilExplicitlyInGeneratedContent:properties:)](dynamicgenerationschema/init%28name_description_representnilexplicitlyingeneratedcontent_properties_%29.md): Creates an object schema.
- [init(referenceTo:)](dynamicgenerationschema/init%28referenceto_%29.md): Creates a reference schema.
- [init(type:guides:)](dynamicgenerationschema/init%28type_guides_%29.md): Creates a schema from a generable type and guides.
- [DynamicGenerationSchema.Property](dynamicgenerationschema/property.md): A property that belongs to a dynamic generation schema.

### Creating a null schema

- [null](dynamicgenerationschema/null.md): Creates a null schema.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Structured output

- [Generating Swift data structures with guided generation](generating-swift-data-structures-with-guided-generation.md): Create robust apps by describing output you want programmatically.
- [Generable(description:)](generable%28description_%29.md)
- [Guide(description:)](guide%28description_%29.md)
- [Generable](generable.md): A type that the model uses when responding to prompts.
- [GenerationSchema](generationschema.md): A type that describes the properties of an object and any guides on their values.
- [GeneratedContent](generatedcontent.md): A type that represents structured, generated content.
- [ConvertibleToGeneratedContent](convertibletogeneratedcontent.md): A type that can be converted to generated content.
- [ConvertibleFromGeneratedContent](convertiblefromgeneratedcontent.md): A type that can be initialized from generated content.
