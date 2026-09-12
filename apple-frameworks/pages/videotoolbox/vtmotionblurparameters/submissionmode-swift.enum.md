> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtmotionblurparameters/submissionmode-swift.enum](https://developer.apple.com/documentation/videotoolbox/vtmotionblurparameters/submissionmode-swift.enum)

# VTMotionBlurParameters.SubmissionMode (Swift)

**Framework:** Video Toolbox  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 15.4+

A value describing the processing request in a parameters submission object.

## Declaration

```swift
enum SubmissionMode
```

<a id="overview"></a>

## Overview

Set to VTMotionBlurParametersSubmissionModeSequential to indicate that the current submission follows the presentation time order without jumping or skipping when compared to the previous submission. Using the submission mode sequential will yield better performance. Set to VTMotionBlurParametersSubmissionModeRandom to indicate a skip or a jump in frame sequence. If the submission mode random is set, the internal cache will be cleared during the processWithParameters call.

## Topics

### Submission modes

- [VTMotionBlurParameters.SubmissionMode.random](submissionmode-swift.enum/random.md): A submission follow presentation time order with a jump or skip in a frame sequence.
- [VTMotionBlurParameters.SubmissionMode.sequential](submissionmode-swift.enum/sequential.md): A submission follow presentation time order without a jump or skip when compared to a previous submission.

### Initializers

- [init(rawValue:)](submissionmode-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Inspecting the parameters

- [sourceFrame](sourceframe.md): The current source frame.
- [nextFrame](nextframe.md): The next source frame in presentation time order.
- [previousFrame](previousframe.md): The previous source frame in presentation time order.
- [motionBlurStrength](motionblurstrength.md): A value that indicates the strength of blur to apply.
- [nextOpticalFlow](nextopticalflow.md): Optional optical flow object that contains forward and backward optical flow with the next frame.
- [previousOpticalFlow](previousopticalflow.md): Optional optical flow object that contains forward and backward optical flow with the previous frame.
- [submissionMode](submissionmode-swift.property.md): A value describing the processing request in a parameters submission object.

# VTMotionBlurParametersSubmissionMode (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Enumeration  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.0+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

A value describing the processing request in a parameters submission object.

## Declaration

```objectivec
enum VTMotionBlurParametersSubmissionMode : NSInteger;
```

<a id="overview"></a>

## Overview

Set to VTMotionBlurParametersSubmissionModeSequential to indicate that the current submission follows the presentation time order without jumping or skipping when compared to the previous submission. Using the submission mode sequential will yield better performance. Set to VTMotionBlurParametersSubmissionModeRandom to indicate a skip or a jump in frame sequence. If the submission mode random is set, the internal cache will be cleared during the processWithParameters call.

## Topics

### Submission modes

- [VTMotionBlurParametersSubmissionModeRandom](submissionmode-swift.enum/random.md): A submission follow presentation time order with a jump or skip in a frame sequence.
- [VTMotionBlurParametersSubmissionModeSequential](submissionmode-swift.enum/sequential.md): A submission follow presentation time order without a jump or skip when compared to a previous submission.

## See Also

### Inspecting the parameters

- [sourceFrame](sourceframe.md): The current source frame.
- [destinationFrame](destinationframe.md): A user-allocated pixel buffer that receives the results.
- [nextFrame](nextframe.md): The next source frame in presentation time order.
- [previousFrame](previousframe.md): The previous source frame in presentation time order.
- [motionBlurStrength](motionblurstrength.md): A value that indicates the strength of blur to apply.
- [nextOpticalFlow](nextopticalflow.md): Optional optical flow object that contains forward and backward optical flow with the next frame.
- [previousOpticalFlow](previousopticalflow.md): Optional optical flow object that contains forward and backward optical flow with the previous frame.
- [submissionMode](submissionmode-swift.property.md): A value describing the processing request in a parameters submission object.
