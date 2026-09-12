> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtopticalflowparameters/init(sourceframe:nextframe:submissionmode:destinationopticalflow:)](https://developer.apple.com/documentation/videotoolbox/vtopticalflowparameters/init(sourceframe:nextframe:submissionmode:destinationopticalflow:))

# init(sourceFrame:nextFrame:submissionMode:destinationOpticalFlow:) (Swift)

**Framework:** Video Toolbox  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 15.4+

## Declaration

```swift
init?(sourceFrame: VTFrameProcessorFrame, nextFrame: VTFrameProcessorFrame, submissionMode: VTOpticalFlowParameters.SubmissionMode, destinationOpticalFlow: VTFrameProcessorOpticalFlow)
```

## Parameters

- `sourceFrame`: The current source frame. This must be a non-nil value.
- `nextFrame`: The next source frame in presentation time order. This value can be set to nil for the last frame.
- `submissionMode`: A value describing the processing request in a parameters submission object.
- `destinationOpticalFlow`: A user allocated mutable optical flow that will receive the results.

# initWithSourceFrame:nextFrame:submissionMode:destinationOpticalFlow: (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 15.4+

## Declaration

```objectivec
- (instancetype) initWithSourceFrame:(VTFrameProcessorFrame *) sourceFrame nextFrame:(VTFrameProcessorFrame *) nextFrame submissionMode:(VTOpticalFlowParametersSubmissionMode) submissionMode destinationOpticalFlow:(VTFrameProcessorOpticalFlow *) destinationOpticalFlow;
```

## Parameters

- `sourceFrame`: The current source frame. This must be a non-nil value.
- `nextFrame`: The next source frame in presentation time order. This value can be set to nil for the last frame.
- `submissionMode`: A value describing the processing request in a parameters submission object.
- `destinationOpticalFlow`: A user allocated mutable optical flow that will receive the results.
