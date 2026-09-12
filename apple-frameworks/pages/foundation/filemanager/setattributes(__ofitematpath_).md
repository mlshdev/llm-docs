> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filemanager/setattributes(_:ofitematpath:)](https://developer.apple.com/documentation/foundation/filemanager/setattributes(_:ofitematpath:))

# setAttributes(\_:ofItemAtPath:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sets the attributes of the specified file or directory.

## Declaration

```swift
func setAttributes(_ attributes: [FileAttributeKey : Any], ofItemAtPath path: String) throws
```

## Parameters

- `attributes`: A dictionary containing as keys the attributes to set for `path` and as values the corresponding value for the attribute. You can set the following attributes: [busy](../fileattributekey/busy.md), [creationDate](../fileattributekey/creationdate.md), [extensionHidden](../fileattributekey/extensionhidden.md), [groupOwnerAccountID](../fileattributekey/groupowneraccountid.md), [groupOwnerAccountName](../fileattributekey/groupowneraccountname.md), [hfsCreatorCode](../fileattributekey/hfscreatorcode.md), [hfsTypeCode](../fileattributekey/hfstypecode.md), [immutable](../fileattributekey/immutable.md), [modificationDate](../fileattributekey/modificationdate.md), [ownerAccountID](../fileattributekey/owneraccountid.md), [ownerAccountName](../fileattributekey/owneraccountname.md), [posixPermissions](../fileattributekey/posixpermissions.md). You can change single attributes or any combination of attributes; you need not specify keys for all attributes.
- `path`: The path of a file or directory.

<a id="Discussion"></a>

## Discussion

As in the POSIX standard, the app either must own the file or directory or must be running as superuser for attribute changes to take effect. The method attempts to make all changes specified in attributes and ignores any rejection of an attempted modification. If the last component of the path is a symbolic link, the system traverses it.

You must initialize the [posixPermissions](../fileattributekey/posixpermissions.md) value with the code representing the POSIX file-permissions bit pattern. The system sets [hfsCreatorCode](../fileattributekey/hfscreatorcode.md) and [hfsTypeCode](../fileattributekey/hfstypecode.md) only when `path` specifies a file.

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Getting and setting attributes

- [componentsToDisplay(forPath:)](componentstodisplay%28forpath_%29.md): Returns an array of strings representing the user-visible components of a given path.
- [displayName(atPath:)](displayname%28atpath_%29.md): Returns the display name of the file or directory at a specified path.
- [attributesOfItem(atPath:)](attributesofitem%28atpath_%29.md): Returns the attributes of the item at a given path.
- [attributesOfFileSystem(forPath:)](attributesoffilesystem%28forpath_%29.md): Returns a dictionary that describes the attributes of the mounted file system on which a given path resides.

# setAttributes:ofItemAtPath:error: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sets the attributes of the specified file or directory.

## Declaration

```objectivec
- (BOOL) setAttributes:(NSDictionary<NSString *,id> *) attributes ofItemAtPath:(NSString *) path error:(NSError **) error;
```

## Parameters

- `attributes`: A dictionary containing as keys the attributes to set for `path` and as values the corresponding value for the attribute. You can set the following attributes: [NSFileBusy](../fileattributekey/busy.md), [NSFileCreationDate](../fileattributekey/creationdate.md), [NSFileExtensionHidden](../fileattributekey/extensionhidden.md), [NSFileGroupOwnerAccountID](../fileattributekey/groupowneraccountid.md), [NSFileGroupOwnerAccountName](../fileattributekey/groupowneraccountname.md), [NSFileHFSCreatorCode](../fileattributekey/hfscreatorcode.md), [NSFileHFSTypeCode](../fileattributekey/hfstypecode.md), [NSFileImmutable](../fileattributekey/immutable.md), [NSFileModificationDate](../fileattributekey/modificationdate.md), [NSFileOwnerAccountID](../fileattributekey/owneraccountid.md), [NSFileOwnerAccountName](../fileattributekey/owneraccountname.md), [NSFilePosixPermissions](../fileattributekey/posixpermissions.md). You can change single attributes or any combination of attributes; you need not specify keys for all attributes.
- `path`: The path of a file or directory.
- `error`: On input, a pointer to an error object. If an error occurs, this pointer is set to an actual error object containing the error information. You may specify `nil` for this parameter if you do not want the error information.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if *all* changes succeed. If any change fails, returns [false](https://developer.apple.com/documentation/swift/false), but it is undefined whether any changes actually occurred.

<a id="Discussion"></a>

## Discussion

As in the POSIX standard, the app either must own the file or directory or must be running as superuser for attribute changes to take effect. The method attempts to make all changes specified in attributes and ignores any rejection of an attempted modification. If the last component of the path is a symbolic link, the system traverses it.

You must initialize the [NSFilePosixPermissions](../fileattributekey/posixpermissions.md) value with the code representing the POSIX file-permissions bit pattern. The system sets [NSFileHFSCreatorCode](../fileattributekey/hfscreatorcode.md) and [NSFileHFSTypeCode](../fileattributekey/hfstypecode.md) only when `path` specifies a file.

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Getting and setting attributes

- [componentsToDisplayForPath:](componentstodisplay%28forpath_%29.md): Returns an array of strings representing the user-visible components of a given path.
- [displayNameAtPath:](displayname%28atpath_%29.md): Returns the display name of the file or directory at a specified path.
- [attributesOfItemAtPath:error:](attributesofitem%28atpath_%29.md): Returns the attributes of the item at a given path.
- [attributesOfFileSystemForPath:error:](attributesoffilesystem%28forpath_%29.md): Returns a dictionary that describes the attributes of the mounted file system on which a given path resides.
