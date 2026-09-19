> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videotoolbox/vtframerateconversionparameters/destinationframes

# destinationFrames

**Interface language:** Objective-C

**Framework:** Video Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 15.4+

A caller-allocated array of frames that contains the pixel buffers to receive the results.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<VTFrameProcessorFrame *> * destinationFrames;
```

<a id="discussion"></a>

## Discussion

This array must contain the same number of elements as the `interpolationPhase` property.

## See Also

### Inspecting the parameters

- [sourceFrame](sourceframe.md): The current source frame.
- [nextFrame](nextframe.md): The next source frame in presentation time order.
- [opticalFlow](opticalflow.md): A property that defines the optical flow for an object.
- [interpolationPhase](interpolationphase-6wdns.md): An array of floating-point values that indicate which intervals to insert a frame between the current and next frame.
- [submissionMode](submissionmode-swift.property.md): A value describing the processing request in a parameters submission object.
- [VTFrameRateConversionParametersSubmissionMode](submissionmode-swift.enum.md): A value describing the processing request in a parameters submission object.
