> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnstatefulrequest](https://developer.apple.com/documentation/vision/vnstatefulrequest)

# VNStatefulRequest (Swift)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

An abstract request type that builds evidence of a condition over time.

## Declaration

```swift
class VNStatefulRequest
```

## Topics

### Initializing a Request

- [init(frameAnalysisSpacing:completionHandler:)](vnstatefulrequest/init%28frameanalysisspacing_completionhandler_%29.md): Initializes a video-based request.

### Configuring the Request

- [minimumLatencyFrameCount](vnstatefulrequest/minimumlatencyframecount.md): The minimum number of frames a request processes before reporting an observation.
- [frameAnalysisSpacing](vnstatefulrequest/frameanalysisspacing.md): A time value that indicates the interval between analysis operations.

## Relationships

### Inherits From

- [VNImageBasedRequest](vnimagebasedrequest.md)

### Inherited By

- [VNDetectHumanBodyPose3DRequest](vndetecthumanbodypose3drequest.md)
- [VNDetectTrajectoriesRequest](vndetecttrajectoriesrequest.md)
- [VNGeneratePersonSegmentationRequest](vngeneratepersonsegmentationrequest.md)
- [VNTrackHomographicImageRegistrationRequest](vntrackhomographicimageregistrationrequest.md)
- [VNTrackOpticalFlowRequest](vntrackopticalflowrequest.md)
- [VNTrackTranslationalImageRegistrationRequest](vntracktranslationalimageregistrationrequest.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Image sequence analysis

- [Applying Matte Effects to People in Images and Video](applying-matte-effects-to-people-in-images-and-video.md): Generate image masks for people automatically by using semantic person-segmentation.
- [Detecting human actions in a live video feed](../createml/detecting-human-actions-in-a-live-video-feed.md): Identify body movements by sending a person’s pose data from a series of video frames to an action-classification model.
- [Segmenting and colorizing individuals from a surrounding scene](segmenting-and-colorizing-individuals-from-a-surrounding-scene.md): Use the Vision framework to isolate and apply colors to people in an image.
- [VNGeneratePersonSegmentationRequest](vngeneratepersonsegmentationrequest.md): An object that produces a matte image for a person it finds in the input image.
- [VNGeneratePersonInstanceMaskRequest](vngeneratepersoninstancemaskrequest.md): An object that produces a mask of individual people it finds in the input image.
- [VNDetectDocumentSegmentationRequest](vndetectdocumentsegmentationrequest.md): An object that detects rectangular regions that contain text in the input image.
- [VNSequenceRequestHandler](vnsequencerequesthandler.md): An object that processes image-analysis requests for each frame in a sequence.

# VNStatefulRequest (Objective-C)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

An abstract request type that builds evidence of a condition over time.

## Declaration

```objectivec
@interface VNStatefulRequest : VNImageBasedRequest
```

## Topics

### Initializing a Request

- [initWithFrameAnalysisSpacing:completionHandler:](vnstatefulrequest/init%28frameanalysisspacing_completionhandler_%29.md): Initializes a video-based request.

### Configuring the Request

- [minimumLatencyFrameCount](vnstatefulrequest/minimumlatencyframecount.md): The minimum number of frames a request processes before reporting an observation.
- [frameAnalysisSpacing](vnstatefulrequest/frameanalysisspacing.md): A time value that indicates the interval between analysis operations.

## Relationships

### Inherits From

- [VNImageBasedRequest](vnimagebasedrequest.md)

### Inherited By

- [VNDetectHumanBodyPose3DRequest](vndetecthumanbodypose3drequest.md)
- [VNDetectTrajectoriesRequest](vndetecttrajectoriesrequest.md)
- [VNGeneratePersonSegmentationRequest](vngeneratepersonsegmentationrequest.md)
- [VNTrackHomographicImageRegistrationRequest](vntrackhomographicimageregistrationrequest.md)
- [VNTrackOpticalFlowRequest](vntrackopticalflowrequest.md)
- [VNTrackTranslationalImageRegistrationRequest](vntracktranslationalimageregistrationrequest.md)

## See Also

### Image sequence analysis

- [Applying Matte Effects to People in Images and Video](applying-matte-effects-to-people-in-images-and-video.md): Generate image masks for people automatically by using semantic person-segmentation.
- [Segmenting and colorizing individuals from a surrounding scene](segmenting-and-colorizing-individuals-from-a-surrounding-scene.md): Use the Vision framework to isolate and apply colors to people in an image.
- [VNGeneratePersonSegmentationRequest](vngeneratepersonsegmentationrequest.md): An object that produces a matte image for a person it finds in the input image.
- [VNGeneratePersonInstanceMaskRequest](vngeneratepersoninstancemaskrequest.md): An object that produces a mask of individual people it finds in the input image.
- [VNDetectDocumentSegmentationRequest](vndetectdocumentsegmentationrequest.md): An object that detects rectangular regions that contain text in the input image.
- [VNSequenceRequestHandler](vnsequencerequesthandler.md): An object that processes image-analysis requests for each frame in a sequence.
