> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnhumanbodypose3dobservation/jointname](https://developer.apple.com/documentation/vision/vnhumanbodypose3dobservation/jointname)

# VNHumanBodyPose3DObservation.JointName (Swift)

**Framework:** Vision  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

The joint names for a 3D body pose.

## Declaration

```swift
struct JointName
```

## Topics

### Getting the Head Joint Names

- [topHead](jointname/tophead.md): A joint name that represents the top of the head.
- [centerHead](jointname/centerhead.md): A joint name that represents the center of the head.

### Getting the Arm Joint Names

- [centerShoulder](jointname/centershoulder.md): A joint name that represents the point between the shoulders.
- [leftShoulder](jointname/leftshoulder.md): A joint name that represents the left shoulder.
- [rightShoulder](jointname/rightshoulder.md): A joint name that represents the right shoulder.
- [leftElbow](jointname/leftelbow.md): A joint name that represents the left elbow.
- [rightElbow](jointname/rightelbow.md): A joint name that represents the right elbow.
- [leftWrist](jointname/leftwrist.md): A joint name that represents the left wrist.
- [rightWrist](jointname/rightwrist.md): A joint name that represents the right wrist.

### Getting the Leg Joint Names

- [leftHip](jointname/lefthip.md): A joint name that represents the left hip.
- [rightHip](jointname/righthip.md): A joint name that represents the right hip.
- [leftKnee](jointname/leftknee.md): A joint name that represents the left knee.
- [rightKnee](jointname/rightknee.md): A joint name that represents the right knee.
- [leftAnkle](jointname/leftankle.md): A joint name that represents the left ankle.
- [rightAnkle](jointname/rightankle.md): A joint name that represents the right ankle.

### Getting the Root Joint Name

- [root](jointname/root.md): A joint name that represents the point between the left hip and right hip.

### Getting the Spine

- [spine](jointname/spine.md): A joint name that represents the spine.

### Creating a Joint Name

- [init(rawValue:)](jointname/init%28rawvalue_%29.md): Creates a joint name with the key you specify.

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
- [VNHumanBodyPose3DObservation.JointsGroupName](jointsgroupname.md): The joint group names for a 3D body pose.

# VNHumanBodyPose3DObservationJointName (Objective-C)

**Framework:** Vision  
**Kind:** Type Alias  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

The joint names for a 3D body pose.

## Declaration

```objectivec
typedef VNRecognizedPointKey VNHumanBodyPose3DObservationJointName;
```

## Topics

### Getting the Head Joint Names

- [VNHumanBodyPose3DObservationJointNameTopHead](jointname/tophead.md): A joint name that represents the top of the head.
- [VNHumanBodyPose3DObservationJointNameCenterHead](jointname/centerhead.md): A joint name that represents the center of the head.

### Getting the Arm Joint Names

- [VNHumanBodyPose3DObservationJointNameCenterShoulder](jointname/centershoulder.md): A joint name that represents the point between the shoulders.
- [VNHumanBodyPose3DObservationJointNameLeftShoulder](jointname/leftshoulder.md): A joint name that represents the left shoulder.
- [VNHumanBodyPose3DObservationJointNameRightShoulder](jointname/rightshoulder.md): A joint name that represents the right shoulder.
- [VNHumanBodyPose3DObservationJointNameLeftElbow](jointname/leftelbow.md): A joint name that represents the left elbow.
- [VNHumanBodyPose3DObservationJointNameRightElbow](jointname/rightelbow.md): A joint name that represents the right elbow.
- [VNHumanBodyPose3DObservationJointNameLeftWrist](jointname/leftwrist.md): A joint name that represents the left wrist.
- [VNHumanBodyPose3DObservationJointNameRightWrist](jointname/rightwrist.md): A joint name that represents the right wrist.

### Getting the Leg Joint Names

- [VNHumanBodyPose3DObservationJointNameLeftHip](jointname/lefthip.md): A joint name that represents the left hip.
- [VNHumanBodyPose3DObservationJointNameRightHip](jointname/righthip.md): A joint name that represents the right hip.
- [VNHumanBodyPose3DObservationJointNameLeftKnee](jointname/leftknee.md): A joint name that represents the left knee.
- [VNHumanBodyPose3DObservationJointNameRightKnee](jointname/rightknee.md): A joint name that represents the right knee.
- [VNHumanBodyPose3DObservationJointNameLeftAnkle](jointname/leftankle.md): A joint name that represents the left ankle.
- [VNHumanBodyPose3DObservationJointNameRightAnkle](jointname/rightankle.md): A joint name that represents the right ankle.

### Getting the Root Joint Name

- [VNHumanBodyPose3DObservationJointNameRoot](jointname/root.md): A joint name that represents the point between the left hip and right hip.

### Getting the Spine

- [VNHumanBodyPose3DObservationJointNameSpine](jointname/spine.md): A joint name that represents the spine.

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
- [VNHumanBodyPose3DObservationJointsGroupName](jointsgroupname.md): The joint group names for a 3D body pose.
