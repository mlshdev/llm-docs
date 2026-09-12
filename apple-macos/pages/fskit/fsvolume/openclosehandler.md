> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/openclosehandler](https://developer.apple.com/documentation/fskit/fsvolume/openclosehandler)

# FSVolume.OpenCloseHandler (Swift)

**Framework:** FSKit  
**Kind:** Protocol  
**Availability:** macOS 27.0+

Methods and properties implemented by volumes that want to receive open and close calls for each item.

## Declaration

```swift
protocol OpenCloseHandler : NSObjectProtocol
```

<a id="overview"></a>

## Overview

When a file system volume conforms to this protocol, the kernel layer issues an open call to indicate desired access, and a close call to indicate what access to retain. A file is fully closed when the kernel layer issues a close call with no retained open nodes. When a file system receives the close call, it removes all access to the item. When all memory mappings to the item release, the kernel layer issues a final close.

If a file system volume doesn’t conform to this protocol, the kernel layer can skip making such calls to the volume.

> **Important**

> This protocol replaces the [FSVolume.OpenCloseOperations](opencloseoperations.md) protocol. It exposes the same functionality, while adding the [FSContext](../fscontext.md) parameters.

## Topics

### Opening and closing

- [openItem(\_:modes:context:replyHandler:)](openclosehandler/openitem%28__modes_context_replyhandler_%29.md): Opens a file for access.
- [closeItem(\_:modes:context:replyHandler:)](openclosehandler/closeitem%28__modes_context_replyhandler_%29.md): Closes a file from further access.
- [FSVolume.OpenModes](openmodes.md): Defined modes for opening a file.
- [FSContext](../fscontext.md): A context object that provides information about the initiator of a file system operation.

### Inspecting volume properties

- [isOpenCloseInhibited](openclosehandler/isopencloseinhibited.md): A Boolean value that instructs FSKit not to call this protocol’s methods, even if the volume conforms to it.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Implementing optional handlers

- [FSVolume.ReadWriteHandler](readwritehandler.md): Methods implemented for read and write operations that deliver data to and from the extension.
- [FSVolume.AccessCheckHandler](accesscheckhandler.md): Methods and properties implemented by volumes that want to enforce access check operations.
- [FSVolume.RenameHandler](renamehandler.md): Methods and properties implemented by volumes that support renaming the volume.
- [FSVolume.PreallocateHandler](preallocatehandler.md): Methods and properties implemented by volumes that want to offer preallocation functions.
- [FSVolume.XattrHandler](xattrhandler.md): Methods and properties implemented by volumes that natively or partially support extended attributes.
- [FSVolume.ItemDeactivationHandler](itemdeactivationhandler.md): Methods and properties implemented by volumes that support deactivating items.
- [FSVolume.KernelOffloadedIOHandler](kerneloffloadediohandler.md): Methods and properties implemented by volumes that use kernel-offloaded I/O to achieve higher file transfer performance.
- [FSVolume.DataCacheHandler](datacachehandler.md): Methods and properties implemented by volumes that coordinate kernel-level data caching.
- [FSVolume.SeekRegionHandler](seekregionhandler.md): Methods and properties implemented by volumes that support seek operations

# FSVolumeOpenCloseHandler (Objective-C)

**Framework:** FSKit  
**Kind:** Protocol  
**Availability:** macOS 27.0+

Methods and properties implemented by volumes that want to receive open and close calls for each item.

## Declaration

```objectivec
@protocol FSVolumeOpenCloseHandler <NSObject>
```

<a id="overview"></a>

## Overview

When a file system volume conforms to this protocol, the kernel layer issues an open call to indicate desired access, and a close call to indicate what access to retain. A file is fully closed when the kernel layer issues a close call with no retained open nodes. When a file system receives the close call, it removes all access to the item. When all memory mappings to the item release, the kernel layer issues a final close.

If a file system volume doesn’t conform to this protocol, the kernel layer can skip making such calls to the volume.

> **Important**

> This protocol replaces the [FSVolumeOpenCloseOperations](opencloseoperations.md) protocol. It exposes the same functionality, while adding the [FSContext](../fscontext.md) parameters.

## Topics

### Opening and closing

- [openItem:withModes:context:replyHandler:](openclosehandler/openitem%28__modes_context_replyhandler_%29.md): Opens a file for access.
- [closeItem:keepingModes:context:replyHandler:](openclosehandler/closeitem%28__modes_context_replyhandler_%29.md): Closes a file from further access.
- [FSVolumeOpenModes](openmodes.md): Defined modes for opening a file.
- [FSContext](../fscontext.md): A context object that provides information about the initiator of a file system operation.

### Inspecting volume properties

- [openCloseInhibited](openclosehandler/isopencloseinhibited.md): A Boolean value that instructs FSKit not to call this protocol’s methods, even if the volume conforms to it.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Implementing optional handlers

- [FSVolumeReadWriteHandler](readwritehandler.md): Methods implemented for read and write operations that deliver data to and from the extension.
- [FSVolumeAccessCheckHandler](accesscheckhandler.md): Methods and properties implemented by volumes that want to enforce access check operations.
- [FSVolumeRenameHandler](renamehandler.md): Methods and properties implemented by volumes that support renaming the volume.
- [FSVolumePreallocateHandler](preallocatehandler.md): Methods and properties implemented by volumes that want to offer preallocation functions.
- [FSVolumeXattrHandler](xattrhandler.md): Methods and properties implemented by volumes that natively or partially support extended attributes.
- [FSVolumeItemDeactivationHandler](itemdeactivationhandler.md): Methods and properties implemented by volumes that support deactivating items.
- [FSVolumeKernelOffloadedIOHandler](kerneloffloadediohandler.md): Methods and properties implemented by volumes that use kernel-offloaded I/O to achieve higher file transfer performance.
- [FSVolumeDataCacheHandler](datacachehandler.md): Methods and properties implemented by volumes that coordinate kernel-level data caching.
- [FSVolumeSeekRegionHandler](seekregionhandler.md): Methods and properties implemented by volumes that support seek operations
