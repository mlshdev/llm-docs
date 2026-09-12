> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolumekerneloffloadediooperations](https://developer.apple.com/documentation/fskit/fsvolumekerneloffloadediooperations)

# FSVolumeKernelOffloadedIOOperations (Swift)

**Framework:** FSKit  
**Kind:** Protocol  
**Availability:** macOS 15.4+ (deprecated in 27.0)

Methods and properties implemented by volumes that use kernel-offloaded I/O to achieve higher file transfer performance.

## Declaration

```swift
protocol FSVolumeKernelOffloadedIOOperations : NSObjectProtocol
```

<a id="overview"></a>

## Overview

A volume that conforms to this protocol supplies file extent mappings to FSKit, which allows file data transfers to take place in the kernel. This approach provides higher-performance data transfer than transferring all file data between the module and kernel, while still allowing the file system to run in user space.

This protocol uses *extents* to provide the kernel the logical-to-physical mapping of a given file. An extent describes a physical offset on disk, and a length and a logical offset within the file. You don’t manage extents directly. Instead, FSKit provides you with an [FSExtentPacker](fsextentpacker.md) to define and pack the extents in your implementations of this protocol’s methods.

Most volumes conform to either this protocol or [FSVolume.ReadWriteOperations](fsvolume/readwriteoperations.md). You can conform to both if you need to provide kernel-offloaded I/O only for certain files. In that case, files with the [inhibitKernelOffloadedIO](fsitem/attribute/inhibitkerneloffloadedio.md) attribute set use [FSVolume.ReadWriteOperations](fsvolume/readwriteoperations.md), and those without it use this protocol. A volume that doesn’t conform to either protocol can’t support any file I/O operation.

> **Deprecated**

> Use [FSVolume.KernelOffloadedIOHandler](fsvolume/kerneloffloadediohandler.md) instead.

## Topics

### Performing mapped I/O

- [blockmapFile(\_:offset:length:flags:operationID:packer:replyHandler:)](fsvolumekerneloffloadediooperations/blockmapfile%28__offset_length_flags_operationid_packer_replyhandler_%29.md): Deprecated. Maps a file’s disk space into extents, allowing the kernel to perform I/O with that space.
- [FSBlockmapFlags](fsblockmapflags.md): Flags that describe the behavior of a blockmap operation.
- [completeIO(for:offset:length:status:flags:operationID:replyHandler:)](fsvolumekerneloffloadediooperations/completeio%28for_offset_length_status_flags_operationid_replyhandler_%29.md): Deprecated. Completes an I/O operation for a given file.
- [FSCompleteIOFlags](fscompleteioflags.md): Flags that describe the behavior of an I/O completion operation.

### Working with items

- [createFile(name:in:attributes:packer:replyHandler:)](fsvolumekerneloffloadediooperations/createfile%28name_in_attributes_packer_replyhandler_%29.md): Deprecated. Creates a new file item and map its disk space.
- [FSItem.SetAttributesRequest](fsitem/setattributesrequest.md): A request to set attributes on an item.
- [lookupItem(name:in:packer:replyHandler:)](fsvolumekerneloffloadediooperations/lookupitem%28name_in_packer_replyhandler_%29.md): Deprecated. Looks up an item within a directory and maps its disk space.
- [preallocateSpace(for:at:length:flags:packer:replyHandler:)](fsvolumekerneloffloadediooperations/preallocatespace%28for_at_length_flags_packer_replyhandler_%29.md): Deprecated. Preallocates and maps disk space for the given file.
- [FSVolume.PreallocateFlags](fsvolume/preallocateflags.md): Behavior flags for preallocation operations.

### Mapping file extents

- [FSExtentPacker](fsextentpacker.md): A type that directs the kernel to map space on disk to a specific file managed by this file system.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Deprecated

- [FSVolume.Operations](fsvolume/operations.md): Deprecated. Methods that all volumes implement to provide required capabilities.
- [FSVolume.OpenCloseOperations](fsvolume/opencloseoperations.md): Deprecated. Methods and properties implemented by volumes that want to receive open and close calls for each item.
- [FSVolume.ReadWriteOperations](fsvolume/readwriteoperations.md): Deprecated. Methods implemented for read and write operations that deliver data to and from the extension.
- [FSVolume.AccessCheckOperations](fsvolume/accesscheckoperations.md): Deprecated. Methods and properties implemented by volumes that want to enforce access check operations.
- [FSVolume.RenameOperations](fsvolume/renameoperations.md): Deprecated. Methods and properties implemented by volumes that support renaming the volume.
- [FSVolume.PreallocateOperations](fsvolume/preallocateoperations.md): Deprecated. Methods and properties implemented by volumes that want to offer preallocation functions.
- [FSVolume.XattrOperations](fsvolume/xattroperations.md): Deprecated. Methods and properties implemented by volumes that natively or partially support extended attributes.
- [FSVolume.ItemDeactivation](fsvolume/itemdeactivation.md): Deprecated. Methods and properties implemented by volumes that support deactivating items.

# FSVolumeKernelOffloadedIOOperations (Objective-C)

**Framework:** FSKit  
**Kind:** Protocol  
**Availability:** macOS 15.4+ (deprecated in 27.0)

Methods and properties implemented by volumes that use kernel-offloaded I/O to achieve higher file transfer performance.

## Declaration

```objectivec
@protocol FSVolumeKernelOffloadedIOOperations <NSObject>
```

<a id="overview"></a>

## Overview

A volume that conforms to this protocol supplies file extent mappings to FSKit, which allows file data transfers to take place in the kernel. This approach provides higher-performance data transfer than transferring all file data between the module and kernel, while still allowing the file system to run in user space.

This protocol uses *extents* to provide the kernel the logical-to-physical mapping of a given file. An extent describes a physical offset on disk, and a length and a logical offset within the file. You don’t manage extents directly. Instead, FSKit provides you with an [FSExtentPacker](fsextentpacker.md) to define and pack the extents in your implementations of this protocol’s methods.

Most volumes conform to either this protocol or [FSVolumeReadWriteOperations](fsvolume/readwriteoperations.md). You can conform to both if you need to provide kernel-offloaded I/O only for certain files. In that case, files with the [FSItemAttributeInhibitKernelOffloadedIO](fsitem/attribute/inhibitkerneloffloadedio.md) attribute set use [FSVolumeReadWriteOperations](fsvolume/readwriteoperations.md), and those without it use this protocol. A volume that doesn’t conform to either protocol can’t support any file I/O operation.

> **Deprecated**

> Use [FSVolumeKernelOffloadedIOHandler](fsvolume/kerneloffloadediohandler.md) instead.

## Topics

### Performing mapped I/O

- [blockmapFile:offset:length:flags:operationID:packer:replyHandler:](fsvolumekerneloffloadediooperations/blockmapfile%28__offset_length_flags_operationid_packer_replyhandler_%29.md): Deprecated. Maps a file’s disk space into extents, allowing the kernel to perform I/O with that space.
- [FSBlockmapFlags](fsblockmapflags.md): Flags that describe the behavior of a blockmap operation.
- [completeIOForFile:offset:length:status:flags:operationID:replyHandler:](fsvolumekerneloffloadediooperations/completeio%28for_offset_length_status_flags_operationid_replyhandler_%29.md): Deprecated. Completes an I/O operation for a given file.
- [FSCompleteIOFlags](fscompleteioflags.md): Flags that describe the behavior of an I/O completion operation.

### Working with items

- [createFileNamed:inDirectory:attributes:packer:replyHandler:](fsvolumekerneloffloadediooperations/createfile%28name_in_attributes_packer_replyhandler_%29.md): Deprecated. Creates a new file item and map its disk space.
- [FSItemSetAttributesRequest](fsitem/setattributesrequest.md): A request to set attributes on an item.
- [lookupItemNamed:inDirectory:packer:replyHandler:](fsvolumekerneloffloadediooperations/lookupitem%28name_in_packer_replyhandler_%29.md): Deprecated. Looks up an item within a directory and maps its disk space.
- [preallocateSpaceForFile:atOffset:length:flags:packer:replyHandler:](fsvolumekerneloffloadediooperations/preallocatespace%28for_at_length_flags_packer_replyhandler_%29.md): Deprecated. Preallocates and maps disk space for the given file.
- [FSPreallocateFlags](fsvolume/preallocateflags.md): Behavior flags for preallocation operations.

### Mapping file extents

- [FSExtentPacker](fsextentpacker.md): A type that directs the kernel to map space on disk to a specific file managed by this file system.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Deprecated

- [FSVolumeOperations](fsvolume/operations.md): Deprecated. Methods that all volumes implement to provide required capabilities.
- [FSVolumeOpenCloseOperations](fsvolume/opencloseoperations.md): Deprecated. Methods and properties implemented by volumes that want to receive open and close calls for each item.
- [FSVolumeReadWriteOperations](fsvolume/readwriteoperations.md): Deprecated. Methods implemented for read and write operations that deliver data to and from the extension.
- [FSVolumeAccessCheckOperations](fsvolume/accesscheckoperations.md): Deprecated. Methods and properties implemented by volumes that want to enforce access check operations.
- [FSVolumeRenameOperations](fsvolume/renameoperations.md): Deprecated. Methods and properties implemented by volumes that support renaming the volume.
- [FSVolumePreallocateOperations](fsvolume/preallocateoperations.md): Deprecated. Methods and properties implemented by volumes that want to offer preallocation functions.
- [FSVolumeXattrOperations](fsvolume/xattroperations.md): Deprecated. Methods and properties implemented by volumes that natively or partially support extended attributes.
- [FSVolumeItemDeactivation](fsvolume/itemdeactivation.md): Deprecated. Methods and properties implemented by volumes that support deactivating items.
