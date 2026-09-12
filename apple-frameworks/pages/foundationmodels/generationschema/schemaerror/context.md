> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/generationschema/schemaerror/context](https://developer.apple.com/documentation/foundationmodels/generationschema/schemaerror/context)

# GenerationSchema.SchemaError.Context

**Framework:** Foundation Models  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 27.0+

The context in which the error occurred.

## Declaration

```swift
struct Context
```

## Topics

### Creating a schema error context

- [init(debugDescription:)](context/init%28debugdescription_%29.md)

### Getting the debug description

- [debugDescription](context/debugdescription.md): A string representation of the debug description.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting schema errors

- [GenerationSchema.SchemaError.duplicateProperty(schema:property:context:)](duplicateproperty%28schema_property_context_%29.md): An error that represents an attempt to construct a dynamic schema with properties that have conflicting names.
- [GenerationSchema.SchemaError.duplicateType(schema:type:context:)](duplicatetype%28schema_type_context_%29.md): An error that represents an attempt to construct a schema from dynamic schemas, and two or more of the subschemas have the same type name.
- [GenerationSchema.SchemaError.emptyTypeChoices(schema:context:)](emptytypechoices%28schema_context_%29.md): An error that represents an attempt to construct an anyOf schema with an empty array of type choices.
- [GenerationSchema.SchemaError.undefinedReferences(schema:references:context:)](undefinedreferences%28schema_references_context_%29.md): An error that represents an attempt to construct a schema from dynamic schemas, and one of those schemas references an undefined schema.
