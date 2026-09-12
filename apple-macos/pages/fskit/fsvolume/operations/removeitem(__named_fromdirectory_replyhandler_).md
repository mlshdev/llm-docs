> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/operations/removeitem(_:named:fromdirectory:replyhandler:)](https://developer.apple.com/documentation/fskit/fsvolume/operations/removeitem(_:named:fromdirectory:replyhandler:))

# removeItem(\_:named:fromDirectory:replyHandler:) (Swift)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 15.4+ (deprecated in 27.0)

Removes an existing item from a given directory.

## Declaration

```swift
func removeItem(_ item: FSItem, named name: FSFileName, fromDirectory directory: FSItem, replyHandler reply: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func removeItem(_ item: FSItem, named name: FSFileName, fromDirectory directory: FSItem) async throws
```

## Parameters

- `item`: The item to remove.
- `name`: The name of the item to remove.
- `directory`: The directory from which to remove the item.
- `reply`: A block or closure to indicate success or failure. If removal fails, pass an error as the one parameter to the reply handler. If removal succeeds, pass `nil`. For an `async` Swift implementation, there’s no reply handler; simply throw an error or return normally.

<a id="discussion"></a>

## Discussion

Don’t actually remove the item object itself in your implementation; instead, only remove the given item name from the given directory. Remove and deallocate the item in `reclaimItem(_:)`.

## See Also

### Working with items

- [createItem(named:type:inDirectory:attributes:replyHandler:)](createitem%28named_type_indirectory_attributes_replyhandler_%29.md): Deprecated. Creates a new file or directory item.
- [FSFileName](../../fsfilename.md): The name of a file, expressed as a data buffer.
- [FSItem.ItemType](../../fsitem/itemtype.md): An enumeration of item types, such as file, directory, or symbolic link.
- [FSItem.SetAttributesRequest](../../fsitem/setattributesrequest.md): A request to set attributes on an item.
- [lookupItem(named:inDirectory:replyHandler:)](lookupitem%28named_indirectory_replyhandler_%29.md): Deprecated. Looks up an item within a directory.
- [renameItem(\_:inDirectory:named:to:inDirectory:overItem:replyHandler:)](renameitem%28__indirectory_named_to_indirectory_overitem_replyhandler_%29.md): Deprecated. Renames an item from one path in the file system to another.

# removeItem:named:fromDirectory:replyHandler: (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 15.4+ (deprecated in 27.0)

Removes an existing item from a given directory.

## Declaration

```objectivec
- (void) removeItem:(FSItem *) item named:(FSFileName *) name fromDirectory:(FSItem *) directory replyHandler:(void (^)(NSError *error)) reply;
```

## Parameters

- `item`: The item to remove.
- `name`: The name of the item to remove.
- `directory`: The directory from which to remove the item.
- `reply`: A block or closure to indicate success or failure. If removal fails, pass an error as the one parameter to the reply handler. If removal succeeds, pass `nil`. For an `async` Swift implementation, there’s no reply handler; simply throw an error or return normally.

<a id="discussion"></a>

## Discussion

Don’t actually remove the item object itself in your implementation; instead, only remove the given item name from the given directory. Remove and deallocate the item in `reclaimItem(_:)`.

## See Also

### Working with items

- [createItemNamed:type:inDirectory:attributes:replyHandler:](createitem%28named_type_indirectory_attributes_replyhandler_%29.md): Deprecated. Creates a new file or directory item.
- [FSFileName](../../fsfilename.md): The name of a file, expressed as a data buffer.
- [FSItemType](../../fsitem/itemtype.md): An enumeration of item types, such as file, directory, or symbolic link.
- [FSItemSetAttributesRequest](../../fsitem/setattributesrequest.md): A request to set attributes on an item.
- [lookupItemNamed:inDirectory:replyHandler:](lookupitem%28named_indirectory_replyhandler_%29.md): Deprecated. Looks up an item within a directory.
- [renameItem:inDirectory:named:toNewName:inDirectory:overItem:replyHandler:](renameitem%28__indirectory_named_to_indirectory_overitem_replyhandler_%29.md): Deprecated. Renames an item from one path in the file system to another.
