> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/handler/readsymboliclink(_:context:replyhandler:)](https://developer.apple.com/documentation/fskit/fsvolume/handler/readsymboliclink(_:context:replyhandler:))

# readSymbolicLink(\_:context:replyHandler:) (Swift)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Reads a symbolic link.

## Declaration

```swift
func readSymbolicLink(_ item: FSItem, context: FSContext, replyHandler reply: @escaping @Sendable (FSReadSymlinkResult?, (any Error)?) -> Void)
```

```swift
func readSymbolicLink(_ item: FSItem, context: FSContext) async throws -> FSReadSymlinkResult
```

## Parameters

- `item`: The symbolic link to read from. FSKit guarantees this item is of type [FSItem.ItemType.symlink](../../fsitem/itemtype/symlink.md).
- `context`: An object that enables context-aware file system decisions throughout the operation.
- `reply`: A block or closure to indicate success or failure. If reading succeeds, pass an instance of [FSReadSymlinkResult](../../fsreadsymlinkresult.md) containing the link’s contents and attributes, along with a `nil` error. If reading fails, pass the relevant error as the second parameter; FSKit ignores the [FSReadSymlinkResult](../../fsreadsymlinkresult.md) instance in this case. For an `async` Swift implementation, there’s no reply handler; simply return the result instance or throw an error.

## See Also

### Working with links

- [createLink(to:named:in:context:replyHandler:)](createlink%28to_named_in_context_replyhandler_%29.md): Creates a new hard link.
- [FSCreateLinkResult](../../fscreatelinkresult.md): The result of a create-link call.
- [createSymbolicLink(named:in:attributes:linkContents:context:replyHandler:)](createsymboliclink%28named_in_attributes_linkcontents_context_replyhandler_%29.md): Creates a new symbolic link.
- [FSCreateSymlinkResult](../../fscreatesymlinkresult.md): The result of a create-symlink call.
- [FSReadSymlinkResult](../../fsreadsymlinkresult.md): The result of a read-symlink call.

# readSymbolicLink:context:replyHandler: (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Reads a symbolic link.

## Declaration

```objectivec
- (void) readSymbolicLink:(FSItem *) item context:(FSContext *) context replyHandler:(void (^)(FSReadSymlinkResult *result, NSError *error)) reply;
```

## Parameters

- `item`: The symbolic link to read from. FSKit guarantees this item is of type [FSItemTypeSymlink](../../fsitem/itemtype/symlink.md).
- `context`: An object that enables context-aware file system decisions throughout the operation.
- `reply`: A block or closure to indicate success or failure. If reading succeeds, pass an instance of [FSReadSymlinkResult](../../fsreadsymlinkresult.md) containing the link’s contents and attributes, along with a `nil` error. If reading fails, pass the relevant error as the second parameter; FSKit ignores the [FSReadSymlinkResult](../../fsreadsymlinkresult.md) instance in this case. For an `async` Swift implementation, there’s no reply handler; simply return the result instance or throw an error.

## See Also

### Working with links

- [createLinkToItem:named:inDirectory:context:replyHandler:](createlink%28to_named_in_context_replyhandler_%29.md): Creates a new hard link.
- [FSCreateLinkResult](../../fscreatelinkresult.md): The result of a create-link call.
- [createSymbolicLinkNamed:inDirectory:attributes:linkContents:context:replyHandler:](createsymboliclink%28named_in_attributes_linkcontents_context_replyhandler_%29.md): Creates a new symbolic link.
- [FSCreateSymlinkResult](../../fscreatesymlinkresult.md): The result of a create-symlink call.
- [FSReadSymlinkResult](../../fsreadsymlinkresult.md): The result of a read-symlink call.
