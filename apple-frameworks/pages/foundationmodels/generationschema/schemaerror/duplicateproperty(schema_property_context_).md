> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/generationschema/schemaerror/duplicateproperty(schema:property:context:)](https://developer.apple.com/documentation/foundationmodels/generationschema/schemaerror/duplicateproperty(schema:property:context:))

# GenerationSchema.SchemaError.duplicateProperty(schema:property:context:)

**Framework:** Foundation Models  
**Kind:** Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 27.0+

An error that represents an attempt to construct a dynamic schema with properties that have conflicting names.

## Declaration

```swift
case duplicateProperty(schema: String, property: String, context: GenerationSchema.SchemaError.Context)
```

## See Also

### Getting schema errors

- [GenerationSchema.SchemaError.duplicateType(schema:type:context:)](duplicatetype%28schema_type_context_%29.md): An error that represents an attempt to construct a schema from dynamic schemas, and two or more of the subschemas have the same type name.
- [GenerationSchema.SchemaError.emptyTypeChoices(schema:context:)](emptytypechoices%28schema_context_%29.md): An error that represents an attempt to construct an anyOf schema with an empty array of type choices.
- [GenerationSchema.SchemaError.undefinedReferences(schema:references:context:)](undefinedreferences%28schema_references_context_%29.md): An error that represents an attempt to construct a schema from dynamic schemas, and one of those schemas references an undefined schema.
- [GenerationSchema.SchemaError.Context](context.md): The context in which the error occurred.
