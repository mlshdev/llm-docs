> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsrefreshedobjectskey](https://developer.apple.com/documentation/coredata/nsrefreshedobjectskey)

# NSRefreshedObjectsKey (Swift)

**Framework:** Core Data  
**Kind:** Global Variable  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A key for the set of objects that were refreshed but were not dirtied in the scope of this context.

## Declaration

```swift
let NSRefreshedObjectsKey: String
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
- [NSInvalidatedObjectsKey](nsinvalidatedobjectskey.md): A key for the set of objects that were invalidated.
- [NSInvalidatedAllObjectsKey](nsinvalidatedallobjectskey.md): A key that specifies that all objects in the context have been invalidated.
- [didMergeChangesObjectIDsNotification](nsmanagedobjectcontext/didmergechangesobjectidsnotification.md): A notification that posts after a context finishes merging changes from another notification.
- [didSaveObjectIDsNotification](nsmanagedobjectcontext/didsaveobjectidsnotification.md): A notification that posts after a context finishes saving changes to its managed objects.
- [NSManagedObjectContext.NotificationKey](nsmanagedobjectcontext/notificationkey.md): Keys to access details in user info dictionaries of managed object context notifications.

# NSRefreshedObjectsKey (Objective-C)

**Framework:** Core Data  
**Kind:** Global Variable  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A key for the set of objects that were refreshed but were not dirtied in the scope of this context.

## Declaration

```objectivec
extern NSString * const NSRefreshedObjectsKey;
```
