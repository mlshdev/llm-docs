> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmigrationmanager/destinationmodel](https://developer.apple.com/documentation/coredata/nsmigrationmanager/destinationmodel)

# destinationModel (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The destination model for the migration manager.

## Declaration

```swift
var destinationModel: NSManagedObjectModel { get }
```

## See Also

### Related Documentation

- [init(sourceModel:destinationModel:)](init%28sourcemodel_destinationmodel_%29.md): Initializes a migration manager instance with given source and destination models.

### Getting the Manager’s Configuration

- [destinationContext](destinationcontext.md): The managed object context the migration manager uses for writing the destination persistent store.
- [mappingModel](mappingmodel.md): The mapping model for the migration manager.
- [sourceContext](sourcecontext.md): The managed object context the migration manager uses for reading the source persistent store.
- [sourceModel](sourcemodel.md): The source model for the migration manager.
- [destinationEntity(for:)](destinationentity%28for_%29.md): Returns the entity description for the destination entity of a given entity mapping.
- [sourceEntity(for:)](sourceentity%28for_%29.md): Returns the entity description for the source entity of a given entity mapping.

# destinationModel (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The destination model for the migration manager.

## Declaration

```objectivec
@property (strong, readonly) NSManagedObjectModel * destinationModel;
```

## See Also

### Related Documentation

- [initWithSourceModel:destinationModel:](init%28sourcemodel_destinationmodel_%29.md): Initializes a migration manager instance with given source and destination models.

### Getting the Manager’s Configuration

- [destinationContext](destinationcontext.md): The managed object context the migration manager uses for writing the destination persistent store.
- [mappingModel](mappingmodel.md): The mapping model for the migration manager.
- [sourceContext](sourcecontext.md): The managed object context the migration manager uses for reading the source persistent store.
- [sourceModel](sourcemodel.md): The source model for the migration manager.
- [destinationEntityForEntityMapping:](destinationentity%28for_%29.md): Returns the entity description for the destination entity of a given entity mapping.
- [sourceEntityForEntityMapping:](sourceentity%28for_%29.md): Returns the entity description for the source entity of a given entity mapping.
