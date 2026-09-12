> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentstoreincompletesaveerror](https://developer.apple.com/documentation/coredata/nspersistentstoreincompletesaveerror)

# NSPersistentStoreIncompleteSaveError (Swift)

**Framework:** Core Data  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Error code to denote that one or more of the stores returned an error during a save operations.

## Declaration

```swift
var NSPersistentStoreIncompleteSaveError: Int { get }
```

<a id="Discussion"></a>

## Discussion

The stores or objects that failed are in the corresponding user info dictionary of the `NSError` object.

## See Also

### Error codes

- [NSCoreDataError](nscoredataerror.md): An error code that indicates a nonspecific Core Data error.
- [NSEntityMigrationPolicyError](nsentitymigrationpolicyerror.md): An error code that indicates a migration failure during processing of an entity migration policy.
- [NSExternalRecordImportError](nsexternalrecordimporterror.md): Error code to denote a general error encountered while importing external records.
- [NSInferredMappingModelError](nsinferredmappingmodelerror.md): Error code to denote a problem with the creation of an inferred mapping model.
- [NSManagedObjectConstraintMergeError](nsmanagedobjectconstraintmergeerror.md): Error code to denote a problem with the merging of instances of a managed object.
- [NSManagedObjectConstraintValidationError](nsmanagedobjectconstraintvalidationerror.md): Error code to denote a problem with the validation of a managed object.
- [NSManagedObjectContextLockingError](nsmanagedobjectcontextlockingerror.md): Error code to denote an inability to acquire a lock in a managed object context.
- [NSManagedObjectExternalRelationshipError](nsmanagedobjectexternalrelationshiperror.md): Error code to denote that an object being saved has a relationship containing an object from another store.
- [NSManagedObjectMergeError](nsmanagedobjectmergeerror.md): Error code to denote that a merge policy failed—Core Data is unable to complete merging.
- [NSManagedObjectModelReferenceNotFoundError](nsmanagedobjectmodelreferencenotfounderror.md): An error code that indicates Core Data isn’t able to find or instantiate the referenced object model.
- [NSManagedObjectReferentialIntegrityError](nsmanagedobjectreferentialintegrityerror.md): Error code to denote an attempt to fire a fault pointing to an object that does not exist.
- [NSManagedObjectValidationError](nsmanagedobjectvalidationerror.md): Error code to denote a generic validation error.
- [NSMigrationCancelledError](nsmigrationcancellederror.md): Error code to denote that migration failed due to manual cancellation.
- [NSMigrationConstraintViolationError](nsmigrationconstraintviolationerror.md): Error code to denote a problem with the validation of a managed object during a migration.
- [NSMigrationError](nsmigrationerror.md): Error code to denote a general migration error.

# NSPersistentStoreIncompleteSaveError (Objective-C)

**Framework:** Core Data  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Error code to denote that one or more of the stores returned an error during a save operations.

## Declaration

```objectivec
NSPersistentStoreIncompleteSaveError
```

<a id="Discussion"></a>

## Discussion

The stores or objects that failed are in the corresponding user info dictionary of the `NSError` object.

## See Also

### Error codes

- [NSCoreDataError](nscoredataerror.md): An error code that indicates a nonspecific Core Data error.
- [NSEntityMigrationPolicyError](nsentitymigrationpolicyerror.md): An error code that indicates a migration failure during processing of an entity migration policy.
- [NSExternalRecordImportError](nsexternalrecordimporterror.md): Error code to denote a general error encountered while importing external records.
- [NSInferredMappingModelError](nsinferredmappingmodelerror.md): Error code to denote a problem with the creation of an inferred mapping model.
- [NSManagedObjectConstraintMergeError](nsmanagedobjectconstraintmergeerror.md): Error code to denote a problem with the merging of instances of a managed object.
- [NSManagedObjectConstraintValidationError](nsmanagedobjectconstraintvalidationerror.md): Error code to denote a problem with the validation of a managed object.
- [NSManagedObjectContextLockingError](nsmanagedobjectcontextlockingerror.md): Error code to denote an inability to acquire a lock in a managed object context.
- [NSManagedObjectExternalRelationshipError](nsmanagedobjectexternalrelationshiperror.md): Error code to denote that an object being saved has a relationship containing an object from another store.
- [NSManagedObjectMergeError](nsmanagedobjectmergeerror.md): Error code to denote that a merge policy failed—Core Data is unable to complete merging.
- [NSManagedObjectModelReferenceNotFoundError](nsmanagedobjectmodelreferencenotfounderror.md): An error code that indicates Core Data isn’t able to find or instantiate the referenced object model.
- [NSManagedObjectReferentialIntegrityError](nsmanagedobjectreferentialintegrityerror.md): Error code to denote an attempt to fire a fault pointing to an object that does not exist.
- [NSManagedObjectValidationError](nsmanagedobjectvalidationerror.md): Error code to denote a generic validation error.
- [NSMigrationCancelledError](nsmigrationcancellederror.md): Error code to denote that migration failed due to manual cancellation.
- [NSMigrationConstraintViolationError](nsmigrationconstraintviolationerror.md): Error code to denote a problem with the validation of a managed object during a migration.
- [NSMigrationError](nsmigrationerror.md): Error code to denote a general migration error.
