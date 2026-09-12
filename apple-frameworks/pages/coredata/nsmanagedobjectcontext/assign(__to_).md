> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmanagedobjectcontext/assign(_:to:)](https://developer.apple.com/documentation/coredata/nsmanagedobjectcontext/assign(_:to:))

# assign(\_:to:) (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Specifies the store in which a newly inserted object will be saved.

## Declaration

```swift
func assign(_ object: Any, to store: NSPersistentStore)
```

## Parameters

- `object`: A managed object.
- `store`: A persistent store.

<a id="Discussion"></a>

## Discussion

You can obtain a store from the persistent store coordinator, using for example [persistentStore(for:)](../nspersistentstorecoordinator/persistentstore%28for_%29.md).

<a id="Special-Considerations"></a>

### Special Considerations

It is only necessary to use this method if the receiver’s persistent store coordinator manages multiple writable stores that have `object`‘s entity in their configuration. Maintaining configurations in the managed object model can eliminate the need for invoking this method directly in many situations. If the receiver’s persistent store coordinator manages only a single writable store, or if only one store has `object`’s entity in its model, `object` will automatically be assigned to that store.

## See Also

### Related Documentation

- [persistentStoreCoordinator](persistentstorecoordinator.md): The persistent store coordinator of the context.

### Handling managed objects

- [shouldDeleteInaccessibleFaults](shoulddeleteinaccessiblefaults.md): A Boolean value that determines whether the context turns inaccessible faults into deleted objects.
- [insertedObjects](insertedobjects.md): The set of objects that have been inserted into the context but not yet saved in a persistent store.
- [updatedObjects](updatedobjects.md): The set of objects registered with the context that have uncommitted changes.
- [deletedObjects](deletedobjects.md): The set of objects that will be removed from their persistent store during the next save operation.
- [shouldHandleInaccessibleFault(\_:for:triggeredByProperty:)](shouldhandleinaccessiblefault%28__for_triggeredbyproperty_%29.md): Creates a log of the inaccessible fault.
- [insert(\_:)](insert%28__%29.md): Registers an object to be inserted in the context’s persistent store the next time changes are saved.
- [delete(\_:)](delete%28__%29.md): Specifies an object that should be removed from its persistent store when changes are committed.
- [obtainPermanentIDs(for:)](obtainpermanentids%28for_%29.md): Converts to permanent IDs the object IDs of the objects in a given array.
- [detectConflicts(for:)](detectconflicts%28for_%29.md): Marks an object for conflict detection.
- [refresh(\_:mergeChanges:)](refresh%28__mergechanges_%29.md): Updates the persistent properties of a managed object to use the latest values from the persistent store.
- [processPendingChanges()](processpendingchanges%28%29.md): Forces the context to process changes to the object graph.
- [observeValue(forKeyPath:of:change:context:)](observevalue%28forkeypath_of_change_context_%29.md): Allows a context that has registered as an observer of a value to be notified of a change to that value.

# assignObject:toPersistentStore: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Specifies the store in which a newly inserted object will be saved.

## Declaration

```objectivec
- (void) assignObject:(id) object toPersistentStore:(NSPersistentStore *) store;
```

## Parameters

- `object`: A managed object.
- `store`: A persistent store.

<a id="Discussion"></a>

## Discussion

You can obtain a store from the persistent store coordinator, using for example [persistentStoreForURL:](../nspersistentstorecoordinator/persistentstore%28for_%29.md).

<a id="Special-Considerations"></a>

### Special Considerations

It is only necessary to use this method if the receiver’s persistent store coordinator manages multiple writable stores that have `object`‘s entity in their configuration. Maintaining configurations in the managed object model can eliminate the need for invoking this method directly in many situations. If the receiver’s persistent store coordinator manages only a single writable store, or if only one store has `object`’s entity in its model, `object` will automatically be assigned to that store.

## See Also

### Related Documentation

- [persistentStoreCoordinator](persistentstorecoordinator.md): The persistent store coordinator of the context.

### Handling managed objects

- [shouldDeleteInaccessibleFaults](shoulddeleteinaccessiblefaults.md): A Boolean value that determines whether the context turns inaccessible faults into deleted objects.
- [insertedObjects](insertedobjects.md): The set of objects that have been inserted into the context but not yet saved in a persistent store.
- [updatedObjects](updatedobjects.md): The set of objects registered with the context that have uncommitted changes.
- [deletedObjects](deletedobjects.md): The set of objects that will be removed from their persistent store during the next save operation.
- [shouldHandleInaccessibleFault:forObjectID:triggeredByProperty:](shouldhandleinaccessiblefault%28__for_triggeredbyproperty_%29.md): Creates a log of the inaccessible fault.
- [insertObject:](insert%28__%29.md): Registers an object to be inserted in the context’s persistent store the next time changes are saved.
- [deleteObject:](delete%28__%29.md): Specifies an object that should be removed from its persistent store when changes are committed.
- [obtainPermanentIDsForObjects:error:](obtainpermanentids%28for_%29.md): Converts to permanent IDs the object IDs of the objects in a given array.
- [detectConflictsForObject:](detectconflicts%28for_%29.md): Marks an object for conflict detection.
- [refreshObject:mergeChanges:](refresh%28__mergechanges_%29.md): Updates the persistent properties of a managed object to use the latest values from the persistent store.
- [processPendingChanges](processpendingchanges%28%29.md): Forces the context to process changes to the object graph.
- [observeValueForKeyPath:ofObject:change:context:](observevalue%28forkeypath_of_change_context_%29.md): Allows a context that has registered as an observer of a value to be notified of a change to that value.
