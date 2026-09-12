> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnhumanbodypose3dobservation/jointsgroupname](https://developer.apple.com/documentation/vision/vnhumanbodypose3dobservation/jointsgroupname)

# VNHumanBodyPose3DObservation.JointsGroupName (Swift)

**Framework:** Vision  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

The joint group names for a 3D body pose.

## Declaration

```swift
struct JointsGroupName
```

## Topics

### Getting the Group Names

- [all](jointsgroupname/all.md): A group name that represents all joints.
- [head](jointsgroupname/head.md): A group name that represents the head joints.
- [leftArm](jointsgroupname/leftarm.md): A group name that represents the left arm joints.
- [leftLeg](jointsgroupname/leftleg.md): A group name that represents the left leg joints.
- [rightArm](jointsgroupname/rightarm.md): A group name that represents the right arm joints.
- [rightLeg](jointsgroupname/rightleg.md): A group name that represents the right leg joints.
- [torso](jointsgroupname/torso.md): A group name that represents the torso joints.

### Creating a Group Name

- [init(rawValue:)](jointsgroupname/init%28rawvalue_%29.md): Creates a joint name with the key you specify.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### 3D body pose detection

- [Identifying 3D human body poses in images](../identifying-3d-human-body-poses-in-images.md): Detect three-dimensional human body poses using the Vision framework.
- [Detecting human body poses in 3D with Vision](../detecting-human-body-poses-in-3d-with-vision.md): Render skeletons of 3D body pose points in a scene overlaying the input image.
- [VNDetectHumanBodyPose3DRequest](../vndetecthumanbodypose3drequest.md): A request that detects points on human bodies in 3D space, relative to the camera.
- [VNHumanBodyPose3DObservation](../vnhumanbodypose3dobservation.md): An observation that provides the 3D body points the request recognizes.
- [VNRecognizedPoints3DObservation](../vnrecognizedpoints3dobservation.md): An observation that provides the 3D points for a request.
- [VNHumanBodyRecognizedPoint3D](../vnhumanbodyrecognizedpoint3d.md): A recognized 3D point that includes a parent joint.
- [VNPoint3D](../vnpoint3d.md): An object that represents a 3D point in an image.
- [VNRecognizedPoint3D](../vnrecognizedpoint3d.md): A 3D point that includes an identifier to the point.
- [VNHumanBodyPose3DObservation.JointName](jointname.md): The joint names for a 3D body pose.

# VNHumanBodyPose3DObservationJointsGroupName (Objective-C)

**Framework:** Vision  
**Kind:** Type Alias  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

The joint group names for a 3D body pose.

## Declaration

```objectivec
typedef VNRecognizedPointGroupKey VNHumanBodyPose3DObservationJointsGroupName;
```

## Topics

### Getting the Group Names

- [VNHumanBodyPose3DObservationJointsGroupNameAll](jointsgroupname/all.md): A group name that represents all joints.
- [VNHumanBodyPose3DObservationJointsGroupNameHead](jointsgroupname/head.md): A group name that represents the head joints.
- [VNHumanBodyPose3DObservationJointsGroupNameLeftArm](jointsgroupname/leftarm.md): A group name that represents the left arm joints.
- [VNHumanBodyPose3DObservationJointsGroupNameLeftLeg](jointsgroupname/leftleg.md): A group name that represents the left leg joints.
- [VNHumanBodyPose3DObservationJointsGroupNameRightArm](jointsgroupname/rightarm.md): A group name that represents the right arm joints.
- [VNHumanBodyPose3DObservationJointsGroupNameRightLeg](jointsgroupname/rightleg.md): A group name that represents the right leg joints.
- [VNHumanBodyPose3DObservationJointsGroupNameTorso](jointsgroupname/torso.md): A group name that represents the torso joints.

## See Also

### 3D body pose detection

- [Identifying 3D human body poses in images](../identifying-3d-human-body-poses-in-images.md): Detect three-dimensional human body poses using the Vision framework.
- [Detecting human body poses in 3D with Vision](../detecting-human-body-poses-in-3d-with-vision.md): Render skeletons of 3D body pose points in a scene overlaying the input image.
- [VNDetectHumanBodyPose3DRequest](../vndetecthumanbodypose3drequest.md): A request that detects points on human bodies in 3D space, relative to the camera.
- [VNHumanBodyPose3DObservation](../vnhumanbodypose3dobservation.md): An observation that provides the 3D body points the request recognizes.
- [VNRecognizedPoints3DObservation](../vnrecognizedpoints3dobservation.md): An observation that provides the 3D points for a request.
- [VNHumanBodyRecognizedPoint3D](../vnhumanbodyrecognizedpoint3d.md): A recognized 3D point that includes a parent joint.
- [VNPoint3D](../vnpoint3d.md): An object that represents a 3D point in an image.
- [VNRecognizedPoint3D](../vnrecognizedpoint3d.md): A 3D point that includes an identifier to the point.
- [VNHumanBodyPose3DObservationJointName](jointname.md): The joint names for a 3D body pose.
