> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmigrationmanager/init(sourcemodel:destinationmodel:)](https://developer.apple.com/documentation/coredata/nsmigrationmanager/init(sourcemodel:destinationmodel:))

# init(sourceModel:destinationModel:) (Swift)

**Framework:** Core Data  
**Kind:** Initializer  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Initializes a migration manager instance with given source and destination models.

## Declaration

```swift
init(sourceModel: NSManagedObjectModel, destinationModel: NSManagedObjectModel)
```

## Parameters

- `sourceModel`: The source managed object model for the migration manager.
- `destinationModel`: The destination managed object model for the migration manager.

<a id="return-value"></a>

## Return Value

A migration manager instance initialized to migrate data in a store that uses `sourceModel` to a store that uses `destinationModel`.

<a id="Discussion"></a>

## Discussion

You specify the mapping model in the migration method,  [migrateStore(from:sourceType:options:with:toDestinationURL:destinationType:destinationOptions:)](migratestore%28from_sourcetype_options_with_todestinationurl_destinationtype_destinationoptions_%29.md).

<a id="Special-Considerations"></a>

### Special Considerations

This is the designated initializer for `NSMigrationManager`.

Although validation of the models is performed during [migrateStore(from:sourceType:options:with:toDestinationURL:destinationType:destinationOptions:)](migratestore%28from_sourcetype_options_with_todestinationurl_destinationtype_destinationoptions_%29.md), as with `NSPersistentStoreCoordinator` once models are added to the migration manager they are immutable and cannot be altered.

## See Also

### Related Documentation

- [destinationModel](destinationmodel.md): The destination model for the migration manager.
- [mappingModel](mappingmodel.md): The mapping model for the migration manager.
- [sourceModel](sourcemodel.md): The source model for the migration manager.
- [migrateStore(from:sourceType:options:with:toDestinationURL:destinationType:destinationOptions:)](migratestore%28from_sourcetype_options_with_todestinationurl_destinationtype_destinationoptions_%29.md): Deprecated. Migrates the store at a given source URL to the store at a given destination URL, performing all of the mappings specified in a given mapping model.
- [Core Data Model Versioning and Data Migration Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CoreDataVersioning/Articles/Introduction.html#//apple_ref/doc/uid/TP40004399)

# initWithSourceModel:destinationModel: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Initializes a migration manager instance with given source and destination models.

## Declaration

```objectivec
- (instancetype) initWithSourceModel:(NSManagedObjectModel *) sourceModel destinationModel:(NSManagedObjectModel *) destinationModel;
```

## Parameters

- `sourceModel`: The source managed object model for the migration manager.
- `destinationModel`: The destination managed object model for the migration manager.

<a id="return-value"></a>

## Return Value

A migration manager instance initialized to migrate data in a store that uses `sourceModel` to a store that uses `destinationModel`.

<a id="Discussion"></a>

## Discussion

You specify the mapping model in the migration method,  [migrateStoreFromURL:type:options:withMappingModel:toDestinationURL:destinationType:destinationOptions:error:](migratestore%28from_sourcetype_options_with_todestinationurl_destinationtype_destinationoptions_%29.md).

<a id="Special-Considerations"></a>

### Special Considerations

This is the designated initializer for `NSMigrationManager`.

Although validation of the models is performed during [migrateStoreFromURL:type:options:withMappingModel:toDestinationURL:destinationType:destinationOptions:error:](migratestore%28from_sourcetype_options_with_todestinationurl_destinationtype_destinationoptions_%29.md), as with `NSPersistentStoreCoordinator` once models are added to the migration manager they are immutable and cannot be altered.

## See Also

### Related Documentation

- [destinationModel](destinationmodel.md): The destination model for the migration manager.
- [mappingModel](mappingmodel.md): The mapping model for the migration manager.
- [sourceModel](sourcemodel.md): The source model for the migration manager.
- [migrateStoreFromURL:type:options:withMappingModel:toDestinationURL:destinationType:destinationOptions:error:](migratestore%28from_sourcetype_options_with_todestinationurl_destinationtype_destinationoptions_%29.md): Deprecated. Migrates the store at a given source URL to the store at a given destination URL, performing all of the mappings specified in a given mapping model.
- [Core Data Model Versioning and Data Migration Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CoreDataVersioning/Articles/Introduction.html#//apple_ref/doc/uid/TP40004399)
