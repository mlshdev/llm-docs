> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsdirectoryentrypacker/packentry(name:itemtype:itemid:nextcookie:attributes:)](https://developer.apple.com/documentation/fskit/fsdirectoryentrypacker/packentry(name:itemtype:itemid:nextcookie:attributes:))

# packEntry(name:itemType:itemID:nextCookie:attributes:) (Swift)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 15.4+

Provides a directory entry during enumeration.

## Declaration

```swift
func packEntry(name: FSFileName, itemType: FSItem.ItemType, itemID: FSItem.Identifier, nextCookie: FSDirectoryCookie, attributes: FSItem.Attributes?) -> Bool
```

## Parameters

- `name`: The item’s name.
- `itemType`: The type of the item.
- `itemID`: The item’s identifier. Typically this is an inode number, or one of the constants defined by [FSItem.Identifier](../fsitem/identifier.md) like [FSItem.Identifier.rootDirectory](../fsitem/identifier/rootdirectory.md).
- `nextCookie`: A value to indicate the next entry in the directory to enumerate. FSKit passes this value as the `cookie` parameter on the next call to [enumerateDirectory(\_:startingAt:verifier:attributes:packer:context:replyHandler:)](../fsvolume/handler/enumeratedirectory%28__startingat_verifier_attributes_packer_context_replyhandler_%29.md). Use whatever value is appropriate for your implementation; the value is opaque to FSKit.
- `attributes`: The item’s attributes. Pass `nil` if the enumeration call didn’t request attributes.

<a id="return-value"></a>

## Return Value

`true` (Swift) or `YES` (Objective-C) if packing was successful and enumeration can continue with the next directory entry. If the value is `false` (Swift) or `NO` (Objective-C), stop enumerating. This result can happen when the entry is too big for the remaining space in the buffer.

<a id="discussion"></a>

## Discussion

You call this method in your implementation of [enumerateDirectory(\_:startingAt:verifier:attributes:packer:context:replyHandler:)](../fsvolume/handler/enumeratedirectory%28__startingat_verifier_attributes_packer_context_replyhandler_%29.md), for each directory entry you want to provide to the enumeration.

## See Also

### Packing entries

- [FSItem.ItemType](../fsitem/itemtype.md): An enumeration of item types, such as file, directory, or symbolic link.
- [FSItem.Identifier](../fsitem/identifier.md): The unique identifier for an item.
- [FSDirectoryCookie](../fsdirectorycookie.md): A value that indicates a location in a directory from which to enumerate.
- [FSDirectoryCookie](../fsdirectorycookie.md): A value that indicates a location in a directory from which to enumerate.
- [FSItem.Attributes](../fsitem/attributes.md): Attributes of an item, such as size, creation and modification times, and user and group identifiers.

# packEntryWithName:itemType:itemID:nextCookie:attributes: (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 15.4+

Provides a directory entry during enumeration.

## Declaration

```objectivec
- (BOOL) packEntryWithName:(FSFileName *) name itemType:(FSItemType) itemType itemID:(FSItemID) itemID nextCookie:(FSDirectoryCookie) nextCookie attributes:(FSItemAttributes *) attributes;
```

## Parameters

- `name`: The item’s name.
- `itemType`: The type of the item.
- `itemID`: The item’s identifier. Typically this is an inode number, or one of the constants defined by [FSItemID](../fsitem/identifier.md) like [FSItemIDRootDirectory](../fsitem/identifier/rootdirectory.md).
- `nextCookie`: A value to indicate the next entry in the directory to enumerate. FSKit passes this value as the `cookie` parameter on the next call to [enumerateDirectory:startingAtCookie:verifier:providingAttributes:usingPacker:context:replyHandler:](../fsvolume/handler/enumeratedirectory%28__startingat_verifier_attributes_packer_context_replyhandler_%29.md). Use whatever value is appropriate for your implementation; the value is opaque to FSKit.
- `attributes`: The item’s attributes. Pass `nil` if the enumeration call didn’t request attributes.

<a id="return-value"></a>

## Return Value

`true` (Swift) or `YES` (Objective-C) if packing was successful and enumeration can continue with the next directory entry. If the value is `false` (Swift) or `NO` (Objective-C), stop enumerating. This result can happen when the entry is too big for the remaining space in the buffer.

<a id="discussion"></a>

## Discussion

You call this method in your implementation of [enumerateDirectory:startingAtCookie:verifier:providingAttributes:usingPacker:context:replyHandler:](../fsvolume/handler/enumeratedirectory%28__startingat_verifier_attributes_packer_context_replyhandler_%29.md), for each directory entry you want to provide to the enumeration.

## See Also

### Packing entries

- [FSItemType](../fsitem/itemtype.md): An enumeration of item types, such as file, directory, or symbolic link.
- [FSItemID](../fsitem/identifier.md): The unique identifier for an item.
- [FSDirectoryCookie](../fsdirectorycookie.md): A value that indicates a location in a directory from which to enumerate.
- [FSDirectoryCookie](../fsdirectorycookie.md): A value that indicates a location in a directory from which to enumerate.
- [FSItemAttributes](../fsitem/attributes.md): Attributes of an item, such as size, creation and modification times, and user and group identifiers.
