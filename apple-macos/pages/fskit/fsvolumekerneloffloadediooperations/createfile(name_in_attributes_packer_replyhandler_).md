> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolumekerneloffloadediooperations/createfile(name:in:attributes:packer:replyhandler:)](https://developer.apple.com/documentation/fskit/fsvolumekerneloffloadediooperations/createfile(name:in:attributes:packer:replyhandler:))

# createFile(name:in:attributes:packer:replyHandler:) (Swift)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 15.4+ (deprecated in 27.0)

Creates a new file item and map its disk space.

## Declaration

```swift
func createFile(name: FSFileName, in directory: FSItem, attributes: FSItem.SetAttributesRequest, packer: FSExtentPacker, replyHandler reply: @escaping @Sendable (FSItem?, FSFileName?, (any Error)?) -> Void)
```

```swift
func createFile(name: FSFileName, in directory: FSItem, attributes: FSItem.SetAttributesRequest, packer: FSExtentPacker) async throws -> (FSItem, FSFileName)
```

## Parameters

- `name`: The new file’s name.
- `directory`: The directory in which to create the file.
- `attributes`: Attributes to apply to the new file.
- `packer`: An extent packer you use to pack the file’s allocated disk space.
- `reply`: A block or closure to indicate success or failure. If creation succeeds, pass the newly created [FSItem](../fsitem.md) and its [FSFileName](../fsfilename.md), along with a `nil` error. If creation fails, pass the relevant error as the third parameter; FSKit ignores any [FSItem](../fsitem.md) or [FSFileName](../fsfilename.md) in this case. For an `async` Swift implementation, there’s no reply handler; instead, return a tuple of the [FSItem](../fsitem.md) and its [FSFileName](../fsfilename.md) or throw an error.

<a id="discussion"></a>

## Discussion

This method allows the module to opportunistically supply extents, avoiding future calls to `blockmapFile(_:offset:length:flags:operationID:packer:)`. Only perform this technique opportunistically. In particular, don’t perform additional I/O to fetch extent data.

Packing extents in this method requires that `attributes` defines a size greater than 0.

An implementation that doesn’t supply the extents can ignore the packer and call the corresponding method in the [FSVolume.Operations](../fsvolume/operations.md) protocol, `FSVolume/Operations/createItem(named:type:inDirectory:attributes:)`.

## See Also

### Working with items

- [FSItem.SetAttributesRequest](../fsitem/setattributesrequest.md): A request to set attributes on an item.
- [lookupItem(name:in:packer:replyHandler:)](lookupitem%28name_in_packer_replyhandler_%29.md): Deprecated. Looks up an item within a directory and maps its disk space.
- [preallocateSpace(for:at:length:flags:packer:replyHandler:)](preallocatespace%28for_at_length_flags_packer_replyhandler_%29.md): Deprecated. Preallocates and maps disk space for the given file.
- [FSVolume.PreallocateFlags](../fsvolume/preallocateflags.md): Behavior flags for preallocation operations.

# createFileNamed:inDirectory:attributes:packer:replyHandler: (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 15.4+ (deprecated in 27.0)

Creates a new file item and map its disk space.

## Declaration

```objectivec
- (void) createFileNamed:(FSFileName *) name inDirectory:(FSItem *) directory attributes:(FSItemSetAttributesRequest *) attributes packer:(FSExtentPacker *) packer replyHandler:(void (^)(FSItem *newFile, FSFileName *newFileName, NSError *error)) reply;
```

## Parameters

- `name`: The new file’s name.
- `directory`: The directory in which to create the file.
- `attributes`: Attributes to apply to the new file.
- `packer`: An extent packer you use to pack the file’s allocated disk space.
- `reply`: A block or closure to indicate success or failure. If creation succeeds, pass the newly created [FSItem](../fsitem.md) and its [FSFileName](../fsfilename.md), along with a `nil` error. If creation fails, pass the relevant error as the third parameter; FSKit ignores any [FSItem](../fsitem.md) or [FSFileName](../fsfilename.md) in this case. For an `async` Swift implementation, there’s no reply handler; instead, return a tuple of the [FSItem](../fsitem.md) and its [FSFileName](../fsfilename.md) or throw an error.

<a id="discussion"></a>

## Discussion

This method allows the module to opportunistically supply extents, avoiding future calls to `blockmapFile(_:offset:length:flags:operationID:packer:)`. Only perform this technique opportunistically. In particular, don’t perform additional I/O to fetch extent data.

Packing extents in this method requires that `attributes` defines a size greater than 0.

An implementation that doesn’t supply the extents can ignore the packer and call the corresponding method in the [FSVolumeOperations](../fsvolume/operations.md) protocol, `FSVolume/Operations/createItem(named:type:inDirectory:attributes:)`.

## See Also

### Working with items

- [FSItemSetAttributesRequest](../fsitem/setattributesrequest.md): A request to set attributes on an item.
- [lookupItemNamed:inDirectory:packer:replyHandler:](lookupitem%28name_in_packer_replyhandler_%29.md): Deprecated. Looks up an item within a directory and maps its disk space.
- [preallocateSpaceForFile:atOffset:length:flags:packer:replyHandler:](preallocatespace%28for_at_length_flags_packer_replyhandler_%29.md): Deprecated. Preallocates and maps disk space for the given file.
- [FSPreallocateFlags](../fsvolume/preallocateflags.md): Behavior flags for preallocation operations.
