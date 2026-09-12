> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtlowlatencyframeinterpolationparameters](https://developer.apple.com/documentation/videotoolbox/vtlowlatencyframeinterpolationparameters)

# VTLowLatencyFrameInterpolationParameters (Swift)

**Framework:** Video Toolbox  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

An object that contains both input and output parameters that the low-latency frame interpolation processor needs.

## Declaration

```swift
class VTLowLatencyFrameInterpolationParameters
```

<a id="overview"></a>

## Overview

Use this object in the `processWithParameters` call of `VTFrameProcessor` class.

`VTLowLatencyFrameInterpolationParameters` are frame-level parameters.

## Topics

### Creating a parameters object

- [init(sourceFrame:previousFrame:interpolationPhase:destinationFrames:)](vtlowlatencyframeinterpolationparameters/init%28sourceframe_previousframe_interpolationphase_destinationframes_%29.md)

### Inspecting the parameters

- [sourceFrame](vtlowlatencyframeinterpolationparameters/sourceframe.md): Source frame that you provided when creating the low-latency frame interpolation parameters object.
- [previousFrame](vtlowlatencyframeinterpolationparameters/previousframe.md): Previous frame that you provided when creating the low-latency frame interpolation parameters object.
- [interpolationPhase](vtlowlatencyframeinterpolationparameters/interpolationphase-886vi.md)

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

### Low-latency frame interpolation

- [VTLowLatencyFrameInterpolationConfiguration](vtlowlatencyframeinterpolationconfiguration.md): Configuration that you use to program Video Toolbox frame processor for low-latency frame interpolation.

# VTLowLatencyFrameInterpolationParameters (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

An object that contains both input and output parameters that the low-latency frame interpolation processor needs.

## Declaration

```objectivec
@interface VTLowLatencyFrameInterpolationParameters : NSObject
```

<a id="overview"></a>

## Overview

Use this object in the `processWithParameters` call of `VTFrameProcessor` class.

`VTLowLatencyFrameInterpolationParameters` are frame-level parameters.

## Topics

### Inspecting the parameters

- [sourceFrame](vtlowlatencyframeinterpolationparameters/sourceframe.md): Source frame that you provided when creating the low-latency frame interpolation parameters object.
- [previousFrame](vtlowlatencyframeinterpolationparameters/previousframe.md): Previous frame that you provided when creating the low-latency frame interpolation parameters object.
- [destinationFrames](vtlowlatencyframeinterpolationparameters/destinationframes.md): Array of destination frames that you provided when creating the low-latency frame interpolation parameters object.

### Instance Properties

- [interpolationPhase](vtlowlatencyframeinterpolationparameters/interpolationphase-33m49.md): Array of interpolation phases that you provided when creating the low-latency frame interpolation parameters object.

### Instance Methods

- [initWithSourceFrame:previousFrame:interpolationPhase:destinationFrames:](vtlowlatencyframeinterpolationparameters/initwithsourceframe_previousframe_interpolationphase_destinationframes_.md): Creates a new low-latency frame interpolation parameters object.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [VTFrameProcessorParameters](vtframeprocessorparameters.md)

## See Also

### Low-latency frame interpolation

- [VTLowLatencyFrameInterpolationConfiguration](vtlowlatencyframeinterpolationconfiguration.md): Configuration that you use to program Video Toolbox frame processor for low-latency frame interpolation.
