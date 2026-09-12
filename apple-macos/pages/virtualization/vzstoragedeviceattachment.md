> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzstoragedeviceattachment](https://developer.apple.com/documentation/virtualization/vzstoragedeviceattachment)

# VZStorageDeviceAttachment (Swift)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 11.0+

The common behaviors for storage devices in the guest system.

## Declaration

```swift
class VZStorageDeviceAttachment
```

<a id="overview"></a>

## Overview

A [VZStorageDeviceAttachment](vzstoragedeviceattachment.md) object defines the implementation of a storage interface in a virtual machine. You use the attachment object to specify the source of the storage on the host computer.

Don’t create [VZStorageDeviceAttachment](vzstoragedeviceattachment.md) objects directly. Instead, instantiate an appropriate subclass such as [VZDiskImageStorageDeviceAttachment](vzdiskimagestoragedeviceattachment.md), which provides storage using a disk image.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [VZDiskBlockDeviceStorageDeviceAttachment](vzdiskblockdevicestoragedeviceattachment.md)
- [VZDiskImageStorageDeviceAttachment](vzdiskimagestoragedeviceattachment.md)
- [VZNetworkBlockDeviceStorageDeviceAttachment](vznetworkblockdevicestoragedeviceattachment.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Attachment points

- [VZDiskBlockDeviceStorageDeviceAttachment](vzdiskblockdevicestoragedeviceattachment.md): A storage device attachment that uses a disk to store data.
- [VZDiskImageStorageDeviceAttachment](vzdiskimagestoragedeviceattachment.md): A device that stores content in a disk image.
- [VZNetworkBlockDeviceStorageDeviceAttachment](vznetworkblockdevicestoragedeviceattachment.md): A storage device attachment backed by a Network Block Device (NBD) client.

# VZStorageDeviceAttachment (Objective-C)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 11.0+

The common behaviors for storage devices in the guest system.

## Declaration

```objectivec
@interface VZStorageDeviceAttachment : NSObject
```

<a id="overview"></a>

## Overview

A [VZStorageDeviceAttachment](vzstoragedeviceattachment.md) object defines the implementation of a storage interface in a virtual machine. You use the attachment object to specify the source of the storage on the host computer.

Don’t create [VZStorageDeviceAttachment](vzstoragedeviceattachment.md) objects directly. Instead, instantiate an appropriate subclass such as [VZDiskImageStorageDeviceAttachment](vzdiskimagestoragedeviceattachment.md), which provides storage using a disk image.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [VZDiskBlockDeviceStorageDeviceAttachment](vzdiskblockdevicestoragedeviceattachment.md)
- [VZDiskImageStorageDeviceAttachment](vzdiskimagestoragedeviceattachment.md)
- [VZNetworkBlockDeviceStorageDeviceAttachment](vznetworkblockdevicestoragedeviceattachment.md)

## See Also

### Attachment points

- [VZDiskBlockDeviceStorageDeviceAttachment](vzdiskblockdevicestoragedeviceattachment.md): A storage device attachment that uses a disk to store data.
- [VZDiskImageStorageDeviceAttachment](vzdiskimagestoragedeviceattachment.md): A device that stores content in a disk image.
- [VZNetworkBlockDeviceStorageDeviceAttachment](vznetworkblockdevicestoragedeviceattachment.md): A storage device attachment backed by a Network Block Device (NBD) client.
