> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsentitymapping/destinationentityname](https://developer.apple.com/documentation/coredata/nsentitymapping/destinationentityname)

# destinationEntityName (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The destination entity name for the entity mapping.

## Declaration

```swift
var destinationEntityName: String? { get set }
```

<a id="Discussion"></a>

## Discussion

Mappings are not directly bound to entity descriptions. You can use the migration manager’s [destinationEntity(for:)](../nsmigrationmanager/destinationentity%28for_%29.md) method to retrieve the entity description for this entity name.

## See Also

### Related Documentation

- [sourceEntityName](sourceentityname.md): The source entity name for the entity mapping.

### Managing Destination Information

- [destinationEntityVersionHash](destinationentityversionhash.md): The version hash for the destination entity for the entity mapping.

# destinationEntityName (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The destination entity name for the entity mapping.

## Declaration

```objectivec
@property (copy, nullable) NSString * destinationEntityName;
```

<a id="Discussion"></a>

## Discussion

Mappings are not directly bound to entity descriptions. You can use the migration manager’s [destinationEntityForEntityMapping:](../nsmigrationmanager/destinationentity%28for_%29.md) method to retrieve the entity description for this entity name.

## See Also

### Related Documentation

- [sourceEntityName](sourceentityname.md): The source entity name for the entity mapping.

### Managing Destination Information

- [destinationEntityVersionHash](destinationentityversionhash.md): The version hash for the destination entity for the entity mapping.
