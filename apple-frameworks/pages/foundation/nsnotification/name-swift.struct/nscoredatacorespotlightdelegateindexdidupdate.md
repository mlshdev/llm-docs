> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsnotification/name-swift.struct/nscoredatacorespotlightdelegateindexdidupdate](https://developer.apple.com/documentation/foundation/nsnotification/name-swift.struct/nscoredatacorespotlightdelegateindexdidupdate)

# NSCoreDataCoreSpotlightDelegateIndexDidUpdate

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

A notification that posts after Spotlight completes an index update.

## Declaration

```swift
static let NSCoreDataCoreSpotlightDelegateIndexDidUpdate: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

This notification’s `object` is the Core Spotlight delegate. The framework posts the notification to a private thread. Move to a known thread before peforming any work.

The `userInfo` dictionary contains the persistent store’s unique identifier and the most recent history token, which you access with the [NSStoreUUIDKey](../../../coredata/nsstoreuuidkey.md) and [NSPersistentHistoryTokenKey](../../../coredata/nspersistenthistorytokenkey.md) keys. It’s safe to capture the dictionary’s contents.

## See Also

### Core Data

- [NSManagedObjectContextDidSave](nsmanagedobjectcontextdidsave.md): A notification that posts after a context finishes writing unsaved changes.
- [NSManagedObjectContextObjectsDidChange](nsmanagedobjectcontextobjectsdidchange.md): A notification that posts when there are changes to context’s registered managed objects.
- [NSManagedObjectContextWillSave](nsmanagedobjectcontextwillsave.md): A notification that posts before a context writes unsaved changes.
- [NSPersistentStoreCoordinatorStoresDidChange](nspersistentstorecoordinatorstoresdidchange.md): A notification that the coordinator posts after its registered stores change.
- [NSPersistentStoreCoordinatorStoresWillChange](nspersistentstorecoordinatorstoreswillchange.md): A notification that posts before a coordinator changes its registered stores.
- [NSPersistentStoreCoordinatorWillRemoveStore](nspersistentstorecoordinatorwillremovestore.md): A notification that posts before a coordinator removes a store.
- [NSManagedObjectContextDidMergeChangesObjectIDs](nsmanagedobjectcontextdidmergechangesobjectids.md): A notification that posts after a context merges changes from a different notification.
- [NSManagedObjectContextDidSaveObjectIDs](nsmanagedobjectcontextdidsaveobjectids.md): A notification that posts after a context finishes writing changes.
- [NSPersistentStoreRemoteChange](nspersistentstoreremotechange.md): A notification that posts after another process writes to a persistent store.
- [NSPersistentStoreDidImportUbiquitousContentChanges](nspersistentstoredidimportubiquitouscontentchanges.md): Deprecated. Posted after records are imported from the ubiquitous content store.
