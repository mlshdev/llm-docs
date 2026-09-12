> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtframerateconversionparameters/submissionmode-swift.enum](https://developer.apple.com/documentation/videotoolbox/vtframerateconversionparameters/submissionmode-swift.enum)

# VTFrameRateConversionParameters.SubmissionMode (Swift)

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

Set to VTFrameRateConversionParametersSubmissionModeSequential to indicate that the current submission follows the presentation time order without jumping or skipping when compared to the previous submission. Using the submission mode sequential will yield better performance. Set to VTFrameRateConversionParametersSubmissionModeRandom to indicate a skip or a jump in frame sequence. If the submission mode random is set, the internal cache will be cleared during the processWithParameters call.

## Topics

### Submission modes

- [VTFrameRateConversionParameters.SubmissionMode.random](submissionmode-swift.enum/random.md): A submission follow presentation time order with a jump or skip in a frame sequence.
- [VTFrameRateConversionParameters.SubmissionMode.sequential](submissionmode-swift.enum/sequential.md): A submission follow presentation time order without a jump or skip when compared to a previous submission.

### Initializers

- [init(rawValue:)](submissionmode-swift.enum/init%28rawvalue_%29.md)

### Enumeration Cases

- [VTFrameRateConversionParameters.SubmissionMode.sequentialReferencesUnchanged](submissionmode-swift.enum/sequentialreferencesunchanged.md): You are submitting frames sequentially.

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
- [opticalFlow](opticalflow.md): A property that defines the optical flow for an object.
- [interpolationPhase](interpolationphase-2jky5.md): An array of floating-point values that indicate which intervals to insert a frame between the current and next frame.
- [submissionMode](submissionmode-swift.property.md): A value describing the processing request in a parameters submission object.

# VTFrameRateConversionParametersSubmissionMode (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Enumeration  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.0+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

A value describing the processing request in a parameters submission object.

## Declaration

```objectivec
enum VTFrameRateConversionParametersSubmissionMode : NSInteger;
```

<a id="overview"></a>

## Overview

Set to VTFrameRateConversionParametersSubmissionModeSequential to indicate that the current submission follows the presentation time order without jumping or skipping when compared to the previous submission. Using the submission mode sequential will yield better performance. Set to VTFrameRateConversionParametersSubmissionModeRandom to indicate a skip or a jump in frame sequence. If the submission mode random is set, the internal cache will be cleared during the processWithParameters call.

## Topics

### Submission modes

- [VTFrameRateConversionParametersSubmissionModeRandom](submissionmode-swift.enum/random.md): A submission follow presentation time order with a jump or skip in a frame sequence.
- [VTFrameRateConversionParametersSubmissionModeSequential](submissionmode-swift.enum/sequential.md): A submission follow presentation time order without a jump or skip when compared to a previous submission.

### Enumeration Cases

- [VTFrameRateConversionParametersSubmissionModeSequentialReferencesUnchanged](submissionmode-swift.enum/sequentialreferencesunchanged.md): You are submitting frames sequentially.

## See Also

### Inspecting the parameters

- [sourceFrame](sourceframe.md): The current source frame.
- [nextFrame](nextframe.md): The next source frame in presentation time order.
- [opticalFlow](opticalflow.md): A property that defines the optical flow for an object.
- [interpolationPhase](interpolationphase-6wdns.md): An array of floating-point values that indicate which intervals to insert a frame between the current and next frame.
- [submissionMode](submissionmode-swift.property.md): A value describing the processing request in a parameters submission object.
- [destinationFrames](destinationframes.md): A caller-allocated array of frames that contains the pixel buffers to receive the results.
