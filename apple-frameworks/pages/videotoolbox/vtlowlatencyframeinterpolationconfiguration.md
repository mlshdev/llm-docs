> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtlowlatencyframeinterpolationconfiguration](https://developer.apple.com/documentation/videotoolbox/vtlowlatencyframeinterpolationconfiguration)

# VTLowLatencyFrameInterpolationConfiguration (Swift)

**Framework:** Video Toolbox  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Configuration that you use to program Video Toolbox frame processor for low-latency frame interpolation.

## Declaration

```swift
class VTLowLatencyFrameInterpolationConfiguration
```

<a id="overview"></a>

## Overview

This configuration can do either purely temporal interpolation (frame-rate conversion) or temporal and spatial interpolation (scaling and frame-rate conversion). This processor requires a source frame and a previous frame. It does temporal scaling, which interpolates frames between the previous frame and the source frame. When performing both temporal and spatial interpolation, the processor can only perform 2x upscaling, and a single frame of temporal interpolation. When performing spatial scaling, the processor produces upscaled intermediate frames and an upscaled `sourceFrame`, but it does not upscale the previous reference frame you provided.

> **Important**

> When calling [startSession(configuration:)](vtframeprocessor/startsession%28configuration_%29.md) to create a `VTLowLatencyFrameInterpolation` session, ML model loading may take longer than a frame time. Avoid blocking the UI thread or stalling frame rendering pipelines during this call.

## Topics

### Creating a frame interpolation configuration

- [init(frameWidth:frameHeight:numberOfInterpolatedFrames:)](vtlowlatencyframeinterpolationconfiguration/init%28framewidth_frameheight_numberofinterpolatedframes_%29.md): Creates a new low-latency frame interpolation configuration for frame-rate conversion.
- [init(frameWidth:frameHeight:spatialScaleFactor:)](vtlowlatencyframeinterpolationconfiguration/init%28framewidth_frameheight_spatialscalefactor_%29.md): Creates a new low-latency frame interpolation configuration for spatial scaling and temporal scaling.

### Determining processor availability

- [isSupported](vtlowlatencyframeinterpolationconfiguration/issupported.md): Reports whether the system supports this processor.

### Inspecting the configuration

- [frameWidth](vtlowlatencyframeinterpolationconfiguration/framewidth.md): Width of source frames in pixels.
- [frameHeight](vtlowlatencyframeinterpolationconfiguration/frameheight.md): Height of source frames in pixels.
- [numberOfInterpolatedFrames](vtlowlatencyframeinterpolationconfiguration/numberofinterpolatedframes.md): Number of uniformly spaced frames for which you configured the processor.
- [spatialScaleFactor](vtlowlatencyframeinterpolationconfiguration/spatialscalefactor.md): Configured spatial scale factor as an integer.
- [sourcePixelBufferAttributes](vtlowlatencyframeinterpolationconfiguration/sourcepixelbufferattributes.md): Pixel buffer attributes dictionary that describes requirements for pixel buffers which represent source frames and reference frames.
- [destinationPixelBufferAttributes](vtlowlatencyframeinterpolationconfiguration/destinationpixelbufferattributes.md): Pixel buffer attributes dictionary that describes requirements for pixel buffers which represent destination frames.
- [supportedPixelFormats](vtlowlatencyframeinterpolationconfiguration/supportedpixelformats.md)

### Type Methods

- [maximumDimension(forSpatialScaleFactor:)](vtlowlatencyframeinterpolationconfiguration/maximumdimension%28forspatialscalefactor_%29.md): The maximum value for either dimension of the source frame, in pixels, for a given spatial scale factor.
- [maximumPixelCount(forSpatialScaleFactor:)](vtlowlatencyframeinterpolationconfiguration/maximumpixelcount%28forspatialscalefactor_%29.md): The maximum total number of pixels in the source frame for a given spatial scale factor.

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
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [VTFrameProcessorConfiguration](vtframeprocessorconfiguration.md)

## See Also

### Low-latency frame interpolation

- [VTLowLatencyFrameInterpolationParameters](vtlowlatencyframeinterpolationparameters.md): An object that contains both input and output parameters that the low-latency frame interpolation processor needs.

# VTLowLatencyFrameInterpolationConfiguration (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Configuration that you use to program Video Toolbox frame processor for low-latency frame interpolation.

## Declaration

```objectivec
@interface VTLowLatencyFrameInterpolationConfiguration : NSObject
```

<a id="overview"></a>

## Overview

This configuration can do either purely temporal interpolation (frame-rate conversion) or temporal and spatial interpolation (scaling and frame-rate conversion). This processor requires a source frame and a previous frame. It does temporal scaling, which interpolates frames between the previous frame and the source frame. When performing both temporal and spatial interpolation, the processor can only perform 2x upscaling, and a single frame of temporal interpolation. When performing spatial scaling, the processor produces upscaled intermediate frames and an upscaled `sourceFrame`, but it does not upscale the previous reference frame you provided.

> **Important**

> When calling [startSessionWithConfiguration:error:](vtframeprocessor/startsession%28configuration_%29.md) to create a `VTLowLatencyFrameInterpolation` session, ML model loading may take longer than a frame time. Avoid blocking the UI thread or stalling frame rendering pipelines during this call.

## Topics

### Creating a frame interpolation configuration

- [initWithFrameWidth:frameHeight:numberOfInterpolatedFrames:](vtlowlatencyframeinterpolationconfiguration/init%28framewidth_frameheight_numberofinterpolatedframes_%29.md): Creates a new low-latency frame interpolation configuration for frame-rate conversion.
- [initWithFrameWidth:frameHeight:spatialScaleFactor:](vtlowlatencyframeinterpolationconfiguration/init%28framewidth_frameheight_spatialscalefactor_%29.md): Creates a new low-latency frame interpolation configuration for spatial scaling and temporal scaling.

### Determining processor availability

- [supported](vtlowlatencyframeinterpolationconfiguration/issupported.md): Reports whether the system supports this processor.

### Inspecting the configuration

- [frameWidth](vtlowlatencyframeinterpolationconfiguration/framewidth.md): Width of source frames in pixels.
- [frameHeight](vtlowlatencyframeinterpolationconfiguration/frameheight.md): Height of source frames in pixels.
- [numberOfInterpolatedFrames](vtlowlatencyframeinterpolationconfiguration/numberofinterpolatedframes.md): Number of uniformly spaced frames for which you configured the processor.
- [spatialScaleFactor](vtlowlatencyframeinterpolationconfiguration/spatialscalefactor.md): Configured spatial scale factor as an integer.
- [sourcePixelBufferAttributes](vtlowlatencyframeinterpolationconfiguration/sourcepixelbufferattributes.md): Pixel buffer attributes dictionary that describes requirements for pixel buffers which represent source frames and reference frames.
- [destinationPixelBufferAttributes](vtlowlatencyframeinterpolationconfiguration/destinationpixelbufferattributes.md): Pixel buffer attributes dictionary that describes requirements for pixel buffers which represent destination frames.
- [frameSupportedPixelFormats](vtlowlatencyframeinterpolationconfiguration/framesupportedpixelformats.md): Available supported pixel formats for current configuration.

### Type Methods

- [maximumDimensionForSpatialScaleFactor:](vtlowlatencyframeinterpolationconfiguration/maximumdimensionforspatialscalefactor_.md): The maximum value for either dimension of the source frame, in pixels, for a given spatial scale factor.
- [maximumPixelCountForSpatialScaleFactor:](vtlowlatencyframeinterpolationconfiguration/maximumpixelcountforspatialscalefactor_.md): The maximum total number of pixels in the source frame for a given spatial scale factor.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [VTFrameProcessorConfiguration](vtframeprocessorconfiguration.md)

## See Also

### Low-latency frame interpolation

- [VTLowLatencyFrameInterpolationParameters](vtlowlatencyframeinterpolationparameters.md): An object that contains both input and output parameters that the low-latency frame interpolation processor needs.
