> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/dynamicgenerationschema/property/init(name:description:schema:isoptional:)](https://developer.apple.com/documentation/foundationmodels/dynamicgenerationschema/property/init(name:description:schema:isoptional:))

# init(name:description:schema:isOptional:)

**Framework:** Foundation Models  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 27.0+

Creates a property referencing a dynamic schema.

## Declaration

```swift
init(name: String, description: String? = nil, schema: DynamicGenerationSchema, isOptional: Bool = false)
```

## Parameters

- `name`: A name for this property.
- `description`: An optional natural language description of this property’s contents.
- `schema`: A schema representing the type this property contains.
- `isOptional`: Determines if this property is required or not.
