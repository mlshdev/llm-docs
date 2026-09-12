> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/dynamicgenerationschema/init(referenceto:)](https://developer.apple.com/documentation/foundationmodels/dynamicgenerationschema/init(referenceto:))

# init(referenceTo:)

**Framework:** Foundation Models  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 27.0+

Creates a reference schema.

## Declaration

```swift
init(referenceTo name: String)
```

## Parameters

- `name`: The name of the [DynamicGenerationSchema](../dynamicgenerationschema.md) this is a reference to.

## See Also

### Creating a dynamic schema

- [init(arrayOf:minimumElements:maximumElements:)](init%28arrayof_minimumelements_maximumelements_%29.md): Creates an array schema.
- [init(name:description:anyOf:)](init%28name_description_anyof_%29.md): Creates an any-of schema.
- [init(name:description:properties:)](init%28name_description_properties_%29.md): Creates an object schema.
- [init(name:description:representNilExplicitlyInGeneratedContent:properties:)](init%28name_description_representnilexplicitlyingeneratedcontent_properties_%29.md): Creates an object schema.
- [init(type:guides:)](init%28type_guides_%29.md): Creates a schema from a generable type and guides.
- [DynamicGenerationSchema.Property](property.md): A property that belongs to a dynamic generation schema.
