> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnrecognizedpoints3dobservation](https://developer.apple.com/documentation/vision/vnrecognizedpoints3dobservation)

# VNRecognizedPoints3DObservation (Swift)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

An observation that provides the 3D points for a request.

## Declaration

```swift
class VNRecognizedPoints3DObservation
```

## Topics

### Inspecting the Observation

- [availableKeys](vnrecognizedpoints3dobservation/availablekeys.md): The available point keys in the observation.
- [availableGroupKeys](vnrecognizedpoints3dobservation/availablegroupkeys.md): The available point group keys in the observation.
- [recognizedPoint(forKey:)](vnrecognizedpoints3dobservation/recognizedpoint%28forkey_%29.md): Returns a point for a key you specify.
- [recognizedPoints(forGroupKey:)](vnrecognizedpoints3dobservation/recognizedpoints%28forgroupkey_%29.md): Returns a point for a group key you specify.

## Relationships

### Inherits From

- [VNObservation](vnobservation.md)

### Inherited By

- [VNHumanBodyPose3DObservation](vnhumanbodypose3dobservation.md)

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
- [VNHumanBodyPose3DObservation](vnhumanbodypose3dobservation.md): An observation that provides the 3D body points the request recognizes.
- [VNHumanBodyRecognizedPoint3D](vnhumanbodyrecognizedpoint3d.md): A recognized 3D point that includes a parent joint.
- [VNPoint3D](vnpoint3d.md): An object that represents a 3D point in an image.
- [VNRecognizedPoint3D](vnrecognizedpoint3d.md): A 3D point that includes an identifier to the point.
- [VNHumanBodyPose3DObservation.JointName](vnhumanbodypose3dobservation/jointname.md): The joint names for a 3D body pose.
- [VNHumanBodyPose3DObservation.JointsGroupName](vnhumanbodypose3dobservation/jointsgroupname.md): The joint group names for a 3D body pose.

# VNRecognizedPoints3DObservation (Objective-C)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

An observation that provides the 3D points for a request.

## Declaration

```objectivec
@interface VNRecognizedPoints3DObservation : VNObservation
```

## Topics

### Inspecting the Observation

- [availableKeys](vnrecognizedpoints3dobservation/availablekeys.md): The available point keys in the observation.
- [availableGroupKeys](vnrecognizedpoints3dobservation/availablegroupkeys.md): The available point group keys in the observation.
- [recognizedPointForKey:error:](vnrecognizedpoints3dobservation/recognizedpoint%28forkey_%29.md): Returns a point for a key you specify.
- [recognizedPointsForGroupKey:error:](vnrecognizedpoints3dobservation/recognizedpoints%28forgroupkey_%29.md): Returns a point for a group key you specify.

## Relationships

### Inherits From

- [VNObservation](vnobservation.md)

### Inherited By

- [VNHumanBodyPose3DObservation](vnhumanbodypose3dobservation.md)

## See Also

### 3D body pose detection

- [Identifying 3D human body poses in images](identifying-3d-human-body-poses-in-images.md): Detect three-dimensional human body poses using the Vision framework.
- [Detecting human body poses in 3D with Vision](detecting-human-body-poses-in-3d-with-vision.md): Render skeletons of 3D body pose points in a scene overlaying the input image.
- [VNDetectHumanBodyPose3DRequest](vndetecthumanbodypose3drequest.md): A request that detects points on human bodies in 3D space, relative to the camera.
- [VNHumanBodyPose3DObservation](vnhumanbodypose3dobservation.md): An observation that provides the 3D body points the request recognizes.
- [VNHumanBodyRecognizedPoint3D](vnhumanbodyrecognizedpoint3d.md): A recognized 3D point that includes a parent joint.
- [VNPoint3D](vnpoint3d.md): An object that represents a 3D point in an image.
- [VNRecognizedPoint3D](vnrecognizedpoint3d.md): A 3D point that includes an identifier to the point.
- [VNHumanBodyPose3DObservationJointName](vnhumanbodypose3dobservation/jointname.md): The joint names for a 3D body pose.
- [VNHumanBodyPose3DObservationJointsGroupName](vnhumanbodypose3dobservation/jointsgroupname.md): The joint group names for a 3D body pose.
