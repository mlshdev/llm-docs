> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnrecognizedpoint3d](https://developer.apple.com/documentation/vision/vnrecognizedpoint3d)

# VNRecognizedPoint3D (Swift)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

A 3D point that includes an identifier to the point.

## Declaration

```swift
class VNRecognizedPoint3D
```

## Topics

### Getting the Identifier

- [identifier](vnrecognizedpoint3d/identifier.md): The identifier that provides context about what kind of point the request recognizes.

## Relationships

### Inherits From

- [VNPoint3D](vnpoint3d.md)

### Inherited By

- [VNHumanBodyRecognizedPoint3D](vnhumanbodyrecognizedpoint3d.md)

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

## See Also

### 3D body pose detection

- [Identifying 3D human body poses in images](identifying-3d-human-body-poses-in-images.md): Detect three-dimensional human body poses using the Vision framework.
- [Detecting human body poses in 3D with Vision](detecting-human-body-poses-in-3d-with-vision.md): Render skeletons of 3D body pose points in a scene overlaying the input image.
- [VNDetectHumanBodyPose3DRequest](vndetecthumanbodypose3drequest.md): A request that detects points on human bodies in 3D space, relative to the camera.
- [VNHumanBodyPose3DObservation](vnhumanbodypose3dobservation.md): An observation that provides the 3D body points the request recognizes.
- [VNRecognizedPoints3DObservation](vnrecognizedpoints3dobservation.md): An observation that provides the 3D points for a request.
- [VNHumanBodyRecognizedPoint3D](vnhumanbodyrecognizedpoint3d.md): A recognized 3D point that includes a parent joint.
- [VNPoint3D](vnpoint3d.md): An object that represents a 3D point in an image.
- [VNHumanBodyPose3DObservation.JointName](vnhumanbodypose3dobservation/jointname.md): The joint names for a 3D body pose.
- [VNHumanBodyPose3DObservation.JointsGroupName](vnhumanbodypose3dobservation/jointsgroupname.md): The joint group names for a 3D body pose.

# VNRecognizedPoint3D (Objective-C)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

A 3D point that includes an identifier to the point.

## Declaration

```objectivec
@interface VNRecognizedPoint3D : VNPoint3D
```

## Topics

### Getting the Identifier

- [identifier](vnrecognizedpoint3d/identifier.md): The identifier that provides context about what kind of point the request recognizes.

## Relationships

### Inherits From

- [VNPoint3D](vnpoint3d.md)

### Inherited By

- [VNHumanBodyRecognizedPoint3D](vnhumanbodyrecognizedpoint3d.md)

## See Also

### 3D body pose detection

- [Identifying 3D human body poses in images](identifying-3d-human-body-poses-in-images.md): Detect three-dimensional human body poses using the Vision framework.
- [Detecting human body poses in 3D with Vision](detecting-human-body-poses-in-3d-with-vision.md): Render skeletons of 3D body pose points in a scene overlaying the input image.
- [VNDetectHumanBodyPose3DRequest](vndetecthumanbodypose3drequest.md): A request that detects points on human bodies in 3D space, relative to the camera.
- [VNHumanBodyPose3DObservation](vnhumanbodypose3dobservation.md): An observation that provides the 3D body points the request recognizes.
- [VNRecognizedPoints3DObservation](vnrecognizedpoints3dobservation.md): An observation that provides the 3D points for a request.
- [VNHumanBodyRecognizedPoint3D](vnhumanbodyrecognizedpoint3d.md): A recognized 3D point that includes a parent joint.
- [VNPoint3D](vnpoint3d.md): An object that represents a 3D point in an image.
- [VNHumanBodyPose3DObservationJointName](vnhumanbodypose3dobservation/jointname.md): The joint names for a 3D body pose.
- [VNHumanBodyPose3DObservationJointsGroupName](vnhumanbodypose3dobservation/jointsgroupname.md): The joint group names for a 3D body pose.
