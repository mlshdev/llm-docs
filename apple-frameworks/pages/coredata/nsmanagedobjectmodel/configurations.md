> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmanagedobjectmodel/configurations](https://developer.apple.com/documentation/coredata/nsmanagedobjectmodel/configurations)

# configurations (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

All the available configuration names of the model.

## Declaration

```swift
var configurations: [String] { get }
```

## See Also

### Managing entities and configurations

- [entities](entities.md): The entities in the model.
- [entitiesByName](entitiesbyname.md): The entities of the model, keyed by name.
- [entities(forConfigurationName:)](entities%28forconfigurationname_%29.md): Returns the entities of the model for a specified configuration.
- [setEntities(\_:forConfigurationName:)](setentities%28__forconfigurationname_%29.md): Associates the specified entities with the model using the given configuration name.

# configurations (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

All the available configuration names of the model.

## Declaration

```objectivec
@property (strong, readonly) NSArray<NSString *> * configurations;
```

## See Also

### Managing entities and configurations

- [entities](entities.md): The entities in the model.
- [entitiesByName](entitiesbyname.md): The entities of the model, keyed by name.
- [entitiesForConfiguration:](entities%28forconfigurationname_%29.md): Returns the entities of the model for a specified configuration.
- [setEntities:forConfiguration:](setentities%28__forconfigurationname_%29.md): Associates the specified entities with the model using the given configuration name.
