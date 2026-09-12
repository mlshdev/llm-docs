> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/xattroperations](https://developer.apple.com/documentation/fskit/fsvolume/xattroperations)

# FSVolume.XattrOperations (Swift)

**Framework:** FSKit  
**Kind:** Protocol  
**Availability:** macOS 15.4+ (deprecated in 27.0)

Methods and properties implemented by volumes that natively or partially support extended attributes.

## Declaration

```swift
protocol XattrOperations : NSObjectProtocol
```

<a id="overview"></a>

## Overview

> **Deprecated**

> Use [FSVolume.XattrHandler](xattrhandler.md)

## Topics

### Reading and writing

- [getXattr(named:of:replyHandler:)](xattroperations/getxattr%28named_of_replyhandler_%29.md): Deprecated. Gets the specified extended attribute of the given item.
- [listXattrs(of:replyHandler:)](xattroperations/listxattrs%28of_replyhandler_%29.md): Deprecated. Gets the list of extended attributes currently set on the given item.
- [setXattr(named:to:on:policy:replyHandler:)](xattroperations/setxattr%28named_to_on_policy_replyhandler_%29.md): Deprecated. Sets the specified extended attribute data on the given item.
- [FSVolume.SetXattrPolicy](setxattrpolicy.md): Flags to specify the policy when setting extended file attributes.
- [supportedXattrNames(for:)](xattroperations/supportedxattrnames%28for_%29.md): Deprecated. Returns an array that specifies the extended attribute names the given item supports.

### Inspecting volume properties

- [xattrOperationsInhibited](xattroperations/xattroperationsinhibited.md): Deprecated. A Boolean value that instructs FSKit not to call this protocol’s methods, even if the volume conforms to it.

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
- [FSVolume.PreallocateOperations](preallocateoperations.md): Deprecated. Methods and properties implemented by volumes that want to offer preallocation functions.
- [FSVolume.ItemDeactivation](itemdeactivation.md): Deprecated. Methods and properties implemented by volumes that support deactivating items.
- [FSVolumeKernelOffloadedIOOperations](../fsvolumekerneloffloadediooperations.md): Deprecated. Methods and properties implemented by volumes that use kernel-offloaded I/O to achieve higher file transfer performance.

# FSVolumeXattrOperations (Objective-C)

**Framework:** FSKit  
**Kind:** Protocol  
**Availability:** macOS 15.4+ (deprecated in 27.0)

Methods and properties implemented by volumes that natively or partially support extended attributes.

## Declaration

```objectivec
@protocol FSVolumeXattrOperations <NSObject>
```

<a id="overview"></a>

## Overview

> **Deprecated**

> Use [FSVolumeXattrHandler](xattrhandler.md)

## Topics

### Reading and writing

- [getXattrNamed:ofItem:replyHandler:](xattroperations/getxattr%28named_of_replyhandler_%29.md): Deprecated. Gets the specified extended attribute of the given item.
- [listXattrsOfItem:replyHandler:](xattroperations/listxattrs%28of_replyhandler_%29.md): Deprecated. Gets the list of extended attributes currently set on the given item.
- [setXattrNamed:toData:onItem:policy:replyHandler:](xattroperations/setxattr%28named_to_on_policy_replyhandler_%29.md): Deprecated. Sets the specified extended attribute data on the given item.
- [FSSetXattrPolicy](setxattrpolicy.md): Flags to specify the policy when setting extended file attributes.
- [supportedXattrNamesForItem:](xattroperations/supportedxattrnames%28for_%29.md): Deprecated. Returns an array that specifies the extended attribute names the given item supports.

### Inspecting volume properties

- [xattrOperationsInhibited](xattroperations/xattroperationsinhibited.md): Deprecated. A Boolean value that instructs FSKit not to call this protocol’s methods, even if the volume conforms to it.

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
- [FSVolumePreallocateOperations](preallocateoperations.md): Deprecated. Methods and properties implemented by volumes that want to offer preallocation functions.
- [FSVolumeItemDeactivation](itemdeactivation.md): Deprecated. Methods and properties implemented by volumes that support deactivating items.
- [FSVolumeKernelOffloadedIOOperations](../fsvolumekerneloffloadediooperations.md): Deprecated. Methods and properties implemented by volumes that use kernel-offloaded I/O to achieve higher file transfer performance.
