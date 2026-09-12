> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/preallocateflags](https://developer.apple.com/documentation/fskit/fsvolume/preallocateflags)

# FSVolume.PreallocateFlags (Swift)

**Framework:** FSKit  
**Kind:** Structure  
**Availability:** macOS 15.4+

Behavior flags for preallocation operations.

## Declaration

```swift
struct PreallocateFlags
```

## Topics

### Declaring preallocation behaviors

- [contiguous](preallocateflags/contiguous.md): Allocates contiguous space.
- [all](preallocateflags/all.md): Allocates all requested space or no space at all.
- [persist](preallocateflags/persist.md): Allocates space that isn’t freed when deleting the descriptor.
- [fromEOF](preallocateflags/fromeof.md): Allocates space from the physical end of file.

### Working with raw values

- [init(rawValue:)](preallocateflags/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Working with items

- [createFile(named:in:attributes:packer:context:replyHandler:)](kerneloffloadediohandler/createfile%28named_in_attributes_packer_context_replyhandler_%29.md): Creates a new file item and map its disk space.
- [FSItem.SetAttributesRequest](../fsitem/setattributesrequest.md): A request to set attributes on an item.
- [FSCreateFileKOIOResult](../fscreatefilekoioresult.md): The result of a kernel-offloaded create-file call.
- [lookupItem(named:in:packer:context:replyHandler:)](kerneloffloadediohandler/lookupitem%28named_in_packer_context_replyhandler_%29.md): Looks up an item within a directory and maps its disk space.
- [FSLookupItemKOIOResult](../fslookupitemkoioresult.md): The result of a kernel-offloaded lookup-item call.
- [preallocateSpace(for:at:length:flags:packer:context:replyHandler:)](kerneloffloadediohandler/preallocatespace%28for_at_length_flags_packer_context_replyhandler_%29.md): Preallocates and maps disk space for the given file.
- [FSPreallocateKOIOResult](../fspreallocatekoioresult.md): The result of a kernel-offloaded preallocate call.

# FSPreallocateFlags (Objective-C)

**Framework:** FSKit  
**Kind:** Enumeration  
**Availability:** macOS 15.4+

Behavior flags for preallocation operations.

## Declaration

```objectivec
enum FSPreallocateFlags : NSUInteger;
```

## Topics

### Declaring preallocation behaviors

- [FSPreallocateFlagsContiguous](preallocateflags/contiguous.md): Allocates contiguous space.
- [FSPreallocateFlagsAll](preallocateflags/all.md): Allocates all requested space or no space at all.
- [FSPreallocateFlagsPersist](preallocateflags/persist.md): Allocates space that isn’t freed when deleting the descriptor.
- [FSPreallocateFlagsFromEOF](preallocateflags/fromeof.md): Allocates space from the physical end of file.

## See Also

### Working with items

- [createFileNamed:inDirectory:attributes:packer:context:replyHandler:](kerneloffloadediohandler/createfile%28named_in_attributes_packer_context_replyhandler_%29.md): Creates a new file item and map its disk space.
- [FSItemSetAttributesRequest](../fsitem/setattributesrequest.md): A request to set attributes on an item.
- [FSCreateFileKOIOResult](../fscreatefilekoioresult.md): The result of a kernel-offloaded create-file call.
- [lookupItemNamed:inDirectory:packer:context:replyHandler:](kerneloffloadediohandler/lookupitem%28named_in_packer_context_replyhandler_%29.md): Looks up an item within a directory and maps its disk space.
- [FSLookupItemKOIOResult](../fslookupitemkoioresult.md): The result of a kernel-offloaded lookup-item call.
- [preallocateSpaceForFile:atOffset:length:flags:packer:context:replyHandler:](kerneloffloadediohandler/preallocatespace%28for_at_length_flags_packer_context_replyhandler_%29.md): Preallocates and maps disk space for the given file.
- [FSPreallocateKOIOResult](../fspreallocatekoioresult.md): The result of a kernel-offloaded preallocate call.
