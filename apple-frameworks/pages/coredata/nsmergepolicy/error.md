> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmergepolicy/error](https://developer.apple.com/documentation/coredata/nsmergepolicy/error)

# error (Swift)

**Framework:** Core Data  
**Kind:** Type Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The default merge policy for all managed object contexts.

## Declaration

```swift
class var error: NSMergePolicy { get }
```

<a id="Discussion"></a>

## Discussion

If a save fails because of conflicting objects, you can find the IDs of those objects in error’s `userInfo` dictionary. Use the [NSInsertedObjectsKey](../nsinsertedobjectskey.md) and [NSUpdatedObjectsKey](../nsupdatedobjectskey.md) keys to extract the object IDs.

## See Also

### Defining Merge Policies

- [mergeByPropertyStoreTrump](mergebypropertystoretrump.md): A property-based merge policy that applies external changes.
- [mergeByPropertyObjectTrump](mergebypropertyobjecttrump.md): A property-based merge policy that applies in-memory changes.
- [overwrite](overwrite.md): A merge policy that overwrites the entire stored object.
- [rollback](rollback.md): A merge policy that discards unsaved changes.
- [Merge Policies](../merge-policies.md): Define standard ways to handle conflicts during a save operation.

# errorMergePolicy (Objective-C)

**Framework:** Core Data  
**Kind:** Type Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The default merge policy for all managed object contexts.

## Declaration

```objectivec
@property (class, strong, readonly) NSMergePolicy * errorMergePolicy;
```

<a id="Discussion"></a>

## Discussion

If a save fails because of conflicting objects, you can find the IDs of those objects in error’s `userInfo` dictionary. Use the [NSInsertedObjectsKey](../nsinsertedobjectskey.md) and [NSUpdatedObjectsKey](../nsupdatedobjectskey.md) keys to extract the object IDs.

## See Also

### Defining Merge Policies

- [mergeByPropertyStoreTrumpMergePolicy](mergebypropertystoretrump.md): A property-based merge policy that applies external changes.
- [mergeByPropertyObjectTrumpMergePolicy](mergebypropertyobjecttrump.md): A property-based merge policy that applies in-memory changes.
- [overwriteMergePolicy](overwrite.md): A merge policy that overwrites the entire stored object.
- [rollbackMergePolicy](rollback.md): A merge policy that discards unsaved changes.
- [Merge Policies](../merge-policies.md): Define standard ways to handle conflicts during a save operation.
