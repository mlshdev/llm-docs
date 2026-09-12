> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmappingmodel](https://developer.apple.com/documentation/coredata/nsmappingmodel)

# NSMappingModel (Swift)

**Framework:** Core Data  
**Kind:** Class  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A model instance that specifies how to map a model from a source to a destination managed object model.

## Declaration

```swift
class NSMappingModel
```

## Topics

### Creating a Mapping

- [init(from:forSourceModel:destinationModel:)](nsmappingmodel/init%28from_forsourcemodel_destinationmodel_%29.md): Returns the mapping model that will translate data from the source to the destination model.
- [inferredMappingModel(forSourceModel:destinationModel:)](nsmappingmodel/inferredmappingmodel%28forsourcemodel_destinationmodel_%29.md): Returns a newly created mapping model that will migrate data from the source to the destination model.
- [init(contentsOf:)](nsmappingmodel/init%28contentsof_%29.md): Returns a mapping model initialized from a given URL.

### Managing Entity Mappings

- [entityMappings](nsmappingmodel/entitymappings.md): The entity mappings for the mapping model.
- [entityMappingsByName](nsmappingmodel/entitymappingsbyname.md): The entity mappings for the mapping model, keyed by name.

### Initializers

- [init(contentsOfURL:)](nsmappingmodel/init%28contentsofurl_%29.md)
- [init(fromBundles:forSourceModel:destinationModel:)](nsmappingmodel/init%28frombundles_forsourcemodel_destinationmodel_%29.md)

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
- [NSEntityMapping](nsentitymapping.md): A mapping instance that specifies how to map an entity from a source to a destination managed object model.
- [NSEntityMigrationPolicy](nsentitymigrationpolicy.md): A policy instance that customizes the migration process for an entity mapping.
- [NSEntityMappingType](nsentitymappingtype.md): The types for mapping an entity between a source model and a destination model.
- [NSPropertyMapping](nspropertymapping.md): A mapping instance that specifies in a model how to map from a property in a source entity to a property in a destination entity.

# NSMappingModel (Objective-C)

**Framework:** Core Data  
**Kind:** Class  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A model instance that specifies how to map a model from a source to a destination managed object model.

## Declaration

```objectivec
@interface NSMappingModel : NSObject
```

## Topics

### Creating a Mapping

- [mappingModelFromBundles:forSourceModel:destinationModel:](nsmappingmodel/init%28from_forsourcemodel_destinationmodel_%29.md): Returns the mapping model that will translate data from the source to the destination model.
- [inferredMappingModelForSourceModel:destinationModel:error:](nsmappingmodel/inferredmappingmodel%28forsourcemodel_destinationmodel_%29.md): Returns a newly created mapping model that will migrate data from the source to the destination model.
- [initWithContentsOfURL:](nsmappingmodel/init%28contentsof_%29.md): Returns a mapping model initialized from a given URL.

### Managing Entity Mappings

- [entityMappings](nsmappingmodel/entitymappings.md): The entity mappings for the mapping model.
- [entityMappingsByName](nsmappingmodel/entitymappingsbyname.md): The entity mappings for the mapping model, keyed by name.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Entity Mapping

- [NSMigrationManager](nsmigrationmanager.md): A migration manager instance that performs a migration of data from one persistent store to another using a given mapping model.
- [NSEntityMapping](nsentitymapping.md): A mapping instance that specifies how to map an entity from a source to a destination managed object model.
- [NSEntityMigrationPolicy](nsentitymigrationpolicy.md): A policy instance that customizes the migration process for an entity mapping.
- [NSEntityMappingType](nsentitymappingtype.md): The types for mapping an entity between a source model and a destination model.
- [NSPropertyMapping](nspropertymapping.md): A mapping instance that specifies in a model how to map from a property in a source entity to a property in a destination entity.
