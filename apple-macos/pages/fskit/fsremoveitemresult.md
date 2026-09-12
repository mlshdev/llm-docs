> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsremoveitemresult](https://developer.apple.com/documentation/fskit/fsremoveitemresult)

# FSRemoveItemResult (Swift)

**Framework:** FSKit  
**Kind:** Class  
**Availability:** macOS 27.0+

The result of a remove-item call.

## Declaration

```swift
class FSRemoveItemResult
```

<a id="overview"></a>

## Overview

Use this type in your implementation of[removeItem(\_:named:from:context:replyHandler:)](fsvolume/handler/removeitem%28__named_from_context_replyhandler_%29.md).

## Topics

### Creating a remove-item result

- [init(itemAttributes:directoryAttributes:freeSpace:)](fsremoveitemresult/init%28itemattributes_directoryattributes_freespace_%29.md): Creates a result for an item-removal operation.
- [FSItem.Attributes](fsitem/attributes.md): Attributes of an item, such as size, creation and modification times, and user and group identifiers.
- [FSFreeSpace](fsfreespace.md): A free space object that pairs free space values with atomic sequence numbers.

## Relationships

### Inherits From

- [FSVolumeHandlerResult](fsvolumehandlerresult.md)

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
- [FSLookupItemResult](fslookupitemresult.md): The result of an item lookup call.
- [removeItem(\_:named:from:context:replyHandler:)](fsvolume/handler/removeitem%28__named_from_context_replyhandler_%29.md): Removes an existing item from a given directory.
- [renameItem(\_:inDirectory:named:to:inDirectory:overItem:context:replyHandler:)](fsvolume/handler/renameitem%28__indirectory_named_to_indirectory_overitem_context_replyhandler_%29.md): Renames an item from one path in the file system to another.
- [FSRenameItemResult](fsrenameitemresult.md): The result of a rename-item call.
- [reclaimItem(\_:replyHandler:)](fsvolume/handler/reclaimitem%28__replyhandler_%29.md)

# FSRemoveItemResult (Objective-C)

**Framework:** FSKit  
**Kind:** Class  
**Availability:** macOS 27.0+

The result of a remove-item call.

## Declaration

```objectivec
@interface FSRemoveItemResult : FSVolumeHandlerResult
```

<a id="overview"></a>

## Overview

Use this type in your implementation of[removeItem:named:fromDirectory:context:replyHandler:](fsvolume/handler/removeitem%28__named_from_context_replyhandler_%29.md).

## Topics

### Creating a remove-item result

- [initWithItemAttributes:directoryAttributes:freeSpace:](fsremoveitemresult/init%28itemattributes_directoryattributes_freespace_%29.md): Creates a result for an item-removal operation.
- [FSItemAttributes](fsitem/attributes.md): Attributes of an item, such as size, creation and modification times, and user and group identifiers.
- [FSFreeSpace](fsfreespace.md): A free space object that pairs free space values with atomic sequence numbers.

## Relationships

### Inherits From

- [FSVolumeHandlerResult](fsvolumehandlerresult.md)

## See Also

### Working with items

- [createItemNamed:type:inDirectory:attributes:context:replyHandler:](fsvolume/handler/createitem%28named_type_in_attributes_context_replyhandler_%29.md): Creates a new file or directory item.
- [FSFileName](fsfilename.md): The name of a file, expressed as a data buffer.
- [FSItemType](fsitem/itemtype.md): An enumeration of item types, such as file, directory, or symbolic link.
- [FSItemSetAttributesRequest](fsitem/setattributesrequest.md): A request to set attributes on an item.
- [FSCreateItemResult](fscreateitemresult.md): The result of a create-item call.
- [lookupItemNamed:inDirectory:context:replyHandler:](fsvolume/handler/lookupitem%28named_in_context_replyhandler_%29.md): Looks up an item within a directory.
- [FSLookupItemResult](fslookupitemresult.md): The result of an item lookup call.
- [removeItem:named:fromDirectory:context:replyHandler:](fsvolume/handler/removeitem%28__named_from_context_replyhandler_%29.md): Removes an existing item from a given directory.
- [renameItem:inDirectory:named:toNewName:inDirectory:overItem:context:replyHandler:](fsvolume/handler/renameitem%28__indirectory_named_to_indirectory_overitem_context_replyhandler_%29.md): Renames an item from one path in the file system to another.
- [FSRenameItemResult](fsrenameitemresult.md): The result of a rename-item call.
- [reclaimItem:replyHandler:](fsvolume/handler/reclaimitem%28__replyhandler_%29.md)
