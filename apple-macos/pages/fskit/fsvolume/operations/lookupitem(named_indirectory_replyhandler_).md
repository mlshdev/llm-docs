> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/operations/lookupitem(named:indirectory:replyhandler:)](https://developer.apple.com/documentation/fskit/fsvolume/operations/lookupitem(named:indirectory:replyhandler:))

# lookupItem(named:inDirectory:replyHandler:) (Swift)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 15.4+ (deprecated in 27.0)

Looks up an item within a directory.

## Declaration

```swift
func lookupItem(named name: FSFileName, inDirectory directory: FSItem, replyHandler reply: @escaping @Sendable (FSItem?, FSFileName?, (any Error)?) -> Void)
```

```swift
func lookupItem(named name: FSFileName, inDirectory directory: FSItem) async throws -> (FSItem, FSFileName)
```

## Parameters

- `name`: The name of the item to look up.
- `directory`: The directory in which to look up the item.
- `reply`: A block or closure to indicate success or failure. If lookup succeeds, pass the found [FSItem](../../fsitem.md) and its [FSFileName](../../fsfilename.md) (as saved within the file system), along with a `nil` error. If lookup fails, pass the relevant error as the third parameter; any [FSItem](../../fsitem.md) or [FSFileName](../../fsfilename.md) are ignored in this case. For an `async` Swift implementation, there’s no reply handler; simply return the [FSItem](../../fsitem.md) and [FSFileName](../../fsfilename.md) as a tuple or throw an error.

<a id="discussion"></a>

## Discussion

If no item matching `name` exists in the directory indicated by `directory`, complete the request with an error with a domain of [NSPOSIXErrorDomain](https://developer.apple.com/documentation/foundation/nsposixerrordomain) and a code of `ENOENT`.

> **Tip**

> The [FSFileName](../../fsfilename.md) sent back to the caller may differ from the `name` parameter. This flexibility allows your implementation to handle case-insensitive and case-sensitive file systems. It might also be the case that `name` uses a composed Unicode string, but the name maintained by the file system and provided to the caller is uncomposed Unicode.

## See Also

### Working with items

- [createItem(named:type:inDirectory:attributes:replyHandler:)](createitem%28named_type_indirectory_attributes_replyhandler_%29.md): Deprecated. Creates a new file or directory item.
- [FSFileName](../../fsfilename.md): The name of a file, expressed as a data buffer.
- [FSItem.ItemType](../../fsitem/itemtype.md): An enumeration of item types, such as file, directory, or symbolic link.
- [FSItem.SetAttributesRequest](../../fsitem/setattributesrequest.md): A request to set attributes on an item.
- [removeItem(\_:named:fromDirectory:replyHandler:)](removeitem%28__named_fromdirectory_replyhandler_%29.md): Deprecated. Removes an existing item from a given directory.
- [renameItem(\_:inDirectory:named:to:inDirectory:overItem:replyHandler:)](renameitem%28__indirectory_named_to_indirectory_overitem_replyhandler_%29.md): Deprecated. Renames an item from one path in the file system to another.

# lookupItemNamed:inDirectory:replyHandler: (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 15.4+ (deprecated in 27.0)

Looks up an item within a directory.

## Declaration

```objectivec
- (void) lookupItemNamed:(FSFileName *) name inDirectory:(FSItem *) directory replyHandler:(void (^)(FSItem *theItem, FSFileName *itemName, NSError *error)) reply;
```

## Parameters

- `name`: The name of the item to look up.
- `directory`: The directory in which to look up the item.
- `reply`: A block or closure to indicate success or failure. If lookup succeeds, pass the found [FSItem](../../fsitem.md) and its [FSFileName](../../fsfilename.md) (as saved within the file system), along with a `nil` error. If lookup fails, pass the relevant error as the third parameter; any [FSItem](../../fsitem.md) or [FSFileName](../../fsfilename.md) are ignored in this case. For an `async` Swift implementation, there’s no reply handler; simply return the [FSItem](../../fsitem.md) and [FSFileName](../../fsfilename.md) as a tuple or throw an error.

<a id="discussion"></a>

## Discussion

If no item matching `name` exists in the directory indicated by `directory`, complete the request with an error with a domain of [NSPOSIXErrorDomain](https://developer.apple.com/documentation/foundation/nsposixerrordomain) and a code of `ENOENT`.

> **Tip**

> The [FSFileName](../../fsfilename.md) sent back to the caller may differ from the `name` parameter. This flexibility allows your implementation to handle case-insensitive and case-sensitive file systems. It might also be the case that `name` uses a composed Unicode string, but the name maintained by the file system and provided to the caller is uncomposed Unicode.

## See Also

### Working with items

- [createItemNamed:type:inDirectory:attributes:replyHandler:](createitem%28named_type_indirectory_attributes_replyhandler_%29.md): Deprecated. Creates a new file or directory item.
- [FSFileName](../../fsfilename.md): The name of a file, expressed as a data buffer.
- [FSItemType](../../fsitem/itemtype.md): An enumeration of item types, such as file, directory, or symbolic link.
- [FSItemSetAttributesRequest](../../fsitem/setattributesrequest.md): A request to set attributes on an item.
- [removeItem:named:fromDirectory:replyHandler:](removeitem%28__named_fromdirectory_replyhandler_%29.md): Deprecated. Removes an existing item from a given directory.
- [renameItem:inDirectory:named:toNewName:inDirectory:overItem:replyHandler:](renameitem%28__indirectory_named_to_indirectory_overitem_replyhandler_%29.md): Deprecated. Renames an item from one path in the file system to another.
