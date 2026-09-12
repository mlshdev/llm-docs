> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nssavechangesrequest/init(inserted:updated:deleted:locked:)](https://developer.apple.com/documentation/coredata/nssavechangesrequest/init(inserted:updated:deleted:locked:))

# init(inserted:updated:deleted:locked:) (Swift)

**Framework:** Core Data  
**Kind:** Initializer  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Initializes a save changes request with collections of given changes.

## Declaration

```swift
init(inserted insertedObjects: Set<NSManagedObject>?, updated updatedObjects: Set<NSManagedObject>?, deleted deletedObjects: Set<NSManagedObject>?, locked lockedObjects: Set<NSManagedObject>?)
```

## Parameters

- `insertedObjects`: Objects that were inserted into the calling context.
- `updatedObjects`: Objects that were updated in the calling context.
- `deletedObjects`: Objects that were deleted in the calling context.
- `lockedObjects`: Objects that were flagged for optimistic locking on the calling context.

<a id="return-value"></a>

## Return Value

A save changes request initialized with the given changes.

# initWithInsertedObjects:updatedObjects:deletedObjects:lockedObjects: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Initializes a save changes request with collections of given changes.

## Declaration

```objectivec
- (instancetype) initWithInsertedObjects:(NSSet<NSManagedObject *> *) insertedObjects updatedObjects:(NSSet<NSManagedObject *> *) updatedObjects deletedObjects:(NSSet<NSManagedObject *> *) deletedObjects lockedObjects:(NSSet<NSManagedObject *> *) lockedObjects;
```

## Parameters

- `insertedObjects`: Objects that were inserted into the calling context.
- `updatedObjects`: Objects that were updated in the calling context.
- `deletedObjects`: Objects that were deleted in the calling context.
- `lockedObjects`: Objects that were flagged for optimistic locking on the calling context.

<a id="return-value"></a>

## Return Value

A save changes request initialized with the given changes.
