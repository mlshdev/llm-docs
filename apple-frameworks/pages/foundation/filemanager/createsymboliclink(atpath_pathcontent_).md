> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filemanager/createsymboliclink(atpath:pathcontent:)](https://developer.apple.com/documentation/foundation/filemanager/createsymboliclink(atpath:pathcontent:))

# createSymbolicLink(atPath:pathContent:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 2.0) · iPadOS 2.0+ (deprecated in 2.0) · Mac Catalyst 2.0+ (deprecated in 2.0) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Creates a symbolic link identified by a given path that refers to a given location.

> Use [createSymbolicLink(at:withDestinationURL:)](createsymboliclink%28at_withdestinationurl_%29.md) instead.

## Declaration

```swift
func createSymbolicLink(atPath path: String, pathContent otherpath: String) -> Bool
```

## Parameters

- `path`: The path for a symbolic link.
- `otherpath`: The path to which `path` should refer.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the operation is successful, otherwise [false](https://developer.apple.com/documentation/swift/false). Returns [false](https://developer.apple.com/documentation/swift/false) if a file, directory, or symbolic link identical to `path` already exists.

<a id="Discussion"></a>

## Discussion

Creates a symbolic link identified by `path` that refers to the location `otherPath` in the file system.

<a id="Special-Considerations"></a>

### Special Considerations

Because this method does not return error information, it has been deprecated as of OS X v10.5. Use [createSymbolicLink(atPath:withDestinationPath:)](createsymboliclink%28atpath_withdestinationpath_%29.md) instead.

## See Also

### Related Documentation

- [removeItem(atPath:)](removeitem%28atpath_%29.md): Removes the file or directory at the specified path.
- [destinationOfSymbolicLink(atPath:)](destinationofsymboliclink%28atpath_%29.md): Returns the path of the item pointed to by a symbolic link.
- [createSymbolicLink(atPath:withDestinationPath:)](createsymboliclink%28atpath_withdestinationpath_%29.md): Creates a symbolic link that points to the specified destination.

### Deprecated Methods

- [changeFileAttributes(\_:atPath:)](changefileattributes%28__atpath_%29.md): Deprecated. Changes the attributes of a given file or directory.
- [fileAttributes(atPath:traverseLink:)](fileattributes%28atpath_traverselink_%29.md): Deprecated. Returns a dictionary that describes the POSIX attributes of the file specified at a given.
- [fileSystemAttributes(atPath:)](filesystemattributes%28atpath_%29.md): Deprecated. Returns a dictionary that describes the attributes of the mounted file system on which a given path resides.
- [directoryContents(atPath:)](directorycontents%28atpath_%29.md): Deprecated. Returns the directories and files (including symbolic links) contained in a given directory.
- [createDirectory(atPath:attributes:)](createdirectory%28atpath_attributes_%29.md): Deprecated. Creates a directory (without contents) at a given path with given attributes.
- [pathContentOfSymbolicLink(atPath:)](pathcontentofsymboliclink%28atpath_%29.md): Deprecated. Returns the path of the directory or file that a symbolic link at a given path refers to.
- [fileManager(\_:shouldProceedAfterError:)](../../objectivec/nsobject-swift.class/filemanager%28__shouldproceedaftererror_%29.md): Deprecated. An `NSFileManager` object sends this message to its handler for each error it encounters when copying, moving, removing, or linking files or directories.
- [fileManager(\_:willProcessPath:)](../../objectivec/nsobject-swift.class/filemanager%28__willprocesspath_%29.md): Deprecated. An `NSFileManager` object sends this message to a handler immediately before attempting to move, copy, rename, or delete, or before attempting to link to a given path.
- [replaceItemAtURL(originalItemURL:withItemAtURL:backupItemName:options:)](replaceitematurl%28originalitemurl_withitematurl_backupitemname_options_%29.md): Deprecated. Replaces the contents of the item at the specified URL in a manner that ensures no data loss occurs.

# createSymbolicLinkAtPath:pathContent: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 2.0) · iPadOS 2.0+ (deprecated in 2.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.5) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Creates a symbolic link identified by a given path that refers to a given location.

> Use [createSymbolicLinkAtURL:withDestinationURL:error:](createsymboliclink%28at_withdestinationurl_%29.md) instead.

## Declaration

```objectivec
- (BOOL) createSymbolicLinkAtPath:(NSString *) path pathContent:(NSString *) otherpath;
```

## Parameters

- `path`: The path for a symbolic link.
- `otherpath`: The path to which `path` should refer.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the operation is successful, otherwise [false](https://developer.apple.com/documentation/swift/false). Returns [false](https://developer.apple.com/documentation/swift/false) if a file, directory, or symbolic link identical to `path` already exists.

<a id="Discussion"></a>

## Discussion

Creates a symbolic link identified by `path` that refers to the location `otherPath` in the file system.

<a id="Special-Considerations"></a>

### Special Considerations

Because this method does not return error information, it has been deprecated as of OS X v10.5. Use [createSymbolicLinkAtPath:withDestinationPath:error:](createsymboliclink%28atpath_withdestinationpath_%29.md) instead.

## See Also

### Related Documentation

- [removeItemAtPath:error:](removeitem%28atpath_%29.md): Removes the file or directory at the specified path.
- [destinationOfSymbolicLinkAtPath:error:](destinationofsymboliclink%28atpath_%29.md): Returns the path of the item pointed to by a symbolic link.
- [createSymbolicLinkAtPath:withDestinationPath:error:](createsymboliclink%28atpath_withdestinationpath_%29.md): Creates a symbolic link that points to the specified destination.

### Deprecated Methods

- [copyPath:toPath:handler:](../nsfilemanager/copypath_topath_handler_.md): Deprecated. Copies the directory or file specified in a given path to a different location in the file system identified by another path.
- [movePath:toPath:handler:](../nsfilemanager/movepath_topath_handler_.md): Deprecated. Moves the directory or file specified by a given path to a different location in the file system identified by another path.
- [removeFileAtPath:handler:](../nsfilemanager/removefileatpath_handler_.md): Deprecated. Deletes the file, link, or directory (including, recursively, all subdirectories, files, and links in the directory) identified by a given path.
- [changeFileAttributes:atPath:](changefileattributes%28__atpath_%29.md): Deprecated. Changes the attributes of a given file or directory.
- [fileAttributesAtPath:traverseLink:](fileattributes%28atpath_traverselink_%29.md): Deprecated. Returns a dictionary that describes the POSIX attributes of the file specified at a given.
- [fileSystemAttributesAtPath:](filesystemattributes%28atpath_%29.md): Deprecated. Returns a dictionary that describes the attributes of the mounted file system on which a given path resides.
- [directoryContentsAtPath:](directorycontents%28atpath_%29.md): Deprecated. Returns the directories and files (including symbolic links) contained in a given directory.
- [createDirectoryAtPath:attributes:](createdirectory%28atpath_attributes_%29.md): Deprecated. Creates a directory (without contents) at a given path with given attributes.
- [pathContentOfSymbolicLinkAtPath:](pathcontentofsymboliclink%28atpath_%29.md): Deprecated. Returns the path of the directory or file that a symbolic link at a given path refers to.
- [linkPath:toPath:handler:](../nsfilemanager/linkpath_topath_handler_.md): Deprecated. Creates a link from a source to a destination.
- [fileManager:shouldProceedAfterError:](../../objectivec/nsobject-swift.class/filemanager%28__shouldproceedaftererror_%29.md): Deprecated. An `NSFileManager` object sends this message to its handler for each error it encounters when copying, moving, removing, or linking files or directories.
- [fileManager:willProcessPath:](../../objectivec/nsobject-swift.class/filemanager%28__willprocesspath_%29.md): Deprecated. An `NSFileManager` object sends this message to a handler immediately before attempting to move, copy, rename, or delete, or before attempting to link to a given path.
