> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsentitymappingtype](https://developer.apple.com/documentation/coredata/nsentitymappingtype)

# NSEntityMappingType (Swift)

**Framework:** Core Data  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The types for mapping an entity between a source model and a destination model.

## Declaration

```swift
enum NSEntityMappingType
```

## Topics

### Enumeration Cases

- [NSEntityMappingType.addEntityMappingType](nsentitymappingtype/addentitymappingtype.md): Specifies that this is a new entity in the destination model.
- [NSEntityMappingType.copyEntityMappingType](nsentitymappingtype/copyentitymappingtype.md): Specifies that source instances are migrated as-is.
- [NSEntityMappingType.customEntityMappingType](nsentitymappingtype/customentitymappingtype.md): Specifies a custom mapping.
- [NSEntityMappingType.removeEntityMappingType](nsentitymappingtype/removeentitymappingtype.md): Specifies that this entity is not present in the destination model.
- [NSEntityMappingType.transformEntityMappingType](nsentitymappingtype/transformentitymappingtype.md): Specifies that entity exists in source and destination and is mapped.
- [NSEntityMappingType.undefinedEntityMappingType](nsentitymappingtype/undefinedentitymappingtype.md): Specifies that the developer handles destination instance creation.

### Initializers

- [init(rawValue:)](nsentitymappingtype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Entity Mapping

- [NSMigrationManager](nsmigrationmanager.md): A migration manager instance that performs a migration of data from one persistent store to another using a given mapping model.
- [NSMappingModel](nsmappingmodel.md): A model instance that specifies how to map a model from a source to a destination managed object model.
- [NSEntityMapping](nsentitymapping.md): A mapping instance that specifies how to map an entity from a source to a destination managed object model.
- [NSEntityMigrationPolicy](nsentitymigrationpolicy.md): A policy instance that customizes the migration process for an entity mapping.
- [NSPropertyMapping](nspropertymapping.md): A mapping instance that specifies in a model how to map from a property in a source entity to a property in a destination entity.

# NSEntityMappingType (Objective-C)

**Framework:** Core Data  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The types for mapping an entity between a source model and a destination model.

## Declaration

```objectivec
enum NSEntityMappingType : NSUInteger;
```

## Topics

### Enumeration Cases

- [NSAddEntityMappingType](nsentitymappingtype/addentitymappingtype.md): Specifies that this is a new entity in the destination model.
- [NSCopyEntityMappingType](nsentitymappingtype/copyentitymappingtype.md): Specifies that source instances are migrated as-is.
- [NSCustomEntityMappingType](nsentitymappingtype/customentitymappingtype.md): Specifies a custom mapping.
- [NSRemoveEntityMappingType](nsentitymappingtype/removeentitymappingtype.md): Specifies that this entity is not present in the destination model.
- [NSTransformEntityMappingType](nsentitymappingtype/transformentitymappingtype.md): Specifies that entity exists in source and destination and is mapped.
- [NSUndefinedEntityMappingType](nsentitymappingtype/undefinedentitymappingtype.md): Specifies that the developer handles destination instance creation.

## See Also

### Entity Mapping

- [NSMigrationManager](nsmigrationmanager.md): A migration manager instance that performs a migration of data from one persistent store to another using a given mapping model.
- [NSMappingModel](nsmappingmodel.md): A model instance that specifies how to map a model from a source to a destination managed object model.
- [NSEntityMapping](nsentitymapping.md): A mapping instance that specifies how to map an entity from a source to a destination managed object model.
- [NSEntityMigrationPolicy](nsentitymigrationpolicy.md): A policy instance that customizes the migration process for an entity mapping.
- [NSPropertyMapping](nspropertymapping.md): A mapping instance that specifies in a model how to map from a property in a source entity to a property in a destination entity.
