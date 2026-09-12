> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmigrationmanager/destinationcontext](https://developer.apple.com/documentation/coredata/nsmigrationmanager/destinationcontext)

# destinationContext (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The managed object context the migration manager uses for writing the destination persistent store.

## Declaration

```swift
var destinationContext: NSManagedObjectContext { get }
```

<a id="Discussion"></a>

## Discussion

This context is created on demand as part of the initialization of the Core Data stacks used for migration.

## See Also

### Getting the Manager’s Configuration

- [destinationModel](destinationmodel.md): The destination model for the migration manager.
- [mappingModel](mappingmodel.md): The mapping model for the migration manager.
- [sourceContext](sourcecontext.md): The managed object context the migration manager uses for reading the source persistent store.
- [sourceModel](sourcemodel.md): The source model for the migration manager.
- [destinationEntity(for:)](destinationentity%28for_%29.md): Returns the entity description for the destination entity of a given entity mapping.
- [sourceEntity(for:)](sourceentity%28for_%29.md): Returns the entity description for the source entity of a given entity mapping.

# destinationContext (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The managed object context the migration manager uses for writing the destination persistent store.

## Declaration

```objectivec
@property (strong, readonly) NSManagedObjectContext * destinationContext;
```

<a id="Discussion"></a>

## Discussion

This context is created on demand as part of the initialization of the Core Data stacks used for migration.

## See Also

### Getting the Manager’s Configuration

- [destinationModel](destinationmodel.md): The destination model for the migration manager.
- [mappingModel](mappingmodel.md): The mapping model for the migration manager.
- [sourceContext](sourcecontext.md): The managed object context the migration manager uses for reading the source persistent store.
- [sourceModel](sourcemodel.md): The source model for the migration manager.
- [destinationEntityForEntityMapping:](destinationentity%28for_%29.md): Returns the entity description for the destination entity of a given entity mapping.
- [sourceEntityForEntityMapping:](sourceentity%28for_%29.md): Returns the entity description for the source entity of a given entity mapping.
