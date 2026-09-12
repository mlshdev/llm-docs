> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnhumanbodyposeobservation/jointname](https://developer.apple.com/documentation/vision/vnhumanbodyposeobservation/jointname)

# VNHumanBodyPoseObservation.JointName (Swift)

**Framework:** Vision  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The supported joint names for the body pose.

## Declaration

```swift
struct JointName
```

## Topics

### Head

- [leftEar](jointname/leftear.md): The left ear.
- [leftEye](jointname/lefteye.md): The left eye.
- [rightEar](jointname/rightear.md): The right ear.
- [rightEye](jointname/righteye.md): The right eye.
- [neck](jointname/neck.md): The neck.
- [nose](jointname/nose.md): The nose.

### Arms

- [leftShoulder](jointname/leftshoulder.md): The left shoulder.
- [leftElbow](jointname/leftelbow.md): The left elbow.
- [leftWrist](jointname/leftwrist.md): The left wrist.
- [rightShoulder](jointname/rightshoulder.md): The right shoulder.
- [rightElbow](jointname/rightelbow.md): The right elbow.
- [rightWrist](jointname/rightwrist.md): The right wrist.

### Waist

- [root](jointname/root.md): The root (waist).

### Legs

- [leftHip](jointname/lefthip.md): The left hip.
- [leftKnee](jointname/leftknee.md): The left knee.
- [leftAnkle](jointname/leftankle.md): The left ankle.
- [rightHip](jointname/righthip.md): The right hip.
- [rightKnee](jointname/rightknee.md): The right knee.
- [rightAnkle](jointname/rightankle.md): The right ankle.

### Initializers

- [init(rawValue:)](jointname/init%28rawvalue_%29.md): Creates a joint name with a recognized point key.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing Points

- [availableJointNames](availablejointnames.md): The names of the available joints in the observation.
- [availableJointsGroupNames](availablejointsgroupnames.md): The available joint group names in the observation.
- [VNHumanBodyPoseObservation.JointsGroupName](jointsgroupname.md): The supported joint group names for the body pose.
- [recognizedPoint(\_:)](recognizedpoint%28__%29.md): Retrieves the recognized point for a joint name.
- [recognizedPoints(\_:)](recognizedpoints%28__%29.md): Retrieves the recognized points associated with the joint group name.

# VNHumanBodyPoseObservationJointName (Objective-C)

**Framework:** Vision  
**Kind:** Type Alias  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The supported joint names for the body pose.

## Declaration

```objectivec
typedef VNRecognizedPointKey VNHumanBodyPoseObservationJointName;
```

## Topics

### Head

- [VNHumanBodyPoseObservationJointNameLeftEar](jointname/leftear.md): The left ear.
- [VNHumanBodyPoseObservationJointNameLeftEye](jointname/lefteye.md): The left eye.
- [VNHumanBodyPoseObservationJointNameRightEar](jointname/rightear.md): The right ear.
- [VNHumanBodyPoseObservationJointNameRightEye](jointname/righteye.md): The right eye.
- [VNHumanBodyPoseObservationJointNameNeck](jointname/neck.md): The neck.
- [VNHumanBodyPoseObservationJointNameNose](jointname/nose.md): The nose.

### Arms

- [VNHumanBodyPoseObservationJointNameLeftShoulder](jointname/leftshoulder.md): The left shoulder.
- [VNHumanBodyPoseObservationJointNameLeftElbow](jointname/leftelbow.md): The left elbow.
- [VNHumanBodyPoseObservationJointNameLeftWrist](jointname/leftwrist.md): The left wrist.
- [VNHumanBodyPoseObservationJointNameRightShoulder](jointname/rightshoulder.md): The right shoulder.
- [VNHumanBodyPoseObservationJointNameRightElbow](jointname/rightelbow.md): The right elbow.
- [VNHumanBodyPoseObservationJointNameRightWrist](jointname/rightwrist.md): The right wrist.

### Waist

- [VNHumanBodyPoseObservationJointNameRoot](jointname/root.md): The root (waist).

### Legs

- [VNHumanBodyPoseObservationJointNameLeftHip](jointname/lefthip.md): The left hip.
- [VNHumanBodyPoseObservationJointNameLeftKnee](jointname/leftknee.md): The left knee.
- [VNHumanBodyPoseObservationJointNameLeftAnkle](jointname/leftankle.md): The left ankle.
- [VNHumanBodyPoseObservationJointNameRightHip](jointname/righthip.md): The right hip.
- [VNHumanBodyPoseObservationJointNameRightKnee](jointname/rightknee.md): The right knee.
- [VNHumanBodyPoseObservationJointNameRightAnkle](jointname/rightankle.md): The right ankle.

## See Also

### Accessing Points

- [availableJointNames](availablejointnames.md): The names of the available joints in the observation.
- [availableJointsGroupNames](availablejointsgroupnames.md): The available joint group names in the observation.
- [VNHumanBodyPoseObservationJointsGroupName](jointsgroupname.md): The supported joint group names for the body pose.
- [recognizedPointForJointName:error:](recognizedpoint%28__%29.md): Retrieves the recognized point for a joint name.
- [recognizedPointsForJointsGroupName:error:](recognizedpoints%28__%29.md): Retrieves the recognized points associated with the joint group name.
