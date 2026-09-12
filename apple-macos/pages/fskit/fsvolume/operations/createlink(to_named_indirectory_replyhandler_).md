> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/operations/createlink(to:named:indirectory:replyhandler:)](https://developer.apple.com/documentation/fskit/fsvolume/operations/createlink(to:named:indirectory:replyhandler:))

# createLink(to:named:inDirectory:replyHandler:) (Swift)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 15.4+ (deprecated in 27.0)

Creates a new hard link.

## Declaration

```swift
func createLink(to item: FSItem, named name: FSFileName, inDirectory directory: FSItem, replyHandler reply: @escaping @Sendable (FSFileName?, (any Error)?) -> Void)
```

```swift
func createLink(to item: FSItem, named name: FSFileName, inDirectory directory: FSItem) async throws -> FSFileName
```

## Parameters

- `item`: The existing item to which to link.
- `name`: The name for the new link.
- `directory`: The directory in which to create the link.
- `reply`: A block or closure to indicate success or failure. If creation succeeds, pass an [FSFileName](../../fsfilename.md) of the newly-created link and a `nil` error. If creation fails, pass the relevant error as the second parameter; FSKit ignores any [FSFileName](../../fsfilename.md) in this case. For an `async` Swift implementation, there’s no reply handler; simply return the [FSFileName](../../fsfilename.md) or throw an error.

<a id="discussion"></a>

## Discussion

If creating the link fails, complete the request with an error with a domain of [NSPOSIXErrorDomain](https://developer.apple.com/documentation/foundation/nsposixerrordomain) and the following error codes:

- `EEXIST` if there’s already an item named `name` in the directory.
- `EMLINK` if creating the link would exceed the maximum number of hard links supported on `item`.
- `ENOTSUP` if the file system doesn’t support creating hard links to the type of file system object that `item` represents.

## See Also

### Working with links

- [createSymbolicLink(named:inDirectory:attributes:linkContents:replyHandler:)](createsymboliclink%28named_indirectory_attributes_linkcontents_replyhandler_%29.md): Deprecated. Creates a new symbolic link.
- [readSymbolicLink(\_:replyHandler:)](readsymboliclink%28__replyhandler_%29.md): Deprecated. Reads a symbolic link.

# createLinkToItem:named:inDirectory:replyHandler: (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 15.4+ (deprecated in 27.0)

Creates a new hard link.

## Declaration

```objectivec
- (void) createLinkToItem:(FSItem *) item named:(FSFileName *) name inDirectory:(FSItem *) directory replyHandler:(void (^)(FSFileName *linkName, NSError *error)) reply;
```

## Parameters

- `item`: The existing item to which to link.
- `name`: The name for the new link.
- `directory`: The directory in which to create the link.
- `reply`: A block or closure to indicate success or failure. If creation succeeds, pass an [FSFileName](../../fsfilename.md) of the newly-created link and a `nil` error. If creation fails, pass the relevant error as the second parameter; FSKit ignores any [FSFileName](../../fsfilename.md) in this case. For an `async` Swift implementation, there’s no reply handler; simply return the [FSFileName](../../fsfilename.md) or throw an error.

<a id="discussion"></a>

## Discussion

If creating the link fails, complete the request with an error with a domain of [NSPOSIXErrorDomain](https://developer.apple.com/documentation/foundation/nsposixerrordomain) and the following error codes:

- `EEXIST` if there’s already an item named `name` in the directory.
- `EMLINK` if creating the link would exceed the maximum number of hard links supported on `item`.
- `ENOTSUP` if the file system doesn’t support creating hard links to the type of file system object that `item` represents.

## See Also

### Working with links

- [createSymbolicLinkNamed:inDirectory:attributes:linkContents:replyHandler:](createsymboliclink%28named_indirectory_attributes_linkcontents_replyhandler_%29.md): Deprecated. Creates a new symbolic link.
- [readSymbolicLink:replyHandler:](readsymboliclink%28__replyhandler_%29.md): Deprecated. Reads a symbolic link.
