> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filemanager/directorycontents(atpath:)](https://developer.apple.com/documentation/foundation/filemanager/directorycontents(atpath:))

# directoryContents(atPath:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 2.0) · iPadOS 2.0+ (deprecated in 2.0) · Mac Catalyst 2.0+ (deprecated in 2.0) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Returns the directories and files (including symbolic links) contained in a given directory.

> Use [contentsOfDirectory(atPath:)](contentsofdirectory%28atpath_%29.md) instead.

## Declaration

```swift
func directoryContents(atPath path: String) -> [Any]?
```

## Parameters

- `path`: A path to a directory.

<a id="return-value"></a>

## Return Value

An array of [NSString](../nsstring.md) objects identifying the directories and files (including symbolic links) contained in `path`. Returns an empty array if the directory exists but has no contents. Returns `nil` if the directory specified at `path` does not exist or there is some other error accessing it.

<a id="Discussion"></a>

## Discussion

The search is shallow, and therefore does not return the contents of any subdirectories and does not traverse symbolic links in the specified directory. This returned array does not contain strings for the current directory (”`.`”), parent directory (”`..`”), or resource forks (begin with “.\_”).

<a id="Special-Considerations"></a>

### Special Considerations

Because this method does not return error information, it has been deprecated as of OS X v10.5. Use [contentsOfDirectory(atPath:)](contentsofdirectory%28atpath_%29.md) instead.

## See Also

### Related Documentation

- [currentDirectoryPath](currentdirectorypath.md): The path to the program’s current directory.
- [fileExists(atPath:isDirectory:)](fileexists%28atpath_isdirectory_%29.md): Returns a Boolean value that indicates whether a file or directory exists at a specified path.
- [subpaths(atPath:)](subpaths%28atpath_%29.md): Returns an array of strings identifying the paths for all items in the specified directory.
- [contentsOfDirectory(atPath:)](contentsofdirectory%28atpath_%29.md): Performs a shallow search of the specified directory and returns the paths of any contained items.
- [enumerator(atPath:)](enumerator%28atpath_%29.md): Returns a directory enumerator object that can be used to perform a deep enumeration of the directory at the specified path.

### Deprecated Methods

- [changeFileAttributes(\_:atPath:)](changefileattributes%28__atpath_%29.md): Deprecated. Changes the attributes of a given file or directory.
- [fileAttributes(atPath:traverseLink:)](fileattributes%28atpath_traverselink_%29.md): Deprecated. Returns a dictionary that describes the POSIX attributes of the file specified at a given.
- [fileSystemAttributes(atPath:)](filesystemattributes%28atpath_%29.md): Deprecated. Returns a dictionary that describes the attributes of the mounted file system on which a given path resides.
- [createDirectory(atPath:attributes:)](createdirectory%28atpath_attributes_%29.md): Deprecated. Creates a directory (without contents) at a given path with given attributes.
- [createSymbolicLink(atPath:pathContent:)](createsymboliclink%28atpath_pathcontent_%29.md): Deprecated. Creates a symbolic link identified by a given path that refers to a given location.
- [pathContentOfSymbolicLink(atPath:)](pathcontentofsymboliclink%28atpath_%29.md): Deprecated. Returns the path of the directory or file that a symbolic link at a given path refers to.
- [fileManager(\_:shouldProceedAfterError:)](../../objectivec/nsobject-swift.class/filemanager%28__shouldproceedaftererror_%29.md): Deprecated. An `NSFileManager` object sends this message to its handler for each error it encounters when copying, moving, removing, or linking files or directories.
- [fileManager(\_:willProcessPath:)](../../objectivec/nsobject-swift.class/filemanager%28__willprocesspath_%29.md): Deprecated. An `NSFileManager` object sends this message to a handler immediately before attempting to move, copy, rename, or delete, or before attempting to link to a given path.
- [replaceItemAtURL(originalItemURL:withItemAtURL:backupItemName:options:)](replaceitematurl%28originalitemurl_withitematurl_backupitemname_options_%29.md): Deprecated. Replaces the contents of the item at the specified URL in a manner that ensures no data loss occurs.

# directoryContentsAtPath: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 2.0) · iPadOS 2.0+ (deprecated in 2.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.5) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Returns the directories and files (including symbolic links) contained in a given directory.

> Use [contentsOfDirectoryAtPath:error:](contentsofdirectory%28atpath_%29.md) instead.

## Declaration

```objectivec
- (NSArray *) directoryContentsAtPath:(NSString *) path;
```

## Parameters

- `path`: A path to a directory.

<a id="return-value"></a>

## Return Value

An array of [NSString](../nsstring.md) objects identifying the directories and files (including symbolic links) contained in `path`. Returns an empty array if the directory exists but has no contents. Returns `nil` if the directory specified at `path` does not exist or there is some other error accessing it.

<a id="Discussion"></a>

## Discussion

The search is shallow, and therefore does not return the contents of any subdirectories and does not traverse symbolic links in the specified directory. This returned array does not contain strings for the current directory (”`.`”), parent directory (”`..`”), or resource forks (begin with “.\_”).

<a id="Special-Considerations"></a>

### Special Considerations

Because this method does not return error information, it has been deprecated as of OS X v10.5. Use [contentsOfDirectoryAtPath:error:](contentsofdirectory%28atpath_%29.md) instead.

## See Also

### Related Documentation

- [currentDirectoryPath](currentdirectorypath.md): The path to the program’s current directory.
- [fileExistsAtPath:isDirectory:](fileexists%28atpath_isdirectory_%29.md): Returns a Boolean value that indicates whether a file or directory exists at a specified path.
- [subpathsAtPath:](subpaths%28atpath_%29.md): Returns an array of strings identifying the paths for all items in the specified directory.
- [contentsOfDirectoryAtPath:error:](contentsofdirectory%28atpath_%29.md): Performs a shallow search of the specified directory and returns the paths of any contained items.
- [enumeratorAtPath:](enumerator%28atpath_%29.md): Returns a directory enumerator object that can be used to perform a deep enumeration of the directory at the specified path.

### Deprecated Methods

- [copyPath:toPath:handler:](../nsfilemanager/copypath_topath_handler_.md): Deprecated. Copies the directory or file specified in a given path to a different location in the file system identified by another path.
- [movePath:toPath:handler:](../nsfilemanager/movepath_topath_handler_.md): Deprecated. Moves the directory or file specified by a given path to a different location in the file system identified by another path.
- [removeFileAtPath:handler:](../nsfilemanager/removefileatpath_handler_.md): Deprecated. Deletes the file, link, or directory (including, recursively, all subdirectories, files, and links in the directory) identified by a given path.
- [changeFileAttributes:atPath:](changefileattributes%28__atpath_%29.md): Deprecated. Changes the attributes of a given file or directory.
- [fileAttributesAtPath:traverseLink:](fileattributes%28atpath_traverselink_%29.md): Deprecated. Returns a dictionary that describes the POSIX attributes of the file specified at a given.
- [fileSystemAttributesAtPath:](filesystemattributes%28atpath_%29.md): Deprecated. Returns a dictionary that describes the attributes of the mounted file system on which a given path resides.
- [createDirectoryAtPath:attributes:](createdirectory%28atpath_attributes_%29.md): Deprecated. Creates a directory (without contents) at a given path with given attributes.
- [createSymbolicLinkAtPath:pathContent:](createsymboliclink%28atpath_pathcontent_%29.md): Deprecated. Creates a symbolic link identified by a given path that refers to a given location.
- [pathContentOfSymbolicLinkAtPath:](pathcontentofsymboliclink%28atpath_%29.md): Deprecated. Returns the path of the directory or file that a symbolic link at a given path refers to.
- [linkPath:toPath:handler:](../nsfilemanager/linkpath_topath_handler_.md): Deprecated. Creates a link from a source to a destination.
- [fileManager:shouldProceedAfterError:](../../objectivec/nsobject-swift.class/filemanager%28__shouldproceedaftererror_%29.md): Deprecated. An `NSFileManager` object sends this message to its handler for each error it encounters when copying, moving, removing, or linking files or directories.
- [fileManager:willProcessPath:](../../objectivec/nsobject-swift.class/filemanager%28__willprocesspath_%29.md): Deprecated. An `NSFileManager` object sends this message to a handler immediately before attempting to move, copy, rename, or delete, or before attempting to link to a given path.
