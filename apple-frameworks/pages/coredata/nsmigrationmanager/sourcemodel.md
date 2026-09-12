> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmigrationmanager/sourcemodel](https://developer.apple.com/documentation/coredata/nsmigrationmanager/sourcemodel)

# sourceModel (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The source model for the migration manager.

## Declaration

```swift
var sourceModel: NSManagedObjectModel { get }
```

## See Also

### Related Documentation

- [init(sourceModel:destinationModel:)](init%28sourcemodel_destinationmodel_%29.md): Initializes a migration manager instance with given source and destination models.

### Getting the Manager’s Configuration

- [destinationContext](destinationcontext.md): The managed object context the migration manager uses for writing the destination persistent store.
- [destinationModel](destinationmodel.md): The destination model for the migration manager.
- [mappingModel](mappingmodel.md): The mapping model for the migration manager.
- [sourceContext](sourcecontext.md): The managed object context the migration manager uses for reading the source persistent store.
- [destinationEntity(for:)](destinationentity%28for_%29.md): Returns the entity description for the destination entity of a given entity mapping.
- [sourceEntity(for:)](sourceentity%28for_%29.md): Returns the entity description for the source entity of a given entity mapping.

# sourceModel (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The source model for the migration manager.

## Declaration

```objectivec
@property (strong, readonly) NSManagedObjectModel * sourceModel;
```

## See Also

### Related Documentation

- [initWithSourceModel:destinationModel:](init%28sourcemodel_destinationmodel_%29.md): Initializes a migration manager instance with given source and destination models.

### Getting the Manager’s Configuration

- [destinationContext](destinationcontext.md): The managed object context the migration manager uses for writing the destination persistent store.
- [destinationModel](destinationmodel.md): The destination model for the migration manager.
- [mappingModel](mappingmodel.md): The mapping model for the migration manager.
- [sourceContext](sourcecontext.md): The managed object context the migration manager uses for reading the source persistent store.
- [destinationEntityForEntityMapping:](destinationentity%28for_%29.md): Returns the entity description for the destination entity of a given entity mapping.
- [sourceEntityForEntityMapping:](sourceentity%28for_%29.md): Returns the entity description for the source entity of a given entity mapping.
