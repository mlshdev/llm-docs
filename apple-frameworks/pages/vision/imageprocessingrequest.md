> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/imageprocessingrequest](https://developer.apple.com/documentation/vision/imageprocessingrequest)

# ImageProcessingRequest

**Framework:** Vision  
**Kind:** Protocol  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

A type for image-analysis requests that focus on a specific part of an image.

## Declaration

```swift
protocol ImageProcessingRequest : VisionRequest
```

## Topics

### Setting the region

- [regionOfInterest](imageprocessingrequest/regionofinterest.md): The region of the image where the framework performs the request.

### Performing a request

- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-80bya.md): Performs the request on an image URL and produces observations.
- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-3f3f1.md): Performs the request on image data and produces observations.
- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-qxxx.md): Performs the request on a Core Graphics image and produces observations.
- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-xspx.md): Performs the request on a pixel buffer and produces observations.
- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-3hddl.md): Performs the request on a Core Media buffer and produces observations.
- [perform(on:orientation:)](imageprocessingrequest/perform%28on_orientation_%29-85ex1.md): Performs the request on a Core Image image and produces observations.

## Relationships

### Inherits From

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [VisionRequest](visionrequest.md)

### Conforming Types

- [CalculateImageAestheticsScoresRequest](calculateimageaestheticsscoresrequest.md)
- [ClassifyImageRequest](classifyimagerequest.md)
- [CoreMLRequest](coremlrequest.md)
- [DetectAnimalBodyPoseRequest](detectanimalbodyposerequest.md)
- [DetectBarcodesRequest](detectbarcodesrequest.md)
- [DetectContoursRequest](detectcontoursrequest.md)
- [DetectDocumentSegmentationRequest](detectdocumentsegmentationrequest.md)
- [DetectFaceCaptureQualityRequest](detectfacecapturequalityrequest.md)
- [DetectFaceLandmarksRequest](detectfacelandmarksrequest.md)
- [DetectFaceRectanglesRequest](detectfacerectanglesrequest.md)
- [DetectHorizonRequest](detecthorizonrequest.md)
- [DetectHumanBodyPose3DRequest](detecthumanbodypose3drequest.md)
- [DetectHumanBodyPoseRequest](detecthumanbodyposerequest.md)
- [DetectHumanHandPoseRequest](detecthumanhandposerequest.md)
- [DetectHumanRectanglesRequest](detecthumanrectanglesrequest.md)
- [DetectLensSmudgeRequest](detectlenssmudgerequest.md)
- [DetectRectanglesRequest](detectrectanglesrequest.md)
- [DetectTextRectanglesRequest](detecttextrectanglesrequest.md)
- [DetectTrajectoriesRequest](detecttrajectoriesrequest.md)
- [GenerateAttentionBasedSaliencyImageRequest](generateattentionbasedsaliencyimagerequest.md)
- [GenerateForegroundInstanceMaskRequest](generateforegroundinstancemaskrequest.md)
- [GenerateImageFeaturePrintRequest](generateimagefeatureprintrequest.md)
- [GenerateIterativeSegmentationRequest](generateiterativesegmentationrequest.md)
- [GenerateObjectnessBasedSaliencyImageRequest](generateobjectnessbasedsaliencyimagerequest.md)
- [GeneratePersonInstanceMaskRequest](generatepersoninstancemaskrequest.md)
- [GeneratePersonSegmentationRequest](generatepersonsegmentationrequest.md)
- [RecognizeAnimalsRequest](recognizeanimalsrequest.md)
- [RecognizeDocumentsRequest](recognizedocumentsrequest.md)
- [RecognizeTextRequest](recognizetextrequest.md)
- [TrackHomographicImageRegistrationRequest](trackhomographicimageregistrationrequest.md)
- [TrackObjectRequest](trackobjectrequest.md)
- [TrackOpticalFlowRequest](trackopticalflowrequest.md)
- [TrackRectangleRequest](trackrectanglerequest.md)
- [TrackTranslationalImageRegistrationRequest](tracktranslationalimageregistrationrequest.md)

## See Also

### Protocols

- [PoseProviding](poseproviding.md): An observation that provides a collection of joints that make up a pose.
- [StatefulRequest](statefulrequest.md): The protocol for a type that builds evidence of a condition over time.
- [TargetedRequest](targetedrequest.md): A type for analyzing two images together.
- [VisionObservation](visionobservation.md): A type for objects produced by image-analysis requests.
- [VisionRequest](visionrequest.md): A type for image-analysis requests.
- [DownloadableAssetsRequest](downloadableassetsrequest.md): A request whose execution depends on assets that may need to be downloaded.
- [DownloadableAssetsRequestStatus](downloadableassetsrequeststatus.md): The status of the assets required by a [DownloadableAssetsRequest](downloadableassetsrequest.md).
