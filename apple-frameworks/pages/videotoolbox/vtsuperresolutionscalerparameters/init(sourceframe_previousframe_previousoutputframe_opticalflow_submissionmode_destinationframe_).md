> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtsuperresolutionscalerparameters/init(sourceframe:previousframe:previousoutputframe:opticalflow:submissionmode:destinationframe:)](https://developer.apple.com/documentation/videotoolbox/vtsuperresolutionscalerparameters/init(sourceframe:previousframe:previousoutputframe:opticalflow:submissionmode:destinationframe:))

# init(sourceFrame:previousFrame:previousOutputFrame:opticalFlow:submissionMode:destinationFrame:) (Swift)

**Framework:** Video Toolbox  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

Creates a new super-resolution scaler parameters instance.

## Declaration

```swift
init?(sourceFrame: VTFrameProcessorFrame, previousFrame: VTFrameProcessorFrame?, previousOutputFrame: VTFrameProcessorFrame?, opticalFlow: VTFrameProcessorOpticalFlow?, submissionMode: VTSuperResolutionScalerParameters.SubmissionMode, destinationFrame: VTFrameProcessorFrame)
```

## Parameters

- `sourceFrame`: Current source frame; must be non `nil`.
- `previousFrame`: The previous source frame in presentation time order. For the first frame you can set this to `nil`.
- `previousOutputFrame`: The previous output frame in presentation time order. For the first frame you can set this to `nil`.
- `opticalFlow`: Optional `VTFrameProcessorOpticalFlow` object that contains forward and backward optical flow between the `sourceFrame` and `previousFrame`. You only need this if optical flow is pre-computed.
- `submissionMode`: Provides a hint to let the processor know whether you are submitting frames in presentation sequence. For more information about supported modes see [VTSuperResolutionScalerParameters.SubmissionMode](submissionmode-swift.enum.md).
- `destinationFrame`: User-allocated pixel buffer that receives the results.

<a id="discussion"></a>

## Discussion

Returns `nil` if `sourceFrame` or `destinationFrame` is `nil`, or if `sourceFrame` and reference frames have different pixel formats.

# initWithSourceFrame:previousFrame:previousOutputFrame:opticalFlow:submissionMode:destinationFrame: (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

Creates a new super-resolution scaler parameters instance.

## Declaration

```objectivec
- (instancetype) initWithSourceFrame:(VTFrameProcessorFrame *) sourceFrame previousFrame:(VTFrameProcessorFrame *) previousFrame previousOutputFrame:(VTFrameProcessorFrame *) previousOutputFrame opticalFlow:(VTFrameProcessorOpticalFlow *) opticalFlow submissionMode:(VTSuperResolutionScalerParametersSubmissionMode) submissionMode destinationFrame:(VTFrameProcessorFrame *) destinationFrame;
```

## Parameters

- `sourceFrame`: Current source frame; must be non `nil`.
- `previousFrame`: The previous source frame in presentation time order. For the first frame you can set this to `nil`.
- `previousOutputFrame`: The previous output frame in presentation time order. For the first frame you can set this to `nil`.
- `opticalFlow`: Optional `VTFrameProcessorOpticalFlow` object that contains forward and backward optical flow between the `sourceFrame` and `previousFrame`. You only need this if optical flow is pre-computed.
- `submissionMode`: Provides a hint to let the processor know whether you are submitting frames in presentation sequence. For more information about supported modes see [VTSuperResolutionScalerParametersSubmissionMode](submissionmode-swift.enum.md).
- `destinationFrame`: User-allocated pixel buffer that receives the results.

<a id="discussion"></a>

## Discussion

Returns `nil` if `sourceFrame` or `destinationFrame` is `nil`, or if `sourceFrame` and reference frames have different pixel formats.
