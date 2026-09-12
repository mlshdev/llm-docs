> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/swiftdata/modelconfiguration](https://developer.apple.com/documentation/swiftdata/modelconfiguration)

# ModelConfiguration

**Framework:** SwiftData  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+ · Swift 5.9+

A type that describes the configuration of an app’s schema or specific group of models.

## Declaration

```swift
struct ModelConfiguration
```

## Mentioned In

- [Syncing model data across a person’s devices](syncing-model-data-across-a-persons-devices.md)
- [Preserving your app’s model data across launches](preserving-your-apps-model-data-across-launches.md)

## Topics

### Creating a model configuration

- [init(isStoredInMemoryOnly:)](modelconfiguration/init%28isstoredinmemoryonly_%29.md): Creates a basic model configuration.
- [init(for:isStoredInMemoryOnly:)](modelconfiguration/init%28for_isstoredinmemoryonly_%29.md): Creates a model configuration for the specified model types.
- [init(\_:schema:isStoredInMemoryOnly:allowsSave:groupContainer:cloudKitDatabase:)](modelconfiguration/init%28__schema_isstoredinmemoryonly_allowssave_groupcontainer_cloudkitdatabase_%29.md): Creates a named model configuration for the specified schema.
- [init(\_:schema:url:allowsSave:cloudKitDatabase:)](modelconfiguration/init%28__schema_url_allowssave_cloudkitdatabase_%29.md): Creates a named model configuration that specifies the on-disk location of the schema’s persistent storage.

### Accessing configuration details

- [url](modelconfiguration/url.md): The on-disk location of the schema’s persistent storage.
- [allowsSave](modelconfiguration/allowssave.md): A Boolean value that determines whether the associated persistent storage is writable.
- [isStoredInMemoryOnly](modelconfiguration/isstoredinmemoryonly.md): A Boolean value that determines whether the associated persistent storage is ephemeral and exists only in memory.

### Sharing and syncing the model store

- [cloudKitContainerIdentifier](modelconfiguration/cloudkitcontaineridentifier.md): The identifier of the configuration’s CloudKit database container.
- [cloudKitDatabase](modelconfiguration/cloudkitdatabase-swift.property.md): The option to use when detecting the container of the preferred CloudKit database.
- [ModelConfiguration.CloudKitDatabase](modelconfiguration/cloudkitdatabase-swift.struct.md): A type that describes the options for detecting a CloudKit database.
- [groupAppContainerIdentifier](modelconfiguration/groupappcontaineridentifier.md): The identifier of the configuration’s app group container.
- [groupContainer](modelconfiguration/groupcontainer-swift.property.md): The option to use when detecting the preferred app group container.
- [ModelConfiguration.GroupContainer](modelconfiguration/groupcontainer-swift.struct.md): A type that describes the options for detecting an app group container.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [DataStoreConfiguration](datastoreconfiguration.md)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating a model container

- [init(for:migrationPlan:configurations:)](modelcontainer/init%28for_migrationplan_configurations_%29-1czix.md): Creates a model container using the specified schema, migration plan, and configurations.
- [init(for:migrationPlan:configurations:)](modelcontainer/init%28for_migrationplan_configurations_%29-8s4ts.md): Creates a model container using the specified model types, migration plan, and zero or more configurations.
- [init(for:migrationPlan:configurations:)](modelcontainer/init%28for_migrationplan_configurations_%29-qof9.md): Creates a model container using the specified schema, migration plan, and zero or more configurations.
- [PersistentModel](persistentmodel.md): An interface that enables SwiftData to manage a Swift class as a stored model.
- [Schema](schema.md): An object that maps model classes to data in the model store, and helps with the migration of that data between releases.
- [SchemaMigrationPlan](schemamigrationplan.md): An interface for describing the evolution of a schema and how to migrate between specific versions.
