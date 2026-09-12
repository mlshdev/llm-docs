> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/generationschema/init(type:description:representnilexplicitlyingeneratedcontent:properties:)](https://developer.apple.com/documentation/foundationmodels/generationschema/init(type:description:representnilexplicitlyingeneratedcontent:properties:))

# init(type:description:representNilExplicitlyInGeneratedContent:properties:)

**Framework:** Foundation Models  
**Kind:** Initializer  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.4+ · visionOS 26.4+ · watchOS 27.0+

Creates a schema by providing an array of properties.

## Declaration

```swift
init(type: any Generable.Type, description: String? = nil, representNilExplicitlyInGeneratedContent explicitNil: Bool, properties: [GenerationSchema.Property])
```

## Parameters

- `type`: The type this schema represents.
- `description`: A natural language description of this schema.
- `properties`: An array of properties.

## See Also

### Creating a generation schema

- [init(root:dependencies:)](init%28root_dependencies_%29.md): Creates a schema by providing an array of dynamic schemas.
- [init(type:description:anyOf:)](init%28type_description_anyof_%29.md): Creates a schema for a string enumeration.
- [init(type:description:properties:)](init%28type_description_properties_%29.md): Creates a schema by providing an array of properties.
- [GenerationSchema.Property](property.md): A named, strongly typed member of an object type with an optional description and guides.
