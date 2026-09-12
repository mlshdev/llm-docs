> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/readwritehandler](https://developer.apple.com/documentation/fskit/fsvolume/readwritehandler)

# FSVolume.ReadWriteHandler (Swift)

**Framework:** FSKit  
**Kind:** Protocol  
**Availability:** macOS 27.0+

Methods implemented for read and write operations that deliver data to and from the extension.

## Declaration

```swift
protocol ReadWriteHandler : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Most volumes conform to either this protocol or [FSVolume.KernelOffloadedIOHandler](kerneloffloadediohandler.md). You can conform to both if you need to provide kernel-offloaded I/O only for certain files. In that case, files with the [inhibitKernelOffloadedIO](../fsitem/attribute/inhibitkerneloffloadedio.md) attribute set use this protocol, and those without it use [FSVolume.KernelOffloadedIOHandler](kerneloffloadediohandler.md). A volume that doesn’t conform to either protocol can’t support any I/O operation.

> **Important**

> This protocol replaces the [FSVolume.ReadWriteOperations](readwriteoperations.md) protocol. It exposes the same functionality, while using [FSVolumeHandlerResult](../fsvolumehandlerresult.md) objects. These objects add the ability to reply with [FSItem.Attributes](../fsitem/attributes.md) and free space from the relevant methods.

## Topics

### Reading and writing

- [read(from:at:length:into:replyHandler:)](readwritehandler/read%28from_at_length_into_replyhandler_%29.md): Reads the contents of the given file item.
- [FSMutableFileDataBuffer](../fsmutablefiledatabuffer.md): A wrapper object for a data buffer.
- [FSReadFileResult](../fsreadfileresult.md): The result of a read-file call.
- [write(contents:to:at:replyHandler:)](readwritehandler/write%28contents_to_at_replyhandler_%29.md): Writes contents to the given file item.
- [FSWriteFileResult](../fswritefileresult.md): The result of a read-file call.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Implementing optional handlers

- [FSVolume.OpenCloseHandler](openclosehandler.md): Methods and properties implemented by volumes that want to receive open and close calls for each item.
- [FSVolume.AccessCheckHandler](accesscheckhandler.md): Methods and properties implemented by volumes that want to enforce access check operations.
- [FSVolume.RenameHandler](renamehandler.md): Methods and properties implemented by volumes that support renaming the volume.
- [FSVolume.PreallocateHandler](preallocatehandler.md): Methods and properties implemented by volumes that want to offer preallocation functions.
- [FSVolume.XattrHandler](xattrhandler.md): Methods and properties implemented by volumes that natively or partially support extended attributes.
- [FSVolume.ItemDeactivationHandler](itemdeactivationhandler.md): Methods and properties implemented by volumes that support deactivating items.
- [FSVolume.KernelOffloadedIOHandler](kerneloffloadediohandler.md): Methods and properties implemented by volumes that use kernel-offloaded I/O to achieve higher file transfer performance.
- [FSVolume.DataCacheHandler](datacachehandler.md): Methods and properties implemented by volumes that coordinate kernel-level data caching.
- [FSVolume.SeekRegionHandler](seekregionhandler.md): Methods and properties implemented by volumes that support seek operations

# FSVolumeReadWriteHandler (Objective-C)

**Framework:** FSKit  
**Kind:** Protocol  
**Availability:** macOS 27.0+

Methods implemented for read and write operations that deliver data to and from the extension.

## Declaration

```objectivec
@protocol FSVolumeReadWriteHandler <NSObject>
```

<a id="overview"></a>

## Overview

Most volumes conform to either this protocol or [FSVolumeKernelOffloadedIOHandler](kerneloffloadediohandler.md). You can conform to both if you need to provide kernel-offloaded I/O only for certain files. In that case, files with the [FSItemAttributeInhibitKernelOffloadedIO](../fsitem/attribute/inhibitkerneloffloadedio.md) attribute set use this protocol, and those without it use [FSVolumeKernelOffloadedIOHandler](kerneloffloadediohandler.md). A volume that doesn’t conform to either protocol can’t support any I/O operation.

> **Important**

> This protocol replaces the [FSVolumeReadWriteOperations](readwriteoperations.md) protocol. It exposes the same functionality, while using [FSVolumeHandlerResult](../fsvolumehandlerresult.md) objects. These objects add the ability to reply with [FSItemAttributes](../fsitem/attributes.md) and free space from the relevant methods.

## Topics

### Reading and writing

- [readFromFile:offset:length:intoBuffer:replyHandler:](readwritehandler/read%28from_at_length_into_replyhandler_%29.md): Reads the contents of the given file item.
- [FSMutableFileDataBuffer](../fsmutablefiledatabuffer.md): A wrapper object for a data buffer.
- [FSReadFileResult](../fsreadfileresult.md): The result of a read-file call.
- [writeContents:toFile:atOffset:replyHandler:](readwritehandler/write%28contents_to_at_replyhandler_%29.md): Writes contents to the given file item.
- [FSWriteFileResult](../fswritefileresult.md): The result of a read-file call.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Implementing optional handlers

- [FSVolumeOpenCloseHandler](openclosehandler.md): Methods and properties implemented by volumes that want to receive open and close calls for each item.
- [FSVolumeAccessCheckHandler](accesscheckhandler.md): Methods and properties implemented by volumes that want to enforce access check operations.
- [FSVolumeRenameHandler](renamehandler.md): Methods and properties implemented by volumes that support renaming the volume.
- [FSVolumePreallocateHandler](preallocatehandler.md): Methods and properties implemented by volumes that want to offer preallocation functions.
- [FSVolumeXattrHandler](xattrhandler.md): Methods and properties implemented by volumes that natively or partially support extended attributes.
- [FSVolumeItemDeactivationHandler](itemdeactivationhandler.md): Methods and properties implemented by volumes that support deactivating items.
- [FSVolumeKernelOffloadedIOHandler](kerneloffloadediohandler.md): Methods and properties implemented by volumes that use kernel-offloaded I/O to achieve higher file transfer performance.
- [FSVolumeDataCacheHandler](datacachehandler.md): Methods and properties implemented by volumes that coordinate kernel-level data caching.
- [FSVolumeSeekRegionHandler](seekregionhandler.md): Methods and properties implemented by volumes that support seek operations
