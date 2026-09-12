> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentstorecoordinator-deprecated-symbols](https://developer.apple.com/documentation/coredata/nspersistentstorecoordinator-deprecated-symbols)

# Deprecated Symbols (Swift)

**Framework:** Core Data  
**Kind:** API Collection

Review unsupported symbols and their replacements.

## Topics

### Deprecated constants

- [NSXMLExternalRecordType](nsxmlexternalrecordtype.md): Deprecated. Specifies an XML file format.
- [NSBinaryExternalRecordType](nsbinaryexternalrecordtype.md): Deprecated. Specifies a binary file format

### Deprecated enumerations

- [NSPersistentStoreUbiquitousTransitionType](nspersistentstoreubiquitoustransitiontype.md): Deprecated. These constants are used as the value corresponding to the [NSPersistentStoreUbiquitousTransitionTypeKey](nspersistentstoreubiquitoustransitiontypekey.md) in the user info dictionary of [NSPersistentStoreCoordinatorStoresWillChangeNotification](nspersistentstorecoordinatorstoreswillchangenotification.md) and [NSPersistentStoreCoordinatorStoresDidChangeNotification](nspersistentstorecoordinatorstoresdidchangenotification.md) notifications to identify the type of event leading to a change.

### Deprecated type properties

- [NSPersistentStoreDidImportUbiquitousContentChanges](../foundation/nsnotification/name-swift.struct/nspersistentstoredidimportubiquitouscontentchanges.md): Deprecated. Posted after records are imported from the ubiquitous content store.

### Deprecated type methods

- [elementsDerived(fromExternalRecordAt:)](nspersistentstorecoordinator/elementsderived%28fromexternalrecordat_%29.md): Deprecated. Returns a dictionary containing the parsed elements derived from the Spotlight external record file that is specified by the given URL.
- [metadataForPersistentStore(with:)](nspersistentstorecoordinator/metadataforpersistentstore%28with_%29.md): Deprecated. Returns a dictionary that contains the metadata stored in the persistent store at the specified location.
- [metadataForPersistentStore(ofType:at:)](nspersistentstorecoordinator/metadataforpersistentstore%28oftype_at_%29.md): Deprecated. Returns a dictionary containing the metadata stored in the persistent store at a given URL.
- [metadataForPersistentStore(ofType:at:options:)](nspersistentstorecoordinator/metadataforpersistentstore%28oftype_at_options_%29.md): Deprecated. Returns the metadata of a specific type of persistent store at the provided location.
- [registerStoreClass(\_:forStoreType:)](nspersistentstorecoordinator/registerstoreclass%28__forstoretype_%29.md): Deprecated. Registers a persistent store subclass using the specified store type identifier.
- [removeUbiquitousContentAndPersistentStore(at:options:)](nspersistentstorecoordinator/removeubiquitouscontentandpersistentstore%28at_options_%29.md): Deprecated. Deletes all ubiquitous content for all peers for the persistent store at a given URL and also delete the local store file.
- [setMetadata(\_:forPersistentStoreOfType:at:)](nspersistentstorecoordinator/setmetadata%28__forpersistentstoreoftype_at_%29.md): Deprecated. Sets the metadata for a given store.
- [setMetadata(\_:forPersistentStoreOfType:at:options:)](nspersistentstorecoordinator/setmetadata%28__forpersistentstoreoftype_at_options_%29.md): Deprecated. Updates the metadata of a specific type of persistent store at the provided location.

### Deprecated instance methods

- [addPersistentStore(ofType:configurationName:at:options:)](nspersistentstorecoordinator/addpersistentstore%28oftype_configurationname_at_options_%29.md): Deprecated. Adds a specific type of persistent store at the provided location.
- [destroyPersistentStore(at:ofType:options:)](nspersistentstorecoordinator/destroypersistentstore%28at_oftype_options_%29.md): Deprecated. Deletes a specific type of persistent store at the provided location.
- [importStore(withIdentifier:fromExternalRecordsDirectoryAt:to:options:ofType:)](nspersistentstorecoordinator/importstore%28withidentifier_fromexternalrecordsdirectoryat_to_options_oftype_%29.md): Deprecated. Creates and populates a store with the external records found at a given URL.
- [lock()](nspersistentstorecoordinator/lock%28%29.md): Deprecated. Attempts to acquire a lock.
- [migratePersistentStore(\_:to:options:withType:)](nspersistentstorecoordinator/migratepersistentstore%28__to_options_withtype_%29.md): Deprecated. Changes the location and, if necessary, the store type of the specified persistent store.
- [replacePersistentStore(at:destinationOptions:withPersistentStoreFrom:sourceOptions:ofType:)](nspersistentstorecoordinator/replacepersistentstore%28at_destinationoptions_withpersistentstorefrom_sourceoptions_oftype_%29.md): Deprecated. Replaces one persistent store with another.
- [tryLock()](nspersistentstorecoordinator/trylock%28%29.md): Deprecated. Attempts to acquire a lock.
- [unlock()](nspersistentstorecoordinator/unlock%28%29.md): Deprecated. Relinquishes a previously acquired lock.
- [perform(\_:)](nspersistentstorecoordinator/perform%28__%29-7jqb.md): Deprecated. Executes the provided closure asynchronously on the coordinator’s queue.
- [performAndWait(\_:)](nspersistentstorecoordinator/performandwait%28__%29-d3kq.md): Deprecated. Executes the provided closure on the coordinator’s queue and waits for it to finish.

# Deprecated Symbols (Objective-C)

**Framework:** Core Data  
**Kind:** API Collection

Review unsupported symbols and their replacements.

## Topics

### Deprecated constants

- [NSXMLExternalRecordType](nsxmlexternalrecordtype.md): Deprecated. Specifies an XML file format.
- [NSBinaryExternalRecordType](nsbinaryexternalrecordtype.md): Deprecated. Specifies a binary file format

### Deprecated enumerations

- [NSPersistentStoreUbiquitousTransitionType](nspersistentstoreubiquitoustransitiontype.md): Deprecated. These constants are used as the value corresponding to the [NSPersistentStoreUbiquitousTransitionTypeKey](nspersistentstoreubiquitoustransitiontypekey.md) in the user info dictionary of [NSPersistentStoreCoordinatorStoresWillChangeNotification](nspersistentstorecoordinatorstoreswillchangenotification.md) and [NSPersistentStoreCoordinatorStoresDidChangeNotification](nspersistentstorecoordinatorstoresdidchangenotification.md) notifications to identify the type of event leading to a change.

### Deprecated type properties

- [NSPersistentStoreDidImportUbiquitousContentChangesNotification](nspersistentstoredidimportubiquitouscontentchangesnotification.md): Deprecated. Posted after records are imported from the ubiquitous content store.

### Deprecated type methods

- [elementsDerivedFromExternalRecordURL:](nspersistentstorecoordinator/elementsderived%28fromexternalrecordat_%29.md): Deprecated. Returns a dictionary containing the parsed elements derived from the Spotlight external record file that is specified by the given URL.
- [metadataForPersistentStoreWithURL:error:](nspersistentstorecoordinator/metadataforpersistentstore%28with_%29.md): Deprecated. Returns a dictionary that contains the metadata stored in the persistent store at the specified location.
- [metadataForPersistentStoreOfType:URL:error:](nspersistentstorecoordinator/metadataforpersistentstore%28oftype_at_%29.md): Deprecated. Returns a dictionary containing the metadata stored in the persistent store at a given URL.
- [metadataForPersistentStoreOfType:URL:options:error:](nspersistentstorecoordinator/metadataforpersistentstore%28oftype_at_options_%29.md): Deprecated. Returns the metadata of a specific type of persistent store at the provided location.
- [registerStoreClass:forStoreType:](nspersistentstorecoordinator/registerstoreclass%28__forstoretype_%29.md): Deprecated. Registers a persistent store subclass using the specified store type identifier.
- [removeUbiquitousContentAndPersistentStoreAtURL:options:error:](nspersistentstorecoordinator/removeubiquitouscontentandpersistentstore%28at_options_%29.md): Deprecated. Deletes all ubiquitous content for all peers for the persistent store at a given URL and also delete the local store file.
- [setMetadata:forPersistentStoreOfType:URL:error:](nspersistentstorecoordinator/setmetadata%28__forpersistentstoreoftype_at_%29.md): Deprecated. Sets the metadata for a given store.
- [setMetadata:forPersistentStoreOfType:URL:options:error:](nspersistentstorecoordinator/setmetadata%28__forpersistentstoreoftype_at_options_%29.md): Deprecated. Updates the metadata of a specific type of persistent store at the provided location.

### Deprecated instance methods

- [addPersistentStoreWithType:configuration:URL:options:error:](nspersistentstorecoordinator/addpersistentstore%28oftype_configurationname_at_options_%29.md): Deprecated. Adds a specific type of persistent store at the provided location.
- [destroyPersistentStoreAtURL:withType:options:error:](nspersistentstorecoordinator/destroypersistentstore%28at_oftype_options_%29.md): Deprecated. Deletes a specific type of persistent store at the provided location.
- [importStoreWithIdentifier:fromExternalRecordsDirectory:toURL:options:withType:error:](nspersistentstorecoordinator/importstore%28withidentifier_fromexternalrecordsdirectoryat_to_options_oftype_%29.md): Deprecated. Creates and populates a store with the external records found at a given URL.
- [lock](nspersistentstorecoordinator/lock%28%29.md): Deprecated. Attempts to acquire a lock.
- [migratePersistentStore:toURL:options:withType:error:](nspersistentstorecoordinator/migratepersistentstore%28__to_options_withtype_%29.md): Deprecated. Changes the location and, if necessary, the store type of the specified persistent store.
- [replacePersistentStoreAtURL:destinationOptions:withPersistentStoreFromURL:sourceOptions:storeType:error:](nspersistentstorecoordinator/replacepersistentstore%28at_destinationoptions_withpersistentstorefrom_sourceoptions_oftype_%29.md): Deprecated. Replaces one persistent store with another.
- [tryLock](nspersistentstorecoordinator/trylock%28%29.md): Deprecated. Attempts to acquire a lock.
- [unlock](nspersistentstorecoordinator/unlock%28%29.md): Deprecated. Relinquishes a previously acquired lock.
- [performBlock:](nspersistentstorecoordinator/perform%28__%29-7jqb.md): Deprecated. Executes the provided closure asynchronously on the coordinator’s queue.
- [performBlockAndWait:](nspersistentstorecoordinator/performandwait%28__%29-d3kq.md): Deprecated. Executes the provided closure on the coordinator’s queue and waits for it to finish.
