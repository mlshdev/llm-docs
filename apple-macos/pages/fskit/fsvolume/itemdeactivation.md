> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/itemdeactivation](https://developer.apple.com/documentation/fskit/fsvolume/itemdeactivation)

# FSVolume.ItemDeactivation (Swift)

**Framework:** FSKit  
**Kind:** Protocol  
**Availability:** macOS 15.4+ (deprecated in 27.0)

Methods and properties implemented by volumes that support deactivating items.

## Declaration

```swift
protocol ItemDeactivation : NSObjectProtocol
```

## Topics

### Deactivating an item

- [deactivateItem(\_:replyHandler:)](itemdeactivation/deactivateitem%28__replyhandler_%29.md): Deprecated. Notifies the file system that the kernel is no longer making immediate use of the given item.

### Setting deactivation policy

- [itemDeactivationPolicy](itemdeactivation/itemdeactivationpolicy.md): Deprecated. A property that tells FSKit to which types of items the deactivation applies, if any.
- [FSVolume.ItemDeactivationOptions](itemdeactivationoptions.md): Options to specify the item deactivation policy.

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
- [FSVolume.XattrOperations](xattroperations.md): Deprecated. Methods and properties implemented by volumes that natively or partially support extended attributes.
- [FSVolumeKernelOffloadedIOOperations](../fsvolumekerneloffloadediooperations.md): Deprecated. Methods and properties implemented by volumes that use kernel-offloaded I/O to achieve higher file transfer performance.

# FSVolumeItemDeactivation (Objective-C)

**Framework:** FSKit  
**Kind:** Protocol  
**Availability:** macOS 15.4+ (deprecated in 27.0)

Methods and properties implemented by volumes that support deactivating items.

## Declaration

```objectivec
@protocol FSVolumeItemDeactivation <NSObject>
```

## Topics

### Deactivating an item

- [deactivateItem:replyHandler:](itemdeactivation/deactivateitem%28__replyhandler_%29.md): Deprecated. Notifies the file system that the kernel is no longer making immediate use of the given item.

### Setting deactivation policy

- [itemDeactivationPolicy](itemdeactivation/itemdeactivationpolicy.md): Deprecated. A property that tells FSKit to which types of items the deactivation applies, if any.
- [FSItemDeactivationOptions](itemdeactivationoptions.md): Options to specify the item deactivation policy.

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
- [FSVolumeXattrOperations](xattroperations.md): Deprecated. Methods and properties implemented by volumes that natively or partially support extended attributes.
- [FSVolumeKernelOffloadedIOOperations](../fsvolumekerneloffloadediooperations.md): Deprecated. Methods and properties implemented by volumes that use kernel-offloaded I/O to achieve higher file transfer performance.
