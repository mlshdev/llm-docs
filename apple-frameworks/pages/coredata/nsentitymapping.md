> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsentitymapping](https://developer.apple.com/documentation/coredata/nsentitymapping)

# NSEntityMapping (Swift)

**Framework:** Core Data  
**Kind:** Class  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A mapping instance that specifies how to map an entity from a source to a destination managed object model.

## Declaration

```swift
class NSEntityMapping
```

## Topics

### Managing Source Information

- [sourceEntityName](nsentitymapping/sourceentityname.md): The source entity name for the entity mapping.
- [sourceEntityVersionHash](nsentitymapping/sourceentityversionhash.md): The version hash of the source entity for the entity mapping.
- [sourceExpression](nsentitymapping/sourceexpression.md): The source expression for the entity mapping.

### Managing Destination Information

- [destinationEntityName](nsentitymapping/destinationentityname.md): The destination entity name for the entity mapping.
- [destinationEntityVersionHash](nsentitymapping/destinationentityversionhash.md): The version hash for the destination entity for the entity mapping.

### Managing Mapping Information

- [name](nsentitymapping/name.md): The name of the entity mapping.
- [mappingType](nsentitymapping/mappingtype.md): The mapping type for the entity mapping.
- [entityMigrationPolicyClassName](nsentitymapping/entitymigrationpolicyclassname.md): The class name of the migration policy for the entity mapping.
- [attributeMappings](nsentitymapping/attributemappings.md): The array of attribute mappings for the entity mapping.
- [relationshipMappings](nsentitymapping/relationshipmappings.md): The array of relationship mappings for the entity mapping.
- [userInfo](nsentitymapping/userinfo.md): The user info dictionary for the entity mapping.

### Constants

- [NSEntityMappingType.undefinedEntityMappingType](nsentitymappingtype/undefinedentitymappingtype.md): Specifies that the developer handles destination instance creation.
- [NSEntityMappingType.customEntityMappingType](nsentitymappingtype/customentitymappingtype.md): Specifies a custom mapping.
- [NSEntityMappingType.addEntityMappingType](nsentitymappingtype/addentitymappingtype.md): Specifies that this is a new entity in the destination model.
- [NSEntityMappingType.removeEntityMappingType](nsentitymappingtype/removeentitymappingtype.md): Specifies that this entity is not present in the destination model.
- [NSEntityMappingType.copyEntityMappingType](nsentitymappingtype/copyentitymappingtype.md): Specifies that source instances are migrated as-is.
- [NSEntityMappingType.transformEntityMappingType](nsentitymappingtype/transformentitymappingtype.md): Specifies that entity exists in source and destination and is mapped.

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

- [NSMigrationManager](nsmigrationmanager.md): A migration manager instance that performs a migration of data from one persistent store to another using a given mapping model.
- [NSMappingModel](nsmappingmodel.md): A model instance that specifies how to map a model from a source to a destination managed object model.
- [NSEntityMigrationPolicy](nsentitymigrationpolicy.md): A policy instance that customizes the migration process for an entity mapping.
- [NSEntityMappingType](nsentitymappingtype.md): The types for mapping an entity between a source model and a destination model.
- [NSPropertyMapping](nspropertymapping.md): A mapping instance that specifies in a model how to map from a property in a source entity to a property in a destination entity.

# NSEntityMapping (Objective-C)

**Framework:** Core Data  
**Kind:** Class  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A mapping instance that specifies how to map an entity from a source to a destination managed object model.

## Declaration

```objectivec
@interface NSEntityMapping : NSObject
```

## Topics

### Managing Source Information

- [sourceEntityName](nsentitymapping/sourceentityname.md): The source entity name for the entity mapping.
- [sourceEntityVersionHash](nsentitymapping/sourceentityversionhash.md): The version hash of the source entity for the entity mapping.
- [sourceExpression](nsentitymapping/sourceexpression.md): The source expression for the entity mapping.

### Managing Destination Information

- [destinationEntityName](nsentitymapping/destinationentityname.md): The destination entity name for the entity mapping.
- [destinationEntityVersionHash](nsentitymapping/destinationentityversionhash.md): The version hash for the destination entity for the entity mapping.

### Managing Mapping Information

- [name](nsentitymapping/name.md): The name of the entity mapping.
- [mappingType](nsentitymapping/mappingtype.md): The mapping type for the entity mapping.
- [entityMigrationPolicyClassName](nsentitymapping/entitymigrationpolicyclassname.md): The class name of the migration policy for the entity mapping.
- [attributeMappings](nsentitymapping/attributemappings.md): The array of attribute mappings for the entity mapping.
- [relationshipMappings](nsentitymapping/relationshipmappings.md): The array of relationship mappings for the entity mapping.
- [userInfo](nsentitymapping/userinfo.md): The user info dictionary for the entity mapping.

### Constants

- [NSUndefinedEntityMappingType](nsentitymappingtype/undefinedentitymappingtype.md): Specifies that the developer handles destination instance creation.
- [NSCustomEntityMappingType](nsentitymappingtype/customentitymappingtype.md): Specifies a custom mapping.
- [NSAddEntityMappingType](nsentitymappingtype/addentitymappingtype.md): Specifies that this is a new entity in the destination model.
- [NSRemoveEntityMappingType](nsentitymappingtype/removeentitymappingtype.md): Specifies that this entity is not present in the destination model.
- [NSCopyEntityMappingType](nsentitymappingtype/copyentitymappingtype.md): Specifies that source instances are migrated as-is.
- [NSTransformEntityMappingType](nsentitymappingtype/transformentitymappingtype.md): Specifies that entity exists in source and destination and is mapped.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Entity Mapping

- [NSMigrationManager](nsmigrationmanager.md): A migration manager instance that performs a migration of data from one persistent store to another using a given mapping model.
- [NSMappingModel](nsmappingmodel.md): A model instance that specifies how to map a model from a source to a destination managed object model.
- [NSEntityMigrationPolicy](nsentitymigrationpolicy.md): A policy instance that customizes the migration process for an entity mapping.
- [NSEntityMappingType](nsentitymappingtype.md): The types for mapping an entity between a source model and a destination model.
- [NSPropertyMapping](nspropertymapping.md): A mapping instance that specifies in a model how to map from a property in a source entity to a property in a destination entity.
