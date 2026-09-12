> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzgraphicsdevice](https://developer.apple.com/documentation/virtualization/vzgraphicsdevice)

# VZGraphicsDevice (Swift)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 14.0+

A class that represents a graphics device in a VM.

## Declaration

```swift
class VZGraphicsDevice
```

<a id="overview"></a>

## Overview

You don’t instantiate a `VZGraphicsDevice` directly. Graphics devices are first configured on the [VZVirtualMachineConfiguration](vzvirtualmachineconfiguration.md) through a subclass of [VZGraphicsDeviceConfiguration](vzgraphicsdeviceconfiguration.md).

When the framework creates a [VZVirtualMachine](vzvirtualmachine.md) from the configuration, the graphics devices are available through the [graphicsDevices](vzvirtualmachine/graphicsdevices.md) property.

The real type of [VZGraphicsDevice](vzgraphicsdevice.md) corresponds to the type used by the configuration.

For example, a [VZVirtioGraphicsDeviceConfiguration](vzvirtiographicsdeviceconfiguration.md) leads to a device of type [VZVirtioGraphicsDevice](vzvirtiographicsdevice.md) and a [VZMacGraphicsDeviceConfiguration](vzmacgraphicsdeviceconfiguration.md) leads to a device of type [VZMacGraphicsDevice](vzmacgraphicsdevice.md).

## Topics

### Getting the device’s displays

- [displays](vzgraphicsdevice/displays.md): The list of graphics displays configured for this graphics device.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [VZMacGraphicsDevice](vzmacgraphicsdevice.md)
- [VZVirtioGraphicsDevice](vzvirtiographicsdevice.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Related Documentation

- [VZGraphicsDeviceConfiguration](vzgraphicsdeviceconfiguration.md): The base class for a graphics device configuration.
- [VZMacGraphicsDeviceConfiguration](vzmacgraphicsdeviceconfiguration.md): Configuration for a display attached to a Mac graphics device.

### Devices

- [VZGraphicsDisplay](vzgraphicsdisplay.md): A class that represents a graphics display in a VM.
- [VZMacGraphicsDevice](vzmacgraphicsdevice.md): An object that represents a Mac graphics device.
- [VZVirtioGraphicsScanout](vzvirtiographicsscanout.md): A Virtio graphics scanout that corresponds to a Virtio graphics scanout configuration.
- [VZMacGraphicsDisplay](vzmacgraphicsdisplay.md): An object that represents the graphics display on a Mac.
- [VZVirtioGraphicsDevice](vzvirtiographicsdevice.md): A Virtio graphics device.
- [VZVirtualMachineViewAdaptor](vzvirtualmachineviewadaptor.md): A sendable wrapper that connects a virtual machine view to a virtual machine.

# VZGraphicsDevice (Objective-C)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 14.0+

A class that represents a graphics device in a VM.

## Declaration

```objectivec
@interface VZGraphicsDevice : NSObject
```

<a id="overview"></a>

## Overview

You don’t instantiate a `VZGraphicsDevice` directly. Graphics devices are first configured on the [VZVirtualMachineConfiguration](vzvirtualmachineconfiguration.md) through a subclass of [VZGraphicsDeviceConfiguration](vzgraphicsdeviceconfiguration.md).

When the framework creates a [VZVirtualMachine](vzvirtualmachine.md) from the configuration, the graphics devices are available through the [graphicsDevices](vzvirtualmachine/graphicsdevices.md) property.

The real type of [VZGraphicsDevice](vzgraphicsdevice.md) corresponds to the type used by the configuration.

For example, a [VZVirtioGraphicsDeviceConfiguration](vzvirtiographicsdeviceconfiguration.md) leads to a device of type [VZVirtioGraphicsDevice](vzvirtiographicsdevice.md) and a [VZMacGraphicsDeviceConfiguration](vzmacgraphicsdeviceconfiguration.md) leads to a device of type [VZMacGraphicsDevice](vzmacgraphicsdevice.md).

## Topics

### Getting the device’s displays

- [displays](vzgraphicsdevice/displays.md): The list of graphics displays configured for this graphics device.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [VZMacGraphicsDevice](vzmacgraphicsdevice.md)
- [VZVirtioGraphicsDevice](vzvirtiographicsdevice.md)

## See Also

### Related Documentation

- [VZGraphicsDeviceConfiguration](vzgraphicsdeviceconfiguration.md): The base class for a graphics device configuration.
- [VZMacGraphicsDeviceConfiguration](vzmacgraphicsdeviceconfiguration.md): Configuration for a display attached to a Mac graphics device.

### Devices

- [VZGraphicsDisplay](vzgraphicsdisplay.md): A class that represents a graphics display in a VM.
- [VZMacGraphicsDevice](vzmacgraphicsdevice.md): An object that represents a Mac graphics device.
- [VZVirtioGraphicsScanout](vzvirtiographicsscanout.md): A Virtio graphics scanout that corresponds to a Virtio graphics scanout configuration.
- [VZMacGraphicsDisplay](vzmacgraphicsdisplay.md): An object that represents the graphics display on a Mac.
- [VZVirtioGraphicsDevice](vzvirtiographicsdevice.md): A Virtio graphics device.
