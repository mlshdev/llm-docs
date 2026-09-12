> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filemanager/createfile(atpath:contents:attributes:)](https://developer.apple.com/documentation/foundation/filemanager/createfile(atpath:contents:attributes:))

# createFile(atPath:contents:attributes:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a file with the specified content and attributes at the given location.

## Declaration

```swift
func createFile(atPath path: String, contents data: Data?, attributes attr: [FileAttributeKey : Any]? = nil) -> Bool
```

## Parameters

- `path`: The path for the new file.
- `data`: A data object containing the contents of the new file.
- `attr`: A dictionary containing the attributes to associate with the new file. You can use these attributes to set the owner and group numbers, file permissions, and modification date. For a list of keys, see [FileAttributeKey](../fileattributekey.md). If you specify `nil` for `attributes`, the file is created with a set of default attributes.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the operation was successful or if the item already exists, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

If you specify `nil` for the `attributes` parameter, this method uses a default set of values for the owner, group, and permissions of any newly created directories in the path. Similarly, if you omit a specific attribute, the default value is used. The default values for newly created files are as follows:

- Permissions are set according to the umask of the current process. For more information, see umask.
- The owner ID is set to the effective user ID of the process.
- The group ID is set to that of the parent directory.

If a file already exists at `path`, this method overwrites the contents of that file if the current process has the appropriate privileges to do so.

## See Also

### Related Documentation

- [attributesOfItem(atPath:)](attributesofitem%28atpath_%29.md): Returns the attributes of the item at a given path.
- [contents(atPath:)](contents%28atpath_%29.md): Returns the contents of the file at the specified path.
- [setAttributes(\_:ofItemAtPath:)](setattributes%28__ofitematpath_%29.md): Sets the attributes of the specified file or directory.
- [FileAttributeKey](../fileattributekey.md): Keys in dictionaries used to get and set file attributes.

### Creating and deleting items

- [createDirectory(at:withIntermediateDirectories:attributes:)](createdirectory%28at_withintermediatedirectories_attributes_%29.md): Creates a directory with the given attributes at the specified URL.
- [createDirectory(atPath:withIntermediateDirectories:attributes:)](createdirectory%28atpath_withintermediatedirectories_attributes_%29.md): Creates a directory with given attributes at the specified path.
- [removeItem(at:)](removeitem%28at_%29.md): Removes the file or directory at the specified URL.
- [removeItem(atPath:)](removeitem%28atpath_%29.md): Removes the file or directory at the specified path.
- [trashItem(at:resultingItemURL:)](trashitem%28at_resultingitemurl_%29.md): Moves an item to the trash.

# createFileAtPath:contents:attributes: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a file with the specified content and attributes at the given location.

## Declaration

```objectivec
- (BOOL) createFileAtPath:(NSString *) path contents:(NSData *) data attributes:(NSDictionary<NSString *,id> *) attr;
```

## Parameters

- `path`: The path for the new file.
- `data`: A data object containing the contents of the new file.
- `attr`: A dictionary containing the attributes to associate with the new file. You can use these attributes to set the owner and group numbers, file permissions, and modification date. For a list of keys, see [NSFileAttributeKey](../fileattributekey.md). If you specify `nil` for `attributes`, the file is created with a set of default attributes.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the operation was successful or if the item already exists, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

If you specify `nil` for the `attributes` parameter, this method uses a default set of values for the owner, group, and permissions of any newly created directories in the path. Similarly, if you omit a specific attribute, the default value is used. The default values for newly created files are as follows:

- Permissions are set according to the umask of the current process. For more information, see umask.
- The owner ID is set to the effective user ID of the process.
- The group ID is set to that of the parent directory.

If a file already exists at `path`, this method overwrites the contents of that file if the current process has the appropriate privileges to do so.

## See Also

### Related Documentation

- [attributesOfItemAtPath:error:](attributesofitem%28atpath_%29.md): Returns the attributes of the item at a given path.
- [contentsAtPath:](contents%28atpath_%29.md): Returns the contents of the file at the specified path.
- [setAttributes:ofItemAtPath:error:](setattributes%28__ofitematpath_%29.md): Sets the attributes of the specified file or directory.
- [NSFileAttributeKey](../fileattributekey.md): Keys in dictionaries used to get and set file attributes.

### Creating and deleting items

- [createDirectoryAtURL:withIntermediateDirectories:attributes:error:](createdirectory%28at_withintermediatedirectories_attributes_%29.md): Creates a directory with the given attributes at the specified URL.
- [createDirectoryAtPath:withIntermediateDirectories:attributes:error:](createdirectory%28atpath_withintermediatedirectories_attributes_%29.md): Creates a directory with given attributes at the specified path.
- [removeItemAtURL:error:](removeitem%28at_%29.md): Removes the file or directory at the specified URL.
- [removeItemAtPath:error:](removeitem%28atpath_%29.md): Removes the file or directory at the specified path.
- [trashItemAtURL:resultingItemURL:error:](trashitem%28at_resultingitemurl_%29.md): Moves an item to the trash.
