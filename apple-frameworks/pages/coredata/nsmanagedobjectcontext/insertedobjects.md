> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmanagedobjectcontext/insertedobjects](https://developer.apple.com/documentation/coredata/nsmanagedobjectcontext/insertedobjects)

# insertedObjects (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The set of objects that have been inserted into the context but not yet saved in a persistent store.

## Declaration

```swift
var insertedObjects: Set<NSManagedObject> { get }
```

<a id="Discussion"></a>

## Discussion

A managed object context does not post key-value observing notifications when the return value of `insertedObjects` changes—it does, however, post a [NSManagedObjectContextObjectsDidChange](../../foundation/nsnotification/name-swift.struct/nsmanagedobjectcontextobjectsdidchange.md) notification when a change is made, and a [NSManagedObjectContextWillSave](../../foundation/nsnotification/name-swift.struct/nsmanagedobjectcontextwillsave.md) and a [NSManagedObjectContextDidSave](../../foundation/nsnotification/name-swift.struct/nsmanagedobjectcontextdidsave.md) notification before and after changes are committed respectively.

## See Also

### Related Documentation

- [registeredObjects](registeredobjects.md): The set of registered managed objects in the context.

### Handling managed objects

- [shouldDeleteInaccessibleFaults](shoulddeleteinaccessiblefaults.md): A Boolean value that determines whether the context turns inaccessible faults into deleted objects.
- [updatedObjects](updatedobjects.md): The set of objects registered with the context that have uncommitted changes.
- [deletedObjects](deletedobjects.md): The set of objects that will be removed from their persistent store during the next save operation.
- [shouldHandleInaccessibleFault(\_:for:triggeredByProperty:)](shouldhandleinaccessiblefault%28__for_triggeredbyproperty_%29.md): Creates a log of the inaccessible fault.
- [insert(\_:)](insert%28__%29.md): Registers an object to be inserted in the context’s persistent store the next time changes are saved.
- [delete(\_:)](delete%28__%29.md): Specifies an object that should be removed from its persistent store when changes are committed.
- [assign(\_:to:)](assign%28__to_%29.md): Specifies the store in which a newly inserted object will be saved.
- [obtainPermanentIDs(for:)](obtainpermanentids%28for_%29.md): Converts to permanent IDs the object IDs of the objects in a given array.
- [detectConflicts(for:)](detectconflicts%28for_%29.md): Marks an object for conflict detection.
- [refresh(\_:mergeChanges:)](refresh%28__mergechanges_%29.md): Updates the persistent properties of a managed object to use the latest values from the persistent store.
- [processPendingChanges()](processpendingchanges%28%29.md): Forces the context to process changes to the object graph.
- [observeValue(forKeyPath:of:change:context:)](observevalue%28forkeypath_of_change_context_%29.md): Allows a context that has registered as an observer of a value to be notified of a change to that value.

# insertedObjects (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The set of objects that have been inserted into the context but not yet saved in a persistent store.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) NSSet<__kindof NSManagedObject *> * insertedObjects;
```

<a id="Discussion"></a>

## Discussion

A managed object context does not post key-value observing notifications when the return value of `insertedObjects` changes—it does, however, post a [NSManagedObjectContextObjectsDidChange](../../foundation/nsnotification/name-swift.struct/nsmanagedobjectcontextobjectsdidchange.md) notification when a change is made, and a [NSManagedObjectContextWillSave](../../foundation/nsnotification/name-swift.struct/nsmanagedobjectcontextwillsave.md) and a [NSManagedObjectContextDidSave](../../foundation/nsnotification/name-swift.struct/nsmanagedobjectcontextdidsave.md) notification before and after changes are committed respectively.

## See Also

### Related Documentation

- [registeredObjects](registeredobjects.md): The set of registered managed objects in the context.

### Handling managed objects

- [shouldDeleteInaccessibleFaults](shoulddeleteinaccessiblefaults.md): A Boolean value that determines whether the context turns inaccessible faults into deleted objects.
- [updatedObjects](updatedobjects.md): The set of objects registered with the context that have uncommitted changes.
- [deletedObjects](deletedobjects.md): The set of objects that will be removed from their persistent store during the next save operation.
- [shouldHandleInaccessibleFault:forObjectID:triggeredByProperty:](shouldhandleinaccessiblefault%28__for_triggeredbyproperty_%29.md): Creates a log of the inaccessible fault.
- [insertObject:](insert%28__%29.md): Registers an object to be inserted in the context’s persistent store the next time changes are saved.
- [deleteObject:](delete%28__%29.md): Specifies an object that should be removed from its persistent store when changes are committed.
- [assignObject:toPersistentStore:](assign%28__to_%29.md): Specifies the store in which a newly inserted object will be saved.
- [obtainPermanentIDsForObjects:error:](obtainpermanentids%28for_%29.md): Converts to permanent IDs the object IDs of the objects in a given array.
- [detectConflictsForObject:](detectconflicts%28for_%29.md): Marks an object for conflict detection.
- [refreshObject:mergeChanges:](refresh%28__mergechanges_%29.md): Updates the persistent properties of a managed object to use the latest values from the persistent store.
- [processPendingChanges](processpendingchanges%28%29.md): Forces the context to process changes to the object graph.
- [observeValueForKeyPath:ofObject:change:context:](observevalue%28forkeypath_of_change_context_%29.md): Allows a context that has registered as an observer of a value to be notified of a change to that value.
