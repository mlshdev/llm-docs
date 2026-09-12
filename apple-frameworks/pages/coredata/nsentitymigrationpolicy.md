> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsentitymigrationpolicy](https://developer.apple.com/documentation/coredata/nsentitymigrationpolicy)

# NSEntityMigrationPolicy (Swift)

**Framework:** Core Data  
**Kind:** Class  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A policy instance that customizes the migration process for an entity mapping.

## Declaration

```swift
class NSEntityMigrationPolicy
```

<a id="overview"></a>

## Overview

You set the policy for an entity mapping by passing the name of the migration policy class as the argument to [entityMigrationPolicyClassName](nsentitymapping/entitymigrationpolicyclassname.md). Typically, you specify the name in the Xcode mapping model editor.

## Topics

### Customizing Stages of the Mapping Life Cycle

- [begin(\_:with:)](nsentitymigrationpolicy/begin%28__with_%29.md): Sets up state information before the start of a given entity mapping.
- [createDestinationInstances(forSource:in:manager:)](nsentitymigrationpolicy/createdestinationinstances%28forsource_in_manager_%29.md): Creates the destination instance(s) for a given source instance.
- [endInstanceCreation(forMapping:manager:)](nsentitymigrationpolicy/endinstancecreation%28formapping_manager_%29.md): Indicates the end of the instance creation stage for the specified entity mapping, and the precursor to the next migration stage.
- [createRelationships(forDestination:in:manager:)](nsentitymigrationpolicy/createrelationships%28fordestination_in_manager_%29.md): Constructs the relationships between the newly-created destination instances.
- [endRelationshipCreation(forMapping:manager:)](nsentitymigrationpolicy/endrelationshipcreation%28formapping_manager_%29.md): Indicates the end of the relationship creation stage for the specified entity mapping.
- [performCustomValidation(forMapping:manager:)](nsentitymigrationpolicy/performcustomvalidation%28formapping_manager_%29.md): Provides the option to perform custom validation on migrated objects during the validation stage of the entity migration policy.
- [end(\_:manager:)](nsentitymigrationpolicy/end%28__manager_%29.md): Performs cleanup at the end of the migration, from any phase of the mapping.

### Constants

- [NSMigrationManagerKey](nsmigrationmanagerkey.md): Key for the migration manager.
- [NSMigrationSourceObjectKey](nsmigrationsourceobjectkey.md): Key for the source object.
- [NSMigrationDestinationObjectKey](nsmigrationdestinationobjectkey.md): Key for the destination object.
- [NSMigrationEntityMappingKey](nsmigrationentitymappingkey.md): Key for the entity mapping object.
- [NSMigrationPropertyMappingKey](nsmigrationpropertymappingkey.md): Key for the property mapping object.
- [NSMigrationEntityPolicyKey](nsmigrationentitypolicykey.md): Key for the entity migration policy object.

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
- [NSEntityMapping](nsentitymapping.md): A mapping instance that specifies how to map an entity from a source to a destination managed object model.
- [NSEntityMappingType](nsentitymappingtype.md): The types for mapping an entity between a source model and a destination model.
- [NSPropertyMapping](nspropertymapping.md): A mapping instance that specifies in a model how to map from a property in a source entity to a property in a destination entity.

# NSEntityMigrationPolicy (Objective-C)

**Framework:** Core Data  
**Kind:** Class  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A policy instance that customizes the migration process for an entity mapping.

## Declaration

```objectivec
@interface NSEntityMigrationPolicy : NSObject
```

<a id="overview"></a>

## Overview

You set the policy for an entity mapping by passing the name of the migration policy class as the argument to [entityMigrationPolicyClassName](nsentitymapping/entitymigrationpolicyclassname.md). Typically, you specify the name in the Xcode mapping model editor.

## Topics

### Customizing Stages of the Mapping Life Cycle

- [beginEntityMapping:manager:error:](nsentitymigrationpolicy/begin%28__with_%29.md): Sets up state information before the start of a given entity mapping.
- [createDestinationInstancesForSourceInstance:entityMapping:manager:error:](nsentitymigrationpolicy/createdestinationinstances%28forsource_in_manager_%29.md): Creates the destination instance(s) for a given source instance.
- [endInstanceCreationForEntityMapping:manager:error:](nsentitymigrationpolicy/endinstancecreation%28formapping_manager_%29.md): Indicates the end of the instance creation stage for the specified entity mapping, and the precursor to the next migration stage.
- [createRelationshipsForDestinationInstance:entityMapping:manager:error:](nsentitymigrationpolicy/createrelationships%28fordestination_in_manager_%29.md): Constructs the relationships between the newly-created destination instances.
- [endRelationshipCreationForEntityMapping:manager:error:](nsentitymigrationpolicy/endrelationshipcreation%28formapping_manager_%29.md): Indicates the end of the relationship creation stage for the specified entity mapping.
- [performCustomValidationForEntityMapping:manager:error:](nsentitymigrationpolicy/performcustomvalidation%28formapping_manager_%29.md): Provides the option to perform custom validation on migrated objects during the validation stage of the entity migration policy.
- [endEntityMapping:manager:error:](nsentitymigrationpolicy/end%28__manager_%29.md): Performs cleanup at the end of the migration, from any phase of the mapping.

### Constants

- [NSMigrationManagerKey](nsmigrationmanagerkey.md): Key for the migration manager.
- [NSMigrationSourceObjectKey](nsmigrationsourceobjectkey.md): Key for the source object.
- [NSMigrationDestinationObjectKey](nsmigrationdestinationobjectkey.md): Key for the destination object.
- [NSMigrationEntityMappingKey](nsmigrationentitymappingkey.md): Key for the entity mapping object.
- [NSMigrationPropertyMappingKey](nsmigrationpropertymappingkey.md): Key for the property mapping object.
- [NSMigrationEntityPolicyKey](nsmigrationentitypolicykey.md): Key for the entity migration policy object.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Entity Mapping

- [NSMigrationManager](nsmigrationmanager.md): A migration manager instance that performs a migration of data from one persistent store to another using a given mapping model.
- [NSMappingModel](nsmappingmodel.md): A model instance that specifies how to map a model from a source to a destination managed object model.
- [NSEntityMapping](nsentitymapping.md): A mapping instance that specifies how to map an entity from a source to a destination managed object model.
- [NSEntityMappingType](nsentitymappingtype.md): The types for mapping an entity between a source model and a destination model.
- [NSPropertyMapping](nspropertymapping.md): A mapping instance that specifies in a model how to map from a property in a source entity to a property in a destination entity.
