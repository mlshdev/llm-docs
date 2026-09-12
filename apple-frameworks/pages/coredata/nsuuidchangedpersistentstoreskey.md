> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsuuidchangedpersistentstoreskey](https://developer.apple.com/documentation/coredata/nsuuidchangedpersistentstoreskey)

# NSUUIDChangedPersistentStoresKey (Swift)

**Framework:** Core Data  
**Kind:** Global Variable  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Key for an array containing the old and new stores.

## Declaration

```swift
let NSUUIDChangedPersistentStoresKey: String
```

<a id="Discussion"></a>

## Discussion

The object at index `0` is the old store instance, and the object at index `1` the new. When migration happens, the array contains a third object (at index `2`) that is an array containing the new objectIDs for all the migrated objects.

## See Also

### Constants

- [NSAddedPersistentStoresKey](nsaddedpersistentstoreskey.md): Key for the array of stores that were added.
- [NSRemovedPersistentStoresKey](nsremovedpersistentstoreskey.md): Key for the array of stores that were removed.
- [NSPersistentStoreConnectionPoolMaxSizeKey](nspersistentstoreconnectionpoolmaxsizekey.md): The maximum connection pool size to use on a store that supports concurrent request handling.
- [NSPersistentStoreSaveConflictsErrorKey](nspersistentstoresaveconflictserrorkey.md): The key for the array of merge conflict objects (instances of [NSMergeConflict](nsmergeconflict.md)).
- [NSPersistentStoreUbiquitousTransitionTypeKey](nspersistentstoreubiquitoustransitiontypekey.md): Deprecated.

# NSUUIDChangedPersistentStoresKey (Objective-C)

**Framework:** Core Data  
**Kind:** Global Variable  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Key for an array containing the old and new stores.

## Declaration

```objectivec
extern NSString * const NSUUIDChangedPersistentStoresKey;
```

<a id="Discussion"></a>

## Discussion

The object at index `0` is the old store instance, and the object at index `1` the new. When migration happens, the array contains a third object (at index `2`) that is an array containing the new objectIDs for all the migrated objects.

## See Also

### Constants

- [NSAddedPersistentStoresKey](nsaddedpersistentstoreskey.md): Key for the array of stores that were added.
- [NSRemovedPersistentStoresKey](nsremovedpersistentstoreskey.md): Key for the array of stores that were removed.
- [NSPersistentStoreConnectionPoolMaxSizeKey](nspersistentstoreconnectionpoolmaxsizekey.md): The maximum connection pool size to use on a store that supports concurrent request handling.
- [NSPersistentStoreSaveConflictsErrorKey](nspersistentstoresaveconflictserrorkey.md): The key for the array of merge conflict objects (instances of [NSMergeConflict](nsmergeconflict.md)).
- [NSPersistentStoreUbiquitousTransitionTypeKey](nspersistentstoreubiquitoustransitiontypekey.md): Deprecated.
