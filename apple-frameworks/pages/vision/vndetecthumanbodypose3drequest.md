> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vndetecthumanbodypose3drequest](https://developer.apple.com/documentation/vision/vndetecthumanbodypose3drequest)

# VNDetectHumanBodyPose3DRequest (Swift)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

A request that detects points on human bodies in 3D space, relative to the camera.

## Declaration

```swift
class VNDetectHumanBodyPose3DRequest
```

## Mentioned In

- [Identifying 3D human body poses in images](identifying-3d-human-body-poses-in-images.md)

<a id="overview"></a>

## Overview

This request generates a collection of [VNHumanBodyPose3DObservation](vnhumanbodypose3dobservation.md) objects that describe the position of each body the request detects. If the system allows it, the request uses [AVDepthData](../avfoundation/avdepthdata.md) information to improve the accuracy.

## Topics

### Initializing a Request

- [init()](vndetecthumanbodypose3drequest/init%28%29.md): Creates a new request with no completion handler.
- [init(completionHandler:)](vndetecthumanbodypose3drequest/init%28completionhandler_%29.md): Creates a new 3D body pose request with a completion handler.

### Determining Supported Joints

- [supportedJointsGroupNames](vndetecthumanbodypose3drequest/supportedjointsgroupnames.md): Returns the joint names the request supports.
- [supportedJointNames](vndetecthumanbodypose3drequest/supportedjointnames.md): Returns the joint group names the request supports.

### Accessing the Results

- [results](vndetecthumanbodypose3drequest/results.md): The 3D body pose the request observes.

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

### 3D body pose detection

- [Identifying 3D human body poses in images](identifying-3d-human-body-poses-in-images.md): Detect three-dimensional human body poses using the Vision framework.
- [Detecting human body poses in 3D with Vision](detecting-human-body-poses-in-3d-with-vision.md): Render skeletons of 3D body pose points in a scene overlaying the input image.
- [VNHumanBodyPose3DObservation](vnhumanbodypose3dobservation.md): An observation that provides the 3D body points the request recognizes.
- [VNRecognizedPoints3DObservation](vnrecognizedpoints3dobservation.md): An observation that provides the 3D points for a request.
- [VNHumanBodyRecognizedPoint3D](vnhumanbodyrecognizedpoint3d.md): A recognized 3D point that includes a parent joint.
- [VNPoint3D](vnpoint3d.md): An object that represents a 3D point in an image.
- [VNRecognizedPoint3D](vnrecognizedpoint3d.md): A 3D point that includes an identifier to the point.
- [VNHumanBodyPose3DObservation.JointName](vnhumanbodypose3dobservation/jointname.md): The joint names for a 3D body pose.
- [VNHumanBodyPose3DObservation.JointsGroupName](vnhumanbodypose3dobservation/jointsgroupname.md): The joint group names for a 3D body pose.

# VNDetectHumanBodyPose3DRequest (Objective-C)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

A request that detects points on human bodies in 3D space, relative to the camera.

## Declaration

```objectivec
@interface VNDetectHumanBodyPose3DRequest : VNStatefulRequest
```

## Mentioned In

- [Identifying 3D human body poses in images](identifying-3d-human-body-poses-in-images.md)

<a id="overview"></a>

## Overview

This request generates a collection of [VNHumanBodyPose3DObservation](vnhumanbodypose3dobservation.md) objects that describe the position of each body the request detects. If the system allows it, the request uses [AVDepthData](../avfoundation/avdepthdata.md) information to improve the accuracy.

## Topics

### Initializing a Request

- [init](vndetecthumanbodypose3drequest/init%28%29.md): Creates a new request with no completion handler.
- [initWithCompletionHandler:](vndetecthumanbodypose3drequest/init%28completionhandler_%29.md): Creates a new 3D body pose request with a completion handler.

### Determining Supported Joints

- [supportedJointNamesAndReturnError:](vndetecthumanbodypose3drequest/supportedjointnamesandreturnerror_.md): Returns the joint names the request supports.
- [supportedJointsGroupNamesAndReturnError:](vndetecthumanbodypose3drequest/supportedjointsgroupnamesandreturnerror_.md): Returns the joint group names the request supports.

### Accessing the Results

- [results](vndetecthumanbodypose3drequest/results.md): The 3D body pose the request observes.

## Relationships

### Inherits From

- [VNStatefulRequest](vnstatefulrequest.md)

## See Also

### 3D body pose detection

- [Identifying 3D human body poses in images](identifying-3d-human-body-poses-in-images.md): Detect three-dimensional human body poses using the Vision framework.
- [Detecting human body poses in 3D with Vision](detecting-human-body-poses-in-3d-with-vision.md): Render skeletons of 3D body pose points in a scene overlaying the input image.
- [VNHumanBodyPose3DObservation](vnhumanbodypose3dobservation.md): An observation that provides the 3D body points the request recognizes.
- [VNRecognizedPoints3DObservation](vnrecognizedpoints3dobservation.md): An observation that provides the 3D points for a request.
- [VNHumanBodyRecognizedPoint3D](vnhumanbodyrecognizedpoint3d.md): A recognized 3D point that includes a parent joint.
- [VNPoint3D](vnpoint3d.md): An object that represents a 3D point in an image.
- [VNRecognizedPoint3D](vnrecognizedpoint3d.md): A 3D point that includes an identifier to the point.
- [VNHumanBodyPose3DObservationJointName](vnhumanbodypose3dobservation/jointname.md): The joint names for a 3D body pose.
- [VNHumanBodyPose3DObservationJointsGroupName](vnhumanbodypose3dobservation/jointsgroupname.md): The joint group names for a 3D body pose.
