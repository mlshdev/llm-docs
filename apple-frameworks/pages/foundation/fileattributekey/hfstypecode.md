> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/fileattributekey/hfstypecode](https://developer.apple.com/documentation/foundation/fileattributekey/hfstypecode)

# hfsTypeCode (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The key in a file attribute dictionary whose value indicates the file’s HFS type code.

## Declaration

```swift
static let hfsTypeCode: FileAttributeKey
```

<a id="Discussion"></a>

## Discussion

The corresponding value is an [NSNumber](../nsnumber.md) object containing an `OSType` (unsigned 32-bit integer). See HFS File Types for possible values.

## See Also

### Accessing File Attributes

- [appendOnly](appendonly.md): The key in a file attribute dictionary whose value indicates whether the file is read-only.
- [busy](busy.md): The key in a file attribute dictionary whose value indicates whether the file is busy.
- [creationDate](creationdate.md): The key in a file attribute dictionary whose value indicates the file’s creation date.
- [deviceIdentifier](deviceidentifier.md): The key in a file attribute dictionary whose value indicates the identifier for the device on which the file resides.
- [extensionHidden](extensionhidden.md): The key in a file attribute dictionary whose value indicates whether the file’s extension is hidden.
- [groupOwnerAccountID](groupowneraccountid.md): The key in a file attribute dictionary whose value indicates the file’s group ID.
- [groupOwnerAccountName](groupowneraccountname.md): The key in a file attribute dictionary whose value indicates the group name of the file’s owner.
- [hfsCreatorCode](hfscreatorcode.md): The key in a file attribute dictionary whose value indicates the file’s HFS creator code.
- [immutable](immutable.md): The key in a file attribute dictionary whose value indicates whether the file is mutable.
- [modificationDate](modificationdate.md): The key in a file attribute dictionary whose value indicates the file’s last modified date.
- [ownerAccountID](owneraccountid.md): The key in a file attribute dictionary whose value indicates the file’s owner’s account ID.
- [ownerAccountName](owneraccountname.md): The key in a file attribute dictionary whose value indicates the name of the file’s owner.
- [posixPermissions](posixpermissions.md): The key in a file attribute dictionary whose value indicates the file’s Posix permissions.
- [protectionKey](protectionkey.md): The key in a file attribute dictionary whose value identifies the protection level for this file.
- [referenceCount](referencecount.md): The key in a file attribute dictionary whose value indicates the file’s reference count.

# NSFileHFSTypeCode (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The key in a file attribute dictionary whose value indicates the file’s HFS type code.

## Declaration

```objectivec
extern NSFileAttributeKey const NSFileHFSTypeCode;
```

<a id="Discussion"></a>

## Discussion

The corresponding value is an [NSNumber](../nsnumber.md) object containing an `OSType` (unsigned 32-bit integer). See HFS File Types for possible values.

## See Also

### Accessing File Attributes

- [NSFileAppendOnly](appendonly.md): The key in a file attribute dictionary whose value indicates whether the file is read-only.
- [NSFileBusy](busy.md): The key in a file attribute dictionary whose value indicates whether the file is busy.
- [NSFileCreationDate](creationdate.md): The key in a file attribute dictionary whose value indicates the file’s creation date.
- [NSFileDeviceIdentifier](deviceidentifier.md): The key in a file attribute dictionary whose value indicates the identifier for the device on which the file resides.
- [NSFileExtensionHidden](extensionhidden.md): The key in a file attribute dictionary whose value indicates whether the file’s extension is hidden.
- [NSFileGroupOwnerAccountID](groupowneraccountid.md): The key in a file attribute dictionary whose value indicates the file’s group ID.
- [NSFileGroupOwnerAccountName](groupowneraccountname.md): The key in a file attribute dictionary whose value indicates the group name of the file’s owner.
- [NSFileHFSCreatorCode](hfscreatorcode.md): The key in a file attribute dictionary whose value indicates the file’s HFS creator code.
- [NSFileImmutable](immutable.md): The key in a file attribute dictionary whose value indicates whether the file is mutable.
- [NSFileModificationDate](modificationdate.md): The key in a file attribute dictionary whose value indicates the file’s last modified date.
- [NSFileOwnerAccountID](owneraccountid.md): The key in a file attribute dictionary whose value indicates the file’s owner’s account ID.
- [NSFileOwnerAccountName](owneraccountname.md): The key in a file attribute dictionary whose value indicates the name of the file’s owner.
- [NSFilePosixPermissions](posixpermissions.md): The key in a file attribute dictionary whose value indicates the file’s Posix permissions.
- [NSFileProtectionKey](protectionkey.md): The key in a file attribute dictionary whose value identifies the protection level for this file.
- [NSFileReferenceCount](referencecount.md): The key in a file attribute dictionary whose value indicates the file’s reference count.
