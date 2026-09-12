> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vndetecthumanbodyposerequest](https://developer.apple.com/documentation/vision/vndetecthumanbodyposerequest)

# VNDetectHumanBodyPoseRequest (Swift)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A request that detects a human body pose.

## Declaration

```swift
class VNDetectHumanBodyPoseRequest
```

## Mentioned In

- [Detecting Human Body Poses in Images](detecting-human-body-poses-in-images.md)

<a id="overview"></a>

## Overview

The framework provides the detected body pose as a [VNHumanBodyPoseObservation](vnhumanbodyposeobservation.md).

## Topics

### Determining Supported Joints

- [supportedJointNames](vndetecthumanbodyposerequest/supportedjointnames.md): Retrieves the supported joint names.
- [supportedJointNames(forRevision:)](vndetecthumanbodyposerequest/supportedjointnames%28forrevision_%29.md): Deprecated. Retrieves the supported joint names for a revision.
- [supportedJointsGroupNames](vndetecthumanbodyposerequest/supportedjointsgroupnames.md): Retrieves the supported joint group names.
- [supportedJointsGroupNames(forRevision:)](vndetecthumanbodyposerequest/supportedjointsgroupnames%28forrevision_%29.md): Deprecated. Retrieves the supported joint group names for a revision.

### Accessing the Results

- [results](vndetecthumanbodyposerequest/results.md): The observed body poses.

### Identifying Body Pose Revisions

- [VNDetectHumanBodyPoseRequestRevision1](vndetecthumanbodyposerequestrevision1.md): A constant for specifying revision 1 of the body pose detection request.

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

### Body and hand pose detection

- [Detecting Human Body Poses in Images](detecting-human-body-poses-in-images.md): Add the capability to detect human body poses to your app using the Vision framework.
- [Detecting Hand Poses with Vision](detecting-hand-poses-with-vision.md): Create a virtual drawing app by using Vision’s capability to detect hand poses.
- [VNDetectHumanHandPoseRequest](vndetecthumanhandposerequest.md): A request that detects a human hand pose.
- [VNRecognizedPointsObservation](vnrecognizedpointsobservation.md): An observation that provides the points the analysis recognized.
- [VNHumanBodyPoseObservation](vnhumanbodyposeobservation.md): An observation that provides the body points the analysis recognized.
- [VNHumanHandPoseObservation](vnhumanhandposeobservation.md): An observation that provides the hand points the analysis recognized.
- [VNPoint](vnpoint.md): An immutable object that represents a single 2D point in an image.
- [VNDetectedPoint](vndetectedpoint.md): An object that represents a normalized point in an image, along with a confidence value.
- [VNRecognizedPoint](vnrecognizedpoint.md): An object that represents a normalized point in an image, along with an identifier label and a confidence value.
- [VNRecognizedPointKey](vnrecognizedpointkey.md): The data type for all recognized point keys.
- [VNRecognizedPointGroupKey](vnrecognizedpointgroupkey.md): The data type for all recognized-point group keys.

# VNDetectHumanBodyPoseRequest (Objective-C)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A request that detects a human body pose.

## Declaration

```objectivec
@interface VNDetectHumanBodyPoseRequest : VNImageBasedRequest
```

## Mentioned In

- [Detecting Human Body Poses in Images](detecting-human-body-poses-in-images.md)

<a id="overview"></a>

## Overview

The framework provides the detected body pose as a [VNHumanBodyPoseObservation](vnhumanbodyposeobservation.md).

## Topics

### Determining Supported Joints

- [supportedJointNamesForRevision:error:](vndetecthumanbodyposerequest/supportedjointnames%28forrevision_%29.md): Deprecated. Retrieves the supported joint names for a revision.
- [supportedJointsGroupNamesForRevision:error:](vndetecthumanbodyposerequest/supportedjointsgroupnames%28forrevision_%29.md): Deprecated. Retrieves the supported joint group names for a revision.
- [supportedJointNamesAndReturnError:](vndetecthumanbodyposerequest/supportedjointnamesandreturnerror_.md): Retrieves the supported joint names.
- [supportedJointsGroupNamesAndReturnError:](vndetecthumanbodyposerequest/supportedjointsgroupnamesandreturnerror_.md): Retrieves the supported joint group names.

### Accessing the Results

- [results](vndetecthumanbodyposerequest/results.md): The observed body poses.

### Identifying Body Pose Revisions

- [VNDetectHumanBodyPoseRequestRevision1](vndetecthumanbodyposerequestrevision1.md): A constant for specifying revision 1 of the body pose detection request.

## Relationships

### Inherits From

- [VNImageBasedRequest](vnimagebasedrequest.md)

## See Also

### Body and hand pose detection

- [Detecting Human Body Poses in Images](detecting-human-body-poses-in-images.md): Add the capability to detect human body poses to your app using the Vision framework.
- [Detecting Hand Poses with Vision](detecting-hand-poses-with-vision.md): Create a virtual drawing app by using Vision’s capability to detect hand poses.
- [VNDetectHumanHandPoseRequest](vndetecthumanhandposerequest.md): A request that detects a human hand pose.
- [VNRecognizedPointsObservation](vnrecognizedpointsobservation.md): An observation that provides the points the analysis recognized.
- [VNHumanBodyPoseObservation](vnhumanbodyposeobservation.md): An observation that provides the body points the analysis recognized.
- [VNHumanHandPoseObservation](vnhumanhandposeobservation.md): An observation that provides the hand points the analysis recognized.
- [VNPoint](vnpoint.md): An immutable object that represents a single 2D point in an image.
- [VNDetectedPoint](vndetectedpoint.md): An object that represents a normalized point in an image, along with a confidence value.
- [VNRecognizedPoint](vnrecognizedpoint.md): An object that represents a normalized point in an image, along with an identifier label and a confidence value.
- [VNRecognizedPointKey](vnrecognizedpointkey.md): The data type for all recognized point keys.
- [VNRecognizedPointGroupKey](vnrecognizedpointgroupkey.md): The data type for all recognized-point group keys.
