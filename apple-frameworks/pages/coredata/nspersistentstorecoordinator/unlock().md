> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentstorecoordinator/unlock()](https://developer.apple.com/documentation/coredata/nspersistentstorecoordinator/unlock())

# unlock() (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 8.0) · iPadOS 3.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.4+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0)

Relinquishes a previously acquired lock.

> Use -performBlockAndWait: instead

## Declaration

```swift
func unlock()
```

## See Also

### Deprecated instance methods

- [addPersistentStore(ofType:configurationName:at:options:)](addpersistentstore%28oftype_configurationname_at_options_%29.md): Deprecated. Adds a specific type of persistent store at the provided location.
- [destroyPersistentStore(at:ofType:options:)](destroypersistentstore%28at_oftype_options_%29.md): Deprecated. Deletes a specific type of persistent store at the provided location.
- [importStore(withIdentifier:fromExternalRecordsDirectoryAt:to:options:ofType:)](importstore%28withidentifier_fromexternalrecordsdirectoryat_to_options_oftype_%29.md): Deprecated. Creates and populates a store with the external records found at a given URL.
- [lock()](lock%28%29.md): Deprecated. Attempts to acquire a lock.
- [migratePersistentStore(\_:to:options:withType:)](migratepersistentstore%28__to_options_withtype_%29.md): Deprecated. Changes the location and, if necessary, the store type of the specified persistent store.
- [replacePersistentStore(at:destinationOptions:withPersistentStoreFrom:sourceOptions:ofType:)](replacepersistentstore%28at_destinationoptions_withpersistentstorefrom_sourceoptions_oftype_%29.md): Deprecated. Replaces one persistent store with another.
- [tryLock()](trylock%28%29.md): Deprecated. Attempts to acquire a lock.
- [perform(\_:)](perform%28__%29-7jqb.md): Deprecated. Executes the provided closure asynchronously on the coordinator’s queue.
- [performAndWait(\_:)](performandwait%28__%29-d3kq.md): Deprecated. Executes the provided closure on the coordinator’s queue and waits for it to finish.

# unlock (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 8.0) · iPadOS 3.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.4+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0)

Relinquishes a previously acquired lock.

> Use -performBlockAndWait: instead

## Declaration

```objectivec
- (void) unlock;
```

## See Also

### Deprecated instance methods

- [addPersistentStoreWithType:configuration:URL:options:error:](addpersistentstore%28oftype_configurationname_at_options_%29.md): Deprecated. Adds a specific type of persistent store at the provided location.
- [destroyPersistentStoreAtURL:withType:options:error:](destroypersistentstore%28at_oftype_options_%29.md): Deprecated. Deletes a specific type of persistent store at the provided location.
- [importStoreWithIdentifier:fromExternalRecordsDirectory:toURL:options:withType:error:](importstore%28withidentifier_fromexternalrecordsdirectoryat_to_options_oftype_%29.md): Deprecated. Creates and populates a store with the external records found at a given URL.
- [lock](lock%28%29.md): Deprecated. Attempts to acquire a lock.
- [migratePersistentStore:toURL:options:withType:error:](migratepersistentstore%28__to_options_withtype_%29.md): Deprecated. Changes the location and, if necessary, the store type of the specified persistent store.
- [replacePersistentStoreAtURL:destinationOptions:withPersistentStoreFromURL:sourceOptions:storeType:error:](replacepersistentstore%28at_destinationoptions_withpersistentstorefrom_sourceoptions_oftype_%29.md): Deprecated. Replaces one persistent store with another.
- [tryLock](trylock%28%29.md): Deprecated. Attempts to acquire a lock.
- [performBlock:](perform%28__%29-7jqb.md): Deprecated. Executes the provided closure asynchronously on the coordinator’s queue.
- [performBlockAndWait:](performandwait%28__%29-d3kq.md): Deprecated. Executes the provided closure on the coordinator’s queue and waits for it to finish.
