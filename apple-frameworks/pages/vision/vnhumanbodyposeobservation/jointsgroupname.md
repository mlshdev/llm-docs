> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnhumanbodyposeobservation/jointsgroupname](https://developer.apple.com/documentation/vision/vnhumanbodyposeobservation/jointsgroupname)

# VNHumanBodyPoseObservation.JointsGroupName (Swift)

**Framework:** Vision  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The supported joint group names for the body pose.

## Declaration

```swift
struct JointsGroupName
```

## Mentioned In

- [Detecting Human Body Poses in Images](../detecting-human-body-poses-in-images.md)

## Topics

### Head

- [face](jointsgroupname/face.md): The face.

### Body

- [torso](jointsgroupname/torso.md): The torso.

### Arms

- [leftArm](jointsgroupname/leftarm.md): The left arm.
- [rightArm](jointsgroupname/rightarm.md): The right arm.

### Legs

- [leftLeg](jointsgroupname/leftleg.md): The left leg.
- [rightLeg](jointsgroupname/rightleg.md): The right leg.

### All

- [all](jointsgroupname/all.md): All body point groups.

### Initializers

- [init(rawValue:)](jointsgroupname/init%28rawvalue_%29.md): Creates a joint group name with a recognized point group key.

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
- [VNHumanBodyPoseObservation.JointName](jointname.md): The supported joint names for the body pose.
- [availableJointsGroupNames](availablejointsgroupnames.md): The available joint group names in the observation.
- [recognizedPoint(\_:)](recognizedpoint%28__%29.md): Retrieves the recognized point for a joint name.
- [recognizedPoints(\_:)](recognizedpoints%28__%29.md): Retrieves the recognized points associated with the joint group name.

# VNHumanBodyPoseObservationJointsGroupName (Objective-C)

**Framework:** Vision  
**Kind:** Type Alias  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The supported joint group names for the body pose.

## Declaration

```objectivec
typedef VNRecognizedPointGroupKey VNHumanBodyPoseObservationJointsGroupName;
```

## Mentioned In

- [Detecting Human Body Poses in Images](../detecting-human-body-poses-in-images.md)

## Topics

### Head

- [VNHumanBodyPoseObservationJointsGroupNameFace](jointsgroupname/face.md): The face.

### Body

- [VNHumanBodyPoseObservationJointsGroupNameTorso](jointsgroupname/torso.md): The torso.

### Arms

- [VNHumanBodyPoseObservationJointsGroupNameLeftArm](jointsgroupname/leftarm.md): The left arm.
- [VNHumanBodyPoseObservationJointsGroupNameRightArm](jointsgroupname/rightarm.md): The right arm.

### Legs

- [VNHumanBodyPoseObservationJointsGroupNameLeftLeg](jointsgroupname/leftleg.md): The left leg.
- [VNHumanBodyPoseObservationJointsGroupNameRightLeg](jointsgroupname/rightleg.md): The right leg.

### All

- [VNHumanBodyPoseObservationJointsGroupNameAll](jointsgroupname/all.md): All body point groups.

## See Also

### Accessing Points

- [availableJointNames](availablejointnames.md): The names of the available joints in the observation.
- [VNHumanBodyPoseObservationJointName](jointname.md): The supported joint names for the body pose.
- [availableJointsGroupNames](availablejointsgroupnames.md): The available joint group names in the observation.
- [recognizedPointForJointName:error:](recognizedpoint%28__%29.md): Retrieves the recognized point for a joint name.
- [recognizedPointsForJointsGroupName:error:](recognizedpoints%28__%29.md): Retrieves the recognized points associated with the joint group name.
