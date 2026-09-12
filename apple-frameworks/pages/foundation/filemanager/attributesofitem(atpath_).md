> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filemanager/attributesofitem(atpath:)](https://developer.apple.com/documentation/foundation/filemanager/attributesofitem(atpath:))

# attributesOfItem(atPath:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the attributes of the item at a given path.

## Declaration

```swift
func attributesOfItem(atPath path: String) throws -> [FileAttributeKey : Any]
```

## Parameters

- `path`: The path of a file or directory.

<a id="return-value"></a>

## Return Value

A dictionary object that describes the attributes (file, directory, symlink, and so on) of the file specified by `path` (or `nil` if an error occurred in Objective-C). The keys in the dictionary are described in `File Attribute Keys`.

<a id="Discussion"></a>

## Discussion

If the item at the path is a symbolic link—that is, the value of the [type](../fileattributekey/type.md) key in the attributes dictionary is [typeSymbolicLink](../fileattributetype/typesymboliclink.md)—you can use the [destinationOfSymbolicLink(atPath:)](destinationofsymboliclink%28atpath_%29.md) method to retrieve the path of the item pointed to by the link. You can also use the [resolvingSymlinksInPath](../nsstring/resolvingsymlinksinpath.md) method of [NSString](../nsstring.md) to resolve links in the path before retrieving the item’s attributes.

As a convenience, [NSDictionary](../nsdictionary.md) provides a set of methods (declared as a category on [NSDictionary](../nsdictionary.md)) for quickly and efficiently obtaining attribute information from the returned dictionary: [fileGroupOwnerAccountName()](../nsdictionary/filegroupowneraccountname%28%29.md), [fileModificationDate()](../nsdictionary/filemodificationdate%28%29.md), [fileOwnerAccountName()](../nsdictionary/fileowneraccountname%28%29.md), [filePosixPermissions()](../nsdictionary/fileposixpermissions%28%29.md), [fileSize()](../nsdictionary/filesize%28%29.md), [fileSystemFileNumber()](../nsdictionary/filesystemfilenumber%28%29.md), [fileSystemNumber()](../nsdictionary/filesystemnumber%28%29.md), and [fileType()](../nsdictionary/filetype%28%29.md).

<a id="Discussion"></a>

### Discussion

> **Handling Errors in Swift**

>  In Swift, this method returns a nonoptional result and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Getting and setting attributes

- [componentsToDisplay(forPath:)](componentstodisplay%28forpath_%29.md): Returns an array of strings representing the user-visible components of a given path.
- [displayName(atPath:)](displayname%28atpath_%29.md): Returns the display name of the file or directory at a specified path.
- [attributesOfFileSystem(forPath:)](attributesoffilesystem%28forpath_%29.md): Returns a dictionary that describes the attributes of the mounted file system on which a given path resides.
- [setAttributes(\_:ofItemAtPath:)](setattributes%28__ofitematpath_%29.md): Sets the attributes of the specified file or directory.

# attributesOfItemAtPath:error: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the attributes of the item at a given path.

## Declaration

```objectivec
- (NSDictionary<NSString *,id> *) attributesOfItemAtPath:(NSString *) path error:(NSError **) error;
```

## Parameters

- `path`: The path of a file or directory.
- `error`: On input, a pointer to an error object. If an error occurs, this pointer is set to an actual error object containing the error information. You may specify `nil` for this parameter if you do not want the error information.

<a id="return-value"></a>

## Return Value

A dictionary object that describes the attributes (file, directory, symlink, and so on) of the file specified by `path` (or `nil` if an error occurred in Objective-C). The keys in the dictionary are described in `File Attribute Keys`.

<a id="Discussion"></a>

## Discussion

If the item at the path is a symbolic link—that is, the value of the [NSFileType](../fileattributekey/type.md) key in the attributes dictionary is [NSFileTypeSymbolicLink](../fileattributetype/typesymboliclink.md)—you can use the [destinationOfSymbolicLinkAtPath:error:](destinationofsymboliclink%28atpath_%29.md) method to retrieve the path of the item pointed to by the link. You can also use the [stringByResolvingSymlinksInPath](../nsstring/resolvingsymlinksinpath.md) method of [NSString](../nsstring.md) to resolve links in the path before retrieving the item’s attributes.

As a convenience, [NSDictionary](../nsdictionary.md) provides a set of methods (declared as a category on [NSDictionary](../nsdictionary.md)) for quickly and efficiently obtaining attribute information from the returned dictionary: [fileGroupOwnerAccountName](../nsdictionary/filegroupowneraccountname%28%29.md), [fileModificationDate](../nsdictionary/filemodificationdate%28%29.md), [fileOwnerAccountName](../nsdictionary/fileowneraccountname%28%29.md), [filePosixPermissions](../nsdictionary/fileposixpermissions%28%29.md), [fileSize](../nsdictionary/filesize%28%29.md), [fileSystemFileNumber](../nsdictionary/filesystemfilenumber%28%29.md), [fileSystemNumber](../nsdictionary/filesystemnumber%28%29.md), and [fileType](../nsdictionary/filetype%28%29.md).

<a id="Discussion"></a>

### Discussion

> **Handling Errors in Swift**

>  In Swift, this method returns a nonoptional result and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Getting and setting attributes

- [componentsToDisplayForPath:](componentstodisplay%28forpath_%29.md): Returns an array of strings representing the user-visible components of a given path.
- [displayNameAtPath:](displayname%28atpath_%29.md): Returns the display name of the file or directory at a specified path.
- [attributesOfFileSystemForPath:error:](attributesoffilesystem%28forpath_%29.md): Returns a dictionary that describes the attributes of the mounted file system on which a given path resides.
- [setAttributes:ofItemAtPath:error:](setattributes%28__ofitematpath_%29.md): Sets the attributes of the specified file or directory.
