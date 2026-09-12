> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/generationschema/init(type:description:anyof:)](https://developer.apple.com/documentation/foundationmodels/generationschema/init(type:description:anyof:))

# init(type:description:anyOf:)

**Framework:** Foundation Models  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 27.0+

Creates a schema for a string enumeration.

## Declaration

```swift
init(type: any Generable.Type, description: String? = nil, anyOf choices: [String])
```

## Parameters

- `type`: The type this schema represents.
- `description`: A natural language description of this schema.
- `choices`: The allowed choices.

## See Also

### Creating a generation schema

- [init(root:dependencies:)](init%28root_dependencies_%29.md): Creates a schema by providing an array of dynamic schemas.
- [init(type:description:properties:)](init%28type_description_properties_%29.md): Creates a schema by providing an array of properties.
- [init(type:description:representNilExplicitlyInGeneratedContent:properties:)](init%28type_description_representnilexplicitlyingeneratedcontent_properties_%29.md): Creates a schema by providing an array of properties.
- [GenerationSchema.Property](property.md): A named, strongly typed member of an object type with an optional description and guides.
