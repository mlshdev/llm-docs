> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/handler/createlink(to:named:in:context:replyhandler:)](https://developer.apple.com/documentation/fskit/fsvolume/handler/createlink(to:named:in:context:replyhandler:))

# createLink(to:named:in:context:replyHandler:) (Swift)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Creates a new hard link.

## Declaration

```swift
func createLink(to item: FSItem, named name: FSFileName, in directory: FSItem, context: FSContext, replyHandler reply: @escaping @Sendable (FSCreateLinkResult?, (any Error)?) -> Void)
```

```swift
func createLink(to item: FSItem, named name: FSFileName, in directory: FSItem, context: FSContext) async throws -> FSCreateLinkResult
```

## Parameters

- `item`: The existing item to which to link.
- `name`: The name for the new link.
- `directory`: The directory in which to create the link.
- `context`: An object that enables context-aware file system decisions throughout the operation.
- `reply`: A block or closure to indicate success or failure. If creation succeeds, pass an instance of [FSCreateLinkResult](../../fscreatelinkresult.md) containing the [FSFileName](../../fsfilename.md) of the newly-created link, the [FSItem.Attributes](../../fsitem/attributes.md) of the linked item, the updated [FSItem.Attributes](../../fsitem/attributes.md) of the parent directory, and the volume’s updated free space, along with a `nil` error. If creation fails, pass the relevant error as the second parameter; FSKit ignores the [FSCreateLinkResult](../../fscreatelinkresult.md) instance in this case. For an `async` Swift implementation, there’s no reply handler; simply return the result instance or throw an error.

<a id="discussion"></a>

## Discussion

If creating the link fails, complete the request with an error with a domain of [NSPOSIXErrorDomain](https://developer.apple.com/documentation/foundation/nsposixerrordomain) and the following error codes:

- `EEXIST` if there’s already an item named `name` in the directory.
- `EMLINK` if creating the link would exceed the maximum number of hard links supported on `item`.
- `ENOTSUP` if the file system doesn’t support creating hard links to the type of file system object that `item` represents.

## See Also

### Working with links

- [FSCreateLinkResult](../../fscreatelinkresult.md): The result of a create-link call.
- [createSymbolicLink(named:in:attributes:linkContents:context:replyHandler:)](createsymboliclink%28named_in_attributes_linkcontents_context_replyhandler_%29.md): Creates a new symbolic link.
- [FSCreateSymlinkResult](../../fscreatesymlinkresult.md): The result of a create-symlink call.
- [readSymbolicLink(\_:context:replyHandler:)](readsymboliclink%28__context_replyhandler_%29.md): Reads a symbolic link.
- [FSReadSymlinkResult](../../fsreadsymlinkresult.md): The result of a read-symlink call.

# createLinkToItem:named:inDirectory:context:replyHandler: (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Creates a new hard link.

## Declaration

```objectivec
- (void) createLinkToItem:(FSItem *) item named:(FSFileName *) name inDirectory:(FSItem *) directory context:(FSContext *) context replyHandler:(void (^)(FSCreateLinkResult *result, NSError *error)) reply;
```

## Parameters

- `item`: The existing item to which to link.
- `name`: The name for the new link.
- `directory`: The directory in which to create the link.
- `context`: An object that enables context-aware file system decisions throughout the operation.
- `reply`: A block or closure to indicate success or failure. If creation succeeds, pass an instance of [FSCreateLinkResult](../../fscreatelinkresult.md) containing the [FSFileName](../../fsfilename.md) of the newly-created link, the [FSItemAttributes](../../fsitem/attributes.md) of the linked item, the updated [FSItemAttributes](../../fsitem/attributes.md) of the parent directory, and the volume’s updated free space, along with a `nil` error. If creation fails, pass the relevant error as the second parameter; FSKit ignores the [FSCreateLinkResult](../../fscreatelinkresult.md) instance in this case. For an `async` Swift implementation, there’s no reply handler; simply return the result instance or throw an error.

<a id="discussion"></a>

## Discussion

If creating the link fails, complete the request with an error with a domain of [NSPOSIXErrorDomain](https://developer.apple.com/documentation/foundation/nsposixerrordomain) and the following error codes:

- `EEXIST` if there’s already an item named `name` in the directory.
- `EMLINK` if creating the link would exceed the maximum number of hard links supported on `item`.
- `ENOTSUP` if the file system doesn’t support creating hard links to the type of file system object that `item` represents.

## See Also

### Working with links

- [FSCreateLinkResult](../../fscreatelinkresult.md): The result of a create-link call.
- [createSymbolicLinkNamed:inDirectory:attributes:linkContents:context:replyHandler:](createsymboliclink%28named_in_attributes_linkcontents_context_replyhandler_%29.md): Creates a new symbolic link.
- [FSCreateSymlinkResult](../../fscreatesymlinkresult.md): The result of a create-symlink call.
- [readSymbolicLink:context:replyHandler:](readsymboliclink%28__context_replyhandler_%29.md): Reads a symbolic link.
- [FSReadSymlinkResult](../../fsreadsymlinkresult.md): The result of a read-symlink call.
