> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnsequencerequesthandler](https://developer.apple.com/documentation/vision/vnsequencerequesthandler)

# VNSequenceRequestHandler (Swift)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

An object that processes image-analysis requests for each frame in a sequence.

## Declaration

```swift
class VNSequenceRequestHandler
```

<a id="overview"></a>

## Overview

Instantiate this handler to perform Vision requests on a series of images. Unlike the [VNImageRequestHandler](vnimagerequesthandler.md), you don’t specify the image on creation. Instead, you supply each image frame one by one as you continue to call one of the `perform` methods.

## Topics

### Initializing a Sequence Request

- [init()](vnsequencerequesthandler/init%28%29.md): Initializes a sequence request handler.

### Performing a Sequence Request

- [perform(\_:on:)](vnsequencerequesthandler/perform%28__on_%29-3zt7l.md): Schedules Vision requests to be performed on a Core Graphics image.
- [perform(\_:on:orientation:)](vnsequencerequesthandler/perform%28__on_orientation_%29-3gcmv.md): Schedules one or more Vision requests to be performed on a Core Graphics image with known orientation.
- [perform(\_:on:)](vnsequencerequesthandler/perform%28__on_%29-9jtgj.md): Schedules one or more Vision requests to be performed on Core Image image data.
- [perform(\_:on:orientation:)](vnsequencerequesthandler/perform%28__on_orientation_%29-1bkm1.md): Schedules one or more Vision requests to be performed on Core Image image data with known orientation.
- [perform(\_:on:)](vnsequencerequesthandler/perform%28__on_%29-3d7nt.md): Schedules one or more Vision requests to be performed on a Core Video pixel buffer.
- [perform(\_:on:orientation:)](vnsequencerequesthandler/perform%28__on_orientation_%29-2wvt8.md): Schedules one or more Vision requests to be performed on a Core Video pixel buffer with known orientation.
- [perform(\_:on:)](vnsequencerequesthandler/perform%28__on_%29-45e73.md): Performs one or more requests on an image contained within a sample buffer.
- [perform(\_:on:orientation:)](vnsequencerequesthandler/perform%28__on_orientation_%29-6b7rk.md): Performs one or more requests on an image of a specified orientation contained within a sample buffer.
- [perform(\_:onImageData:)](vnsequencerequesthandler/perform%28__onimagedata_%29.md): Schedules one or more Vision requests to be performed on raw image data.
- [perform(\_:onImageData:orientation:)](vnsequencerequesthandler/perform%28__onimagedata_orientation_%29.md): Schedules one or more Vision requests to be performed on raw data containing an image with known orientation.
- [perform(\_:onImageURL:)](vnsequencerequesthandler/perform%28__onimageurl_%29.md): Schedules one or more Vision requests to be performed on an image.
- [perform(\_:onImageURL:orientation:)](vnsequencerequesthandler/perform%28__onimageurl_orientation_%29.md): Schedules one or more Vision requests to be performed on an image with known orientation, at a specific URL.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Image sequence analysis

- [Applying Matte Effects to People in Images and Video](applying-matte-effects-to-people-in-images-and-video.md): Generate image masks for people automatically by using semantic person-segmentation.
- [Detecting human actions in a live video feed](../createml/detecting-human-actions-in-a-live-video-feed.md): Identify body movements by sending a person’s pose data from a series of video frames to an action-classification model.
- [Segmenting and colorizing individuals from a surrounding scene](segmenting-and-colorizing-individuals-from-a-surrounding-scene.md): Use the Vision framework to isolate and apply colors to people in an image.
- [VNStatefulRequest](vnstatefulrequest.md): An abstract request type that builds evidence of a condition over time.
- [VNGeneratePersonSegmentationRequest](vngeneratepersonsegmentationrequest.md): An object that produces a matte image for a person it finds in the input image.
- [VNGeneratePersonInstanceMaskRequest](vngeneratepersoninstancemaskrequest.md): An object that produces a mask of individual people it finds in the input image.
- [VNDetectDocumentSegmentationRequest](vndetectdocumentsegmentationrequest.md): An object that detects rectangular regions that contain text in the input image.

# VNSequenceRequestHandler (Objective-C)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

An object that processes image-analysis requests for each frame in a sequence.

## Declaration

```objectivec
@interface VNSequenceRequestHandler : NSObject
```

<a id="overview"></a>

## Overview

Instantiate this handler to perform Vision requests on a series of images. Unlike the [VNImageRequestHandler](vnimagerequesthandler.md), you don’t specify the image on creation. Instead, you supply each image frame one by one as you continue to call one of the `perform` methods.

## Topics

### Initializing a Sequence Request

- [init](vnsequencerequesthandler/init%28%29.md): Initializes a sequence request handler.

### Performing a Sequence Request

- [performRequests:onCGImage:error:](vnsequencerequesthandler/perform%28__on_%29-3zt7l.md): Schedules Vision requests to be performed on a Core Graphics image.
- [performRequests:onCGImage:orientation:error:](vnsequencerequesthandler/perform%28__on_orientation_%29-3gcmv.md): Schedules one or more Vision requests to be performed on a Core Graphics image with known orientation.
- [performRequests:onCIImage:error:](vnsequencerequesthandler/perform%28__on_%29-9jtgj.md): Schedules one or more Vision requests to be performed on Core Image image data.
- [performRequests:onCIImage:orientation:error:](vnsequencerequesthandler/perform%28__on_orientation_%29-1bkm1.md): Schedules one or more Vision requests to be performed on Core Image image data with known orientation.
- [performRequests:onCVPixelBuffer:error:](vnsequencerequesthandler/perform%28__on_%29-3d7nt.md): Schedules one or more Vision requests to be performed on a Core Video pixel buffer.
- [performRequests:onCVPixelBuffer:orientation:error:](vnsequencerequesthandler/perform%28__on_orientation_%29-2wvt8.md): Schedules one or more Vision requests to be performed on a Core Video pixel buffer with known orientation.
- [performRequests:onCMSampleBuffer:error:](vnsequencerequesthandler/perform%28__on_%29-45e73.md): Performs one or more requests on an image contained within a sample buffer.
- [performRequests:onCMSampleBuffer:orientation:error:](vnsequencerequesthandler/perform%28__on_orientation_%29-6b7rk.md): Performs one or more requests on an image of a specified orientation contained within a sample buffer.
- [performRequests:onImageData:error:](vnsequencerequesthandler/perform%28__onimagedata_%29.md): Schedules one or more Vision requests to be performed on raw image data.
- [performRequests:onImageData:orientation:error:](vnsequencerequesthandler/perform%28__onimagedata_orientation_%29.md): Schedules one or more Vision requests to be performed on raw data containing an image with known orientation.
- [performRequests:onImageURL:error:](vnsequencerequesthandler/perform%28__onimageurl_%29.md): Schedules one or more Vision requests to be performed on an image.
- [performRequests:onImageURL:orientation:error:](vnsequencerequesthandler/perform%28__onimageurl_orientation_%29.md): Schedules one or more Vision requests to be performed on an image with known orientation, at a specific URL.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Image sequence analysis

- [Applying Matte Effects to People in Images and Video](applying-matte-effects-to-people-in-images-and-video.md): Generate image masks for people automatically by using semantic person-segmentation.
- [Segmenting and colorizing individuals from a surrounding scene](segmenting-and-colorizing-individuals-from-a-surrounding-scene.md): Use the Vision framework to isolate and apply colors to people in an image.
- [VNStatefulRequest](vnstatefulrequest.md): An abstract request type that builds evidence of a condition over time.
- [VNGeneratePersonSegmentationRequest](vngeneratepersonsegmentationrequest.md): An object that produces a matte image for a person it finds in the input image.
- [VNGeneratePersonInstanceMaskRequest](vngeneratepersoninstancemaskrequest.md): An object that produces a mask of individual people it finds in the input image.
- [VNDetectDocumentSegmentationRequest](vndetectdocumentsegmentationrequest.md): An object that detects rectangular regions that contain text in the input image.
