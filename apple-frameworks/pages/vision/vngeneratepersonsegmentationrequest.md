> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vngeneratepersonsegmentationrequest](https://developer.apple.com/documentation/vision/vngeneratepersonsegmentationrequest)

# VNGeneratePersonSegmentationRequest (Swift)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

An object that produces a matte image for a person it finds in the input image.

## Declaration

```swift
class VNGeneratePersonSegmentationRequest
```

<a id="overview"></a>

## Overview

Perform this request to detect and generate an image mask for a person in an image. The request returns the resulting image mask in an instance of [VNPixelBufferObservation](vnpixelbufferobservation.md).

## Topics

### Creating a Request

- [init()](vngeneratepersonsegmentationrequest/init%28%29.md): Creates a generate person segmentation request.
- [init(completionHandler:)](vngeneratepersonsegmentationrequest/init%28completionhandler_%29.md): Creates a generate person segmentation request with a completion handler.

### Configuring the Request

- [outputPixelFormat](vngeneratepersonsegmentationrequest/outputpixelformat.md): The pixel format of the output image.
- [qualityLevel](vngeneratepersonsegmentationrequest/qualitylevel-swift.property.md): A value that indicates how the request balances accuracy and performance.
- [VNGeneratePersonSegmentationRequest.QualityLevel](vngeneratepersonsegmentationrequest/qualitylevel-swift.enum.md): Constants that define the levels of quality for a person segmentation request.

### Getting the supported output pixel formats

- [supportedOutputPixelFormats()](vngeneratepersonsegmentationrequest/supportedoutputpixelformats%28%29.md): Returns a list of output pixel formats that the request supports.

### Accessing the Results

- [results](vngeneratepersonsegmentationrequest/results.md): The results of the segmentation request.
- [VNPixelBufferObservation](vnpixelbufferobservation.md): An object that represents an image that an image-analysis request produces.

### Identifying Request Revisions

- [VNGeneratePersonSegmentationRequestRevision1](vngeneratepersonsegmentationrequestrevision1.md): A constant for specifying revision 1 of the person segmentation generation request.

## Relationships

### Inherits From

- [VNStatefulRequest](vnstatefulrequest.md)

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
- [VNGeneratePersonInstanceMaskRequest](vngeneratepersoninstancemaskrequest.md): An object that produces a mask of individual people it finds in the input image.
- [VNDetectDocumentSegmentationRequest](vndetectdocumentsegmentationrequest.md): An object that detects rectangular regions that contain text in the input image.
- [VNSequenceRequestHandler](vnsequencerequesthandler.md): An object that processes image-analysis requests for each frame in a sequence.

# VNGeneratePersonSegmentationRequest (Objective-C)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

An object that produces a matte image for a person it finds in the input image.

## Declaration

```objectivec
@interface VNGeneratePersonSegmentationRequest : VNStatefulRequest
```

<a id="overview"></a>

## Overview

Perform this request to detect and generate an image mask for a person in an image. The request returns the resulting image mask in an instance of [VNPixelBufferObservation](vnpixelbufferobservation.md).

## Topics

### Creating a Request

- [init](vngeneratepersonsegmentationrequest/init%28%29.md): Creates a generate person segmentation request.
- [initWithCompletionHandler:](vngeneratepersonsegmentationrequest/init%28completionhandler_%29.md): Creates a generate person segmentation request with a completion handler.
- [new](vngeneratepersonsegmentationrequest/new.md): Returns a new generate person segmentation request.

### Configuring the Request

- [outputPixelFormat](vngeneratepersonsegmentationrequest/outputpixelformat.md): The pixel format of the output image.
- [qualityLevel](vngeneratepersonsegmentationrequest/qualitylevel-swift.property.md): A value that indicates how the request balances accuracy and performance.
- [VNGeneratePersonSegmentationRequestQualityLevel](vngeneratepersonsegmentationrequest/qualitylevel-swift.enum.md): Constants that define the levels of quality for a person segmentation request.

### Getting the supported output pixel formats

- [supportedOutputPixelFormatsAndReturnError:](vngeneratepersonsegmentationrequest/supportedoutputpixelformats%28%29.md): Returns a list of output pixel formats that the request supports.

### Accessing the Results

- [results](vngeneratepersonsegmentationrequest/results.md): The results of the segmentation request.
- [VNPixelBufferObservation](vnpixelbufferobservation.md): An object that represents an image that an image-analysis request produces.

### Identifying Request Revisions

- [VNGeneratePersonSegmentationRequestRevision1](vngeneratepersonsegmentationrequestrevision1.md): A constant for specifying revision 1 of the person segmentation generation request.

## Relationships

### Inherits From

- [VNStatefulRequest](vnstatefulrequest.md)

## See Also

### Image sequence analysis

- [Applying Matte Effects to People in Images and Video](applying-matte-effects-to-people-in-images-and-video.md): Generate image masks for people automatically by using semantic person-segmentation.
- [Segmenting and colorizing individuals from a surrounding scene](segmenting-and-colorizing-individuals-from-a-surrounding-scene.md): Use the Vision framework to isolate and apply colors to people in an image.
- [VNStatefulRequest](vnstatefulrequest.md): An abstract request type that builds evidence of a condition over time.
- [VNGeneratePersonInstanceMaskRequest](vngeneratepersoninstancemaskrequest.md): An object that produces a mask of individual people it finds in the input image.
- [VNDetectDocumentSegmentationRequest](vndetectdocumentsegmentationrequest.md): An object that detects rectangular regions that contain text in the input image.
- [VNSequenceRequestHandler](vnsequencerequesthandler.md): An object that processes image-analysis requests for each frame in a sequence.
