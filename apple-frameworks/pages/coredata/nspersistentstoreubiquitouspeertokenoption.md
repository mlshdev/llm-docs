> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentstoreubiquitouspeertokenoption](https://developer.apple.com/documentation/coredata/nspersistentstoreubiquitouspeertokenoption)

# NSPersistentStoreUbiquitousPeerTokenOption (Swift)

**Framework:** Core Data  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ (deprecated in 10.0) · iPadOS 7.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.9+ (deprecated in 10.12) · visionOS 1.0+ (deprecated in 1.0)

The corresponding value is an optionally specified string which will be mixed in to Core Data’s identifier for each iCloud peer. The value must be an alphanumeric string without any special characters, whitespace or punctuation. The primary use for this option is to allow multiple applications on the same peer (device) to share a Core Data store integrated with iCloud. Each application will require its own store file.

> Please see the release notes and Core Data documentation.

## Declaration

```swift
let NSPersistentStoreUbiquitousPeerTokenOption: String
```

## See Also

### Deprecated

- [NSExternalRecordsDirectoryOption](nsexternalrecordsdirectoryoption.md): Deprecated. Option indicating the directory where Spotlight external record files should be written to.
- [NSExternalRecordExtensionOption](nsexternalrecordextensionoption.md): Deprecated. Option indicating the file extension to use for Spotlight external record files.
- [NSExternalRecordsFileFormatOption](nsexternalrecordsfileformatoption.md): Deprecated. Option to specify the file format of a Spotlight external records.
- [NSPersistentStoreUbiquitousContentNameKey](nspersistentstoreubiquitouscontentnamekey.md): Deprecated. Option to specify that a persistent store has a given name in ubiquity.
- [NSPersistentStoreUbiquitousContentURLKey](nspersistentstoreubiquitouscontenturlkey.md): Deprecated. Option to specify the log path to use for ubiquitous content logs.
- [NSPersistentStoreRemoveUbiquitousMetadataOption](nspersistentstoreremoveubiquitousmetadataoption.md): Deprecated. The corresponding value is an `NSNumber` object representing a boolean that indicates whether the receiver should remove all associated ubiquity metadata from a persistent store. You typically use this option during migration or copying to disassociate a persistent store file from an iCloud account.
- [NSPersistentStoreUbiquitousContainerIdentifierKey](nspersistentstoreubiquitouscontaineridentifierkey.md): Deprecated. The a string specifying the iCloud container identifier.
- [NSPersistentStoreRebuildFromUbiquitousContentOption](nspersistentstorerebuildfromubiquitouscontentoption.md): Deprecated. The corresponding value is an `NSNumber` object representing a boolean that indicates whether the receiver should erase the local store file and rebuild it from the iCloud data in Mobile Documents.

# NSPersistentStoreUbiquitousPeerTokenOption (Objective-C)

**Framework:** Core Data  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ (deprecated in 10.0) · iPadOS 7.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.9+ (deprecated in 10.12) · visionOS 1.0+ (deprecated in 1.0)

The corresponding value is an optionally specified string which will be mixed in to Core Data’s identifier for each iCloud peer. The value must be an alphanumeric string without any special characters, whitespace or punctuation. The primary use for this option is to allow multiple applications on the same peer (device) to share a Core Data store integrated with iCloud. Each application will require its own store file.

> Please see the release notes and Core Data documentation.

## Declaration

```objectivec
extern NSString * const NSPersistentStoreUbiquitousPeerTokenOption;
```

## See Also

### Deprecated

- [NSExternalRecordsDirectoryOption](nsexternalrecordsdirectoryoption.md): Deprecated. Option indicating the directory where Spotlight external record files should be written to.
- [NSExternalRecordExtensionOption](nsexternalrecordextensionoption.md): Deprecated. Option indicating the file extension to use for Spotlight external record files.
- [NSExternalRecordsFileFormatOption](nsexternalrecordsfileformatoption.md): Deprecated. Option to specify the file format of a Spotlight external records.
- [NSPersistentStoreUbiquitousContentNameKey](nspersistentstoreubiquitouscontentnamekey.md): Deprecated. Option to specify that a persistent store has a given name in ubiquity.
- [NSPersistentStoreUbiquitousContentURLKey](nspersistentstoreubiquitouscontenturlkey.md): Deprecated. Option to specify the log path to use for ubiquitous content logs.
- [NSPersistentStoreRemoveUbiquitousMetadataOption](nspersistentstoreremoveubiquitousmetadataoption.md): Deprecated. The corresponding value is an `NSNumber` object representing a boolean that indicates whether the receiver should remove all associated ubiquity metadata from a persistent store. You typically use this option during migration or copying to disassociate a persistent store file from an iCloud account.
- [NSPersistentStoreUbiquitousContainerIdentifierKey](nspersistentstoreubiquitouscontaineridentifierkey.md): Deprecated. The a string specifying the iCloud container identifier.
- [NSPersistentStoreRebuildFromUbiquitousContentOption](nspersistentstorerebuildfromubiquitouscontentoption.md): Deprecated. The corresponding value is an `NSNumber` object representing a boolean that indicates whether the receiver should erase the local store file and rebuild it from the iCloud data in Mobile Documents.
