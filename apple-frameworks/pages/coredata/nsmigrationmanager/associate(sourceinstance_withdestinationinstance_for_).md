> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmigrationmanager/associate(sourceinstance:withdestinationinstance:for:)](https://developer.apple.com/documentation/coredata/nsmigrationmanager/associate(sourceinstance:withdestinationinstance:for:))

# associate(sourceInstance:withDestinationInstance:for:) (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Associates a given source managed object instance with an array of destination instances for a given property mapping.

## Declaration

```swift
func associate(sourceInstance: NSManagedObject, withDestinationInstance destinationInstance: NSManagedObject, for entityMapping: NSEntityMapping)
```

## Parameters

- `sourceInstance`: A source managed object.
- `destinationInstance`: The destination manage object for `sourceInstance`.
- `entityMapping`: The entity mapping to use to associate `sourceInstance` with the object in `destinationInstances`.

<a id="Discussion"></a>

## Discussion

Data migration is performed as a three-stage process (first create the data, then relate the data, then validate the data). You use this method to associate data between the source and destination stores, in order to allow for relationship creation or fix-up after the creation stage.

This method is called in the default implementation of `NSEntityMigrationPolicy`’s [createDestinationInstances(forSource:in:manager:)](../nsentitymigrationpolicy/createdestinationinstances%28forsource_in_manager_%29.md) method.

## See Also

### Managing Sources and Destinations

- [destinationInstances(forEntityMappingName:sourceInstances:)](destinationinstances%28forentitymappingname_sourceinstances_%29.md): Returns the managed object instances created in the destination store for the named entity mapping for the given array of source instances.
- [sourceInstances(forEntityMappingName:destinationInstances:)](sourceinstances%28forentitymappingname_destinationinstances_%29.md): Returns the managed object instances in the source store used to create the given destination instances for the passed in property mapping.

# associateSourceInstance:withDestinationInstance:forEntityMapping: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Associates a given source managed object instance with an array of destination instances for a given property mapping.

## Declaration

```objectivec
- (void) associateSourceInstance:(NSManagedObject *) sourceInstance withDestinationInstance:(NSManagedObject *) destinationInstance forEntityMapping:(NSEntityMapping *) entityMapping;
```

## Parameters

- `sourceInstance`: A source managed object.
- `destinationInstance`: The destination manage object for `sourceInstance`.
- `entityMapping`: The entity mapping to use to associate `sourceInstance` with the object in `destinationInstances`.

<a id="Discussion"></a>

## Discussion

Data migration is performed as a three-stage process (first create the data, then relate the data, then validate the data). You use this method to associate data between the source and destination stores, in order to allow for relationship creation or fix-up after the creation stage.

This method is called in the default implementation of `NSEntityMigrationPolicy`’s [createDestinationInstancesForSourceInstance:entityMapping:manager:error:](../nsentitymigrationpolicy/createdestinationinstances%28forsource_in_manager_%29.md) method.

## See Also

### Managing Sources and Destinations

- [destinationInstancesForEntityMappingNamed:sourceInstances:](destinationinstances%28forentitymappingname_sourceinstances_%29.md): Returns the managed object instances created in the destination store for the named entity mapping for the given array of source instances.
- [sourceInstancesForEntityMappingNamed:destinationInstances:](sourceinstances%28forentitymappingname_destinationinstances_%29.md): Returns the managed object instances in the source store used to create the given destination instances for the passed in property mapping.
