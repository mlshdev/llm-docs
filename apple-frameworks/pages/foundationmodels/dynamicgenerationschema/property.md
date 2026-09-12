> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/dynamicgenerationschema/property](https://developer.apple.com/documentation/foundationmodels/dynamicgenerationschema/property)

# DynamicGenerationSchema.Property

**Framework:** Foundation Models  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 27.0+

A property that belongs to a dynamic generation schema.

## Declaration

```swift
struct Property
```

<a id="overview"></a>

## Overview

Fields are named members of object types. Fields are strongly typed and have optional descriptions.

## Topics

### Creating a property

- [init(name:description:schema:isOptional:)](property/init%28name_description_schema_isoptional_%29.md): Creates a property referencing a dynamic schema.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating a dynamic schema

- [init(arrayOf:minimumElements:maximumElements:)](init%28arrayof_minimumelements_maximumelements_%29.md): Creates an array schema.
- [init(name:description:anyOf:)](init%28name_description_anyof_%29.md): Creates an any-of schema.
- [init(name:description:properties:)](init%28name_description_properties_%29.md): Creates an object schema.
- [init(name:description:representNilExplicitlyInGeneratedContent:properties:)](init%28name_description_representnilexplicitlyingeneratedcontent_properties_%29.md): Creates an object schema.
- [init(referenceTo:)](init%28referenceto_%29.md): Creates a reference schema.
- [init(type:guides:)](init%28type_guides_%29.md): Creates a schema from a generable type and guides.
