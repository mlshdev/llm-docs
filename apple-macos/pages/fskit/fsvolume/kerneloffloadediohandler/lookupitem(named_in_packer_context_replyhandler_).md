> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/kerneloffloadediohandler/lookupitem(named:in:packer:context:replyhandler:)](https://developer.apple.com/documentation/fskit/fsvolume/kerneloffloadediohandler/lookupitem(named:in:packer:context:replyhandler:))

# lookupItem(named:in:packer:context:replyHandler:) (Swift)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Looks up an item within a directory and maps its disk space.

## Declaration

```swift
func lookupItem(named name: FSFileName, in directory: FSItem, packer: FSExtentPacker, context: FSContext, replyHandler reply: @escaping @Sendable (FSLookupItemKOIOResult?, (any Error)?) -> Void)
```

```swift
func lookupItem(named name: FSFileName, in directory: FSItem, packer: FSExtentPacker, context: FSContext) async throws -> FSLookupItemKOIOResult
```

## Parameters

- `name`: The name of the file to look up.
- `directory`: The directory in which to look up the file.
- `packer`: An extent packer you use to pack the file’s allocated disk space.
- `context`: An object that enables context-aware file system decisions throughout the operation.
- `reply`: A block or closure to indicate success or failure. If lookup succeeds, pass an instance of [FSLookupItemKOIOResult](../../fslookupitemkoioresult.md) containing the found [FSItem](../../fsitem.md) together with its [FSFileName](../../fsfilename.md) (as saved within the file system) and its [FSItem.Attributes](../../fsitem/attributes.md), along with a `nil` error. If lookup fails, pass the relevant error as the second parameter; FSKit ignores the [FSLookupItemKOIOResult](../../fslookupitemkoioresult.md) instance in this case. For an `async` Swift implementation, there’s no reply handler; simply return the result instance or throw an error.

<a id="discussion"></a>

## Discussion

This method allows the module to opportunistically supply extents, avoiding future calls to [blockmapFile(\_:offset:length:flags:operationID:packer:replyHandler:)](blockmapfile%28__offset_length_flags_operationid_packer_replyhandler_%29.md). Only perform this technique opportunistically. In particular, don’t perform additional I/O to fetch extent data.

## See Also

### Working with items

- [createFile(named:in:attributes:packer:context:replyHandler:)](createfile%28named_in_attributes_packer_context_replyhandler_%29.md): Creates a new file item and map its disk space.
- [FSItem.SetAttributesRequest](../../fsitem/setattributesrequest.md): A request to set attributes on an item.
- [FSCreateFileKOIOResult](../../fscreatefilekoioresult.md): The result of a kernel-offloaded create-file call.
- [FSLookupItemKOIOResult](../../fslookupitemkoioresult.md): The result of a kernel-offloaded lookup-item call.
- [preallocateSpace(for:at:length:flags:packer:context:replyHandler:)](preallocatespace%28for_at_length_flags_packer_context_replyhandler_%29.md): Preallocates and maps disk space for the given file.
- [FSVolume.PreallocateFlags](../preallocateflags.md): Behavior flags for preallocation operations.
- [FSPreallocateKOIOResult](../../fspreallocatekoioresult.md): The result of a kernel-offloaded preallocate call.

# lookupItemNamed:inDirectory:packer:context:replyHandler: (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Looks up an item within a directory and maps its disk space.

## Declaration

```objectivec
- (void) lookupItemNamed:(FSFileName *) name inDirectory:(FSItem *) directory packer:(FSExtentPacker *) packer context:(FSContext *) context replyHandler:(void (^)(FSLookupItemKOIOResult *result, NSError *error)) reply;
```

## Parameters

- `name`: The name of the file to look up.
- `directory`: The directory in which to look up the file.
- `packer`: An extent packer you use to pack the file’s allocated disk space.
- `context`: An object that enables context-aware file system decisions throughout the operation.
- `reply`: A block or closure to indicate success or failure. If lookup succeeds, pass an instance of [FSLookupItemKOIOResult](../../fslookupitemkoioresult.md) containing the found [FSItem](../../fsitem.md) together with its [FSFileName](../../fsfilename.md) (as saved within the file system) and its [FSItemAttributes](../../fsitem/attributes.md), along with a `nil` error. If lookup fails, pass the relevant error as the second parameter; FSKit ignores the [FSLookupItemKOIOResult](../../fslookupitemkoioresult.md) instance in this case. For an `async` Swift implementation, there’s no reply handler; simply return the result instance or throw an error.

<a id="discussion"></a>

## Discussion

This method allows the module to opportunistically supply extents, avoiding future calls to [blockmapFile:offset:length:flags:operationID:packer:replyHandler:](blockmapfile%28__offset_length_flags_operationid_packer_replyhandler_%29.md). Only perform this technique opportunistically. In particular, don’t perform additional I/O to fetch extent data.

## See Also

### Working with items

- [createFileNamed:inDirectory:attributes:packer:context:replyHandler:](createfile%28named_in_attributes_packer_context_replyhandler_%29.md): Creates a new file item and map its disk space.
- [FSItemSetAttributesRequest](../../fsitem/setattributesrequest.md): A request to set attributes on an item.
- [FSCreateFileKOIOResult](../../fscreatefilekoioresult.md): The result of a kernel-offloaded create-file call.
- [FSLookupItemKOIOResult](../../fslookupitemkoioresult.md): The result of a kernel-offloaded lookup-item call.
- [preallocateSpaceForFile:atOffset:length:flags:packer:context:replyHandler:](preallocatespace%28for_at_length_flags_packer_context_replyhandler_%29.md): Preallocates and maps disk space for the given file.
- [FSPreallocateFlags](../preallocateflags.md): Behavior flags for preallocation operations.
- [FSPreallocateKOIOResult](../../fspreallocatekoioresult.md): The result of a kernel-offloaded preallocate call.
