> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmigrationmanager/mappingmodel](https://developer.apple.com/documentation/coredata/nsmigrationmanager/mappingmodel)

# mappingModel (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The mapping model for the migration manager.

## Declaration

```swift
var mappingModel: NSMappingModel { get }
```

## See Also

### Related Documentation

- [migrateStore(from:sourceType:options:with:toDestinationURL:destinationType:destinationOptions:)](migratestore%28from_sourcetype_options_with_todestinationurl_destinationtype_destinationoptions_%29.md): Deprecated. Migrates the store at a given source URL to the store at a given destination URL, performing all of the mappings specified in a given mapping model.

### Getting the Manager’s Configuration

- [destinationContext](destinationcontext.md): The managed object context the migration manager uses for writing the destination persistent store.
- [destinationModel](destinationmodel.md): The destination model for the migration manager.
- [sourceContext](sourcecontext.md): The managed object context the migration manager uses for reading the source persistent store.
- [sourceModel](sourcemodel.md): The source model for the migration manager.
- [destinationEntity(for:)](destinationentity%28for_%29.md): Returns the entity description for the destination entity of a given entity mapping.
- [sourceEntity(for:)](sourceentity%28for_%29.md): Returns the entity description for the source entity of a given entity mapping.

# mappingModel (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The mapping model for the migration manager.

## Declaration

```objectivec
@property (strong, readonly) NSMappingModel * mappingModel;
```

## See Also

### Related Documentation

- [migrateStoreFromURL:type:options:withMappingModel:toDestinationURL:destinationType:destinationOptions:error:](migratestore%28from_sourcetype_options_with_todestinationurl_destinationtype_destinationoptions_%29.md): Deprecated. Migrates the store at a given source URL to the store at a given destination URL, performing all of the mappings specified in a given mapping model.

### Getting the Manager’s Configuration

- [destinationContext](destinationcontext.md): The managed object context the migration manager uses for writing the destination persistent store.
- [destinationModel](destinationmodel.md): The destination model for the migration manager.
- [sourceContext](sourcecontext.md): The managed object context the migration manager uses for reading the source persistent store.
- [sourceModel](sourcemodel.md): The source model for the migration manager.
- [destinationEntityForEntityMapping:](destinationentity%28for_%29.md): Returns the entity description for the destination entity of a given entity mapping.
- [sourceEntityForEntityMapping:](sourceentity%28for_%29.md): Returns the entity description for the source entity of a given entity mapping.
