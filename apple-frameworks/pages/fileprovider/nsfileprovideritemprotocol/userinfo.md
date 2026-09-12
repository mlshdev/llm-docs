> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovideritemprotocol/userinfo](https://developer.apple.com/documentation/fileprovider/nsfileprovideritemprotocol/userinfo)

# userInfo (Swift)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 11.0+ · visionOS 1.0+

A property list that contains additional data about the item.

## Declaration

```swift
optional var userInfo: [AnyHashable : Any]? { get }
```

<a id="Discussion"></a>

## Discussion

The `userInfo` data is often used by the predicate for actions defined by the File Provider UI extension. For more information, see `Adding Actions to the Context Menu`.

The `userInfo` dictionary can only accept entries with numbers (including Boolean values), dates, or strings as either the key or the value.

## See Also

### Managing Metadata

- [extendedAttributes](extendedattributes.md): The extended file attributes synced by the File Provider extension.
- [fileSystemFlags](filesystemflags.md): Flags that define an item’s on-disk properties and its appearance in the user interface.
- [NSFileProviderFileSystemFlags](../nsfileproviderfilesystemflags.md): Flags that define an item’s on-disk properties and its appearance in the user interface.
- [tagData](tagdata.md): An abstract data blob representing the tags associated with the item.
- [favoriteRank](favoriterank.md): A 64-bit, unsigned integer indicating the order of the favorite item in the Favorites list.
- [NSFileProviderFavoriteRankUnranked](../nsfileproviderfavoriterankunranked.md): A value that indicates that the item is not ranked.
- [typeAndCreator](typeandcreator.md): The file type and creator codes for the item.

# userInfo (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · macOS 11.0+ · visionOS 1.0+

A property list that contains additional data about the item.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) NSDictionary * userInfo;
```

<a id="Discussion"></a>

## Discussion

The `userInfo` data is often used by the predicate for actions defined by the File Provider UI extension. For more information, see `Adding Actions to the Context Menu`.

The `userInfo` dictionary can only accept entries with numbers (including Boolean values), dates, or strings as either the key or the value.

## See Also

### Managing Metadata

- [extendedAttributes](extendedattributes.md): The extended file attributes synced by the File Provider extension.
- [fileSystemFlags](filesystemflags.md): Flags that define an item’s on-disk properties and its appearance in the user interface.
- [NSFileProviderFileSystemFlags](../nsfileproviderfilesystemflags.md): Flags that define an item’s on-disk properties and its appearance in the user interface.
- [tagData](tagdata.md): An abstract data blob representing the tags associated with the item.
- [favoriteRank](favoriterank.md): A 64-bit, unsigned integer indicating the order of the favorite item in the Favorites list.
- [NSFileProviderFavoriteRankUnranked](../nsfileproviderfavoriterankunranked.md): A value that indicates that the item is not ranked.
- [typeAndCreator](typeandcreator.md): The file type and creator codes for the item.
