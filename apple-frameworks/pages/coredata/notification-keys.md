> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/notification-keys](https://developer.apple.com/documentation/coredata/notification-keys)

# Notification keys (Swift)

**Framework:** Core Data  
**Kind:** API Collection

The keys you use to retrieve values from a notification’s user info dictionary.

## Topics

### Constants

- [NSAddedPersistentStoresKey](nsaddedpersistentstoreskey.md): Key for the array of stores that were added.
- [NSRemovedPersistentStoresKey](nsremovedpersistentstoreskey.md): Key for the array of stores that were removed.
- [NSUUIDChangedPersistentStoresKey](nsuuidchangedpersistentstoreskey.md): Key for an array containing the old and new stores.
- [NSPersistentStoreConnectionPoolMaxSizeKey](nspersistentstoreconnectionpoolmaxsizekey.md): The maximum connection pool size to use on a store that supports concurrent request handling.
- [NSPersistentStoreSaveConflictsErrorKey](nspersistentstoresaveconflictserrorkey.md): The key for the array of merge conflict objects (instances of [NSMergeConflict](nsmergeconflict.md)).
- [NSPersistentStoreUbiquitousTransitionTypeKey](nspersistentstoreubiquitoustransitiontypekey.md): Deprecated.

## See Also

### Responding to changes of the coordinator’s registered stores

- [NSPersistentStoreCoordinatorStoresWillChange](../foundation/nsnotification/name-swift.struct/nspersistentstorecoordinatorstoreswillchange.md): A notification that posts before a coordinator changes its registered stores.
- [NSPersistentStoreCoordinatorStoresDidChange](../foundation/nsnotification/name-swift.struct/nspersistentstorecoordinatorstoresdidchange.md): A notification that the coordinator posts after its registered stores change.
- [NSPersistentStoreCoordinatorWillRemoveStore](../foundation/nsnotification/name-swift.struct/nspersistentstorecoordinatorwillremovestore.md): A notification that posts before a coordinator removes a store.

# Notification keys (Objective-C)

**Framework:** Core Data  
**Kind:** API Collection

The keys you use to retrieve values from a notification’s user info dictionary.

## Topics

### Constants

- [NSAddedPersistentStoresKey](nsaddedpersistentstoreskey.md): Key for the array of stores that were added.
- [NSRemovedPersistentStoresKey](nsremovedpersistentstoreskey.md): Key for the array of stores that were removed.
- [NSUUIDChangedPersistentStoresKey](nsuuidchangedpersistentstoreskey.md): Key for an array containing the old and new stores.
- [NSPersistentStoreConnectionPoolMaxSizeKey](nspersistentstoreconnectionpoolmaxsizekey.md): The maximum connection pool size to use on a store that supports concurrent request handling.
- [NSPersistentStoreSaveConflictsErrorKey](nspersistentstoresaveconflictserrorkey.md): The key for the array of merge conflict objects (instances of [NSMergeConflict](nsmergeconflict.md)).
- [NSPersistentStoreUbiquitousTransitionTypeKey](nspersistentstoreubiquitoustransitiontypekey.md): Deprecated.
