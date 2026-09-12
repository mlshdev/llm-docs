> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/store-options](https://developer.apple.com/documentation/coredata/store-options)

# Store options (Swift)

**Framework:** Core Data  
**Kind:** API Collection

The options keys that configure the behavior and characteristics of a persistent store.

## Topics

### Constants

- [NSReadOnlyPersistentStoreOption](nsreadonlypersistentstoreoption.md): A flag that indicates whether a store is treated as read-only or not.
- [NSValidateXMLStoreOption](nsvalidatexmlstoreoption.md): A flag that indicates whether an XML file should be validated with the DTD while opening.
- [NSPersistentStoreTimeoutOption](nspersistentstoretimeoutoption.md): Options key that specifies the connection timeout for Core Data stores.
- [NSSQLitePragmasOption](nssqlitepragmasoption.md): Options key for a dictionary of SQLite pragma settings with pragma values indexed by pragma names as keys.
- [NSSQLiteAnalyzeOption](nssqliteanalyzeoption.md): Option key to run an analysis of the store data to optimize indices based on statistical information when the store is added to the coordinator.
- [NSSQLiteManualVacuumOption](nssqlitemanualvacuumoption.md): Option key to rebuild the store file, forcing a database wide defragmentation when the store is added to the coordinator.
- [NSPersistentStoreFileProtectionKey](nspersistentstorefileprotectionkey.md): Key to represent the protection class for the persistent store.
- [NSPersistentStoreForceDestroyOption](nspersistentstoreforcedestroyoption.md): A flag that indicates the coordinator destroys the store file even if the operation might be unsafe, overriding locks, if necessary.

### Deprecated

- [NSExternalRecordsDirectoryOption](nsexternalrecordsdirectoryoption.md): Deprecated. Option indicating the directory where Spotlight external record files should be written to.
- [NSExternalRecordExtensionOption](nsexternalrecordextensionoption.md): Deprecated. Option indicating the file extension to use for Spotlight external record files.
- [NSExternalRecordsFileFormatOption](nsexternalrecordsfileformatoption.md): Deprecated. Option to specify the file format of a Spotlight external records.
- [NSPersistentStoreUbiquitousContentNameKey](nspersistentstoreubiquitouscontentnamekey.md): Deprecated. Option to specify that a persistent store has a given name in ubiquity.
- [NSPersistentStoreUbiquitousContentURLKey](nspersistentstoreubiquitouscontenturlkey.md): Deprecated. Option to specify the log path to use for ubiquitous content logs.
- [NSPersistentStoreUbiquitousPeerTokenOption](nspersistentstoreubiquitouspeertokenoption.md): Deprecated. The corresponding value is an optionally specified string which will be mixed in to Core Data’s identifier for each iCloud peer. The value must be an alphanumeric string without any special characters, whitespace or punctuation. The primary use for this option is to allow multiple applications on the same peer (device) to share a Core Data store integrated with iCloud. Each application will require its own store file.
- [NSPersistentStoreRemoveUbiquitousMetadataOption](nspersistentstoreremoveubiquitousmetadataoption.md): Deprecated. The corresponding value is an `NSNumber` object representing a boolean that indicates whether the receiver should remove all associated ubiquity metadata from a persistent store. You typically use this option during migration or copying to disassociate a persistent store file from an iCloud account.
- [NSPersistentStoreUbiquitousContainerIdentifierKey](nspersistentstoreubiquitouscontaineridentifierkey.md): Deprecated. The a string specifying the iCloud container identifier.
- [NSPersistentStoreRebuildFromUbiquitousContentOption](nspersistentstorerebuildfromubiquitouscontentoption.md): Deprecated. The corresponding value is an `NSNumber` object representing a boolean that indicates whether the receiver should erase the local store file and rebuild it from the iCloud data in Mobile Documents.

## See Also

### Creating a persistent store coordinator

- [init(managedObjectModel:)](nspersistentstorecoordinator/init%28managedobjectmodel_%29.md): Creates a persistent store coordinator with the specified managed object model.
- [Migration options](migration-options.md): The options keys that configure the migration behavior of a persistent store.
- [Store versions](store-versions.md): The metadata keys you use when comparing store versions.

# Store options (Objective-C)

**Framework:** Core Data  
**Kind:** API Collection

The options keys that configure the behavior and characteristics of a persistent store.

## Topics

### Constants

- [NSReadOnlyPersistentStoreOption](nsreadonlypersistentstoreoption.md): A flag that indicates whether a store is treated as read-only or not.
- [NSValidateXMLStoreOption](nsvalidatexmlstoreoption.md): A flag that indicates whether an XML file should be validated with the DTD while opening.
- [NSPersistentStoreTimeoutOption](nspersistentstoretimeoutoption.md): Options key that specifies the connection timeout for Core Data stores.
- [NSSQLitePragmasOption](nssqlitepragmasoption.md): Options key for a dictionary of SQLite pragma settings with pragma values indexed by pragma names as keys.
- [NSSQLiteAnalyzeOption](nssqliteanalyzeoption.md): Option key to run an analysis of the store data to optimize indices based on statistical information when the store is added to the coordinator.
- [NSSQLiteManualVacuumOption](nssqlitemanualvacuumoption.md): Option key to rebuild the store file, forcing a database wide defragmentation when the store is added to the coordinator.
- [NSPersistentStoreFileProtectionKey](nspersistentstorefileprotectionkey.md): Key to represent the protection class for the persistent store.
- [NSPersistentStoreForceDestroyOption](nspersistentstoreforcedestroyoption.md): A flag that indicates the coordinator destroys the store file even if the operation might be unsafe, overriding locks, if necessary.

### Deprecated

- [NSExternalRecordsDirectoryOption](nsexternalrecordsdirectoryoption.md): Deprecated. Option indicating the directory where Spotlight external record files should be written to.
- [NSExternalRecordExtensionOption](nsexternalrecordextensionoption.md): Deprecated. Option indicating the file extension to use for Spotlight external record files.
- [NSExternalRecordsFileFormatOption](nsexternalrecordsfileformatoption.md): Deprecated. Option to specify the file format of a Spotlight external records.
- [NSPersistentStoreUbiquitousContentNameKey](nspersistentstoreubiquitouscontentnamekey.md): Deprecated. Option to specify that a persistent store has a given name in ubiquity.
- [NSPersistentStoreUbiquitousContentURLKey](nspersistentstoreubiquitouscontenturlkey.md): Deprecated. Option to specify the log path to use for ubiquitous content logs.
- [NSPersistentStoreUbiquitousPeerTokenOption](nspersistentstoreubiquitouspeertokenoption.md): Deprecated. The corresponding value is an optionally specified string which will be mixed in to Core Data’s identifier for each iCloud peer. The value must be an alphanumeric string without any special characters, whitespace or punctuation. The primary use for this option is to allow multiple applications on the same peer (device) to share a Core Data store integrated with iCloud. Each application will require its own store file.
- [NSPersistentStoreRemoveUbiquitousMetadataOption](nspersistentstoreremoveubiquitousmetadataoption.md): Deprecated. The corresponding value is an `NSNumber` object representing a boolean that indicates whether the receiver should remove all associated ubiquity metadata from a persistent store. You typically use this option during migration or copying to disassociate a persistent store file from an iCloud account.
- [NSPersistentStoreUbiquitousContainerIdentifierKey](nspersistentstoreubiquitouscontaineridentifierkey.md): Deprecated. The a string specifying the iCloud container identifier.
- [NSPersistentStoreRebuildFromUbiquitousContentOption](nspersistentstorerebuildfromubiquitouscontentoption.md): Deprecated. The corresponding value is an `NSNumber` object representing a boolean that indicates whether the receiver should erase the local store file and rebuild it from the iCloud data in Mobile Documents.

## See Also

### Creating a persistent store coordinator

- [initWithManagedObjectModel:](nspersistentstorecoordinator/init%28managedobjectmodel_%29.md): Creates a persistent store coordinator with the specified managed object model.
- [Migration options](migration-options.md): The options keys that configure the migration behavior of a persistent store.
- [Store versions](store-versions.md): The metadata keys you use when comparing store versions.
