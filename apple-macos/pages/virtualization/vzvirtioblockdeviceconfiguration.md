> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtioblockdeviceconfiguration](https://developer.apple.com/documentation/virtualization/vzvirtioblockdeviceconfiguration)

# VZVirtioBlockDeviceConfiguration (Swift)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 11.0+

The configuration object that requests the creation of a virtual storage device in the guest system.

## Declaration

```swift
class VZVirtioBlockDeviceConfiguration
```

<a id="overview"></a>

## Overview

Use a [VZVirtioBlockDeviceConfiguration](vzvirtioblockdeviceconfiguration.md) object to create an emulated storage device in your virtual machine. When you add this object to your virtual machine configuration, the virtual machine creates an emulated disk for the guest operating system to use to read and write files. The emulated storage device conforms to the Virtio Block Device specification.

When you create a [VZVirtioBlockDeviceConfiguration](vzvirtioblockdeviceconfiguration.md) object, specify the attachment object that implements the underlying storage. For example, specify a [VZDiskImageStorageDeviceAttachment](vzdiskimagestoragedeviceattachment.md) object to configure the storage device using a disk image in the local file system. Assign your configuration object to the [storageDevices](vzvirtualmachineconfiguration/storagedevices.md) property of your [VZVirtualMachineConfiguration](vzvirtualmachineconfiguration.md) object before creating your virtual machine.

## Topics

### Creating the configuration object

- [init(attachment:)](vzvirtioblockdeviceconfiguration/init%28attachment_%29.md): Creates a block device configuration object that uses the specified storage medium.

### Identifying a block device

- [blockDeviceIdentifier](vzvirtioblockdeviceconfiguration/blockdeviceidentifier.md): The string that identifies the VIRTIO block device.

### Validating device identifiers

- [validateBlockDeviceIdentifier(\_:)](vzvirtioblockdeviceconfiguration/validateblockdeviceidentifier%28__%29.md): Checks the validity of a block device identifier.

## Relationships

### Inherits From

- [VZStorageDeviceConfiguration](vzstoragedeviceconfiguration.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Configurations

- [VZStorageDeviceConfiguration](vzstoragedeviceconfiguration.md): The common configuration traits for storage device requests.
- [VZUSBMassStorageDeviceConfiguration](vzusbmassstoragedeviceconfiguration.md): The configuration object that represents a USB Mass storage device.
- [VZDiskImageCachingMode](vzdiskimagecachingmode.md): An integer that describes the disk image caching mode.
- [VZDiskImageSynchronizationMode](vzdiskimagesynchronizationmode.md): An integer that describes the disk image synchronization mode.
- [VZNVMExpressControllerDeviceConfiguration](vznvmexpresscontrollerdeviceconfiguration.md): The configuration object that represents an NVM Express Controller storage device.

# VZVirtioBlockDeviceConfiguration (Objective-C)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 11.0+

The configuration object that requests the creation of a virtual storage device in the guest system.

## Declaration

```objectivec
@interface VZVirtioBlockDeviceConfiguration : VZStorageDeviceConfiguration
```

<a id="overview"></a>

## Overview

Use a [VZVirtioBlockDeviceConfiguration](vzvirtioblockdeviceconfiguration.md) object to create an emulated storage device in your virtual machine. When you add this object to your virtual machine configuration, the virtual machine creates an emulated disk for the guest operating system to use to read and write files. The emulated storage device conforms to the Virtio Block Device specification.

When you create a [VZVirtioBlockDeviceConfiguration](vzvirtioblockdeviceconfiguration.md) object, specify the attachment object that implements the underlying storage. For example, specify a [VZDiskImageStorageDeviceAttachment](vzdiskimagestoragedeviceattachment.md) object to configure the storage device using a disk image in the local file system. Assign your configuration object to the [storageDevices](vzvirtualmachineconfiguration/storagedevices.md) property of your [VZVirtualMachineConfiguration](vzvirtualmachineconfiguration.md) object before creating your virtual machine.

## Topics

### Creating the configuration object

- [initWithAttachment:](vzvirtioblockdeviceconfiguration/init%28attachment_%29.md): Creates a block device configuration object that uses the specified storage medium.

### Identifying a block device

- [blockDeviceIdentifier](vzvirtioblockdeviceconfiguration/blockdeviceidentifier.md): The string that identifies the VIRTIO block device.

### Validating device identifiers

- [validateBlockDeviceIdentifier:error:](vzvirtioblockdeviceconfiguration/validateblockdeviceidentifier%28__%29.md): Checks the validity of a block device identifier.

## Relationships

### Inherits From

- [VZStorageDeviceConfiguration](vzstoragedeviceconfiguration.md)

## See Also

### Configurations

- [VZStorageDeviceConfiguration](vzstoragedeviceconfiguration.md): The common configuration traits for storage device requests.
- [VZUSBMassStorageDeviceConfiguration](vzusbmassstoragedeviceconfiguration.md): The configuration object that represents a USB Mass storage device.
- [VZDiskImageCachingMode](vzdiskimagecachingmode.md): An integer that describes the disk image caching mode.
- [VZDiskImageSynchronizationMode](vzdiskimagesynchronizationmode.md): An integer that describes the disk image synchronization mode.
- [VZNVMExpressControllerDeviceConfiguration](vznvmexpresscontrollerdeviceconfiguration.md): The configuration object that represents an NVM Express Controller storage device.
