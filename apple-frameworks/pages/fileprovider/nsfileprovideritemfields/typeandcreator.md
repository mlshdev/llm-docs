> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovideritemfields/typeandcreator](https://developer.apple.com/documentation/fileprovider/nsfileprovideritemfields/typeandcreator)

# typeAndCreator (Swift)

**Framework:** File Provider  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 12.0+ · visionOS 1.0+

The file type and creator codes for the item.

## Declaration

```swift
static var typeAndCreator: NSFileProviderItemFields { get }
```

<a id="Discussion"></a>

## Discussion

This property contains two values: the file type code and the creator code. The system synchronizes both codes at the same time, so define both, even if you’re just changing one.

If you modify this property, the system sets the [NSFileProviderTypeAndCreator](../nsfileprovidertypeandcreator.md) value passed to the [createItem(basedOn:fields:contents:options:request:completionHandler:)](../nsfileproviderreplicatedextension/createitem%28basedon_fields_contents_options_request_completionhandler_%29.md) or [modifyItem(\_:baseVersion:changedFields:contents:options:request:completionHandler:)](../nsfileproviderreplicatedextension/modifyitem%28__baseversion_changedfields_contents_options_request_completionhandler_%29.md) methods. The system also writes the type and creator codes in the `FileInfo` structure, if relevant.

## See Also

### Working with Metadata

- [extendedAttributes](extendedattributes.md): The item’s extended attributes.
- [fileSystemFlags](filesystemflags.md): The flags describing the item’s on-disk representation.
- [tagData](tagdata.md): The tags for the item.
- [favoriteRank](favoriterank.md): The item’s favorite rank.

# NSFileProviderItemTypeAndCreator (Objective-C)

**Framework:** File Provider  
**Kind:** Enumeration Case  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · macOS 12.0+ · visionOS 1.0+

The file type and creator codes for the item.

## Declaration

```objectivec
NSFileProviderItemTypeAndCreator
```

<a id="Discussion"></a>

## Discussion

This property contains two values: the file type code and the creator code. The system synchronizes both codes at the same time, so define both, even if you’re just changing one.

If you modify this property, the system sets the [NSFileProviderTypeAndCreator](../nsfileprovidertypeandcreator.md) value passed to the [createItemBasedOnTemplate:fields:contents:options:request:completionHandler:](../nsfileproviderreplicatedextension/createitem%28basedon_fields_contents_options_request_completionhandler_%29.md) or [modifyItem:baseVersion:changedFields:contents:options:request:completionHandler:](../nsfileproviderreplicatedextension/modifyitem%28__baseversion_changedfields_contents_options_request_completionhandler_%29.md) methods. The system also writes the type and creator codes in the `FileInfo` structure, if relevant.

## See Also

### Working with Metadata

- [NSFileProviderItemExtendedAttributes](extendedattributes.md): The item’s extended attributes.
- [NSFileProviderItemFileSystemFlags](filesystemflags.md): The flags describing the item’s on-disk representation.
- [NSFileProviderItemTagData](tagdata.md): The tags for the item.
- [NSFileProviderItemFavoriteRank](favoriterank.md): The item’s favorite rank.
