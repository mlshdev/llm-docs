> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtframerateconversionparameters/submissionmode-swift.property](https://developer.apple.com/documentation/videotoolbox/vtframerateconversionparameters/submissionmode-swift.property)

# submissionMode (Swift)

**Framework:** Video Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 15.4+

A value describing the processing request in a parameters submission object.

## Declaration

```swift
var submissionMode: VTFrameRateConversionParameters.SubmissionMode { get }
```

<a id="discussion"></a>

## Discussion

Set to VTFrameRateConversionParametersSubmissionModeSequential to indicate that the current submission follows the presentation time order without jumping or skipping when compared to the previous submission. Using the submission mode sequential will yield better performance. Set to VTFrameRateConversionParametersSubmissionModeRandom to indicate a skip or a jump in frame sequence. If the submission mode random is set, the internal cache will be cleared during the processWithParameters call.

## See Also

### Inspecting the parameters

- [sourceFrame](sourceframe.md): The current source frame.
- [nextFrame](nextframe.md): The next source frame in presentation time order.
- [opticalFlow](opticalflow.md): A property that defines the optical flow for an object.
- [interpolationPhase](interpolationphase-2jky5.md): An array of floating-point values that indicate which intervals to insert a frame between the current and next frame.
- [VTFrameRateConversionParameters.SubmissionMode](submissionmode-swift.enum.md): A value describing the processing request in a parameters submission object.

# submissionMode (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 15.4+

A value describing the processing request in a parameters submission object.

## Declaration

```objectivec
@property (nonatomic, readonly) VTFrameRateConversionParametersSubmissionMode submissionMode;
```

<a id="discussion"></a>

## Discussion

Set to VTFrameRateConversionParametersSubmissionModeSequential to indicate that the current submission follows the presentation time order without jumping or skipping when compared to the previous submission. Using the submission mode sequential will yield better performance. Set to VTFrameRateConversionParametersSubmissionModeRandom to indicate a skip or a jump in frame sequence. If the submission mode random is set, the internal cache will be cleared during the processWithParameters call.

## See Also

### Inspecting the parameters

- [sourceFrame](sourceframe.md): The current source frame.
- [nextFrame](nextframe.md): The next source frame in presentation time order.
- [opticalFlow](opticalflow.md): A property that defines the optical flow for an object.
- [interpolationPhase](interpolationphase-6wdns.md): An array of floating-point values that indicate which intervals to insert a frame between the current and next frame.
- [VTFrameRateConversionParametersSubmissionMode](submissionmode-swift.enum.md): A value describing the processing request in a parameters submission object.
- [destinationFrames](destinationframes.md): A caller-allocated array of frames that contains the pixel buffers to receive the results.
