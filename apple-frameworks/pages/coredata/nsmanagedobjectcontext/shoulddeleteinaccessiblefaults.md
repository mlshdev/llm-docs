> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmanagedobjectcontext/shoulddeleteinaccessiblefaults](https://developer.apple.com/documentation/coredata/nsmanagedobjectcontext/shoulddeleteinaccessiblefaults)

# shouldDeleteInaccessibleFaults (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that determines whether the context turns inaccessible faults into deleted objects.

## Declaration

```swift
var shouldDeleteInaccessibleFaults: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to control how the context behaves when it encounters an *inaccessible fault* — an object with no underlying data in the persistent store. For example, you might fetch an object that has a to-many relationship, but then a background context deletes the related objects from the store before you traverse that relationship.

When this property is set to [true](https://developer.apple.com/documentation/swift/true), the context returns a managed object with the following characteristics:

- The object’s attributes, including scalars, nullable, and mandatory attributes are all set to `nil` or `0`.
- The object’s [isDeleted](../nsmanagedobject/isdeleted.md) property is set to [true](https://developer.apple.com/documentation/swift/true), which adds the object to the context’s [deletedObjects](deletedobjects.md) set.
- The object is exempt from validation rules, including optionality, because the object is nonexistent and the context discards it when you next call [save()](save%28%29.md) or [reset()](reset%28%29.md).

When the context returns an object with these characteristics, your app can continue running and process this object in the same way as any other deleted object.

When this property is set to [false](https://developer.apple.com/documentation/swift/false), the context throws an exception.

The default value is [true](https://developer.apple.com/documentation/swift/true).

> **Note**

>  You can use query generations to pin a context to a stable view of the store’s data and isolate that context from changes that other contexts or processes make. For more information, see [Accessing data when the store changes](../accessing-data-when-the-store-changes.md).

## See Also

### Handling managed objects

- [insertedObjects](insertedobjects.md): The set of objects that have been inserted into the context but not yet saved in a persistent store.
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

# shouldDeleteInaccessibleFaults (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that determines whether the context turns inaccessible faults into deleted objects.

## Declaration

```objectivec
@property BOOL shouldDeleteInaccessibleFaults;
```

<a id="Discussion"></a>

## Discussion

Use this property to control how the context behaves when it encounters an *inaccessible fault* — an object with no underlying data in the persistent store. For example, you might fetch an object that has a to-many relationship, but then a background context deletes the related objects from the store before you traverse that relationship.

When this property is set to [true](https://developer.apple.com/documentation/swift/true), the context returns a managed object with the following characteristics:

- The object’s attributes, including scalars, nullable, and mandatory attributes are all set to `nil` or `0`.
- The object’s [deleted](../nsmanagedobject/isdeleted.md) property is set to [true](https://developer.apple.com/documentation/swift/true), which adds the object to the context’s [deletedObjects](deletedobjects.md) set.
- The object is exempt from validation rules, including optionality, because the object is nonexistent and the context discards it when you next call [save:](save%28%29.md) or [reset](reset%28%29.md).

When the context returns an object with these characteristics, your app can continue running and process this object in the same way as any other deleted object.

When this property is set to [false](https://developer.apple.com/documentation/swift/false), the context throws an exception.

The default value is [true](https://developer.apple.com/documentation/swift/true).

> **Note**

>  You can use query generations to pin a context to a stable view of the store’s data and isolate that context from changes that other contexts or processes make. For more information, see [Accessing data when the store changes](../accessing-data-when-the-store-changes.md).

## See Also

### Handling managed objects

- [insertedObjects](insertedobjects.md): The set of objects that have been inserted into the context but not yet saved in a persistent store.
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
