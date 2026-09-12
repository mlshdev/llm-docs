> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovideritemprotocol/typeandcreator](https://developer.apple.com/documentation/fileprovider/nsfileprovideritemprotocol/typeandcreator)

# typeAndCreator (Swift)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 12.0+ · visionOS 1.0+

The file type and creator codes for the item.

## Declaration

```swift
optional var typeAndCreator: NSFileProviderTypeAndCreator { get }
```

<a id="Discussion"></a>

## Discussion

This property contains two values: the file type code and the creator code. The system synchronizes both codes at the same time, so define both, even if you’re just changing one.

If you modify this property, the system sets the [NSFileProviderTypeAndCreator](../nsfileprovidertypeandcreator.md) value passed to the [createItem(basedOn:fields:contents:options:request:completionHandler:)](../nsfileproviderreplicatedextension/createitem%28basedon_fields_contents_options_request_completionhandler_%29.md) or [modifyItem(\_:baseVersion:changedFields:contents:options:request:completionHandler:)](../nsfileproviderreplicatedextension/modifyitem%28__baseversion_changedfields_contents_options_request_completionhandler_%29.md) methods. The system also writes the type and creator codes in the `FileInfo` structure, if relevant.

## See Also

### Managing Metadata

- [extendedAttributes](extendedattributes.md): The extended file attributes synced by the File Provider extension.
- [fileSystemFlags](filesystemflags.md): Flags that define an item’s on-disk properties and its appearance in the user interface.
- [NSFileProviderFileSystemFlags](../nsfileproviderfilesystemflags.md): Flags that define an item’s on-disk properties and its appearance in the user interface.
- [tagData](tagdata.md): An abstract data blob representing the tags associated with the item.
- [userInfo](userinfo.md): A property list that contains additional data about the item.
- [favoriteRank](favoriterank.md): A 64-bit, unsigned integer indicating the order of the favorite item in the Favorites list.
- [NSFileProviderFavoriteRankUnranked](../nsfileproviderfavoriterankunranked.md): A value that indicates that the item is not ranked.

# typeAndCreator (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · macOS 12.0+ · visionOS 1.0+

The file type and creator codes for the item.

## Declaration

```objectivec
@property (nonatomic, readonly) NSFileProviderTypeAndCreator typeAndCreator;
```

<a id="Discussion"></a>

## Discussion

This property contains two values: the file type code and the creator code. The system synchronizes both codes at the same time, so define both, even if you’re just changing one.

If you modify this property, the system sets the [NSFileProviderTypeAndCreator](../nsfileprovidertypeandcreator.md) value passed to the [createItemBasedOnTemplate:fields:contents:options:request:completionHandler:](../nsfileproviderreplicatedextension/createitem%28basedon_fields_contents_options_request_completionhandler_%29.md) or [modifyItem:baseVersion:changedFields:contents:options:request:completionHandler:](../nsfileproviderreplicatedextension/modifyitem%28__baseversion_changedfields_contents_options_request_completionhandler_%29.md) methods. The system also writes the type and creator codes in the `FileInfo` structure, if relevant.

## See Also

### Managing Metadata

- [extendedAttributes](extendedattributes.md): The extended file attributes synced by the File Provider extension.
- [fileSystemFlags](filesystemflags.md): Flags that define an item’s on-disk properties and its appearance in the user interface.
- [NSFileProviderFileSystemFlags](../nsfileproviderfilesystemflags.md): Flags that define an item’s on-disk properties and its appearance in the user interface.
- [tagData](tagdata.md): An abstract data blob representing the tags associated with the item.
- [userInfo](userinfo.md): A property list that contains additional data about the item.
- [favoriteRank](favoriterank.md): A 64-bit, unsigned integer indicating the order of the favorite item in the Favorites list.
- [NSFileProviderFavoriteRankUnranked](../nsfileproviderfavoriterankunranked.md): A value that indicates that the item is not ranked.
