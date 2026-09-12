> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnfaceobservation](https://developer.apple.com/documentation/vision/vnfaceobservation)

# VNFaceObservation (Swift)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Face or facial-feature information that an image analysis request detects.

## Declaration

```swift
class VNFaceObservation
```

<a id="overview"></a>

## Overview

This type of observation results from a [VNDetectFaceRectanglesRequest](vndetectfacerectanglesrequest.md). It contains information about facial landmarks and regions it finds in the image.

## Topics

### Creating an Observation

- [init(requestRevision:boundingBox:roll:yaw:pitch:)](vnfaceobservation/init%28requestrevision_boundingbox_roll_yaw_pitch_%29.md): Creates an observation that contains the roll, yaw, and pitch of the face.
- [init(requestRevision:boundingBox:roll:yaw:)](vnfaceobservation/init%28requestrevision_boundingbox_roll_yaw_%29.md): Deprecated. Creates an observation that contains the roll and yaw of the face.

### Identifying Landmarks

- [landmarks](vnfaceobservation/landmarks.md): The facial features of the detected face.
- [VNFaceLandmarks2D](vnfacelandmarks2d.md): A collection of facial features that a request detects.
- [VNFaceLandmarkRegion2D](vnfacelandmarkregion2d.md): 2D geometry information for a specific facial feature.
- [VNFaceLandmarks](vnfacelandmarks.md): The abstract superclass for containers of face landmark information.
- [VNFaceLandmarkRegion](vnfacelandmarkregion.md): The abstract superclass for information about a specific face landmark.

### Determining Facial Orientation

- [roll](vnfaceobservation/roll.md): The roll angle of a face in radians.
- [yaw](vnfaceobservation/yaw.md): The yaw angle of a face in radians.
- [pitch](vnfaceobservation/pitch.md): The pitch angle of a face in radians.

### Determining Capture Quality

- [faceCaptureQuality](vnfaceobservation/facecapturequality-bjg5.md): A value that indicates the quality of the face capture.

## Relationships

### Inherits From

- [VNDetectedObjectObservation](vndetectedobjectobservation.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [VNRequestRevisionProviding](vnrequestrevisionproviding.md)

## See Also

### Accessing the Results

- [results](vndetectfacecapturequalityrequest/results.md): The results of the face-capture quality request.

# VNFaceObservation (Objective-C)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Face or facial-feature information that an image analysis request detects.

## Declaration

```objectivec
@interface VNFaceObservation : VNDetectedObjectObservation
```

<a id="overview"></a>

## Overview

This type of observation results from a [VNDetectFaceRectanglesRequest](vndetectfacerectanglesrequest.md). It contains information about facial landmarks and regions it finds in the image.

## Topics

### Creating an Observation

- [faceObservationWithRequestRevision:boundingBox:roll:yaw:pitch:](vnfaceobservation/init%28requestrevision_boundingbox_roll_yaw_pitch_%29.md): Creates an observation that contains the roll, yaw, and pitch of the face.
- [faceObservationWithRequestRevision:boundingBox:roll:yaw:](vnfaceobservation/init%28requestrevision_boundingbox_roll_yaw_%29.md): Deprecated. Creates an observation that contains the roll and yaw of the face.

### Identifying Landmarks

- [landmarks](vnfaceobservation/landmarks.md): The facial features of the detected face.
- [VNFaceLandmarks2D](vnfacelandmarks2d.md): A collection of facial features that a request detects.
- [VNFaceLandmarkRegion2D](vnfacelandmarkregion2d.md): 2D geometry information for a specific facial feature.
- [VNFaceLandmarks](vnfacelandmarks.md): The abstract superclass for containers of face landmark information.
- [VNFaceLandmarkRegion](vnfacelandmarkregion.md): The abstract superclass for information about a specific face landmark.

### Determining Facial Orientation

- [roll](vnfaceobservation/roll.md): The roll angle of a face in radians.
- [yaw](vnfaceobservation/yaw.md): The yaw angle of a face in radians.
- [pitch](vnfaceobservation/pitch.md): The pitch angle of a face in radians.

### Determining Capture Quality

- [faceCaptureQuality](vnfaceobservation/facecapturequality-2o4xv.md): A value that indicates the quality of the face capture.

## Relationships

### Inherits From

- [VNDetectedObjectObservation](vndetectedobjectobservation.md)

## See Also

### Accessing the Results

- [results](vndetectfacecapturequalityrequest/results.md): The results of the face-capture quality request.
