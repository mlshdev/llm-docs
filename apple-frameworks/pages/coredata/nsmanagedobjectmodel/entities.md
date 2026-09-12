> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmanagedobjectmodel/entities](https://developer.apple.com/documentation/coredata/nsmanagedobjectmodel/entities)

# entities (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The entities in the model.

## Declaration

```swift
var entities: [NSEntityDescription] { get set }
```

<a id="Discussion"></a>

## Discussion

Entities are instances of [NSEntityDescription](../nsentitydescription.md).

<a id="Special-Considerations"></a>

### Special Considerations

Setting the entities for an object model raises an exception if the object model has been used by an object graph manager.

## See Also

### Managing entities and configurations

- [entitiesByName](entitiesbyname.md): The entities of the model, keyed by name.
- [configurations](configurations.md): All the available configuration names of the model.
- [entities(forConfigurationName:)](entities%28forconfigurationname_%29.md): Returns the entities of the model for a specified configuration.
- [setEntities(\_:forConfigurationName:)](setentities%28__forconfigurationname_%29.md): Associates the specified entities with the model using the given configuration name.

# entities (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The entities in the model.

## Declaration

```objectivec
@property (strong) NSArray<NSEntityDescription *> * entities;
```

<a id="Discussion"></a>

## Discussion

Entities are instances of [NSEntityDescription](../nsentitydescription.md).

<a id="Special-Considerations"></a>

### Special Considerations

Setting the entities for an object model raises an exception if the object model has been used by an object graph manager.

## See Also

### Managing entities and configurations

- [entitiesByName](entitiesbyname.md): The entities of the model, keyed by name.
- [configurations](configurations.md): All the available configuration names of the model.
- [entitiesForConfiguration:](entities%28forconfigurationname_%29.md): Returns the entities of the model for a specified configuration.
- [setEntities:forConfiguration:](setentities%28__forconfigurationname_%29.md): Associates the specified entities with the model using the given configuration name.
