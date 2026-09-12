> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/opencloseoperations](https://developer.apple.com/documentation/fskit/fsvolume/opencloseoperations)

# FSVolume.OpenCloseOperations (Swift)

**Framework:** FSKit  
**Kind:** Protocol  
**Availability:** macOS 15.4+ (deprecated in 27.0)

Methods and properties implemented by volumes that want to receive open and close calls for each item.

## Declaration

```swift
protocol OpenCloseOperations : NSObjectProtocol
```

<a id="overview"></a>

## Overview

When a file system volume conforms to this protocol, the kernel layer issues an open call to indicate desired access, and a close call to indicate what access to retain. A file is fully closed when the kernel layer issues a close call with no retained open nodes. When a file system receives the close call, it removes all access to the item. When all memory mappings to the item release, the kernel layer issues a final close.

If a file system volume doesn’t conform to this protocol, the kernel layer can skip making such calls to the volume.

> **Deprecated**

> Use [FSVolume.OpenCloseHandler](openclosehandler.md) instead.

## Topics

### Opening and closing

- [openItem(\_:modes:replyHandler:)](opencloseoperations/openitem%28__modes_replyhandler_%29.md): Deprecated. Opens a file for access.
- [closeItem(\_:modes:replyHandler:)](opencloseoperations/closeitem%28__modes_replyhandler_%29.md): Deprecated. Closes a file from further access.
- [FSVolume.OpenModes](openmodes.md): Defined modes for opening a file.

### Inspecting volume properties

- [isOpenCloseInhibited](opencloseoperations/isopencloseinhibited.md): Deprecated. A Boolean value that instructs FSKit not to call this protocol’s methods, even if the volume conforms to it.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Deprecated

- [FSVolume.Operations](operations.md): Deprecated. Methods that all volumes implement to provide required capabilities.
- [FSVolume.ReadWriteOperations](readwriteoperations.md): Deprecated. Methods implemented for read and write operations that deliver data to and from the extension.
- [FSVolume.AccessCheckOperations](accesscheckoperations.md): Deprecated. Methods and properties implemented by volumes that want to enforce access check operations.
- [FSVolume.RenameOperations](renameoperations.md): Deprecated. Methods and properties implemented by volumes that support renaming the volume.
- [FSVolume.PreallocateOperations](preallocateoperations.md): Deprecated. Methods and properties implemented by volumes that want to offer preallocation functions.
- [FSVolume.XattrOperations](xattroperations.md): Deprecated. Methods and properties implemented by volumes that natively or partially support extended attributes.
- [FSVolume.ItemDeactivation](itemdeactivation.md): Deprecated. Methods and properties implemented by volumes that support deactivating items.
- [FSVolumeKernelOffloadedIOOperations](../fsvolumekerneloffloadediooperations.md): Deprecated. Methods and properties implemented by volumes that use kernel-offloaded I/O to achieve higher file transfer performance.

# FSVolumeOpenCloseOperations (Objective-C)

**Framework:** FSKit  
**Kind:** Protocol  
**Availability:** macOS 15.4+ (deprecated in 27.0)

Methods and properties implemented by volumes that want to receive open and close calls for each item.

## Declaration

```objectivec
@protocol FSVolumeOpenCloseOperations <NSObject>
```

<a id="overview"></a>

## Overview

When a file system volume conforms to this protocol, the kernel layer issues an open call to indicate desired access, and a close call to indicate what access to retain. A file is fully closed when the kernel layer issues a close call with no retained open nodes. When a file system receives the close call, it removes all access to the item. When all memory mappings to the item release, the kernel layer issues a final close.

If a file system volume doesn’t conform to this protocol, the kernel layer can skip making such calls to the volume.

> **Deprecated**

> Use [FSVolumeOpenCloseHandler](openclosehandler.md) instead.

## Topics

### Opening and closing

- [openItem:withModes:replyHandler:](opencloseoperations/openitem%28__modes_replyhandler_%29.md): Deprecated. Opens a file for access.
- [closeItem:keepingModes:replyHandler:](opencloseoperations/closeitem%28__modes_replyhandler_%29.md): Deprecated. Closes a file from further access.
- [FSVolumeOpenModes](openmodes.md): Defined modes for opening a file.

### Inspecting volume properties

- [openCloseInhibited](opencloseoperations/isopencloseinhibited.md): Deprecated. A Boolean value that instructs FSKit not to call this protocol’s methods, even if the volume conforms to it.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Deprecated

- [FSVolumeOperations](operations.md): Deprecated. Methods that all volumes implement to provide required capabilities.
- [FSVolumeReadWriteOperations](readwriteoperations.md): Deprecated. Methods implemented for read and write operations that deliver data to and from the extension.
- [FSVolumeAccessCheckOperations](accesscheckoperations.md): Deprecated. Methods and properties implemented by volumes that want to enforce access check operations.
- [FSVolumeRenameOperations](renameoperations.md): Deprecated. Methods and properties implemented by volumes that support renaming the volume.
- [FSVolumePreallocateOperations](preallocateoperations.md): Deprecated. Methods and properties implemented by volumes that want to offer preallocation functions.
- [FSVolumeXattrOperations](xattroperations.md): Deprecated. Methods and properties implemented by volumes that natively or partially support extended attributes.
- [FSVolumeItemDeactivation](itemdeactivation.md): Deprecated. Methods and properties implemented by volumes that support deactivating items.
- [FSVolumeKernelOffloadedIOOperations](../fsvolumekerneloffloadediooperations.md): Deprecated. Methods and properties implemented by volumes that use kernel-offloaded I/O to achieve higher file transfer performance.
