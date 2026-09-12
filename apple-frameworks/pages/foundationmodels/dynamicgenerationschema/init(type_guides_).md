> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/dynamicgenerationschema/init(type:guides:)](https://developer.apple.com/documentation/foundationmodels/dynamicgenerationschema/init(type:guides:))

# init(type:guides:)

**Framework:** Foundation Models  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 27.0+

Creates a schema from a generable type and guides.

## Declaration

```swift
init<Value>(type: Value.Type, guides: [GenerationGuide<Value>] = []) where Value : Generable
```

## Parameters

- `type`: A `Generable` type
- `guides`: Generation guides to apply to this `DynamicGenerationSchema`.

## See Also

### Creating a dynamic schema

- [init(arrayOf:minimumElements:maximumElements:)](init%28arrayof_minimumelements_maximumelements_%29.md): Creates an array schema.
- [init(name:description:anyOf:)](init%28name_description_anyof_%29.md): Creates an any-of schema.
- [init(name:description:properties:)](init%28name_description_properties_%29.md): Creates an object schema.
- [init(name:description:representNilExplicitlyInGeneratedContent:properties:)](init%28name_description_representnilexplicitlyingeneratedcontent_properties_%29.md): Creates an object schema.
- [init(referenceTo:)](init%28referenceto_%29.md): Creates a reference schema.
- [DynamicGenerationSchema.Property](property.md): A property that belongs to a dynamic generation schema.
