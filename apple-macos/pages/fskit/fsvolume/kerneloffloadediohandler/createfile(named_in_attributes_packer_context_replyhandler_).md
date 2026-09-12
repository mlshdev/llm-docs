> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/kerneloffloadediohandler/createfile(named:in:attributes:packer:context:replyhandler:)](https://developer.apple.com/documentation/fskit/fsvolume/kerneloffloadediohandler/createfile(named:in:attributes:packer:context:replyhandler:))

# createFile(named:in:attributes:packer:context:replyHandler:) (Swift)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Creates a new file item and map its disk space.

## Declaration

```swift
func createFile(named name: FSFileName, in directory: FSItem, attributes newAttributes: FSItem.SetAttributesRequest, packer: FSExtentPacker, context: FSContext, replyHandler reply: @escaping @Sendable (FSCreateFileKOIOResult?, (any Error)?) -> Void)
```

```swift
func createFile(named name: FSFileName, in directory: FSItem, attributes newAttributes: FSItem.SetAttributesRequest, packer: FSExtentPacker, context: FSContext) async throws -> FSCreateFileKOIOResult
```

## Parameters

- `name`: The new file’s name.
- `directory`: The directory in which to create the file.
- `newAttributes`: Attributes to apply to the new file.
- `packer`: An extent packer you use to pack the file’s allocated disk space.
- `context`: An object that enables context-aware file system decisions throughout the operation.
- `reply`: A block or closure to indicate success or failure. If creation succeeds, pass an instance of [FSCreateFileKOIOResult](../../fscreatefilekoioresult.md) containing the newly-created [FSItem](../../fsitem.md), its [FSFileName](../../fsfilename.md), its [FSItem.Attributes](../../fsitem/attributes.md), the updated [FSItem.Attributes](../../fsitem/attributes.md) of the parent directory, the volume’s update free space, along with a `nil` error. If creation fails, pass the relevant error as the second parameter; FSKit ignores the [FSCreateFileKOIOResult](../../fscreatefilekoioresult.md) instance in this case. For an `async` Swift implementation, there’s no reply handler; simply return the result instance or throw an error.

<a id="discussion"></a>

## Discussion

This method allows the module to opportunistically supply extents, avoiding future calls to [blockmapFile(\_:offset:length:flags:operationID:packer:replyHandler:)](blockmapfile%28__offset_length_flags_operationid_packer_replyhandler_%29.md). Only perform this technique opportunistically. In particular, don’t perform additional I/O to fetch extent data.

Packing extents in this method requires that `attributes` defines a size greater than 0.

An implementation that doesn’t supply the extents can ignore the packer and call the corresponding method in the [FSVolume.Handler](../handler.md) protocol, [createItem(named:type:in:attributes:context:replyHandler:)](../handler/createitem%28named_type_in_attributes_context_replyhandler_%29.md).

## See Also

### Working with items

- [FSItem.SetAttributesRequest](../../fsitem/setattributesrequest.md): A request to set attributes on an item.
- [FSCreateFileKOIOResult](../../fscreatefilekoioresult.md): The result of a kernel-offloaded create-file call.
- [lookupItem(named:in:packer:context:replyHandler:)](lookupitem%28named_in_packer_context_replyhandler_%29.md): Looks up an item within a directory and maps its disk space.
- [FSLookupItemKOIOResult](../../fslookupitemkoioresult.md): The result of a kernel-offloaded lookup-item call.
- [preallocateSpace(for:at:length:flags:packer:context:replyHandler:)](preallocatespace%28for_at_length_flags_packer_context_replyhandler_%29.md): Preallocates and maps disk space for the given file.
- [FSVolume.PreallocateFlags](../preallocateflags.md): Behavior flags for preallocation operations.
- [FSPreallocateKOIOResult](../../fspreallocatekoioresult.md): The result of a kernel-offloaded preallocate call.

# createFileNamed:inDirectory:attributes:packer:context:replyHandler: (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Creates a new file item and map its disk space.

## Declaration

```objectivec
- (void) createFileNamed:(FSFileName *) name inDirectory:(FSItem *) directory attributes:(FSItemSetAttributesRequest *) newAttributes packer:(FSExtentPacker *) packer context:(FSContext *) context replyHandler:(void (^)(FSCreateFileKOIOResult *result, NSError *error)) reply;
```

## Parameters

- `name`: The new file’s name.
- `directory`: The directory in which to create the file.
- `newAttributes`: Attributes to apply to the new file.
- `packer`: An extent packer you use to pack the file’s allocated disk space.
- `context`: An object that enables context-aware file system decisions throughout the operation.
- `reply`: A block or closure to indicate success or failure. If creation succeeds, pass an instance of [FSCreateFileKOIOResult](../../fscreatefilekoioresult.md) containing the newly-created [FSItem](../../fsitem.md), its [FSFileName](../../fsfilename.md), its [FSItemAttributes](../../fsitem/attributes.md), the updated [FSItemAttributes](../../fsitem/attributes.md) of the parent directory, the volume’s update free space, along with a `nil` error. If creation fails, pass the relevant error as the second parameter; FSKit ignores the [FSCreateFileKOIOResult](../../fscreatefilekoioresult.md) instance in this case. For an `async` Swift implementation, there’s no reply handler; simply return the result instance or throw an error.

<a id="discussion"></a>

## Discussion

This method allows the module to opportunistically supply extents, avoiding future calls to [blockmapFile:offset:length:flags:operationID:packer:replyHandler:](blockmapfile%28__offset_length_flags_operationid_packer_replyhandler_%29.md). Only perform this technique opportunistically. In particular, don’t perform additional I/O to fetch extent data.

Packing extents in this method requires that `attributes` defines a size greater than 0.

An implementation that doesn’t supply the extents can ignore the packer and call the corresponding method in the [FSVolumeHandler](../handler.md) protocol, [createItemNamed:type:inDirectory:attributes:context:replyHandler:](../handler/createitem%28named_type_in_attributes_context_replyhandler_%29.md).

## See Also

### Working with items

- [FSItemSetAttributesRequest](../../fsitem/setattributesrequest.md): A request to set attributes on an item.
- [FSCreateFileKOIOResult](../../fscreatefilekoioresult.md): The result of a kernel-offloaded create-file call.
- [lookupItemNamed:inDirectory:packer:context:replyHandler:](lookupitem%28named_in_packer_context_replyhandler_%29.md): Looks up an item within a directory and maps its disk space.
- [FSLookupItemKOIOResult](../../fslookupitemkoioresult.md): The result of a kernel-offloaded lookup-item call.
- [preallocateSpaceForFile:atOffset:length:flags:packer:context:replyHandler:](preallocatespace%28for_at_length_flags_packer_context_replyhandler_%29.md): Preallocates and maps disk space for the given file.
- [FSPreallocateFlags](../preallocateflags.md): Behavior flags for preallocation operations.
- [FSPreallocateKOIOResult](../../fspreallocatekoioresult.md): The result of a kernel-offloaded preallocate call.
