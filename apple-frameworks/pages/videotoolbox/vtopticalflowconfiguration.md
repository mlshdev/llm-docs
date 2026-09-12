> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtopticalflowconfiguration](https://developer.apple.com/documentation/videotoolbox/vtopticalflowconfiguration)

# VTOpticalFlowConfiguration (Swift)

**Framework:** Video Toolbox  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 15.4+

A configuration object that enables optical flow on a frame processing session.

## Declaration

```swift
class VTOpticalFlowConfiguration
```

## Topics

### Creating an optical flow configuration

- [init(frameWidth:frameHeight:qualityPrioritization:revision:)](vtopticalflowconfiguration/init%28framewidth_frameheight_qualityprioritization_revision_%29.md)

### Determining processor availability

- [isSupported](vtopticalflowconfiguration/issupported.md): Reports whether the system supports this processor.

### Inspecting the configuration

- [frameWidth](vtopticalflowconfiguration/framewidth.md): The width of a source frame in pixels.
- [frameHeight](vtopticalflowconfiguration/frameheight.md): The height of source frame in pixels.
- [sourcePixelBufferAttributes](vtopticalflowconfiguration/sourcepixelbufferattributes.md): A dictionary of pixel buffer attributes describing requirements for pixel buffers used as source frames and reference frames.
- [destinationPixelBufferAttributes](vtopticalflowconfiguration/destinationpixelbufferattributes.md): A dictionary of pixel buffer attributes describing the requirements for pixel buffers used as destination frames.
- [supportedPixelFormats](vtopticalflowconfiguration/supportedpixelformats.md)
- [qualityPrioritization](vtopticalflowconfiguration/qualityprioritization-swift.property.md): A value that specifies whether to prioritize quality or performance.
- [VTOpticalFlowConfiguration.QualityPrioritization](vtopticalflowconfiguration/qualityprioritization-swift.enum.md): Values that specify whether to prioritize quality or performance.

### Inspecting revision information

- [revision](vtopticalflowconfiguration/revision-swift.property.md): The specific algorithm or configuration revision that is to be used to perform the request.
- [defaultRevision](vtopticalflowconfiguration/defaultrevision.md): The default revision of a particular algorithm or configuration.
- [supportedRevisions](vtopticalflowconfiguration/supportedrevisions.md): A boolean value that indicates whether the processor supported on the current configuration.
- [VTOpticalFlowConfiguration.Revision](vtopticalflowconfiguration/revision-swift.enum.md): The specific algorithm or configuration revision that is to be used to perform the request.

### Deprecated

- [processorSupported](vtopticalflowconfiguration/processorsupported.md): Deprecated. A boolean value that indicates whether the processor supported on the current configuration.
- [frameSupportedPixelFormats](vtopticalflowconfiguration/framesupportedpixelformats-gm6u.md): Deprecated. A list of source frame supported pixel formats for the current configuration.

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

### Optical flow

- [VTFrameProcessorOpticalFlow](vtframeprocessoropticalflow.md): A class to wrap bidirectional optical flow to send to the processor.
- [VTOpticalFlowParameters](vtopticalflowparameters.md): An object that describes frame-level optical flow parameters.

# VTOpticalFlowConfiguration (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 15.4+

A configuration object that enables optical flow on a frame processing session.

## Declaration

```objectivec
@interface VTOpticalFlowConfiguration : NSObject
```

## Topics

### Creating an optical flow configuration

- [initWithFrameWidth:frameHeight:qualityPrioritization:revision:](vtopticalflowconfiguration/init%28framewidth_frameheight_qualityprioritization_revision_%29.md)

### Determining processor availability

- [supported](vtopticalflowconfiguration/issupported.md): Reports whether the system supports this processor.

### Inspecting the configuration

- [frameWidth](vtopticalflowconfiguration/framewidth.md): The width of a source frame in pixels.
- [frameHeight](vtopticalflowconfiguration/frameheight.md): The height of source frame in pixels.
- [sourcePixelBufferAttributes](vtopticalflowconfiguration/sourcepixelbufferattributes.md): A dictionary of pixel buffer attributes describing requirements for pixel buffers used as source frames and reference frames.
- [destinationPixelBufferAttributes](vtopticalflowconfiguration/destinationpixelbufferattributes.md): A dictionary of pixel buffer attributes describing the requirements for pixel buffers used as destination frames.
- [qualityPrioritization](vtopticalflowconfiguration/qualityprioritization-swift.property.md): A value that specifies whether to prioritize quality or performance.
- [VTOpticalFlowConfigurationQualityPrioritization](vtopticalflowconfiguration/qualityprioritization-swift.enum.md): Values that specify whether to prioritize quality or performance.

### Inspecting revision information

- [revision](vtopticalflowconfiguration/revision-swift.property.md): The specific algorithm or configuration revision that is to be used to perform the request.
- [defaultRevision](vtopticalflowconfiguration/defaultrevision.md): The default revision of a particular algorithm or configuration.
- [supportedRevisions](vtopticalflowconfiguration/supportedrevisions.md): A boolean value that indicates whether the processor supported on the current configuration.
- [VTOpticalFlowConfigurationRevision](vtopticalflowconfiguration/revision-swift.enum.md): The specific algorithm or configuration revision that is to be used to perform the request.

### Deprecated

- [processorSupported](vtopticalflowconfiguration/processorsupported.md): Deprecated. A boolean value that indicates whether the processor supported on the current configuration.

### Instance Properties

- [frameSupportedPixelFormats](vtopticalflowconfiguration/framesupportedpixelformats-85kob.md): Supported pixel formats for source frames for current configuration.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [VTFrameProcessorConfiguration](vtframeprocessorconfiguration.md)

## See Also

### Optical flow

- [VTFrameProcessorOpticalFlow](vtframeprocessoropticalflow.md): A class to wrap bidirectional optical flow to send to the processor.
- [VTOpticalFlowParameters](vtopticalflowparameters.md): An object that describes frame-level optical flow parameters.
