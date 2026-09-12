> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/visionobservation](https://developer.apple.com/documentation/vision/visionobservation)

# VisionObservation

**Framework:** Vision  
**Kind:** Protocol  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

A type for objects produced by image-analysis requests.

## Declaration

```swift
protocol VisionObservation : CustomStringConvertible, Decodable, Encodable, Hashable, Sendable
```

## Topics

### Inspecting an observation

- [uuid](visionobservation/uuid.md): A unique alphanumeric value that the framework assigns the observation.
- [confidence](visionobservation/confidence.md): The level of confidence in the observation’s accuracy.
- [description](visionobservation/description.md): A textual representation of this instance.
- [originatingRequestDescriptor](visionobservation/originatingrequestdescriptor.md): The descriptor of the request that produces the observation.
- [RequestDescriptor](requestdescriptor.md): A type that describes the request and revision combination.
- [timeRange](visionobservation/timerange.md): The time range of the reported observation.

### Hashing the observation

- [hash(into:)](visionobservation/hash%28into_%29.md): Hashes the essential components of this value by feeding them into the given hasher.

### Default Implementations

- [Hashable Implementations](visionobservation/hashable-implementations.md)

## Relationships

### Inherits From

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

### Conforming Types

- [AnimalBodyPoseObservation](animalbodyposeobservation.md)
- [BarcodeObservation](barcodeobservation.md)
- [ClassificationObservation](classificationobservation.md)
- [ContoursObservation](contoursobservation.md)
- [CoreMLFeatureValueObservation](coremlfeaturevalueobservation.md)
- [DetectedDocumentObservation](detecteddocumentobservation.md)
- [DetectedObjectObservation](detectedobjectobservation.md)
- [DocumentObservation](documentobservation.md)
- [FaceObservation](faceobservation.md)
- [FeaturePrintObservation](featureprintobservation.md)
- [HorizonObservation](horizonobservation.md)
- [HumanBodyPose3DObservation](humanbodypose3dobservation.md)
- [HumanBodyPoseObservation](humanbodyposeobservation.md)
- [HumanHandPoseObservation](humanhandposeobservation.md)
- [HumanObservation](humanobservation.md)
- [ImageAestheticsScoresObservation](imageaestheticsscoresobservation.md)
- [ImageHomographicAlignmentObservation](imagehomographicalignmentobservation.md)
- [ImageTranslationAlignmentObservation](imagetranslationalignmentobservation.md)
- [InstanceMaskObservation](instancemaskobservation.md)
- [OpticalFlowObservation](opticalflowobservation.md)
- [PixelBufferObservation](pixelbufferobservation.md)
- [RecognizedObjectObservation](recognizedobjectobservation.md)
- [RecognizedTextObservation](recognizedtextobservation.md)
- [RectangleObservation](rectangleobservation.md)
- [SaliencyImageObservation](saliencyimageobservation.md)
- [SmudgeObservation](smudgeobservation.md)
- [TextObservation](textobservation.md)
- [TrajectoryObservation](trajectoryobservation.md)

## See Also

### Protocols

- [ImageProcessingRequest](imageprocessingrequest.md): A type for image-analysis requests that focus on a specific part of an image.
- [PoseProviding](poseproviding.md): An observation that provides a collection of joints that make up a pose.
- [StatefulRequest](statefulrequest.md): The protocol for a type that builds evidence of a condition over time.
- [TargetedRequest](targetedrequest.md): A type for analyzing two images together.
- [VisionRequest](visionrequest.md): A type for image-analysis requests.
- [DownloadableAssetsRequest](downloadableassetsrequest.md): A request whose execution depends on assets that may need to be downloaded.
- [DownloadableAssetsRequestStatus](downloadableassetsrequeststatus.md): The status of the assets required by a [DownloadableAssetsRequest](downloadableassetsrequest.md).
