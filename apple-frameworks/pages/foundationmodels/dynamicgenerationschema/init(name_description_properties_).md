> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/dynamicgenerationschema/init(name:description:properties:)](https://developer.apple.com/documentation/foundationmodels/dynamicgenerationschema/init(name:description:properties:))

# init(name:description:properties:)

**Framework:** Foundation Models  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 27.0+

Creates an object schema.

## Declaration

```swift
init(name: String, description: String? = nil, properties: [DynamicGenerationSchema.Property])
```

## Parameters

- `name`: A name this dynamic schema can be referenced by.
- `description`: A natural language description of this schema.
- `properties`: The properties associated with this schema.

## See Also

### Creating a dynamic schema

- [init(arrayOf:minimumElements:maximumElements:)](init%28arrayof_minimumelements_maximumelements_%29.md): Creates an array schema.
- [init(name:description:anyOf:)](init%28name_description_anyof_%29.md): Creates an any-of schema.
- [init(name:description:representNilExplicitlyInGeneratedContent:properties:)](init%28name_description_representnilexplicitlyingeneratedcontent_properties_%29.md): Creates an object schema.
- [init(referenceTo:)](init%28referenceto_%29.md): Creates a reference schema.
- [init(type:guides:)](init%28type_guides_%29.md): Creates a schema from a generable type and guides.
- [DynamicGenerationSchema.Property](property.md): A property that belongs to a dynamic generation schema.
