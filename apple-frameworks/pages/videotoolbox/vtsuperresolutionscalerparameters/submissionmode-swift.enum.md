> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtsuperresolutionscalerparameters/submissionmode-swift.enum](https://developer.apple.com/documentation/videotoolbox/vtsuperresolutionscalerparameters/submissionmode-swift.enum)

# VTSuperResolutionScalerParameters.SubmissionMode (Swift)

**Framework:** Video Toolbox  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

Indicates the order of input frames.

## Declaration

```swift
enum SubmissionMode
```

<a id="overview"></a>

## Overview

When submitting [VTSuperResolutionScalerParameters](../vtsuperresolutionscalerparameters.md) to the processor, you need to provide one of these values based on how the input frames are related to each other.

Use [VTSuperResolutionScalerParameters.SubmissionMode.sequential](submissionmode-swift.enum/sequential.md) to indicate that the current submission follows presentation time order without jumps or skips, when compared to previous submissions. This value provides better processor performance than other values.

Use [VTSuperResolutionScalerParameters.SubmissionMode.random](submissionmode-swift.enum/random.md) to indicate that the current submission has no relation to the previous submission. Typically, this indicates a jump or skip in the frame sequence. The processor clears internal caches when it receives this value in `VTFrameProcessor/processWithParameters` function call.

## Topics

### Enumeration Cases

- [VTSuperResolutionScalerParameters.SubmissionMode.random](submissionmode-swift.enum/random.md)
- [VTSuperResolutionScalerParameters.SubmissionMode.sequential](submissionmode-swift.enum/sequential.md)

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

- [sourceFrame](sourceframe.md): Current source frame, which must be non `nil`.
- [previousFrame](previousframe.md): Previous source frame in presentation time order, which is `nil` for the first frame.
- [previousOutputFrame](previousoutputframe.md): Previous output frame in presentation time order, which is `nil` for the first frame.
- [opticalFlow](opticalflow.md): Optional object that contains forward and backward optical flow with the previous frame.
- [submissionMode](submissionmode-swift.property.md): Ordering of the input frames in this submission relative to the previous submission.

# VTSuperResolutionScalerParametersSubmissionMode (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Enumeration  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.0+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

Indicates the order of input frames.

## Declaration

```objectivec
enum VTSuperResolutionScalerParametersSubmissionMode : NSInteger;
```

<a id="overview"></a>

## Overview

When submitting [VTSuperResolutionScalerParameters](../vtsuperresolutionscalerparameters.md) to the processor, you need to provide one of these values based on how the input frames are related to each other.

Use [VTSuperResolutionScalerParametersSubmissionModeSequential](submissionmode-swift.enum/sequential.md) to indicate that the current submission follows presentation time order without jumps or skips, when compared to previous submissions. This value provides better processor performance than other values.

Use [VTSuperResolutionScalerParametersSubmissionModeRandom](submissionmode-swift.enum/random.md) to indicate that the current submission has no relation to the previous submission. Typically, this indicates a jump or skip in the frame sequence. The processor clears internal caches when it receives this value in `VTFrameProcessor/processWithParameters` function call.

## Topics

### Enumeration Cases

- [VTSuperResolutionScalerParametersSubmissionModeRandom](submissionmode-swift.enum/random.md)
- [VTSuperResolutionScalerParametersSubmissionModeSequential](submissionmode-swift.enum/sequential.md)

## See Also

### Inspecting the parameters

- [sourceFrame](sourceframe.md): Current source frame, which must be non `nil`.
- [previousFrame](previousframe.md): Previous source frame in presentation time order, which is `nil` for the first frame.
- [previousOutputFrame](previousoutputframe.md): Previous output frame in presentation time order, which is `nil` for the first frame.
- [opticalFlow](opticalflow.md): Optional object that contains forward and backward optical flow with the previous frame.
- [destinationFrame](destinationframe.md): Destination frame that contains user-allocated pixel buffer that receives the results.
- [submissionMode](submissionmode-swift.property.md): Ordering of the input frames in this submission relative to the previous submission.
