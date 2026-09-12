> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/handler/lookupitem(named:in:context:replyhandler:)](https://developer.apple.com/documentation/fskit/fsvolume/handler/lookupitem(named:in:context:replyhandler:))

# lookupItem(named:in:context:replyHandler:) (Swift)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Looks up an item within a directory.

## Declaration

```swift
func lookupItem(named name: FSFileName, in directory: FSItem, context: FSContext, replyHandler reply: @escaping @Sendable (FSLookupItemResult?, (any Error)?) -> Void)
```

```swift
func lookupItem(named name: FSFileName, in directory: FSItem, context: FSContext) async throws -> FSLookupItemResult
```

## Parameters

- `name`: The name of the item to look up.
- `directory`: The directory in which to look up the item.
- `context`: An object that enables context-aware file system decisions throughout the operation.
- `reply`: A block or closure to indicate success or failure. If lookup succeeds, pass an instance of [FSLookupItemResult](../../fslookupitemresult.md) containing the found [FSItem](../../fsitem.md), its [FSFileName](../../fsfilename.md) (as saved within the file system), and its [FSItem.Attributes](../../fsitem/attributes.md), along with a `nil` error. If lookup fails, pass the relevant error as the second parameter; FSKit ignores the [FSLookupItemResult](../../fslookupitemresult.md) instance in this case. For an `async` Swift implementation, there’s no reply handler; simply return the result instance or throw an error.

<a id="discussion"></a>

## Discussion

If no item matching `name` exists in the directory indicated by `directory`, complete the request with an error with a domain of [NSPOSIXErrorDomain](https://developer.apple.com/documentation/foundation/nsposixerrordomain) and a code of `ENOENT`.

> **Tip**

> The [FSFileName](../../fsfilename.md) sent back to the caller may differ from the `name` parameter. This flexibility allows your implementation to handle case-insensitive and case-sensitive file systems. It might also be the case that `name` uses a composed Unicode string, but the name maintained by the file system and provided to the caller is uncomposed Unicode.

## See Also

### Working with items

- [createItem(named:type:in:attributes:context:replyHandler:)](createitem%28named_type_in_attributes_context_replyhandler_%29.md): Creates a new file or directory item.
- [FSFileName](../../fsfilename.md): The name of a file, expressed as a data buffer.
- [FSItem.ItemType](../../fsitem/itemtype.md): An enumeration of item types, such as file, directory, or symbolic link.
- [FSItem.SetAttributesRequest](../../fsitem/setattributesrequest.md): A request to set attributes on an item.
- [FSCreateItemResult](../../fscreateitemresult.md): The result of a create-item call.
- [FSLookupItemResult](../../fslookupitemresult.md): The result of an item lookup call.
- [removeItem(\_:named:from:context:replyHandler:)](removeitem%28__named_from_context_replyhandler_%29.md): Removes an existing item from a given directory.
- [FSRemoveItemResult](../../fsremoveitemresult.md): The result of a remove-item call.
- [renameItem(\_:inDirectory:named:to:inDirectory:overItem:context:replyHandler:)](renameitem%28__indirectory_named_to_indirectory_overitem_context_replyhandler_%29.md): Renames an item from one path in the file system to another.
- [FSRenameItemResult](../../fsrenameitemresult.md): The result of a rename-item call.
- [reclaimItem(\_:replyHandler:)](reclaimitem%28__replyhandler_%29.md)

# lookupItemNamed:inDirectory:context:replyHandler: (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Looks up an item within a directory.

## Declaration

```objectivec
- (void) lookupItemNamed:(FSFileName *) name inDirectory:(FSItem *) directory context:(FSContext *) context replyHandler:(void (^)(FSLookupItemResult *result, NSError *error)) reply;
```

## Parameters

- `name`: The name of the item to look up.
- `directory`: The directory in which to look up the item.
- `context`: An object that enables context-aware file system decisions throughout the operation.
- `reply`: A block or closure to indicate success or failure. If lookup succeeds, pass an instance of [FSLookupItemResult](../../fslookupitemresult.md) containing the found [FSItem](../../fsitem.md), its [FSFileName](../../fsfilename.md) (as saved within the file system), and its [FSItemAttributes](../../fsitem/attributes.md), along with a `nil` error. If lookup fails, pass the relevant error as the second parameter; FSKit ignores the [FSLookupItemResult](../../fslookupitemresult.md) instance in this case. For an `async` Swift implementation, there’s no reply handler; simply return the result instance or throw an error.

<a id="discussion"></a>

## Discussion

If no item matching `name` exists in the directory indicated by `directory`, complete the request with an error with a domain of [NSPOSIXErrorDomain](https://developer.apple.com/documentation/foundation/nsposixerrordomain) and a code of `ENOENT`.

> **Tip**

> The [FSFileName](../../fsfilename.md) sent back to the caller may differ from the `name` parameter. This flexibility allows your implementation to handle case-insensitive and case-sensitive file systems. It might also be the case that `name` uses a composed Unicode string, but the name maintained by the file system and provided to the caller is uncomposed Unicode.

## See Also

### Working with items

- [createItemNamed:type:inDirectory:attributes:context:replyHandler:](createitem%28named_type_in_attributes_context_replyhandler_%29.md): Creates a new file or directory item.
- [FSFileName](../../fsfilename.md): The name of a file, expressed as a data buffer.
- [FSItemType](../../fsitem/itemtype.md): An enumeration of item types, such as file, directory, or symbolic link.
- [FSItemSetAttributesRequest](../../fsitem/setattributesrequest.md): A request to set attributes on an item.
- [FSCreateItemResult](../../fscreateitemresult.md): The result of a create-item call.
- [FSLookupItemResult](../../fslookupitemresult.md): The result of an item lookup call.
- [removeItem:named:fromDirectory:context:replyHandler:](removeitem%28__named_from_context_replyhandler_%29.md): Removes an existing item from a given directory.
- [FSRemoveItemResult](../../fsremoveitemresult.md): The result of a remove-item call.
- [renameItem:inDirectory:named:toNewName:inDirectory:overItem:context:replyHandler:](renameitem%28__indirectory_named_to_indirectory_overitem_context_replyhandler_%29.md): Renames an item from one path in the file system to another.
- [FSRenameItemResult](../../fsrenameitemresult.md): The result of a rename-item call.
- [reclaimItem:replyHandler:](reclaimitem%28__replyhandler_%29.md)
