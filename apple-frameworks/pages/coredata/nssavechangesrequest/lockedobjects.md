> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nssavechangesrequest/lockedobjects](https://developer.apple.com/documentation/coredata/nssavechangesrequest/lockedobjects)

# lockedObjects (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The objects that were flagged for optimistic locking on the calling context.

## Declaration

```swift
var lockedObjects: Set<NSManagedObject>? { get }
```

<a id="Discussion"></a>

## Discussion

Objects are flagged for optimistic locking with [detectConflicts(for:)](../nsmanagedobjectcontext/detectconflicts%28for_%29.md).

## See Also

### Getting Information about a Request

- [insertedObjects](insertedobjects.md): The objects that were inserted into the calling context.
- [updatedObjects](updatedobjects.md): The objects that were modified in the calling context.
- [deletedObjects](deletedobjects.md): The objects that were deleted in the calling context.

# lockedObjects (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The objects that were flagged for optimistic locking on the calling context.

## Declaration

```objectivec
@property (strong, readonly, nullable) NSSet<__kindof NSManagedObject *> * lockedObjects;
```

<a id="Discussion"></a>

## Discussion

Objects are flagged for optimistic locking with [detectConflictsForObject:](../nsmanagedobjectcontext/detectconflicts%28for_%29.md).

## See Also

### Getting Information about a Request

- [insertedObjects](insertedobjects.md): The objects that were inserted into the calling context.
- [updatedObjects](updatedobjects.md): The objects that were modified in the calling context.
- [deletedObjects](deletedobjects.md): The objects that were deleted in the calling context.
