> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmanagedobjectcontext/refresh(_:mergechanges:)](https://developer.apple.com/documentation/coredata/nsmanagedobjectcontext/refresh(_:mergechanges:))

# refresh(\_:mergeChanges:) (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Updates the persistent properties of a managed object to use the latest values from the persistent store.

## Declaration

```swift
func refresh(_ object: NSManagedObject, mergeChanges flag: Bool)
```

## Parameters

- `object`: A managed object.
- `flag`: A Boolean value.

  If `flag` is [false](https://developer.apple.com/documentation/swift/false), the context discards pending changes and the managed object becomes a fault. Upon next access, the context reloads the object’s values from the persistent store or last cached state.

  If `flag` is [true](https://developer.apple.com/documentation/swift/true), the context reloads the object’s property values from the store or the cache. Then the context applies local changes over the newly loaded values. Merging the local values into `object` always succeeds, and never results in a merge conflict.

<a id="Discussion"></a>

## Discussion

If you call this method before the [stalenessInterval](stalenessinterval.md) expires, the context reloads the data from the cache instead of fetching from the store. If `flag` is [true](https://developer.apple.com/documentation/swift/true), this method doesn’t affect any transient properties. If `flag` is [false](https://developer.apple.com/documentation/swift/false), the object disposes the value of transient properties.

You typically use this method to ensure data freshness if multiple managed object contexts share a single persistent store. You can use this method to resolve an optimistic locking failure when attempting to save.

Turning `object` into a fault by setting `flag` to [false](https://developer.apple.com/documentation/swift/false) breaks strong references to related managed objects. You can use this method to release a portion of your object graph if you want to constrain memory usage.

## See Also

### Related Documentation

- [stalenessInterval](stalenessinterval.md): The maximum length of time that may have elapsed since the store previously fetched data before fulfilling a fault issues a new fetch.
- [reset()](reset%28%29.md): Returns the context to its base state.

### Handling managed objects

- [shouldDeleteInaccessibleFaults](shoulddeleteinaccessiblefaults.md): A Boolean value that determines whether the context turns inaccessible faults into deleted objects.
- [insertedObjects](insertedobjects.md): The set of objects that have been inserted into the context but not yet saved in a persistent store.
- [updatedObjects](updatedobjects.md): The set of objects registered with the context that have uncommitted changes.
- [deletedObjects](deletedobjects.md): The set of objects that will be removed from their persistent store during the next save operation.
- [shouldHandleInaccessibleFault(\_:for:triggeredByProperty:)](shouldhandleinaccessiblefault%28__for_triggeredbyproperty_%29.md): Creates a log of the inaccessible fault.
- [insert(\_:)](insert%28__%29.md): Registers an object to be inserted in the context’s persistent store the next time changes are saved.
- [delete(\_:)](delete%28__%29.md): Specifies an object that should be removed from its persistent store when changes are committed.
- [assign(\_:to:)](assign%28__to_%29.md): Specifies the store in which a newly inserted object will be saved.
- [obtainPermanentIDs(for:)](obtainpermanentids%28for_%29.md): Converts to permanent IDs the object IDs of the objects in a given array.
- [detectConflicts(for:)](detectconflicts%28for_%29.md): Marks an object for conflict detection.
- [processPendingChanges()](processpendingchanges%28%29.md): Forces the context to process changes to the object graph.
- [observeValue(forKeyPath:of:change:context:)](observevalue%28forkeypath_of_change_context_%29.md): Allows a context that has registered as an observer of a value to be notified of a change to that value.

# refreshObject:mergeChanges: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Updates the persistent properties of a managed object to use the latest values from the persistent store.

## Declaration

```objectivec
- (void) refreshObject:(NSManagedObject *) object mergeChanges:(BOOL) flag;
```

## Parameters

- `object`: A managed object.
- `flag`: A Boolean value.

  If `flag` is [false](https://developer.apple.com/documentation/swift/false), the context discards pending changes and the managed object becomes a fault. Upon next access, the context reloads the object’s values from the persistent store or last cached state.

  If `flag` is [true](https://developer.apple.com/documentation/swift/true), the context reloads the object’s property values from the store or the cache. Then the context applies local changes over the newly loaded values. Merging the local values into `object` always succeeds, and never results in a merge conflict.

<a id="Discussion"></a>

## Discussion

If you call this method before the [stalenessInterval](stalenessinterval.md) expires, the context reloads the data from the cache instead of fetching from the store. If `flag` is [true](https://developer.apple.com/documentation/swift/true), this method doesn’t affect any transient properties. If `flag` is [false](https://developer.apple.com/documentation/swift/false), the object disposes the value of transient properties.

You typically use this method to ensure data freshness if multiple managed object contexts share a single persistent store. You can use this method to resolve an optimistic locking failure when attempting to save.

Turning `object` into a fault by setting `flag` to [false](https://developer.apple.com/documentation/swift/false) breaks strong references to related managed objects. You can use this method to release a portion of your object graph if you want to constrain memory usage.

## See Also

### Related Documentation

- [stalenessInterval](stalenessinterval.md): The maximum length of time that may have elapsed since the store previously fetched data before fulfilling a fault issues a new fetch.
- [reset](reset%28%29.md): Returns the context to its base state.

### Handling managed objects

- [shouldDeleteInaccessibleFaults](shoulddeleteinaccessiblefaults.md): A Boolean value that determines whether the context turns inaccessible faults into deleted objects.
- [insertedObjects](insertedobjects.md): The set of objects that have been inserted into the context but not yet saved in a persistent store.
- [updatedObjects](updatedobjects.md): The set of objects registered with the context that have uncommitted changes.
- [deletedObjects](deletedobjects.md): The set of objects that will be removed from their persistent store during the next save operation.
- [shouldHandleInaccessibleFault:forObjectID:triggeredByProperty:](shouldhandleinaccessiblefault%28__for_triggeredbyproperty_%29.md): Creates a log of the inaccessible fault.
- [insertObject:](insert%28__%29.md): Registers an object to be inserted in the context’s persistent store the next time changes are saved.
- [deleteObject:](delete%28__%29.md): Specifies an object that should be removed from its persistent store when changes are committed.
- [assignObject:toPersistentStore:](assign%28__to_%29.md): Specifies the store in which a newly inserted object will be saved.
- [obtainPermanentIDsForObjects:error:](obtainpermanentids%28for_%29.md): Converts to permanent IDs the object IDs of the objects in a given array.
- [detectConflictsForObject:](detectconflicts%28for_%29.md): Marks an object for conflict detection.
- [processPendingChanges](processpendingchanges%28%29.md): Forces the context to process changes to the object graph.
- [observeValueForKeyPath:ofObject:change:context:](observevalue%28forkeypath_of_change_context_%29.md): Allows a context that has registered as an observer of a value to be notified of a change to that value.
