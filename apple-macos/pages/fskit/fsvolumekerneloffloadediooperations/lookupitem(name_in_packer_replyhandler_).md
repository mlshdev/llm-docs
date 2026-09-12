> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolumekerneloffloadediooperations/lookupitem(name:in:packer:replyhandler:)](https://developer.apple.com/documentation/fskit/fsvolumekerneloffloadediooperations/lookupitem(name:in:packer:replyhandler:))

# lookupItem(name:in:packer:replyHandler:) (Swift)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 15.4+ (deprecated in 27.0)

Looks up an item within a directory and maps its disk space.

## Declaration

```swift
func lookupItem(name: FSFileName, in directory: FSItem, packer: FSExtentPacker, replyHandler reply: @escaping @Sendable (FSItem?, FSFileName?, (any Error)?) -> Void)
```

```swift
func lookupItem(name: FSFileName, in directory: FSItem, packer: FSExtentPacker) async throws -> (FSItem, FSFileName)
```

## Parameters

- `name`: The name of the file to look up.
- `directory`: The directory in which to look up the file.
- `packer`: An extent packer you use to pack the file’s allocated disk space.
- `reply`: A block or closure to indicate success or failure. If lookup succeeds, pass the found [FSItem](../fsitem.md) and its [FSFileName](../fsfilename.md), along with a `nil` error. If lookup fails, pass the relevant error as the third parameter; FSKit ignores any [FSItem](../fsitem.md) or [FSFileName](../fsfilename.md) in this case. For an `async` Swift implementation, there’s no reply handler; instead, return a tuple of the [FSItem](../fsitem.md) and its [FSFileName](../fsfilename.md) or throw an error.

<a id="discussion"></a>

## Discussion

This method allows the module to opportunistically supply extents, avoiding future calls to `blockmapFile(_:offset:length:flags:operationID:packer:)`. Only perform this technique opportunistically. In particular, don’t perform additional I/O to fetch extent data.

## See Also

### Working with items

- [createFile(name:in:attributes:packer:replyHandler:)](createfile%28name_in_attributes_packer_replyhandler_%29.md): Deprecated. Creates a new file item and map its disk space.
- [FSItem.SetAttributesRequest](../fsitem/setattributesrequest.md): A request to set attributes on an item.
- [preallocateSpace(for:at:length:flags:packer:replyHandler:)](preallocatespace%28for_at_length_flags_packer_replyhandler_%29.md): Deprecated. Preallocates and maps disk space for the given file.
- [FSVolume.PreallocateFlags](../fsvolume/preallocateflags.md): Behavior flags for preallocation operations.

# lookupItemNamed:inDirectory:packer:replyHandler: (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 15.4+ (deprecated in 27.0)

Looks up an item within a directory and maps its disk space.

## Declaration

```objectivec
- (void) lookupItemNamed:(FSFileName *) name inDirectory:(FSItem *) directory packer:(FSExtentPacker *) packer replyHandler:(void (^)(FSItem *theItem, FSFileName *itemName, NSError *error)) reply;
```

## Parameters

- `name`: The name of the file to look up.
- `directory`: The directory in which to look up the file.
- `packer`: An extent packer you use to pack the file’s allocated disk space.
- `reply`: A block or closure to indicate success or failure. If lookup succeeds, pass the found [FSItem](../fsitem.md) and its [FSFileName](../fsfilename.md), along with a `nil` error. If lookup fails, pass the relevant error as the third parameter; FSKit ignores any [FSItem](../fsitem.md) or [FSFileName](../fsfilename.md) in this case. For an `async` Swift implementation, there’s no reply handler; instead, return a tuple of the [FSItem](../fsitem.md) and its [FSFileName](../fsfilename.md) or throw an error.

<a id="discussion"></a>

## Discussion

This method allows the module to opportunistically supply extents, avoiding future calls to `blockmapFile(_:offset:length:flags:operationID:packer:)`. Only perform this technique opportunistically. In particular, don’t perform additional I/O to fetch extent data.

## See Also

### Working with items

- [createFileNamed:inDirectory:attributes:packer:replyHandler:](createfile%28name_in_attributes_packer_replyhandler_%29.md): Deprecated. Creates a new file item and map its disk space.
- [FSItemSetAttributesRequest](../fsitem/setattributesrequest.md): A request to set attributes on an item.
- [preallocateSpaceForFile:atOffset:length:flags:packer:replyHandler:](preallocatespace%28for_at_length_flags_packer_replyhandler_%29.md): Deprecated. Preallocates and maps disk space for the given file.
- [FSPreallocateFlags](../fsvolume/preallocateflags.md): Behavior flags for preallocation operations.
