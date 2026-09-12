> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsentitymigrationpolicy/createdestinationinstances(forsource:in:manager:)](https://developer.apple.com/documentation/coredata/nsentitymigrationpolicy/createdestinationinstances(forsource:in:manager:))

# createDestinationInstances(forSource:in:manager:) (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates the destination instance(s) for a given source instance.

## Declaration

```swift
func createDestinationInstances(forSource sInstance: NSManagedObject, in mapping: NSEntityMapping, manager: NSMigrationManager) throws
```

## Parameters

- `sInstance`: The source instance for which to create destination instances.
- `mapping`: The mapping object in use.
- `manager`: The migration manager performing the migration.

<a id="Discussion"></a>

## Discussion

This method is invoked by the migration manager on each source instance (as specified by the [sourceExpression](../nsentitymapping/sourceexpression.md) in the mapping) to create the corresponding destination instance(s). It also associates the source and destination instances by calling `NSMigrationManager`’s [associate(sourceInstance:withDestinationInstance:for:)](../nsmigrationmanager/associate%28sourceinstance_withdestinationinstance_for_%29.md) method.

<a id="Special-Considerations"></a>

### Special Considerations

If you override this method and do not invoke `super`, you must invoke `NSMigrationManager`’s [associate(sourceInstance:withDestinationInstance:for:)](../nsmigrationmanager/associate%28sourceinstance_withdestinationinstance_for_%29.md) to associate the source and destination instances as required. .

## See Also

### Customizing Stages of the Mapping Life Cycle

- [begin(\_:with:)](begin%28__with_%29.md): Sets up state information before the start of a given entity mapping.
- [endInstanceCreation(forMapping:manager:)](endinstancecreation%28formapping_manager_%29.md): Indicates the end of the instance creation stage for the specified entity mapping, and the precursor to the next migration stage.
- [createRelationships(forDestination:in:manager:)](createrelationships%28fordestination_in_manager_%29.md): Constructs the relationships between the newly-created destination instances.
- [endRelationshipCreation(forMapping:manager:)](endrelationshipcreation%28formapping_manager_%29.md): Indicates the end of the relationship creation stage for the specified entity mapping.
- [performCustomValidation(forMapping:manager:)](performcustomvalidation%28formapping_manager_%29.md): Provides the option to perform custom validation on migrated objects during the validation stage of the entity migration policy.
- [end(\_:manager:)](end%28__manager_%29.md): Performs cleanup at the end of the migration, from any phase of the mapping.

# createDestinationInstancesForSourceInstance:entityMapping:manager:error: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates the destination instance(s) for a given source instance.

## Declaration

```objectivec
- (BOOL) createDestinationInstancesForSourceInstance:(NSManagedObject *) sInstance entityMapping:(NSEntityMapping *) mapping manager:(NSMigrationManager *) manager error:(NSError **) error;
```

## Parameters

- `sInstance`: The source instance for which to create destination instances.
- `mapping`: The mapping object in use.
- `manager`: The migration manager performing the migration.
- `error`: If an error occurs, upon return contains an `NSError` object that describes the problem.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the method completes successfully, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method is invoked by the migration manager on each source instance (as specified by the [sourceExpression](../nsentitymapping/sourceexpression.md) in the mapping) to create the corresponding destination instance(s). It also associates the source and destination instances by calling `NSMigrationManager`’s [associateSourceInstance:withDestinationInstance:forEntityMapping:](../nsmigrationmanager/associate%28sourceinstance_withdestinationinstance_for_%29.md) method.

<a id="Special-Considerations"></a>

### Special Considerations

If you override this method and do not invoke `super`, you must invoke `NSMigrationManager`’s [associateSourceInstance:withDestinationInstance:forEntityMapping:](../nsmigrationmanager/associate%28sourceinstance_withdestinationinstance_for_%29.md) to associate the source and destination instances as required. .

## See Also

### Customizing Stages of the Mapping Life Cycle

- [beginEntityMapping:manager:error:](begin%28__with_%29.md): Sets up state information before the start of a given entity mapping.
- [endInstanceCreationForEntityMapping:manager:error:](endinstancecreation%28formapping_manager_%29.md): Indicates the end of the instance creation stage for the specified entity mapping, and the precursor to the next migration stage.
- [createRelationshipsForDestinationInstance:entityMapping:manager:error:](createrelationships%28fordestination_in_manager_%29.md): Constructs the relationships between the newly-created destination instances.
- [endRelationshipCreationForEntityMapping:manager:error:](endrelationshipcreation%28formapping_manager_%29.md): Indicates the end of the relationship creation stage for the specified entity mapping.
- [performCustomValidationForEntityMapping:manager:error:](performcustomvalidation%28formapping_manager_%29.md): Provides the option to perform custom validation on migrated objects during the validation stage of the entity migration policy.
- [endEntityMapping:manager:error:](end%28__manager_%29.md): Performs cleanup at the end of the migration, from any phase of the mapping.
