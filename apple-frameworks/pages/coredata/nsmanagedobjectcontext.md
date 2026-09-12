> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmanagedobjectcontext](https://developer.apple.com/documentation/coredata/nsmanagedobjectcontext)

# NSManagedObjectContext (Swift)

**Framework:** Core Data  
**Kind:** Class  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

An object space to manipulate and track changes to managed objects.

## Declaration

```swift
nonisolated class NSManagedObjectContext
```

## Mentioned In

- [Setting up a Core Data stack manually](setting-up-a-core-data-stack-manually.md)
- [Using Core Data in the background](using-core-data-in-the-background.md)
- [Setting up a Core Data stack](setting-up-a-core-data-stack.md)

<a id="overview"></a>

## Overview

A context consists of a group of related model objects that represent an internally consistent view of one or more persistent stores. Changes to managed objects remain in memory in the associated context until Core Data saves that context to one or more persistent stores. A single managed object instance exists in one and only one context, but multiple copies of an object can exist in different contexts. Therefore, an object is unique to a particular context.

<a id="Life-cycle-management"></a>

### Life cycle management

The context is a powerful object with a central role in the life cycle of managed objects, with responsibilities from life cycle management (including faulting) to validation, inverse relationship handling, and undo/redo. Through a context you can retrieve or “fetch” objects from a persistent store, make changes to those objects, and then either discard the changes or—again through the context—commit them back to the persistent store. The context is responsible for watching for changes in its objects and maintains an undo manager so you can have finer-grained control over undo and redo. You can insert new objects and delete ones you have fetched, and commit these modifications to the persistent store.

All objects fetched from an external store are registered in a context together with a global identifier (an instance of `NSManagedObjectID`) that’s used to uniquely identify each object to the external store.

<a id="Parent-store"></a>

### Parent store

Managed object contexts have a parent store from which they retrieve data representing managed objects and through which they commit changes to managed objects.

Prior to OS X v10.7 and iOS v5.0, the parent store is always a persistent store coordinator. In macOS 10.7 and later and iOS v5.0 and later, the parent store may be another managed object context. Ultimately the root of a context’s ancestry must be a persistent store coordinator. The coordinator provides the managed object model and dispatches requests to the various persistent stores containing the data.

If a context’s parent store is another managed object context, fetch and save operations are mediated by the parent context instead of a coordinator. This pattern has a number of usage scenarios, including:

- Performing background operations on a second thread or queue.
- Managing discardable edits, such as in an inspector window or view.

As the first scenario implies, a parent context can service requests from children on different threads. You cannot, therefore, use parent contexts created with the thread confinement type (see [Concurrency](nsmanagedobjectcontext.md#Concurrency)).

When you save changes in a context, the changes are only committed “one store up.” If you save a child context, changes are pushed to its parent. Changes are not saved to the persistent store until the root context is saved. (A root managed object context is one whose parent context is `nil`.) In addition, a parent does not pull changes from children before it saves. You must save a child context if you want ultimately to commit the changes.

<a id="Notifications"></a>

### Notifications

A context posts notifications at various points—see [NSManagedObjectContextObjectsDidChange](../foundation/nsnotification/name-swift.struct/nsmanagedobjectcontextobjectsdidchange.md) for example. Typically, you should register to receive these notifications only from known contexts:

**Swift**

```swift
NotificationCenter.default.addObserver(self,
                                       selector: #selector(<#methodToCall#>),
                                       name: .NSManagedObjectContextDidSave,
                                       object: <#managedObjectContext#>)
```

**Objective-C**

```objc
[[NSNotificationCenter defaultCenter] addObserver:self
                                      selector:@selector(<#Selector name#>)
                                      name:NSManagedObjectContextDidSaveNotification
                                      object:<#A managed object context#>];
```

Several system frameworks use Core Data internally. If you register to receive these notifications from all contexts (by passing `nil` as the object parameter to a method such as [addObserver(\_:selector:name:object:)](../foundation/notificationcenter/addobserver%28__selector_name_object_%29.md)), then you may receive unexpected notifications that are difficult to handle.

<a id="Concurrency"></a>

### Concurrency

Core Data uses thread (or serialized queue) confinement to protect managed objects and managed object contexts (see [Core Data Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CoreData/index.html#//apple_ref/doc/uid/TP40001075)). A consequence of this is that a context assumes the default owner is the thread or queue that creates it. Don’t, therefore, initialize a context on one thread then pass it to another. Instead, pass a reference to a persistent store coordinator and have the receiving thread or queue create a new context using that. If you use [Operation](../foundation/operation.md), you must create the context in [main()](../foundation/operation/main%28%29.md) (for a serial queue) or [start()](../foundation/operation/start%28%29.md) (for a concurrent queue).

When you create a context you specify the concurrency type with which you’ll use it. When you create a managed object context, you have two options for its thread (queue) association:

- Private: The context creates and manages a private queue.
- Main: The context associates with the main queue and is dependent on the application’s event loop; otherwise, it’s similar to a private context. Use this type for contexts that update view controllers and other user interface elements.

You use contexts using the queue-based concurrency types in conjunction with [perform(\_:)](nsmanagedobjectcontext/perform%28__%29.md) and [performAndWait(\_:)](nsmanagedobjectcontext/performandwait%28__%29-ypye.md). You group “standard” messages to send to the context within a block to pass to one of these methods. There are two exceptions:

- Setter methods on queue-based managed object contexts are thread-safe. You can invoke these methods directly on any thread.
- If your code executes on the main thread, you can invoke methods on the main queue style contexts directly instead of using the block based API.

[perform(\_:)](nsmanagedobjectcontext/perform%28__%29.md) and [performAndWait(\_:)](nsmanagedobjectcontext/performandwait%28__%29-ypye.md) ensure the block operations execute on the correct queue for the context. The [perform(\_:)](nsmanagedobjectcontext/perform%28__%29.md) method returns immediately and the context executes the block methods on its own thread. With the [performAndWait(\_:)](nsmanagedobjectcontext/performandwait%28__%29-ypye.md) method, the context still executes the block methods on its own thread, but the method doesn’t return until the block completes.

It’s important to appreciate that blocks execute as a distinct body of work. As soon as your block ends, anyone else can enqueue another block, undo changes, reset the context, and so on. Thus blocks may be quite large, and typically end by invoking [save()](nsmanagedobjectcontext/save%28%29.md).

**Swift**

```swift
var savedOK = false
managedObjectContext.performAndWait() {

    // Perform operations with the context.

    do {
        try managedObjectContext.save()
        savedOK = true
    } catch {
        print("Error saving context: \(error)")
    }
}
```

**Objective-C**

```objc
__block BOOL savedOK = NO;
[managedObjectContext performBlockAndWait:^{

    // Perform operations with the context.

    NSError *error = nil;
    if ([managedObjectContext save:&error]) {
        savedOK = YES;
    } else {
        NSLog(@"Error saving: %@", error);
    }
}];
```

You can also perform other operations, such as:

**Swift**

```swift
let fetchRequest: NSFetchRequest<Entity> = NSFetchRequest(entityName: "Entity")
var count = 0

managedObjectContext.performAndWait() {
    do {
        count = try managedObjectContext.count(for: fetchRequest)
    } catch {
        print("Error counting objects: \(error)")
    }
}

print("The fetch request would return \(count) objects")
```

**Objective-C**

```objc
NSFetchRequest *fetchRequest = [NSFetchRequest fetchRequestWithEntityName:@"Entity"];
__block NSUInteger count = 0;

[managedObjectContext performBlockAndWait:^() {
    NSError *error;
    count = [managedObjectContext countForFetchRequest:fetchRequest error:&error];
    if (count == NSNotFound) {
        NSLog(@"Error counting objects: %@", error);
    }
}];

NSLog(@"The fetch request would return %lu objects", count);
```

<a id="Subclassing-notes"></a>

### Subclassing notes

You are strongly discouraged from subclassing `NSManagedObjectContext`. The change tracking and undo management mechanisms are highly optimized and hence intricate and delicate. Interposing your own additional logic that might impact [processPendingChanges()](nsmanagedobjectcontext/processpendingchanges%28%29.md) can have unforeseen consequences. In situations such as store migration, Core Data will create instances of `NSManagedObjectContext` for its own use. Under these circumstances, you cannot rely on any features of your custom subclass. Any `NSManagedObject` subclass must always be fully compatible with `NSManagedObjectContext` (that is, it cannot rely on features of a subclass of `NSManagedObjectContext`).

## Topics

### Creating a context

- [init(\_:)](nsmanagedobjectcontext/init%28__%29.md): Creates a context that uses the specified concurrency type.
- [NSManagedObjectContext.ConcurrencyType](nsmanagedobjectcontext/concurrencytype-swift.struct.md): The concurrency types to use with a managed object context.
- [init(concurrencyType:)](nsmanagedobjectcontext/init%28concurrencytype_%29.md): Deprecated. Creates a context that uses the specified concurrency type.
- [NSManagedObjectContextConcurrencyType](nsmanagedobjectcontextconcurrencytype.md): The concurrency types you can use with a managed object context.

### Configuring a context

- [persistentStoreCoordinator](nsmanagedobjectcontext/persistentstorecoordinator.md): The persistent store coordinator of the context.
- [parent](nsmanagedobjectcontext/parent.md): The parent of the context.
- [name](nsmanagedobjectcontext/name.md): The developer-provided name of the context.
- [userInfo](nsmanagedobjectcontext/userinfo.md): The user information for the context.

### Registering and fetching objects

- [fetch(\_:)](nsmanagedobjectcontext/fetch%28__%29-38ys1.md): Returns an array of objects that meet the criteria of the specified fetch request.
- [fetch(\_:)](nsmanagedobjectcontext/fetch%28__%29-4xeoz.md): Returns an array of items of the specified type that meet the fetch request’s critieria.
- [count(for:)](nsmanagedobjectcontext/count%28for_%29-93zbm.md): Returns the number of objects the specified request fetches when it executes.
- [registeredObject(for:)](nsmanagedobjectcontext/registeredobject%28for_%29.md): Returns an object that exists in the context.
- [object(with:)](nsmanagedobjectcontext/object%28with_%29.md): Returns either an existing object from the context or a fault that represents that object.
- [existingObject(with:)](nsmanagedobjectcontext/existingobject%28with_%29.md): Returns an existing object from either the context or the persistent store.
- [registeredObjects](nsmanagedobjectcontext/registeredobjects.md): The set of registered managed objects in the context.
- [count(for:)](nsmanagedobjectcontext/count%28for_%29-3r91z.md): Returns a count of the objects the specified request fetches when it executes.
- [execute(\_:)](nsmanagedobjectcontext/execute%28__%29.md): Passes a request to the persistent store without affecting the contents of the managed object context, and returns a persistent store result.
- [refreshAllObjects()](nsmanagedobjectcontext/refreshallobjects%28%29.md): Refreshes all of the registered managed objects in the context.
- [retainsRegisteredObjects](nsmanagedobjectcontext/retainsregisteredobjects.md): A Boolean value that indicates whether the context keeps strong references to all registered managed objects.

### Handling managed objects

- [shouldDeleteInaccessibleFaults](nsmanagedobjectcontext/shoulddeleteinaccessiblefaults.md): A Boolean value that determines whether the context turns inaccessible faults into deleted objects.
- [insertedObjects](nsmanagedobjectcontext/insertedobjects.md): The set of objects that have been inserted into the context but not yet saved in a persistent store.
- [updatedObjects](nsmanagedobjectcontext/updatedobjects.md): The set of objects registered with the context that have uncommitted changes.
- [deletedObjects](nsmanagedobjectcontext/deletedobjects.md): The set of objects that will be removed from their persistent store during the next save operation.
- [shouldHandleInaccessibleFault(\_:for:triggeredByProperty:)](nsmanagedobjectcontext/shouldhandleinaccessiblefault%28__for_triggeredbyproperty_%29.md): Creates a log of the inaccessible fault.
- [insert(\_:)](nsmanagedobjectcontext/insert%28__%29.md): Registers an object to be inserted in the context’s persistent store the next time changes are saved.
- [delete(\_:)](nsmanagedobjectcontext/delete%28__%29.md): Specifies an object that should be removed from its persistent store when changes are committed.
- [assign(\_:to:)](nsmanagedobjectcontext/assign%28__to_%29.md): Specifies the store in which a newly inserted object will be saved.
- [obtainPermanentIDs(for:)](nsmanagedobjectcontext/obtainpermanentids%28for_%29.md): Converts to permanent IDs the object IDs of the objects in a given array.
- [detectConflicts(for:)](nsmanagedobjectcontext/detectconflicts%28for_%29.md): Marks an object for conflict detection.
- [refresh(\_:mergeChanges:)](nsmanagedobjectcontext/refresh%28__mergechanges_%29.md): Updates the persistent properties of a managed object to use the latest values from the persistent store.
- [processPendingChanges()](nsmanagedobjectcontext/processpendingchanges%28%29.md): Forces the context to process changes to the object graph.
- [observeValue(forKeyPath:of:change:context:)](nsmanagedobjectcontext/observevalue%28forkeypath_of_change_context_%29.md): Allows a context that has registered as an observer of a value to be notified of a change to that value.

### Managing concurrency

- [NSManagedObjectContextQueryGenerationKey](nsmanagedobjectcontextquerygenerationkey.md): Constant used to reference the query generation token.
- [mergeChanges(fromRemoteContextSave:into:)](nsmanagedobjectcontext/mergechanges%28fromremotecontextsave_into_%29.md): Handles changes from other processes or from a serialized state.
- [automaticallyMergesChangesFromParent](nsmanagedobjectcontext/automaticallymergeschangesfromparent.md): A Boolean value that indicates whether the context automatically merges changes saved to its persistent store coordinator or parent context.
- [concurrencyType](nsmanagedobjectcontext/concurrencytype-swift.property.md): The concurrency type for the context.
- [mergePolicy](nsmanagedobjectcontext/mergepolicy.md): The merge policy of the context.
- [queryGenerationToken](nsmanagedobjectcontext/querygenerationtoken.md): Returns the token associated with the query generation currently in use by this context.
- [transactionAuthor](nsmanagedobjectcontext/transactionauthor.md): The author for the context that is used as an identifier in persistent history transactions.
- [mergeChanges(fromContextDidSave:)](nsmanagedobjectcontext/mergechanges%28fromcontextdidsave_%29.md): Merges the changes specified in a given notification.
- [setQueryGenerationFrom(\_:)](nsmanagedobjectcontext/setquerygenerationfrom%28__%29.md): Sets the query generation this context should use.

### Managing notifications

- [didChangeObjectsNotification](nsmanagedobjectcontext/didchangeobjectsnotification.md): A notification that posts when a context makes changes to its registered objects.
- [NSManagedObjectContextObjectsDidChange](../foundation/nsnotification/name-swift.struct/nsmanagedobjectcontextobjectsdidchange.md): A notification that posts when there are changes to context’s registered managed objects.
- [didSaveObjectsNotification](nsmanagedobjectcontext/didsaveobjectsnotification.md): A notification that posts after a context completes a save.
- [NSManagedObjectContextDidSave](../foundation/nsnotification/name-swift.struct/nsmanagedobjectcontextdidsave.md): A notification that posts after a context finishes writing unsaved changes.
- [willSaveObjectsNotification](nsmanagedobjectcontext/willsaveobjectsnotification.md): A notification that posts before a context writes pending changes to disk.
- [NSManagedObjectContextWillSave](../foundation/nsnotification/name-swift.struct/nsmanagedobjectcontextwillsave.md): A notification that posts before a context writes unsaved changes.
- [NSInsertedObjectsKey](nsinsertedobjectskey.md): A key for the set of objects that were inserted into the context.
- [NSUpdatedObjectsKey](nsupdatedobjectskey.md): A key for the set of objects that were updated.
- [NSDeletedObjectsKey](nsdeletedobjectskey.md): A key for the set of objects that were marked for deletion during the previous event.
- [NSRefreshedObjectsKey](nsrefreshedobjectskey.md): A key for the set of objects that were refreshed but were not dirtied in the scope of this context.
- [NSInvalidatedObjectsKey](nsinvalidatedobjectskey.md): A key for the set of objects that were invalidated.
- [NSInvalidatedAllObjectsKey](nsinvalidatedallobjectskey.md): A key that specifies that all objects in the context have been invalidated.
- [didMergeChangesObjectIDsNotification](nsmanagedobjectcontext/didmergechangesobjectidsnotification.md): A notification that posts after a context finishes merging changes from another notification.
- [didSaveObjectIDsNotification](nsmanagedobjectcontext/didsaveobjectidsnotification.md): A notification that posts after a context finishes saving changes to its managed objects.
- [NSManagedObjectContext.NotificationKey](nsmanagedobjectcontext/notificationkey.md): Keys to access details in user info dictionaries of managed object context notifications.

### Managing unsaved and uncommitted changes

- [save()](nsmanagedobjectcontext/save%28%29.md): Attempts to commit unsaved changes to registered objects to the context’s parent store.
- [hasChanges](nsmanagedobjectcontext/haschanges.md): A Boolean value that indicates whether the context has uncommitted changes.

### Undoing changes

- [undoManager](nsmanagedobjectcontext/undomanager.md): The object that provides undo support for the context.
- [undo()](nsmanagedobjectcontext/undo%28%29.md): Sends an undo message to the context’s undo manager, asking it to reverse the latest uncommitted changes applied to objects in the object graph.
- [redo()](nsmanagedobjectcontext/redo%28%29.md): Sends a redo message to the context’s undo manager, asking it to reverse the latest undo operation applied to objects in the object graph.
- [reset()](nsmanagedobjectcontext/reset%28%29.md): Returns the context to its base state.
- [rollback()](nsmanagedobjectcontext/rollback%28%29.md): Removes everything from the undo stack, discards all insertions and deletions, and restores updated objects to their last committed values.

### Handling delete propagation

- [propagatesDeletesAtEndOfEvent](nsmanagedobjectcontext/propagatesdeletesatendofevent.md): A Boolean value that indicates whether the context propagates deletes at the end of the event in which a change was made.

### Managing the staleness interval

- [stalenessInterval](nsmanagedobjectcontext/stalenessinterval.md): The maximum length of time that may have elapsed since the store previously fetched data before fulfilling a fault issues a new fetch.

### Performing block operations

- [perform(\_:)](nsmanagedobjectcontext/perform%28__%29.md): Asynchronously performs the specified closure on the context’s queue.
- [perform(schedule:\_:)](nsmanagedobjectcontext/perform%28schedule___%29.md): Submits a closure to the context’s queue for asynchronous execution.
- [performAndWait(\_:)](nsmanagedobjectcontext/performandwait%28__%29-ypye.md): Synchronously performs the specified closure on the context’s queue.
- [performAndWait(\_:)](nsmanagedobjectcontext/performandwait%28__%29-6aaf1.md): Submits a closure to the context’s queue for synchronous execution.
- [NSManagedObjectContext.ScheduledTaskType](nsmanagedobjectcontext/scheduledtasktype.md): The different types of scheduled tasks.

### Deprecated

- [Deprecated symbols](nsmanagedobjectcontext-deprecated-symbols.md): Review unsupported symbols and their replacements.

### Structures

- [NSManagedObjectContext.DidMergeChangesAsyncMessage](nsmanagedobjectcontext/didmergechangesasyncmessage.md): Posted after a private queue context merges changes from another context, containing object IDs.
- [NSManagedObjectContext.DidMergeChangesMessage](nsmanagedobjectcontext/didmergechangesmessage.md): Posted after a main queue context merges changes from another context, containing object IDs.
- [NSManagedObjectContext.DidSaveMessage](nsmanagedobjectcontext/didsavemessage.md): Posted after a main queue context saves.
- [NSManagedObjectContext.DidSaveObjectIDsAsyncMessage](nsmanagedobjectcontext/didsaveobjectidsasyncmessage.md): Posted after a private queue context saves, containing object IDs rather than full objects.
- [NSManagedObjectContext.DidSaveObjectIDsMessage](nsmanagedobjectcontext/didsaveobjectidsmessage.md): Posted after a main queue context saves, containing object IDs rather than full objects.
- [NSManagedObjectContext.ObjectsDidChangeMessage](nsmanagedobjectcontext/objectsdidchangemessage.md): Posted when objects in a main queue context change (inserted, updated, deleted, refreshed, or invalidated).
- [NSManagedObjectContext.WillSaveMessage](nsmanagedobjectcontext/willsavemessage.md): Posted before a main queue context saves.

### Initializers

- [init(coder:)](nsmanagedobjectcontext/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSEditor](https://developer.apple.com/documentation/appkit/nseditor)
- [NSEditorRegistration](https://developer.apple.com/documentation/appkit/nseditorregistration)
- [NSLocking](../foundation/nslocking.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Object Management

- [NSManagedObject](nsmanagedobject.md): The base class that all Core Data model objects inherit from.
- [NSManagedObjectID](nsmanagedobjectid.md): A compact, universal identifier for a managed object.

# NSManagedObjectContext (Objective-C)

**Framework:** Core Data  
**Kind:** Class  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

An object space to manipulate and track changes to managed objects.

## Declaration

```objectivec
@interface NSManagedObjectContext : NSObject
```

## Mentioned In

- [Setting up a Core Data stack manually](setting-up-a-core-data-stack-manually.md)
- [Using Core Data in the background](using-core-data-in-the-background.md)
- [Setting up a Core Data stack](setting-up-a-core-data-stack.md)

<a id="overview"></a>

## Overview

A context consists of a group of related model objects that represent an internally consistent view of one or more persistent stores. Changes to managed objects remain in memory in the associated context until Core Data saves that context to one or more persistent stores. A single managed object instance exists in one and only one context, but multiple copies of an object can exist in different contexts. Therefore, an object is unique to a particular context.

<a id="Life-cycle-management"></a>

### Life cycle management

The context is a powerful object with a central role in the life cycle of managed objects, with responsibilities from life cycle management (including faulting) to validation, inverse relationship handling, and undo/redo. Through a context you can retrieve or “fetch” objects from a persistent store, make changes to those objects, and then either discard the changes or—again through the context—commit them back to the persistent store. The context is responsible for watching for changes in its objects and maintains an undo manager so you can have finer-grained control over undo and redo. You can insert new objects and delete ones you have fetched, and commit these modifications to the persistent store.

All objects fetched from an external store are registered in a context together with a global identifier (an instance of `NSManagedObjectID`) that’s used to uniquely identify each object to the external store.

<a id="Parent-store"></a>

### Parent store

Managed object contexts have a parent store from which they retrieve data representing managed objects and through which they commit changes to managed objects.

Prior to OS X v10.7 and iOS v5.0, the parent store is always a persistent store coordinator. In macOS 10.7 and later and iOS v5.0 and later, the parent store may be another managed object context. Ultimately the root of a context’s ancestry must be a persistent store coordinator. The coordinator provides the managed object model and dispatches requests to the various persistent stores containing the data.

If a context’s parent store is another managed object context, fetch and save operations are mediated by the parent context instead of a coordinator. This pattern has a number of usage scenarios, including:

- Performing background operations on a second thread or queue.
- Managing discardable edits, such as in an inspector window or view.

As the first scenario implies, a parent context can service requests from children on different threads. You cannot, therefore, use parent contexts created with the thread confinement type (see [Concurrency](nsmanagedobjectcontext.md#Concurrency)).

When you save changes in a context, the changes are only committed “one store up.” If you save a child context, changes are pushed to its parent. Changes are not saved to the persistent store until the root context is saved. (A root managed object context is one whose parent context is `nil`.) In addition, a parent does not pull changes from children before it saves. You must save a child context if you want ultimately to commit the changes.

<a id="Notifications"></a>

### Notifications

A context posts notifications at various points—see [NSManagedObjectContextObjectsDidChange](../foundation/nsnotification/name-swift.struct/nsmanagedobjectcontextobjectsdidchange.md) for example. Typically, you should register to receive these notifications only from known contexts:

**Swift**

```swift
NotificationCenter.default.addObserver(self,
                                       selector: #selector(<#methodToCall#>),
                                       name: .NSManagedObjectContextDidSave,
                                       object: <#managedObjectContext#>)
```

**Objective-C**

```objc
[[NSNotificationCenter defaultCenter] addObserver:self
                                      selector:@selector(<#Selector name#>)
                                      name:NSManagedObjectContextDidSaveNotification
                                      object:<#A managed object context#>];
```

Several system frameworks use Core Data internally. If you register to receive these notifications from all contexts (by passing `nil` as the object parameter to a method such as [addObserver:selector:name:object:](../foundation/notificationcenter/addobserver%28__selector_name_object_%29.md)), then you may receive unexpected notifications that are difficult to handle.

<a id="Concurrency"></a>

### Concurrency

Core Data uses thread (or serialized queue) confinement to protect managed objects and managed object contexts (see [Core Data Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CoreData/index.html#//apple_ref/doc/uid/TP40001075)). A consequence of this is that a context assumes the default owner is the thread or queue that creates it. Don’t, therefore, initialize a context on one thread then pass it to another. Instead, pass a reference to a persistent store coordinator and have the receiving thread or queue create a new context using that. If you use [NSOperation](../foundation/operation.md), you must create the context in [main](../foundation/operation/main%28%29.md) (for a serial queue) or [start](../foundation/operation/start%28%29.md) (for a concurrent queue).

When you create a context you specify the concurrency type with which you’ll use it. When you create a managed object context, you have two options for its thread (queue) association:

- Private: The context creates and manages a private queue.
- Main: The context associates with the main queue and is dependent on the application’s event loop; otherwise, it’s similar to a private context. Use this type for contexts that update view controllers and other user interface elements.

You use contexts using the queue-based concurrency types in conjunction with [performBlock:](nsmanagedobjectcontext/perform%28__%29.md) and [performBlockAndWait:](nsmanagedobjectcontext/performandwait%28__%29-ypye.md). You group “standard” messages to send to the context within a block to pass to one of these methods. There are two exceptions:

- Setter methods on queue-based managed object contexts are thread-safe. You can invoke these methods directly on any thread.
- If your code executes on the main thread, you can invoke methods on the main queue style contexts directly instead of using the block based API.

[performBlock:](nsmanagedobjectcontext/perform%28__%29.md) and [performBlockAndWait:](nsmanagedobjectcontext/performandwait%28__%29-ypye.md) ensure the block operations execute on the correct queue for the context. The [performBlock:](nsmanagedobjectcontext/perform%28__%29.md) method returns immediately and the context executes the block methods on its own thread. With the [performBlockAndWait:](nsmanagedobjectcontext/performandwait%28__%29-ypye.md) method, the context still executes the block methods on its own thread, but the method doesn’t return until the block completes.

It’s important to appreciate that blocks execute as a distinct body of work. As soon as your block ends, anyone else can enqueue another block, undo changes, reset the context, and so on. Thus blocks may be quite large, and typically end by invoking [save:](nsmanagedobjectcontext/save%28%29.md).

**Swift**

```swift
var savedOK = false
managedObjectContext.performAndWait() {

    // Perform operations with the context.

    do {
        try managedObjectContext.save()
        savedOK = true
    } catch {
        print("Error saving context: \(error)")
    }
}
```

**Objective-C**

```objc
__block BOOL savedOK = NO;
[managedObjectContext performBlockAndWait:^{

    // Perform operations with the context.

    NSError *error = nil;
    if ([managedObjectContext save:&error]) {
        savedOK = YES;
    } else {
        NSLog(@"Error saving: %@", error);
    }
}];
```

You can also perform other operations, such as:

**Swift**

```swift
let fetchRequest: NSFetchRequest<Entity> = NSFetchRequest(entityName: "Entity")
var count = 0

managedObjectContext.performAndWait() {
    do {
        count = try managedObjectContext.count(for: fetchRequest)
    } catch {
        print("Error counting objects: \(error)")
    }
}

print("The fetch request would return \(count) objects")
```

**Objective-C**

```objc
NSFetchRequest *fetchRequest = [NSFetchRequest fetchRequestWithEntityName:@"Entity"];
__block NSUInteger count = 0;

[managedObjectContext performBlockAndWait:^() {
    NSError *error;
    count = [managedObjectContext countForFetchRequest:fetchRequest error:&error];
    if (count == NSNotFound) {
        NSLog(@"Error counting objects: %@", error);
    }
}];

NSLog(@"The fetch request would return %lu objects", count);
```

<a id="Subclassing-notes"></a>

### Subclassing notes

You are strongly discouraged from subclassing `NSManagedObjectContext`. The change tracking and undo management mechanisms are highly optimized and hence intricate and delicate. Interposing your own additional logic that might impact [processPendingChanges](nsmanagedobjectcontext/processpendingchanges%28%29.md) can have unforeseen consequences. In situations such as store migration, Core Data will create instances of `NSManagedObjectContext` for its own use. Under these circumstances, you cannot rely on any features of your custom subclass. Any `NSManagedObject` subclass must always be fully compatible with `NSManagedObjectContext` (that is, it cannot rely on features of a subclass of `NSManagedObjectContext`).

## Topics

### Creating a context

- [initWithConcurrencyType:](nsmanagedobjectcontext/init%28concurrencytype_%29.md): Deprecated. Creates a context that uses the specified concurrency type.
- [NSManagedObjectContextConcurrencyType](nsmanagedobjectcontextconcurrencytype.md): The concurrency types you can use with a managed object context.

### Configuring a context

- [persistentStoreCoordinator](nsmanagedobjectcontext/persistentstorecoordinator.md): The persistent store coordinator of the context.
- [parentContext](nsmanagedobjectcontext/parent.md): The parent of the context.
- [name](nsmanagedobjectcontext/name.md): The developer-provided name of the context.
- [userInfo](nsmanagedobjectcontext/userinfo.md): The user information for the context.

### Registering and fetching objects

- [executeFetchRequest:error:](nsmanagedobjectcontext/executefetchrequest_error_.md): Returns an array of objects that meet the criteria of the specified fetch request.
- [countForFetchRequest:error:](nsmanagedobjectcontext/count%28for_%29-93zbm.md): Returns the number of objects the specified request fetches when it executes.
- [objectRegisteredForID:](nsmanagedobjectcontext/registeredobject%28for_%29.md): Returns an object that exists in the context.
- [objectWithID:](nsmanagedobjectcontext/object%28with_%29.md): Returns either an existing object from the context or a fault that represents that object.
- [existingObjectWithID:error:](nsmanagedobjectcontext/existingobject%28with_%29.md): Returns an existing object from either the context or the persistent store.
- [registeredObjects](nsmanagedobjectcontext/registeredobjects.md): The set of registered managed objects in the context.
- [executeRequest:error:](nsmanagedobjectcontext/execute%28__%29.md): Passes a request to the persistent store without affecting the contents of the managed object context, and returns a persistent store result.
- [refreshAllObjects](nsmanagedobjectcontext/refreshallobjects%28%29.md): Refreshes all of the registered managed objects in the context.
- [retainsRegisteredObjects](nsmanagedobjectcontext/retainsregisteredobjects.md): A Boolean value that indicates whether the context keeps strong references to all registered managed objects.

### Handling managed objects

- [shouldDeleteInaccessibleFaults](nsmanagedobjectcontext/shoulddeleteinaccessiblefaults.md): A Boolean value that determines whether the context turns inaccessible faults into deleted objects.
- [insertedObjects](nsmanagedobjectcontext/insertedobjects.md): The set of objects that have been inserted into the context but not yet saved in a persistent store.
- [updatedObjects](nsmanagedobjectcontext/updatedobjects.md): The set of objects registered with the context that have uncommitted changes.
- [deletedObjects](nsmanagedobjectcontext/deletedobjects.md): The set of objects that will be removed from their persistent store during the next save operation.
- [shouldHandleInaccessibleFault:forObjectID:triggeredByProperty:](nsmanagedobjectcontext/shouldhandleinaccessiblefault%28__for_triggeredbyproperty_%29.md): Creates a log of the inaccessible fault.
- [insertObject:](nsmanagedobjectcontext/insert%28__%29.md): Registers an object to be inserted in the context’s persistent store the next time changes are saved.
- [deleteObject:](nsmanagedobjectcontext/delete%28__%29.md): Specifies an object that should be removed from its persistent store when changes are committed.
- [assignObject:toPersistentStore:](nsmanagedobjectcontext/assign%28__to_%29.md): Specifies the store in which a newly inserted object will be saved.
- [obtainPermanentIDsForObjects:error:](nsmanagedobjectcontext/obtainpermanentids%28for_%29.md): Converts to permanent IDs the object IDs of the objects in a given array.
- [detectConflictsForObject:](nsmanagedobjectcontext/detectconflicts%28for_%29.md): Marks an object for conflict detection.
- [refreshObject:mergeChanges:](nsmanagedobjectcontext/refresh%28__mergechanges_%29.md): Updates the persistent properties of a managed object to use the latest values from the persistent store.
- [processPendingChanges](nsmanagedobjectcontext/processpendingchanges%28%29.md): Forces the context to process changes to the object graph.
- [observeValueForKeyPath:ofObject:change:context:](nsmanagedobjectcontext/observevalue%28forkeypath_of_change_context_%29.md): Allows a context that has registered as an observer of a value to be notified of a change to that value.

### Managing concurrency

- [NSManagedObjectContextQueryGenerationKey](nsmanagedobjectcontextquerygenerationkey.md): Constant used to reference the query generation token.
- [mergeChangesFromRemoteContextSave:intoContexts:](nsmanagedobjectcontext/mergechanges%28fromremotecontextsave_into_%29.md): Handles changes from other processes or from a serialized state.
- [automaticallyMergesChangesFromParent](nsmanagedobjectcontext/automaticallymergeschangesfromparent.md): A Boolean value that indicates whether the context automatically merges changes saved to its persistent store coordinator or parent context.
- [concurrencyType](nsmanagedobjectcontext/concurrencytype-swift.property.md): The concurrency type for the context.
- [mergePolicy](nsmanagedobjectcontext/mergepolicy.md): The merge policy of the context.
- [queryGenerationToken](nsmanagedobjectcontext/querygenerationtoken.md): Returns the token associated with the query generation currently in use by this context.
- [transactionAuthor](nsmanagedobjectcontext/transactionauthor.md): The author for the context that is used as an identifier in persistent history transactions.
- [mergeChangesFromContextDidSaveNotification:](nsmanagedobjectcontext/mergechanges%28fromcontextdidsave_%29.md): Merges the changes specified in a given notification.
- [setQueryGenerationFromToken:error:](nsmanagedobjectcontext/setquerygenerationfrom%28__%29.md): Sets the query generation this context should use.

### Managing unsaved and uncommitted changes

- [save:](nsmanagedobjectcontext/save%28%29.md): Attempts to commit unsaved changes to registered objects to the context’s parent store.
- [hasChanges](nsmanagedobjectcontext/haschanges.md): A Boolean value that indicates whether the context has uncommitted changes.

### Undoing changes

- [undoManager](nsmanagedobjectcontext/undomanager.md): The object that provides undo support for the context.
- [undo](nsmanagedobjectcontext/undo%28%29.md): Sends an undo message to the context’s undo manager, asking it to reverse the latest uncommitted changes applied to objects in the object graph.
- [redo](nsmanagedobjectcontext/redo%28%29.md): Sends a redo message to the context’s undo manager, asking it to reverse the latest undo operation applied to objects in the object graph.
- [reset](nsmanagedobjectcontext/reset%28%29.md): Returns the context to its base state.
- [rollback](nsmanagedobjectcontext/rollback%28%29.md): Removes everything from the undo stack, discards all insertions and deletions, and restores updated objects to their last committed values.

### Handling delete propagation

- [propagatesDeletesAtEndOfEvent](nsmanagedobjectcontext/propagatesdeletesatendofevent.md): A Boolean value that indicates whether the context propagates deletes at the end of the event in which a change was made.

### Managing the staleness interval

- [stalenessInterval](nsmanagedobjectcontext/stalenessinterval.md): The maximum length of time that may have elapsed since the store previously fetched data before fulfilling a fault issues a new fetch.

### Performing block operations

- [performBlock:](nsmanagedobjectcontext/perform%28__%29.md): Asynchronously performs the specified closure on the context’s queue.
- [performBlockAndWait:](nsmanagedobjectcontext/performandwait%28__%29-ypye.md): Synchronously performs the specified closure on the context’s queue.

### Deprecated

- [Deprecated symbols](nsmanagedobjectcontext-deprecated-symbols.md): Review unsupported symbols and their replacements.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [NSCoding](../foundation/nscoding.md)
- [NSEditor](https://developer.apple.com/documentation/appkit/nseditor)
- [NSEditorRegistration](https://developer.apple.com/documentation/appkit/nseditorregistration)
- [NSLocking](../foundation/nslocking.md)
- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Object Management

- [NSManagedObject](nsmanagedobject.md): The base class that all Core Data model objects inherit from.
- [NSManagedObjectID](nsmanagedobjectid.md): A compact, universal identifier for a managed object.
