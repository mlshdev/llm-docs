> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspropertymapping](https://developer.apple.com/documentation/coredata/nspropertymapping)

# NSPropertyMapping (Swift)

**Framework:** Core Data  
**Kind:** Class  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A mapping instance that specifies in a model how to map from a property in a source entity to a property in a destination entity.

## Declaration

```swift
class NSPropertyMapping
```

## Topics

### Managing Mapping Attributes

- [name](nspropertymapping/name.md): The name of the property in the destination entity for the property mapping.
- [valueExpression](nspropertymapping/valueexpression.md): The value expression for the property mapping.
- [userInfo](nspropertymapping/userinfo.md): The user info for the property mapping.

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
- [NSEntityMigrationPolicy](nsentitymigrationpolicy.md): A policy instance that customizes the migration process for an entity mapping.
- [NSEntityMappingType](nsentitymappingtype.md): The types for mapping an entity between a source model and a destination model.

# NSPropertyMapping (Objective-C)

**Framework:** Core Data  
**Kind:** Class  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A mapping instance that specifies in a model how to map from a property in a source entity to a property in a destination entity.

## Declaration

```objectivec
@interface NSPropertyMapping : NSObject
```

## Topics

### Managing Mapping Attributes

- [name](nspropertymapping/name.md): The name of the property in the destination entity for the property mapping.
- [valueExpression](nspropertymapping/valueexpression.md): The value expression for the property mapping.
- [userInfo](nspropertymapping/userinfo.md): The user info for the property mapping.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Entity Mapping

- [NSMigrationManager](nsmigrationmanager.md): A migration manager instance that performs a migration of data from one persistent store to another using a given mapping model.
- [NSMappingModel](nsmappingmodel.md): A model instance that specifies how to map a model from a source to a destination managed object model.
- [NSEntityMapping](nsentitymapping.md): A mapping instance that specifies how to map an entity from a source to a destination managed object model.
- [NSEntityMigrationPolicy](nsentitymigrationpolicy.md): A policy instance that customizes the migration process for an entity mapping.
- [NSEntityMappingType](nsentitymappingtype.md): The types for mapping an entity between a source model and a destination model.
