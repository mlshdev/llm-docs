> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nssavechangesrequest/insertedobjects](https://developer.apple.com/documentation/coredata/nssavechangesrequest/insertedobjects)

# insertedObjects (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The objects that were inserted into the calling context.

## Declaration

```swift
var insertedObjects: Set<NSManagedObject>? { get }
```

## See Also

### Getting Information about a Request

- [updatedObjects](updatedobjects.md): The objects that were modified in the calling context.
- [deletedObjects](deletedobjects.md): The objects that were deleted in the calling context.
- [lockedObjects](lockedobjects.md): The objects that were flagged for optimistic locking on the calling context.

# insertedObjects (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The objects that were inserted into the calling context.

## Declaration

```objectivec
@property (strong, readonly, nullable) NSSet<__kindof NSManagedObject *> * insertedObjects;
```

## See Also

### Getting Information about a Request

- [updatedObjects](updatedobjects.md): The objects that were modified in the calling context.
- [deletedObjects](deletedobjects.md): The objects that were deleted in the calling context.
- [lockedObjects](lockedobjects.md): The objects that were flagged for optimistic locking on the calling context.
