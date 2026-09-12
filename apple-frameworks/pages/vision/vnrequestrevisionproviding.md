> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnrequestrevisionproviding](https://developer.apple.com/documentation/vision/vnrequestrevisionproviding)

# VNRequestRevisionProviding (Swift)

**Framework:** Vision  
**Kind:** Protocol  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

A protocol for specifying the revision number of Vision algorithms.

## Declaration

```swift
protocol VNRequestRevisionProviding
```

<a id="overview"></a>

## Overview

Subclasses of [VNRequest](vnrequest.md) should adopt this protocol to specify which revision of an algorithm the Vision framework uses to generate requests.

## Topics

### Specifying Revision Number

- [requestRevision](vnrequestrevisionproviding/requestrevision.md): The revision of the [VNRequest](vnrequest.md) subclass used to generate the implementing object.

### Determining Revision Type

- [VNRequestRevisionUnspecified](vnrequestrevisionunspecified.md): A constant for specifying an unspecified request revision.
- [VNDetectRectanglesRequestRevision1](vndetectrectanglesrequestrevision1.md): A constant for specifying revision 1 of the rectangle detection request.
- [VNTrackRectangleRequestRevision1](vntrackrectanglerequestrevision1.md): A constant for specifying revision 1 of the rectangling tracking request.
- [VNTrackObjectRequestRevision1](vntrackobjectrequestrevision1.md): A constant for specifying revision 1 of the object tracking request.
- [VNDetectFaceRectanglesRequestRevision2](vndetectfacerectanglesrequestrevision2.md): A constant for specifying revision 2 of the face rectangles detection request.
- [VNDetectFaceRectanglesRequestRevision1](vndetectfacerectanglesrequestrevision1.md): Deprecated. A constant for specifying revision 1 of the face rectangles detection request.
- [VNDetectFaceLandmarksRequestRevision3](vndetectfacelandmarksrequestrevision3.md): A constant for specifying revision 3 of the face landmarks detection request.
- [VNDetectFaceLandmarksRequestRevision2](vndetectfacelandmarksrequestrevision2.md): A constant for specifying revision 2 of the face landmarks detection request.
- [VNDetectFaceLandmarksRequestRevision1](vndetectfacelandmarksrequestrevision1.md): Deprecated. A constant for specifying revision 1 of the face landmarks detection request.
- [VNRecognizeTextRequestRevision1](vnrecognizetextrequestrevision1.md): Deprecated. A constant for specifying revision 1 of the text recognition request.
- [VNDetectTextRectanglesRequestRevision1](vndetecttextrectanglesrequestrevision1.md): A constant for specifying revision 1 of the text rectangles detection request.
- [VNDetectBarcodesRequestRevision1](vndetectbarcodesrequestrevision1.md): Deprecated. A constant for specifying revision 1 of the barcode detection request.
- [VNDetectHorizonRequestRevision1](vndetecthorizonrequestrevision1.md): A constant for specifying revision 1 of the horizon detection request.
- [VNTranslationalImageRegistrationRequestRevision1](vntranslationalimageregistrationrequestrevision1.md): A constant for specifying revision 1 of the translational image registration request.
- [VNHomographicImageRegistrationRequestRevision1](vnhomographicimageregistrationrequestrevision1.md): A constant for specifying revision 1 of the homographic image registration request.
- [VNCoreMLRequestRevision1](vncoremlrequestrevision1.md): A constant for specifying revision 1 of a Core ML request.
- [VNGenerateAttentionBasedSaliencyImageRequestRevision1](vngenerateattentionbasedsaliencyimagerequestrevision1.md): A constant for specifying revision 1 of the image saliency request.
- [VNGenerateObjectnessBasedSaliencyImageRequestRevision1](vngenerateobjectnessbasedsaliencyimagerequestrevision1.md): A constant for specifying revision 1 of the image saliency request.
- [VNClassifyImageRequestRevision1](vnclassifyimagerequestrevision1.md): A constant for specifying the first revision of the image-classification request.
- [VNGenerateImageFeaturePrintRequestRevision1](vngenerateimagefeatureprintrequestrevision1.md): A constant for specifying the first revision of the feature-print request.
- [VNDetectFaceCaptureQualityRequestRevision1](vndetectfacecapturequalityrequestrevision1.md): A constant for specifying revision 1 of the face capture detection request.
- [VNDetectHumanRectanglesRequestRevision1](vndetecthumanrectanglesrequestrevision1.md): A constant for specifying revision 1 of the human rectangles detection request.

## Relationships

### Conforming Types

- [VNAnimalBodyPoseObservation](vnanimalbodyposeobservation.md)
- [VNBarcodeObservation](vnbarcodeobservation.md)
- [VNClassificationObservation](vnclassificationobservation.md)
- [VNContour](vncontour.md)
- [VNContoursObservation](vncontoursobservation.md)
- [VNCoreMLFeatureValueObservation](vncoremlfeaturevalueobservation.md)
- [VNDetectedObjectObservation](vndetectedobjectobservation.md)
- [VNFaceLandmarkRegion](vnfacelandmarkregion.md)
- [VNFaceLandmarkRegion2D](vnfacelandmarkregion2d.md)
- [VNFaceLandmarks](vnfacelandmarks.md)
- [VNFaceLandmarks2D](vnfacelandmarks2d.md)
- [VNFaceObservation](vnfaceobservation.md)
- [VNFeaturePrintObservation](vnfeatureprintobservation.md)
- [VNHorizonObservation](vnhorizonobservation.md)
- [VNHumanBodyPose3DObservation](vnhumanbodypose3dobservation.md)
- [VNHumanBodyPoseObservation](vnhumanbodyposeobservation.md)
- [VNHumanHandPoseObservation](vnhumanhandposeobservation.md)
- [VNHumanObservation](vnhumanobservation.md)
- [VNImageAestheticsScoresObservation](vnimageaestheticsscoresobservation.md)
- [VNImageAlignmentObservation](vnimagealignmentobservation.md)
- [VNImageHomographicAlignmentObservation](vnimagehomographicalignmentobservation.md)
- [VNImageTranslationAlignmentObservation](vnimagetranslationalignmentobservation.md)
- [VNInstanceMaskObservation](vninstancemaskobservation.md)
- [VNObservation](vnobservation.md)
- [VNPixelBufferObservation](vnpixelbufferobservation.md)
- [VNRecognizedObjectObservation](vnrecognizedobjectobservation.md)
- [VNRecognizedPoints3DObservation](vnrecognizedpoints3dobservation.md)
- [VNRecognizedPointsObservation](vnrecognizedpointsobservation.md)
- [VNRecognizedText](vnrecognizedtext.md)
- [VNRecognizedTextObservation](vnrecognizedtextobservation.md)
- [VNRectangleObservation](vnrectangleobservation.md)
- [VNSaliencyImageObservation](vnsaliencyimageobservation.md)
- [VNTextObservation](vntextobservation.md)
- [VNTrajectoryObservation](vntrajectoryobservation.md)

## See Also

### Determining the Revision

- [currentRevision](vnrequest/currentrevision.md): The current revison supported by the request.
- [defaultRevision](vnrequest/defaultrevision.md): The revision of the latest request for the particular SDK linked with the client application.
- [supportedRevisions](vnrequest/supportedrevisions.md): The collection of currently-supported algorithm versions for the class of request.

# VNRequestRevisionProviding (Objective-C)

**Framework:** Vision  
**Kind:** Protocol  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

A protocol for specifying the revision number of Vision algorithms.

## Declaration

```objectivec
@protocol VNRequestRevisionProviding
```

<a id="overview"></a>

## Overview

Subclasses of [VNRequest](vnrequest.md) should adopt this protocol to specify which revision of an algorithm the Vision framework uses to generate requests.

## Topics

### Specifying Revision Number

- [requestRevision](vnrequestrevisionproviding/requestrevision.md): The revision of the [VNRequest](vnrequest.md) subclass used to generate the implementing object.

### Determining Revision Type

- [VNRequestRevisionUnspecified](vnrequestrevisionunspecified.md): A constant for specifying an unspecified request revision.
- [VNDetectRectanglesRequestRevision1](vndetectrectanglesrequestrevision1.md): A constant for specifying revision 1 of the rectangle detection request.
- [VNTrackRectangleRequestRevision1](vntrackrectanglerequestrevision1.md): A constant for specifying revision 1 of the rectangling tracking request.
- [VNTrackObjectRequestRevision1](vntrackobjectrequestrevision1.md): A constant for specifying revision 1 of the object tracking request.
- [VNDetectFaceRectanglesRequestRevision2](vndetectfacerectanglesrequestrevision2.md): A constant for specifying revision 2 of the face rectangles detection request.
- [VNDetectFaceRectanglesRequestRevision1](vndetectfacerectanglesrequestrevision1.md): Deprecated. A constant for specifying revision 1 of the face rectangles detection request.
- [VNDetectFaceLandmarksRequestRevision3](vndetectfacelandmarksrequestrevision3.md): A constant for specifying revision 3 of the face landmarks detection request.
- [VNDetectFaceLandmarksRequestRevision2](vndetectfacelandmarksrequestrevision2.md): A constant for specifying revision 2 of the face landmarks detection request.
- [VNDetectFaceLandmarksRequestRevision1](vndetectfacelandmarksrequestrevision1.md): Deprecated. A constant for specifying revision 1 of the face landmarks detection request.
- [VNRecognizeTextRequestRevision1](vnrecognizetextrequestrevision1.md): Deprecated. A constant for specifying revision 1 of the text recognition request.
- [VNDetectTextRectanglesRequestRevision1](vndetecttextrectanglesrequestrevision1.md): A constant for specifying revision 1 of the text rectangles detection request.
- [VNDetectBarcodesRequestRevision1](vndetectbarcodesrequestrevision1.md): Deprecated. A constant for specifying revision 1 of the barcode detection request.
- [VNDetectHorizonRequestRevision1](vndetecthorizonrequestrevision1.md): A constant for specifying revision 1 of the horizon detection request.
- [VNTranslationalImageRegistrationRequestRevision1](vntranslationalimageregistrationrequestrevision1.md): A constant for specifying revision 1 of the translational image registration request.
- [VNHomographicImageRegistrationRequestRevision1](vnhomographicimageregistrationrequestrevision1.md): A constant for specifying revision 1 of the homographic image registration request.
- [VNCoreMLRequestRevision1](vncoremlrequestrevision1.md): A constant for specifying revision 1 of a Core ML request.
- [VNGenerateAttentionBasedSaliencyImageRequestRevision1](vngenerateattentionbasedsaliencyimagerequestrevision1.md): A constant for specifying revision 1 of the image saliency request.
- [VNGenerateObjectnessBasedSaliencyImageRequestRevision1](vngenerateobjectnessbasedsaliencyimagerequestrevision1.md): A constant for specifying revision 1 of the image saliency request.
- [VNClassifyImageRequestRevision1](vnclassifyimagerequestrevision1.md): A constant for specifying the first revision of the image-classification request.
- [VNGenerateImageFeaturePrintRequestRevision1](vngenerateimagefeatureprintrequestrevision1.md): A constant for specifying the first revision of the feature-print request.
- [VNDetectFaceCaptureQualityRequestRevision1](vndetectfacecapturequalityrequestrevision1.md): A constant for specifying revision 1 of the face capture detection request.
- [VNDetectHumanRectanglesRequestRevision1](vndetecthumanrectanglesrequestrevision1.md): A constant for specifying revision 1 of the human rectangles detection request.

## Relationships

### Conforming Types

- [VNContour](vncontour.md)
- [VNFaceLandmarkRegion](vnfacelandmarkregion.md)
- [VNFaceLandmarks](vnfacelandmarks.md)
- [VNObservation](vnobservation.md)
- [VNRecognizedText](vnrecognizedtext.md)

## See Also

### Determining the Revision

- [currentRevision](vnrequest/currentrevision.md): The current revison supported by the request.
- [defaultRevision](vnrequest/defaultrevision.md): The revision of the latest request for the particular SDK linked with the client application.
- [supportedRevisions](vnrequest/supportedrevisions.md): The collection of currently-supported algorithm versions for the class of request.
