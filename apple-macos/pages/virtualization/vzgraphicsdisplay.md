> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzgraphicsdisplay](https://developer.apple.com/documentation/virtualization/vzgraphicsdisplay)

# VZGraphicsDisplay (Swift)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 14.0+

A class that represents a graphics display in a VM.

## Declaration

```swift
class VZGraphicsDisplay
```

<a id="overview"></a>

## Overview

Don’t instantiate a `VZGraphicsDisplay` directly. Graphics displays are first configured on a [VZGraphicsDeviceConfiguration](vzgraphicsdeviceconfiguration.md) subclass. When you create a [VZVirtualMachine](vzvirtualmachine.md) from the configuration, the displays are available through the [displays](vzgraphicsdevice/displays.md) property of the configuration’s [VZGraphicsDevice](vzgraphicsdevice.md).

## Topics

### Getting the display size

- [sizeInPixels](vzgraphicsdisplay/sizeinpixels.md): Returns the size of the display, in pixels.

### Observing changes to the display configuration

- [addObserver(\_:)](vzgraphicsdisplay/addobserver%28__%29.md): Adds an observer to notify about display configuration changes.
- [removeObserver(\_:)](vzgraphicsdisplay/removeobserver%28__%29.md): Removes a display configuration change observer.
- [VZGraphicsDisplayObserver](vzgraphicsdisplayobserver.md): A protocol you implement to observe state changes in graphic displays.

### Changing the display configuration

- [reconfigure(sizeInPixels:)](vzgraphicsdisplay/reconfigure%28sizeinpixels_%29.md): Resize this display with the new dimensions you provide.
- [reconfigure(configuration:)](vzgraphicsdisplay/reconfigure%28configuration_%29.md): Reconfigure this display with the new display configuration you provide.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [VZMacGraphicsDisplay](vzmacgraphicsdisplay.md)
- [VZVirtioGraphicsScanout](vzvirtiographicsscanout.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Related Documentation

- [VZMacGraphicsDisplayConfiguration](vzmacgraphicsdisplayconfiguration.md): The configuration for a Mac graphics device.
- [VZVirtioGraphicsScanoutConfiguration](vzvirtiographicsscanoutconfiguration.md): The configuration for a Virtio graphics device that configures the dimensions of the graphics device for a Linux VM.

### Devices

- [VZGraphicsDevice](vzgraphicsdevice.md): A class that represents a graphics device in a VM.
- [VZMacGraphicsDevice](vzmacgraphicsdevice.md): An object that represents a Mac graphics device.
- [VZVirtioGraphicsScanout](vzvirtiographicsscanout.md): A Virtio graphics scanout that corresponds to a Virtio graphics scanout configuration.
- [VZMacGraphicsDisplay](vzmacgraphicsdisplay.md): An object that represents the graphics display on a Mac.
- [VZVirtioGraphicsDevice](vzvirtiographicsdevice.md): A Virtio graphics device.
- [VZVirtualMachineViewAdaptor](vzvirtualmachineviewadaptor.md): A sendable wrapper that connects a virtual machine view to a virtual machine.

# VZGraphicsDisplay (Objective-C)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 14.0+

A class that represents a graphics display in a VM.

## Declaration

```objectivec
@interface VZGraphicsDisplay : NSObject
```

<a id="overview"></a>

## Overview

Don’t instantiate a `VZGraphicsDisplay` directly. Graphics displays are first configured on a [VZGraphicsDeviceConfiguration](vzgraphicsdeviceconfiguration.md) subclass. When you create a [VZVirtualMachine](vzvirtualmachine.md) from the configuration, the displays are available through the [displays](vzgraphicsdevice/displays.md) property of the configuration’s [VZGraphicsDevice](vzgraphicsdevice.md).

## Topics

### Getting the display size

- [sizeInPixels](vzgraphicsdisplay/sizeinpixels.md): Returns the size of the display, in pixels.

### Observing changes to the display configuration

- [addObserver:](vzgraphicsdisplay/addobserver%28__%29.md): Adds an observer to notify about display configuration changes.
- [removeObserver:](vzgraphicsdisplay/removeobserver%28__%29.md): Removes a display configuration change observer.
- [VZGraphicsDisplayObserver](vzgraphicsdisplayobserver.md): A protocol you implement to observe state changes in graphic displays.

### Changing the display configuration

- [reconfigureWithSizeInPixels:error:](vzgraphicsdisplay/reconfigure%28sizeinpixels_%29.md): Resize this display with the new dimensions you provide.
- [reconfigureWithConfiguration:error:](vzgraphicsdisplay/reconfigure%28configuration_%29.md): Reconfigure this display with the new display configuration you provide.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [VZMacGraphicsDisplay](vzmacgraphicsdisplay.md)
- [VZVirtioGraphicsScanout](vzvirtiographicsscanout.md)

## See Also

### Related Documentation

- [VZMacGraphicsDisplayConfiguration](vzmacgraphicsdisplayconfiguration.md): The configuration for a Mac graphics device.
- [VZVirtioGraphicsScanoutConfiguration](vzvirtiographicsscanoutconfiguration.md): The configuration for a Virtio graphics device that configures the dimensions of the graphics device for a Linux VM.

### Devices

- [VZGraphicsDevice](vzgraphicsdevice.md): A class that represents a graphics device in a VM.
- [VZMacGraphicsDevice](vzmacgraphicsdevice.md): An object that represents a Mac graphics device.
- [VZVirtioGraphicsScanout](vzvirtiographicsscanout.md): A Virtio graphics scanout that corresponds to a Virtio graphics scanout configuration.
- [VZMacGraphicsDisplay](vzmacgraphicsdisplay.md): An object that represents the graphics display on a Mac.
- [VZVirtioGraphicsDevice](vzvirtiographicsdevice.md): A Virtio graphics device.
