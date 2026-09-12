> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtframerateconversionparameters/opticalflow](https://developer.apple.com/documentation/videotoolbox/vtframerateconversionparameters/opticalflow)

# opticalFlow (Swift)

**Framework:** Video Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 15.4+

A property that defines the optical flow for an object.

## Declaration

```swift
var opticalFlow: VTFrameProcessorOpticalFlow? { get }
```

<a id="discussion"></a>

## Discussion

An optional VTFrameProcessorReadOnlyOpticalFlow contains the forward and backward optical flow of the next frame. This value is only needed if the optical flow is pre-computed. For the first frame it will always be nil.

## See Also

### Inspecting the parameters

- [sourceFrame](sourceframe.md): The current source frame.
- [nextFrame](nextframe.md): The next source frame in presentation time order.
- [interpolationPhase](interpolationphase-2jky5.md): An array of floating-point values that indicate which intervals to insert a frame between the current and next frame.
- [submissionMode](submissionmode-swift.property.md): A value describing the processing request in a parameters submission object.
- [VTFrameRateConversionParameters.SubmissionMode](submissionmode-swift.enum.md): A value describing the processing request in a parameters submission object.

# opticalFlow (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 15.4+

A property that defines the optical flow for an object.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) VTFrameProcessorOpticalFlow * opticalFlow;
```

<a id="discussion"></a>

## Discussion

An optional VTFrameProcessorReadOnlyOpticalFlow contains the forward and backward optical flow of the next frame. This value is only needed if the optical flow is pre-computed. For the first frame it will always be nil.

## See Also

### Inspecting the parameters

- [sourceFrame](sourceframe.md): The current source frame.
- [nextFrame](nextframe.md): The next source frame in presentation time order.
- [interpolationPhase](interpolationphase-6wdns.md): An array of floating-point values that indicate which intervals to insert a frame between the current and next frame.
- [submissionMode](submissionmode-swift.property.md): A value describing the processing request in a parameters submission object.
- [VTFrameRateConversionParametersSubmissionMode](submissionmode-swift.enum.md): A value describing the processing request in a parameters submission object.
- [destinationFrames](destinationframes.md): A caller-allocated array of frames that contains the pixel buffers to receive the results.
