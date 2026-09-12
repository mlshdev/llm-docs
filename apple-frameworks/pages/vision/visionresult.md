> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/visionresult](https://developer.apple.com/documentation/vision/visionresult)

# VisionResult

**Framework:** Vision  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

The result the framework produces by performing a request.

## Declaration

```swift
enum VisionResult
```

<a id="overview"></a>

## Overview

Each result contains the original [VisionRequest](visionrequest.md), along with any observations produced.

## Topics

### Getting the still-image result

- [VisionResult.classifyImage(\_:\_:)](visionresult/classifyimage%28____%29.md): A result from performing a classify image request.

### Getting the image sequence result

- [VisionResult.generatePersonInstanceMask(\_:\_:)](visionresult/generatepersoninstancemask%28____%29.md): A result from performing a generate person instance mask request.
- [VisionResult.generatePersonSegmentation(\_:\_:)](visionresult/generatepersonsegmentation%28____%29.md): A result from performing a generate person segmentation request.
- [VisionResult.detectDocumentSegmentation(\_:\_:)](visionresult/detectdocumentsegmentation%28____%29.md): A result from performing a detect document segmentation request.
- [VisionResult.generateIterativeSegmentation(\_:\_:)](visionresult/generateiterativesegmentation%28____%29.md)
- [VisionResult.recognizeDocuments(\_:\_:)](visionresult/recognizedocuments%28____%29.md)

### Getting the iterative and selected object result

- [VisionResult.generateIterativeSegmentation(\_:\_:)](visionresult/generateiterativesegmentation%28____%29.md)

### Getting the image aesthetics and lens smudge result

- [VisionResult.calculateImageAestheticsScores(\_:\_:)](visionresult/calculateimageaestheticsscores%28____%29.md): A result from performing a calculate image aesthetics scores request.
- [VisionResult.detectLensSmudge(\_:\_:)](visionresult/detectlenssmudge%28____%29.md)

### Getting the saliency result

- [VisionResult.generateObjectnessBasedSaliencyImage(\_:\_:)](visionresult/generateobjectnessbasedsaliencyimage%28____%29.md): A result from performing a generate objectness based saliency image request.
- [VisionResult.generateAttentionBasedSaliencyImage(\_:\_:)](visionresult/generateattentionbasedsaliencyimage%28____%29.md): A result from performing a generate attention based saliency image request.

### Getting the object-tracking result

- [VisionResult.trackRectangle(\_:\_:)](visionresult/trackrectangle%28____%29.md): A result from performing a track rectangle request.
- [VisionResult.trackObject(\_:\_:)](visionresult/trackobject%28____%29.md): A result from performing a track object request.

### Getting the face and body detection result

- [VisionResult.detectFaceCaptureQuality(\_:\_:)](visionresult/detectfacecapturequality%28____%29.md): A result from performing a detect face capture quality request.
- [VisionResult.detectFaceLandmarks(\_:\_:)](visionresult/detectfacelandmarks%28____%29.md): A result from performing a detect face landmarks request.
- [VisionResult.detectFaceRectangles(\_:\_:)](visionresult/detectfacerectangles%28____%29.md): A result from performing a detect face rectangles request.
- [VisionResult.detectHumanRectangles(\_:\_:)](visionresult/detecthumanrectangles%28____%29.md): A result from performing a detect human rectangles request.

### Getting the body and hand pose detection result

- [VisionResult.detectHumanBodyPose(\_:\_:)](visionresult/detecthumanbodypose%28____%29.md): A result from performing a detect human body pose request.
- [VisionResult.detectHumanHandPose(\_:\_:)](visionresult/detecthumanhandpose%28____%29.md): A result from performing a detect human hand pose request.
- [VisionResult.detectHumanBodyPose3D(\_:\_:)](visionresult/detecthumanbodypose3d%28____%29.md): A result from performing a 3D detect human body pose request.

### Getting the animal detection result

- [VisionResult.recognizeAnimals(\_:\_:)](visionresult/recognizeanimals%28____%29.md): A result from performing a recognize animals request.
- [VisionResult.detectAnimalBodyPose(\_:\_:)](visionresult/detectanimalbodypose%28____%29.md): A result from performing a detect animal body pose request.

### Getting the text result

- [VisionResult.detectTextRectangles(\_:\_:)](visionresult/detecttextrectangles%28____%29.md): A result from performing a detect text rectangles request.
- [VisionResult.recognizeText(\_:\_:)](visionresult/recognizetext%28____%29.md): A result from performing a recognize text request.

### Getting the image alignment, feature print, and background removal result

- [VisionResult.trackTranslationalImageRegistration(\_:\_:)](visionresult/tracktranslationalimageregistration%28____%29.md): A result from performing a track translational image request.
- [VisionResult.trackHomographicImageRegistration(\_:\_:)](visionresult/trackhomographicimageregistration%28____%29.md): A result from performing a track homographic image request.
- [VisionResult.generateForegroundInstanceMask(\_:\_:)](visionresult/generateforegroundinstancemask%28____%29.md): A result from performing a generate foreground instance mask request.
- [VisionResult.generateImageFeaturePrint(\_:\_:)](visionresult/generateimagefeatureprint%28____%29.md): A result from performing a generate image feature print request.

### Getting the trajectory, contour, and horizon detection result

- [VisionResult.detectTrajectories(\_:\_:)](visionresult/detecttrajectories%28____%29.md): A result from performing a detect trajectories request.
- [VisionResult.detectContours(\_:\_:)](visionresult/detectcontours%28____%29.md): A result from performing a detect contours request.
- [VisionResult.detectHorizon(\_:\_:)](visionresult/detecthorizon%28____%29.md): A result from performing a detect horizon request.

### Getting the optical flow, rectangle and barcode detection result

- [VisionResult.trackOpticalFlow(\_:\_:)](visionresult/trackopticalflow%28____%29.md): A result from performing a track optical flow request.
- [VisionResult.detectRectangles(\_:\_:)](visionresult/detectrectangles%28____%29.md): A result from performing a detect rectangles request.
- [VisionResult.detectBarcodes(\_:\_:)](visionresult/detectbarcodes%28____%29.md): A result from performing a detect barcodes request.

### Getting the machine learning image-analysis result

- [VisionResult.coreML(\_:\_:)](visionresult/coreml%28____%29.md): A result from performing a Core ML request.

### Getting the error result

- [VisionResult.error(\_:\_:)](visionresult/error%28____%29.md): A result from encountering a framework error.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Performing the request

- [Result](visionrequest/result.md): An associated type that represents the result.
