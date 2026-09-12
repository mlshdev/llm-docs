> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsrelationshipdescription](https://developer.apple.com/documentation/coredata/nsrelationshipdescription)

# NSRelationshipDescription (Swift)

**Framework:** Core Data  
**Kind:** Class  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A description of a relationship between two entities.

## Declaration

```swift
class NSRelationshipDescription
```

<a id="overview"></a>

## Overview

[NSRelationshipDescription](nsrelationshipdescription.md) provides additional attributes that are specific to modeling a relationship between two entities. For the common attributes of all property types, see [NSPropertyDescription](nspropertydescription.md).

For example, use this class to define a relationship’s *cardinality* — the number of managed objects the relationship can reference.

- For a to-one relationship, set [maxCount](nsrelationshipdescription/maxcount.md) to `1`.
- For a to-many relationship, set [maxCount](nsrelationshipdescription/maxcount.md) to a number greater than `1` to impose an upper limit; otherwise, use `0` to allow an unlimited number of referenced objects.

At runtime, you can modify a relationship description until you associate its owning managed object model with a persistent store coordinator.  If you attempt to modify the model after you associate it, Core Data throws an exception. To modify a model that’s in use, create and modify a copy and then discard any objects that belong to the original model.

## Topics

### Configuring the Destination

- [inverseRelationship](nsrelationshipdescription/inverserelationship.md): The relationship that represents the inverse of the current relationship.
- [destinationEntity](nsrelationshipdescription/destinationentity.md): The type of object the relationship contains.
- [isOrdered](nsrelationshipdescription/isordered.md): A Boolean value that determines whether the relationship preserves the order of the referenced managed objects.

### Configuring Cardinality

- [isToMany](nsrelationshipdescription/istomany.md): Returns a Boolean value that indicates whether the relationship can contain many managed objects.
- [minCount](nsrelationshipdescription/mincount.md): The minimum number of managed objects the relationship can reference.
- [maxCount](nsrelationshipdescription/maxcount.md): The maximum number of managed objects the relationship can reference.

### Configuring Delete Behavior

- [deleteRule](nsrelationshipdescription/deleterule.md): The rule to apply when you delete the relationship’s owning managed object.
- [NSDeleteRule](nsdeleterule.md): Constants that determine what happens when you delete a relationship’s owning managed object.

### Getting Version Data

- [versionHash](nsrelationshipdescription/versionhash.md): The relationship’s unique identity.

## Relationships

### Inherits From

- [NSPropertyDescription](nspropertydescription.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Standard attributes

- [NSPropertyDescription](nspropertydescription.md): A description of a single property belonging to an entity.
- [NSAttributeDescription](nsattributedescription.md): A description of a single attribute belonging to an entity.
- [NSAttributeType](nsattributetype.md): The types of attribute that Core Data supports.

# NSRelationshipDescription (Objective-C)

**Framework:** Core Data  
**Kind:** Class  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A description of a relationship between two entities.

## Declaration

```objectivec
@interface NSRelationshipDescription : NSPropertyDescription
```

<a id="overview"></a>

## Overview

[NSRelationshipDescription](nsrelationshipdescription.md) provides additional attributes that are specific to modeling a relationship between two entities. For the common attributes of all property types, see [NSPropertyDescription](nspropertydescription.md).

For example, use this class to define a relationship’s *cardinality* — the number of managed objects the relationship can reference.

- For a to-one relationship, set [maxCount](nsrelationshipdescription/maxcount.md) to `1`.
- For a to-many relationship, set [maxCount](nsrelationshipdescription/maxcount.md) to a number greater than `1` to impose an upper limit; otherwise, use `0` to allow an unlimited number of referenced objects.

At runtime, you can modify a relationship description until you associate its owning managed object model with a persistent store coordinator.  If you attempt to modify the model after you associate it, Core Data throws an exception. To modify a model that’s in use, create and modify a copy and then discard any objects that belong to the original model.

## Topics

### Configuring the Destination

- [inverseRelationship](nsrelationshipdescription/inverserelationship.md): The relationship that represents the inverse of the current relationship.
- [destinationEntity](nsrelationshipdescription/destinationentity.md): The type of object the relationship contains.
- [ordered](nsrelationshipdescription/isordered.md): A Boolean value that determines whether the relationship preserves the order of the referenced managed objects.

### Configuring Cardinality

- [toMany](nsrelationshipdescription/istomany.md): Returns a Boolean value that indicates whether the relationship can contain many managed objects.
- [minCount](nsrelationshipdescription/mincount.md): The minimum number of managed objects the relationship can reference.
- [maxCount](nsrelationshipdescription/maxcount.md): The maximum number of managed objects the relationship can reference.

### Configuring Delete Behavior

- [deleteRule](nsrelationshipdescription/deleterule.md): The rule to apply when you delete the relationship’s owning managed object.
- [NSDeleteRule](nsdeleterule.md): Constants that determine what happens when you delete a relationship’s owning managed object.

### Getting Version Data

- [versionHash](nsrelationshipdescription/versionhash.md): The relationship’s unique identity.

## Relationships

### Inherits From

- [NSPropertyDescription](nspropertydescription.md)

## See Also

### Standard attributes

- [NSPropertyDescription](nspropertydescription.md): A description of a single property belonging to an entity.
- [NSAttributeDescription](nsattributedescription.md): A description of a single attribute belonging to an entity.
- [NSAttributeType](nsattributetype.md): The types of attribute that Core Data supports.
