> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/fileattributekey](https://developer.apple.com/documentation/foundation/fileattributekey)

# FileAttributeKey (Swift)

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Keys in dictionaries used to get and set file attributes.

## Declaration

```swift
struct FileAttributeKey
```

<a id="Discussion"></a>

## Discussion

These keys are used with the methods listed in the Getting and Setting Attributes topic of [FileManager](filemanager.md).

## Topics

### Creating a File Attribute Key

- [init(\_:)](fileattributekey/init%28__%29.md): Creates a file attribute key from a string.
- [init(rawValue:)](fileattributekey/init%28rawvalue_%29.md): Creates a file attribute key from a raw value string.

### Accessing File Attributes

- [appendOnly](fileattributekey/appendonly.md): The key in a file attribute dictionary whose value indicates whether the file is read-only.
- [busy](fileattributekey/busy.md): The key in a file attribute dictionary whose value indicates whether the file is busy.
- [creationDate](fileattributekey/creationdate.md): The key in a file attribute dictionary whose value indicates the file’s creation date.
- [deviceIdentifier](fileattributekey/deviceidentifier.md): The key in a file attribute dictionary whose value indicates the identifier for the device on which the file resides.
- [extensionHidden](fileattributekey/extensionhidden.md): The key in a file attribute dictionary whose value indicates whether the file’s extension is hidden.
- [groupOwnerAccountID](fileattributekey/groupowneraccountid.md): The key in a file attribute dictionary whose value indicates the file’s group ID.
- [groupOwnerAccountName](fileattributekey/groupowneraccountname.md): The key in a file attribute dictionary whose value indicates the group name of the file’s owner.
- [hfsCreatorCode](fileattributekey/hfscreatorcode.md): The key in a file attribute dictionary whose value indicates the file’s HFS creator code.
- [hfsTypeCode](fileattributekey/hfstypecode.md): The key in a file attribute dictionary whose value indicates the file’s HFS type code.
- [immutable](fileattributekey/immutable.md): The key in a file attribute dictionary whose value indicates whether the file is mutable.
- [modificationDate](fileattributekey/modificationdate.md): The key in a file attribute dictionary whose value indicates the file’s last modified date.
- [ownerAccountID](fileattributekey/owneraccountid.md): The key in a file attribute dictionary whose value indicates the file’s owner’s account ID.
- [ownerAccountName](fileattributekey/owneraccountname.md): The key in a file attribute dictionary whose value indicates the name of the file’s owner.
- [posixPermissions](fileattributekey/posixpermissions.md): The key in a file attribute dictionary whose value indicates the file’s Posix permissions.
- [protectionKey](fileattributekey/protectionkey.md): The key in a file attribute dictionary whose value identifies the protection level for this file.
- [referenceCount](fileattributekey/referencecount.md): The key in a file attribute dictionary whose value indicates the file’s reference count.
- [size](fileattributekey/size.md): The key in a file attribute dictionary whose value indicates the file’s size in bytes.
- [systemFileNumber](fileattributekey/systemfilenumber.md): The key in a file attribute dictionary whose value indicates the file’s filesystem file number.
- [systemFreeNodes](fileattributekey/systemfreenodes.md): The key in a file system attribute dictionary whose value indicates the number of free nodes in the file system.
- [systemFreeSize](fileattributekey/systemfreesize.md): The key in a file system attribute dictionary whose value indicates the amount of free space on the file system.
- [systemNodes](fileattributekey/systemnodes.md): The key in a file system attribute dictionary whose value indicates the number of nodes in the file system.
- [systemNumber](fileattributekey/systemnumber.md): The key in a file system attribute dictionary whose value indicates the filesystem number of the file system.
- [systemSize](fileattributekey/systemsize.md): The key in a file system attribute dictionary whose value indicates the size of the file system.
- [type](fileattributekey/type.md): The key in a file attribute dictionary whose value indicates the file’s type.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Supporting Types

- [FileManager.DirectoryEnumerationOptions](filemanager/directoryenumerationoptions.md): Options for enumerating the contents of directories.
- [FileManager.SearchPathDirectory](filemanager/searchpathdirectory.md): The location of significant directories.
- [FileManager.SearchPathDomainMask](filemanager/searchpathdomainmask.md): Domain constants specifying base locations to use when you search for significant directories.
- [FileAttributeType](fileattributetype.md): Values representing a file’s type attribute.
- [FileProtectionType](fileprotectiontype.md): Protection level values that can be associated with a file attribute key.
- [URLFileProtection](urlfileprotection.md): Protection-level values for a URL resource key.

# NSFileAttributeKey (Objective-C)

**Framework:** Foundation  
**Kind:** Type Alias  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Keys in dictionaries used to get and set file attributes.

## Declaration

```objectivec
typedef NSString * NSFileAttributeKey;
```

<a id="Discussion"></a>

## Discussion

These keys are used with the methods listed in the Getting and Setting Attributes topic of [NSFileManager](filemanager.md).

## Topics

### Accessing File Attributes

- [NSFileAppendOnly](fileattributekey/appendonly.md): The key in a file attribute dictionary whose value indicates whether the file is read-only.
- [NSFileBusy](fileattributekey/busy.md): The key in a file attribute dictionary whose value indicates whether the file is busy.
- [NSFileCreationDate](fileattributekey/creationdate.md): The key in a file attribute dictionary whose value indicates the file’s creation date.
- [NSFileDeviceIdentifier](fileattributekey/deviceidentifier.md): The key in a file attribute dictionary whose value indicates the identifier for the device on which the file resides.
- [NSFileExtensionHidden](fileattributekey/extensionhidden.md): The key in a file attribute dictionary whose value indicates whether the file’s extension is hidden.
- [NSFileGroupOwnerAccountID](fileattributekey/groupowneraccountid.md): The key in a file attribute dictionary whose value indicates the file’s group ID.
- [NSFileGroupOwnerAccountName](fileattributekey/groupowneraccountname.md): The key in a file attribute dictionary whose value indicates the group name of the file’s owner.
- [NSFileHFSCreatorCode](fileattributekey/hfscreatorcode.md): The key in a file attribute dictionary whose value indicates the file’s HFS creator code.
- [NSFileHFSTypeCode](fileattributekey/hfstypecode.md): The key in a file attribute dictionary whose value indicates the file’s HFS type code.
- [NSFileImmutable](fileattributekey/immutable.md): The key in a file attribute dictionary whose value indicates whether the file is mutable.
- [NSFileModificationDate](fileattributekey/modificationdate.md): The key in a file attribute dictionary whose value indicates the file’s last modified date.
- [NSFileOwnerAccountID](fileattributekey/owneraccountid.md): The key in a file attribute dictionary whose value indicates the file’s owner’s account ID.
- [NSFileOwnerAccountName](fileattributekey/owneraccountname.md): The key in a file attribute dictionary whose value indicates the name of the file’s owner.
- [NSFilePosixPermissions](fileattributekey/posixpermissions.md): The key in a file attribute dictionary whose value indicates the file’s Posix permissions.
- [NSFileProtectionKey](fileattributekey/protectionkey.md): The key in a file attribute dictionary whose value identifies the protection level for this file.
- [NSFileReferenceCount](fileattributekey/referencecount.md): The key in a file attribute dictionary whose value indicates the file’s reference count.
- [NSFileSize](fileattributekey/size.md): The key in a file attribute dictionary whose value indicates the file’s size in bytes.
- [NSFileSystemFileNumber](fileattributekey/systemfilenumber.md): The key in a file attribute dictionary whose value indicates the file’s filesystem file number.
- [NSFileSystemFreeNodes](fileattributekey/systemfreenodes.md): The key in a file system attribute dictionary whose value indicates the number of free nodes in the file system.
- [NSFileSystemFreeSize](fileattributekey/systemfreesize.md): The key in a file system attribute dictionary whose value indicates the amount of free space on the file system.
- [NSFileSystemNodes](fileattributekey/systemnodes.md): The key in a file system attribute dictionary whose value indicates the number of nodes in the file system.
- [NSFileSystemNumber](fileattributekey/systemnumber.md): The key in a file system attribute dictionary whose value indicates the filesystem number of the file system.
- [NSFileSystemSize](fileattributekey/systemsize.md): The key in a file system attribute dictionary whose value indicates the size of the file system.
- [NSFileType](fileattributekey/type.md): The key in a file attribute dictionary whose value indicates the file’s type.

## See Also

### Supporting Types

- [NSDirectoryEnumerationOptions](filemanager/directoryenumerationoptions.md): Options for enumerating the contents of directories.
- [NSSearchPathDirectory](filemanager/searchpathdirectory.md): The location of significant directories.
- [NSSearchPathDomainMask](filemanager/searchpathdomainmask.md): Domain constants specifying base locations to use when you search for significant directories.
- [NSFileAttributeType](fileattributetype.md): Values representing a file’s type attribute.
- [NSFileProtectionType](fileprotectiontype.md): Protection level values that can be associated with a file attribute key.
- [NSURLFileProtectionType](urlfileprotection.md): Protection-level values for a URL resource key.
