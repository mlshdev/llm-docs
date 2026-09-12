> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/renamehandler](https://developer.apple.com/documentation/fskit/fsvolume/renamehandler)

# FSVolume.RenameHandler (Swift)

**Framework:** FSKit  
**Kind:** Protocol  
**Availability:** macOS 27.0+

Methods and properties implemented by volumes that support renaming the volume.

## Declaration

```swift
protocol RenameHandler : NSObjectProtocol
```

<a id="overview"></a>

## Overview

> **Important**

> This protocol replaces the [FSVolume.RenameOperations](renameoperations.md) protocol. It exposes the same functionality, while using the [FSVolumeRenameResult](../fsvolumerenameresult.md) object, to align with all other `Handler` protocols.

## Topics

### Renaming the volume

- [setVolumeName(\_:context:replyHandler:)](renamehandler/setvolumename%28__context_replyhandler_%29.md): Sets a new name for the volume.
- [FSVolumeRenameResult](../fsvolumerenameresult.md): The result of a rename-volume call.

### Inspecting volume properties

- [isVolumeRenameInhibited](renamehandler/isvolumerenameinhibited.md): A Boolean value that instructs FSKit not to call this protocol’s methods, even if the volume conforms to it.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Implementing optional handlers

- [FSVolume.OpenCloseHandler](openclosehandler.md): Methods and properties implemented by volumes that want to receive open and close calls for each item.
- [FSVolume.ReadWriteHandler](readwritehandler.md): Methods implemented for read and write operations that deliver data to and from the extension.
- [FSVolume.AccessCheckHandler](accesscheckhandler.md): Methods and properties implemented by volumes that want to enforce access check operations.
- [FSVolume.PreallocateHandler](preallocatehandler.md): Methods and properties implemented by volumes that want to offer preallocation functions.
- [FSVolume.XattrHandler](xattrhandler.md): Methods and properties implemented by volumes that natively or partially support extended attributes.
- [FSVolume.ItemDeactivationHandler](itemdeactivationhandler.md): Methods and properties implemented by volumes that support deactivating items.
- [FSVolume.KernelOffloadedIOHandler](kerneloffloadediohandler.md): Methods and properties implemented by volumes that use kernel-offloaded I/O to achieve higher file transfer performance.
- [FSVolume.DataCacheHandler](datacachehandler.md): Methods and properties implemented by volumes that coordinate kernel-level data caching.
- [FSVolume.SeekRegionHandler](seekregionhandler.md): Methods and properties implemented by volumes that support seek operations

# FSVolumeRenameHandler (Objective-C)

**Framework:** FSKit  
**Kind:** Protocol  
**Availability:** macOS 27.0+

Methods and properties implemented by volumes that support renaming the volume.

## Declaration

```objectivec
@protocol FSVolumeRenameHandler <NSObject>
```

<a id="overview"></a>

## Overview

> **Important**

> This protocol replaces the [FSVolumeRenameOperations](renameoperations.md) protocol. It exposes the same functionality, while using the [FSVolumeRenameResult](../fsvolumerenameresult.md) object, to align with all other `Handler` protocols.

## Topics

### Renaming the volume

- [setVolumeName:context:replyHandler:](renamehandler/setvolumename%28__context_replyhandler_%29.md): Sets a new name for the volume.
- [FSVolumeRenameResult](../fsvolumerenameresult.md): The result of a rename-volume call.

### Inspecting volume properties

- [volumeRenameInhibited](renamehandler/isvolumerenameinhibited.md): A Boolean value that instructs FSKit not to call this protocol’s methods, even if the volume conforms to it.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Implementing optional handlers

- [FSVolumeOpenCloseHandler](openclosehandler.md): Methods and properties implemented by volumes that want to receive open and close calls for each item.
- [FSVolumeReadWriteHandler](readwritehandler.md): Methods implemented for read and write operations that deliver data to and from the extension.
- [FSVolumeAccessCheckHandler](accesscheckhandler.md): Methods and properties implemented by volumes that want to enforce access check operations.
- [FSVolumePreallocateHandler](preallocatehandler.md): Methods and properties implemented by volumes that want to offer preallocation functions.
- [FSVolumeXattrHandler](xattrhandler.md): Methods and properties implemented by volumes that natively or partially support extended attributes.
- [FSVolumeItemDeactivationHandler](itemdeactivationhandler.md): Methods and properties implemented by volumes that support deactivating items.
- [FSVolumeKernelOffloadedIOHandler](kerneloffloadediohandler.md): Methods and properties implemented by volumes that use kernel-offloaded I/O to achieve higher file transfer performance.
- [FSVolumeDataCacheHandler](datacachehandler.md): Methods and properties implemented by volumes that coordinate kernel-level data caching.
- [FSVolumeSeekRegionHandler](seekregionhandler.md): Methods and properties implemented by volumes that support seek operations
