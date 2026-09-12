> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsexternalrecordsfileformatoption](https://developer.apple.com/documentation/coredata/nsexternalrecordsfileformatoption)

# NSExternalRecordsFileFormatOption (Swift)

**Framework:** Core Data  
**Kind:** Global Variable  
**Availability:** macOS 10.6+ (deprecated in 10.13)

Option to specify the file format of a Spotlight external records.

> Spotlight integration is deprecated. Use CoreSpotlight integration instead.

## Declaration

```swift
let NSExternalRecordsFileFormatOption: String
```

<a id="Discussion"></a>

## Discussion

For possible values, see `Format Options for Spotlight External Record Files`.

## See Also

### Deprecated

- [NSExternalRecordsDirectoryOption](nsexternalrecordsdirectoryoption.md): Deprecated. Option indicating the directory where Spotlight external record files should be written to.
- [NSExternalRecordExtensionOption](nsexternalrecordextensionoption.md): Deprecated. Option indicating the file extension to use for Spotlight external record files.
- [NSPersistentStoreUbiquitousContentNameKey](nspersistentstoreubiquitouscontentnamekey.md): Deprecated. Option to specify that a persistent store has a given name in ubiquity.
- [NSPersistentStoreUbiquitousContentURLKey](nspersistentstoreubiquitouscontenturlkey.md): Deprecated. Option to specify the log path to use for ubiquitous content logs.
- [NSPersistentStoreUbiquitousPeerTokenOption](nspersistentstoreubiquitouspeertokenoption.md): Deprecated. The corresponding value is an optionally specified string which will be mixed in to Core Data’s identifier for each iCloud peer. The value must be an alphanumeric string without any special characters, whitespace or punctuation. The primary use for this option is to allow multiple applications on the same peer (device) to share a Core Data store integrated with iCloud. Each application will require its own store file.
- [NSPersistentStoreRemoveUbiquitousMetadataOption](nspersistentstoreremoveubiquitousmetadataoption.md): Deprecated. The corresponding value is an `NSNumber` object representing a boolean that indicates whether the receiver should remove all associated ubiquity metadata from a persistent store. You typically use this option during migration or copying to disassociate a persistent store file from an iCloud account.
- [NSPersistentStoreUbiquitousContainerIdentifierKey](nspersistentstoreubiquitouscontaineridentifierkey.md): Deprecated. The a string specifying the iCloud container identifier.
- [NSPersistentStoreRebuildFromUbiquitousContentOption](nspersistentstorerebuildfromubiquitouscontentoption.md): Deprecated. The corresponding value is an `NSNumber` object representing a boolean that indicates whether the receiver should erase the local store file and rebuild it from the iCloud data in Mobile Documents.

# NSExternalRecordsFileFormatOption (Objective-C)

**Framework:** Core Data  
**Kind:** Global Variable  
**Availability:** macOS 10.6+ (deprecated in 10.13)

Option to specify the file format of a Spotlight external records.

> Spotlight integration is deprecated. Use CoreSpotlight integration instead.

## Declaration

```objectivec
extern NSString * const NSExternalRecordsFileFormatOption;
```

<a id="Discussion"></a>

## Discussion

For possible values, see `Format Options for Spotlight External Record Files`.

## See Also

### Deprecated

- [NSExternalRecordsDirectoryOption](nsexternalrecordsdirectoryoption.md): Deprecated. Option indicating the directory where Spotlight external record files should be written to.
- [NSExternalRecordExtensionOption](nsexternalrecordextensionoption.md): Deprecated. Option indicating the file extension to use for Spotlight external record files.
- [NSPersistentStoreUbiquitousContentNameKey](nspersistentstoreubiquitouscontentnamekey.md): Deprecated. Option to specify that a persistent store has a given name in ubiquity.
- [NSPersistentStoreUbiquitousContentURLKey](nspersistentstoreubiquitouscontenturlkey.md): Deprecated. Option to specify the log path to use for ubiquitous content logs.
- [NSPersistentStoreUbiquitousPeerTokenOption](nspersistentstoreubiquitouspeertokenoption.md): Deprecated. The corresponding value is an optionally specified string which will be mixed in to Core Data’s identifier for each iCloud peer. The value must be an alphanumeric string without any special characters, whitespace or punctuation. The primary use for this option is to allow multiple applications on the same peer (device) to share a Core Data store integrated with iCloud. Each application will require its own store file.
- [NSPersistentStoreRemoveUbiquitousMetadataOption](nspersistentstoreremoveubiquitousmetadataoption.md): Deprecated. The corresponding value is an `NSNumber` object representing a boolean that indicates whether the receiver should remove all associated ubiquity metadata from a persistent store. You typically use this option during migration or copying to disassociate a persistent store file from an iCloud account.
- [NSPersistentStoreUbiquitousContainerIdentifierKey](nspersistentstoreubiquitouscontaineridentifierkey.md): Deprecated. The a string specifying the iCloud container identifier.
- [NSPersistentStoreRebuildFromUbiquitousContentOption](nspersistentstorerebuildfromubiquitouscontentoption.md): Deprecated. The corresponding value is an `NSNumber` object representing a boolean that indicates whether the receiver should erase the local store file and rebuild it from the iCloud data in Mobile Documents.
