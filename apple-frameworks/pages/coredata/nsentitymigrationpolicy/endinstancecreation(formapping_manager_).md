> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsentitymigrationpolicy/endinstancecreation(formapping:manager:)](https://developer.apple.com/documentation/coredata/nsentitymigrationpolicy/endinstancecreation(formapping:manager:))

# endInstanceCreation(forMapping:manager:) (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Indicates the end of the instance creation stage for the specified entity mapping, and the precursor to the next migration stage.

## Declaration

```swift
func endInstanceCreation(forMapping mapping: NSEntityMapping, manager: NSMigrationManager) throws
```

## Parameters

- `mapping`: The mapping object in use.
- `manager`: The migration manager performing the migration.

<a id="Discussion"></a>

## Discussion

You can override this method to clean up state from the creation of destination or to prepare state for the creation of relationships.

## See Also

### Customizing Stages of the Mapping Life Cycle

- [begin(\_:with:)](begin%28__with_%29.md): Sets up state information before the start of a given entity mapping.
- [createDestinationInstances(forSource:in:manager:)](createdestinationinstances%28forsource_in_manager_%29.md): Creates the destination instance(s) for a given source instance.
- [createRelationships(forDestination:in:manager:)](createrelationships%28fordestination_in_manager_%29.md): Constructs the relationships between the newly-created destination instances.
- [endRelationshipCreation(forMapping:manager:)](endrelationshipcreation%28formapping_manager_%29.md): Indicates the end of the relationship creation stage for the specified entity mapping.
- [performCustomValidation(forMapping:manager:)](performcustomvalidation%28formapping_manager_%29.md): Provides the option to perform custom validation on migrated objects during the validation stage of the entity migration policy.
- [end(\_:manager:)](end%28__manager_%29.md): Performs cleanup at the end of the migration, from any phase of the mapping.

# endInstanceCreationForEntityMapping:manager:error: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Indicates the end of the instance creation stage for the specified entity mapping, and the precursor to the next migration stage.

## Declaration

```objectivec
- (BOOL) endInstanceCreationForEntityMapping:(NSEntityMapping *) mapping manager:(NSMigrationManager *) manager error:(NSError **) error;
```

## Parameters

- `mapping`: The mapping object in use.
- `manager`: The migration manager performing the migration.
- `error`: If an error occurs, upon return contains an `NSError` object that describes the problem.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the relationships are constructed correctly, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

You can override this method to clean up state from the creation of destination or to prepare state for the creation of relationships.

## See Also

### Customizing Stages of the Mapping Life Cycle

- [beginEntityMapping:manager:error:](begin%28__with_%29.md): Sets up state information before the start of a given entity mapping.
- [createDestinationInstancesForSourceInstance:entityMapping:manager:error:](createdestinationinstances%28forsource_in_manager_%29.md): Creates the destination instance(s) for a given source instance.
- [createRelationshipsForDestinationInstance:entityMapping:manager:error:](createrelationships%28fordestination_in_manager_%29.md): Constructs the relationships between the newly-created destination instances.
- [endRelationshipCreationForEntityMapping:manager:error:](endrelationshipcreation%28formapping_manager_%29.md): Indicates the end of the relationship creation stage for the specified entity mapping.
- [performCustomValidationForEntityMapping:manager:error:](performcustomvalidation%28formapping_manager_%29.md): Provides the option to perform custom validation on migrated objects during the validation stage of the entity migration policy.
- [endEntityMapping:manager:error:](end%28__manager_%29.md): Performs cleanup at the end of the migration, from any phase of the mapping.
