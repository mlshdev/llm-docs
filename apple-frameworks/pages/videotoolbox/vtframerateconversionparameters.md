> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtframerateconversionparameters](https://developer.apple.com/documentation/videotoolbox/vtframerateconversionparameters)

# VTFrameRateConversionParameters (Swift)

**Framework:** Video Toolbox  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 15.4+

An object that contains the required input and output parameters to run a frame rate conversion processor on a frame.

## Declaration

```swift
class VTFrameRateConversionParameters
```

<a id="overview"></a>

## Overview

This object is used in the processWithParameters call of a VTFrameProcessor class. The output parameter is a destinationFrame where the output frame is returned as a VTFrameProcessorMutableFrame back to the caller function once the processing completes.

The parameters within VTFrameRateConversionParameters are frame level parameters.

## Topics

### Creating conversion parameters

- [init(sourceFrame:nextFrame:opticalFlow:interpolationPhase:submissionMode:destinationFrames:)](vtframerateconversionparameters/init%28sourceframe_nextframe_opticalflow_interpolationphase_submissionmode_destinationframes_%29.md): Creates a new frame rate conversion parameters object.

### Inspecting the parameters

- [sourceFrame](vtframerateconversionparameters/sourceframe.md): The current source frame.
- [nextFrame](vtframerateconversionparameters/nextframe.md): The next source frame in presentation time order.
- [opticalFlow](vtframerateconversionparameters/opticalflow.md): A property that defines the optical flow for an object.
- [interpolationPhase](vtframerateconversionparameters/interpolationphase-2jky5.md): An array of floating-point values that indicate which intervals to insert a frame between the current and next frame.
- [submissionMode](vtframerateconversionparameters/submissionmode-swift.property.md): A value describing the processing request in a parameters submission object.
- [VTFrameRateConversionParameters.SubmissionMode](vtframerateconversionparameters/submissionmode-swift.enum.md): A value describing the processing request in a parameters submission object.

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

### Frame rate conversion

- [VTFrameRateConversionConfiguration](vtframerateconversionconfiguration.md): An object that enables the frame rate conversion on a frame processing session.

# VTFrameRateConversionParameters (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 15.4+

An object that contains the required input and output parameters to run a frame rate conversion processor on a frame.

## Declaration

```objectivec
@interface VTFrameRateConversionParameters : NSObject
```

<a id="overview"></a>

## Overview

This object is used in the processWithParameters call of a VTFrameProcessor class. The output parameter is a destinationFrame where the output frame is returned as a VTFrameProcessorMutableFrame back to the caller function once the processing completes.

The parameters within VTFrameRateConversionParameters are frame level parameters.

## Topics

### Creating conversion parameters

- [initWithSourceFrame:nextFrame:opticalFlow:interpolationPhase:submissionMode:destinationFrames:](vtframerateconversionparameters/initwithsourceframe_nextframe_opticalflow_interpolationphase_submissionmode_destinationframes_.md): Creates a new frame rate conversion parameters object.

### Inspecting the parameters

- [sourceFrame](vtframerateconversionparameters/sourceframe.md): The current source frame.
- [nextFrame](vtframerateconversionparameters/nextframe.md): The next source frame in presentation time order.
- [opticalFlow](vtframerateconversionparameters/opticalflow.md): A property that defines the optical flow for an object.
- [interpolationPhase](vtframerateconversionparameters/interpolationphase-6wdns.md): An array of floating-point values that indicate which intervals to insert a frame between the current and next frame.
- [submissionMode](vtframerateconversionparameters/submissionmode-swift.property.md): A value describing the processing request in a parameters submission object.
- [VTFrameRateConversionParametersSubmissionMode](vtframerateconversionparameters/submissionmode-swift.enum.md): A value describing the processing request in a parameters submission object.
- [destinationFrames](vtframerateconversionparameters/destinationframes.md): A caller-allocated array of frames that contains the pixel buffers to receive the results.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [VTFrameProcessorParameters](vtframeprocessorparameters.md)

## See Also

### Frame rate conversion

- [VTFrameRateConversionConfiguration](vtframerateconversionconfiguration.md): An object that enables the frame rate conversion on a frame processing session.
