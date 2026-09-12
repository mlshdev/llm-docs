> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmanagedobjectcontext/didsaveobjectsnotification](https://developer.apple.com/documentation/coredata/nsmanagedobjectcontext/didsaveobjectsnotification)

# didSaveObjectsNotification

**Framework:** Core Data  
**Kind:** Type Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 3.0+ · macOS 10.4+ · tvOS 3.0+ · visionOS · watchOS 1.0+

A notification that posts after a context completes a save.

## Declaration

```swift
static let didSaveObjectsNotification: Notification.Name
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  Use [didSaveObjectIDsNotification](didsaveobjectidsnotification.md) instead of this notification.

This notification’s `object` is the saved context. Don’t peform any asynchronous work or block the calling thread. [NSManagedObjectContext](../nsmanagedobjectcontext.md) posts notifications to the same thread that creates it.

The `userInfo` dictionary contains the inserted, updated, and deleted managed objects of the completed save. For the keys to access those objects, see [NSManagedObjectContext.NotificationKey](notificationkey.md). Don’t capture the dictionary’s contents.

To safely use the provided managed objects on the current thread, create a new context and use its [mergeChanges(fromContextDidSave:)](mergechanges%28fromcontextdidsave_%29.md) method to merge in the notification’s changes.

## See Also

### Managing notifications

- [didChangeObjectsNotification](didchangeobjectsnotification.md): A notification that posts when a context makes changes to its registered objects.
- [NSManagedObjectContextObjectsDidChange](../../foundation/nsnotification/name-swift.struct/nsmanagedobjectcontextobjectsdidchange.md): A notification that posts when there are changes to context’s registered managed objects.
- [NSManagedObjectContextDidSave](../../foundation/nsnotification/name-swift.struct/nsmanagedobjectcontextdidsave.md): A notification that posts after a context finishes writing unsaved changes.
- [willSaveObjectsNotification](willsaveobjectsnotification.md): A notification that posts before a context writes pending changes to disk.
- [NSManagedObjectContextWillSave](../../foundation/nsnotification/name-swift.struct/nsmanagedobjectcontextwillsave.md): A notification that posts before a context writes unsaved changes.
- [NSInsertedObjectsKey](../nsinsertedobjectskey.md): A key for the set of objects that were inserted into the context.
- [NSUpdatedObjectsKey](../nsupdatedobjectskey.md): A key for the set of objects that were updated.
- [NSDeletedObjectsKey](../nsdeletedobjectskey.md): A key for the set of objects that were marked for deletion during the previous event.
- [NSRefreshedObjectsKey](../nsrefreshedobjectskey.md): A key for the set of objects that were refreshed but were not dirtied in the scope of this context.
- [NSInvalidatedObjectsKey](../nsinvalidatedobjectskey.md): A key for the set of objects that were invalidated.
- [NSInvalidatedAllObjectsKey](../nsinvalidatedallobjectskey.md): A key that specifies that all objects in the context have been invalidated.
- [didMergeChangesObjectIDsNotification](didmergechangesobjectidsnotification.md): A notification that posts after a context finishes merging changes from another notification.
- [didSaveObjectIDsNotification](didsaveobjectidsnotification.md): A notification that posts after a context finishes saving changes to its managed objects.
- [NSManagedObjectContext.NotificationKey](notificationkey.md): Keys to access details in user info dictionaries of managed object context notifications.
