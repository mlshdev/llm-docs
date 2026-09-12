> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fslookupitemkoioresult](https://developer.apple.com/documentation/fskit/fslookupitemkoioresult)

# FSLookupItemKOIOResult (Swift)

**Framework:** FSKit  
**Kind:** Class  
**Availability:** macOS 27.0+

The result of a kernel-offloaded lookup-item call.

## Declaration

```swift
class FSLookupItemKOIOResult
```

<a id="overview"></a>

## Overview

Use this type in your implementation of [lookupItem(named:in:packer:context:replyHandler:)](fsvolume/kerneloffloadediohandler/lookupitem%28named_in_packer_context_replyhandler_%29.md).

## Relationships

### Inherits From

- [FSLookupItemResult](fslookupitemresult.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Working with items

- [createFile(named:in:attributes:packer:context:replyHandler:)](fsvolume/kerneloffloadediohandler/createfile%28named_in_attributes_packer_context_replyhandler_%29.md): Creates a new file item and map its disk space.
- [FSItem.SetAttributesRequest](fsitem/setattributesrequest.md): A request to set attributes on an item.
- [FSCreateFileKOIOResult](fscreatefilekoioresult.md): The result of a kernel-offloaded create-file call.
- [lookupItem(named:in:packer:context:replyHandler:)](fsvolume/kerneloffloadediohandler/lookupitem%28named_in_packer_context_replyhandler_%29.md): Looks up an item within a directory and maps its disk space.
- [preallocateSpace(for:at:length:flags:packer:context:replyHandler:)](fsvolume/kerneloffloadediohandler/preallocatespace%28for_at_length_flags_packer_context_replyhandler_%29.md): Preallocates and maps disk space for the given file.
- [FSVolume.PreallocateFlags](fsvolume/preallocateflags.md): Behavior flags for preallocation operations.
- [FSPreallocateKOIOResult](fspreallocatekoioresult.md): The result of a kernel-offloaded preallocate call.

# FSLookupItemKOIOResult (Objective-C)

**Framework:** FSKit  
**Kind:** Class  
**Availability:** macOS 27.0+

The result of a kernel-offloaded lookup-item call.

## Declaration

```objectivec
@interface FSLookupItemKOIOResult : FSLookupItemResult
```

<a id="overview"></a>

## Overview

Use this type in your implementation of [lookupItemNamed:inDirectory:packer:context:replyHandler:](fsvolume/kerneloffloadediohandler/lookupitem%28named_in_packer_context_replyhandler_%29.md).

## Relationships

### Inherits From

- [FSLookupItemResult](fslookupitemresult.md)

## See Also

### Working with items

- [createFileNamed:inDirectory:attributes:packer:context:replyHandler:](fsvolume/kerneloffloadediohandler/createfile%28named_in_attributes_packer_context_replyhandler_%29.md): Creates a new file item and map its disk space.
- [FSItemSetAttributesRequest](fsitem/setattributesrequest.md): A request to set attributes on an item.
- [FSCreateFileKOIOResult](fscreatefilekoioresult.md): The result of a kernel-offloaded create-file call.
- [lookupItemNamed:inDirectory:packer:context:replyHandler:](fsvolume/kerneloffloadediohandler/lookupitem%28named_in_packer_context_replyhandler_%29.md): Looks up an item within a directory and maps its disk space.
- [preallocateSpaceForFile:atOffset:length:flags:packer:context:replyHandler:](fsvolume/kerneloffloadediohandler/preallocatespace%28for_at_length_flags_packer_context_replyhandler_%29.md): Preallocates and maps disk space for the given file.
- [FSPreallocateFlags](fsvolume/preallocateflags.md): Behavior flags for preallocation operations.
- [FSPreallocateKOIOResult](fspreallocatekoioresult.md): The result of a kernel-offloaded preallocate call.
