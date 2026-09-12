> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/dynamicgenerationschema/init(arrayof:minimumelements:maximumelements:)](https://developer.apple.com/documentation/foundationmodels/dynamicgenerationschema/init(arrayof:minimumelements:maximumelements:))

# init(arrayOf:minimumElements:maximumElements:)

**Framework:** Foundation Models  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 27.0+

Creates an array schema.

## Declaration

```swift
init(arrayOf itemSchema: DynamicGenerationSchema, minimumElements: Int? = nil, maximumElements: Int? = nil)
```

## Parameters

- `itemSchema`: A schema to use as the elements of the array.
- `minimumElements`: A minimum number of elements the array should contain.
- `maximumElements`: The maximum number of element the array should contain.

## See Also

### Creating a dynamic schema

- [init(name:description:anyOf:)](init%28name_description_anyof_%29.md): Creates an any-of schema.
- [init(name:description:properties:)](init%28name_description_properties_%29.md): Creates an object schema.
- [init(name:description:representNilExplicitlyInGeneratedContent:properties:)](init%28name_description_representnilexplicitlyingeneratedcontent_properties_%29.md): Creates an object schema.
- [init(referenceTo:)](init%28referenceto_%29.md): Creates a reference schema.
- [init(type:guides:)](init%28type_guides_%29.md): Creates a schema from a generable type and guides.
- [DynamicGenerationSchema.Property](property.md): A property that belongs to a dynamic generation schema.
