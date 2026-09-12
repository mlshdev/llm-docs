> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmanagedobjectmodel/entities(forconfigurationname:)](https://developer.apple.com/documentation/coredata/nsmanagedobjectmodel/entities(forconfigurationname:))

# entities(forConfigurationName:) (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the entities of the model for a specified configuration.

## Declaration

```swift
func entities(forConfigurationName configuration: String?) -> [NSEntityDescription]?
```

## Parameters

- `configuration`: The name of a configuration in the receiver.

<a id="return-value"></a>

## Return Value

An array containing the entities of the receiver for the configuration specified by `configuration`.

## See Also

### Managing entities and configurations

- [entities](entities.md): The entities in the model.
- [entitiesByName](entitiesbyname.md): The entities of the model, keyed by name.
- [configurations](configurations.md): All the available configuration names of the model.
- [setEntities(\_:forConfigurationName:)](setentities%28__forconfigurationname_%29.md): Associates the specified entities with the model using the given configuration name.

# entitiesForConfiguration: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the entities of the model for a specified configuration.

## Declaration

```objectivec
- (NSArray<NSEntityDescription *> *) entitiesForConfiguration:(NSString *) configuration;
```

## Parameters

- `configuration`: The name of a configuration in the receiver.

<a id="return-value"></a>

## Return Value

An array containing the entities of the receiver for the configuration specified by `configuration`.

## See Also

### Managing entities and configurations

- [entities](entities.md): The entities in the model.
- [entitiesByName](entitiesbyname.md): The entities of the model, keyed by name.
- [configurations](configurations.md): All the available configuration names of the model.
- [setEntities:forConfiguration:](setentities%28__forconfigurationname_%29.md): Associates the specified entities with the model using the given configuration name.
