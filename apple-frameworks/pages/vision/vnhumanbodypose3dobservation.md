> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnhumanbodypose3dobservation](https://developer.apple.com/documentation/vision/vnhumanbodypose3dobservation)

# VNHumanBodyPose3DObservation (Swift)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

An observation that provides the 3D body points the request recognizes.

## Declaration

```swift
class VNHumanBodyPose3DObservation
```

## Mentioned In

- [Identifying 3D human body poses in images](identifying-3d-human-body-poses-in-images.md)

## Topics

### Accessing Points

- [availableJointNames](vnhumanbodypose3dobservation/availablejointnames.md): The names of the available joints in the observation.
- [VNHumanBodyPose3DObservation.JointName](vnhumanbodypose3dobservation/jointname.md): The joint names for a 3D body pose.
- [availableJointsGroupNames](vnhumanbodypose3dobservation/availablejointsgroupnames.md): The available joint group names in the observation.
- [VNHumanBodyPose3DObservation.JointsGroupName](vnhumanbodypose3dobservation/jointsgroupname.md): The joint group names for a 3D body pose.
- [recognizedPoint(\_:)](vnhumanbodypose3dobservation/recognizedpoint%28__%29.md): Returns the point for a joint name that the observation recognizes.
- [recognizedPoints(\_:)](vnhumanbodypose3dobservation/recognizedpoints%28__%29.md): Returns a collection of points for the group name you specify.

### Getting the Joint Position

- [pointInImage(\_:)](vnhumanbodypose3dobservation/pointinimage%28__%29.md): Returns a 2D point for the joint name you specify, relative to the input image.

### Getting the Parent Joint Name

- [parentJointName(\_:)](vnhumanbodypose3dobservation/parentjointname%28__%29.md): Returns the parent joint of the joint name you specify.

### Getting the Body Height

- [heightEstimation](vnhumanbodypose3dobservation/heightestimation-swift.property.md): The technique the framework uses to estimate body height.
- [VNHumanBodyPose3DObservation.HeightEstimation](vnhumanbodypose3dobservation/heightestimation-swift.enum.md): Constants that identify body height estimation techniques.
- [bodyHeight](vnhumanbodypose3dobservation/bodyheight.md): The estimated human body height, in meters.

### Getting the Camera Position

- [cameraOriginMatrix](vnhumanbodypose3dobservation/cameraoriginmatrix.md): A transform from the skeleton hip to the camera.
- [cameraRelativePosition(\_:)](vnhumanbodypose3dobservation/camerarelativeposition%28__%29.md): Returns a position relative to the camera for the body joint you specify.

## Relationships

### Inherits From

- [VNRecognizedPoints3DObservation](vnrecognizedpoints3dobservation.md)

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

### 3D body pose detection

- [Identifying 3D human body poses in images](identifying-3d-human-body-poses-in-images.md): Detect three-dimensional human body poses using the Vision framework.
- [Detecting human body poses in 3D with Vision](detecting-human-body-poses-in-3d-with-vision.md): Render skeletons of 3D body pose points in a scene overlaying the input image.
- [VNDetectHumanBodyPose3DRequest](vndetecthumanbodypose3drequest.md): A request that detects points on human bodies in 3D space, relative to the camera.
- [VNRecognizedPoints3DObservation](vnrecognizedpoints3dobservation.md): An observation that provides the 3D points for a request.
- [VNHumanBodyRecognizedPoint3D](vnhumanbodyrecognizedpoint3d.md): A recognized 3D point that includes a parent joint.
- [VNPoint3D](vnpoint3d.md): An object that represents a 3D point in an image.
- [VNRecognizedPoint3D](vnrecognizedpoint3d.md): A 3D point that includes an identifier to the point.
- [VNHumanBodyPose3DObservation.JointName](vnhumanbodypose3dobservation/jointname.md): The joint names for a 3D body pose.
- [VNHumanBodyPose3DObservation.JointsGroupName](vnhumanbodypose3dobservation/jointsgroupname.md): The joint group names for a 3D body pose.

# VNHumanBodyPose3DObservation (Objective-C)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

An observation that provides the 3D body points the request recognizes.

## Declaration

```objectivec
@interface VNHumanBodyPose3DObservation : VNRecognizedPoints3DObservation
```

## Mentioned In

- [Identifying 3D human body poses in images](identifying-3d-human-body-poses-in-images.md)

## Topics

### Accessing Points

- [availableJointNames](vnhumanbodypose3dobservation/availablejointnames.md): The names of the available joints in the observation.
- [VNHumanBodyPose3DObservationJointName](vnhumanbodypose3dobservation/jointname.md): The joint names for a 3D body pose.
- [availableJointsGroupNames](vnhumanbodypose3dobservation/availablejointsgroupnames.md): The available joint group names in the observation.
- [VNHumanBodyPose3DObservationJointsGroupName](vnhumanbodypose3dobservation/jointsgroupname.md): The joint group names for a 3D body pose.
- [recognizedPointForJointName:error:](vnhumanbodypose3dobservation/recognizedpoint%28__%29.md): Returns the point for a joint name that the observation recognizes.
- [recognizedPointsForJointsGroupName:error:](vnhumanbodypose3dobservation/recognizedpoints%28__%29.md): Returns a collection of points for the group name you specify.

### Getting the Joint Position

- [pointInImageForJointName:error:](vnhumanbodypose3dobservation/pointinimage%28__%29.md): Returns a 2D point for the joint name you specify, relative to the input image.

### Getting the Parent Joint Name

- [parentJointNameForJointName:](vnhumanbodypose3dobservation/parentjointname%28__%29.md): Returns the parent joint of the joint name you specify.

### Getting the Body Height

- [heightEstimation](vnhumanbodypose3dobservation/heightestimation-swift.property.md): The technique the framework uses to estimate body height.
- [VNHumanBodyPose3DObservationHeightEstimation](vnhumanbodypose3dobservation/heightestimation-swift.enum.md): Constants that identify body height estimation techniques.
- [bodyHeight](vnhumanbodypose3dobservation/bodyheight.md): The estimated human body height, in meters.

### Getting the Camera Position

- [cameraOriginMatrix](vnhumanbodypose3dobservation/cameraoriginmatrix.md): A transform from the skeleton hip to the camera.
- [getCameraRelativePosition:forJointName:error:](vnhumanbodypose3dobservation/getcamerarelativeposition_forjointname_error_.md): Gets a position relative to the camera for the body joint you specify.

## Relationships

### Inherits From

- [VNRecognizedPoints3DObservation](vnrecognizedpoints3dobservation.md)

## See Also

### 3D body pose detection

- [Identifying 3D human body poses in images](identifying-3d-human-body-poses-in-images.md): Detect three-dimensional human body poses using the Vision framework.
- [Detecting human body poses in 3D with Vision](detecting-human-body-poses-in-3d-with-vision.md): Render skeletons of 3D body pose points in a scene overlaying the input image.
- [VNDetectHumanBodyPose3DRequest](vndetecthumanbodypose3drequest.md): A request that detects points on human bodies in 3D space, relative to the camera.
- [VNRecognizedPoints3DObservation](vnrecognizedpoints3dobservation.md): An observation that provides the 3D points for a request.
- [VNHumanBodyRecognizedPoint3D](vnhumanbodyrecognizedpoint3d.md): A recognized 3D point that includes a parent joint.
- [VNPoint3D](vnpoint3d.md): An object that represents a 3D point in an image.
- [VNRecognizedPoint3D](vnrecognizedpoint3d.md): A 3D point that includes an identifier to the point.
- [VNHumanBodyPose3DObservationJointName](vnhumanbodypose3dobservation/jointname.md): The joint names for a 3D body pose.
- [VNHumanBodyPose3DObservationJointsGroupName](vnhumanbodypose3dobservation/jointsgroupname.md): The joint group names for a 3D body pose.
