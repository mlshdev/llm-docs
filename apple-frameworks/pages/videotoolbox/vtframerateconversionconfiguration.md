> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtframerateconversionconfiguration](https://developer.apple.com/documentation/videotoolbox/vtframerateconversionconfiguration)

# VTFrameRateConversionConfiguration (Swift)

**Framework:** Video Toolbox  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 15.4+

An object that enables the frame rate conversion on a frame processing session.

## Declaration

```swift
class VTFrameRateConversionConfiguration
```

## Topics

### Creating a frame rate conversion configuration

- [init(frameWidth:frameHeight:usePrecomputedFlow:qualityPrioritization:revision:)](vtframerateconversionconfiguration/init%28framewidth_frameheight_useprecomputedflow_qualityprioritization_revision_%29.md): Creates a new frame rate conversion configuration with specified flow width and height.

### Determining processor availability

- [isSupported](vtframerateconversionconfiguration/issupported.md): Reports whether the system supports this processor.

### Inspecting the configuration

- [frameWidth](vtframerateconversionconfiguration/framewidth.md): The width of a source frame in pixels.
- [frameHeight](vtframerateconversionconfiguration/frameheight.md): The height of a source frame in pixels.
- [usePrecomputedFlow](vtframerateconversionconfiguration/useprecomputedflow.md): A Boolean value to indicates whether the optical flow will be provided by the user.
- [sourcePixelBufferAttributes](vtframerateconversionconfiguration/sourcepixelbufferattributes.md): A dictionary of pixel buffer attributes describing requirements for pixel buffers used as source frames and reference frames.
- [destinationPixelBufferAttributes](vtframerateconversionconfiguration/destinationpixelbufferattributes.md): A dictionary of pixel buffer attributes describing the requirements for pixel buffers used as destination frames.
- [supportedPixelFormats](vtframerateconversionconfiguration/supportedpixelformats.md)
- [qualityPrioritization](vtframerateconversionconfiguration/qualityprioritization-swift.property.md): A value that specifies whether to prioritize quality or performance.
- [VTFrameRateConversionConfiguration.QualityPrioritization](vtframerateconversionconfiguration/qualityprioritization-swift.enum.md): Values that specify whether to prioritize quality or performance.

### Inspecting revision information

- [revision](vtframerateconversionconfiguration/revision-swift.property.md): The specific algorithm or configuration revision to use to perform the request.
- [defaultRevision](vtframerateconversionconfiguration/defaultrevision.md): The default revision of a particular algorithm or configuration.
- [supportedRevisions](vtframerateconversionconfiguration/supportedrevisions.md): The collection of currently-supported algorithms or configuration revisions for the class of configurations.
- [VTFrameRateConversionConfiguration.Revision](vtframerateconversionconfiguration/revision-swift.enum.md): The specific algorithm or configuration revision that is to be used to perform the request.

### Deprecated

- [processorSupported](vtframerateconversionconfiguration/processorsupported.md): Deprecated. A Boolean value that indicates whether the processor supported on the current configuration.
- [frameSupportedPixelFormats](vtframerateconversionconfiguration/framesupportedpixelformats-54soi.md): Deprecated. A list of source frame supported pixel formats for the current configuration.

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

### Frame rate conversion

- [VTFrameRateConversionParameters](vtframerateconversionparameters.md): An object that contains the required input and output parameters to run a frame rate conversion processor on a frame.

# VTFrameRateConversionConfiguration (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 15.4+

An object that enables the frame rate conversion on a frame processing session.

## Declaration

```objectivec
@interface VTFrameRateConversionConfiguration : NSObject
```

## Topics

### Creating a frame rate conversion configuration

- [initWithFrameWidth:frameHeight:usePrecomputedFlow:qualityPrioritization:revision:](vtframerateconversionconfiguration/init%28framewidth_frameheight_useprecomputedflow_qualityprioritization_revision_%29.md): Creates a new frame rate conversion configuration with specified flow width and height.

### Determining processor availability

- [supported](vtframerateconversionconfiguration/issupported.md): Reports whether the system supports this processor.

### Inspecting the configuration

- [frameWidth](vtframerateconversionconfiguration/framewidth.md): The width of a source frame in pixels.
- [frameHeight](vtframerateconversionconfiguration/frameheight.md): The height of a source frame in pixels.
- [usePrecomputedFlow](vtframerateconversionconfiguration/useprecomputedflow.md): A Boolean value to indicates whether the optical flow will be provided by the user.
- [sourcePixelBufferAttributes](vtframerateconversionconfiguration/sourcepixelbufferattributes.md): A dictionary of pixel buffer attributes describing requirements for pixel buffers used as source frames and reference frames.
- [destinationPixelBufferAttributes](vtframerateconversionconfiguration/destinationpixelbufferattributes.md): A dictionary of pixel buffer attributes describing the requirements for pixel buffers used as destination frames.
- [qualityPrioritization](vtframerateconversionconfiguration/qualityprioritization-swift.property.md): A value that specifies whether to prioritize quality or performance.
- [VTFrameRateConversionConfigurationQualityPrioritization](vtframerateconversionconfiguration/qualityprioritization-swift.enum.md): Values that specify whether to prioritize quality or performance.

### Inspecting revision information

- [revision](vtframerateconversionconfiguration/revision-swift.property.md): The specific algorithm or configuration revision to use to perform the request.
- [defaultRevision](vtframerateconversionconfiguration/defaultrevision.md): The default revision of a particular algorithm or configuration.
- [supportedRevisions](vtframerateconversionconfiguration/supportedrevisions.md): The collection of currently-supported algorithms or configuration revisions for the class of configurations.
- [VTFrameRateConversionConfigurationRevision](vtframerateconversionconfiguration/revision-swift.enum.md): The specific algorithm or configuration revision that is to be used to perform the request.

### Deprecated

- [processorSupported](vtframerateconversionconfiguration/processorsupported.md): Deprecated. A Boolean value that indicates whether the processor supported on the current configuration.

### Instance Properties

- [frameSupportedPixelFormats](vtframerateconversionconfiguration/framesupportedpixelformats-9w7f9.md): Supported pixel formats available for source frames for current configuration.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [VTFrameProcessorConfiguration](vtframeprocessorconfiguration.md)

## See Also

### Frame rate conversion

- [VTFrameRateConversionParameters](vtframerateconversionparameters.md): An object that contains the required input and output parameters to run a frame rate conversion processor on a frame.
