> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vngeneratepersoninstancemaskrequest](https://developer.apple.com/documentation/vision/vngeneratepersoninstancemaskrequest)

# VNGeneratePersonInstanceMaskRequest (Swift)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

An object that produces a mask of individual people it finds in the input image.

## Declaration

```swift
class VNGeneratePersonInstanceMaskRequest
```

## Topics

### Accessing the Results

- [results](vngeneratepersoninstancemaskrequest/results.md): The results of the instance mask request.

### Identifying Request Revisions

- [VNGeneratePersonInstanceMaskRequestRevision1](vngeneratepersoninstancemaskrequestrevision1.md): A constant for specifying revision 1 of the person instance mask request.

## Relationships

### Inherits From

- [VNImageBasedRequest](vnimagebasedrequest.md)

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
- [VNStatefulRequest](vnstatefulrequest.md): An abstract request type that builds evidence of a condition over time.
- [VNGeneratePersonSegmentationRequest](vngeneratepersonsegmentationrequest.md): An object that produces a matte image for a person it finds in the input image.
- [VNDetectDocumentSegmentationRequest](vndetectdocumentsegmentationrequest.md): An object that detects rectangular regions that contain text in the input image.
- [VNSequenceRequestHandler](vnsequencerequesthandler.md): An object that processes image-analysis requests for each frame in a sequence.

# VNGeneratePersonInstanceMaskRequest (Objective-C)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

An object that produces a mask of individual people it finds in the input image.

## Declaration

```objectivec
@interface VNGeneratePersonInstanceMaskRequest : VNImageBasedRequest
```

## Topics

### Accessing the Results

- [results](vngeneratepersoninstancemaskrequest/results.md): The results of the instance mask request.

### Identifying Request Revisions

- [VNGeneratePersonInstanceMaskRequestRevision1](vngeneratepersoninstancemaskrequestrevision1.md): A constant for specifying revision 1 of the person instance mask request.

## Relationships

### Inherits From

- [VNImageBasedRequest](vnimagebasedrequest.md)

## See Also

### Image sequence analysis

- [Applying Matte Effects to People in Images and Video](applying-matte-effects-to-people-in-images-and-video.md): Generate image masks for people automatically by using semantic person-segmentation.
- [Segmenting and colorizing individuals from a surrounding scene](segmenting-and-colorizing-individuals-from-a-surrounding-scene.md): Use the Vision framework to isolate and apply colors to people in an image.
- [VNStatefulRequest](vnstatefulrequest.md): An abstract request type that builds evidence of a condition over time.
- [VNGeneratePersonSegmentationRequest](vngeneratepersonsegmentationrequest.md): An object that produces a matte image for a person it finds in the input image.
- [VNDetectDocumentSegmentationRequest](vndetectdocumentsegmentationrequest.md): An object that detects rectangular regions that contain text in the input image.
- [VNSequenceRequestHandler](vnsequencerequesthandler.md): An object that processes image-analysis requests for each frame in a sequence.
