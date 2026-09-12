> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzmacgraphicsdisplayconfiguration](https://developer.apple.com/documentation/virtualization/vzmacgraphicsdisplayconfiguration)

# VZMacGraphicsDisplayConfiguration (Swift)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 12.0+

The configuration for a Mac graphics device.

## Declaration

```swift
class VZMacGraphicsDisplayConfiguration
```

<a id="overview"></a>

## Overview

Use this device to attach a display that’s shown in a [VZVirtualMachineView](vzvirtualmachineview.md).

## Topics

### Creating the display configuration

- [init(for:sizeInPoints:)](vzmacgraphicsdisplayconfiguration/init%28for_sizeinpoints_%29.md): Create a display configuration suitable for showing on the specified screen.
- [init(widthInPixels:heightInPixels:pixelsPerInch:)](vzmacgraphicsdisplayconfiguration/init%28widthinpixels_heightinpixels_pixelsperinch_%29.md): Create a display configuration with the specified pixel dimensions and pixel density.

### Configuring the display properties

- [heightInPixels](vzmacgraphicsdisplayconfiguration/heightinpixels.md): The height of the display, in pixels.
- [widthInPixels](vzmacgraphicsdisplayconfiguration/widthinpixels.md): The width of the display, in pixels.
- [pixelsPerInch](vzmacgraphicsdisplayconfiguration/pixelsperinch.md): The pixel density in pixels per inch.

### Initializers

- [init(forScreen:sizeInPoints:)](vzmacgraphicsdisplayconfiguration/init%28forscreen_sizeinpoints_%29.md)

## Relationships

### Inherits From

- [VZGraphicsDisplayConfiguration](vzgraphicsdisplayconfiguration.md)

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

- [VZGraphicsDisplayConfiguration](vzgraphicsdisplayconfiguration.md): The base class for a graphics display configuration.
- [VZMacGraphicsDeviceConfiguration](vzmacgraphicsdeviceconfiguration.md): Configuration for a display attached to a Mac graphics device.
- [VZGraphicsDeviceConfiguration](vzgraphicsdeviceconfiguration.md): The base class for a graphics device configuration.
- [VZVirtioGraphicsDeviceConfiguration](vzvirtiographicsdeviceconfiguration.md): Configuration that represents the configuration of a Virtio graphics device for a Linux VM.

# VZMacGraphicsDisplayConfiguration (Objective-C)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 12.0+

The configuration for a Mac graphics device.

## Declaration

```objectivec
@interface VZMacGraphicsDisplayConfiguration : VZGraphicsDisplayConfiguration
```

<a id="overview"></a>

## Overview

Use this device to attach a display that’s shown in a [VZVirtualMachineView](vzvirtualmachineview.md).

## Topics

### Creating the display configuration

- [initForScreen:sizeInPoints:](vzmacgraphicsdisplayconfiguration/init%28for_sizeinpoints_%29.md): Create a display configuration suitable for showing on the specified screen.
- [initWithWidthInPixels:heightInPixels:pixelsPerInch:](vzmacgraphicsdisplayconfiguration/init%28widthinpixels_heightinpixels_pixelsperinch_%29.md): Create a display configuration with the specified pixel dimensions and pixel density.

### Configuring the display properties

- [heightInPixels](vzmacgraphicsdisplayconfiguration/heightinpixels.md): The height of the display, in pixels.
- [widthInPixels](vzmacgraphicsdisplayconfiguration/widthinpixels.md): The width of the display, in pixels.
- [pixelsPerInch](vzmacgraphicsdisplayconfiguration/pixelsperinch.md): The pixel density in pixels per inch.

## Relationships

### Inherits From

- [VZGraphicsDisplayConfiguration](vzgraphicsdisplayconfiguration.md)

## See Also

### Configurations

- [VZGraphicsDisplayConfiguration](vzgraphicsdisplayconfiguration.md): The base class for a graphics display configuration.
- [VZMacGraphicsDeviceConfiguration](vzmacgraphicsdeviceconfiguration.md): Configuration for a display attached to a Mac graphics device.
- [VZGraphicsDeviceConfiguration](vzgraphicsdeviceconfiguration.md): The base class for a graphics device configuration.
- [VZVirtioGraphicsDeviceConfiguration](vzvirtiographicsdeviceconfiguration.md): Configuration that represents the configuration of a Virtio graphics device for a Linux VM.
