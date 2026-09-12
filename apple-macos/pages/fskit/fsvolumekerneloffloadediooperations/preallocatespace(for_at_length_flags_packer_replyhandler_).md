> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolumekerneloffloadediooperations/preallocatespace(for:at:length:flags:packer:replyhandler:)](https://developer.apple.com/documentation/fskit/fsvolumekerneloffloadediooperations/preallocatespace(for:at:length:flags:packer:replyhandler:))

# preallocateSpace(for:at:length:flags:packer:replyHandler:) (Swift)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 15.4+ (deprecated in 27.0)

Preallocates and maps disk space for the given file.

## Declaration

```swift
optional func preallocateSpace(for file: FSItem, at offset: off_t, length: Int, flags: FSVolume.PreallocateFlags, packer: FSExtentPacker, replyHandler reply: @escaping @Sendable (Int, (any Error)?) -> Void)
```

```swift
optional func preallocateSpace(for file: FSItem, at offset: off_t, length: Int, flags: FSVolume.PreallocateFlags, packer: FSExtentPacker) async throws -> Int
```

## Parameters

- `file`: The item for which to preallocate space.
- `offset`: The offset from which to allocate.
- `length`: The length of the space in bytes.
- `flags`: Flags that affect the preallocation behavior.
- `packer`: An extent packer you use to pack the file’s preallocated disk space.
- `reply`: A block or closure to indicate success or failure. If preallocation succeeds, pass the amount of bytes allocated and a nil error. If preallocation fails, pass the relevant error as the second parameter; FSKit ignores any byte count in this case. For an `async` Swift implementation, there’s no reply handler; simply return the allocated byte count or throw an error.

<a id="discussion"></a>

## Discussion

This method allows the module to opportunistically supply extents, avoiding future calls to `blockmapFile(_:offset:length:flags:operationID:packer:)`.

> **Important**

> Only implement this method if your file system conforms to [FSVolume.PreallocateOperations](../fsvolume/preallocateoperations.md).

## See Also

### Working with items

- [createFile(name:in:attributes:packer:replyHandler:)](createfile%28name_in_attributes_packer_replyhandler_%29.md): Deprecated. Creates a new file item and map its disk space.
- [FSItem.SetAttributesRequest](../fsitem/setattributesrequest.md): A request to set attributes on an item.
- [lookupItem(name:in:packer:replyHandler:)](lookupitem%28name_in_packer_replyhandler_%29.md): Deprecated. Looks up an item within a directory and maps its disk space.
- [FSVolume.PreallocateFlags](../fsvolume/preallocateflags.md): Behavior flags for preallocation operations.

# preallocateSpaceForFile:atOffset:length:flags:packer:replyHandler: (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 15.4+ (deprecated in 27.0)

Preallocates and maps disk space for the given file.

## Declaration

```objectivec
- (void) preallocateSpaceForFile:(FSItem *) file atOffset:(off_t) offset length:(size_t) length flags:(FSPreallocateFlags) flags packer:(FSExtentPacker *) packer replyHandler:(void (^)(size_t bytesAllocated, NSError *error)) reply;
```

## Parameters

- `file`: The item for which to preallocate space.
- `offset`: The offset from which to allocate.
- `length`: The length of the space in bytes.
- `flags`: Flags that affect the preallocation behavior.
- `packer`: An extent packer you use to pack the file’s preallocated disk space.
- `reply`: A block or closure to indicate success or failure. If preallocation succeeds, pass the amount of bytes allocated and a nil error. If preallocation fails, pass the relevant error as the second parameter; FSKit ignores any byte count in this case. For an `async` Swift implementation, there’s no reply handler; simply return the allocated byte count or throw an error.

<a id="discussion"></a>

## Discussion

This method allows the module to opportunistically supply extents, avoiding future calls to `blockmapFile(_:offset:length:flags:operationID:packer:)`.

> **Important**

> Only implement this method if your file system conforms to [FSVolumePreallocateOperations](../fsvolume/preallocateoperations.md).

## See Also

### Working with items

- [createFileNamed:inDirectory:attributes:packer:replyHandler:](createfile%28name_in_attributes_packer_replyhandler_%29.md): Deprecated. Creates a new file item and map its disk space.
- [FSItemSetAttributesRequest](../fsitem/setattributesrequest.md): A request to set attributes on an item.
- [lookupItemNamed:inDirectory:packer:replyHandler:](lookupitem%28name_in_packer_replyhandler_%29.md): Deprecated. Looks up an item within a directory and maps its disk space.
- [FSPreallocateFlags](../fsvolume/preallocateflags.md): Behavior flags for preallocation operations.
