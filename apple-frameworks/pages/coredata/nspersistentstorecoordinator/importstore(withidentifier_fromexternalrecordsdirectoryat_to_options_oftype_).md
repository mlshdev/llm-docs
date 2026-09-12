> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentstorecoordinator/importstore(withidentifier:fromexternalrecordsdirectoryat:to:options:oftype:)](https://developer.apple.com/documentation/coredata/nspersistentstorecoordinator/importstore(withidentifier:fromexternalrecordsdirectoryat:to:options:oftype:))

# importStore(withIdentifier:fromExternalRecordsDirectoryAt:to:options:ofType:) (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** macOS 10.6+ (deprecated in 10.13)

Creates and populates a store with the external records found at a given URL.

> Spotlight integration is deprecated. Use CoreSpotlight integration instead.

## Declaration

```swift
func importStore(withIdentifier storeIdentifier: String?, fromExternalRecordsDirectoryAt externalRecordsURL: URL, to destinationURL: URL, options: [AnyHashable : Any]? = nil, ofType storeType: String) throws -> NSPersistentStore
```

## Parameters

- `storeIdentifier`: The identifier for a store.

  If this value is `nil` then the method imports the records for the first store found.
- `externalRecordsURL`: The location of the directory containing external records.
- `destinationURL`: An URL object that specifies the location for the new store.

  There should be no existing store at this location, as the store will be created from scratch (appending to an existing store is not allowed).
- `options`: A dictionary containing key-value pairs that specify whether the store should be read-only, and whether (for an XML store) the XML file should be validated against the DTD before it is read. For key definitions, see [Store options](../store-options.md).
- `storeType`: A string constant (such as `NSSQLiteStoreType`) that specifies the type of the new store—see [Persistent Store Types](../persistent-store-types.md).

<a id="return-value"></a>

## Return Value

An object representing the newly-created store.

## See Also

### Related Documentation

- [remove(\_:)](remove%28__%29.md): Removes the specified persistent store from the coordinator.
- [migratePersistentStore(\_:to:options:withType:)](migratepersistentstore%28__to_options_withtype_%29.md): Deprecated. Changes the location and, if necessary, the store type of the specified persistent store.
- [addPersistentStore(ofType:configurationName:at:options:)](addpersistentstore%28oftype_configurationname_at_options_%29.md): Deprecated. Adds a specific type of persistent store at the provided location.

### Deprecated instance methods

- [addPersistentStore(ofType:configurationName:at:options:)](addpersistentstore%28oftype_configurationname_at_options_%29.md): Deprecated. Adds a specific type of persistent store at the provided location.
- [destroyPersistentStore(at:ofType:options:)](destroypersistentstore%28at_oftype_options_%29.md): Deprecated. Deletes a specific type of persistent store at the provided location.
- [lock()](lock%28%29.md): Deprecated. Attempts to acquire a lock.
- [migratePersistentStore(\_:to:options:withType:)](migratepersistentstore%28__to_options_withtype_%29.md): Deprecated. Changes the location and, if necessary, the store type of the specified persistent store.
- [replacePersistentStore(at:destinationOptions:withPersistentStoreFrom:sourceOptions:ofType:)](replacepersistentstore%28at_destinationoptions_withpersistentstorefrom_sourceoptions_oftype_%29.md): Deprecated. Replaces one persistent store with another.
- [tryLock()](trylock%28%29.md): Deprecated. Attempts to acquire a lock.
- [unlock()](unlock%28%29.md): Deprecated. Relinquishes a previously acquired lock.
- [perform(\_:)](perform%28__%29-7jqb.md): Deprecated. Executes the provided closure asynchronously on the coordinator’s queue.
- [performAndWait(\_:)](performandwait%28__%29-d3kq.md): Deprecated. Executes the provided closure on the coordinator’s queue and waits for it to finish.

# importStoreWithIdentifier:fromExternalRecordsDirectory:toURL:options:withType:error: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** macOS 10.6+ (deprecated in 10.13)

Creates and populates a store with the external records found at a given URL.

> Spotlight integration is deprecated. Use CoreSpotlight integration instead.

## Declaration

```objectivec
- (NSPersistentStore *) importStoreWithIdentifier:(NSString *) storeIdentifier fromExternalRecordsDirectory:(NSURL *) externalRecordsURL toURL:(NSURL *) destinationURL options:(NSDictionary *) options withType:(NSString *) storeType error:(NSError **) error;
```

## Parameters

- `storeIdentifier`: The identifier for a store.

  If this value is `nil` then the method imports the records for the first store found.
- `externalRecordsURL`: The location of the directory containing external records.
- `destinationURL`: An URL object that specifies the location for the new store.

  There should be no existing store at this location, as the store will be created from scratch (appending to an existing store is not allowed).
- `options`: A dictionary containing key-value pairs that specify whether the store should be read-only, and whether (for an XML store) the XML file should be validated against the DTD before it is read. For key definitions, see [Store options](../store-options.md).
- `storeType`: A string constant (such as `NSSQLiteStoreType`) that specifies the type of the new store—see [Persistent Store Types](../persistent-store-types.md).
- `error`: If an error occurs, upon return contains an instance of `NSError` that describes the problem.

<a id="return-value"></a>

## Return Value

An object representing the newly-created store. On failure, this method returns `nil`.

## See Also

### Related Documentation

- [removePersistentStore:error:](remove%28__%29.md): Removes the specified persistent store from the coordinator.
- [migratePersistentStore:toURL:options:withType:error:](migratepersistentstore%28__to_options_withtype_%29.md): Deprecated. Changes the location and, if necessary, the store type of the specified persistent store.
- [addPersistentStoreWithType:configuration:URL:options:error:](addpersistentstore%28oftype_configurationname_at_options_%29.md): Deprecated. Adds a specific type of persistent store at the provided location.

### Deprecated instance methods

- [addPersistentStoreWithType:configuration:URL:options:error:](addpersistentstore%28oftype_configurationname_at_options_%29.md): Deprecated. Adds a specific type of persistent store at the provided location.
- [destroyPersistentStoreAtURL:withType:options:error:](destroypersistentstore%28at_oftype_options_%29.md): Deprecated. Deletes a specific type of persistent store at the provided location.
- [lock](lock%28%29.md): Deprecated. Attempts to acquire a lock.
- [migratePersistentStore:toURL:options:withType:error:](migratepersistentstore%28__to_options_withtype_%29.md): Deprecated. Changes the location and, if necessary, the store type of the specified persistent store.
- [replacePersistentStoreAtURL:destinationOptions:withPersistentStoreFromURL:sourceOptions:storeType:error:](replacepersistentstore%28at_destinationoptions_withpersistentstorefrom_sourceoptions_oftype_%29.md): Deprecated. Replaces one persistent store with another.
- [tryLock](trylock%28%29.md): Deprecated. Attempts to acquire a lock.
- [unlock](unlock%28%29.md): Deprecated. Relinquishes a previously acquired lock.
- [performBlock:](perform%28__%29-7jqb.md): Deprecated. Executes the provided closure asynchronously on the coordinator’s queue.
- [performBlockAndWait:](performandwait%28__%29-d3kq.md): Deprecated. Executes the provided closure on the coordinator’s queue and waits for it to finish.
