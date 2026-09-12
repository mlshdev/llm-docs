> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsentitymapping/sourceentityname](https://developer.apple.com/documentation/coredata/nsentitymapping/sourceentityname)

# sourceEntityName (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The source entity name for the entity mapping.

## Declaration

```swift
var sourceEntityName: String? { get set }
```

<a id="Discussion"></a>

## Discussion

Mappings are not directly bound to entity descriptions; you can use the [sourceEntity(for:)](../nsmigrationmanager/sourceentity%28for_%29.md) method on the migration manager to retrieve the entity description for this entity name.

## See Also

### Related Documentation

- [Core Data Model Versioning and Data Migration Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CoreDataVersioning/Articles/Introduction.html#//apple_ref/doc/uid/TP40004399)
- [destinationEntityName](destinationentityname.md): The destination entity name for the entity mapping.

### Managing Source Information

- [sourceEntityVersionHash](sourceentityversionhash.md): The version hash of the source entity for the entity mapping.
- [sourceExpression](sourceexpression.md): The source expression for the entity mapping.

# sourceEntityName (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The source entity name for the entity mapping.

## Declaration

```objectivec
@property (copy, nullable) NSString * sourceEntityName;
```

<a id="Discussion"></a>

## Discussion

Mappings are not directly bound to entity descriptions; you can use the [sourceEntityForEntityMapping:](../nsmigrationmanager/sourceentity%28for_%29.md) method on the migration manager to retrieve the entity description for this entity name.

## See Also

### Related Documentation

- [Core Data Model Versioning and Data Migration Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CoreDataVersioning/Articles/Introduction.html#//apple_ref/doc/uid/TP40004399)
- [destinationEntityName](destinationentityname.md): The destination entity name for the entity mapping.

### Managing Source Information

- [sourceEntityVersionHash](sourceentityversionhash.md): The version hash of the source entity for the entity mapping.
- [sourceExpression](sourceexpression.md): The source expression for the entity mapping.
