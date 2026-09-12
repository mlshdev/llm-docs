> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filemanager/replaceitematurl(originalitemurl:withitematurl:backupitemname:options:)](https://developer.apple.com/documentation/foundation/filemanager/replaceitematurl(originalitemurl:withitematurl:backupitemname:options:))

# replaceItemAtURL(originalItemURL:withItemAtURL:backupItemName:options:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Replaces the contents of the item at the specified URL in a manner that ensures no data loss occurs.

> Use [replaceItemAt(\_:withItemAt:backupItemName:options:)](replaceitemat%28__withitemat_backupitemname_options_%29.md) instead.

## Declaration

```swift
func replaceItemAtURL(originalItemURL: NSURL, withItemAtURL newItemURL: NSURL, backupItemName: String? = nil, options: FileManager.ItemReplacementOptions = []) throws -> NSURL?
```

## Parameters

- `originalItemURL`: The item containing the content you want to replace.
- `newItemURL`: The item containing the new content for `originalItemURL`. It is recommended that you put this item in a temporary directory as provided by the OS. If a temporary directory is not available, put this item in a uniquely named directory that is in the same directory as the original item.
- `backupItemName`: If provided, the name used to create a backup of the original item.

  The backup is placed in the same directory as the original item. If an error occurs during the creation of the backup item, the operation fails. If there is already an item with the same name as the backup item, that item will be removed.

  The backup item will be removed in the event of success unless the [withoutDeletingBackupItem](itemreplacementoptions/withoutdeletingbackupitem.md) option is provided in options.
- `options`: The options to use during the replacement. Typically, you pass [usingNewMetadataOnly](itemreplacementoptions/usingnewmetadataonly.md) for this parameter, which uses only the metadata from the new item. You can also combine the options described in [FileManager.ItemReplacementOptions](itemreplacementoptions.md) using the C-bitwise OR operator.

<a id="return-value"></a>

## Return Value

The URL of the new item. If no new file system object is required, the URL object in this parameter may be the same passed to the originalItemURL parameter. However, if a new file system object is required, the URL object may be different. For example, replacing an RTF document with an RTFD document requires the creation of a new file.

<a id="Discussion"></a>

## Discussion

By default, the creation date, permissions, Finder label and color, and Spotlight comments of the original item are preserved on the new item. You can configure which metadata is preserved using the options parameter.

This method works only when the originalItemURL and newItemURL parameters are located on the same volume. Attempting to call this method by passing originalItemURL and newItemURL parameters that have locations on different volumes results in an error. Instead, you can call the [url(for:in:appropriateFor:create:)](url%28for_in_appropriatefor_create_%29.md) method, passing [FileManager.SearchPathDirectory.itemReplacementDirectory](searchpathdirectory/itemreplacementdirectory.md) as the search path directory, to get a temporary URL on the destination’s volume that is suitable for use with this method.

If an error occurs and the original item is not in the original location or a temporary location, the resulting error object contains a user info dictionary with the key `"NSFileOriginalItemLocationKey"`. The value assigned to that key is an [NSURL](../nsurl.md) object with the location of the item. The error code is one of the file-related errors described in [NSError Codes](../1448136-nserror-codes.md).

## See Also

### Deprecated Methods

- [changeFileAttributes(\_:atPath:)](changefileattributes%28__atpath_%29.md): Deprecated. Changes the attributes of a given file or directory.
- [fileAttributes(atPath:traverseLink:)](fileattributes%28atpath_traverselink_%29.md): Deprecated. Returns a dictionary that describes the POSIX attributes of the file specified at a given.
- [fileSystemAttributes(atPath:)](filesystemattributes%28atpath_%29.md): Deprecated. Returns a dictionary that describes the attributes of the mounted file system on which a given path resides.
- [directoryContents(atPath:)](directorycontents%28atpath_%29.md): Deprecated. Returns the directories and files (including symbolic links) contained in a given directory.
- [createDirectory(atPath:attributes:)](createdirectory%28atpath_attributes_%29.md): Deprecated. Creates a directory (without contents) at a given path with given attributes.
- [createSymbolicLink(atPath:pathContent:)](createsymboliclink%28atpath_pathcontent_%29.md): Deprecated. Creates a symbolic link identified by a given path that refers to a given location.
- [pathContentOfSymbolicLink(atPath:)](pathcontentofsymboliclink%28atpath_%29.md): Deprecated. Returns the path of the directory or file that a symbolic link at a given path refers to.
- [fileManager(\_:shouldProceedAfterError:)](../../objectivec/nsobject-swift.class/filemanager%28__shouldproceedaftererror_%29.md): Deprecated. An `NSFileManager` object sends this message to its handler for each error it encounters when copying, moving, removing, or linking files or directories.
- [fileManager(\_:willProcessPath:)](../../objectivec/nsobject-swift.class/filemanager%28__willprocesspath_%29.md): Deprecated. An `NSFileManager` object sends this message to a handler immediately before attempting to move, copy, rename, or delete, or before attempting to link to a given path.
