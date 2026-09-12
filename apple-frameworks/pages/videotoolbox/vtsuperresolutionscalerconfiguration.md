> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtsuperresolutionscalerconfiguration](https://developer.apple.com/documentation/videotoolbox/vtsuperresolutionscalerconfiguration)

# VTSuperResolutionScalerConfiguration (Swift)

**Framework:** Video Toolbox  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

Configuration that you use to set up the super-resolution processor.

## Declaration

```swift
class VTSuperResolutionScalerConfiguration
```

<a id="overview"></a>

## Overview

This configuration enables the super-resolution processor on a `VTFrameProcessor` session.

> **Important**

> The super-resolution processor may require ML models which the framework needs to download in order to operate. Before calling [startSession(configuration:)](vtframeprocessor/startsession%28configuration_%29.md) with an instance of this class, it is important that you verify that the necessary models are present by checking [configurationModelStatus](vtsuperresolutionscalerconfiguration/configurationmodelstatus.md). If models are not available, you can trigger model download using the [downloadConfigurationModel(completionHandler:)](vtsuperresolutionscalerconfiguration/downloadconfigurationmodel%28completionhandler_%29.md) method. Best practice is to confirm availability of models and drive download with user awareness and interaction before engaging workflows that need this processor.

## Topics

### Creating a super resolution scaler configuration

- [init(frameWidth:frameHeight:scaleFactor:inputType:usePrecomputedFlow:qualityPrioritization:revision:)](vtsuperresolutionscalerconfiguration/init%28framewidth_frameheight_scalefactor_inputtype_useprecomputedflow_qualityprioritization_revision_%29.md): Creates a new super-resolution scaler processor configuration.

### Determining processor availability

- [isSupported](vtsuperresolutionscalerconfiguration/issupported.md): Reports whether the system supports this processor.
- [supportedScaleFactors](vtsuperresolutionscalerconfiguration/supportedscalefactors-7ucur.md)

### Inspecting the configuration

- [frameWidth](vtsuperresolutionscalerconfiguration/framewidth.md): Width of source frame in pixels.
- [frameHeight](vtsuperresolutionscalerconfiguration/frameheight.md): Height of source frame in pixels.
- [scaleFactor](vtsuperresolutionscalerconfiguration/scalefactor.md): Indicates the scale factor between input and output.
- [inputType](vtsuperresolutionscalerconfiguration/inputtype-swift.property.md): Indicates the type of input.
- [VTSuperResolutionScalerConfiguration.InputType](vtsuperresolutionscalerconfiguration/inputtype-swift.enum.md): Available super-resolution processor input types.
- [usesPrecomputedFlow](vtsuperresolutionscalerconfiguration/usesprecomputedflow.md): Indicates that you provide optical flow.
- [usesPrecomputedFlow](vtsuperresolutionscalerconfiguration/usesprecomputedflow.md): Indicates that you provide optical flow.
- [sourcePixelBufferAttributes](vtsuperresolutionscalerconfiguration/sourcepixelbufferattributes.md): Pixel buffer attributes dictionary that describes requirements for pixel buffers which represent source frames and reference frames.
- [destinationPixelBufferAttributes](vtsuperresolutionscalerconfiguration/destinationpixelbufferattributes.md): Pixel buffer attributes dictionary that describes requirements for pixel buffers which represent destination frames.
- [supportedPixelFormats](vtsuperresolutionscalerconfiguration/supportedpixelformats.md)
- [qualityPrioritization](vtsuperresolutionscalerconfiguration/qualityprioritization-swift.property.md): A parameter to control quality and performance levels.
- [VTSuperResolutionScalerConfiguration.QualityPrioritization](vtsuperresolutionscalerconfiguration/qualityprioritization-swift.enum.md): Configuration value you set to prioritize quality or performance.

### Managing the configuration model

- [configurationModelStatus](vtsuperresolutionscalerconfiguration/configurationmodelstatus.md): Reports the download status of models that the system needs for the current configuration.
- [VTSuperResolutionScalerConfiguration.ModelStatus](vtsuperresolutionscalerconfiguration/modelstatus.md): Available super-resolution processor model status types.
- [configurationModelPercentageAvailable](vtsuperresolutionscalerconfiguration/configurationmodelpercentageavailable.md): Returns a floating point value between 0.0 and 1.0 indicating the percentage of required model assets that have been downloaded.
- [downloadConfigurationModel(completionHandler:)](vtsuperresolutionscalerconfiguration/downloadconfigurationmodel%28completionhandler_%29.md): Downloads models that the system needs for the current configuration.

### Inspecting revision information

- [revision](vtsuperresolutionscalerconfiguration/revision-swift.property.md): The specific algorithm or configuration revision you use to perform the request.
- [defaultRevision](vtsuperresolutionscalerconfiguration/defaultrevision.md): Provides the default revision of a specific algorithm or configuration.
- [supportedRevisions](vtsuperresolutionscalerconfiguration/supportedrevisions.md): Provides the collection of currently supported algorithms or configuration revisions for the class of configuration.
- [VTSuperResolutionScalerConfiguration.Revision](vtsuperresolutionscalerconfiguration/revision-swift.enum.md): Available algorithm revisions.

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

### Super resolution

- [VTSuperResolutionScalerParameters](vtsuperresolutionscalerparameters.md): An object that contains both input and output parameters that the super-resolution processor needs to run on a frame.

# VTSuperResolutionScalerConfiguration (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

Configuration that you use to set up the super-resolution processor.

## Declaration

```objectivec
@interface VTSuperResolutionScalerConfiguration : NSObject
```

<a id="overview"></a>

## Overview

This configuration enables the super-resolution processor on a `VTFrameProcessor` session.

> **Important**

> The super-resolution processor may require ML models which the framework needs to download in order to operate. Before calling [startSessionWithConfiguration:error:](vtframeprocessor/startsession%28configuration_%29.md) with an instance of this class, it is important that you verify that the necessary models are present by checking [configurationModelStatus](vtsuperresolutionscalerconfiguration/configurationmodelstatus.md). If models are not available, you can trigger model download using the [downloadConfigurationModelWithCompletionHandler:](vtsuperresolutionscalerconfiguration/downloadconfigurationmodel%28completionhandler_%29.md) method. Best practice is to confirm availability of models and drive download with user awareness and interaction before engaging workflows that need this processor.

## Topics

### Creating a super resolution scaler configuration

- [initWithFrameWidth:frameHeight:scaleFactor:inputType:usePrecomputedFlow:qualityPrioritization:revision:](vtsuperresolutionscalerconfiguration/init%28framewidth_frameheight_scalefactor_inputtype_useprecomputedflow_qualityprioritization_revision_%29.md): Creates a new super-resolution scaler processor configuration.

### Determining processor availability

- [supported](vtsuperresolutionscalerconfiguration/issupported.md): Reports whether the system supports this processor.

### Inspecting the configuration

- [frameWidth](vtsuperresolutionscalerconfiguration/framewidth.md): Width of source frame in pixels.
- [frameHeight](vtsuperresolutionscalerconfiguration/frameheight.md): Height of source frame in pixels.
- [scaleFactor](vtsuperresolutionscalerconfiguration/scalefactor.md): Indicates the scale factor between input and output.
- [inputType](vtsuperresolutionscalerconfiguration/inputtype-swift.property.md): Indicates the type of input.
- [VTSuperResolutionScalerConfigurationInputType](vtsuperresolutionscalerconfiguration/inputtype-swift.enum.md): Available super-resolution processor input types.
- [precomputedFlow](vtsuperresolutionscalerconfiguration/usesprecomputedflow.md): Indicates that you provide optical flow.
- [precomputedFlow](vtsuperresolutionscalerconfiguration/usesprecomputedflow.md): Indicates that you provide optical flow.
- [sourcePixelBufferAttributes](vtsuperresolutionscalerconfiguration/sourcepixelbufferattributes.md): Pixel buffer attributes dictionary that describes requirements for pixel buffers which represent source frames and reference frames.
- [destinationPixelBufferAttributes](vtsuperresolutionscalerconfiguration/destinationpixelbufferattributes.md): Pixel buffer attributes dictionary that describes requirements for pixel buffers which represent destination frames.
- [frameSupportedPixelFormats](vtsuperresolutionscalerconfiguration/framesupportedpixelformats.md): Available supported pixel formats for source frames for current configuration.
- [qualityPrioritization](vtsuperresolutionscalerconfiguration/qualityprioritization-swift.property.md): A parameter to control quality and performance levels.
- [VTSuperResolutionScalerConfigurationQualityPrioritization](vtsuperresolutionscalerconfiguration/qualityprioritization-swift.enum.md): Configuration value you set to prioritize quality or performance.

### Managing the configuration model

- [configurationModelStatus](vtsuperresolutionscalerconfiguration/configurationmodelstatus.md): Reports the download status of models that the system needs for the current configuration.
- [VTSuperResolutionScalerConfigurationModelStatus](vtsuperresolutionscalerconfiguration/modelstatus.md): Available super-resolution processor model status types.
- [configurationModelPercentageAvailable](vtsuperresolutionscalerconfiguration/configurationmodelpercentageavailable.md): Returns a floating point value between 0.0 and 1.0 indicating the percentage of required model assets that have been downloaded.
- [downloadConfigurationModelWithCompletionHandler:](vtsuperresolutionscalerconfiguration/downloadconfigurationmodel%28completionhandler_%29.md): Downloads models that the system needs for the current configuration.

### Inspecting revision information

- [revision](vtsuperresolutionscalerconfiguration/revision-swift.property.md): The specific algorithm or configuration revision you use to perform the request.
- [defaultRevision](vtsuperresolutionscalerconfiguration/defaultrevision.md): Provides the default revision of a specific algorithm or configuration.
- [supportedRevisions](vtsuperresolutionscalerconfiguration/supportedrevisions.md): Provides the collection of currently supported algorithms or configuration revisions for the class of configuration.
- [VTSuperResolutionScalerConfigurationRevision](vtsuperresolutionscalerconfiguration/revision-swift.enum.md): Available algorithm revisions.

### Type Properties

- [supportedScaleFactors](vtsuperresolutionscalerconfiguration/supportedscalefactors-94rce.md): Reports the set of supported scale factors to use when initializing a super-resolution scaler configuration.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [VTFrameProcessorConfiguration](vtframeprocessorconfiguration.md)

## See Also

### Super resolution

- [VTSuperResolutionScalerParameters](vtsuperresolutionscalerparameters.md): An object that contains both input and output parameters that the super-resolution processor needs to run on a frame.
