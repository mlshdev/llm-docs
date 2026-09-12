> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsentitymigrationpolicy/begin(_:with:)](https://developer.apple.com/documentation/coredata/nsentitymigrationpolicy/begin(_:with:))

# begin(\_:with:) (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Sets up state information before the start of a given entity mapping.

## Declaration

```swift
func begin(_ mapping: NSEntityMapping, with manager: NSMigrationManager) throws
```

## Parameters

- `mapping`: The mapping object in use.
- `manager`: The migration manager performing the migration.

<a id="Discussion"></a>

## Discussion

This method is the precursor to the creation stage. In a custom class, you can implement this method to set up any state information that will be useful for the duration of the migration.

## See Also

### Related Documentation

- [Core Data Model Versioning and Data Migration Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CoreDataVersioning/Articles/Introduction.html#//apple_ref/doc/uid/TP40004399)

### Customizing Stages of the Mapping Life Cycle

- [createDestinationInstances(forSource:in:manager:)](createdestinationinstances%28forsource_in_manager_%29.md): Creates the destination instance(s) for a given source instance.
- [endInstanceCreation(forMapping:manager:)](endinstancecreation%28formapping_manager_%29.md): Indicates the end of the instance creation stage for the specified entity mapping, and the precursor to the next migration stage.
- [createRelationships(forDestination:in:manager:)](createrelationships%28fordestination_in_manager_%29.md): Constructs the relationships between the newly-created destination instances.
- [endRelationshipCreation(forMapping:manager:)](endrelationshipcreation%28formapping_manager_%29.md): Indicates the end of the relationship creation stage for the specified entity mapping.
- [performCustomValidation(forMapping:manager:)](performcustomvalidation%28formapping_manager_%29.md): Provides the option to perform custom validation on migrated objects during the validation stage of the entity migration policy.
- [end(\_:manager:)](end%28__manager_%29.md): Performs cleanup at the end of the migration, from any phase of the mapping.

# beginEntityMapping:manager:error: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Sets up state information before the start of a given entity mapping.

## Declaration

```objectivec
- (BOOL) beginEntityMapping:(NSEntityMapping *) mapping manager:(NSMigrationManager *) manager error:(NSError **) error;
```

## Parameters

- `mapping`: The mapping object in use.
- `manager`: The migration manager performing the migration.
- `error`: If an error occurs, upon return contains an `NSError` object that describes the problem.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the method completes successfully, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method is the precursor to the creation stage. In a custom class, you can implement this method to set up any state information that will be useful for the duration of the migration.

## See Also

### Related Documentation

- [Core Data Model Versioning and Data Migration Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CoreDataVersioning/Articles/Introduction.html#//apple_ref/doc/uid/TP40004399)

### Customizing Stages of the Mapping Life Cycle

- [createDestinationInstancesForSourceInstance:entityMapping:manager:error:](createdestinationinstances%28forsource_in_manager_%29.md): Creates the destination instance(s) for a given source instance.
- [endInstanceCreationForEntityMapping:manager:error:](endinstancecreation%28formapping_manager_%29.md): Indicates the end of the instance creation stage for the specified entity mapping, and the precursor to the next migration stage.
- [createRelationshipsForDestinationInstance:entityMapping:manager:error:](createrelationships%28fordestination_in_manager_%29.md): Constructs the relationships between the newly-created destination instances.
- [endRelationshipCreationForEntityMapping:manager:error:](endrelationshipcreation%28formapping_manager_%29.md): Indicates the end of the relationship creation stage for the specified entity mapping.
- [performCustomValidationForEntityMapping:manager:error:](performcustomvalidation%28formapping_manager_%29.md): Provides the option to perform custom validation on migrated objects during the validation stage of the entity migration policy.
- [endEntityMapping:manager:error:](end%28__manager_%29.md): Performs cleanup at the end of the migration, from any phase of the mapping.
