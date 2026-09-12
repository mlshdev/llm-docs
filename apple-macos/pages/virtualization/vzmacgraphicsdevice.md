> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzmacgraphicsdevice](https://developer.apple.com/documentation/virtualization/vzmacgraphicsdevice)

# VZMacGraphicsDevice (Swift)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 14.0+

An object that represents a Mac graphics device.

## Declaration

```swift
class VZMacGraphicsDevice
```

<a id="overview"></a>

## Overview

You don’t instantiate a `VZMacGraphicsDevice` directly. Graphics devices are first configured on the [VZVirtualMachineConfiguration](vzvirtualmachineconfiguration.md) through a subclass of [VZMacGraphicsDeviceConfiguration](vzmacgraphicsdeviceconfiguration.md).  When the framework creates a VZVirtualMachine from the configuration, the graphics devices are available through the `graphicsDevices` property.

## Relationships

### Inherits From

- [VZGraphicsDevice](vzgraphicsdevice.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Related Documentation

- [VZMacGraphicsDeviceConfiguration](vzmacgraphicsdeviceconfiguration.md): Configuration for a display attached to a Mac graphics device.

### Devices

- [VZGraphicsDevice](vzgraphicsdevice.md): A class that represents a graphics device in a VM.
- [VZGraphicsDisplay](vzgraphicsdisplay.md): A class that represents a graphics display in a VM.
- [VZVirtioGraphicsScanout](vzvirtiographicsscanout.md): A Virtio graphics scanout that corresponds to a Virtio graphics scanout configuration.
- [VZMacGraphicsDisplay](vzmacgraphicsdisplay.md): An object that represents the graphics display on a Mac.
- [VZVirtioGraphicsDevice](vzvirtiographicsdevice.md): A Virtio graphics device.
- [VZVirtualMachineViewAdaptor](vzvirtualmachineviewadaptor.md): A sendable wrapper that connects a virtual machine view to a virtual machine.

# VZMacGraphicsDevice (Objective-C)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 14.0+

An object that represents a Mac graphics device.

## Declaration

```objectivec
@interface VZMacGraphicsDevice : VZGraphicsDevice
```

<a id="overview"></a>

## Overview

You don’t instantiate a `VZMacGraphicsDevice` directly. Graphics devices are first configured on the [VZVirtualMachineConfiguration](vzvirtualmachineconfiguration.md) through a subclass of [VZMacGraphicsDeviceConfiguration](vzmacgraphicsdeviceconfiguration.md).  When the framework creates a VZVirtualMachine from the configuration, the graphics devices are available through the `graphicsDevices` property.

## Relationships

### Inherits From

- [VZGraphicsDevice](vzgraphicsdevice.md)

## See Also

### Related Documentation

- [VZMacGraphicsDeviceConfiguration](vzmacgraphicsdeviceconfiguration.md): Configuration for a display attached to a Mac graphics device.

### Devices

- [VZGraphicsDevice](vzgraphicsdevice.md): A class that represents a graphics device in a VM.
- [VZGraphicsDisplay](vzgraphicsdisplay.md): A class that represents a graphics display in a VM.
- [VZVirtioGraphicsScanout](vzvirtiographicsscanout.md): A Virtio graphics scanout that corresponds to a Virtio graphics scanout configuration.
- [VZMacGraphicsDisplay](vzmacgraphicsdisplay.md): An object that represents the graphics display on a Mac.
- [VZVirtioGraphicsDevice](vzvirtiographicsdevice.md): A Virtio graphics device.
