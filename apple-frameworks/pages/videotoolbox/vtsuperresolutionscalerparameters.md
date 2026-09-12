> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtsuperresolutionscalerparameters](https://developer.apple.com/documentation/videotoolbox/vtsuperresolutionscalerparameters)

# VTSuperResolutionScalerParameters (Swift)

**Framework:** Video Toolbox  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

An object that contains both input and output parameters that the super-resolution processor needs to run on a frame.

## Declaration

```swift
class VTSuperResolutionScalerParameters
```

<a id="overview"></a>

## Overview

Use this object in the `processWithParameters` call of the `VTFrameProcessor` class. The output parameter for this class is `destinationFrame`, where the processor returns the output frame (as `VTFrameProcessorFrame`) back to you once `processWithParameters` completes.

`VTSuperResolutionScalerParameters` are frame-level parameters.

## Topics

### Creating a parameters object

- [init(sourceFrame:previousFrame:previousOutputFrame:opticalFlow:submissionMode:destinationFrame:)](vtsuperresolutionscalerparameters/init%28sourceframe_previousframe_previousoutputframe_opticalflow_submissionmode_destinationframe_%29.md): Creates a new super-resolution scaler parameters instance.

### Inspecting the parameters

- [sourceFrame](vtsuperresolutionscalerparameters/sourceframe.md): Current source frame, which must be non `nil`.
- [previousFrame](vtsuperresolutionscalerparameters/previousframe.md): Previous source frame in presentation time order, which is `nil` for the first frame.
- [previousOutputFrame](vtsuperresolutionscalerparameters/previousoutputframe.md): Previous output frame in presentation time order, which is `nil` for the first frame.
- [opticalFlow](vtsuperresolutionscalerparameters/opticalflow.md): Optional object that contains forward and backward optical flow with the previous frame.
- [submissionMode](vtsuperresolutionscalerparameters/submissionmode-swift.property.md): Ordering of the input frames in this submission relative to the previous submission.
- [VTSuperResolutionScalerParameters.SubmissionMode](vtsuperresolutionscalerparameters/submissionmode-swift.enum.md): Indicates the order of input frames.

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

### Super resolution

- [VTSuperResolutionScalerConfiguration](vtsuperresolutionscalerconfiguration.md): Configuration that you use to set up the super-resolution processor.

# VTSuperResolutionScalerParameters (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

An object that contains both input and output parameters that the super-resolution processor needs to run on a frame.

## Declaration

```objectivec
@interface VTSuperResolutionScalerParameters : NSObject
```

<a id="overview"></a>

## Overview

Use this object in the `processWithParameters` call of the `VTFrameProcessor` class. The output parameter for this class is `destinationFrame`, where the processor returns the output frame (as `VTFrameProcessorFrame`) back to you once `processWithParameters` completes.

`VTSuperResolutionScalerParameters` are frame-level parameters.

## Topics

### Creating a parameters object

- [initWithSourceFrame:previousFrame:previousOutputFrame:opticalFlow:submissionMode:destinationFrame:](vtsuperresolutionscalerparameters/init%28sourceframe_previousframe_previousoutputframe_opticalflow_submissionmode_destinationframe_%29.md): Creates a new super-resolution scaler parameters instance.

### Inspecting the parameters

- [sourceFrame](vtsuperresolutionscalerparameters/sourceframe.md): Current source frame, which must be non `nil`.
- [previousFrame](vtsuperresolutionscalerparameters/previousframe.md): Previous source frame in presentation time order, which is `nil` for the first frame.
- [previousOutputFrame](vtsuperresolutionscalerparameters/previousoutputframe.md): Previous output frame in presentation time order, which is `nil` for the first frame.
- [opticalFlow](vtsuperresolutionscalerparameters/opticalflow.md): Optional object that contains forward and backward optical flow with the previous frame.
- [destinationFrame](vtsuperresolutionscalerparameters/destinationframe.md): Destination frame that contains user-allocated pixel buffer that receives the results.
- [submissionMode](vtsuperresolutionscalerparameters/submissionmode-swift.property.md): Ordering of the input frames in this submission relative to the previous submission.
- [VTSuperResolutionScalerParametersSubmissionMode](vtsuperresolutionscalerparameters/submissionmode-swift.enum.md): Indicates the order of input frames.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [VTFrameProcessorParameters](vtframeprocessorparameters.md)

## See Also

### Super resolution

- [VTSuperResolutionScalerConfiguration](vtsuperresolutionscalerconfiguration.md): Configuration that you use to set up the super-resolution processor.
