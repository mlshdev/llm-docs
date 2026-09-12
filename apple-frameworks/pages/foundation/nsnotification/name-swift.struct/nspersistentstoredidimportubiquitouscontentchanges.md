> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsnotification/name-swift.struct/nspersistentstoredidimportubiquitouscontentchanges](https://developer.apple.com/documentation/foundation/nsnotification/name-swift.struct/nspersistentstoredidimportubiquitouscontentchanges)

# NSPersistentStoreDidImportUbiquitousContentChanges

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 5.0+ (deprecated in 10.0) · iPadOS 5.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.7+ (deprecated in 10.12) · visionOS 1.0+ (deprecated in 1.0)

Posted after records are imported from the ubiquitous content store.

> Please see the release notes and Core Data documentation.

## Declaration

```swift
static let NSPersistentStoreDidImportUbiquitousContentChanges: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

The notification’s `object` is set to the `NSPersistentStoreCoordinator` instance which registered the store. The notification’s `userInfo` dictionary contains the same keys as the [NSManagedObjectContextObjectsDidChange](nsmanagedobjectcontextobjectsdidchange.md) notification ([NSInsertedObjectsKey](../../../coredata/nsinsertedobjectskey.md), [NSUpdatedObjectsKey](../../../coredata/nsupdatedobjectskey.md)[NSDeletedObjectsKey](../../../coredata/nsdeletedobjectskey.md)), however the values are sets of [NSManagedObjectID](../../../coredata/nsmanagedobjectid.md) objects rather than sets of [NSManagedObject](../../../coredata/nsmanagedobject.md) objects.

## See Also

### Core Data

- [NSManagedObjectContextDidSave](nsmanagedobjectcontextdidsave.md): A notification that posts after a context finishes writing unsaved changes.
- [NSManagedObjectContextObjectsDidChange](nsmanagedobjectcontextobjectsdidchange.md): A notification that posts when there are changes to context’s registered managed objects.
- [NSManagedObjectContextWillSave](nsmanagedobjectcontextwillsave.md): A notification that posts before a context writes unsaved changes.
- [NSPersistentStoreCoordinatorStoresDidChange](nspersistentstorecoordinatorstoresdidchange.md): A notification that the coordinator posts after its registered stores change.
- [NSPersistentStoreCoordinatorStoresWillChange](nspersistentstorecoordinatorstoreswillchange.md): A notification that posts before a coordinator changes its registered stores.
- [NSPersistentStoreCoordinatorWillRemoveStore](nspersistentstorecoordinatorwillremovestore.md): A notification that posts before a coordinator removes a store.
- [NSCoreDataCoreSpotlightDelegateIndexDidUpdate](nscoredatacorespotlightdelegateindexdidupdate.md): A notification that posts after Spotlight completes an index update.
- [NSManagedObjectContextDidMergeChangesObjectIDs](nsmanagedobjectcontextdidmergechangesobjectids.md): A notification that posts after a context merges changes from a different notification.
- [NSManagedObjectContextDidSaveObjectIDs](nsmanagedobjectcontextdidsaveobjectids.md): A notification that posts after a context finishes writing changes.
- [NSPersistentStoreRemoteChange](nspersistentstoreremotechange.md): A notification that posts after another process writes to a persistent store.
