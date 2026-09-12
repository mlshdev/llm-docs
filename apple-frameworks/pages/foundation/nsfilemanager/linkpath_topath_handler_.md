> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsfilemanager/linkpath:topath:handler:](https://developer.apple.com/documentation/foundation/nsfilemanager/linkpath:topath:handler:)

# linkPath:toPath:handler:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.5)

Creates a link from a source to a destination.

> Use [linkItemAtURL:toURL:error:](../filemanager/linkitem%28at_to_%29.md) instead.

## Declaration

```objectivec
- (BOOL) linkPath:(NSString *) src toPath:(NSString *) dest handler:(id) handler;
```

## Parameters

- `src`: A path that identifies a source file or directory.

  The file, link, or directory specified by `source` must exist.
- `dest`: A path that identifies a destination file or directory.

  The destination should not yet exist. The destination path must end in a filename; there is no implicit adoption of the source filename.
- `handler`: An object that responds to the callback messages [fileManager:willProcessPath:](../../objectivec/nsobject-swift.class/filemanager%28__willprocesspath_%29.md) and [fileManager:shouldProceedAfterError:](../../objectivec/nsobject-swift.class/filemanager%28__shouldproceedaftererror_%29.md). You can specify `nil` for `handler`; if you do so and an error occurs, the method automatically returns [false](https://developer.apple.com/documentation/swift/false).

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the link operation is successful. If the operation is not successful, but the handler method [fileManager:shouldProceedAfterError:](../../objectivec/nsobject-swift.class/filemanager%28__shouldproceedaftererror_%29.md) returns [true](https://developer.apple.com/documentation/swift/true), also returns [true](https://developer.apple.com/documentation/swift/true). Otherwise returns [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The handler callback mechanism is similar to delegation. `NSFileManager` sends [fileManager:willProcessPath:](../../objectivec/nsobject-swift.class/filemanager%28__willprocesspath_%29.md) when it begins a copy, move, remove, or link operation. It sends [fileManager:shouldProceedAfterError:](../../objectivec/nsobject-swift.class/filemanager%28__shouldproceedaftererror_%29.md) when it encounters any error in processing

<a id="Special-Considerations"></a>

### Special Considerations

Because this method does not return error information, it has been deprecated as of OS X v10.5. Use [removeItemAtPath:error:](../filemanager/removeitem%28atpath_%29.md) instead.

## See Also

### Related Documentation

- [linkItemAtURL:toURL:error:](../filemanager/linkitem%28at_to_%29.md): Creates a hard link between the items at the specified URLs.
- [moveItemAtPath:toPath:error:](../filemanager/moveitem%28atpath_topath_%29.md): Moves the file or directory at the specified path to a new location synchronously.
- [createSymbolicLinkAtPath:withDestinationPath:error:](../filemanager/createsymboliclink%28atpath_withdestinationpath_%29.md): Creates a symbolic link that points to the specified destination.
- [copyItemAtPath:toPath:error:](../filemanager/copyitem%28atpath_topath_%29.md): Copies the item at the specified path to a new location synchronously.
- [removeItemAtPath:error:](../filemanager/removeitem%28atpath_%29.md): Removes the file or directory at the specified path.

### Deprecated Methods

- [copyPath:toPath:handler:](copypath_topath_handler_.md): Deprecated. Copies the directory or file specified in a given path to a different location in the file system identified by another path.
- [movePath:toPath:handler:](movepath_topath_handler_.md): Deprecated. Moves the directory or file specified by a given path to a different location in the file system identified by another path.
- [removeFileAtPath:handler:](removefileatpath_handler_.md): Deprecated. Deletes the file, link, or directory (including, recursively, all subdirectories, files, and links in the directory) identified by a given path.
- [changeFileAttributes:atPath:](../filemanager/changefileattributes%28__atpath_%29.md): Deprecated. Changes the attributes of a given file or directory.
- [fileAttributesAtPath:traverseLink:](../filemanager/fileattributes%28atpath_traverselink_%29.md): Deprecated. Returns a dictionary that describes the POSIX attributes of the file specified at a given.
- [fileSystemAttributesAtPath:](../filemanager/filesystemattributes%28atpath_%29.md): Deprecated. Returns a dictionary that describes the attributes of the mounted file system on which a given path resides.
- [directoryContentsAtPath:](../filemanager/directorycontents%28atpath_%29.md): Deprecated. Returns the directories and files (including symbolic links) contained in a given directory.
- [createDirectoryAtPath:attributes:](../filemanager/createdirectory%28atpath_attributes_%29.md): Deprecated. Creates a directory (without contents) at a given path with given attributes.
- [createSymbolicLinkAtPath:pathContent:](../filemanager/createsymboliclink%28atpath_pathcontent_%29.md): Deprecated. Creates a symbolic link identified by a given path that refers to a given location.
- [pathContentOfSymbolicLinkAtPath:](../filemanager/pathcontentofsymboliclink%28atpath_%29.md): Deprecated. Returns the path of the directory or file that a symbolic link at a given path refers to.
- [fileManager:shouldProceedAfterError:](../../objectivec/nsobject-swift.class/filemanager%28__shouldproceedaftererror_%29.md): Deprecated. An `NSFileManager` object sends this message to its handler for each error it encounters when copying, moving, removing, or linking files or directories.
- [fileManager:willProcessPath:](../../objectivec/nsobject-swift.class/filemanager%28__willprocesspath_%29.md): Deprecated. An `NSFileManager` object sends this message to a handler immediately before attempting to move, copy, rename, or delete, or before attempting to link to a given path.
