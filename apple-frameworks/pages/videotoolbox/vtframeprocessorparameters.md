> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtframeprocessorparameters](https://developer.apple.com/documentation/videotoolbox/vtframeprocessorparameters)

# VTFrameProcessorParameters (Swift)

**Framework:** Video Toolbox  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 15.4+ · tvOS 26.0+ · visionOS 26.0+

The base protocol for input and output processing parameters for a frame processor implementation.

## Declaration

```swift
protocol VTFrameProcessorParameters : NSObjectProtocol
```

<a id="overview"></a>

## Overview

An instance of a class corresponding to this protocol is passed to [processWithParameters:error:](vtframeprocessor/processwithparameters_error_.md) calls and for asynchronous versions of those calls, the same instance is returned in the completion.

## Topics

### Inspecting the parameters

- [sourceFrame](vtframeprocessorparameters/sourceframe.md): A processor frame that contains the current source frame to use for all processing features.
- [destinationFrame](vtframeprocessorparameters/destinationframe-5suam.md): [VTFrameProcessorFrame](vtframeprocessorframe.md) that contains the destination frame for processors which output a single processed frame.
- [destinationFrames](vtframeprocessorparameters/destinationframes-46ken.md): Array of [VTFrameProcessorFrame](vtframeprocessorframe.md) that contains the destination frames for processors which may output more than one processed frame.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [VTFrameRateConversionParameters](vtframerateconversionparameters.md)
- [VTLowLatencyFrameInterpolationParameters](vtlowlatencyframeinterpolationparameters.md)
- [VTLowLatencySuperResolutionScalerParameters](vtlowlatencysuperresolutionscalerparameters.md)
- [VTMotionBlurParameters](vtmotionblurparameters.md)
- [VTOpticalFlowParameters](vtopticalflowparameters.md)
- [VTSuperResolutionScalerParameters](vtsuperresolutionscalerparameters.md)
- [VTTemporalNoiseFilterParameters](vttemporalnoisefilterparameters.md)

## See Also

### Frame processor

- [Enhancing your app with machine learning-based video effects](enhancing-your-app-with-machine-learning-based-video-effects.md): Add powerful effects to your videos using the VideoToolbox VTFrameProcessor API.
- [VTFrameProcessor](vtframeprocessor.md): A class that creates a new frame processor for the configured video effect.
- [VTFrameProcessorConfiguration](vtframeprocessorconfiguration.md): A protocol that describes the configuration of a processor to use during a video processing session.
- [VTFrameProcessorFrame](vtframeprocessorframe.md): An object that wraps video frames to send to the processor, as source, reference, or output frames.

# VTFrameProcessorParameters (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 15.4+ · tvOS 26.0+ · visionOS 26.0+

The base protocol for input and output processing parameters for a frame processor implementation.

## Declaration

```objectivec
@protocol VTFrameProcessorParameters <NSObject>
```

<a id="overview"></a>

## Overview

An instance of a class corresponding to this protocol is passed to [processWithParameters:error:](vtframeprocessor/processwithparameters_error_.md) calls and for asynchronous versions of those calls, the same instance is returned in the completion.

## Topics

### Inspecting the parameters

- [sourceFrame](vtframeprocessorparameters/sourceframe.md): A processor frame that contains the current source frame to use for all processing features.

### Instance Properties

- [destinationFrame](vtframeprocessorparameters/destinationframe-3im3l.md): Destination frame that contains the destination frame for processors which output a single processed frame.
- [destinationFrames](vtframeprocessorparameters/destinationframes-8yges.md): Array of destination frames for processors which may output more than one processed frame.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [VTFrameRateConversionParameters](vtframerateconversionparameters.md)
- [VTLowLatencyFrameInterpolationParameters](vtlowlatencyframeinterpolationparameters.md)
- [VTLowLatencySuperResolutionScalerParameters](vtlowlatencysuperresolutionscalerparameters.md)
- [VTMotionBlurParameters](vtmotionblurparameters.md)
- [VTOpticalFlowParameters](vtopticalflowparameters.md)
- [VTSuperResolutionScalerParameters](vtsuperresolutionscalerparameters.md)
- [VTTemporalNoiseFilterParameters](vttemporalnoisefilterparameters.md)

## See Also

### Frame processor

- [VTFrameProcessor](vtframeprocessor.md): A class that creates a new frame processor for the configured video effect.
- [VTFrameProcessorConfiguration](vtframeprocessorconfiguration.md): A protocol that describes the configuration of a processor to use during a video processing session.
- [VTFrameProcessorFrame](vtframeprocessorframe.md): An object that wraps video frames to send to the processor, as source, reference, or output frames.
