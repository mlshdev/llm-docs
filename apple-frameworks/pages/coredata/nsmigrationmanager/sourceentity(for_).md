> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmigrationmanager/sourceentity(for:)](https://developer.apple.com/documentation/coredata/nsmigrationmanager/sourceentity(for:))

# sourceEntity(for:) (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the entity description for the source entity of a given entity mapping.

## Declaration

```swift
func sourceEntity(for mEntity: NSEntityMapping) -> NSEntityDescription?
```

## Parameters

- `mEntity`: An entity mapping.

<a id="return-value"></a>

## Return Value

The entity description for the source entity of `mEntity`.

<a id="Discussion"></a>

## Discussion

Entity mappings do not store the actual description objects, but rather the name and version information of the entity.

## See Also

### Getting the Manager’s Configuration

- [destinationContext](destinationcontext.md): The managed object context the migration manager uses for writing the destination persistent store.
- [destinationModel](destinationmodel.md): The destination model for the migration manager.
- [mappingModel](mappingmodel.md): The mapping model for the migration manager.
- [sourceContext](sourcecontext.md): The managed object context the migration manager uses for reading the source persistent store.
- [sourceModel](sourcemodel.md): The source model for the migration manager.
- [destinationEntity(for:)](destinationentity%28for_%29.md): Returns the entity description for the destination entity of a given entity mapping.

# sourceEntityForEntityMapping: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the entity description for the source entity of a given entity mapping.

## Declaration

```objectivec
- (NSEntityDescription *) sourceEntityForEntityMapping:(NSEntityMapping *) mEntity;
```

## Parameters

- `mEntity`: An entity mapping.

<a id="return-value"></a>

## Return Value

The entity description for the source entity of `mEntity`.

<a id="Discussion"></a>

## Discussion

Entity mappings do not store the actual description objects, but rather the name and version information of the entity.

## See Also

### Getting the Manager’s Configuration

- [destinationContext](destinationcontext.md): The managed object context the migration manager uses for writing the destination persistent store.
- [destinationModel](destinationmodel.md): The destination model for the migration manager.
- [mappingModel](mappingmodel.md): The mapping model for the migration manager.
- [sourceContext](sourcecontext.md): The managed object context the migration manager uses for reading the source persistent store.
- [sourceModel](sourcemodel.md): The source model for the migration manager.
- [destinationEntityForEntityMapping:](destinationentity%28for_%29.md): Returns the entity description for the destination entity of a given entity mapping.
