> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/generationschema/init(root:dependencies:)](https://developer.apple.com/documentation/foundationmodels/generationschema/init(root:dependencies:))

# init(root:dependencies:)

**Framework:** Foundation Models  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 27.0+

Creates a schema by providing an array of dynamic schemas.

## Declaration

```swift
init(root: DynamicGenerationSchema, dependencies: [DynamicGenerationSchema]) throws
```

## Parameters

- `root`: The root schema.
- `dependencies`: An array of dynamic schemas.

<a id="discussion"></a>

## Discussion

> **Throws**

> If there are schemas with naming conflicts or references to undefined types.

## See Also

### Creating a generation schema

- [init(type:description:anyOf:)](init%28type_description_anyof_%29.md): Creates a schema for a string enumeration.
- [init(type:description:properties:)](init%28type_description_properties_%29.md): Creates a schema by providing an array of properties.
- [init(type:description:representNilExplicitlyInGeneratedContent:properties:)](init%28type_description_representnilexplicitlyingeneratedcontent_properties_%29.md): Creates a schema by providing an array of properties.
- [GenerationSchema.Property](property.md): A named, strongly typed member of an object type with an optional description and guides.
