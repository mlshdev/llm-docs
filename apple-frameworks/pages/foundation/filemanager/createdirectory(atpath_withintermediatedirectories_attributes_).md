> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filemanager/createdirectory(atpath:withintermediatedirectories:attributes:)](https://developer.apple.com/documentation/foundation/filemanager/createdirectory(atpath:withintermediatedirectories:attributes:))

# createDirectory(atPath:withIntermediateDirectories:attributes:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a directory with given attributes at the specified path.

## Declaration

```swift
func createDirectory(atPath path: String, withIntermediateDirectories createIntermediates: Bool, attributes: [FileAttributeKey : Any]? = nil) throws
```

## Parameters

- `path`: A path string identifying the directory to create. You may specify a full path or a path that is relative to the current working directory. This parameter must not be `nil`.
- `createIntermediates`: If [true](https://developer.apple.com/documentation/swift/true), this method creates any nonexistent parent directories as part of creating the directory in `path`. If [false](https://developer.apple.com/documentation/swift/false), this method fails if any of the intermediate parent directories does not exist. This method also fails if any of the intermediate path elements corresponds to a file and not a directory.
- `attributes`: The file attributes for the new directory and any newly created intermediate directories. You can set the owner and group numbers, file permissions, and modification date. If you specify `nil` for this parameter or omit a particular value, one or more default values are used as described in the discussion. For a list of keys you can include in this dictionary, see Supporting Types. Some of the keys, such as [hfsCreatorCode](../fileattributekey/hfscreatorcode.md) and [hfsTypeCode](../fileattributekey/hfstypecode.md), do not apply to directories.

<a id="Discussion"></a>

## Discussion

If you specify `nil` for the `attributes` parameter, this method uses a default set of values for the owner, group, and permissions of any newly created directories in the path. Similarly, if you omit a specific attribute, the default value is used. The default values for newly created directories are as follows:

- Permissions are set according to the umask of the current process. For more information, see umask.
- The owner ID is set to the effective user ID of the process.
- The group ID is set to that of the parent directory.

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Related Documentation

- [setAttributes(\_:ofItemAtPath:)](setattributes%28__ofitematpath_%29.md): Sets the attributes of the specified file or directory.

### Creating and deleting items

- [createDirectory(at:withIntermediateDirectories:attributes:)](createdirectory%28at_withintermediatedirectories_attributes_%29.md): Creates a directory with the given attributes at the specified URL.
- [createFile(atPath:contents:attributes:)](createfile%28atpath_contents_attributes_%29.md): Creates a file with the specified content and attributes at the given location.
- [removeItem(at:)](removeitem%28at_%29.md): Removes the file or directory at the specified URL.
- [removeItem(atPath:)](removeitem%28atpath_%29.md): Removes the file or directory at the specified path.
- [trashItem(at:resultingItemURL:)](trashitem%28at_resultingitemurl_%29.md): Moves an item to the trash.

# createDirectoryAtPath:withIntermediateDirectories:attributes:error: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a directory with given attributes at the specified path.

## Declaration

```objectivec
- (BOOL) createDirectoryAtPath:(NSString *) path withIntermediateDirectories:(BOOL) createIntermediates attributes:(NSDictionary<NSString *,id> *) attributes error:(NSError **) error;
```

## Parameters

- `path`: A path string identifying the directory to create. You may specify a full path or a path that is relative to the current working directory. This parameter must not be `nil`.
- `createIntermediates`: If [true](https://developer.apple.com/documentation/swift/true), this method creates any nonexistent parent directories as part of creating the directory in `path`. If [false](https://developer.apple.com/documentation/swift/false), this method fails if any of the intermediate parent directories does not exist. This method also fails if any of the intermediate path elements corresponds to a file and not a directory.
- `attributes`: The file attributes for the new directory and any newly created intermediate directories. You can set the owner and group numbers, file permissions, and modification date. If you specify `nil` for this parameter or omit a particular value, one or more default values are used as described in the discussion. For a list of keys you can include in this dictionary, see Supporting Types. Some of the keys, such as [NSFileHFSCreatorCode](../fileattributekey/hfscreatorcode.md) and [NSFileHFSTypeCode](../fileattributekey/hfstypecode.md), do not apply to directories.
- `error`: On input, a pointer to an error object. If an error occurs, this pointer is set to an actual error object containing the error information. You may specify `nil` for this parameter if you do not want the error information.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the directory was created, [true](https://developer.apple.com/documentation/swift/true) if `createIntermediates` is set and the directory already exists, or [false](https://developer.apple.com/documentation/swift/false) if an error occurred.

<a id="Discussion"></a>

## Discussion

If you specify `nil` for the `attributes` parameter, this method uses a default set of values for the owner, group, and permissions of any newly created directories in the path. Similarly, if you omit a specific attribute, the default value is used. The default values for newly created directories are as follows:

- Permissions are set according to the umask of the current process. For more information, see umask.
- The owner ID is set to the effective user ID of the process.
- The group ID is set to that of the parent directory.

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Related Documentation

- [setAttributes:ofItemAtPath:error:](setattributes%28__ofitematpath_%29.md): Sets the attributes of the specified file or directory.

### Creating and deleting items

- [createDirectoryAtURL:withIntermediateDirectories:attributes:error:](createdirectory%28at_withintermediatedirectories_attributes_%29.md): Creates a directory with the given attributes at the specified URL.
- [createFileAtPath:contents:attributes:](createfile%28atpath_contents_attributes_%29.md): Creates a file with the specified content and attributes at the given location.
- [removeItemAtURL:error:](removeitem%28at_%29.md): Removes the file or directory at the specified URL.
- [removeItemAtPath:error:](removeitem%28atpath_%29.md): Removes the file or directory at the specified path.
- [trashItemAtURL:resultingItemURL:error:](trashitem%28at_resultingitemurl_%29.md): Moves an item to the trash.
