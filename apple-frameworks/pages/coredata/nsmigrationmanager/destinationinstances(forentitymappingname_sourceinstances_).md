> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmigrationmanager/destinationinstances(forentitymappingname:sourceinstances:)](https://developer.apple.com/documentation/coredata/nsmigrationmanager/destinationinstances(forentitymappingname:sourceinstances:))

# destinationInstances(forEntityMappingName:sourceInstances:) (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the managed object instances created in the destination store for the named entity mapping for the given array of source instances.

## Declaration

```swift
func destinationInstances(forEntityMappingName mappingName: String, sourceInstances: [NSManagedObject]?) -> [NSManagedObject]
```

## Parameters

- `mappingName`: The name of an entity mapping in use.
- `sourceInstances`: A array of managed objects in the source store.

<a id="return-value"></a>

## Return Value

An array containing the managed object instances created in the destination store for the entity mapping named `mappingName` for `sourceInstances`. If `sourceInstances` is `nil`, all of the destination instances created by the specified property mapping are returned.

<a id="Discussion"></a>

## Discussion

This method throws an `NSInvalidArgumentException` exception if `mappingName` is not a valid mapping name.

## See Also

### Managing Sources and Destinations

- [associate(sourceInstance:withDestinationInstance:for:)](associate%28sourceinstance_withdestinationinstance_for_%29.md): Associates a given source managed object instance with an array of destination instances for a given property mapping.
- [sourceInstances(forEntityMappingName:destinationInstances:)](sourceinstances%28forentitymappingname_destinationinstances_%29.md): Returns the managed object instances in the source store used to create the given destination instances for the passed in property mapping.

# destinationInstancesForEntityMappingNamed:sourceInstances: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the managed object instances created in the destination store for the named entity mapping for the given array of source instances.

## Declaration

```objectivec
- (NSArray<__kindof NSManagedObject *> *) destinationInstancesForEntityMappingNamed:(NSString *) mappingName sourceInstances:(NSArray<__kindof NSManagedObject *> *) sourceInstances;
```

## Parameters

- `mappingName`: The name of an entity mapping in use.
- `sourceInstances`: A array of managed objects in the source store.

<a id="return-value"></a>

## Return Value

An array containing the managed object instances created in the destination store for the entity mapping named `mappingName` for `sourceInstances`. If `sourceInstances` is `nil`, all of the destination instances created by the specified property mapping are returned.

<a id="Discussion"></a>

## Discussion

This method throws an `NSInvalidArgumentException` exception if `mappingName` is not a valid mapping name.

## See Also

### Managing Sources and Destinations

- [associateSourceInstance:withDestinationInstance:forEntityMapping:](associate%28sourceinstance_withdestinationinstance_for_%29.md): Associates a given source managed object instance with an array of destination instances for a given property mapping.
- [sourceInstancesForEntityMappingNamed:destinationInstances:](sourceinstances%28forentitymappingname_destinationinstances_%29.md): Returns the managed object instances in the source store used to create the given destination instances for the passed in property mapping.
