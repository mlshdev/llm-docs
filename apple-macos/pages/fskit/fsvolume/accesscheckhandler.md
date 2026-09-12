> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/accesscheckhandler](https://developer.apple.com/documentation/fskit/fsvolume/accesscheckhandler)

# FSVolume.AccessCheckHandler (Swift)

**Framework:** FSKit  
**Kind:** Protocol  
**Availability:** macOS 27.0+

Methods and properties implemented by volumes that want to enforce access check operations.

## Declaration

```swift
protocol AccessCheckHandler : NSObjectProtocol
```

<a id="overview"></a>

## Overview

> **Important**

> This protocol replaces the [FSVolume.AccessCheckOperations](accesscheckoperations.md) protocol. It exposes the same functionality, while using the [FSCheckAccessResult](../fscheckaccessresult.md) object, to align with all other `Handler` protocols.

## Topics

### Checking access

- [checkAccess(to:requestedAccess:context:replyHandler:)](accesscheckhandler/checkaccess%28to_requestedaccess_context_replyhandler_%29.md): Checks whether the file system allows access to the given item.
- [FSVolume.AccessMask](accessmask.md): A bitmask of access rights.
- [FSCheckAccessResult](../fscheckaccessresult.md): The result of a check-access call.

### Inspecting volume properties

- [isAccessCheckInhibited](accesscheckhandler/isaccesscheckinhibited.md): A Boolean value that instructs FSKit not to call this protocol’s methods, even if the volume conforms to it.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Implementing optional handlers

- [FSVolume.OpenCloseHandler](openclosehandler.md): Methods and properties implemented by volumes that want to receive open and close calls for each item.
- [FSVolume.ReadWriteHandler](readwritehandler.md): Methods implemented for read and write operations that deliver data to and from the extension.
- [FSVolume.RenameHandler](renamehandler.md): Methods and properties implemented by volumes that support renaming the volume.
- [FSVolume.PreallocateHandler](preallocatehandler.md): Methods and properties implemented by volumes that want to offer preallocation functions.
- [FSVolume.XattrHandler](xattrhandler.md): Methods and properties implemented by volumes that natively or partially support extended attributes.
- [FSVolume.ItemDeactivationHandler](itemdeactivationhandler.md): Methods and properties implemented by volumes that support deactivating items.
- [FSVolume.KernelOffloadedIOHandler](kerneloffloadediohandler.md): Methods and properties implemented by volumes that use kernel-offloaded I/O to achieve higher file transfer performance.
- [FSVolume.DataCacheHandler](datacachehandler.md): Methods and properties implemented by volumes that coordinate kernel-level data caching.
- [FSVolume.SeekRegionHandler](seekregionhandler.md): Methods and properties implemented by volumes that support seek operations

# FSVolumeAccessCheckHandler (Objective-C)

**Framework:** FSKit  
**Kind:** Protocol  
**Availability:** macOS 27.0+

Methods and properties implemented by volumes that want to enforce access check operations.

## Declaration

```objectivec
@protocol FSVolumeAccessCheckHandler <NSObject>
```

<a id="overview"></a>

## Overview

> **Important**

> This protocol replaces the [FSVolumeAccessCheckOperations](accesscheckoperations.md) protocol. It exposes the same functionality, while using the [FSCheckAccessResult](../fscheckaccessresult.md) object, to align with all other `Handler` protocols.

## Topics

### Checking access

- [checkAccessToItem:requestedAccess:context:replyHandler:](accesscheckhandler/checkaccess%28to_requestedaccess_context_replyhandler_%29.md): Checks whether the file system allows access to the given item.
- [FSAccessMask](accessmask.md): A bitmask of access rights.
- [FSCheckAccessResult](../fscheckaccessresult.md): The result of a check-access call.

### Inspecting volume properties

- [accessCheckInhibited](accesscheckhandler/isaccesscheckinhibited.md): A Boolean value that instructs FSKit not to call this protocol’s methods, even if the volume conforms to it.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Implementing optional handlers

- [FSVolumeOpenCloseHandler](openclosehandler.md): Methods and properties implemented by volumes that want to receive open and close calls for each item.
- [FSVolumeReadWriteHandler](readwritehandler.md): Methods implemented for read and write operations that deliver data to and from the extension.
- [FSVolumeRenameHandler](renamehandler.md): Methods and properties implemented by volumes that support renaming the volume.
- [FSVolumePreallocateHandler](preallocatehandler.md): Methods and properties implemented by volumes that want to offer preallocation functions.
- [FSVolumeXattrHandler](xattrhandler.md): Methods and properties implemented by volumes that natively or partially support extended attributes.
- [FSVolumeItemDeactivationHandler](itemdeactivationhandler.md): Methods and properties implemented by volumes that support deactivating items.
- [FSVolumeKernelOffloadedIOHandler](kerneloffloadediohandler.md): Methods and properties implemented by volumes that use kernel-offloaded I/O to achieve higher file transfer performance.
- [FSVolumeDataCacheHandler](datacachehandler.md): Methods and properties implemented by volumes that coordinate kernel-level data caching.
- [FSVolumeSeekRegionHandler](seekregionhandler.md): Methods and properties implemented by volumes that support seek operations
