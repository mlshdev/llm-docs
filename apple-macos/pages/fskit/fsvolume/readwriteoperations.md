> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/readwriteoperations](https://developer.apple.com/documentation/fskit/fsvolume/readwriteoperations)

# FSVolume.ReadWriteOperations (Swift)

**Framework:** FSKit  
**Kind:** Protocol  
**Availability:** macOS 15.4+ (deprecated in 27.0)

Methods implemented for read and write operations that deliver data to and from the extension.

## Declaration

```swift
protocol ReadWriteOperations : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Most volumes conform to either this protocol or [FSVolumeKernelOffloadedIOOperations](../fsvolumekerneloffloadediooperations.md). You can conform to both if you need to provide kernel-offloaded I/O only for certain files. In that case, files with the [inhibitKernelOffloadedIO](../fsitem/attribute/inhibitkerneloffloadedio.md) attribute set use this protocol, and those without it use [FSVolumeKernelOffloadedIOOperations](../fsvolumekerneloffloadediooperations.md). A volume that doesn’t conform to either protocol can’t support any I/O operation.

> **Deprecated**

> Use [FSVolume.ReadWriteHandler](readwritehandler.md) instead.

## Topics

### Reading and writing

- [read(from:at:length:into:replyHandler:)](readwriteoperations/read%28from_at_length_into_replyhandler_%29.md): Deprecated. Reads the contents of the given file item.
- [FSMutableFileDataBuffer](../fsmutablefiledatabuffer.md): A wrapper object for a data buffer.
- [write(contents:to:at:replyHandler:)](readwriteoperations/write%28contents_to_at_replyhandler_%29.md): Deprecated. Writes contents to the given file item.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Deprecated

- [FSVolume.Operations](operations.md): Deprecated. Methods that all volumes implement to provide required capabilities.
- [FSVolume.OpenCloseOperations](opencloseoperations.md): Deprecated. Methods and properties implemented by volumes that want to receive open and close calls for each item.
- [FSVolume.AccessCheckOperations](accesscheckoperations.md): Deprecated. Methods and properties implemented by volumes that want to enforce access check operations.
- [FSVolume.RenameOperations](renameoperations.md): Deprecated. Methods and properties implemented by volumes that support renaming the volume.
- [FSVolume.PreallocateOperations](preallocateoperations.md): Deprecated. Methods and properties implemented by volumes that want to offer preallocation functions.
- [FSVolume.XattrOperations](xattroperations.md): Deprecated. Methods and properties implemented by volumes that natively or partially support extended attributes.
- [FSVolume.ItemDeactivation](itemdeactivation.md): Deprecated. Methods and properties implemented by volumes that support deactivating items.
- [FSVolumeKernelOffloadedIOOperations](../fsvolumekerneloffloadediooperations.md): Deprecated. Methods and properties implemented by volumes that use kernel-offloaded I/O to achieve higher file transfer performance.

# FSVolumeReadWriteOperations (Objective-C)

**Framework:** FSKit  
**Kind:** Protocol  
**Availability:** macOS 15.4+ (deprecated in 27.0)

Methods implemented for read and write operations that deliver data to and from the extension.

## Declaration

```objectivec
@protocol FSVolumeReadWriteOperations <NSObject>
```

<a id="overview"></a>

## Overview

Most volumes conform to either this protocol or [FSVolumeKernelOffloadedIOOperations](../fsvolumekerneloffloadediooperations.md). You can conform to both if you need to provide kernel-offloaded I/O only for certain files. In that case, files with the [FSItemAttributeInhibitKernelOffloadedIO](../fsitem/attribute/inhibitkerneloffloadedio.md) attribute set use this protocol, and those without it use [FSVolumeKernelOffloadedIOOperations](../fsvolumekerneloffloadediooperations.md). A volume that doesn’t conform to either protocol can’t support any I/O operation.

> **Deprecated**

> Use [FSVolumeReadWriteHandler](readwritehandler.md) instead.

## Topics

### Reading and writing

- [readFromFile:offset:length:intoBuffer:replyHandler:](readwriteoperations/read%28from_at_length_into_replyhandler_%29.md): Deprecated. Reads the contents of the given file item.
- [FSMutableFileDataBuffer](../fsmutablefiledatabuffer.md): A wrapper object for a data buffer.
- [writeContents:toFile:atOffset:replyHandler:](readwriteoperations/write%28contents_to_at_replyhandler_%29.md): Deprecated. Writes contents to the given file item.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Deprecated

- [FSVolumeOperations](operations.md): Deprecated. Methods that all volumes implement to provide required capabilities.
- [FSVolumeOpenCloseOperations](opencloseoperations.md): Deprecated. Methods and properties implemented by volumes that want to receive open and close calls for each item.
- [FSVolumeAccessCheckOperations](accesscheckoperations.md): Deprecated. Methods and properties implemented by volumes that want to enforce access check operations.
- [FSVolumeRenameOperations](renameoperations.md): Deprecated. Methods and properties implemented by volumes that support renaming the volume.
- [FSVolumePreallocateOperations](preallocateoperations.md): Deprecated. Methods and properties implemented by volumes that want to offer preallocation functions.
- [FSVolumeXattrOperations](xattroperations.md): Deprecated. Methods and properties implemented by volumes that natively or partially support extended attributes.
- [FSVolumeItemDeactivation](itemdeactivation.md): Deprecated. Methods and properties implemented by volumes that support deactivating items.
- [FSVolumeKernelOffloadedIOOperations](../fsvolumekerneloffloadediooperations.md): Deprecated. Methods and properties implemented by volumes that use kernel-offloaded I/O to achieve higher file transfer performance.
