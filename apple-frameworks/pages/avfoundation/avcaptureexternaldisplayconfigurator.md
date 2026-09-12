> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptureexternaldisplayconfigurator](https://developer.apple.com/documentation/avfoundation/avcaptureexternaldisplayconfigurator)

# AVCaptureExternalDisplayConfigurator (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

A configurator class allowing you to configure properties of an external display to match the camera’s active video format.

## Declaration

```swift
class AVCaptureExternalDisplayConfigurator
```

<a id="overview"></a>

## Overview

An [AVCaptureExternalDisplayConfigurator](avcaptureexternaldisplayconfigurator.md) allows you to configure a connected external display to output a clean feed using a `CALayer`. Using the configurator, you can opt into automatic adjustment of the external display’s color space and / or frame rate to match your device’s capture configuration. These adjustments are only applied to the external display, not to the device.

> **Note**

> Not all displays support the same configuration options as the device’s capture formats. Your adjustments to the external display are applied with utmost effort to accurately represent the capture device. When your capture device’s [activeFormat](avcapturedevice/activeformat.md) is unavailable on the external display, the configurator automatically chooses the closest available format.

## Topics

### Determining configuration support

- [isMatchingFrameRateSupported](avcaptureexternaldisplayconfigurator/ismatchingframeratesupported.md): Whether the external display supports matching frame rate to a capture device.
- [isPreferredResolutionSupported](avcaptureexternaldisplayconfigurator/ispreferredresolutionsupported.md): Whether the external display supports configuration to your preferred resolution.
- [isBypassingColorSpaceConversionSupported](avcaptureexternaldisplayconfigurator/isbypassingcolorspaceconversionsupported.md): Whether the external display supports bypassing color space conversion.

### Creating an external display configurator

- [init(device:previewLayer:configuration:)](avcaptureexternaldisplayconfigurator/init%28device_previewlayer_configuration_%29.md): An external display configurator instance that attempts to synchronize the preview layer configuration with the device capture configuration.

### Inspecting the configurator

- [activeExternalDisplayFrameRate](avcaptureexternaldisplayconfigurator/activeexternaldisplayframerate.md): The currently configured frame rate on the external display that’s displaying the preview layer.
- [device](avcaptureexternaldisplayconfigurator/device.md): The device for which the coordinator configures the preview layer.
- [isActive](avcaptureexternaldisplayconfigurator/isactive.md): This property tells you whether the configurator is actively configuring the external display.
- [previewLayer](avcaptureexternaldisplayconfigurator/previewlayer.md): The layer for which the configurator adjusts display properties to match the device’s state.

### Stopping configuration

- [stop()](avcaptureexternaldisplayconfigurator/stop%28%29.md): Forces the external display configurator to asynchronously stop configuring the external display.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### External display output

- [AVCaptureExternalDisplayConfiguration](avcaptureexternaldisplayconfiguration.md): A class you use to specify a configuration to your external display configurator.

# AVCaptureExternalDisplayConfigurator (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

A configurator class allowing you to configure properties of an external display to match the camera’s active video format.

## Declaration

```objectivec
@interface AVCaptureExternalDisplayConfigurator : NSObject
```

<a id="overview"></a>

## Overview

An [AVCaptureExternalDisplayConfigurator](avcaptureexternaldisplayconfigurator.md) allows you to configure a connected external display to output a clean feed using a `CALayer`. Using the configurator, you can opt into automatic adjustment of the external display’s color space and / or frame rate to match your device’s capture configuration. These adjustments are only applied to the external display, not to the device.

> **Note**

> Not all displays support the same configuration options as the device’s capture formats. Your adjustments to the external display are applied with utmost effort to accurately represent the capture device. When your capture device’s [activeFormat](avcapturedevice/activeformat.md) is unavailable on the external display, the configurator automatically chooses the closest available format.

## Topics

### Determining configuration support

- [shouldMatchFrameRateSupported](avcaptureexternaldisplayconfigurator/ismatchingframeratesupported.md): Whether the external display supports matching frame rate to a capture device.
- [supportsPreferredResolution](avcaptureexternaldisplayconfigurator/ispreferredresolutionsupported.md): Whether the external display supports configuration to your preferred resolution.
- [supportsBypassingColorSpaceConversion](avcaptureexternaldisplayconfigurator/isbypassingcolorspaceconversionsupported.md): Whether the external display supports bypassing color space conversion.

### Creating an external display configurator

- [initWithDevice:previewLayer:configuration:](avcaptureexternaldisplayconfigurator/init%28device_previewlayer_configuration_%29.md): An external display configurator instance that attempts to synchronize the preview layer configuration with the device capture configuration.

### Inspecting the configurator

- [activeExternalDisplayFrameRate](avcaptureexternaldisplayconfigurator/activeexternaldisplayframerate.md): The currently configured frame rate on the external display that’s displaying the preview layer.
- [device](avcaptureexternaldisplayconfigurator/device.md): The device for which the coordinator configures the preview layer.
- [active](avcaptureexternaldisplayconfigurator/isactive.md): This property tells you whether the configurator is actively configuring the external display.
- [previewLayer](avcaptureexternaldisplayconfigurator/previewlayer.md): The layer for which the configurator adjusts display properties to match the device’s state.

### Stopping configuration

- [stop](avcaptureexternaldisplayconfigurator/stop%28%29.md): Forces the external display configurator to asynchronously stop configuring the external display.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### External display output

- [AVCaptureExternalDisplayConfiguration](avcaptureexternaldisplayconfiguration.md): A class you use to specify a configuration to your external display configurator.
