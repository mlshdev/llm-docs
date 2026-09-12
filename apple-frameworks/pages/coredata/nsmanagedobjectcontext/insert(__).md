> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmanagedobjectcontext/insert(_:)](https://developer.apple.com/documentation/coredata/nsmanagedobjectcontext/insert(_:))

# insert(\_:) (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Registers an object to be inserted in the context’s persistent store the next time changes are saved.

## Declaration

```swift
func insert(_ object: NSManagedObject)
```

## Parameters

- `object`: A managed object.

<a id="Discussion"></a>

## Discussion

The managed object (`object`) is registered in the receiver with a temporary global ID. It is assigned a permanent global ID when changes are committed. If the current transaction is rolled back (for example, if the receiver is sent a [rollback()](rollback%28%29.md) message) before a save operation, the object is unregistered from the receiver.

## See Also

### Handling managed objects

- [shouldDeleteInaccessibleFaults](shoulddeleteinaccessiblefaults.md): A Boolean value that determines whether the context turns inaccessible faults into deleted objects.
- [insertedObjects](insertedobjects.md): The set of objects that have been inserted into the context but not yet saved in a persistent store.
- [updatedObjects](updatedobjects.md): The set of objects registered with the context that have uncommitted changes.
- [deletedObjects](deletedobjects.md): The set of objects that will be removed from their persistent store during the next save operation.
- [shouldHandleInaccessibleFault(\_:for:triggeredByProperty:)](shouldhandleinaccessiblefault%28__for_triggeredbyproperty_%29.md): Creates a log of the inaccessible fault.
- [delete(\_:)](delete%28__%29.md): Specifies an object that should be removed from its persistent store when changes are committed.
- [assign(\_:to:)](assign%28__to_%29.md): Specifies the store in which a newly inserted object will be saved.
- [obtainPermanentIDs(for:)](obtainpermanentids%28for_%29.md): Converts to permanent IDs the object IDs of the objects in a given array.
- [detectConflicts(for:)](detectconflicts%28for_%29.md): Marks an object for conflict detection.
- [refresh(\_:mergeChanges:)](refresh%28__mergechanges_%29.md): Updates the persistent properties of a managed object to use the latest values from the persistent store.
- [processPendingChanges()](processpendingchanges%28%29.md): Forces the context to process changes to the object graph.
- [observeValue(forKeyPath:of:change:context:)](observevalue%28forkeypath_of_change_context_%29.md): Allows a context that has registered as an observer of a value to be notified of a change to that value.

# insertObject: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Registers an object to be inserted in the context’s persistent store the next time changes are saved.

## Declaration

```objectivec
- (void) insertObject:(NSManagedObject *) object;
```

## Parameters

- `object`: A managed object.

<a id="Discussion"></a>

## Discussion

The managed object (`object`) is registered in the receiver with a temporary global ID. It is assigned a permanent global ID when changes are committed. If the current transaction is rolled back (for example, if the receiver is sent a [rollback](rollback%28%29.md) message) before a save operation, the object is unregistered from the receiver.

## See Also

### Handling managed objects

- [shouldDeleteInaccessibleFaults](shoulddeleteinaccessiblefaults.md): A Boolean value that determines whether the context turns inaccessible faults into deleted objects.
- [insertedObjects](insertedobjects.md): The set of objects that have been inserted into the context but not yet saved in a persistent store.
- [updatedObjects](updatedobjects.md): The set of objects registered with the context that have uncommitted changes.
- [deletedObjects](deletedobjects.md): The set of objects that will be removed from their persistent store during the next save operation.
- [shouldHandleInaccessibleFault:forObjectID:triggeredByProperty:](shouldhandleinaccessiblefault%28__for_triggeredbyproperty_%29.md): Creates a log of the inaccessible fault.
- [deleteObject:](delete%28__%29.md): Specifies an object that should be removed from its persistent store when changes are committed.
- [assignObject:toPersistentStore:](assign%28__to_%29.md): Specifies the store in which a newly inserted object will be saved.
- [obtainPermanentIDsForObjects:error:](obtainpermanentids%28for_%29.md): Converts to permanent IDs the object IDs of the objects in a given array.
- [detectConflictsForObject:](detectconflicts%28for_%29.md): Marks an object for conflict detection.
- [refreshObject:mergeChanges:](refresh%28__mergechanges_%29.md): Updates the persistent properties of a managed object to use the latest values from the persistent store.
- [processPendingChanges](processpendingchanges%28%29.md): Forces the context to process changes to the object graph.
- [observeValueForKeyPath:ofObject:change:context:](observevalue%28forkeypath_of_change_context_%29.md): Allows a context that has registered as an observer of a value to be notified of a change to that value.
