> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/kerneloffloadediohandler](https://developer.apple.com/documentation/fskit/fsvolume/kerneloffloadediohandler)

# FSVolume.KernelOffloadedIOHandler (Swift)

**Framework:** FSKit  
**Kind:** Protocol  
**Availability:** macOS 27.0+

Methods and properties implemented by volumes that use kernel-offloaded I/O to achieve higher file transfer performance.

## Declaration

```swift
protocol KernelOffloadedIOHandler : NSObjectProtocol
```

<a id="overview"></a>

## Overview

A volume that conforms to this protocol supplies file extent mappings to FSKit, which allows file data transfers to take place in the kernel. This approach provides higher-performance data transfer than transferring all file data between the module and kernel, while still allowing the file system to run in user space.

This protocol uses *extents* to provide the kernel the logical-to-physical mapping of a given file. An extent describes a physical offset on disk, and a length and a logical offset within the file. You don’t manage extents directly. Instead, FSKit provides you with an [FSExtentPacker](../fsextentpacker.md) to define and pack the extents in your implementations of this protocol’s methods.

Most volumes conform to either this protocol or [FSVolume.ReadWriteHandler](readwritehandler.md). You can conform to both if you need to provide kernel-offloaded I/O only for certain files. In that case, files with the [inhibitKernelOffloadedIO](../fsitem/attribute/inhibitkerneloffloadedio.md) attribute set use [FSVolume.ReadWriteHandler](readwritehandler.md), and those without it use this protocol. A volume that doesn’t conform to either protocol can’t support any file I/O operation.

> **Important**

> This protocol replaces the [FSVolumeKernelOffloadedIOOperations](../fsvolumekerneloffloadediooperations.md) protocol. It exposes the same functionality, while using [FSVolumeHandlerResult](../fsvolumehandlerresult.md) objects. These objects add the ability to reply with [FSItem.Attributes](../fsitem/attributes.md) and free space from the relevant methods.

## Topics

### Performing mapped I/O

- [blockmapFile(\_:offset:length:flags:operationID:packer:replyHandler:)](kerneloffloadediohandler/blockmapfile%28__offset_length_flags_operationid_packer_replyhandler_%29.md): Maps a file’s disk space into extents, allowing the kernel to perform I/O with that space.
- [FSBlockmapFlags](../fsblockmapflags.md): Flags that describe the behavior of a blockmap operation.
- [FSBlockmapResult](../fsblockmapresult.md): The result of a blockmap call.
- [completeIO(for:offset:length:status:flags:operationID:replyHandler:)](kerneloffloadediohandler/completeio%28for_offset_length_status_flags_operationid_replyhandler_%29.md): Completes an I/O operation for a given file.
- [FSCompleteIOFlags](../fscompleteioflags.md): Flags that describe the behavior of an I/O completion operation.
- [FSCompleteIOResult](../fscompleteioresult.md): The result of a complete-I/O call.

### Working with items

- [createFile(named:in:attributes:packer:context:replyHandler:)](kerneloffloadediohandler/createfile%28named_in_attributes_packer_context_replyhandler_%29.md): Creates a new file item and map its disk space.
- [FSItem.SetAttributesRequest](../fsitem/setattributesrequest.md): A request to set attributes on an item.
- [FSCreateFileKOIOResult](../fscreatefilekoioresult.md): The result of a kernel-offloaded create-file call.
- [lookupItem(named:in:packer:context:replyHandler:)](kerneloffloadediohandler/lookupitem%28named_in_packer_context_replyhandler_%29.md): Looks up an item within a directory and maps its disk space.
- [FSLookupItemKOIOResult](../fslookupitemkoioresult.md): The result of a kernel-offloaded lookup-item call.
- [preallocateSpace(for:at:length:flags:packer:context:replyHandler:)](kerneloffloadediohandler/preallocatespace%28for_at_length_flags_packer_context_replyhandler_%29.md): Preallocates and maps disk space for the given file.
- [FSVolume.PreallocateFlags](preallocateflags.md): Behavior flags for preallocation operations.
- [FSPreallocateKOIOResult](../fspreallocatekoioresult.md): The result of a kernel-offloaded preallocate call.

### Mapping file extents

- [FSExtentPacker](../fsextentpacker.md): A type that directs the kernel to map space on disk to a specific file managed by this file system.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Implementing optional handlers

- [FSVolume.OpenCloseHandler](openclosehandler.md): Methods and properties implemented by volumes that want to receive open and close calls for each item.
- [FSVolume.ReadWriteHandler](readwritehandler.md): Methods implemented for read and write operations that deliver data to and from the extension.
- [FSVolume.AccessCheckHandler](accesscheckhandler.md): Methods and properties implemented by volumes that want to enforce access check operations.
- [FSVolume.RenameHandler](renamehandler.md): Methods and properties implemented by volumes that support renaming the volume.
- [FSVolume.PreallocateHandler](preallocatehandler.md): Methods and properties implemented by volumes that want to offer preallocation functions.
- [FSVolume.XattrHandler](xattrhandler.md): Methods and properties implemented by volumes that natively or partially support extended attributes.
- [FSVolume.ItemDeactivationHandler](itemdeactivationhandler.md): Methods and properties implemented by volumes that support deactivating items.
- [FSVolume.DataCacheHandler](datacachehandler.md): Methods and properties implemented by volumes that coordinate kernel-level data caching.
- [FSVolume.SeekRegionHandler](seekregionhandler.md): Methods and properties implemented by volumes that support seek operations

# FSVolumeKernelOffloadedIOHandler (Objective-C)

**Framework:** FSKit  
**Kind:** Protocol  
**Availability:** macOS 27.0+

Methods and properties implemented by volumes that use kernel-offloaded I/O to achieve higher file transfer performance.

## Declaration

```objectivec
@protocol FSVolumeKernelOffloadedIOHandler <NSObject>
```

<a id="overview"></a>

## Overview

A volume that conforms to this protocol supplies file extent mappings to FSKit, which allows file data transfers to take place in the kernel. This approach provides higher-performance data transfer than transferring all file data between the module and kernel, while still allowing the file system to run in user space.

This protocol uses *extents* to provide the kernel the logical-to-physical mapping of a given file. An extent describes a physical offset on disk, and a length and a logical offset within the file. You don’t manage extents directly. Instead, FSKit provides you with an [FSExtentPacker](../fsextentpacker.md) to define and pack the extents in your implementations of this protocol’s methods.

Most volumes conform to either this protocol or [FSVolumeReadWriteHandler](readwritehandler.md). You can conform to both if you need to provide kernel-offloaded I/O only for certain files. In that case, files with the [FSItemAttributeInhibitKernelOffloadedIO](../fsitem/attribute/inhibitkerneloffloadedio.md) attribute set use [FSVolumeReadWriteHandler](readwritehandler.md), and those without it use this protocol. A volume that doesn’t conform to either protocol can’t support any file I/O operation.

> **Important**

> This protocol replaces the [FSVolumeKernelOffloadedIOOperations](../fsvolumekerneloffloadediooperations.md) protocol. It exposes the same functionality, while using [FSVolumeHandlerResult](../fsvolumehandlerresult.md) objects. These objects add the ability to reply with [FSItemAttributes](../fsitem/attributes.md) and free space from the relevant methods.

## Topics

### Performing mapped I/O

- [blockmapFile:offset:length:flags:operationID:packer:replyHandler:](kerneloffloadediohandler/blockmapfile%28__offset_length_flags_operationid_packer_replyhandler_%29.md): Maps a file’s disk space into extents, allowing the kernel to perform I/O with that space.
- [FSBlockmapFlags](../fsblockmapflags.md): Flags that describe the behavior of a blockmap operation.
- [FSBlockmapResult](../fsblockmapresult.md): The result of a blockmap call.
- [completeIOForFile:offset:length:status:flags:operationID:replyHandler:](kerneloffloadediohandler/completeio%28for_offset_length_status_flags_operationid_replyhandler_%29.md): Completes an I/O operation for a given file.
- [FSCompleteIOFlags](../fscompleteioflags.md): Flags that describe the behavior of an I/O completion operation.
- [FSCompleteIOResult](../fscompleteioresult.md): The result of a complete-I/O call.

### Working with items

- [createFileNamed:inDirectory:attributes:packer:context:replyHandler:](kerneloffloadediohandler/createfile%28named_in_attributes_packer_context_replyhandler_%29.md): Creates a new file item and map its disk space.
- [FSItemSetAttributesRequest](../fsitem/setattributesrequest.md): A request to set attributes on an item.
- [FSCreateFileKOIOResult](../fscreatefilekoioresult.md): The result of a kernel-offloaded create-file call.
- [lookupItemNamed:inDirectory:packer:context:replyHandler:](kerneloffloadediohandler/lookupitem%28named_in_packer_context_replyhandler_%29.md): Looks up an item within a directory and maps its disk space.
- [FSLookupItemKOIOResult](../fslookupitemkoioresult.md): The result of a kernel-offloaded lookup-item call.
- [preallocateSpaceForFile:atOffset:length:flags:packer:context:replyHandler:](kerneloffloadediohandler/preallocatespace%28for_at_length_flags_packer_context_replyhandler_%29.md): Preallocates and maps disk space for the given file.
- [FSPreallocateFlags](preallocateflags.md): Behavior flags for preallocation operations.
- [FSPreallocateKOIOResult](../fspreallocatekoioresult.md): The result of a kernel-offloaded preallocate call.

### Mapping file extents

- [FSExtentPacker](../fsextentpacker.md): A type that directs the kernel to map space on disk to a specific file managed by this file system.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Implementing optional handlers

- [FSVolumeOpenCloseHandler](openclosehandler.md): Methods and properties implemented by volumes that want to receive open and close calls for each item.
- [FSVolumeReadWriteHandler](readwritehandler.md): Methods implemented for read and write operations that deliver data to and from the extension.
- [FSVolumeAccessCheckHandler](accesscheckhandler.md): Methods and properties implemented by volumes that want to enforce access check operations.
- [FSVolumeRenameHandler](renamehandler.md): Methods and properties implemented by volumes that support renaming the volume.
- [FSVolumePreallocateHandler](preallocatehandler.md): Methods and properties implemented by volumes that want to offer preallocation functions.
- [FSVolumeXattrHandler](xattrhandler.md): Methods and properties implemented by volumes that natively or partially support extended attributes.
- [FSVolumeItemDeactivationHandler](itemdeactivationhandler.md): Methods and properties implemented by volumes that support deactivating items.
- [FSVolumeDataCacheHandler](datacachehandler.md): Methods and properties implemented by volumes that coordinate kernel-level data caching.
- [FSVolumeSeekRegionHandler](seekregionhandler.md): Methods and properties implemented by volumes that support seek operations
