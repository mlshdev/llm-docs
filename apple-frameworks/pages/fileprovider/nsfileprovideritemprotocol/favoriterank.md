> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovideritemprotocol/favoriterank](https://developer.apple.com/documentation/fileprovider/nsfileprovideritemprotocol/favoriterank)

# favoriteRank (Swift)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · visionOS 1.0+

A 64-bit, unsigned integer indicating the order of the favorite item in the Favorites list.

## Declaration

```swift
@NSCopying optional var favoriteRank: NSNumber? { get }
```

## See Also

### Managing Metadata

- [extendedAttributes](extendedattributes.md): The extended file attributes synced by the File Provider extension.
- [fileSystemFlags](filesystemflags.md): Flags that define an item’s on-disk properties and its appearance in the user interface.
- [NSFileProviderFileSystemFlags](../nsfileproviderfilesystemflags.md): Flags that define an item’s on-disk properties and its appearance in the user interface.
- [tagData](tagdata.md): An abstract data blob representing the tags associated with the item.
- [userInfo](userinfo.md): A property list that contains additional data about the item.
- [NSFileProviderFavoriteRankUnranked](../nsfileproviderfavoriterankunranked.md): A value that indicates that the item is not ranked.
- [typeAndCreator](typeandcreator.md): The file type and creator codes for the item.

# favoriteRank (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · visionOS 1.0+

A 64-bit, unsigned integer indicating the order of the favorite item in the Favorites list.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSNumber * favoriteRank;
```

## See Also

### Managing Metadata

- [extendedAttributes](extendedattributes.md): The extended file attributes synced by the File Provider extension.
- [fileSystemFlags](filesystemflags.md): Flags that define an item’s on-disk properties and its appearance in the user interface.
- [NSFileProviderFileSystemFlags](../nsfileproviderfilesystemflags.md): Flags that define an item’s on-disk properties and its appearance in the user interface.
- [tagData](tagdata.md): An abstract data blob representing the tags associated with the item.
- [userInfo](userinfo.md): A property list that contains additional data about the item.
- [NSFileProviderFavoriteRankUnranked](../nsfileproviderfavoriterankunranked.md): A value that indicates that the item is not ranked.
- [typeAndCreator](typeandcreator.md): The file type and creator codes for the item.
