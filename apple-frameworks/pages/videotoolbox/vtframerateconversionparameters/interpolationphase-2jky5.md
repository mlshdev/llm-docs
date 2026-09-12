> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtframerateconversionparameters/interpolationphase-2jky5](https://developer.apple.com/documentation/videotoolbox/vtframerateconversionparameters/interpolationphase-2jky5)

# interpolationPhase

**Framework:** Video Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 15.4+

An array of floating-point values that indicate which intervals to insert a frame between the current and next frame.

## Declaration

```swift
var interpolationPhase: [Float] { get }
```

<a id="discussion"></a>

## Discussion

Array size indicates how many frames are needed to interpolate and needs to match destinationFrames array size, where there is one interval for each destination frame. Float number values should be between 0 and 1, e.g. to insert one frame in the middle, a value of 0.5 can be used.

## See Also

### Inspecting the parameters

- [sourceFrame](sourceframe.md): The current source frame.
- [nextFrame](nextframe.md): The next source frame in presentation time order.
- [opticalFlow](opticalflow.md): A property that defines the optical flow for an object.
- [submissionMode](submissionmode-swift.property.md): A value describing the processing request in a parameters submission object.
- [VTFrameRateConversionParameters.SubmissionMode](submissionmode-swift.enum.md): A value describing the processing request in a parameters submission object.
