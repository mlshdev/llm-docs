> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/operations/createsymboliclink(named:indirectory:attributes:linkcontents:replyhandler:)](https://developer.apple.com/documentation/fskit/fsvolume/operations/createsymboliclink(named:indirectory:attributes:linkcontents:replyhandler:))

# createSymbolicLink(named:inDirectory:attributes:linkContents:replyHandler:) (Swift)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 15.4+ (deprecated in 27.0)

Creates a new symbolic link.

## Declaration

```swift
func createSymbolicLink(named name: FSFileName, inDirectory directory: FSItem, attributes newAttributes: FSItem.SetAttributesRequest, linkContents contents: FSFileName, replyHandler reply: @escaping @Sendable (FSItem?, FSFileName?, (any Error)?) -> Void)
```

```swift
func createSymbolicLink(named name: FSFileName, inDirectory directory: FSItem, attributes newAttributes: FSItem.SetAttributesRequest, linkContents contents: FSFileName) async throws -> (FSItem, FSFileName)
```

## Parameters

- `name`: The new item’s name.
- `directory`: The directory in which to create the item.
- `newAttributes`: Attributes to apply to the new item.
- `contents`: The contents of the new symbolic link.
- `reply`: A block or closure to indicate success or failure. If creation succeeds, pass the newly-created [FSItem](../../fsitem.md) and a `nil` error. If creation fails, pass the relevant error as the second parameter; FSKit ignores any [FSItem](../../fsitem.md) in this case. For an `async` Swift implementation, there’s no reply handler; simply return the [FSItem](../../fsitem.md) or throw an error.

<a id="discussion"></a>

## Discussion

If an item named `name` already exists in the directory indicated by `directory`, complete the request with an error with a domain of [NSPOSIXErrorDomain](https://developer.apple.com/documentation/foundation/nsposixerrordomain) and a code of `EEXIST`.

## See Also

### Working with links

- [createLink(to:named:inDirectory:replyHandler:)](createlink%28to_named_indirectory_replyhandler_%29.md): Deprecated. Creates a new hard link.
- [readSymbolicLink(\_:replyHandler:)](readsymboliclink%28__replyhandler_%29.md): Deprecated. Reads a symbolic link.

# createSymbolicLinkNamed:inDirectory:attributes:linkContents:replyHandler: (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 15.4+ (deprecated in 27.0)

Creates a new symbolic link.

## Declaration

```objectivec
- (void) createSymbolicLinkNamed:(FSFileName *) name inDirectory:(FSItem *) directory attributes:(FSItemSetAttributesRequest *) newAttributes linkContents:(FSFileName *) contents replyHandler:(void (^)(FSItem *newItem, FSFileName *newItemName, NSError *error)) reply;
```

## Parameters

- `name`: The new item’s name.
- `directory`: The directory in which to create the item.
- `newAttributes`: Attributes to apply to the new item.
- `contents`: The contents of the new symbolic link.
- `reply`: A block or closure to indicate success or failure. If creation succeeds, pass the newly-created [FSItem](../../fsitem.md) and a `nil` error. If creation fails, pass the relevant error as the second parameter; FSKit ignores any [FSItem](../../fsitem.md) in this case. For an `async` Swift implementation, there’s no reply handler; simply return the [FSItem](../../fsitem.md) or throw an error.

<a id="discussion"></a>

## Discussion

If an item named `name` already exists in the directory indicated by `directory`, complete the request with an error with a domain of [NSPOSIXErrorDomain](https://developer.apple.com/documentation/foundation/nsposixerrordomain) and a code of `EEXIST`.

## See Also

### Working with links

- [createLinkToItem:named:inDirectory:replyHandler:](createlink%28to_named_indirectory_replyhandler_%29.md): Deprecated. Creates a new hard link.
- [readSymbolicLink:replyHandler:](readsymboliclink%28__replyhandler_%29.md): Deprecated. Reads a symbolic link.
