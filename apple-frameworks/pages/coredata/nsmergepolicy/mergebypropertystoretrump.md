> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmergepolicy/mergebypropertystoretrump](https://developer.apple.com/documentation/coredata/nsmergepolicy/mergebypropertystoretrump)

# mergeByPropertyStoreTrump (Swift)

**Framework:** Core Data  
**Kind:** Type Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A property-based merge policy that applies external changes.

## Declaration

```swift
class var mergeByPropertyStoreTrump: NSMergePolicy { get }
```

<a id="Discussion"></a>

## Discussion

A policy that merges conflicts between the persistent store’s version of the object and the current in-memory version by individual property, with external changes trumping in-memory changes.

## See Also

### Defining Merge Policies

- [error](error.md): The default merge policy for all managed object contexts.
- [mergeByPropertyObjectTrump](mergebypropertyobjecttrump.md): A property-based merge policy that applies in-memory changes.
- [overwrite](overwrite.md): A merge policy that overwrites the entire stored object.
- [rollback](rollback.md): A merge policy that discards unsaved changes.
- [Merge Policies](../merge-policies.md): Define standard ways to handle conflicts during a save operation.

# mergeByPropertyStoreTrumpMergePolicy (Objective-C)

**Framework:** Core Data  
**Kind:** Type Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A property-based merge policy that applies external changes.

## Declaration

```objectivec
@property (class, strong, readonly) NSMergePolicy * mergeByPropertyStoreTrumpMergePolicy;
```

<a id="Discussion"></a>

## Discussion

A policy that merges conflicts between the persistent store’s version of the object and the current in-memory version by individual property, with external changes trumping in-memory changes.

## See Also

### Defining Merge Policies

- [errorMergePolicy](error.md): The default merge policy for all managed object contexts.
- [mergeByPropertyObjectTrumpMergePolicy](mergebypropertyobjecttrump.md): A property-based merge policy that applies in-memory changes.
- [overwriteMergePolicy](overwrite.md): A merge policy that overwrites the entire stored object.
- [rollbackMergePolicy](rollback.md): A merge policy that discards unsaved changes.
- [Merge Policies](../merge-policies.md): Define standard ways to handle conflicts during a save operation.
