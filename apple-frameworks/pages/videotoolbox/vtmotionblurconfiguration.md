> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtmotionblurconfiguration](https://developer.apple.com/documentation/videotoolbox/vtmotionblurconfiguration)

# VTMotionBlurConfiguration (Swift)

**Framework:** Video Toolbox  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 15.4+

A configuration object to enable motion blur on a frame processing session.

## Declaration

```swift
class VTMotionBlurConfiguration
```

## Topics

### Creating a motion blur configuration

- [init(frameWidth:frameHeight:usePrecomputedFlow:qualityPrioritization:revision:)](vtmotionblurconfiguration/init%28framewidth_frameheight_useprecomputedflow_qualityprioritization_revision_%29.md): Creates a new motion blur configuration with specified flow width and height.

### Determining processor availability

- [isSupported](vtmotionblurconfiguration/issupported.md): Reports whether the system supports this processor.

### Inspecting the configuration

- [frameWidth](vtmotionblurconfiguration/framewidth.md): The width of a source frame in pixels.
- [frameHeight](vtmotionblurconfiguration/frameheight.md): The height of a source frame in pixels.
- [usePrecomputedFlow](vtmotionblurconfiguration/useprecomputedflow.md): A Boolean value to indicates whether the the optical flow will be provided by the user.
- [sourcePixelBufferAttributes](vtmotionblurconfiguration/sourcepixelbufferattributes.md): A dictionary of pixel buffer attributes describing requirements for pixel buffers used as source frames and reference frames.
- [destinationPixelBufferAttributes](vtmotionblurconfiguration/destinationpixelbufferattributes.md): A dictionary of pixel buffer attributes describing the requirements for pixel buffers used as destination frames.
- [supportedPixelFormats](vtmotionblurconfiguration/supportedpixelformats.md)
- [qualityPrioritization](vtmotionblurconfiguration/qualityprioritization-swift.property.md): A value that specifies whether to prioritize quality or performance.
- [VTMotionBlurConfiguration.QualityPrioritization](vtmotionblurconfiguration/qualityprioritization-swift.enum.md): Values that specify whether to prioritize quality or performance.

### Inspecting revision information

- [revision](vtmotionblurconfiguration/revision-swift.property.md): The specific algorithm or configuration revision that is to be used to perform the request.
- [defaultRevision](vtmotionblurconfiguration/defaultrevision.md): The default revision of a particular algorithm or configuration.
- [supportedRevisions](vtmotionblurconfiguration/supportedrevisions.md): The collection of currently-supported algorithms or configuration revisions for the class of configurations.
- [VTMotionBlurConfiguration.Revision](vtmotionblurconfiguration/revision-swift.enum.md): The specific algorithm or configuration revision that is to be used to perform the request.

### Deprecated

- [processorSupported](vtmotionblurconfiguration/processorsupported.md): Deprecated. A Boolean value that indicates whether the processor is supported.
- [frameSupportedPixelFormats](vtmotionblurconfiguration/framesupportedpixelformats-1n4uq.md): Deprecated. A list of source frame supported pixel formats for the current configuration.

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

### Motion blur

- [VTMotionBlurParameters](vtmotionblurparameters.md): This object contains both input and output parameters necessary to run the motion blur processor on a frame.

# VTMotionBlurConfiguration (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 15.4+

A configuration object to enable motion blur on a frame processing session.

## Declaration

```objectivec
@interface VTMotionBlurConfiguration : NSObject
```

## Topics

### Creating a motion blur configuration

- [initWithFrameWidth:frameHeight:usePrecomputedFlow:qualityPrioritization:revision:](vtmotionblurconfiguration/init%28framewidth_frameheight_useprecomputedflow_qualityprioritization_revision_%29.md): Creates a new motion blur configuration with specified flow width and height.

### Determining processor availability

- [supported](vtmotionblurconfiguration/issupported.md): Reports whether the system supports this processor.

### Inspecting the configuration

- [frameWidth](vtmotionblurconfiguration/framewidth.md): The width of a source frame in pixels.
- [frameHeight](vtmotionblurconfiguration/frameheight.md): The height of a source frame in pixels.
- [usePrecomputedFlow](vtmotionblurconfiguration/useprecomputedflow.md): A Boolean value to indicates whether the the optical flow will be provided by the user.
- [sourcePixelBufferAttributes](vtmotionblurconfiguration/sourcepixelbufferattributes.md): A dictionary of pixel buffer attributes describing requirements for pixel buffers used as source frames and reference frames.
- [destinationPixelBufferAttributes](vtmotionblurconfiguration/destinationpixelbufferattributes.md): A dictionary of pixel buffer attributes describing the requirements for pixel buffers used as destination frames.
- [qualityPrioritization](vtmotionblurconfiguration/qualityprioritization-swift.property.md): A value that specifies whether to prioritize quality or performance.
- [VTMotionBlurConfigurationQualityPrioritization](vtmotionblurconfiguration/qualityprioritization-swift.enum.md): Values that specify whether to prioritize quality or performance.

### Inspecting revision information

- [revision](vtmotionblurconfiguration/revision-swift.property.md): The specific algorithm or configuration revision that is to be used to perform the request.
- [defaultRevision](vtmotionblurconfiguration/defaultrevision.md): The default revision of a particular algorithm or configuration.
- [supportedRevisions](vtmotionblurconfiguration/supportedrevisions.md): The collection of currently-supported algorithms or configuration revisions for the class of configurations.
- [VTMotionBlurConfigurationRevision](vtmotionblurconfiguration/revision-swift.enum.md): The specific algorithm or configuration revision that is to be used to perform the request.

### Deprecated

- [processorSupported](vtmotionblurconfiguration/processorsupported.md): Deprecated. A Boolean value that indicates whether the processor is supported.

### Instance Properties

- [frameSupportedPixelFormats](vtmotionblurconfiguration/framesupportedpixelformats-5a1iv.md): Available supported pixel formats for source frames for current configuration.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [VTFrameProcessorConfiguration](vtframeprocessorconfiguration.md)

## See Also

### Motion blur

- [VTMotionBlurParameters](vtmotionblurparameters.md): This object contains both input and output parameters necessary to run the motion blur processor on a frame.
