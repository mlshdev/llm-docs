> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/operations/createitem(named:type:indirectory:attributes:replyhandler:)](https://developer.apple.com/documentation/fskit/fsvolume/operations/createitem(named:type:indirectory:attributes:replyhandler:))

# createItem(named:type:inDirectory:attributes:replyHandler:) (Swift)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 15.4+ (deprecated in 27.0)

Creates a new file or directory item.

## Declaration

```swift
func createItem(named name: FSFileName, type: FSItem.ItemType, inDirectory directory: FSItem, attributes newAttributes: FSItem.SetAttributesRequest, replyHandler reply: @escaping @Sendable (FSItem?, FSFileName?, (any Error)?) -> Void)
```

```swift
func createItem(named name: FSFileName, type: FSItem.ItemType, inDirectory directory: FSItem, attributes newAttributes: FSItem.SetAttributesRequest) async throws -> (FSItem, FSFileName)
```

## Parameters

- `name`: The new item’s name.
- `type`: The new item’s type.  Valid values are [FSItem.ItemType.file](../../fsitem/itemtype/file.md) or [FSItem.ItemType.directory](../../fsitem/itemtype/directory.md).
- `directory`: The directory in which to create the item.
- `newAttributes`: Attributes to apply to the new item.
- `reply`: A block or closure to indicate success or failure. If creation succeeds, pass the newly-created [FSItem](../../fsitem.md) and its [FSFileName](../../fsfilename.md), along with a `nil` error. If creation fails, pass the relevant error as the third parameter; FSKit ignores any [FSItem](../../fsitem.md) or [FSFileName](../../fsfilename.md) in this case. For an `async` Swift implementation, there’s no reply handler; simply return a tuple of the [FSItem](../../fsitem.md) and its [FSFileName](../../fsfilename.md) or throw an error.

<a id="discussion"></a>

## Discussion

If an item named `name` already exists in the directory indicated by `directory`, complete the request with an error with a domain of [NSPOSIXErrorDomain](https://developer.apple.com/documentation/foundation/nsposixerrordomain) and a code of `EEXIST`.

## See Also

### Working with items

- [FSFileName](../../fsfilename.md): The name of a file, expressed as a data buffer.
- [FSItem.ItemType](../../fsitem/itemtype.md): An enumeration of item types, such as file, directory, or symbolic link.
- [FSItem.SetAttributesRequest](../../fsitem/setattributesrequest.md): A request to set attributes on an item.
- [lookupItem(named:inDirectory:replyHandler:)](lookupitem%28named_indirectory_replyhandler_%29.md): Deprecated. Looks up an item within a directory.
- [removeItem(\_:named:fromDirectory:replyHandler:)](removeitem%28__named_fromdirectory_replyhandler_%29.md): Deprecated. Removes an existing item from a given directory.
- [renameItem(\_:inDirectory:named:to:inDirectory:overItem:replyHandler:)](renameitem%28__indirectory_named_to_indirectory_overitem_replyhandler_%29.md): Deprecated. Renames an item from one path in the file system to another.

# createItemNamed:type:inDirectory:attributes:replyHandler: (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 15.4+ (deprecated in 27.0)

Creates a new file or directory item.

## Declaration

```objectivec
- (void) createItemNamed:(FSFileName *) name type:(FSItemType) type inDirectory:(FSItem *) directory attributes:(FSItemSetAttributesRequest *) newAttributes replyHandler:(void (^)(FSItem *newItem, FSFileName *newItemName, NSError *error)) reply;
```

## Parameters

- `name`: The new item’s name.
- `type`: The new item’s type.  Valid values are [FSItemTypeFile](../../fsitem/itemtype/file.md) or [FSItemTypeDirectory](../../fsitem/itemtype/directory.md).
- `directory`: The directory in which to create the item.
- `newAttributes`: Attributes to apply to the new item.
- `reply`: A block or closure to indicate success or failure. If creation succeeds, pass the newly-created [FSItem](../../fsitem.md) and its [FSFileName](../../fsfilename.md), along with a `nil` error. If creation fails, pass the relevant error as the third parameter; FSKit ignores any [FSItem](../../fsitem.md) or [FSFileName](../../fsfilename.md) in this case. For an `async` Swift implementation, there’s no reply handler; simply return a tuple of the [FSItem](../../fsitem.md) and its [FSFileName](../../fsfilename.md) or throw an error.

<a id="discussion"></a>

## Discussion

If an item named `name` already exists in the directory indicated by `directory`, complete the request with an error with a domain of [NSPOSIXErrorDomain](https://developer.apple.com/documentation/foundation/nsposixerrordomain) and a code of `EEXIST`.

## See Also

### Working with items

- [FSFileName](../../fsfilename.md): The name of a file, expressed as a data buffer.
- [FSItemType](../../fsitem/itemtype.md): An enumeration of item types, such as file, directory, or symbolic link.
- [FSItemSetAttributesRequest](../../fsitem/setattributesrequest.md): A request to set attributes on an item.
- [lookupItemNamed:inDirectory:replyHandler:](lookupitem%28named_indirectory_replyhandler_%29.md): Deprecated. Looks up an item within a directory.
- [removeItem:named:fromDirectory:replyHandler:](removeitem%28__named_fromdirectory_replyhandler_%29.md): Deprecated. Removes an existing item from a given directory.
- [renameItem:inDirectory:named:toNewName:inDirectory:overItem:replyHandler:](renameitem%28__indirectory_named_to_indirectory_overitem_replyhandler_%29.md): Deprecated. Renames an item from one path in the file system to another.
