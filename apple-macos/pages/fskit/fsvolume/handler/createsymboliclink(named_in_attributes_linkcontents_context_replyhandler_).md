> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/handler/createsymboliclink(named:in:attributes:linkcontents:context:replyhandler:)](https://developer.apple.com/documentation/fskit/fsvolume/handler/createsymboliclink(named:in:attributes:linkcontents:context:replyhandler:))

# createSymbolicLink(named:in:attributes:linkContents:context:replyHandler:) (Swift)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Creates a new symbolic link.

## Declaration

```swift
func createSymbolicLink(named name: FSFileName, in directory: FSItem, attributes newAttributes: FSItem.SetAttributesRequest, linkContents contents: FSFileName, context: FSContext, replyHandler reply: @escaping @Sendable (FSCreateSymlinkResult?, (any Error)?) -> Void)
```

```swift
func createSymbolicLink(named name: FSFileName, in directory: FSItem, attributes newAttributes: FSItem.SetAttributesRequest, linkContents contents: FSFileName, context: FSContext) async throws -> FSCreateSymlinkResult
```

## Parameters

- `name`: The new item’s name.
- `directory`: The directory in which to create the item.
- `newAttributes`: Attributes to apply to the new item.
- `contents`: The contents of the new symbolic link.
- `context`: An object that enables context-aware file system decisions throughout the operation.
- `reply`: A block or closure to indicate success or failure. If creation succeeds, pass an instance of [FSCreateSymlinkResult](../../fscreatesymlinkresult.md) containing the newly-created [FSItem](../../fsitem.md), its [FSFileName](../../fsfilename.md), its [FSItem.Attributes](../../fsitem/attributes.md), the updated [FSItem.Attributes](../../fsitem/attributes.md) of the parent directory, and the volume’s updated free space, along with a `nil` error. If creation fails, pass the relevant error as the second parameter; FSKit ignores the [FSCreateSymlinkResult](../../fscreatesymlinkresult.md) instance in this case. For an `async` Swift implementation, there’s no reply handler; simply return the result instance or throw an error.

<a id="discussion"></a>

## Discussion

If an item named `name` already exists in the directory indicated by `directory`, complete the request with an error with a domain of [NSPOSIXErrorDomain](https://developer.apple.com/documentation/foundation/nsposixerrordomain) and a code of `EEXIST`.

## See Also

### Working with links

- [createLink(to:named:in:context:replyHandler:)](createlink%28to_named_in_context_replyhandler_%29.md): Creates a new hard link.
- [FSCreateLinkResult](../../fscreatelinkresult.md): The result of a create-link call.
- [FSCreateSymlinkResult](../../fscreatesymlinkresult.md): The result of a create-symlink call.
- [readSymbolicLink(\_:context:replyHandler:)](readsymboliclink%28__context_replyhandler_%29.md): Reads a symbolic link.
- [FSReadSymlinkResult](../../fsreadsymlinkresult.md): The result of a read-symlink call.

# createSymbolicLinkNamed:inDirectory:attributes:linkContents:context:replyHandler: (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Creates a new symbolic link.

## Declaration

```objectivec
- (void) createSymbolicLinkNamed:(FSFileName *) name inDirectory:(FSItem *) directory attributes:(FSItemSetAttributesRequest *) newAttributes linkContents:(FSFileName *) contents context:(FSContext *) context replyHandler:(void (^)(FSCreateSymlinkResult *result, NSError *error)) reply;
```

## Parameters

- `name`: The new item’s name.
- `directory`: The directory in which to create the item.
- `newAttributes`: Attributes to apply to the new item.
- `contents`: The contents of the new symbolic link.
- `context`: An object that enables context-aware file system decisions throughout the operation.
- `reply`: A block or closure to indicate success or failure. If creation succeeds, pass an instance of [FSCreateSymlinkResult](../../fscreatesymlinkresult.md) containing the newly-created [FSItem](../../fsitem.md), its [FSFileName](../../fsfilename.md), its [FSItemAttributes](../../fsitem/attributes.md), the updated [FSItemAttributes](../../fsitem/attributes.md) of the parent directory, and the volume’s updated free space, along with a `nil` error. If creation fails, pass the relevant error as the second parameter; FSKit ignores the [FSCreateSymlinkResult](../../fscreatesymlinkresult.md) instance in this case. For an `async` Swift implementation, there’s no reply handler; simply return the result instance or throw an error.

<a id="discussion"></a>

## Discussion

If an item named `name` already exists in the directory indicated by `directory`, complete the request with an error with a domain of [NSPOSIXErrorDomain](https://developer.apple.com/documentation/foundation/nsposixerrordomain) and a code of `EEXIST`.

## See Also

### Working with links

- [createLinkToItem:named:inDirectory:context:replyHandler:](createlink%28to_named_in_context_replyhandler_%29.md): Creates a new hard link.
- [FSCreateLinkResult](../../fscreatelinkresult.md): The result of a create-link call.
- [FSCreateSymlinkResult](../../fscreatesymlinkresult.md): The result of a create-symlink call.
- [readSymbolicLink:context:replyHandler:](readsymboliclink%28__context_replyhandler_%29.md): Reads a symbolic link.
- [FSReadSymlinkResult](../../fsreadsymlinkresult.md): The result of a read-symlink call.
