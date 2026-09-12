> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/generationschema/schemaerror](https://developer.apple.com/documentation/foundationmodels/generationschema/schemaerror)

# GenerationSchema.SchemaError

**Framework:** Foundation Models  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 27.0+

An error that occurs when there is a problem creating a generation schema.

## Declaration

```swift
enum SchemaError
```

## Topics

### Getting schema errors

- [GenerationSchema.SchemaError.duplicateProperty(schema:property:context:)](schemaerror/duplicateproperty%28schema_property_context_%29.md): An error that represents an attempt to construct a dynamic schema with properties that have conflicting names.
- [GenerationSchema.SchemaError.duplicateType(schema:type:context:)](schemaerror/duplicatetype%28schema_type_context_%29.md): An error that represents an attempt to construct a schema from dynamic schemas, and two or more of the subschemas have the same type name.
- [GenerationSchema.SchemaError.emptyTypeChoices(schema:context:)](schemaerror/emptytypechoices%28schema_context_%29.md): An error that represents an attempt to construct an anyOf schema with an empty array of type choices.
- [GenerationSchema.SchemaError.undefinedReferences(schema:references:context:)](schemaerror/undefinedreferences%28schema_references_context_%29.md): An error that represents an attempt to construct a schema from dynamic schemas, and one of those schemas references an undefined schema.
- [GenerationSchema.SchemaError.Context](schemaerror/context.md): The context in which the error occurred.

### Getting the error description

- [errorDescription](schemaerror/errordescription.md): A string representation of the error description.

### Getting the recovery suggestion

- [recoverySuggestion](schemaerror/recoverysuggestion.md): A suggestion that indicates how to handle the error.

### Default Implementations

- [LocalizedError Implementations](schemaerror/localizederror-implementations.md)

## Relationships

### Conforms To

- [Error](https://developer.apple.com/documentation/swift/error)
- [LocalizedError](../../foundation/localizederror.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
