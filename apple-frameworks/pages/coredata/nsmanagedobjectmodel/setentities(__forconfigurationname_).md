> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmanagedobjectmodel/setentities(_:forconfigurationname:)](https://developer.apple.com/documentation/coredata/nsmanagedobjectmodel/setentities(_:forconfigurationname:))

# setEntities(\_:forConfigurationName:) (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Associates the specified entities with the model using the given configuration name.

## Declaration

```swift
func setEntities(_ entities: [NSEntityDescription], forConfigurationName configuration: String)
```

## Parameters

- `entities`: An array of instances of `NSEntityDescription`.
- `configuration`: A name for the configuration.

<a id="Discussion"></a>

## Discussion

This method raises an exception if the receiver has been used by an object graph manager.

## See Also

### Managing entities and configurations

- [entities](entities.md): The entities in the model.
- [entitiesByName](entitiesbyname.md): The entities of the model, keyed by name.
- [configurations](configurations.md): All the available configuration names of the model.
- [entities(forConfigurationName:)](entities%28forconfigurationname_%29.md): Returns the entities of the model for a specified configuration.

# setEntities:forConfiguration: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Associates the specified entities with the model using the given configuration name.

## Declaration

```objectivec
- (void) setEntities:(NSArray<NSEntityDescription *> *) entities forConfiguration:(NSString *) configuration;
```

## Parameters

- `entities`: An array of instances of `NSEntityDescription`.
- `configuration`: A name for the configuration.

<a id="Discussion"></a>

## Discussion

This method raises an exception if the receiver has been used by an object graph manager.

## See Also

### Managing entities and configurations

- [entities](entities.md): The entities in the model.
- [entitiesByName](entitiesbyname.md): The entities of the model, keyed by name.
- [configurations](configurations.md): All the available configuration names of the model.
- [entitiesForConfiguration:](entities%28forconfigurationname_%29.md): Returns the entities of the model for a specified configuration.
