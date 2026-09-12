> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/swiftdata/schemamigrationplan](https://developer.apple.com/documentation/swiftdata/schemamigrationplan)

# SchemaMigrationPlan

**Framework:** SwiftData  
**Kind:** Protocol  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+ · Swift 5.9+

An interface for describing the evolution of a schema and how to migrate between specific versions.

## Declaration

```swift
protocol SchemaMigrationPlan : SendableMetatype
```

## Topics

### Managing versioned schemas

- [schemas](schemamigrationplan/schemas.md)
- [VersionedSchema](versionedschema.md): An interface for describing a specific version of a schema, including the models it contains.

### Managing migration stages

- [stages](schemamigrationplan/stages.md)
- [MigrationStage](migrationstage.md): Describes a migration between two versions of the same schema.

## Relationships

### Inherits From

- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating a model container

- [init(for:migrationPlan:configurations:)](modelcontainer/init%28for_migrationplan_configurations_%29-1czix.md): Creates a model container using the specified schema, migration plan, and configurations.
- [init(for:migrationPlan:configurations:)](modelcontainer/init%28for_migrationplan_configurations_%29-8s4ts.md): Creates a model container using the specified model types, migration plan, and zero or more configurations.
- [init(for:migrationPlan:configurations:)](modelcontainer/init%28for_migrationplan_configurations_%29-qof9.md): Creates a model container using the specified schema, migration plan, and zero or more configurations.
- [PersistentModel](persistentmodel.md): An interface that enables SwiftData to manage a Swift class as a stored model.
- [ModelConfiguration](modelconfiguration.md): A type that describes the configuration of an app’s schema or specific group of models.
- [Schema](schema.md): An object that maps model classes to data in the model store, and helps with the migration of that data between releases.
