> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/fileattributekey/modificationdate](https://developer.apple.com/documentation/foundation/fileattributekey/modificationdate)

# modificationDate (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The key in a file attribute dictionary whose value indicates the file’s last modified date.

## Declaration

```swift
static let modificationDate: FileAttributeKey
```

<a id="Discussion"></a>

## Discussion

The corresponding value is an [NSDate](../nsdate.md) object.

> **Important**

>  This API has the potential of being misused to access device signals to try to identify the device or user, also known as fingerprinting. Regardless of whether a user gives your app permission to track, fingerprinting is not allowed. When you use this API in your app or third-party SDK (an SDK not provided by Apple), declare your usage and the reason for using the API in your app or third-party SDK’s `PrivacyInfo.xcprivacy` file. For more information, including the list of valid reasons for using the API, see [Describing use of required reason API](../../bundleresources/describing-use-of-required-reason-api.md).

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
- [hfsTypeCode](hfstypecode.md): The key in a file attribute dictionary whose value indicates the file’s HFS type code.
- [immutable](immutable.md): The key in a file attribute dictionary whose value indicates whether the file is mutable.
- [ownerAccountID](owneraccountid.md): The key in a file attribute dictionary whose value indicates the file’s owner’s account ID.
- [ownerAccountName](owneraccountname.md): The key in a file attribute dictionary whose value indicates the name of the file’s owner.
- [posixPermissions](posixpermissions.md): The key in a file attribute dictionary whose value indicates the file’s Posix permissions.
- [protectionKey](protectionkey.md): The key in a file attribute dictionary whose value identifies the protection level for this file.
- [referenceCount](referencecount.md): The key in a file attribute dictionary whose value indicates the file’s reference count.

# NSFileModificationDate (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The key in a file attribute dictionary whose value indicates the file’s last modified date.

## Declaration

```objectivec
extern NSFileAttributeKey const NSFileModificationDate;
```

<a id="Discussion"></a>

## Discussion

The corresponding value is an [NSDate](../nsdate.md) object.

> **Important**

>  This API has the potential of being misused to access device signals to try to identify the device or user, also known as fingerprinting. Regardless of whether a user gives your app permission to track, fingerprinting is not allowed. When you use this API in your app or third-party SDK (an SDK not provided by Apple), declare your usage and the reason for using the API in your app or third-party SDK’s `PrivacyInfo.xcprivacy` file. For more information, including the list of valid reasons for using the API, see [Describing use of required reason API](../../bundleresources/describing-use-of-required-reason-api.md).

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
- [NSFileHFSTypeCode](hfstypecode.md): The key in a file attribute dictionary whose value indicates the file’s HFS type code.
- [NSFileImmutable](immutable.md): The key in a file attribute dictionary whose value indicates whether the file is mutable.
- [NSFileOwnerAccountID](owneraccountid.md): The key in a file attribute dictionary whose value indicates the file’s owner’s account ID.
- [NSFileOwnerAccountName](owneraccountname.md): The key in a file attribute dictionary whose value indicates the name of the file’s owner.
- [NSFilePosixPermissions](posixpermissions.md): The key in a file attribute dictionary whose value indicates the file’s Posix permissions.
- [NSFileProtectionKey](protectionkey.md): The key in a file attribute dictionary whose value identifies the protection level for this file.
- [NSFileReferenceCount](referencecount.md): The key in a file attribute dictionary whose value indicates the file’s reference count.
