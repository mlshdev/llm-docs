> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/generationschema/property](https://developer.apple.com/documentation/foundationmodels/generationschema/property)

# GenerationSchema.Property

**Framework:** Foundation Models  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 27.0+

A named, strongly typed member of an object type with an optional description and guides.

## Declaration

```swift
struct Property
```

## Topics

### Creating a property

- [init(name:description:type:guides:)](property/init%28name_description_type_guides_%29.md): Creates a property that contains a string type.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating a generation schema

- [init(root:dependencies:)](init%28root_dependencies_%29.md): Creates a schema by providing an array of dynamic schemas.
- [init(type:description:anyOf:)](init%28type_description_anyof_%29.md): Creates a schema for a string enumeration.
- [init(type:description:properties:)](init%28type_description_properties_%29.md): Creates a schema by providing an array of properties.
- [init(type:description:representNilExplicitlyInGeneratedContent:properties:)](init%28type_description_representnilexplicitlyingeneratedcontent_properties_%29.md): Creates a schema by providing an array of properties.
