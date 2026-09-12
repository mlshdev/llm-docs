> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/preallocateoperations](https://developer.apple.com/documentation/fskit/fsvolume/preallocateoperations)

# FSVolume.PreallocateOperations (Swift)

**Framework:** FSKit  
**Kind:** Protocol  
**Availability:** macOS 15.4+ (deprecated in 27.0)

Methods and properties implemented by volumes that want to offer preallocation functions.

## Declaration

```swift
protocol PreallocateOperations : NSObjectProtocol
```

<a id="overview"></a>

## Overview

A preallocation operation allocates space for a file without writing to it yet. A file system may use reallocation to avoid performing space allocation while in the midst of I/O; this strategy improves performance. Also, if the expected I/O pattern is many small writes, preallocating contiguous chunks may prevent fragmenting the file system. This process can improve performance later.

In a kernel-based file system, you typically preallocate space with the `VNOP_ALLOCATE` operation, called from `fcntl(F_PREALLOCATE)`.

> **Deprecated**

> Use [FSVolume.PreallocateHandler](preallocatehandler.md) instead.

## Topics

### Preallocating space

- [preallocateSpace(for:at:length:flags:replyHandler:)](preallocateoperations/preallocatespace%28for_at_length_flags_replyhandler_%29.md): Deprecated. Preallocates disk space for the given item.
- [FSVolume.PreallocateFlags](preallocateflags.md): Behavior flags for preallocation operations.

### Inspecting volume properties

- [isPreallocateInhibited](preallocateoperations/ispreallocateinhibited.md): Deprecated. A Boolean value that instructs FSKit not to call this protocol’s methods, even if the volume conforms to it.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Deprecated

- [FSVolume.Operations](operations.md): Deprecated. Methods that all volumes implement to provide required capabilities.
- [FSVolume.OpenCloseOperations](opencloseoperations.md): Deprecated. Methods and properties implemented by volumes that want to receive open and close calls for each item.
- [FSVolume.ReadWriteOperations](readwriteoperations.md): Deprecated. Methods implemented for read and write operations that deliver data to and from the extension.
- [FSVolume.AccessCheckOperations](accesscheckoperations.md): Deprecated. Methods and properties implemented by volumes that want to enforce access check operations.
- [FSVolume.RenameOperations](renameoperations.md): Deprecated. Methods and properties implemented by volumes that support renaming the volume.
- [FSVolume.XattrOperations](xattroperations.md): Deprecated. Methods and properties implemented by volumes that natively or partially support extended attributes.
- [FSVolume.ItemDeactivation](itemdeactivation.md): Deprecated. Methods and properties implemented by volumes that support deactivating items.
- [FSVolumeKernelOffloadedIOOperations](../fsvolumekerneloffloadediooperations.md): Deprecated. Methods and properties implemented by volumes that use kernel-offloaded I/O to achieve higher file transfer performance.

# FSVolumePreallocateOperations (Objective-C)

**Framework:** FSKit  
**Kind:** Protocol  
**Availability:** macOS 15.4+ (deprecated in 27.0)

Methods and properties implemented by volumes that want to offer preallocation functions.

## Declaration

```objectivec
@protocol FSVolumePreallocateOperations <NSObject>
```

<a id="overview"></a>

## Overview

A preallocation operation allocates space for a file without writing to it yet. A file system may use reallocation to avoid performing space allocation while in the midst of I/O; this strategy improves performance. Also, if the expected I/O pattern is many small writes, preallocating contiguous chunks may prevent fragmenting the file system. This process can improve performance later.

In a kernel-based file system, you typically preallocate space with the `VNOP_ALLOCATE` operation, called from `fcntl(F_PREALLOCATE)`.

> **Deprecated**

> Use [FSVolumePreallocateHandler](preallocatehandler.md) instead.

## Topics

### Preallocating space

- [preallocateSpaceForItem:atOffset:length:flags:replyHandler:](preallocateoperations/preallocatespace%28for_at_length_flags_replyhandler_%29.md): Deprecated. Preallocates disk space for the given item.
- [FSPreallocateFlags](preallocateflags.md): Behavior flags for preallocation operations.

### Inspecting volume properties

- [preallocateInhibited](preallocateoperations/ispreallocateinhibited.md): Deprecated. A Boolean value that instructs FSKit not to call this protocol’s methods, even if the volume conforms to it.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Deprecated

- [FSVolumeOperations](operations.md): Deprecated. Methods that all volumes implement to provide required capabilities.
- [FSVolumeOpenCloseOperations](opencloseoperations.md): Deprecated. Methods and properties implemented by volumes that want to receive open and close calls for each item.
- [FSVolumeReadWriteOperations](readwriteoperations.md): Deprecated. Methods implemented for read and write operations that deliver data to and from the extension.
- [FSVolumeAccessCheckOperations](accesscheckoperations.md): Deprecated. Methods and properties implemented by volumes that want to enforce access check operations.
- [FSVolumeRenameOperations](renameoperations.md): Deprecated. Methods and properties implemented by volumes that support renaming the volume.
- [FSVolumeXattrOperations](xattroperations.md): Deprecated. Methods and properties implemented by volumes that natively or partially support extended attributes.
- [FSVolumeItemDeactivation](itemdeactivation.md): Deprecated. Methods and properties implemented by volumes that support deactivating items.
- [FSVolumeKernelOffloadedIOOperations](../fsvolumekerneloffloadediooperations.md): Deprecated. Methods and properties implemented by volumes that use kernel-offloaded I/O to achieve higher file transfer performance.
