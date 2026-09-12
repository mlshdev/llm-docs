> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzcustomvirtiodeviceconfiguration](https://developer.apple.com/documentation/virtualization/vzcustomvirtiodeviceconfiguration)

# VZCustomVirtioDeviceConfiguration (Swift)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 27.0+

An object that defines a custom Virtio Device configuration.

## Declaration

```swift
class VZCustomVirtioDeviceConfiguration
```

<a id="overview"></a>

## Overview

`VZCustomVirtioDeviceConfiguration` defines the configuration of a [VZCustomVirtioDevice](vzcustomvirtiodevice.md).

In order for a guest to be able to discover a Virtio device, you need to configure the following properties in the custom device configuration:

- [deviceID](vzcustomvirtiodeviceconfiguration/deviceid.md)
- [pciClassID](vzcustomvirtiodeviceconfiguration/pciclassid.md)
- [pciSubclassID](vzcustomvirtiodeviceconfiguration/pcisubclassid.md)
- [virtioQueueCount](vzcustomvirtiodeviceconfiguration/virtioqueuecount.md)

The remaining custom device configuration properties define additional features and configurations that are specific to the kind of Virtio device you’re defining.

If the `VZCustomVirtioDeviceConfiguration` you configure is valid, the Virtualization framework creates a [VZCustomVirtioDevice](vzcustomvirtiodevice.md) upon the creation of the [VZVirtualMachine](vzvirtualmachine.md). The framework notifies you upon creating the device by calling [customVirtioConfiguration(\_:didCreateDevice:)](vzcustomvirtiodeviceconfigurationdelegate/customvirtioconfiguration%28__didcreatedevice_%29.md) on the delegate method you provide.

## Topics

### Instance Properties

- [deviceID](vzcustomvirtiodeviceconfiguration/deviceid.md): The Virtio device ID of the device.
- [deviceSpecificConfiguration](vzcustomvirtiodeviceconfiguration/devicespecificconfiguration.md): The device-specific configuration for the device.
- [mandatoryFeatures](vzcustomvirtiodeviceconfiguration/mandatoryfeatures.md): The set of mandatory features that the device offers and the guest must accept.
- [optionalFeatures](vzcustomvirtiodeviceconfiguration/optionalfeatures.md): The set of optional features that the device offers.
- [pciClassID](vzcustomvirtiodeviceconfiguration/pciclassid.md): The PCI class ID of the device.
- [pciSubclassID](vzcustomvirtiodeviceconfiguration/pcisubclassid.md): The PCI subclass ID of the device.
- [provider](vzcustomvirtiodeviceconfiguration/provider.md): The custom Virtio device provider.
- [sharedMemoryRegions](vzcustomvirtiodeviceconfiguration/sharedmemoryregions.md): The list of shared memory regions.
- [supportsSaveRestore](vzcustomvirtiodeviceconfiguration/supportssaverestore.md)
- [virtioQueueCount](vzcustomvirtiodeviceconfiguration/virtioqueuecount.md): The number of virtqueues (Virtio queues) on this device.

### Type Properties

- [maximumAllowedSharedMemoryRegionCount](vzcustomvirtiodeviceconfiguration/maximumallowedsharedmemoryregioncount.md): The maximum number of Virtio shared memory regions the framework allows.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Related Documentation

- [VZCustomVirtioDevice](vzcustomvirtiodevice.md): An interface that represents a custom Virtio device that you provide the implementation for.
- [VZCustomVirtioDeviceConfigurationDelegate](vzcustomvirtiodeviceconfigurationdelegate.md): A class that conforms to the custom Virtio device configuration delegate protocol that can provide methods for tracking the state of a custom Virtio device configuration object.

### Creating and configuring Virtio drivers

- [VZCustomVirtioDevice](vzcustomvirtiodevice.md): An interface that represents a custom Virtio device that you provide the implementation for.
- [VZVirtioDeviceSpecificConfiguration](vzvirtiodevicespecificconfiguration.md): The device-specific configuration for a Virtio device

# VZCustomVirtioDeviceConfiguration (Objective-C)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 27.0+

An object that defines a custom Virtio Device configuration.

## Declaration

```objectivec
@interface VZCustomVirtioDeviceConfiguration : NSObject
```

<a id="overview"></a>

## Overview

`VZCustomVirtioDeviceConfiguration` defines the configuration of a [VZCustomVirtioDevice](vzcustomvirtiodevice.md).

In order for a guest to be able to discover a Virtio device, you need to configure the following properties in the custom device configuration:

- [deviceID](vzcustomvirtiodeviceconfiguration/deviceid.md)
- [PCIClassID](vzcustomvirtiodeviceconfiguration/pciclassid.md)
- [PCISubclassID](vzcustomvirtiodeviceconfiguration/pcisubclassid.md)
- [virtioQueueCount](vzcustomvirtiodeviceconfiguration/virtioqueuecount.md)

The remaining custom device configuration properties define additional features and configurations that are specific to the kind of Virtio device you’re defining.

If the `VZCustomVirtioDeviceConfiguration` you configure is valid, the Virtualization framework creates a [VZCustomVirtioDevice](vzcustomvirtiodevice.md) upon the creation of the [VZVirtualMachine](vzvirtualmachine.md). The framework notifies you upon creating the device by calling [customVirtioConfiguration:didCreateDevice:](vzcustomvirtiodeviceconfigurationdelegate/customvirtioconfiguration%28__didcreatedevice_%29.md) on the delegate method you provide.

## Topics

### Instance Properties

- [deviceID](vzcustomvirtiodeviceconfiguration/deviceid.md): The Virtio device ID of the device.
- [deviceSpecificConfiguration](vzcustomvirtiodeviceconfiguration/devicespecificconfiguration.md): The device-specific configuration for the device.
- [mandatoryFeatures](vzcustomvirtiodeviceconfiguration/mandatoryfeatures.md): The set of mandatory features that the device offers and the guest must accept.
- [optionalFeatures](vzcustomvirtiodeviceconfiguration/optionalfeatures.md): The set of optional features that the device offers.
- [PCIClassID](vzcustomvirtiodeviceconfiguration/pciclassid.md): The PCI class ID of the device.
- [PCISubclassID](vzcustomvirtiodeviceconfiguration/pcisubclassid.md): The PCI subclass ID of the device.
- [provider](vzcustomvirtiodeviceconfiguration/provider.md): The custom Virtio device provider.
- [sharedMemoryRegions](vzcustomvirtiodeviceconfiguration/sharedmemoryregions.md): The list of shared memory regions.
- [supportsSaveRestore](vzcustomvirtiodeviceconfiguration/supportssaverestore.md)
- [virtioQueueCount](vzcustomvirtiodeviceconfiguration/virtioqueuecount.md): The number of virtqueues (Virtio queues) on this device.

### Type Properties

- [maximumAllowedSharedMemoryRegionCount](vzcustomvirtiodeviceconfiguration/maximumallowedsharedmemoryregioncount.md): The maximum number of Virtio shared memory regions the framework allows.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)

## See Also

### Related Documentation

- [VZCustomVirtioDevice](vzcustomvirtiodevice.md): An interface that represents a custom Virtio device that you provide the implementation for.
- [VZCustomVirtioDeviceConfigurationDelegate](vzcustomvirtiodeviceconfigurationdelegate.md): A class that conforms to the custom Virtio device configuration delegate protocol that can provide methods for tracking the state of a custom Virtio device configuration object.

### Creating and configuring Virtio drivers

- [VZCustomVirtioDevice](vzcustomvirtiodevice.md): An interface that represents a custom Virtio device that you provide the implementation for.
- [VZVirtioDeviceSpecificConfiguration](vzvirtiodevicespecificconfiguration.md): The device-specific configuration for a Virtio device
