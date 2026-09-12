> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzcustomvirtiodevice](https://developer.apple.com/documentation/virtualization/vzcustomvirtiodevice)

# VZCustomVirtioDevice (Swift)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 27.0+

An interface that represents a custom Virtio device that you provide the implementation for.

## Declaration

```swift
class VZCustomVirtioDevice
```

<a id="overview"></a>

## Overview

A Virtio device is a virtual emulated device the framework exposes to the guest OS following the Virtio standard. For more information about the Virtio standard, see the [Virtio specification](https://docs.oasis-open.org/virtio/virtio/v1.3/csd01/virtio-v1.3-csd01.html).

A `VZCustomVirtioDevice` allows you to define, configure, and provide your own implementation for a device that uses the Virtio protocol.

To define a `VZCustomVirtioDevice` create and configure a `VZCustomVirtioDeviceConfiguration` object.

Once configured, the framework creates a `VZCustomVirtioDevice` object and returns it through the invocation of the delegate’s [customVirtioConfiguration(\_:didCreateDevice:)](vzcustomvirtiodeviceconfigurationdelegate/customvirtioconfiguration%28__didcreatedevice_%29.md) method. Implement a class that conforms to the [VZCustomVirtioDeviceDelegate](vzcustomvirtiodevicedelegate.md) protocol to provide an implementation for the device.

The Virtualization framework performs all operations on the [VZCustomVirtioDevice](vzcustomvirtiodevice.md) and [VZCustomVirtioDeviceDelegate](vzcustomvirtiodevicedelegate.md) through a serial queue that you can configure through the [deviceQueue](vzcustomvirtiodevice/devicequeue.md) property. If the queue isn’t set, the framework performs all operations on the queue in the VM’s [VZVirtualMachine](vzvirtualmachine.md) [queue](vzvirtualmachine/queue.md) property by default.

## Topics

### Instance Properties

- [delegate](vzcustomvirtiodevice/delegate.md): The device’s delegate.
- [deviceQueue](vzcustomvirtiodevice/devicequeue.md): The dispatch queue this device uses.
- [negotiatedFeatures](vzcustomvirtiodevice/negotiatedfeatures.md): The set of features that the driver and the device have successfully negotiated, or `nil` if no feature negotiation has taken place.
- [sharedMemoryRegions](vzcustomvirtiodevice/sharedmemoryregions.md): An array of shared memory regions that this device exposes to the guest.

### Instance Methods

- [guestMemoryMapping(atPhysicalAddress:length:)](vzcustomvirtiodevice/guestmemorymapping%28atphysicaladdress_length_%29.md): Returns guest memory mapping referred to by physicalAddress and length.
- [queue(at:)](vzcustomvirtiodevice/queue%28at_%29.md): Returns Virtio queue at the specified index that belongs to this device.
- [requestReset()](vzcustomvirtiodevice/requestreset%28%29.md): A request to reset the device.
- [update(\_:completionHandler:)](vzcustomvirtiodevice/update%28__completionhandler_%29.md): Updates the device’s device-specific configuration.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Related Documentation

- [VZCustomVirtioDeviceConfiguration](vzcustomvirtiodeviceconfiguration.md): An object that defines a custom Virtio Device configuration.
- [VZCustomVirtioDeviceConfigurationDelegate](vzcustomvirtiodeviceconfigurationdelegate.md): A class that conforms to the custom Virtio device configuration delegate protocol that can provide methods for tracking the state of a custom Virtio device configuration object.
- [VZCustomVirtioDeviceDelegate](vzcustomvirtiodevicedelegate.md): A delegate protocol that defines the methods you implement to respond to the life cycle events of a custom Virtio device.
- [VZVirtioQueue](vzvirtioqueue.md): A Virtio queue.
- [VZVirtioSharedMemoryRegion](vzvirtiosharedmemoryregion.md): A class that represents a Virtio shared memory region for a custom Virtio device in a virtual machine.

### Creating and configuring Virtio drivers

- [VZCustomVirtioDeviceConfiguration](vzcustomvirtiodeviceconfiguration.md): An object that defines a custom Virtio Device configuration.
- [VZVirtioDeviceSpecificConfiguration](vzvirtiodevicespecificconfiguration.md): The device-specific configuration for a Virtio device

# VZCustomVirtioDevice (Objective-C)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 27.0+

An interface that represents a custom Virtio device that you provide the implementation for.

## Declaration

```objectivec
@interface VZCustomVirtioDevice : NSObject
```

<a id="overview"></a>

## Overview

A Virtio device is a virtual emulated device the framework exposes to the guest OS following the Virtio standard. For more information about the Virtio standard, see the [Virtio specification](https://docs.oasis-open.org/virtio/virtio/v1.3/csd01/virtio-v1.3-csd01.html).

A `VZCustomVirtioDevice` allows you to define, configure, and provide your own implementation for a device that uses the Virtio protocol.

To define a `VZCustomVirtioDevice` create and configure a `VZCustomVirtioDeviceConfiguration` object.

Once configured, the framework creates a `VZCustomVirtioDevice` object and returns it through the invocation of the delegate’s [customVirtioConfiguration:didCreateDevice:](vzcustomvirtiodeviceconfigurationdelegate/customvirtioconfiguration%28__didcreatedevice_%29.md) method. Implement a class that conforms to the [VZCustomVirtioDeviceDelegate](vzcustomvirtiodevicedelegate.md) protocol to provide an implementation for the device.

The Virtualization framework performs all operations on the [VZCustomVirtioDevice](vzcustomvirtiodevice.md) and [VZCustomVirtioDeviceDelegate](vzcustomvirtiodevicedelegate.md) through a serial queue that you can configure through the [deviceQueue](vzcustomvirtiodevice/devicequeue.md) property. If the queue isn’t set, the framework performs all operations on the queue in the VM’s [VZVirtualMachine](vzvirtualmachine.md) [queue](vzvirtualmachine/queue.md) property by default.

## Topics

### Instance Properties

- [delegate](vzcustomvirtiodevice/delegate.md): The device’s delegate.
- [deviceQueue](vzcustomvirtiodevice/devicequeue.md): The dispatch queue this device uses.
- [negotiatedFeatures](vzcustomvirtiodevice/negotiatedfeatures.md): The set of features that the driver and the device have successfully negotiated, or `nil` if no feature negotiation has taken place.
- [sharedMemoryRegions](vzcustomvirtiodevice/sharedmemoryregions.md): An array of shared memory regions that this device exposes to the guest.

### Instance Methods

- [guestMemoryMappingAtPhysicalAddress:length:](vzcustomvirtiodevice/guestmemorymapping%28atphysicaladdress_length_%29.md): Returns guest memory mapping referred to by physicalAddress and length.
- [queueAtIndex:](vzcustomvirtiodevice/queue%28at_%29.md): Returns Virtio queue at the specified index that belongs to this device.
- [requestDeviceReset](vzcustomvirtiodevice/requestreset%28%29.md): A request to reset the device.
- [updateDeviceSpecificConfiguration:completionHandler:](vzcustomvirtiodevice/update%28__completionhandler_%29.md): Updates the device’s device-specific configuration.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Related Documentation

- [VZCustomVirtioDeviceConfiguration](vzcustomvirtiodeviceconfiguration.md): An object that defines a custom Virtio Device configuration.
- [VZCustomVirtioDeviceConfigurationDelegate](vzcustomvirtiodeviceconfigurationdelegate.md): A class that conforms to the custom Virtio device configuration delegate protocol that can provide methods for tracking the state of a custom Virtio device configuration object.
- [VZCustomVirtioDeviceDelegate](vzcustomvirtiodevicedelegate.md): A delegate protocol that defines the methods you implement to respond to the life cycle events of a custom Virtio device.
- [VZVirtioQueue](vzvirtioqueue.md): A Virtio queue.
- [VZVirtioSharedMemoryRegion](vzvirtiosharedmemoryregion.md): A class that represents a Virtio shared memory region for a custom Virtio device in a virtual machine.

### Creating and configuring Virtio drivers

- [VZCustomVirtioDeviceConfiguration](vzcustomvirtiodeviceconfiguration.md): An object that defines a custom Virtio Device configuration.
- [VZVirtioDeviceSpecificConfiguration](vzvirtiodevicespecificconfiguration.md): The device-specific configuration for a Virtio device
