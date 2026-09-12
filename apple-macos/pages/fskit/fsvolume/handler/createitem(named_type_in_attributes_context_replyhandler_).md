> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/handler/createitem(named:type:in:attributes:context:replyhandler:)](https://developer.apple.com/documentation/fskit/fsvolume/handler/createitem(named:type:in:attributes:context:replyhandler:))

# createItem(named:type:in:attributes:context:replyHandler:) (Swift)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Creates a new file or directory item.

## Declaration

```swift
func createItem(named name: FSFileName, type: FSItem.ItemType, in directory: FSItem, attributes newAttributes: FSItem.SetAttributesRequest, context: FSContext, replyHandler reply: @escaping @Sendable (FSCreateItemResult?, (any Error)?) -> Void)
```

```swift
func createItem(named name: FSFileName, type: FSItem.ItemType, in directory: FSItem, attributes newAttributes: FSItem.SetAttributesRequest, context: FSContext) async throws -> FSCreateItemResult
```

## Parameters

- `name`: The new item’s name.
- `type`: The new item’s type.  Valid values are [FSItem.ItemType.file](../../fsitem/itemtype/file.md) or [FSItem.ItemType.directory](../../fsitem/itemtype/directory.md).
- `directory`: The directory in which to create the item.
- `newAttributes`: Attributes to apply to the new item.
- `context`: An object that enables context-aware file system decisions throughout the operation.
- `reply`: A block or closure to indicate success or failure. If creation succeeds, pass an instance of [FSCreateItemResult](../../fscreateitemresult.md) containing the newly-created [FSItem](../../fsitem.md), its [FSFileName](../../fsfilename.md), its [FSItem.Attributes](../../fsitem/attributes.md), the updated [FSItem.Attributes](../../fsitem/attributes.md) of the parent directory, and the volume’s updated free space, along with a `nil` error. If creation fails, pass the relevant error as the second parameter; FSKit ignores the [FSCreateItemResult](../../fscreateitemresult.md) instance in this case. For an `async` Swift implementation, there’s no reply handler; simply return the result instance or throw an error.

<a id="discussion"></a>

## Discussion

If an item named `name` already exists in the directory indicated by `directory`, complete the request with an error with a domain of [NSPOSIXErrorDomain](https://developer.apple.com/documentation/foundation/nsposixerrordomain) and a code of `EEXIST`.

## See Also

### Working with items

- [FSFileName](../../fsfilename.md): The name of a file, expressed as a data buffer.
- [FSItem.ItemType](../../fsitem/itemtype.md): An enumeration of item types, such as file, directory, or symbolic link.
- [FSItem.SetAttributesRequest](../../fsitem/setattributesrequest.md): A request to set attributes on an item.
- [FSCreateItemResult](../../fscreateitemresult.md): The result of a create-item call.
- [lookupItem(named:in:context:replyHandler:)](lookupitem%28named_in_context_replyhandler_%29.md): Looks up an item within a directory.
- [FSLookupItemResult](../../fslookupitemresult.md): The result of an item lookup call.
- [removeItem(\_:named:from:context:replyHandler:)](removeitem%28__named_from_context_replyhandler_%29.md): Removes an existing item from a given directory.
- [FSRemoveItemResult](../../fsremoveitemresult.md): The result of a remove-item call.
- [renameItem(\_:inDirectory:named:to:inDirectory:overItem:context:replyHandler:)](renameitem%28__indirectory_named_to_indirectory_overitem_context_replyhandler_%29.md): Renames an item from one path in the file system to another.
- [FSRenameItemResult](../../fsrenameitemresult.md): The result of a rename-item call.
- [reclaimItem(\_:replyHandler:)](reclaimitem%28__replyhandler_%29.md)

# createItemNamed:type:inDirectory:attributes:context:replyHandler: (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Creates a new file or directory item.

## Declaration

```objectivec
- (void) createItemNamed:(FSFileName *) name type:(FSItemType) type inDirectory:(FSItem *) directory attributes:(FSItemSetAttributesRequest *) newAttributes context:(FSContext *) context replyHandler:(void (^)(FSCreateItemResult *result, NSError *error)) reply;
```

## Parameters

- `name`: The new item’s name.
- `type`: The new item’s type.  Valid values are [FSItemTypeFile](../../fsitem/itemtype/file.md) or [FSItemTypeDirectory](../../fsitem/itemtype/directory.md).
- `directory`: The directory in which to create the item.
- `newAttributes`: Attributes to apply to the new item.
- `context`: An object that enables context-aware file system decisions throughout the operation.
- `reply`: A block or closure to indicate success or failure. If creation succeeds, pass an instance of [FSCreateItemResult](../../fscreateitemresult.md) containing the newly-created [FSItem](../../fsitem.md), its [FSFileName](../../fsfilename.md), its [FSItemAttributes](../../fsitem/attributes.md), the updated [FSItemAttributes](../../fsitem/attributes.md) of the parent directory, and the volume’s updated free space, along with a `nil` error. If creation fails, pass the relevant error as the second parameter; FSKit ignores the [FSCreateItemResult](../../fscreateitemresult.md) instance in this case. For an `async` Swift implementation, there’s no reply handler; simply return the result instance or throw an error.

<a id="discussion"></a>

## Discussion

If an item named `name` already exists in the directory indicated by `directory`, complete the request with an error with a domain of [NSPOSIXErrorDomain](https://developer.apple.com/documentation/foundation/nsposixerrordomain) and a code of `EEXIST`.

## See Also

### Working with items

- [FSFileName](../../fsfilename.md): The name of a file, expressed as a data buffer.
- [FSItemType](../../fsitem/itemtype.md): An enumeration of item types, such as file, directory, or symbolic link.
- [FSItemSetAttributesRequest](../../fsitem/setattributesrequest.md): A request to set attributes on an item.
- [FSCreateItemResult](../../fscreateitemresult.md): The result of a create-item call.
- [lookupItemNamed:inDirectory:context:replyHandler:](lookupitem%28named_in_context_replyhandler_%29.md): Looks up an item within a directory.
- [FSLookupItemResult](../../fslookupitemresult.md): The result of an item lookup call.
- [removeItem:named:fromDirectory:context:replyHandler:](removeitem%28__named_from_context_replyhandler_%29.md): Removes an existing item from a given directory.
- [FSRemoveItemResult](../../fsremoveitemresult.md): The result of a remove-item call.
- [renameItem:inDirectory:named:toNewName:inDirectory:overItem:context:replyHandler:](renameitem%28__indirectory_named_to_indirectory_overitem_context_replyhandler_%29.md): Renames an item from one path in the file system to another.
- [FSRenameItemResult](../../fsrenameitemresult.md): The result of a rename-item call.
- [reclaimItem:replyHandler:](reclaimitem%28__replyhandler_%29.md)
