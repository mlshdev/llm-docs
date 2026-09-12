> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/swiftdata/schemacomponents](https://developer.apple.com/documentation/swiftdata/schemacomponents)

# Schema components

**Framework:** SwiftData  
**Kind:** API Collection

Specify the constituent parts of your schema, including entities, attributes, and relationships.

## Topics

### Entities

- [Schema.Entity](schema/entity.md): An object that provides a blueprint for the associated model class.

### Attributes

- [Schema.Attribute](schema/attribute.md): An object that describes the configuration and behavior of a specific property of a model class.
- [Schema.CompositeAttribute](schema/compositeattribute.md): An object that describes an attribute that derives its value by composing other attributes.

### Relationships

- [Schema.Relationship](schema/relationship.md): An object that describes the configuration and behavior of a relationship between two model classes.

### Internal

- [Internal symbols](schemacomponentsinternal.md): Restricted-use symbols that the framework requires for macro expansion and other internal tasks.

## See Also

### Creating a schema

- [init(\_:version:)](schema/init%28__version_%29-8el78.md)
- [init(\_:version:)](schema/init%28__version_%29-8jo9o.md)
- [init(versionedSchema:)](schema/init%28versionedschema_%29.md)
- [VersionedSchema](versionedschema.md): An interface for describing a specific version of a schema, including the models it contains.
- [init()](schema/init%28%29.md)
