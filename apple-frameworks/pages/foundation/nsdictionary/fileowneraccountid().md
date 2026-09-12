> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdictionary/fileowneraccountid()](https://developer.apple.com/documentation/foundation/nsdictionary/fileowneraccountid())

# fileOwnerAccountID() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the file’s owner account ID.

## Declaration

```swift
func fileOwnerAccountID() -> NSNumber?
```

<a id="return-value"></a>

## Return Value

The value associated with the [ownerAccountID](../fileattributekey/owneraccountid.md) file attributes key, or `nil` if the file attributes dictionary has no entry for the key.

## See Also

### Accessing File Attributes

- [fileSize()](filesize%28%29.md): Returns the file’s size, in bytes.
- [fileType()](filetype%28%29.md): Returns the file type.
- [fileCreationDate()](filecreationdate%28%29.md): Returns the file’s creation date.
- [fileModificationDate()](filemodificationdate%28%29.md): Returns file’s modification date.
- [filePosixPermissions()](fileposixpermissions%28%29.md): Returns the file’s POSIX permissions.
- [fileOwnerAccountName()](fileowneraccountname%28%29.md): Returns the file’s owner account name.
- [fileGroupOwnerAccountID()](filegroupowneraccountid%28%29.md): Returns file’s group owner account ID.
- [fileGroupOwnerAccountName()](filegroupowneraccountname%28%29.md): Returns the file’s group owner account name.
- [fileExtensionHidden()](fileextensionhidden%28%29.md): Returns a Boolean value indicating whether the file hides its extension.
- [fileIsImmutable()](fileisimmutable%28%29.md): Returns a Boolean value indicating whether the file is immutable.
- [fileIsAppendOnly()](fileisappendonly%28%29.md): Returns a Boolean value indicating whether the file is append only.
- [fileSystemFileNumber()](filesystemfilenumber%28%29.md): Returns the filesystem file number.
- [fileSystemNumber()](filesystemnumber%28%29.md): Returns the filesystem number.
- [fileHFSTypeCode()](filehfstypecode%28%29.md): Returns file’s HFS type code.
- [fileHFSCreatorCode()](filehfscreatorcode%28%29.md): Returns the file’s HFS creator code.

# fileOwnerAccountID (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the file’s owner account ID.

## Declaration

```objectivec
- (NSNumber *) fileOwnerAccountID;
```

<a id="return-value"></a>

## Return Value

The value associated with the [NSFileOwnerAccountID](../fileattributekey/owneraccountid.md) file attributes key, or `nil` if the file attributes dictionary has no entry for the key.

## See Also

### Accessing File Attributes

- [fileSize](filesize%28%29.md): Returns the file’s size, in bytes.
- [fileType](filetype%28%29.md): Returns the file type.
- [fileCreationDate](filecreationdate%28%29.md): Returns the file’s creation date.
- [fileModificationDate](filemodificationdate%28%29.md): Returns file’s modification date.
- [filePosixPermissions](fileposixpermissions%28%29.md): Returns the file’s POSIX permissions.
- [fileOwnerAccountName](fileowneraccountname%28%29.md): Returns the file’s owner account name.
- [fileGroupOwnerAccountID](filegroupowneraccountid%28%29.md): Returns file’s group owner account ID.
- [fileGroupOwnerAccountName](filegroupowneraccountname%28%29.md): Returns the file’s group owner account name.
- [fileExtensionHidden](fileextensionhidden%28%29.md): Returns a Boolean value indicating whether the file hides its extension.
- [fileIsImmutable](fileisimmutable%28%29.md): Returns a Boolean value indicating whether the file is immutable.
- [fileIsAppendOnly](fileisappendonly%28%29.md): Returns a Boolean value indicating whether the file is append only.
- [fileSystemFileNumber](filesystemfilenumber%28%29.md): Returns the filesystem file number.
- [fileSystemNumber](filesystemnumber%28%29.md): Returns the filesystem number.
- [fileHFSTypeCode](filehfstypecode%28%29.md): Returns file’s HFS type code.
- [fileHFSCreatorCode](filehfscreatorcode%28%29.md): Returns the file’s HFS creator code.
