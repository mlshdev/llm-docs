> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmigrationmanager/sourceinstances(forentitymappingname:destinationinstances:)](https://developer.apple.com/documentation/coredata/nsmigrationmanager/sourceinstances(forentitymappingname:destinationinstances:))

# sourceInstances(forEntityMappingName:destinationInstances:) (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the managed object instances in the source store used to create the given destination instances for the passed in property mapping.

## Declaration

```swift
func sourceInstances(forEntityMappingName mappingName: String, destinationInstances: [NSManagedObject]?) -> [NSManagedObject]
```

## Parameters

- `mappingName`: The name of an entity mapping in use.
- `destinationInstances`: A array of managed objects in the destination store.

<a id="return-value"></a>

## Return Value

An array containing the managed object instances in the source store used to create `destinationInstances` using the entity mapping named `mappingName`. If `destinationInstances` is `nil`, all of the source instances used to create the destination instance for this property mapping are returned.

<a id="Discussion"></a>

## Discussion

This method throws an `NSInvalidArgumentException` exception if `mappingName` is not a valid mapping name.

## See Also

### Managing Sources and Destinations

- [associate(sourceInstance:withDestinationInstance:for:)](associate%28sourceinstance_withdestinationinstance_for_%29.md): Associates a given source managed object instance with an array of destination instances for a given property mapping.
- [destinationInstances(forEntityMappingName:sourceInstances:)](destinationinstances%28forentitymappingname_sourceinstances_%29.md): Returns the managed object instances created in the destination store for the named entity mapping for the given array of source instances.

# sourceInstancesForEntityMappingNamed:destinationInstances: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the managed object instances in the source store used to create the given destination instances for the passed in property mapping.

## Declaration

```objectivec
- (NSArray<__kindof NSManagedObject *> *) sourceInstancesForEntityMappingNamed:(NSString *) mappingName destinationInstances:(NSArray<__kindof NSManagedObject *> *) destinationInstances;
```

## Parameters

- `mappingName`: The name of an entity mapping in use.
- `destinationInstances`: A array of managed objects in the destination store.

<a id="return-value"></a>

## Return Value

An array containing the managed object instances in the source store used to create `destinationInstances` using the entity mapping named `mappingName`. If `destinationInstances` is `nil`, all of the source instances used to create the destination instance for this property mapping are returned.

<a id="Discussion"></a>

## Discussion

This method throws an `NSInvalidArgumentException` exception if `mappingName` is not a valid mapping name.

## See Also

### Managing Sources and Destinations

- [associateSourceInstance:withDestinationInstance:forEntityMapping:](associate%28sourceinstance_withdestinationinstance_for_%29.md): Associates a given source managed object instance with an array of destination instances for a given property mapping.
- [destinationInstancesForEntityMappingNamed:sourceInstances:](destinationinstances%28forentitymappingname_sourceinstances_%29.md): Returns the managed object instances created in the destination store for the named entity mapping for the given array of source instances.
