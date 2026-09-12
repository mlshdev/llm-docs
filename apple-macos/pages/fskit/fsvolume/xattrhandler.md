> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/xattrhandler](https://developer.apple.com/documentation/fskit/fsvolume/xattrhandler)

# FSVolume.XattrHandler (Swift)

**Framework:** FSKit  
**Kind:** Protocol  
**Availability:** macOS 27.0+

Methods and properties implemented by volumes that natively or partially support extended attributes.

## Declaration

```swift
protocol XattrHandler : NSObjectProtocol
```

<a id="overview"></a>

## Overview

> **Important**

> This protocol replaces the [FSVolume.XattrOperations](xattroperations.md) protocol. It exposes the same functionality, while using [FSVolumeHandlerResult](../fsvolumehandlerresult.md) objects. These objects add the ability to reply with [FSItem.Attributes](../fsitem/attributes.md) and free space from the relevant methods.

## Topics

### Reading and writing

- [getXattr(named:of:context:replyHandler:)](xattrhandler/getxattr%28named_of_context_replyhandler_%29.md): Gets the specified extended attribute of the given item.
- [FSGetXattrResult](../fsgetxattrresult.md): The result of a get-extended-attributes call.
- [listXattrs(of:context:replyHandler:)](xattrhandler/listxattrs%28of_context_replyhandler_%29.md): Gets the list of extended attributes currently set on the given item.
- [FSListXattrsResult](../fslistxattrsresult.md): The result of a list-extended-attributes call.
- [setXattr(named:to:on:policy:context:replyHandler:)](xattrhandler/setxattr%28named_to_on_policy_context_replyhandler_%29.md): Sets the specified extended attribute data on the given item.
- [FSVolume.SetXattrPolicy](setxattrpolicy.md): Flags to specify the policy when setting extended file attributes.
- [FSSetXattrResult](../fssetxattrresult.md): The result of a set-extended-attributes call.
- [supportedXattrNames(for:)](xattrhandler/supportedxattrnames%28for_%29.md): Returns an array that specifies the extended attribute names the given item supports.

### Inspecting volume properties

- [xattrOperationsInhibited](xattrhandler/xattroperationsinhibited.md): A Boolean value that instructs FSKit not to call this protocol’s methods, even if the volume conforms to it.

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
- [FSVolume.ItemDeactivationHandler](itemdeactivationhandler.md): Methods and properties implemented by volumes that support deactivating items.
- [FSVolume.KernelOffloadedIOHandler](kerneloffloadediohandler.md): Methods and properties implemented by volumes that use kernel-offloaded I/O to achieve higher file transfer performance.
- [FSVolume.DataCacheHandler](datacachehandler.md): Methods and properties implemented by volumes that coordinate kernel-level data caching.
- [FSVolume.SeekRegionHandler](seekregionhandler.md): Methods and properties implemented by volumes that support seek operations

# FSVolumeXattrHandler (Objective-C)

**Framework:** FSKit  
**Kind:** Protocol  
**Availability:** macOS 27.0+

Methods and properties implemented by volumes that natively or partially support extended attributes.

## Declaration

```objectivec
@protocol FSVolumeXattrHandler <NSObject>
```

<a id="overview"></a>

## Overview

> **Important**

> This protocol replaces the [FSVolumeXattrOperations](xattroperations.md) protocol. It exposes the same functionality, while using [FSVolumeHandlerResult](../fsvolumehandlerresult.md) objects. These objects add the ability to reply with [FSItemAttributes](../fsitem/attributes.md) and free space from the relevant methods.

## Topics

### Reading and writing

- [getXattrNamed:ofItem:context:replyHandler:](xattrhandler/getxattr%28named_of_context_replyhandler_%29.md): Gets the specified extended attribute of the given item.
- [FSGetXattrResult](../fsgetxattrresult.md): The result of a get-extended-attributes call.
- [listXattrsOfItem:context:replyHandler:](xattrhandler/listxattrs%28of_context_replyhandler_%29.md): Gets the list of extended attributes currently set on the given item.
- [FSListXattrsResult](../fslistxattrsresult.md): The result of a list-extended-attributes call.
- [setXattrNamed:toData:onItem:policy:context:replyHandler:](xattrhandler/setxattr%28named_to_on_policy_context_replyhandler_%29.md): Sets the specified extended attribute data on the given item.
- [FSSetXattrPolicy](setxattrpolicy.md): Flags to specify the policy when setting extended file attributes.
- [FSSetXattrResult](../fssetxattrresult.md): The result of a set-extended-attributes call.
- [supportedXattrNamesForItem:](xattrhandler/supportedxattrnames%28for_%29.md): Returns an array that specifies the extended attribute names the given item supports.

### Inspecting volume properties

- [xattrOperationsInhibited](xattrhandler/xattroperationsinhibited.md): A Boolean value that instructs FSKit not to call this protocol’s methods, even if the volume conforms to it.

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
- [FSVolumeItemDeactivationHandler](itemdeactivationhandler.md): Methods and properties implemented by volumes that support deactivating items.
- [FSVolumeKernelOffloadedIOHandler](kerneloffloadediohandler.md): Methods and properties implemented by volumes that use kernel-offloaded I/O to achieve higher file transfer performance.
- [FSVolumeDataCacheHandler](datacachehandler.md): Methods and properties implemented by volumes that coordinate kernel-level data caching.
- [FSVolumeSeekRegionHandler](seekregionhandler.md): Methods and properties implemented by volumes that support seek operations
