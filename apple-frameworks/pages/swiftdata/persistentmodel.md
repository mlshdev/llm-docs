> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/swiftdata/persistentmodel](https://developer.apple.com/documentation/swiftdata/persistentmodel)

# PersistentModel

**Framework:** SwiftData  
**Kind:** Protocol  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+ · Swift 5.9+

An interface that enables SwiftData to manage a Swift class as a stored model.

## Declaration

```swift
protocol PersistentModel : AnyObject, Observable, Hashable, Identifiable, SendableMetatype
```

## Mentioned In

- [Preserving your app’s model data across launches](preserving-your-apps-model-data-across-launches.md)

## Topics

### Creating a persistent model

- [init(backingData:)](persistentmodel/init%28backingdata_%29.md)

### Identifying the model instance

- [persistentModelID](persistentmodel/persistentmodelid.md)
- [PersistentIdentifier](persistentidentifier.md): A type that describes the aggregate identity of a SwiftData model.
- [modelContext](persistentmodel/modelcontext.md)

### Accessing a value by key path

- [getValue(forKey:)](persistentmodel/getvalue%28forkey_%29-299oe.md)
- [getValue(forKey:)](persistentmodel/getvalue%28forkey_%29-3o59k.md)
- [getValue(forKey:)](persistentmodel/getvalue%28forkey_%29-4cs0c.md)
- [getValue(forKey:)](persistentmodel/getvalue%28forkey_%29-5m792.md)
- [getValue(forKey:)](persistentmodel/getvalue%28forkey_%29-998oq.md)
- [getTransformableValue(forKey:)](persistentmodel/gettransformablevalue%28forkey_%29.md)

### Modifying a value by key path

- [setValue(forKey:to:)](persistentmodel/setvalue%28forkey_to_%29-18176.md)
- [setValue(forKey:to:)](persistentmodel/setvalue%28forkey_to_%29-3mmp2.md)
- [setValue(forKey:to:)](persistentmodel/setvalue%28forkey_to_%29-3uqwc.md)
- [setValue(forKey:to:)](persistentmodel/setvalue%28forkey_to_%29-8wepb.md)
- [setValue(forKey:to:)](persistentmodel/setvalue%28forkey_to_%29-xt24.md)
- [setTransformableValue(forKey:to:)](persistentmodel/settransformablevalue%28forkey_to_%29.md)

### Accessing supplementary information

- [schemaMetadata](persistentmodel/schemametadata.md)
- [persistentBackingData](persistentmodel/persistentbackingdata.md)
- [hasChanges](persistentmodel/haschanges.md)
- [isDeleted](persistentmodel/isdeleted.md)

### Internal

- [Internal symbols](persistentmodelinternal.md): Restricted-use symbols that the framework requires for macro expansion and other internal tasks.

### Associated Types

- [Root](persistentmodel/root.md)

### Type Methods

- [createBackingData()](persistentmodel/createbackingdata%28%29.md)

### Default Implementations

- [Equatable Implementations](persistentmodel/equatable-implementations.md)
- [Hashable Implementations](persistentmodel/hashable-implementations.md)

## Relationships

### Inherits From

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [Observable](https://developer.apple.com/documentation/observation/observable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating a model container

- [init(for:migrationPlan:configurations:)](modelcontainer/init%28for_migrationplan_configurations_%29-1czix.md): Creates a model container using the specified schema, migration plan, and configurations.
- [init(for:migrationPlan:configurations:)](modelcontainer/init%28for_migrationplan_configurations_%29-8s4ts.md): Creates a model container using the specified model types, migration plan, and zero or more configurations.
- [init(for:migrationPlan:configurations:)](modelcontainer/init%28for_migrationplan_configurations_%29-qof9.md): Creates a model container using the specified schema, migration plan, and zero or more configurations.
- [ModelConfiguration](modelconfiguration.md): A type that describes the configuration of an app’s schema or specific group of models.
- [Schema](schema.md): An object that maps model classes to data in the model store, and helps with the migration of that data between releases.
- [SchemaMigrationPlan](schemamigrationplan.md): An interface for describing the evolution of a schema and how to migrate between specific versions.
