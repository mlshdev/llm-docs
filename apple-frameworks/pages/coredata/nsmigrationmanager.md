> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmigrationmanager](https://developer.apple.com/documentation/coredata/nsmigrationmanager)

# NSMigrationManager (Swift)

**Framework:** Core Data  
**Kind:** Class  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A migration manager instance that performs a migration of data from one persistent store to another using a given mapping model.

## Declaration

```swift
class NSMigrationManager
```

## Topics

### Creating a Migration Manager

- [init(sourceModel:destinationModel:)](nsmigrationmanager/init%28sourcemodel_destinationmodel_%29.md): Initializes a migration manager instance with given source and destination models.

### Getting the Manager’s Configuration

- [destinationContext](nsmigrationmanager/destinationcontext.md): The managed object context the migration manager uses for writing the destination persistent store.
- [destinationModel](nsmigrationmanager/destinationmodel.md): The destination model for the migration manager.
- [mappingModel](nsmigrationmanager/mappingmodel.md): The mapping model for the migration manager.
- [sourceContext](nsmigrationmanager/sourcecontext.md): The managed object context the migration manager uses for reading the source persistent store.
- [sourceModel](nsmigrationmanager/sourcemodel.md): The source model for the migration manager.
- [destinationEntity(for:)](nsmigrationmanager/destinationentity%28for_%29.md): Returns the entity description for the destination entity of a given entity mapping.
- [sourceEntity(for:)](nsmigrationmanager/sourceentity%28for_%29.md): Returns the entity description for the source entity of a given entity mapping.

### Customizing the Manager

- [userInfo](nsmigrationmanager/userinfo.md): The user info for the migration manager.
- [usesStoreSpecificMigrationManager](nsmigrationmanager/usesstorespecificmigrationmanager.md): A Boolean value that indicates whether the migration manager tries to use a store specific migration manager to perform the migration.

### Managing Sources and Destinations

- [associate(sourceInstance:withDestinationInstance:for:)](nsmigrationmanager/associate%28sourceinstance_withdestinationinstance_for_%29.md): Associates a given source managed object instance with an array of destination instances for a given property mapping.
- [destinationInstances(forEntityMappingName:sourceInstances:)](nsmigrationmanager/destinationinstances%28forentitymappingname_sourceinstances_%29.md): Returns the managed object instances created in the destination store for the named entity mapping for the given array of source instances.
- [sourceInstances(forEntityMappingName:destinationInstances:)](nsmigrationmanager/sourceinstances%28forentitymappingname_destinationinstances_%29.md): Returns the managed object instances in the source store used to create the given destination instances for the passed in property mapping.

### Performing a Migration

- [migrateStore(from:type:options:mapping:to:type:options:)](nsmigrationmanager/migratestore%28from_type_options_mapping_to_type_options_%29.md): Migrates the source store to the destination using the specified mapping model.
- [migrateStore(from:sourceType:options:with:toDestinationURL:destinationType:destinationOptions:)](nsmigrationmanager/migratestore%28from_sourcetype_options_with_todestinationurl_destinationtype_destinationoptions_%29.md): Deprecated. Migrates the store at a given source URL to the store at a given destination URL, performing all of the mappings specified in a given mapping model.

### Monitoring a Migration’s Progress

- [migrationProgress](nsmigrationmanager/migrationprogress.md): A number between `0` and `1` that indicates the proportion of completeness of the migration.
- [currentEntityMapping](nsmigrationmanager/currententitymapping.md): The entity mapping currently being processed.

### Aborting a Migration

- [cancelMigrationWithError(\_:)](nsmigrationmanager/cancelmigrationwitherror%28__%29.md): Cancels the migration with a given error.
- [reset()](nsmigrationmanager/reset%28%29.md): Resets the association tables for the migration.

### Deprecated

- [Deprecated Symbols](nsmigrationmanager-deprecated-symbols.md): Review unsupported symbols and their replacements.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Entity Mapping

- [NSMappingModel](nsmappingmodel.md): A model instance that specifies how to map a model from a source to a destination managed object model.
- [NSEntityMapping](nsentitymapping.md): A mapping instance that specifies how to map an entity from a source to a destination managed object model.
- [NSEntityMigrationPolicy](nsentitymigrationpolicy.md): A policy instance that customizes the migration process for an entity mapping.
- [NSEntityMappingType](nsentitymappingtype.md): The types for mapping an entity between a source model and a destination model.
- [NSPropertyMapping](nspropertymapping.md): A mapping instance that specifies in a model how to map from a property in a source entity to a property in a destination entity.

# NSMigrationManager (Objective-C)

**Framework:** Core Data  
**Kind:** Class  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A migration manager instance that performs a migration of data from one persistent store to another using a given mapping model.

## Declaration

```objectivec
@interface NSMigrationManager : NSObject
```

## Topics

### Creating a Migration Manager

- [initWithSourceModel:destinationModel:](nsmigrationmanager/init%28sourcemodel_destinationmodel_%29.md): Initializes a migration manager instance with given source and destination models.

### Getting the Manager’s Configuration

- [destinationContext](nsmigrationmanager/destinationcontext.md): The managed object context the migration manager uses for writing the destination persistent store.
- [destinationModel](nsmigrationmanager/destinationmodel.md): The destination model for the migration manager.
- [mappingModel](nsmigrationmanager/mappingmodel.md): The mapping model for the migration manager.
- [sourceContext](nsmigrationmanager/sourcecontext.md): The managed object context the migration manager uses for reading the source persistent store.
- [sourceModel](nsmigrationmanager/sourcemodel.md): The source model for the migration manager.
- [destinationEntityForEntityMapping:](nsmigrationmanager/destinationentity%28for_%29.md): Returns the entity description for the destination entity of a given entity mapping.
- [sourceEntityForEntityMapping:](nsmigrationmanager/sourceentity%28for_%29.md): Returns the entity description for the source entity of a given entity mapping.

### Customizing the Manager

- [userInfo](nsmigrationmanager/userinfo.md): The user info for the migration manager.
- [usesStoreSpecificMigrationManager](nsmigrationmanager/usesstorespecificmigrationmanager.md): A Boolean value that indicates whether the migration manager tries to use a store specific migration manager to perform the migration.

### Managing Sources and Destinations

- [associateSourceInstance:withDestinationInstance:forEntityMapping:](nsmigrationmanager/associate%28sourceinstance_withdestinationinstance_for_%29.md): Associates a given source managed object instance with an array of destination instances for a given property mapping.
- [destinationInstancesForEntityMappingNamed:sourceInstances:](nsmigrationmanager/destinationinstances%28forentitymappingname_sourceinstances_%29.md): Returns the managed object instances created in the destination store for the named entity mapping for the given array of source instances.
- [sourceInstancesForEntityMappingNamed:destinationInstances:](nsmigrationmanager/sourceinstances%28forentitymappingname_destinationinstances_%29.md): Returns the managed object instances in the source store used to create the given destination instances for the passed in property mapping.

### Performing a Migration

- [migrateStoreFromURL:type:options:withMappingModel:toDestinationURL:destinationType:destinationOptions:error:](nsmigrationmanager/migratestore%28from_sourcetype_options_with_todestinationurl_destinationtype_destinationoptions_%29.md): Deprecated. Migrates the store at a given source URL to the store at a given destination URL, performing all of the mappings specified in a given mapping model.

### Monitoring a Migration’s Progress

- [migrationProgress](nsmigrationmanager/migrationprogress.md): A number between `0` and `1` that indicates the proportion of completeness of the migration.
- [currentEntityMapping](nsmigrationmanager/currententitymapping.md): The entity mapping currently being processed.

### Aborting a Migration

- [cancelMigrationWithError:](nsmigrationmanager/cancelmigrationwitherror%28__%29.md): Cancels the migration with a given error.
- [reset](nsmigrationmanager/reset%28%29.md): Resets the association tables for the migration.

### Deprecated

- [Deprecated Symbols](nsmigrationmanager-deprecated-symbols.md): Review unsupported symbols and their replacements.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Entity Mapping

- [NSMappingModel](nsmappingmodel.md): A model instance that specifies how to map a model from a source to a destination managed object model.
- [NSEntityMapping](nsentitymapping.md): A mapping instance that specifies how to map an entity from a source to a destination managed object model.
- [NSEntityMigrationPolicy](nsentitymigrationpolicy.md): A policy instance that customizes the migration process for an entity mapping.
- [NSEntityMappingType](nsentitymappingtype.md): The types for mapping an entity between a source model and a destination model.
- [NSPropertyMapping](nspropertymapping.md): A mapping instance that specifies in a model how to map from a property in a source entity to a property in a destination entity.
