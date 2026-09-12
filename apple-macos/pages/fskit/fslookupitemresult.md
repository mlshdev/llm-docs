> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fslookupitemresult](https://developer.apple.com/documentation/fskit/fslookupitemresult)

# FSLookupItemResult (Swift)

**Framework:** FSKit  
**Kind:** Class  
**Availability:** macOS 27.0+

The result of an item lookup call.

## Declaration

```swift
class FSLookupItemResult
```

<a id="overview"></a>

## Overview

Use this type in your implementation of [lookupItem(named:in:context:replyHandler:)](fsvolume/handler/lookupitem%28named_in_context_replyhandler_%29.md).

## Topics

### Creating a lookup item result

- [init(foundItem:itemName:itemAttributes:)](fslookupitemresult/init%28founditem_itemname_itemattributes_%29.md): Creates a result for an item-lookup operation.
- [FSItem](fsitem.md): A distinct object in a file hierarchy, such as a file, directory, symlink, socket, and more.
- [FSFileName](fsfilename.md): The name of a file, expressed as a data buffer.
- [FSItem.Attributes](fsitem/attributes.md): Attributes of an item, such as size, creation and modification times, and user and group identifiers.

## Relationships

### Inherits From

- [FSVolumeHandlerResult](fsvolumehandlerresult.md)

### Inherited By

- [FSLookupItemKOIOResult](fslookupitemkoioresult.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Working with items

- [createItem(named:type:in:attributes:context:replyHandler:)](fsvolume/handler/createitem%28named_type_in_attributes_context_replyhandler_%29.md): Creates a new file or directory item.
- [FSFileName](fsfilename.md): The name of a file, expressed as a data buffer.
- [FSItem.ItemType](fsitem/itemtype.md): An enumeration of item types, such as file, directory, or symbolic link.
- [FSItem.SetAttributesRequest](fsitem/setattributesrequest.md): A request to set attributes on an item.
- [FSCreateItemResult](fscreateitemresult.md): The result of a create-item call.
- [lookupItem(named:in:context:replyHandler:)](fsvolume/handler/lookupitem%28named_in_context_replyhandler_%29.md): Looks up an item within a directory.
- [removeItem(\_:named:from:context:replyHandler:)](fsvolume/handler/removeitem%28__named_from_context_replyhandler_%29.md): Removes an existing item from a given directory.
- [FSRemoveItemResult](fsremoveitemresult.md): The result of a remove-item call.
- [renameItem(\_:inDirectory:named:to:inDirectory:overItem:context:replyHandler:)](fsvolume/handler/renameitem%28__indirectory_named_to_indirectory_overitem_context_replyhandler_%29.md): Renames an item from one path in the file system to another.
- [FSRenameItemResult](fsrenameitemresult.md): The result of a rename-item call.
- [reclaimItem(\_:replyHandler:)](fsvolume/handler/reclaimitem%28__replyhandler_%29.md)

# FSLookupItemResult (Objective-C)

**Framework:** FSKit  
**Kind:** Class  
**Availability:** macOS 27.0+

The result of an item lookup call.

## Declaration

```objectivec
@interface FSLookupItemResult : FSVolumeHandlerResult
```

<a id="overview"></a>

## Overview

Use this type in your implementation of [lookupItemNamed:inDirectory:context:replyHandler:](fsvolume/handler/lookupitem%28named_in_context_replyhandler_%29.md).

## Topics

### Creating a lookup item result

- [initWithFoundItem:itemName:itemAttributes:](fslookupitemresult/init%28founditem_itemname_itemattributes_%29.md): Creates a result for an item-lookup operation.
- [FSItem](fsitem.md): A distinct object in a file hierarchy, such as a file, directory, symlink, socket, and more.
- [FSFileName](fsfilename.md): The name of a file, expressed as a data buffer.
- [FSItemAttributes](fsitem/attributes.md): Attributes of an item, such as size, creation and modification times, and user and group identifiers.

## Relationships

### Inherits From

- [FSVolumeHandlerResult](fsvolumehandlerresult.md)

### Inherited By

- [FSLookupItemKOIOResult](fslookupitemkoioresult.md)

## See Also

### Working with items

- [createItemNamed:type:inDirectory:attributes:context:replyHandler:](fsvolume/handler/createitem%28named_type_in_attributes_context_replyhandler_%29.md): Creates a new file or directory item.
- [FSFileName](fsfilename.md): The name of a file, expressed as a data buffer.
- [FSItemType](fsitem/itemtype.md): An enumeration of item types, such as file, directory, or symbolic link.
- [FSItemSetAttributesRequest](fsitem/setattributesrequest.md): A request to set attributes on an item.
- [FSCreateItemResult](fscreateitemresult.md): The result of a create-item call.
- [lookupItemNamed:inDirectory:context:replyHandler:](fsvolume/handler/lookupitem%28named_in_context_replyhandler_%29.md): Looks up an item within a directory.
- [removeItem:named:fromDirectory:context:replyHandler:](fsvolume/handler/removeitem%28__named_from_context_replyhandler_%29.md): Removes an existing item from a given directory.
- [FSRemoveItemResult](fsremoveitemresult.md): The result of a remove-item call.
- [renameItem:inDirectory:named:toNewName:inDirectory:overItem:context:replyHandler:](fsvolume/handler/renameitem%28__indirectory_named_to_indirectory_overitem_context_replyhandler_%29.md): Renames an item from one path in the file system to another.
- [FSRenameItemResult](fsrenameitemresult.md): The result of a rename-item call.
- [reclaimItem:replyHandler:](fsvolume/handler/reclaimitem%28__replyhandler_%29.md)
