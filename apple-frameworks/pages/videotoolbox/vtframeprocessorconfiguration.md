> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtframeprocessorconfiguration](https://developer.apple.com/documentation/videotoolbox/vtframeprocessorconfiguration)

# VTFrameProcessorConfiguration (Swift)

**Framework:** Video Toolbox  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 15.4+ · tvOS 26.0+ · visionOS 26.0+

A protocol that describes the configuration of a processor to use during a video processing session.

## Declaration

```swift
protocol VTFrameProcessorConfiguration : NSObjectProtocol, Sendable
```

<a id="overview"></a>

## Overview

The VTFrameProcessorConfiguration protocol conformance starts a frame processing session. These properties can be queried on an implementation conforming to this protocol without starting a session.

## Topics

### Determining processor availability

- [isSupported](vtframeprocessorconfiguration/issupported.md): A Boolean value that indicates whether the current configuration supports the processor.

### Inspecting dimension constraints

- [maximumDimensions](vtframeprocessorconfiguration/maximumdimensions-4vmra.md): The maximum dimensions of a source frame for the processor.
- [minimumDimensions](vtframeprocessorconfiguration/minimumdimensions-42b0h.md): The minimum dimensions of a source frame for the processor.

### Inspecting pixel buffer attributes

- [sourcePixelBufferAttributes](vtframeprocessorconfiguration/sourcepixelbufferattributes.md): A dictionary of pixel buffer attributes that define what the source and reference frames passed to the processor must conform to.
- [destinationPixelBufferAttributes](vtframeprocessorconfiguration/destinationpixelbufferattributes.md): A dictionary of pixel buffer attributes that define which output frames passed to the processor must conform to.

### Inspecting frame requirements

- [nextFrameCount](vtframeprocessorconfiguration/nextframecount-18e47.md): The number of next frames that the processor requires for processing.
- [previousFrameCount](vtframeprocessorconfiguration/previousframecount-1crhc.md): The number of previous frames that the processor requires for processing.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

### Conforming Types

- [VTFrameRateConversionConfiguration](vtframerateconversionconfiguration.md)
- [VTLowLatencyFrameInterpolationConfiguration](vtlowlatencyframeinterpolationconfiguration.md)
- [VTLowLatencySuperResolutionScalerConfiguration](vtlowlatencysuperresolutionscalerconfiguration.md)
- [VTMotionBlurConfiguration](vtmotionblurconfiguration.md)
- [VTOpticalFlowConfiguration](vtopticalflowconfiguration.md)
- [VTSuperResolutionScalerConfiguration](vtsuperresolutionscalerconfiguration.md)
- [VTTemporalNoiseFilterConfiguration](vttemporalnoisefilterconfiguration.md)

## See Also

### Frame processor

- [Enhancing your app with machine learning-based video effects](enhancing-your-app-with-machine-learning-based-video-effects.md): Add powerful effects to your videos using the VideoToolbox VTFrameProcessor API.
- [VTFrameProcessor](vtframeprocessor.md): A class that creates a new frame processor for the configured video effect.
- [VTFrameProcessorFrame](vtframeprocessorframe.md): An object that wraps video frames to send to the processor, as source, reference, or output frames.
- [VTFrameProcessorParameters](vtframeprocessorparameters.md): The base protocol for input and output processing parameters for a frame processor implementation.

# VTFrameProcessorConfiguration (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 15.4+ · tvOS 26.0+ · visionOS 26.0+

A protocol that describes the configuration of a processor to use during a video processing session.

## Declaration

```objectivec
@protocol VTFrameProcessorConfiguration <NSObject>
```

<a id="overview"></a>

## Overview

The VTFrameProcessorConfiguration protocol conformance starts a frame processing session. These properties can be queried on an implementation conforming to this protocol without starting a session.

## Topics

### Determining processor availability

- [supported](vtframeprocessorconfiguration/issupported.md): A Boolean value that indicates whether the current configuration supports the processor.

### Inspecting pixel buffer attributes

- [sourcePixelBufferAttributes](vtframeprocessorconfiguration/sourcepixelbufferattributes.md): A dictionary of pixel buffer attributes that define what the source and reference frames passed to the processor must conform to.
- [destinationPixelBufferAttributes](vtframeprocessorconfiguration/destinationpixelbufferattributes.md): A dictionary of pixel buffer attributes that define which output frames passed to the processor must conform to.
- [frameSupportedPixelFormats](vtframeprocessorconfiguration/framesupportedpixelformats.md): A list of supported pixel formats for the current configuration.

### Instance Properties

- [nextFrameCount](vtframeprocessorconfiguration/nextframecount-533br.md): Returns the number of “next” frames that this processor requires for processing.
- [previousFrameCount](vtframeprocessorconfiguration/previousframecount-20ke2.md): Returns the number of “previous” frames that this processor requires for processing.

### Type Properties

- [maximumDimensions](vtframeprocessorconfiguration/maximumdimensions-1x3l0.md): Returns the maximum dimensions for a `sourceFrame` for the processor.
- [minimumDimensions](vtframeprocessorconfiguration/minimumdimensions-9n9r0.md): Returns the minimum dimensions for a `sourceFrame` for the processor.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [VTFrameRateConversionConfiguration](vtframerateconversionconfiguration.md)
- [VTLowLatencyFrameInterpolationConfiguration](vtlowlatencyframeinterpolationconfiguration.md)
- [VTLowLatencySuperResolutionScalerConfiguration](vtlowlatencysuperresolutionscalerconfiguration.md)
- [VTMotionBlurConfiguration](vtmotionblurconfiguration.md)
- [VTOpticalFlowConfiguration](vtopticalflowconfiguration.md)
- [VTSuperResolutionScalerConfiguration](vtsuperresolutionscalerconfiguration.md)
- [VTTemporalNoiseFilterConfiguration](vttemporalnoisefilterconfiguration.md)

## See Also

### Frame processor

- [VTFrameProcessor](vtframeprocessor.md): A class that creates a new frame processor for the configured video effect.
- [VTFrameProcessorFrame](vtframeprocessorframe.md): An object that wraps video frames to send to the processor, as source, reference, or output frames.
- [VTFrameProcessorParameters](vtframeprocessorparameters.md): The base protocol for input and output processing parameters for a frame processor implementation.
