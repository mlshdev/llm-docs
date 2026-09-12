> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nssqliteanalyzeoption](https://developer.apple.com/documentation/coredata/nssqliteanalyzeoption)

# NSSQLiteAnalyzeOption (Swift)

**Framework:** Core Data  
**Kind:** Global Variable  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Option key to run an analysis of the store data to optimize indices based on statistical information when the store is added to the coordinator.

## Declaration

```swift
let NSSQLiteAnalyzeOption: String
```

<a id="Discussion"></a>

## Discussion

This invokes SQLite’s `ANALYZE` command. It is ignored by stores other than the SQLite store.

## See Also

### Constants

- [NSReadOnlyPersistentStoreOption](nsreadonlypersistentstoreoption.md): A flag that indicates whether a store is treated as read-only or not.
- [NSValidateXMLStoreOption](nsvalidatexmlstoreoption.md): A flag that indicates whether an XML file should be validated with the DTD while opening.
- [NSPersistentStoreTimeoutOption](nspersistentstoretimeoutoption.md): Options key that specifies the connection timeout for Core Data stores.
- [NSSQLitePragmasOption](nssqlitepragmasoption.md): Options key for a dictionary of SQLite pragma settings with pragma values indexed by pragma names as keys.
- [NSSQLiteManualVacuumOption](nssqlitemanualvacuumoption.md): Option key to rebuild the store file, forcing a database wide defragmentation when the store is added to the coordinator.
- [NSPersistentStoreFileProtectionKey](nspersistentstorefileprotectionkey.md): Key to represent the protection class for the persistent store.
- [NSPersistentStoreForceDestroyOption](nspersistentstoreforcedestroyoption.md): A flag that indicates the coordinator destroys the store file even if the operation might be unsafe, overriding locks, if necessary.

# NSSQLiteAnalyzeOption (Objective-C)

**Framework:** Core Data  
**Kind:** Global Variable  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Option key to run an analysis of the store data to optimize indices based on statistical information when the store is added to the coordinator.

## Declaration

```objectivec
extern NSString * const NSSQLiteAnalyzeOption;
```

<a id="Discussion"></a>

## Discussion

This invokes SQLite’s `ANALYZE` command. It is ignored by stores other than the SQLite store.

## See Also

### Constants

- [NSReadOnlyPersistentStoreOption](nsreadonlypersistentstoreoption.md): A flag that indicates whether a store is treated as read-only or not.
- [NSValidateXMLStoreOption](nsvalidatexmlstoreoption.md): A flag that indicates whether an XML file should be validated with the DTD while opening.
- [NSPersistentStoreTimeoutOption](nspersistentstoretimeoutoption.md): Options key that specifies the connection timeout for Core Data stores.
- [NSSQLitePragmasOption](nssqlitepragmasoption.md): Options key for a dictionary of SQLite pragma settings with pragma values indexed by pragma names as keys.
- [NSSQLiteManualVacuumOption](nssqlitemanualvacuumoption.md): Option key to rebuild the store file, forcing a database wide defragmentation when the store is added to the coordinator.
- [NSPersistentStoreFileProtectionKey](nspersistentstorefileprotectionkey.md): Key to represent the protection class for the persistent store.
- [NSPersistentStoreForceDestroyOption](nspersistentstoreforcedestroyoption.md): A flag that indicates the coordinator destroys the store file even if the operation might be unsafe, overriding locks, if necessary.
