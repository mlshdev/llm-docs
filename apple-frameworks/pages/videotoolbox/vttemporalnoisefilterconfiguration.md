> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vttemporalnoisefilterconfiguration](https://developer.apple.com/documentation/videotoolbox/vttemporalnoisefilterconfiguration)

# VTTemporalNoiseFilterConfiguration (Swift)

**Framework:** Video Toolbox  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

A configuration object to initiate a frame processor and use temporal noise-filter processor.

## Declaration

```swift
class VTTemporalNoiseFilterConfiguration
```

<a id="overview"></a>

## Overview

The class properties of `VTTemporalNoiseFilterConfiguration` help to identify the capabilities of temporal noise filter processor on the current platform, prior to initiating a session. You can confirm the availability of temporal noise-filter processor in the current platform by checking the [isSupported](vttemporalnoisefilterconfiguration/issupported.md) class property. Verify the processor’s capability to process source frames by ensuring that the dimensions are no less than [minimumDimensions](vttemporalnoisefilterconfiguration/minimumdimensions.md) and no greater than [maximumDimensions](vttemporalnoisefilterconfiguration/maximumdimensions.md). Use the instance properties such as [frameSupportedPixelFormats](vttemporalnoisefilterconfiguration/framesupportedpixelformats.md), [sourcePixelBufferAttributes](vttemporalnoisefilterconfiguration/sourcepixelbufferattributes.md), and [destinationPixelBufferAttributes](vttemporalnoisefilterconfiguration/destinationpixelbufferattributes.md) to ensure that the input and output pixel buffer formats and attributes of the processor align with the client’s specific requirements. The properties [previousFrameCount](vttemporalnoisefilterconfiguration/previousframecount.md) and [nextFrameCount](vttemporalnoisefilterconfiguration/nextframecount.md) represent the maximum number of preceding and subsequent reference frames, used in the processing of a source frame, to achieve optimum noise-reduction quality.

## Topics

### Creating a temporal noise filter configuration

- [init(frameWidth:frameHeight:sourcePixelFormat:)](vttemporalnoisefilterconfiguration/init%28framewidth_frameheight_sourcepixelformat_%29.md): Creates a new temporal noise-processor configuration.

### Determining processor availability

- [isSupported](vttemporalnoisefilterconfiguration/issupported.md): Reports whether the system supports this processor.

### Inspecting the configuration

- [frameWidth](vttemporalnoisefilterconfiguration/framewidth.md): Width of source frame in pixels.
- [frameHeight](vttemporalnoisefilterconfiguration/frameheight.md): Height of source frame in pixels.
- [sourcePixelBufferAttributes](vttemporalnoisefilterconfiguration/sourcepixelbufferattributes.md): Pixel buffer attributes dictionary that describes requirements for pixel buffers which represent source frames and reference frames.
- [destinationPixelBufferAttributes](vttemporalnoisefilterconfiguration/destinationpixelbufferattributes.md): Pixel buffer attributes dictionary that describes requirements for pixel buffers which represent destination frames.
- [supportedPixelFormats](vttemporalnoisefilterconfiguration/supportedpixelformats.md)
- [supportedSourcePixelFormats](vttemporalnoisefilterconfiguration/supportedsourcepixelformats-4ipcg.md)

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

### Temporal noise filter

- [VTTemporalNoiseFilterParameters](vttemporalnoisefilterparameters.md): Encapsulates the frame-level parameters necessary for processing a source frame using temporal noise-filter processor.

# VTTemporalNoiseFilterConfiguration (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

A configuration object to initiate a frame processor and use temporal noise-filter processor.

## Declaration

```objectivec
@interface VTTemporalNoiseFilterConfiguration : NSObject
```

<a id="overview"></a>

## Overview

The class properties of `VTTemporalNoiseFilterConfiguration` help to identify the capabilities of temporal noise filter processor on the current platform, prior to initiating a session. You can confirm the availability of temporal noise-filter processor in the current platform by checking the [supported](vttemporalnoisefilterconfiguration/issupported.md) class property. Verify the processor’s capability to process source frames by ensuring that the dimensions are no less than [minimumDimensions](vttemporalnoisefilterconfiguration/minimumdimensions.md) and no greater than [maximumDimensions](vttemporalnoisefilterconfiguration/maximumdimensions.md). Use the instance properties such as [frameSupportedPixelFormats](vttemporalnoisefilterconfiguration/framesupportedpixelformats.md), [sourcePixelBufferAttributes](vttemporalnoisefilterconfiguration/sourcepixelbufferattributes.md), and [destinationPixelBufferAttributes](vttemporalnoisefilterconfiguration/destinationpixelbufferattributes.md) to ensure that the input and output pixel buffer formats and attributes of the processor align with the client’s specific requirements. The properties [previousFrameCount](vttemporalnoisefilterconfiguration/previousframecount.md) and [nextFrameCount](vttemporalnoisefilterconfiguration/nextframecount.md) represent the maximum number of preceding and subsequent reference frames, used in the processing of a source frame, to achieve optimum noise-reduction quality.

## Topics

### Creating a temporal noise filter configuration

- [initWithFrameWidth:frameHeight:sourcePixelFormat:](vttemporalnoisefilterconfiguration/init%28framewidth_frameheight_sourcepixelformat_%29.md): Creates a new temporal noise-processor configuration.

### Determining processor availability

- [supported](vttemporalnoisefilterconfiguration/issupported.md): Reports whether the system supports this processor.
- [maximumDimensions](vttemporalnoisefilterconfiguration/maximumdimensions.md): The maximum dimensions of a source frame that the processor supports.
- [minimumDimensions](vttemporalnoisefilterconfiguration/minimumdimensions.md): The minimum dimensions of a source frame that the processor supports.

### Inspecting the configuration

- [frameWidth](vttemporalnoisefilterconfiguration/framewidth.md): Width of source frame in pixels.
- [frameHeight](vttemporalnoisefilterconfiguration/frameheight.md): Height of source frame in pixels.
- [nextFrameCount](vttemporalnoisefilterconfiguration/nextframecount.md): Maximum number of future reference frames that the processor can use to process a source frame.
- [previousFrameCount](vttemporalnoisefilterconfiguration/previousframecount.md): Maximum number of past reference frames that the processor can use to process a source frame.
- [sourcePixelBufferAttributes](vttemporalnoisefilterconfiguration/sourcepixelbufferattributes.md): Pixel buffer attributes dictionary that describes requirements for pixel buffers which represent source frames and reference frames.
- [destinationPixelBufferAttributes](vttemporalnoisefilterconfiguration/destinationpixelbufferattributes.md): Pixel buffer attributes dictionary that describes requirements for pixel buffers which represent destination frames.
- [frameSupportedPixelFormats](vttemporalnoisefilterconfiguration/framesupportedpixelformats.md): Supported pixel formats for source frames for current configuration.

### Type Properties

- [supportedSourcePixelFormats](vttemporalnoisefilterconfiguration/supportedsourcepixelformats-1w5i2.md): List of all supported pixel formats for source frames.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [VTFrameProcessorConfiguration](vtframeprocessorconfiguration.md)

## See Also

### Temporal noise filter

- [VTTemporalNoiseFilterParameters](vttemporalnoisefilterparameters.md): Encapsulates the frame-level parameters necessary for processing a source frame using temporal noise-filter processor.
