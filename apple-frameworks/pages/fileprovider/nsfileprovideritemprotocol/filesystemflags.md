> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovideritemprotocol/filesystemflags](https://developer.apple.com/documentation/fileprovider/nsfileprovideritemprotocol/filesystemflags)

# fileSystemFlags (Swift)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 11.0+ · visionOS 1.0+

Flags that define an item’s on-disk properties and its appearance in the user interface.

## Declaration

```swift
optional var fileSystemFlags: NSFileProviderFileSystemFlags { get }
```

<a id="Discussion"></a>

## Discussion

The flags define the on-disk properties of the item. The system modifies the item’s appearance based on these flags.

## See Also

### Managing Metadata

- [extendedAttributes](extendedattributes.md): The extended file attributes synced by the File Provider extension.
- [NSFileProviderFileSystemFlags](../nsfileproviderfilesystemflags.md): Flags that define an item’s on-disk properties and its appearance in the user interface.
- [tagData](tagdata.md): An abstract data blob representing the tags associated with the item.
- [userInfo](userinfo.md): A property list that contains additional data about the item.
- [favoriteRank](favoriterank.md): A 64-bit, unsigned integer indicating the order of the favorite item in the Favorites list.
- [NSFileProviderFavoriteRankUnranked](../nsfileproviderfavoriterankunranked.md): A value that indicates that the item is not ranked.
- [typeAndCreator](typeandcreator.md): The file type and creator codes for the item.

# fileSystemFlags (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · macOS 11.0+ · visionOS 1.0+

Flags that define an item’s on-disk properties and its appearance in the user interface.

## Declaration

```objectivec
@property (nonatomic, readonly) NSFileProviderFileSystemFlags fileSystemFlags;
```

<a id="Discussion"></a>

## Discussion

The flags define the on-disk properties of the item. The system modifies the item’s appearance based on these flags.

## See Also

### Managing Metadata

- [extendedAttributes](extendedattributes.md): The extended file attributes synced by the File Provider extension.
- [NSFileProviderFileSystemFlags](../nsfileproviderfilesystemflags.md): Flags that define an item’s on-disk properties and its appearance in the user interface.
- [tagData](tagdata.md): An abstract data blob representing the tags associated with the item.
- [userInfo](userinfo.md): A property list that contains additional data about the item.
- [favoriteRank](favoriterank.md): A 64-bit, unsigned integer indicating the order of the favorite item in the Favorites list.
- [NSFileProviderFavoriteRankUnranked](../nsfileproviderfavoriterankunranked.md): A value that indicates that the item is not ranked.
- [typeAndCreator](typeandcreator.md): The file type and creator codes for the item.
