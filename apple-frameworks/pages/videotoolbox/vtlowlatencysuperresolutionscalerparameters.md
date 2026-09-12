> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtlowlatencysuperresolutionscalerparameters](https://developer.apple.com/documentation/videotoolbox/vtlowlatencysuperresolutionscalerparameters)

# VTLowLatencySuperResolutionScalerParameters (Swift)

**Framework:** Video Toolbox  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

An object that contains both input and output parameters that the low-latency super-resolution scaler frame processor needs.

## Declaration

```swift
class VTLowLatencySuperResolutionScalerParameters
```

<a id="overview"></a>

## Overview

Use this object in the `processWithParameters` call of `VTFrameProcessor` class.

`VTLowLatencySuperResolutionScalerParameters` are frame-level parameters.

## Topics

### Creating a parameters object

- [init(sourceFrame:destinationFrame:)](vtlowlatencysuperresolutionscalerparameters/init%28sourceframe_destinationframe_%29.md): Creates a new low-latency, super-resolution scaler parameters object.

### Inspecting the parameters

- [sourceFrame](vtlowlatencysuperresolutionscalerparameters/sourceframe.md): Current source frame, which must be non `nil`.

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
- [VTFrameProcessorParameters](vtframeprocessorparameters.md)

## See Also

### Low-latency super resolution

- [VTLowLatencySuperResolutionScalerConfiguration](vtlowlatencysuperresolutionscalerconfiguration.md): An object you use to configure frame processor for low-latency super-resolution scaler processing.

# VTLowLatencySuperResolutionScalerParameters (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

An object that contains both input and output parameters that the low-latency super-resolution scaler frame processor needs.

## Declaration

```objectivec
@interface VTLowLatencySuperResolutionScalerParameters : NSObject
```

<a id="overview"></a>

## Overview

Use this object in the `processWithParameters` call of `VTFrameProcessor` class.

`VTLowLatencySuperResolutionScalerParameters` are frame-level parameters.

## Topics

### Creating a parameters object

- [initWithSourceFrame:destinationFrame:](vtlowlatencysuperresolutionscalerparameters/init%28sourceframe_destinationframe_%29.md): Creates a new low-latency, super-resolution scaler parameters object.

### Inspecting the parameters

- [sourceFrame](vtlowlatencysuperresolutionscalerparameters/sourceframe.md): Current source frame, which must be non `nil`.
- [destinationFrame](vtlowlatencysuperresolutionscalerparameters/destinationframe.md): Destination frame that contains user-allocated pixel buffer that receives the scaled processor output.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [VTFrameProcessorParameters](vtframeprocessorparameters.md)

## See Also

### Low-latency super resolution

- [VTLowLatencySuperResolutionScalerConfiguration](vtlowlatencysuperresolutionscalerconfiguration.md): An object you use to configure frame processor for low-latency super-resolution scaler processing.
