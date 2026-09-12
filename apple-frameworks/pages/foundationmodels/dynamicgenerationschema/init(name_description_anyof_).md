> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/dynamicgenerationschema/init(name:description:anyof:)](https://developer.apple.com/documentation/foundationmodels/dynamicgenerationschema/init(name:description:anyof:))

# init(name:description:anyOf:)

**Framework:** Foundation Models  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 27.0+

Creates an any-of schema.

## Declaration

```swift
init(name: String, description: String? = nil, anyOf choices: [DynamicGenerationSchema])
```

## Parameters

- `name`: A name this schema can be referenced by.
- `description`: A natural language description of this [DynamicGenerationSchema](../dynamicgenerationschema.md).
- `choices`: An array of schemas this one will be a union of.

## See Also

### Creating a dynamic schema

- [init(arrayOf:minimumElements:maximumElements:)](init%28arrayof_minimumelements_maximumelements_%29.md): Creates an array schema.
- [init(name:description:properties:)](init%28name_description_properties_%29.md): Creates an object schema.
- [init(name:description:representNilExplicitlyInGeneratedContent:properties:)](init%28name_description_representnilexplicitlyingeneratedcontent_properties_%29.md): Creates an object schema.
- [init(referenceTo:)](init%28referenceto_%29.md): Creates a reference schema.
- [init(type:guides:)](init%28type_guides_%29.md): Creates a schema from a generable type and guides.
- [DynamicGenerationSchema.Property](property.md): A property that belongs to a dynamic generation schema.
