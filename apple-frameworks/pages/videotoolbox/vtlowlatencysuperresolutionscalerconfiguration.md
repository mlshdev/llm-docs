> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtlowlatencysuperresolutionscalerconfiguration](https://developer.apple.com/documentation/videotoolbox/vtlowlatencysuperresolutionscalerconfiguration)

# VTLowLatencySuperResolutionScalerConfiguration (Swift)

**Framework:** Video Toolbox  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

An object you use to configure frame processor for low-latency super-resolution scaler processing.

## Declaration

```swift
class VTLowLatencySuperResolutionScalerConfiguration
```

<a id="overview"></a>

## Overview

Use this object to configure a [VTFrameProcessor](vtframeprocessor.md). Query this interface also for important operating details, like the pixel buffer attributes required for frames you submit to the processor.

> **Important**

> When calling [startSession(configuration:)](vtframeprocessor/startsession%28configuration_%29.md) to create a `VTLowLatencySuperResolutionScaler` session, ML model loading may take longer than a frame time. Avoid blocking the UI thread or stalling frame rendering pipelines during this call.

## Topics

### Creating a super resolution scaler configuration

- [init(frameWidth:frameHeight:scaleFactor:)](vtlowlatencysuperresolutionscalerconfiguration/init%28framewidth_frameheight_scalefactor_%29.md): Creates a new low-latency super-resolution scaler configuration with specified frame width and height.

### Determining processor availability

- [isSupported](vtlowlatencysuperresolutionscalerconfiguration/issupported.md): Reports whether the system supports this processor on the current configuration.
- [supportedScaleFactors(frameWidth:frameHeight:)](vtlowlatencysuperresolutionscalerconfiguration/supportedscalefactors%28framewidth_frameheight_%29.md)

### Inspecting the configuration

- [frameWidth](vtlowlatencysuperresolutionscalerconfiguration/framewidth.md): Width of source frame in pixels.
- [frameHeight](vtlowlatencysuperresolutionscalerconfiguration/frameheight.md): Height of source frame in pixels.
- [scaleFactor](vtlowlatencysuperresolutionscalerconfiguration/scalefactor.md): Scale factor with which you initialized the configuration.
- [sourcePixelBufferAttributes](vtlowlatencysuperresolutionscalerconfiguration/sourcepixelbufferattributes.md): Pixel buffer attributes dictionary that describes requirements for pixel buffers which represent source frames and reference frames.
- [destinationPixelBufferAttributes](vtlowlatencysuperresolutionscalerconfiguration/destinationpixelbufferattributes.md): Pixel buffer attributes dictionary that describes requirements for pixel buffers which represent destination frames.
- [supportedPixelFormats](vtlowlatencysuperresolutionscalerconfiguration/supportedpixelformats.md)

### Type Properties

- [supportedScaleFactors](vtlowlatencysuperresolutionscalerconfiguration/supportedscalefactors-27vjh.md)

### Type Methods

- [maximumDimension(forSpatialScaleFactor:)](vtlowlatencysuperresolutionscalerconfiguration/maximumdimension%28forspatialscalefactor_%29.md): The maximum value for either dimension of the source frame, in pixels, for a given spatial scale factor.
- [maximumPixelCount(forSpatialScaleFactor:)](vtlowlatencysuperresolutionscalerconfiguration/maximumpixelcount%28forspatialscalefactor_%29.md): The maximum total number of pixels in the source frame for a given spatial scale factor.

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

### Low-latency super resolution

- [VTLowLatencySuperResolutionScalerParameters](vtlowlatencysuperresolutionscalerparameters.md): An object that contains both input and output parameters that the low-latency super-resolution scaler frame processor needs.

# VTLowLatencySuperResolutionScalerConfiguration (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

An object you use to configure frame processor for low-latency super-resolution scaler processing.

## Declaration

```objectivec
@interface VTLowLatencySuperResolutionScalerConfiguration : NSObject
```

<a id="overview"></a>

## Overview

Use this object to configure a [VTFrameProcessor](vtframeprocessor.md). Query this interface also for important operating details, like the pixel buffer attributes required for frames you submit to the processor.

> **Important**

> When calling [startSessionWithConfiguration:error:](vtframeprocessor/startsession%28configuration_%29.md) to create a `VTLowLatencySuperResolutionScaler` session, ML model loading may take longer than a frame time. Avoid blocking the UI thread or stalling frame rendering pipelines during this call.

## Topics

### Creating a super resolution scaler configuration

- [initWithFrameWidth:frameHeight:scaleFactor:](vtlowlatencysuperresolutionscalerconfiguration/init%28framewidth_frameheight_scalefactor_%29.md): Creates a new low-latency super-resolution scaler configuration with specified frame width and height.

### Determining processor availability

- [supported](vtlowlatencysuperresolutionscalerconfiguration/issupported.md): Reports whether the system supports this processor on the current configuration.
- [maximumDimensions](vtlowlatencysuperresolutionscalerconfiguration/maximumdimensions.md): Maximum dimensions for a source frame for the processor.
- [minimumDimensions](vtlowlatencysuperresolutionscalerconfiguration/minimumdimensions.md): Minimum dimensions for a source frame for the processor.

### Inspecting the configuration

- [frameWidth](vtlowlatencysuperresolutionscalerconfiguration/framewidth.md): Width of source frame in pixels.
- [frameHeight](vtlowlatencysuperresolutionscalerconfiguration/frameheight.md): Height of source frame in pixels.
- [scaleFactor](vtlowlatencysuperresolutionscalerconfiguration/scalefactor.md): Scale factor with which you initialized the configuration.
- [sourcePixelBufferAttributes](vtlowlatencysuperresolutionscalerconfiguration/sourcepixelbufferattributes.md): Pixel buffer attributes dictionary that describes requirements for pixel buffers which represent source frames and reference frames.
- [destinationPixelBufferAttributes](vtlowlatencysuperresolutionscalerconfiguration/destinationpixelbufferattributes.md): Pixel buffer attributes dictionary that describes requirements for pixel buffers which represent destination frames.
- [frameSupportedPixelFormats](vtlowlatencysuperresolutionscalerconfiguration/framesupportedpixelformats.md): Available supported pixel formats for source frames for current configuration.

### Type Properties

- [supportedScaleFactors](vtlowlatencysuperresolutionscalerconfiguration/supportedscalefactors-66l10.md): Reports the set of supported scale factors to use when initializing a low latency super-resolution scaler configuration. Note: not all scale factors are available for all source dimensions.

### Type Methods

- [maximumDimensionForSpatialScaleFactor:](vtlowlatencysuperresolutionscalerconfiguration/maximumdimensionforspatialscalefactor_.md): The maximum value for either dimension of the source frame, in pixels, for a given spatial scale factor.
- [maximumPixelCountForSpatialScaleFactor:](vtlowlatencysuperresolutionscalerconfiguration/maximumpixelcountforspatialscalefactor_.md): The maximum total number of pixels in the source frame for a given spatial scale factor.
- [supportedScaleFactorsForFrameWidth:frameHeight:](vtlowlatencysuperresolutionscalerconfiguration/supportedscalefactorsforframewidth_frameheight_.md): Returns an array of supported scale factors values, or an empty list if the processor doesn’t support the dimensions.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [VTFrameProcessorConfiguration](vtframeprocessorconfiguration.md)

## See Also

### Low-latency super resolution

- [VTLowLatencySuperResolutionScalerParameters](vtlowlatencysuperresolutionscalerparameters.md): An object that contains both input and output parameters that the low-latency super-resolution scaler frame processor needs.
