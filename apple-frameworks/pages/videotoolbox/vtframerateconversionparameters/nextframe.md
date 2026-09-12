> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtframerateconversionparameters/nextframe](https://developer.apple.com/documentation/videotoolbox/vtframerateconversionparameters/nextframe)

# nextFrame (Swift)

**Framework:** Video Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 15.4+

The next source frame in presentation time order.

## Declaration

```swift
var nextFrame: VTFrameProcessorFrame? { get }
```

<a id="discussion"></a>

## Discussion

For the last frame this value will be nil.

## See Also

### Inspecting the parameters

- [sourceFrame](sourceframe.md): The current source frame.
- [opticalFlow](opticalflow.md): A property that defines the optical flow for an object.
- [interpolationPhase](interpolationphase-2jky5.md): An array of floating-point values that indicate which intervals to insert a frame between the current and next frame.
- [submissionMode](submissionmode-swift.property.md): A value describing the processing request in a parameters submission object.
- [VTFrameRateConversionParameters.SubmissionMode](submissionmode-swift.enum.md): A value describing the processing request in a parameters submission object.

# nextFrame (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 15.4+

The next source frame in presentation time order.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) VTFrameProcessorFrame * nextFrame;
```

<a id="discussion"></a>

## Discussion

For the last frame this value will be nil.

## See Also

### Inspecting the parameters

- [sourceFrame](sourceframe.md): The current source frame.
- [opticalFlow](opticalflow.md): A property that defines the optical flow for an object.
- [interpolationPhase](interpolationphase-6wdns.md): An array of floating-point values that indicate which intervals to insert a frame between the current and next frame.
- [submissionMode](submissionmode-swift.property.md): A value describing the processing request in a parameters submission object.
- [VTFrameRateConversionParametersSubmissionMode](submissionmode-swift.enum.md): A value describing the processing request in a parameters submission object.
- [destinationFrames](destinationframes.md): A caller-allocated array of frames that contains the pixel buffers to receive the results.
