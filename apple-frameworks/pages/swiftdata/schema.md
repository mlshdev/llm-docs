> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/swiftdata/schema](https://developer.apple.com/documentation/swiftdata/schema)

# Schema

**Framework:** SwiftData  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+ · Swift 5.9+

An object that maps model classes to data in the model store, and helps with the migration of that data between releases.

## Declaration

```swift
final class Schema
```

## Topics

### Creating a schema

- [init(\_:version:)](schema/init%28__version_%29-8el78.md)
- [init(\_:version:)](schema/init%28__version_%29-8jo9o.md)
- [init(versionedSchema:)](schema/init%28versionedschema_%29.md)
- [VersionedSchema](versionedschema.md): An interface for describing a specific version of a schema, including the models it contains.
- [init()](schema/init%28%29.md)
- [Schema components](schemacomponents.md): Specify the constituent parts of your schema, including entities, attributes, and relationships.

### Accessing entities

- [entities](schema/entities.md)
- [entitiesByName](schema/entitiesbyname.md)
- [Schema.Entity](schema/entity.md): An object that provides a blueprint for the associated model class.

### Accessing version details

- [schemaEncodingVersion](schema/schemaencodingversion.md)
- [encodingVersion](schema/encodingversion.md)

### Saving and loading

- [save(to:)](schema/save%28to_%29.md)
- [load(from:)](schema/load%28from_%29.md)

### Classes

- [Schema.Index](schema/index.md)
- [Schema.Unique](schema/unique.md)

### Structures

- [Schema.PropertyMetadata](schema/propertymetadata.md)
- [Schema.Version](schema/version-swift.struct.md)

### Initializers

- [init(\_:version:)](schema/init%28__version_%29-1aea5.md)

### Instance Properties

- [version](schema/version-swift.property.md)

### Instance Methods

- [entity(for:)](schema/entity%28for_%29.md)

### Type Methods

- [entityName(for:)](schema/entityname%28for_%29.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating a model container

- [init(for:migrationPlan:configurations:)](modelcontainer/init%28for_migrationplan_configurations_%29-1czix.md): Creates a model container using the specified schema, migration plan, and configurations.
- [init(for:migrationPlan:configurations:)](modelcontainer/init%28for_migrationplan_configurations_%29-8s4ts.md): Creates a model container using the specified model types, migration plan, and zero or more configurations.
- [init(for:migrationPlan:configurations:)](modelcontainer/init%28for_migrationplan_configurations_%29-qof9.md): Creates a model container using the specified schema, migration plan, and zero or more configurations.
- [PersistentModel](persistentmodel.md): An interface that enables SwiftData to manage a Swift class as a stored model.
- [ModelConfiguration](modelconfiguration.md): A type that describes the configuration of an app’s schema or specific group of models.
- [SchemaMigrationPlan](schemamigrationplan.md): An interface for describing the evolution of a schema and how to migrate between specific versions.
