> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmergepolicy/overwrite](https://developer.apple.com/documentation/coredata/nsmergepolicy/overwrite)

# overwrite (Swift)

**Framework:** Core Data  
**Kind:** Type Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A merge policy that overwrites the entire stored object.

## Declaration

```swift
class var overwrite: NSMergePolicy { get }
```

<a id="Discussion"></a>

## Discussion

This policy merges conflicts between the persistent store’s version of the object and the current in-memory version by saving the entire in-memory object to the persistent store.

## See Also

### Defining Merge Policies

- [error](error.md): The default merge policy for all managed object contexts.
- [mergeByPropertyStoreTrump](mergebypropertystoretrump.md): A property-based merge policy that applies external changes.
- [mergeByPropertyObjectTrump](mergebypropertyobjecttrump.md): A property-based merge policy that applies in-memory changes.
- [rollback](rollback.md): A merge policy that discards unsaved changes.
- [Merge Policies](../merge-policies.md): Define standard ways to handle conflicts during a save operation.

# overwriteMergePolicy (Objective-C)

**Framework:** Core Data  
**Kind:** Type Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A merge policy that overwrites the entire stored object.

## Declaration

```objectivec
@property (class, strong, readonly) NSMergePolicy * overwriteMergePolicy;
```

<a id="Discussion"></a>

## Discussion

This policy merges conflicts between the persistent store’s version of the object and the current in-memory version by saving the entire in-memory object to the persistent store.

## See Also

### Defining Merge Policies

- [errorMergePolicy](error.md): The default merge policy for all managed object contexts.
- [mergeByPropertyStoreTrumpMergePolicy](mergebypropertystoretrump.md): A property-based merge policy that applies external changes.
- [mergeByPropertyObjectTrumpMergePolicy](mergebypropertyobjecttrump.md): A property-based merge policy that applies in-memory changes.
- [rollbackMergePolicy](rollback.md): A merge policy that discards unsaved changes.
- [Merge Policies](../merge-policies.md): Define standard ways to handle conflicts during a save operation.
