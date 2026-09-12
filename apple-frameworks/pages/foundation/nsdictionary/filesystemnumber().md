> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdictionary/filesystemnumber()](https://developer.apple.com/documentation/foundation/nsdictionary/filesystemnumber())

# fileSystemNumber() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the filesystem number.

## Declaration

```swift
func fileSystemNumber() -> Int
```

<a id="return-value"></a>

## Return Value

The value associated with the [systemNumber](../fileattributekey/systemnumber.md) file attributes key as an `Int` (`unsigned long` in Objective-C), or `0` if the file attributes dictionary has no entry for the key

## See Also

### Accessing File Attributes

- [fileSize()](filesize%28%29.md): Returns the file’s size, in bytes.
- [fileType()](filetype%28%29.md): Returns the file type.
- [fileCreationDate()](filecreationdate%28%29.md): Returns the file’s creation date.
- [fileModificationDate()](filemodificationdate%28%29.md): Returns file’s modification date.
- [filePosixPermissions()](fileposixpermissions%28%29.md): Returns the file’s POSIX permissions.
- [fileOwnerAccountID()](fileowneraccountid%28%29.md): Returns the file’s owner account ID.
- [fileOwnerAccountName()](fileowneraccountname%28%29.md): Returns the file’s owner account name.
- [fileGroupOwnerAccountID()](filegroupowneraccountid%28%29.md): Returns file’s group owner account ID.
- [fileGroupOwnerAccountName()](filegroupowneraccountname%28%29.md): Returns the file’s group owner account name.
- [fileExtensionHidden()](fileextensionhidden%28%29.md): Returns a Boolean value indicating whether the file hides its extension.
- [fileIsImmutable()](fileisimmutable%28%29.md): Returns a Boolean value indicating whether the file is immutable.
- [fileIsAppendOnly()](fileisappendonly%28%29.md): Returns a Boolean value indicating whether the file is append only.
- [fileSystemFileNumber()](filesystemfilenumber%28%29.md): Returns the filesystem file number.
- [fileHFSTypeCode()](filehfstypecode%28%29.md): Returns file’s HFS type code.
- [fileHFSCreatorCode()](filehfscreatorcode%28%29.md): Returns the file’s HFS creator code.

# fileSystemNumber (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the filesystem number.

## Declaration

```objectivec
- (NSInteger) fileSystemNumber;
```

<a id="return-value"></a>

## Return Value

The value associated with the [NSFileSystemNumber](../fileattributekey/systemnumber.md) file attributes key as an `Int` (`unsigned long` in Objective-C), or `0` if the file attributes dictionary has no entry for the key

## See Also

### Accessing File Attributes

- [fileSize](filesize%28%29.md): Returns the file’s size, in bytes.
- [fileType](filetype%28%29.md): Returns the file type.
- [fileCreationDate](filecreationdate%28%29.md): Returns the file’s creation date.
- [fileModificationDate](filemodificationdate%28%29.md): Returns file’s modification date.
- [filePosixPermissions](fileposixpermissions%28%29.md): Returns the file’s POSIX permissions.
- [fileOwnerAccountID](fileowneraccountid%28%29.md): Returns the file’s owner account ID.
- [fileOwnerAccountName](fileowneraccountname%28%29.md): Returns the file’s owner account name.
- [fileGroupOwnerAccountID](filegroupowneraccountid%28%29.md): Returns file’s group owner account ID.
- [fileGroupOwnerAccountName](filegroupowneraccountname%28%29.md): Returns the file’s group owner account name.
- [fileExtensionHidden](fileextensionhidden%28%29.md): Returns a Boolean value indicating whether the file hides its extension.
- [fileIsImmutable](fileisimmutable%28%29.md): Returns a Boolean value indicating whether the file is immutable.
- [fileIsAppendOnly](fileisappendonly%28%29.md): Returns a Boolean value indicating whether the file is append only.
- [fileSystemFileNumber](filesystemfilenumber%28%29.md): Returns the filesystem file number.
- [fileHFSTypeCode](filehfstypecode%28%29.md): Returns file’s HFS type code.
- [fileHFSCreatorCode](filehfscreatorcode%28%29.md): Returns the file’s HFS creator code.
