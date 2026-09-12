> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vndetecthumanhandposerequest](https://developer.apple.com/documentation/vision/vndetecthumanhandposerequest)

# VNDetectHumanHandPoseRequest (Swift)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A request that detects a human hand pose.

## Declaration

```swift
class VNDetectHumanHandPoseRequest
```

<a id="overview"></a>

## Overview

The framework provides the detected hand pose as a `VNIdentifiedPointsObservation`.

## Topics

### Configuring the Request

- [maximumHandCount](vndetecthumanhandposerequest/maximumhandcount.md): The maximum number of hands to detect in an image.

### Determining Supported Joints

- [supportedJointNames](vndetecthumanhandposerequest/supportedjointnames.md): Retrieves the supported joint names.
- [supportedJointNames(forRevision:)](vndetecthumanhandposerequest/supportedjointnames%28forrevision_%29.md): Deprecated. Retrieves the supported joint names for a revision.
- [supportedJointsGroupNames](vndetecthumanhandposerequest/supportedjointsgroupnames.md): Retrieves the supported joint group names.
- [supportedJointsGroupNames(forRevision:)](vndetecthumanhandposerequest/supportedjointsgroupnames%28forrevision_%29.md): Deprecated. Retrieves the supported joint group names for a revision.

### Accessing the Results

- [results](vndetecthumanhandposerequest/results.md): The observed hand poses.

### Identifying Hand Pose Revisions

- [VNDetectHumanHandPoseRequestRevision1](vndetecthumanhandposerequestrevision1.md): A constant for specifying revision 1 of the hand pose detection request.

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
- [VNDetectHumanBodyPoseRequest](vndetecthumanbodyposerequest.md): A request that detects a human body pose.
- [VNRecognizedPointsObservation](vnrecognizedpointsobservation.md): An observation that provides the points the analysis recognized.
- [VNHumanBodyPoseObservation](vnhumanbodyposeobservation.md): An observation that provides the body points the analysis recognized.
- [VNHumanHandPoseObservation](vnhumanhandposeobservation.md): An observation that provides the hand points the analysis recognized.
- [VNPoint](vnpoint.md): An immutable object that represents a single 2D point in an image.
- [VNDetectedPoint](vndetectedpoint.md): An object that represents a normalized point in an image, along with a confidence value.
- [VNRecognizedPoint](vnrecognizedpoint.md): An object that represents a normalized point in an image, along with an identifier label and a confidence value.
- [VNRecognizedPointKey](vnrecognizedpointkey.md): The data type for all recognized point keys.
- [VNRecognizedPointGroupKey](vnrecognizedpointgroupkey.md): The data type for all recognized-point group keys.

# VNDetectHumanHandPoseRequest (Objective-C)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A request that detects a human hand pose.

## Declaration

```objectivec
@interface VNDetectHumanHandPoseRequest : VNImageBasedRequest
```

<a id="overview"></a>

## Overview

The framework provides the detected hand pose as a `VNIdentifiedPointsObservation`.

## Topics

### Configuring the Request

- [maximumHandCount](vndetecthumanhandposerequest/maximumhandcount.md): The maximum number of hands to detect in an image.

### Determining Supported Joints

- [supportedJointNamesForRevision:error:](vndetecthumanhandposerequest/supportedjointnames%28forrevision_%29.md): Deprecated. Retrieves the supported joint names for a revision.
- [supportedJointsGroupNamesForRevision:error:](vndetecthumanhandposerequest/supportedjointsgroupnames%28forrevision_%29.md): Deprecated. Retrieves the supported joint group names for a revision.
- [supportedJointNamesAndReturnError:](vndetecthumanhandposerequest/supportedjointnamesandreturnerror_.md): Retrieves the supported joint names.
- [supportedJointsGroupNamesAndReturnError:](vndetecthumanhandposerequest/supportedjointsgroupnamesandreturnerror_.md): Retrieves the supported joint group names.

### Accessing the Results

- [results](vndetecthumanhandposerequest/results.md): The observed hand poses.

### Identifying Hand Pose Revisions

- [VNDetectHumanHandPoseRequestRevision1](vndetecthumanhandposerequestrevision1.md): A constant for specifying revision 1 of the hand pose detection request.

## Relationships

### Inherits From

- [VNImageBasedRequest](vnimagebasedrequest.md)

## See Also

### Body and hand pose detection

- [Detecting Human Body Poses in Images](detecting-human-body-poses-in-images.md): Add the capability to detect human body poses to your app using the Vision framework.
- [Detecting Hand Poses with Vision](detecting-hand-poses-with-vision.md): Create a virtual drawing app by using Vision’s capability to detect hand poses.
- [VNDetectHumanBodyPoseRequest](vndetecthumanbodyposerequest.md): A request that detects a human body pose.
- [VNRecognizedPointsObservation](vnrecognizedpointsobservation.md): An observation that provides the points the analysis recognized.
- [VNHumanBodyPoseObservation](vnhumanbodyposeobservation.md): An observation that provides the body points the analysis recognized.
- [VNHumanHandPoseObservation](vnhumanhandposeobservation.md): An observation that provides the hand points the analysis recognized.
- [VNPoint](vnpoint.md): An immutable object that represents a single 2D point in an image.
- [VNDetectedPoint](vndetectedpoint.md): An object that represents a normalized point in an image, along with a confidence value.
- [VNRecognizedPoint](vnrecognizedpoint.md): An object that represents a normalized point in an image, along with an identifier label and a confidence value.
- [VNRecognizedPointKey](vnrecognizedpointkey.md): The data type for all recognized point keys.
- [VNRecognizedPointGroupKey](vnrecognizedpointgroupkey.md): The data type for all recognized-point group keys.
