> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptureexternaldisplayconfiguration](https://developer.apple.com/documentation/avfoundation/avcaptureexternaldisplayconfiguration)

# AVCaptureExternalDisplayConfiguration (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

A class you use to specify a configuration to your external display configurator.

## Declaration

```swift
class AVCaptureExternalDisplayConfiguration
```

<a id="overview"></a>

## Overview

Using an [AVCaptureExternalDisplayConfiguration](avcaptureexternaldisplayconfiguration.md), you direct your [AVCaptureExternalDisplayConfigurator](avcaptureexternaldisplayconfigurator.md) how to configure an external display to match your device’s active video format.

## Topics

### Modifying the configuration

- [bypassColorSpaceConversion](avcaptureexternaldisplayconfiguration/bypasscolorspaceconversion.md): A property indicating whether the color space of the configurator’s preview layer should be preserved on the output display by avoiding color space conversions.
- [preferredResolution](avcaptureexternaldisplayconfiguration/preferredresolution.md): Your preferred external display resolution.
- [shouldMatchFrameRate](avcaptureexternaldisplayconfiguration/shouldmatchframerate.md): A property indicating whether the frame rate of the external display should be configured to match the camera’s frame rate.

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

- [AVCaptureExternalDisplayConfigurator](avcaptureexternaldisplayconfigurator.md): A configurator class allowing you to configure properties of an external display to match the camera’s active video format.

# AVCaptureExternalDisplayConfiguration (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

A class you use to specify a configuration to your external display configurator.

## Declaration

```objectivec
@interface AVCaptureExternalDisplayConfiguration : NSObject
```

<a id="overview"></a>

## Overview

Using an [AVCaptureExternalDisplayConfiguration](avcaptureexternaldisplayconfiguration.md), you direct your [AVCaptureExternalDisplayConfigurator](avcaptureexternaldisplayconfigurator.md) how to configure an external display to match your device’s active video format.

## Topics

### Modifying the configuration

- [bypassColorSpaceConversion](avcaptureexternaldisplayconfiguration/bypasscolorspaceconversion.md): A property indicating whether the color space of the configurator’s preview layer should be preserved on the output display by avoiding color space conversions.
- [preferredResolution](avcaptureexternaldisplayconfiguration/preferredresolution.md): Your preferred external display resolution.
- [shouldMatchFrameRate](avcaptureexternaldisplayconfiguration/shouldmatchframerate.md): A property indicating whether the frame rate of the external display should be configured to match the camera’s frame rate.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### External display output

- [AVCaptureExternalDisplayConfigurator](avcaptureexternaldisplayconfigurator.md): A configurator class allowing you to configure properties of an external display to match the camera’s active video format.
