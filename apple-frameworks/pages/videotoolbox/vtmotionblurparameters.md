> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtmotionblurparameters](https://developer.apple.com/documentation/videotoolbox/vtmotionblurparameters)

# VTMotionBlurParameters (Swift)

**Framework:** Video Toolbox  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 15.4+

This object contains both input and output parameters necessary to run the motion blur processor on a frame.

## Declaration

```swift
class VTMotionBlurParameters
```

<a id="overview"></a>

## Overview

This object is used in the processWithParameters call of the VTFrameProcessor class. The output parameter is a destinationFrame where the output frame is returned as a VTFrameProcessorFrame back to the caller function once processWithParameters completes.

The parameters within VTMotionBlurParameters are frame level parameters.

## Topics

### Creating a parameters object

- [init(sourceFrame:nextFrame:previousFrame:nextOpticalFlow:previousOpticalFlow:motionBlurStrength:submissionMode:destinationFrame:)](vtmotionblurparameters/init%28sourceframe_nextframe_previousframe_nextopticalflow_previousopticalflow_motionblurstrength_submissionmode_destinationframe_%29.md)

### Inspecting the parameters

- [sourceFrame](vtmotionblurparameters/sourceframe.md): The current source frame.
- [nextFrame](vtmotionblurparameters/nextframe.md): The next source frame in presentation time order.
- [previousFrame](vtmotionblurparameters/previousframe.md): The previous source frame in presentation time order.
- [motionBlurStrength](vtmotionblurparameters/motionblurstrength.md): A value that indicates the strength of blur to apply.
- [nextOpticalFlow](vtmotionblurparameters/nextopticalflow.md): Optional optical flow object that contains forward and backward optical flow with the next frame.
- [previousOpticalFlow](vtmotionblurparameters/previousopticalflow.md): Optional optical flow object that contains forward and backward optical flow with the previous frame.
- [submissionMode](vtmotionblurparameters/submissionmode-swift.property.md): A value describing the processing request in a parameters submission object.
- [VTMotionBlurParameters.SubmissionMode](vtmotionblurparameters/submissionmode-swift.enum.md): A value describing the processing request in a parameters submission object.

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

### Motion blur

- [VTMotionBlurConfiguration](vtmotionblurconfiguration.md): A configuration object to enable motion blur on a frame processing session.

# VTMotionBlurParameters (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 15.4+

This object contains both input and output parameters necessary to run the motion blur processor on a frame.

## Declaration

```objectivec
@interface VTMotionBlurParameters : NSObject
```

<a id="overview"></a>

## Overview

This object is used in the processWithParameters call of the VTFrameProcessor class. The output parameter is a destinationFrame where the output frame is returned as a VTFrameProcessorFrame back to the caller function once processWithParameters completes.

The parameters within VTMotionBlurParameters are frame level parameters.

## Topics

### Creating a parameters object

- [initWithSourceFrame:nextFrame:previousFrame:nextOpticalFlow:previousOpticalFlow:motionBlurStrength:submissionMode:destinationFrame:](vtmotionblurparameters/init%28sourceframe_nextframe_previousframe_nextopticalflow_previousopticalflow_motionblurstrength_submissionmode_destinationframe_%29.md)

### Inspecting the parameters

- [sourceFrame](vtmotionblurparameters/sourceframe.md): The current source frame.
- [destinationFrame](vtmotionblurparameters/destinationframe.md): A user-allocated pixel buffer that receives the results.
- [nextFrame](vtmotionblurparameters/nextframe.md): The next source frame in presentation time order.
- [previousFrame](vtmotionblurparameters/previousframe.md): The previous source frame in presentation time order.
- [motionBlurStrength](vtmotionblurparameters/motionblurstrength.md): A value that indicates the strength of blur to apply.
- [nextOpticalFlow](vtmotionblurparameters/nextopticalflow.md): Optional optical flow object that contains forward and backward optical flow with the next frame.
- [previousOpticalFlow](vtmotionblurparameters/previousopticalflow.md): Optional optical flow object that contains forward and backward optical flow with the previous frame.
- [submissionMode](vtmotionblurparameters/submissionmode-swift.property.md): A value describing the processing request in a parameters submission object.
- [VTMotionBlurParametersSubmissionMode](vtmotionblurparameters/submissionmode-swift.enum.md): A value describing the processing request in a parameters submission object.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [VTFrameProcessorParameters](vtframeprocessorparameters.md)

## See Also

### Motion blur

- [VTMotionBlurConfiguration](vtmotionblurconfiguration.md): A configuration object to enable motion blur on a frame processing session.
