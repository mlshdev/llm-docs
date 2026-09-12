> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentstoreubiquitoustransitiontypekey](https://developer.apple.com/documentation/coredata/nspersistentstoreubiquitoustransitiontypekey)

# NSPersistentStoreUbiquitousTransitionTypeKey (Swift)

**Framework:** Core Data  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ (deprecated in 10.0) · iPadOS 7.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.9+ (deprecated in 10.12) · visionOS 1.0+ (deprecated in 1.0)

> Please see the release notes and Core Data documentation.

## Declaration

```swift
let NSPersistentStoreUbiquitousTransitionTypeKey: String
```

<a id="Description"></a>

## Description

In the [NSPersistentStoreCoordinatorStoresWillChange](../foundation/nsnotification/name-swift.struct/nspersistentstorecoordinatorstoreswillchange.md) and [NSPersistentStoreCoordinatorStoresDidChange](../foundation/nsnotification/name-swift.struct/nspersistentstorecoordinatorstoresdidchange.md) userInfo dictionaries, this identifies the type of event. The corresponding value is one of the [NSPersistentStoreUbiquitousTransitionType](nspersistentstoreubiquitoustransitiontype.md) enum values as an `NSNumber` object.

## See Also

### Constants

- [NSAddedPersistentStoresKey](nsaddedpersistentstoreskey.md): Key for the array of stores that were added.
- [NSRemovedPersistentStoresKey](nsremovedpersistentstoreskey.md): Key for the array of stores that were removed.
- [NSUUIDChangedPersistentStoresKey](nsuuidchangedpersistentstoreskey.md): Key for an array containing the old and new stores.
- [NSPersistentStoreConnectionPoolMaxSizeKey](nspersistentstoreconnectionpoolmaxsizekey.md): The maximum connection pool size to use on a store that supports concurrent request handling.
- [NSPersistentStoreSaveConflictsErrorKey](nspersistentstoresaveconflictserrorkey.md): The key for the array of merge conflict objects (instances of [NSMergeConflict](nsmergeconflict.md)).

# NSPersistentStoreUbiquitousTransitionTypeKey (Objective-C)

**Framework:** Core Data  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ (deprecated in 10.0) · iPadOS 7.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.9+ (deprecated in 10.12) · visionOS 1.0+ (deprecated in 1.0)

> Please see the release notes and Core Data documentation.

## Declaration

```objectivec
extern NSString * const NSPersistentStoreUbiquitousTransitionTypeKey;
```

<a id="Description"></a>

## Description

In the [NSPersistentStoreCoordinatorStoresWillChange](../foundation/nsnotification/name-swift.struct/nspersistentstorecoordinatorstoreswillchange.md) and [NSPersistentStoreCoordinatorStoresDidChange](../foundation/nsnotification/name-swift.struct/nspersistentstorecoordinatorstoresdidchange.md) userInfo dictionaries, this identifies the type of event. The corresponding value is one of the [NSPersistentStoreUbiquitousTransitionType](nspersistentstoreubiquitoustransitiontype.md) enum values as an `NSNumber` object.

## See Also

### Constants

- [NSAddedPersistentStoresKey](nsaddedpersistentstoreskey.md): Key for the array of stores that were added.
- [NSRemovedPersistentStoresKey](nsremovedpersistentstoreskey.md): Key for the array of stores that were removed.
- [NSUUIDChangedPersistentStoresKey](nsuuidchangedpersistentstoreskey.md): Key for an array containing the old and new stores.
- [NSPersistentStoreConnectionPoolMaxSizeKey](nspersistentstoreconnectionpoolmaxsizekey.md): The maximum connection pool size to use on a store that supports concurrent request handling.
- [NSPersistentStoreSaveConflictsErrorKey](nspersistentstoresaveconflictserrorkey.md): The key for the array of merge conflict objects (instances of [NSMergeConflict](nsmergeconflict.md)).
