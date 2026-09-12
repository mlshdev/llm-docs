> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/itemdeactivationhandler](https://developer.apple.com/documentation/fskit/fsvolume/itemdeactivationhandler)

# FSVolume.ItemDeactivationHandler (Swift)

**Framework:** FSKit  
**Kind:** Protocol  
**Availability:** macOS 27.0+

Methods and properties implemented by volumes that support deactivating items.

## Declaration

```swift
protocol ItemDeactivationHandler : NSObjectProtocol
```

<a id="overview"></a>

## Overview

> **Important**

> This protocol replaces the [FSVolume.ItemDeactivation](itemdeactivation.md) protocol. It exposes the same functionality, while using the [FSDeactivateItemResult](../fsdeactivateitemresult.md) object. This object adds the ability to reply with free space from [deactivateItem(\_:context:replyHandler:)](itemdeactivationhandler/deactivateitem%28__context_replyhandler_%29.md).

## Topics

### Deactivating an item

- [deactivateItem(\_:context:replyHandler:)](itemdeactivationhandler/deactivateitem%28__context_replyhandler_%29.md): Notifies the file system that the kernel is no longer making immediate use of the given item.
- [FSDeactivateItemResult](../fsdeactivateitemresult.md): The result of a deactivate-item call.

### Inspecting volume properties

- [itemDeactivationPolicy](itemdeactivationhandler/itemdeactivationpolicy.md): A property that tells FSKit to which types of items the deactivation applies, if any.

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
- [FSVolume.KernelOffloadedIOHandler](kerneloffloadediohandler.md): Methods and properties implemented by volumes that use kernel-offloaded I/O to achieve higher file transfer performance.
- [FSVolume.DataCacheHandler](datacachehandler.md): Methods and properties implemented by volumes that coordinate kernel-level data caching.
- [FSVolume.SeekRegionHandler](seekregionhandler.md): Methods and properties implemented by volumes that support seek operations

# FSVolumeItemDeactivationHandler (Objective-C)

**Framework:** FSKit  
**Kind:** Protocol  
**Availability:** macOS 27.0+

Methods and properties implemented by volumes that support deactivating items.

## Declaration

```objectivec
@protocol FSVolumeItemDeactivationHandler <NSObject>
```

<a id="overview"></a>

## Overview

> **Important**

> This protocol replaces the [FSVolumeItemDeactivation](itemdeactivation.md) protocol. It exposes the same functionality, while using the [FSDeactivateItemResult](../fsdeactivateitemresult.md) object. This object adds the ability to reply with free space from [deactivateItem:context:replyHandler:](itemdeactivationhandler/deactivateitem%28__context_replyhandler_%29.md).

## Topics

### Deactivating an item

- [deactivateItem:context:replyHandler:](itemdeactivationhandler/deactivateitem%28__context_replyhandler_%29.md): Notifies the file system that the kernel is no longer making immediate use of the given item.
- [FSDeactivateItemResult](../fsdeactivateitemresult.md): The result of a deactivate-item call.

### Inspecting volume properties

- [itemDeactivationPolicy](itemdeactivationhandler/itemdeactivationpolicy.md): A property that tells FSKit to which types of items the deactivation applies, if any.

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
- [FSVolumeKernelOffloadedIOHandler](kerneloffloadediohandler.md): Methods and properties implemented by volumes that use kernel-offloaded I/O to achieve higher file transfer performance.
- [FSVolumeDataCacheHandler](datacachehandler.md): Methods and properties implemented by volumes that coordinate kernel-level data caching.
- [FSVolumeSeekRegionHandler](seekregionhandler.md): Methods and properties implemented by volumes that support seek operations
