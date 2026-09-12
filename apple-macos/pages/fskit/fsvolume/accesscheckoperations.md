> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/accesscheckoperations](https://developer.apple.com/documentation/fskit/fsvolume/accesscheckoperations)

# FSVolume.AccessCheckOperations (Swift)

**Framework:** FSKit  
**Kind:** Protocol  
**Availability:** macOS 15.4+ (deprecated in 27.0)

Methods and properties implemented by volumes that want to enforce access check operations.

## Declaration

```swift
protocol AccessCheckOperations : NSObjectProtocol
```

<a id="overview"></a>

## Overview

> **Deprecated**

> Use [FSVolume.AccessCheckHandler](accesscheckhandler.md) instead.

## Topics

### Checking access

- [checkAccess(to:requestedAccess:replyHandler:)](accesscheckoperations/checkaccess%28to_requestedaccess_replyhandler_%29.md): Deprecated. Checks whether the file system allows access to the given item.
- [FSVolume.AccessMask](accessmask.md): A bitmask of access rights.

### Inspecting volume properties

- [isAccessCheckInhibited](accesscheckoperations/isaccesscheckinhibited.md): Deprecated. A Boolean value that instructs FSKit not to call this protocol’s methods, even if the volume conforms to it.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Deprecated

- [FSVolume.Operations](operations.md): Deprecated. Methods that all volumes implement to provide required capabilities.
- [FSVolume.OpenCloseOperations](opencloseoperations.md): Deprecated. Methods and properties implemented by volumes that want to receive open and close calls for each item.
- [FSVolume.ReadWriteOperations](readwriteoperations.md): Deprecated. Methods implemented for read and write operations that deliver data to and from the extension.
- [FSVolume.RenameOperations](renameoperations.md): Deprecated. Methods and properties implemented by volumes that support renaming the volume.
- [FSVolume.PreallocateOperations](preallocateoperations.md): Deprecated. Methods and properties implemented by volumes that want to offer preallocation functions.
- [FSVolume.XattrOperations](xattroperations.md): Deprecated. Methods and properties implemented by volumes that natively or partially support extended attributes.
- [FSVolume.ItemDeactivation](itemdeactivation.md): Deprecated. Methods and properties implemented by volumes that support deactivating items.
- [FSVolumeKernelOffloadedIOOperations](../fsvolumekerneloffloadediooperations.md): Deprecated. Methods and properties implemented by volumes that use kernel-offloaded I/O to achieve higher file transfer performance.

# FSVolumeAccessCheckOperations (Objective-C)

**Framework:** FSKit  
**Kind:** Protocol  
**Availability:** macOS 15.4+ (deprecated in 27.0)

Methods and properties implemented by volumes that want to enforce access check operations.

## Declaration

```objectivec
@protocol FSVolumeAccessCheckOperations <NSObject>
```

<a id="overview"></a>

## Overview

> **Deprecated**

> Use [FSVolumeAccessCheckHandler](accesscheckhandler.md) instead.

## Topics

### Checking access

- [checkAccessToItem:requestedAccess:replyHandler:](accesscheckoperations/checkaccess%28to_requestedaccess_replyhandler_%29.md): Deprecated. Checks whether the file system allows access to the given item.
- [FSAccessMask](accessmask.md): A bitmask of access rights.

### Inspecting volume properties

- [accessCheckInhibited](accesscheckoperations/isaccesscheckinhibited.md): Deprecated. A Boolean value that instructs FSKit not to call this protocol’s methods, even if the volume conforms to it.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Deprecated

- [FSVolumeOperations](operations.md): Deprecated. Methods that all volumes implement to provide required capabilities.
- [FSVolumeOpenCloseOperations](opencloseoperations.md): Deprecated. Methods and properties implemented by volumes that want to receive open and close calls for each item.
- [FSVolumeReadWriteOperations](readwriteoperations.md): Deprecated. Methods implemented for read and write operations that deliver data to and from the extension.
- [FSVolumeRenameOperations](renameoperations.md): Deprecated. Methods and properties implemented by volumes that support renaming the volume.
- [FSVolumePreallocateOperations](preallocateoperations.md): Deprecated. Methods and properties implemented by volumes that want to offer preallocation functions.
- [FSVolumeXattrOperations](xattroperations.md): Deprecated. Methods and properties implemented by volumes that natively or partially support extended attributes.
- [FSVolumeItemDeactivation](itemdeactivation.md): Deprecated. Methods and properties implemented by volumes that support deactivating items.
- [FSVolumeKernelOffloadedIOOperations](../fsvolumekerneloffloadediooperations.md): Deprecated. Methods and properties implemented by volumes that use kernel-offloaded I/O to achieve higher file transfer performance.
