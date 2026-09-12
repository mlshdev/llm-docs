> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsinvalidatedallobjectskey](https://developer.apple.com/documentation/coredata/nsinvalidatedallobjectskey)

# NSInvalidatedAllObjectsKey (Swift)

**Framework:** Core Data  
**Kind:** Global Variable  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A key that specifies that all objects in the context have been invalidated.

## Declaration

```swift
let NSInvalidatedAllObjectsKey: String
```

## See Also

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
- [didMergeChangesObjectIDsNotification](nsmanagedobjectcontext/didmergechangesobjectidsnotification.md): A notification that posts after a context finishes merging changes from another notification.
- [didSaveObjectIDsNotification](nsmanagedobjectcontext/didsaveobjectidsnotification.md): A notification that posts after a context finishes saving changes to its managed objects.
- [NSManagedObjectContext.NotificationKey](nsmanagedobjectcontext/notificationkey.md): Keys to access details in user info dictionaries of managed object context notifications.

# NSInvalidatedAllObjectsKey (Objective-C)

**Framework:** Core Data  
**Kind:** Global Variable  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A key that specifies that all objects in the context have been invalidated.

## Declaration

```objectivec
extern NSString * const NSInvalidatedAllObjectsKey;
```
