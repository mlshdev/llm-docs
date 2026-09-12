> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filemanager/createdirectory(atpath:attributes:)](https://developer.apple.com/documentation/foundation/filemanager/createdirectory(atpath:attributes:))

# createDirectory(atPath:attributes:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 2.0) · iPadOS 2.0+ (deprecated in 2.0) · Mac Catalyst 2.0+ (deprecated in 2.0) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Creates a directory (without contents) at a given path with given attributes.

> Use [createDirectory(at:withIntermediateDirectories:attributes:)](createdirectory%28at_withintermediatedirectories_attributes_%29.md) instead.

## Declaration

```swift
func createDirectory(atPath path: String, attributes: [AnyHashable : Any] = [:]) -> Bool
```

## Parameters

- `path`: The path at which to create the new directory. The directory to be created must not yet exist, but its parent directory must exist.
- `attributes`: The file attributes for the new directory. The attributes you can set are owner and group numbers, file permissions, and modification date. If you specify `nil` for `attributes`, default values for these attributes are set (particularly write access for the creator and read access for others). For a list of keys you can include in this dictionary, Supporting Types. Some of the keys, such as `NSFileHFSCreatorCode` and `NSFileHFSTypeCode`, do not apply to directories.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the operation was successful, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Because this method does not return error information, it has been deprecated as of OS X v10.5. Use [createDirectory(atPath:withIntermediateDirectories:attributes:)](createdirectory%28atpath_withintermediatedirectories_attributes_%29.md) instead.

## See Also

### Related Documentation

- [changeCurrentDirectoryPath(\_:)](changecurrentdirectorypath%28__%29.md): Changes the path of the current working directory to the specified path.
- [createDirectory(atPath:withIntermediateDirectories:attributes:)](createdirectory%28atpath_withintermediatedirectories_attributes_%29.md): Creates a directory with given attributes at the specified path.
- [createFile(atPath:contents:attributes:)](createfile%28atpath_contents_attributes_%29.md): Creates a file with the specified content and attributes at the given location.
- [setAttributes(\_:ofItemAtPath:)](setattributes%28__ofitematpath_%29.md): Sets the attributes of the specified file or directory.
- [currentDirectoryPath](currentdirectorypath.md): The path to the program’s current directory.

### Deprecated Methods

- [changeFileAttributes(\_:atPath:)](changefileattributes%28__atpath_%29.md): Deprecated. Changes the attributes of a given file or directory.
- [fileAttributes(atPath:traverseLink:)](fileattributes%28atpath_traverselink_%29.md): Deprecated. Returns a dictionary that describes the POSIX attributes of the file specified at a given.
- [fileSystemAttributes(atPath:)](filesystemattributes%28atpath_%29.md): Deprecated. Returns a dictionary that describes the attributes of the mounted file system on which a given path resides.
- [directoryContents(atPath:)](directorycontents%28atpath_%29.md): Deprecated. Returns the directories and files (including symbolic links) contained in a given directory.
- [createSymbolicLink(atPath:pathContent:)](createsymboliclink%28atpath_pathcontent_%29.md): Deprecated. Creates a symbolic link identified by a given path that refers to a given location.
- [pathContentOfSymbolicLink(atPath:)](pathcontentofsymboliclink%28atpath_%29.md): Deprecated. Returns the path of the directory or file that a symbolic link at a given path refers to.
- [fileManager(\_:shouldProceedAfterError:)](../../objectivec/nsobject-swift.class/filemanager%28__shouldproceedaftererror_%29.md): Deprecated. An `NSFileManager` object sends this message to its handler for each error it encounters when copying, moving, removing, or linking files or directories.
- [fileManager(\_:willProcessPath:)](../../objectivec/nsobject-swift.class/filemanager%28__willprocesspath_%29.md): Deprecated. An `NSFileManager` object sends this message to a handler immediately before attempting to move, copy, rename, or delete, or before attempting to link to a given path.
- [replaceItemAtURL(originalItemURL:withItemAtURL:backupItemName:options:)](replaceitematurl%28originalitemurl_withitematurl_backupitemname_options_%29.md): Deprecated. Replaces the contents of the item at the specified URL in a manner that ensures no data loss occurs.

# createDirectoryAtPath:attributes: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 2.0) · iPadOS 2.0+ (deprecated in 2.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.5) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Creates a directory (without contents) at a given path with given attributes.

> Use [createDirectoryAtURL:withIntermediateDirectories:attributes:error:](createdirectory%28at_withintermediatedirectories_attributes_%29.md) instead.

## Declaration

```objectivec
- (BOOL) createDirectoryAtPath:(NSString *) path attributes:(NSDictionary *) attributes;
```

## Parameters

- `path`: The path at which to create the new directory. The directory to be created must not yet exist, but its parent directory must exist.
- `attributes`: The file attributes for the new directory. The attributes you can set are owner and group numbers, file permissions, and modification date. If you specify `nil` for `attributes`, default values for these attributes are set (particularly write access for the creator and read access for others). For a list of keys you can include in this dictionary, Supporting Types. Some of the keys, such as `NSFileHFSCreatorCode` and `NSFileHFSTypeCode`, do not apply to directories.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the operation was successful, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Because this method does not return error information, it has been deprecated as of OS X v10.5. Use [createDirectoryAtPath:withIntermediateDirectories:attributes:error:](createdirectory%28atpath_withintermediatedirectories_attributes_%29.md) instead.

## See Also

### Related Documentation

- [changeCurrentDirectoryPath:](changecurrentdirectorypath%28__%29.md): Changes the path of the current working directory to the specified path.
- [createDirectoryAtPath:withIntermediateDirectories:attributes:error:](createdirectory%28atpath_withintermediatedirectories_attributes_%29.md): Creates a directory with given attributes at the specified path.
- [createFileAtPath:contents:attributes:](createfile%28atpath_contents_attributes_%29.md): Creates a file with the specified content and attributes at the given location.
- [setAttributes:ofItemAtPath:error:](setattributes%28__ofitematpath_%29.md): Sets the attributes of the specified file or directory.
- [currentDirectoryPath](currentdirectorypath.md): The path to the program’s current directory.

### Deprecated Methods

- [copyPath:toPath:handler:](../nsfilemanager/copypath_topath_handler_.md): Deprecated. Copies the directory or file specified in a given path to a different location in the file system identified by another path.
- [movePath:toPath:handler:](../nsfilemanager/movepath_topath_handler_.md): Deprecated. Moves the directory or file specified by a given path to a different location in the file system identified by another path.
- [removeFileAtPath:handler:](../nsfilemanager/removefileatpath_handler_.md): Deprecated. Deletes the file, link, or directory (including, recursively, all subdirectories, files, and links in the directory) identified by a given path.
- [changeFileAttributes:atPath:](changefileattributes%28__atpath_%29.md): Deprecated. Changes the attributes of a given file or directory.
- [fileAttributesAtPath:traverseLink:](fileattributes%28atpath_traverselink_%29.md): Deprecated. Returns a dictionary that describes the POSIX attributes of the file specified at a given.
- [fileSystemAttributesAtPath:](filesystemattributes%28atpath_%29.md): Deprecated. Returns a dictionary that describes the attributes of the mounted file system on which a given path resides.
- [directoryContentsAtPath:](directorycontents%28atpath_%29.md): Deprecated. Returns the directories and files (including symbolic links) contained in a given directory.
- [createSymbolicLinkAtPath:pathContent:](createsymboliclink%28atpath_pathcontent_%29.md): Deprecated. Creates a symbolic link identified by a given path that refers to a given location.
- [pathContentOfSymbolicLinkAtPath:](pathcontentofsymboliclink%28atpath_%29.md): Deprecated. Returns the path of the directory or file that a symbolic link at a given path refers to.
- [linkPath:toPath:handler:](../nsfilemanager/linkpath_topath_handler_.md): Deprecated. Creates a link from a source to a destination.
- [fileManager:shouldProceedAfterError:](../../objectivec/nsobject-swift.class/filemanager%28__shouldproceedaftererror_%29.md): Deprecated. An `NSFileManager` object sends this message to its handler for each error it encounters when copying, moving, removing, or linking files or directories.
- [fileManager:willProcessPath:](../../objectivec/nsobject-swift.class/filemanager%28__willprocesspath_%29.md): Deprecated. An `NSFileManager` object sends this message to a handler immediately before attempting to move, copy, rename, or delete, or before attempting to link to a given path.
