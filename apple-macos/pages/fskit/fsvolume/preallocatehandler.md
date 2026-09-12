> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/preallocatehandler](https://developer.apple.com/documentation/fskit/fsvolume/preallocatehandler)

# FSVolume.PreallocateHandler (Swift)

**Framework:** FSKit  
**Kind:** Protocol  
**Availability:** macOS 27.0+

Methods and properties implemented by volumes that want to offer preallocation functions.

## Declaration

```swift
protocol PreallocateHandler : NSObjectProtocol
```

<a id="overview"></a>

## Overview

A preallocation operation allocates space for a file without writing to it yet. A file system may use reallocation to avoid performing space allocation while in the midst of I/O; this strategy improves performance. Also, if the expected I/O pattern is many small writes, preallocating contiguous chunks may prevent fragmenting the file system. This process can improve performance later.

In a kernel-based file system, you typically preallocate space with the `VNOP_ALLOCATE` operation, called from `fcntl(F_PREALLOCATE)`.

> **Important**

> This protocol replaces the [FSVolume.PreallocateOperations](preallocateoperations.md) protocol. It exposes the same functionality, while using the [FSPreallocateResult](../fspreallocateresult.md) object. This objects adds the ability to reply with [FSItem.Attributes](../fsitem/attributes.md) and free space from [preallocateSpace(for:at:length:flags:context:replyHandler:)](preallocatehandler/preallocatespace%28for_at_length_flags_context_replyhandler_%29.md).

## Topics

### Preallocating space

- [preallocateSpace(for:at:length:flags:context:replyHandler:)](preallocatehandler/preallocatespace%28for_at_length_flags_context_replyhandler_%29.md): Preallocates disk space for the given item.
- [FSVolume.PreallocateFlags](preallocateflags.md): Behavior flags for preallocation operations.
- [FSPreallocateResult](../fspreallocateresult.md): The result of a preallocate call.

### Inspecting volume properties

- [isPreallocateInhibited](preallocatehandler/ispreallocateinhibited.md): A Boolean value that instructs FSKit not to call this protocol’s methods, even if the volume conforms to it.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Implementing optional handlers

- [FSVolume.OpenCloseHandler](openclosehandler.md): Methods and properties implemented by volumes that want to receive open and close calls for each item.
- [FSVolume.ReadWriteHandler](readwritehandler.md): Methods implemented for read and write operations that deliver data to and from the extension.
- [FSVolume.AccessCheckHandler](accesscheckhandler.md): Methods and properties implemented by volumes that want to enforce access check operations.
- [FSVolume.RenameHandler](renamehandler.md): Methods and properties implemented by volumes that support renaming the volume.
- [FSVolume.XattrHandler](xattrhandler.md): Methods and properties implemented by volumes that natively or partially support extended attributes.
- [FSVolume.ItemDeactivationHandler](itemdeactivationhandler.md): Methods and properties implemented by volumes that support deactivating items.
- [FSVolume.KernelOffloadedIOHandler](kerneloffloadediohandler.md): Methods and properties implemented by volumes that use kernel-offloaded I/O to achieve higher file transfer performance.
- [FSVolume.DataCacheHandler](datacachehandler.md): Methods and properties implemented by volumes that coordinate kernel-level data caching.
- [FSVolume.SeekRegionHandler](seekregionhandler.md): Methods and properties implemented by volumes that support seek operations

# FSVolumePreallocateHandler (Objective-C)

**Framework:** FSKit  
**Kind:** Protocol  
**Availability:** macOS 27.0+

Methods and properties implemented by volumes that want to offer preallocation functions.

## Declaration

```objectivec
@protocol FSVolumePreallocateHandler <NSObject>
```

<a id="overview"></a>

## Overview

A preallocation operation allocates space for a file without writing to it yet. A file system may use reallocation to avoid performing space allocation while in the midst of I/O; this strategy improves performance. Also, if the expected I/O pattern is many small writes, preallocating contiguous chunks may prevent fragmenting the file system. This process can improve performance later.

In a kernel-based file system, you typically preallocate space with the `VNOP_ALLOCATE` operation, called from `fcntl(F_PREALLOCATE)`.

> **Important**

> This protocol replaces the [FSVolumePreallocateOperations](preallocateoperations.md) protocol. It exposes the same functionality, while using the [FSPreallocateResult](../fspreallocateresult.md) object. This objects adds the ability to reply with [FSItemAttributes](../fsitem/attributes.md) and free space from [preallocateSpaceForItem:atOffset:length:flags:context:replyHandler:](preallocatehandler/preallocatespace%28for_at_length_flags_context_replyhandler_%29.md).

## Topics

### Preallocating space

- [preallocateSpaceForItem:atOffset:length:flags:context:replyHandler:](preallocatehandler/preallocatespace%28for_at_length_flags_context_replyhandler_%29.md): Preallocates disk space for the given item.
- [FSPreallocateFlags](preallocateflags.md): Behavior flags for preallocation operations.
- [FSPreallocateResult](../fspreallocateresult.md): The result of a preallocate call.

### Inspecting volume properties

- [preallocateInhibited](preallocatehandler/ispreallocateinhibited.md): A Boolean value that instructs FSKit not to call this protocol’s methods, even if the volume conforms to it.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Implementing optional handlers

- [FSVolumeOpenCloseHandler](openclosehandler.md): Methods and properties implemented by volumes that want to receive open and close calls for each item.
- [FSVolumeReadWriteHandler](readwritehandler.md): Methods implemented for read and write operations that deliver data to and from the extension.
- [FSVolumeAccessCheckHandler](accesscheckhandler.md): Methods and properties implemented by volumes that want to enforce access check operations.
- [FSVolumeRenameHandler](renamehandler.md): Methods and properties implemented by volumes that support renaming the volume.
- [FSVolumeXattrHandler](xattrhandler.md): Methods and properties implemented by volumes that natively or partially support extended attributes.
- [FSVolumeItemDeactivationHandler](itemdeactivationhandler.md): Methods and properties implemented by volumes that support deactivating items.
- [FSVolumeKernelOffloadedIOHandler](kerneloffloadediohandler.md): Methods and properties implemented by volumes that use kernel-offloaded I/O to achieve higher file transfer performance.
- [FSVolumeDataCacheHandler](datacachehandler.md): Methods and properties implemented by volumes that coordinate kernel-level data caching.
- [FSVolumeSeekRegionHandler](seekregionhandler.md): Methods and properties implemented by volumes that support seek operations
