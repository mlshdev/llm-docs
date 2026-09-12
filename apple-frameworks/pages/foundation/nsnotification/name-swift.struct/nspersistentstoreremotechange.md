> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsnotification/name-swift.struct/nspersistentstoreremotechange](https://developer.apple.com/documentation/foundation/nsnotification/name-swift.struct/nspersistentstoreremotechange)

# NSPersistentStoreRemoteChange

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

A notification that posts after another process writes to a persistent store.

## Declaration

```swift
static let NSPersistentStoreRemoteChange: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

This notification’s `object` is the changed store coordinator. The framework posts the notification to a private thread. Move to a known thread before peforming any work.

The `userInfo` dictionary contains the store’s URL, the store’s unique identifier, and the transaction’s history token, which you access with the [NSPersistentStoreURLKey](../../../coredata/nspersistentstoreurlkey.md), [NSStoreUUIDKey](../../../coredata/nsstoreuuidkey.md), and [NSPersistentHistoryTokenKey](../../../coredata/nspersistenthistorytokenkey.md) keys. It’s safe to capture the dictionary’s contents.

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
- [NSPersistentStoreDidImportUbiquitousContentChanges](nspersistentstoredidimportubiquitouscontentchanges.md): Deprecated. Posted after records are imported from the ubiquitous content store.
