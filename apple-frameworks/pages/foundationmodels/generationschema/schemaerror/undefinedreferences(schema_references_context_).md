> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/generationschema/schemaerror/undefinedreferences(schema:references:context:)

# GenerationSchema.SchemaError.undefinedReferences(schema:references:context:)

**Framework:** Foundation Models  
**Kind:** Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 27.0+

An error that represents an attempt to construct a schema from dynamic schemas in which one of those schemas references an undefined schema.

## Declaration

```swift
case undefinedReferences(schema: String?, references: [String], context: GenerationSchema.SchemaError.Context)
```

## See Also

### Getting schema errors

- [GenerationSchema.SchemaError.duplicateProperty(schema:property:context:)](duplicateproperty%28schema_property_context_%29.md): An error that represents an attempt to construct a dynamic schema with properties that have conflicting names.
- [GenerationSchema.SchemaError.duplicateType(schema:type:context:)](duplicatetype%28schema_type_context_%29.md): An error that represents an attempt to construct a schema from dynamic schemas in which two or more of the subschemas have the same type name.
- [GenerationSchema.SchemaError.emptyTypeChoices(schema:context:)](emptytypechoices%28schema_context_%29.md): An error that represents an attempt to construct an anyOf schema with an empty array of type choices.
- [GenerationSchema.SchemaError.Context](context.md): The context in which the error occurred.
