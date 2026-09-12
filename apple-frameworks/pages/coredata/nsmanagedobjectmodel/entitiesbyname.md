> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmanagedobjectmodel/entitiesbyname](https://developer.apple.com/documentation/coredata/nsmanagedobjectmodel/entitiesbyname)

# entitiesByName (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The entities of the model, keyed by name.

## Declaration

```swift
var entitiesByName: [String : NSEntityDescription] { get }
```

<a id="Discussion"></a>

## Discussion

Entities are instances of [NSEntityDescription](../nsentitydescription.md).

## See Also

### Related Documentation

- [entity(forEntityName:in:)](../nsentitydescription/entity%28forentityname_in_%29.md): Returns the entity with the specified name from the managed object model associated with the specified managed object context’s persistent store coordinator.

### Managing entities and configurations

- [entities](entities.md): The entities in the model.
- [configurations](configurations.md): All the available configuration names of the model.
- [entities(forConfigurationName:)](entities%28forconfigurationname_%29.md): Returns the entities of the model for a specified configuration.
- [setEntities(\_:forConfigurationName:)](setentities%28__forconfigurationname_%29.md): Associates the specified entities with the model using the given configuration name.

# entitiesByName (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The entities of the model, keyed by name.

## Declaration

```objectivec
@property (copy, readonly) NSDictionary<NSString *,NSEntityDescription *> * entitiesByName;
```

<a id="Discussion"></a>

## Discussion

Entities are instances of [NSEntityDescription](../nsentitydescription.md).

## See Also

### Related Documentation

- [entityForName:inManagedObjectContext:](../nsentitydescription/entity%28forentityname_in_%29.md): Returns the entity with the specified name from the managed object model associated with the specified managed object context’s persistent store coordinator.

### Managing entities and configurations

- [entities](entities.md): The entities in the model.
- [configurations](configurations.md): All the available configuration names of the model.
- [entitiesForConfiguration:](entities%28forconfigurationname_%29.md): Returns the entities of the model for a specified configuration.
- [setEntities:forConfiguration:](setentities%28__forconfigurationname_%29.md): Associates the specified entities with the model using the given configuration name.
