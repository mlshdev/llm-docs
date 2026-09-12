> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/operations/readsymboliclink(_:replyhandler:)](https://developer.apple.com/documentation/fskit/fsvolume/operations/readsymboliclink(_:replyhandler:))

# readSymbolicLink(\_:replyHandler:) (Swift)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 15.4+ (deprecated in 27.0)

Reads a symbolic link.

## Declaration

```swift
func readSymbolicLink(_ item: FSItem, replyHandler reply: @escaping @Sendable (FSFileName?, (any Error)?) -> Void)
```

```swift
func readSymbolicLink(_ item: FSItem) async throws -> FSFileName
```

## Parameters

- `item`: The symbolic link to read from. FSKit guarantees this item is of type [FSItem.ItemType.symlink](../../fsitem/itemtype/symlink.md).
- `reply`: A block or closure to indicate success or failure. If reading succeeds, pass the link’s contents as an [FSFileName](../../fsfilename.md) and a `nil` error. If reading fails, pass the relevant error as the second parameter; FSKit ignores any [FSFileName](../../fsfilename.md) in this case. For an `async` Swift implementation, there’s no reply handler; simply return the [FSFileName](../../fsfilename.md) or throw an error.

## See Also

### Working with links

- [createLink(to:named:inDirectory:replyHandler:)](createlink%28to_named_indirectory_replyhandler_%29.md): Deprecated. Creates a new hard link.
- [createSymbolicLink(named:inDirectory:attributes:linkContents:replyHandler:)](createsymboliclink%28named_indirectory_attributes_linkcontents_replyhandler_%29.md): Deprecated. Creates a new symbolic link.

# readSymbolicLink:replyHandler: (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 15.4+ (deprecated in 27.0)

Reads a symbolic link.

## Declaration

```objectivec
- (void) readSymbolicLink:(FSItem *) item replyHandler:(void (^)(FSFileName *contents, NSError *error)) reply;
```

## Parameters

- `item`: The symbolic link to read from. FSKit guarantees this item is of type [FSItemTypeSymlink](../../fsitem/itemtype/symlink.md).
- `reply`: A block or closure to indicate success or failure. If reading succeeds, pass the link’s contents as an [FSFileName](../../fsfilename.md) and a `nil` error. If reading fails, pass the relevant error as the second parameter; FSKit ignores any [FSFileName](../../fsfilename.md) in this case. For an `async` Swift implementation, there’s no reply handler; simply return the [FSFileName](../../fsfilename.md) or throw an error.

## See Also

### Working with links

- [createLinkToItem:named:inDirectory:replyHandler:](createlink%28to_named_indirectory_replyhandler_%29.md): Deprecated. Creates a new hard link.
- [createSymbolicLinkNamed:inDirectory:attributes:linkContents:replyHandler:](createsymboliclink%28named_indirectory_attributes_linkcontents_replyhandler_%29.md): Deprecated. Creates a new symbolic link.
