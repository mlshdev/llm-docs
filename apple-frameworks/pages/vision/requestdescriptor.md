> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/requestdescriptor](https://developer.apple.com/documentation/vision/requestdescriptor)

# RequestDescriptor

**Framework:** Vision  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

A type that describes the request and revision combination.

## Declaration

```swift
enum RequestDescriptor
```

## Topics

### Getting the still-image descriptor

- [RequestDescriptor.classifyImageRequest(\_:)](requestdescriptor/classifyimagerequest%28__%29.md): A descriptor that describes a classify image request.
- [RequestDescriptor.detectLensSmudgeRequest(\_:)](requestdescriptor/detectlenssmudgerequest%28__%29.md): A descriptor that describes a detect lens smudge request.

### Getting the image sequence descriptor

- [RequestDescriptor.detectDocumentSegmentationRequest(\_:)](requestdescriptor/detectdocumentsegmentationrequest%28__%29.md): A descriptor that describes a detect document segmentation request.
- [RequestDescriptor.recognizeDocumentsRequest(\_:)](requestdescriptor/recognizedocumentsrequest%28__%29.md)
- [RequestDescriptor.generatePersonInstanceMaskRequest(\_:)](requestdescriptor/generatepersoninstancemaskrequest%28__%29.md): A descriptor that describes a generate person instance mask request.
- [RequestDescriptor.generatePersonSegmentationRequest(\_:)](requestdescriptor/generatepersonsegmentationrequest%28__%29.md): A descriptor that describes a generate person segmentation request.

### Getting the iterative and selected object descriptor

- [RequestDescriptor.generateIterativeSegmentationRequest(\_:)](requestdescriptor/generateiterativesegmentationrequest%28__%29.md)

### Getting the image aesthetics descriptor

- [RequestDescriptor.calculateImageAestheticsScoresRequest(\_:)](requestdescriptor/calculateimageaestheticsscoresrequest%28__%29.md): A descriptor that describes a calculate image aesthetics scores request.

### Getting the saliency descriptor

- [RequestDescriptor.generateAttentionBasedSaliencyImageRequest(\_:)](requestdescriptor/generateattentionbasedsaliencyimagerequest%28__%29.md): A descriptor that describes a generate attention based saliency image request.
- [RequestDescriptor.generateObjectnessBasedSaliencyImageRequest(\_:)](requestdescriptor/generateobjectnessbasedsaliencyimagerequest%28__%29.md): A descriptor that describes a generate objectness based saliency image request.

### Getting the object-tracking descriptor

- [RequestDescriptor.trackObjectRequest(\_:)](requestdescriptor/trackobjectrequest%28__%29.md): A descriptor that describes a track object request.
- [RequestDescriptor.trackRectangleRequest(\_:)](requestdescriptor/trackrectanglerequest%28__%29.md): A descriptor that describes a track rectangles request.

### Getting the face and body detection descriptor

- [RequestDescriptor.detectFaceCaptureQualityRequest(\_:)](requestdescriptor/detectfacecapturequalityrequest%28__%29.md): A descriptor that describes a detect face capture quality request.
- [RequestDescriptor.detectFaceLandmarksRequest(\_:)](requestdescriptor/detectfacelandmarksrequest%28__%29.md): A descriptor that describes a detect face landmarks request.
- [RequestDescriptor.detectFaceRectanglesRequest(\_:)](requestdescriptor/detectfacerectanglesrequest%28__%29.md): A descriptor that describes a detect face rectangles request.
- [RequestDescriptor.detectHumanRectanglesRequest(\_:)](requestdescriptor/detecthumanrectanglesrequest%28__%29.md): A descriptor that describes a detect human rectangles request.

### Getting the body and hand pose detection descriptor

- [RequestDescriptor.detectHumanBodyPoseRequest(\_:)](requestdescriptor/detecthumanbodyposerequest%28__%29.md): A descriptor that describes a detect human body pose request.
- [RequestDescriptor.detectHumanHandPoseRequest(\_:)](requestdescriptor/detecthumanhandposerequest%28__%29.md): A descriptor that describes a detect human hand pose request.
- [RequestDescriptor.detectHumanBodyPose3DRequest(\_:)](requestdescriptor/detecthumanbodypose3drequest%28__%29.md): A descriptor that describes a 3D detect human body pose request.

### Getting the animal detection descriptor

- [RequestDescriptor.detectAnimalBodyPoseRequest(\_:)](requestdescriptor/detectanimalbodyposerequest%28__%29.md): A descriptor that describes a detect animal body pose request.
- [RequestDescriptor.recognizeAnimalsRequest(\_:)](requestdescriptor/recognizeanimalsrequest%28__%29.md): A descriptor that describes a recognize animals request.

### Getting the text descriptor

- [RequestDescriptor.detectTextRectanglesRequest(\_:)](requestdescriptor/detecttextrectanglesrequest%28__%29.md): A descriptor that describes a detect text rectangles request.
- [RequestDescriptor.recognizeTextRequest(\_:)](requestdescriptor/recognizetextrequest%28__%29.md): A descriptor that describes a recognize text request.

### Getting the image alignment, feature print, and background removal descriptor

- [RequestDescriptor.trackTranslationalImageRegistrationRequest(\_:)](requestdescriptor/tracktranslationalimageregistrationrequest%28__%29.md): A descriptor that describes a track translational image request.
- [RequestDescriptor.trackHomographicImageRegistrationRequest(\_:)](requestdescriptor/trackhomographicimageregistrationrequest%28__%29.md): A descriptor that describes a track homographic image request.
- [RequestDescriptor.generateForegroundInstanceMaskRequest(\_:)](requestdescriptor/generateforegroundinstancemaskrequest%28__%29.md): A descriptor that describes a generate foreground instance mask request.
- [RequestDescriptor.generateImageFeaturePrintRequest(\_:)](requestdescriptor/generateimagefeatureprintrequest%28__%29.md): A descriptor that describes a generate image feature print request.

### Getting the trajectory, contour, and horizon detection descriptor

- [RequestDescriptor.detectTrajectoriesRequest(\_:)](requestdescriptor/detecttrajectoriesrequest%28__%29.md): A descriptor that describes a detect trajectories request.
- [RequestDescriptor.detectContoursRequest(\_:)](requestdescriptor/detectcontoursrequest%28__%29.md): A descriptor that describes a detect contours request.
- [RequestDescriptor.detectHorizonRequest(\_:)](requestdescriptor/detecthorizonrequest%28__%29.md): A descriptor that describes a detect horizon request.

### Getting the optical flow, rectangle and barcode detection descriptor

- [RequestDescriptor.trackOpticalFlowRequest(\_:)](requestdescriptor/trackopticalflowrequest%28__%29.md): A descriptor that describes a track optical flow request.
- [RequestDescriptor.detectRectanglesRequest(\_:)](requestdescriptor/detectrectanglesrequest%28__%29.md): A descriptor that describes a detect rectangles request.
- [RequestDescriptor.detectBarcodesRequest(\_:)](requestdescriptor/detectbarcodesrequest%28__%29.md): A descriptor that describes a detect barcodes request.

### Getting the machine learning image-analysis descriptor

- [RequestDescriptor.coreMLRequest(\_:)](requestdescriptor/coremlrequest%28__%29.md): A descriptor that describes a Core ML request.

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Inspecting an observation

- [uuid](visionobservation/uuid.md): A unique alphanumeric value that the framework assigns the observation.
- [confidence](visionobservation/confidence.md): The level of confidence in the observation’s accuracy.
- [description](visionobservation/description.md): A textual representation of this instance.
- [originatingRequestDescriptor](visionobservation/originatingrequestdescriptor.md): The descriptor of the request that produces the observation.
- [timeRange](visionobservation/timerange.md): The time range of the reported observation.
