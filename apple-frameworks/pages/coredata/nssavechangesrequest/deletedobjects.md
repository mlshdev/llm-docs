> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coredata/nssavechangesrequest/deletedobjects

# deletedObjects (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The objects that were deleted in the calling context.

## Declaration

```swift
var deletedObjects: Set<NSManagedObject>? { get }
```

## See Also

### Getting Information about a Request

- [insertedObjects](insertedobjects.md): The objects that were inserted into the calling context.
- [updatedObjects](updatedobjects.md): The objects that were modified in the calling context.
- [lockedObjects](lockedobjects.md): The objects that were flagged for optimistic locking on the calling context.

# deletedObjects (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The objects that were deleted in the calling context.

## Declaration

```objectivec
@property (strong, readonly, nullable) NSSet<__kindof NSManagedObject *> * deletedObjects;
```

## See Also

### Getting Information about a Request

- [insertedObjects](insertedobjects.md): The objects that were inserted into the calling context.
- [updatedObjects](updatedobjects.md): The objects that were modified in the calling context.
- [lockedObjects](lockedobjects.md): The objects that were flagged for optimistic locking on the calling context.
