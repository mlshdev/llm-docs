> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtiographicsscanoutconfiguration](https://developer.apple.com/documentation/virtualization/vzvirtiographicsscanoutconfiguration)

# VZVirtioGraphicsScanoutConfiguration (Swift)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 13.0+

The configuration for a Virtio graphics device that configures the dimensions of the graphics device for a Linux VM.

## Declaration

```swift
class VZVirtioGraphicsScanoutConfiguration
```

<a id="overview"></a>

## Overview

Use a `VZVirtioGraphicsScanoutConfiguration` to configure the width and height of a Virtio graphics device.

## Topics

### Creating the configuration object

- [init(widthInPixels:heightInPixels:)](vzvirtiographicsscanoutconfiguration/init%28widthinpixels_heightinpixels_%29.md): Creates a Virtio graphics device with the specified dimensions.

### Instance properties

- [heightInPixels](vzvirtiographicsscanoutconfiguration/heightinpixels.md): An integer value that describes the height of the graphics device in pixels.
- [widthInPixels](vzvirtiographicsscanoutconfiguration/widthinpixels.md): An integer value that describes the width of the graphics device in pixels.

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

### Instance properties

- [scanouts](vzvirtiographicsdeviceconfiguration/scanouts.md): The array of output devices.

# VZVirtioGraphicsScanoutConfiguration (Objective-C)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 13.0+

The configuration for a Virtio graphics device that configures the dimensions of the graphics device for a Linux VM.

## Declaration

```objectivec
@interface VZVirtioGraphicsScanoutConfiguration : VZGraphicsDisplayConfiguration
```

<a id="overview"></a>

## Overview

Use a `VZVirtioGraphicsScanoutConfiguration` to configure the width and height of a Virtio graphics device.

## Topics

### Creating the configuration object

- [initWithWidthInPixels:heightInPixels:](vzvirtiographicsscanoutconfiguration/init%28widthinpixels_heightinpixels_%29.md): Creates a Virtio graphics device with the specified dimensions.

### Instance properties

- [heightInPixels](vzvirtiographicsscanoutconfiguration/heightinpixels.md): An integer value that describes the height of the graphics device in pixels.
- [widthInPixels](vzvirtiographicsscanoutconfiguration/widthinpixels.md): An integer value that describes the width of the graphics device in pixels.

## Relationships

### Inherits From

- [VZGraphicsDisplayConfiguration](vzgraphicsdisplayconfiguration.md)

## See Also

### Instance properties

- [scanouts](vzvirtiographicsdeviceconfiguration/scanouts.md): The array of output devices.
