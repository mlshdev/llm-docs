> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnanimalbodyposeobservation/jointname](https://developer.apple.com/documentation/vision/vnanimalbodyposeobservation/jointname)

# VNAnimalBodyPoseObservation.JointName (Swift)

**Framework:** Vision  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

The joint names for an animal body pose.

## Declaration

```swift
struct JointName
```

## Topics

### Getting the Head Joint Names

- [leftEarTop](jointname/lefteartop.md): A joint name that represents the top of the left ear.
- [leftEarMiddle](jointname/leftearmiddle.md): A joint name that represents the middle of the left ear.
- [leftEarBottom](jointname/leftearbottom.md): A joint name that represents the bottom of the left ear.
- [leftEye](jointname/lefteye.md): A joint name that represents the left eye.
- [neck](jointname/neck.md): A joint name that represents the neck.
- [nose](jointname/nose.md): A joint name that represents the nose.
- [rightEye](jointname/righteye.md): A joint name that represents the right eye.
- [rightEarTop](jointname/righteartop.md): A joint name that represents the top of the right ear.
- [rightEarMiddle](jointname/rightearmiddle.md): A joint name that represents the middle of the right ear.
- [rightEarBottom](jointname/rightearbottom.md): A joint name that represents the bottom of the right ear.

### Getting the Leg Joint Names

- [leftBackElbow](jointname/leftbackelbow.md): A joint name that represents the back of the left elbow.
- [leftFrontElbow](jointname/leftfrontelbow.md): A joint name that represents the front of the left elbow.
- [rightFrontElbow](jointname/rightfrontelbow.md): A joint name that represents the front of the right elbow.
- [rightBackElbow](jointname/rightbackelbow.md): A joint name that represents the back of the right elbow.
- [leftBackKnee](jointname/leftbackknee.md): A joint name that represents the back of the left knee.
- [leftFrontKnee](jointname/leftfrontknee.md): A joint name that represents the front of the left knee.
- [rightBackKnee](jointname/rightbackknee.md): A joint name that represents the back of the right knee.
- [rightFrontKnee](jointname/rightfrontknee.md): A joint name that represents the front of the right knee.
- [leftBackPaw](jointname/leftbackpaw.md): A joint name that represents the back of the left paw.
- [leftFrontPaw](jointname/leftfrontpaw.md): A joint name that represents the front of the left paw.
- [rightBackPaw](jointname/rightbackpaw.md): A joint name that represents the back of the right paw.
- [rightFrontPaw](jointname/rightfrontpaw.md): A joint name that represents the front of the right paw.

### Getting the Tail Joint Names

- [tailTop](jointname/tailtop.md): A joint name that represents the top of the tail.
- [tailMiddle](jointname/tailmiddle.md): A joint name that represents the middle of the tail.
- [tailBottom](jointname/tailbottom.md): A joint name that represents the bottom of the tail.

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

### Accessing Points

- [availableJointNames](availablejointnames.md): The names of the available joints in the observation.
- [availableJointGroupNames](availablejointgroupnames.md): The available joint group names in the observation.
- [VNAnimalBodyPoseObservation.JointsGroupName](jointsgroupname.md): The joint group names for an animal body pose.
- [recognizedPoint(\_:)](recognizedpoint%28__%29.md): Returns the point for a joint name the observation recognizes.
- [recognizedPoints(\_:)](recognizedpoints%28__%29.md): Returns the points for a joint group name the observation recognizes.

# VNAnimalBodyPoseObservationJointName (Objective-C)

**Framework:** Vision  
**Kind:** Type Alias  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

The joint names for an animal body pose.

## Declaration

```objectivec
typedef VNRecognizedPointKey VNAnimalBodyPoseObservationJointName;
```

## Topics

### Getting the Head Joint Names

- [VNAnimalBodyPoseObservationJointNameLeftEarTop](jointname/lefteartop.md): A joint name that represents the top of the left ear.
- [VNAnimalBodyPoseObservationJointNameLeftEarMiddle](jointname/leftearmiddle.md): A joint name that represents the middle of the left ear.
- [VNAnimalBodyPoseObservationJointNameLeftEarBottom](jointname/leftearbottom.md): A joint name that represents the bottom of the left ear.
- [VNAnimalBodyPoseObservationJointNameLeftEye](jointname/lefteye.md): A joint name that represents the left eye.
- [VNAnimalBodyPoseObservationJointNameNeck](jointname/neck.md): A joint name that represents the neck.
- [VNAnimalBodyPoseObservationJointNameNose](jointname/nose.md): A joint name that represents the nose.
- [VNAnimalBodyPoseObservationJointNameRightEye](jointname/righteye.md): A joint name that represents the right eye.
- [VNAnimalBodyPoseObservationJointNameRightEarTop](jointname/righteartop.md): A joint name that represents the top of the right ear.
- [VNAnimalBodyPoseObservationJointNameRightEarMiddle](jointname/rightearmiddle.md): A joint name that represents the middle of the right ear.
- [VNAnimalBodyPoseObservationJointNameRightEarBottom](jointname/rightearbottom.md): A joint name that represents the bottom of the right ear.

### Getting the Leg Joint Names

- [VNAnimalBodyPoseObservationJointNameLeftBackElbow](jointname/leftbackelbow.md): A joint name that represents the back of the left elbow.
- [VNAnimalBodyPoseObservationJointNameLeftFrontElbow](jointname/leftfrontelbow.md): A joint name that represents the front of the left elbow.
- [VNAnimalBodyPoseObservationJointNameRightFrontElbow](jointname/rightfrontelbow.md): A joint name that represents the front of the right elbow.
- [VNAnimalBodyPoseObservationJointNameRightBackElbow](jointname/rightbackelbow.md): A joint name that represents the back of the right elbow.
- [VNAnimalBodyPoseObservationJointNameLeftBackKnee](jointname/leftbackknee.md): A joint name that represents the back of the left knee.
- [VNAnimalBodyPoseObservationJointNameLeftFrontKnee](jointname/leftfrontknee.md): A joint name that represents the front of the left knee.
- [VNAnimalBodyPoseObservationJointNameRightBackKnee](jointname/rightbackknee.md): A joint name that represents the back of the right knee.
- [VNAnimalBodyPoseObservationJointNameRightFrontKnee](jointname/rightfrontknee.md): A joint name that represents the front of the right knee.
- [VNAnimalBodyPoseObservationJointNameLeftBackPaw](jointname/leftbackpaw.md): A joint name that represents the back of the left paw.
- [VNAnimalBodyPoseObservationJointNameLeftFrontPaw](jointname/leftfrontpaw.md): A joint name that represents the front of the left paw.
- [VNAnimalBodyPoseObservationJointNameRightBackPaw](jointname/rightbackpaw.md): A joint name that represents the back of the right paw.
- [VNAnimalBodyPoseObservationJointNameRightFrontPaw](jointname/rightfrontpaw.md): A joint name that represents the front of the right paw.

### Getting the Tail Joint Names

- [VNAnimalBodyPoseObservationJointNameTailTop](jointname/tailtop.md): A joint name that represents the top of the tail.
- [VNAnimalBodyPoseObservationJointNameTailMiddle](jointname/tailmiddle.md): A joint name that represents the middle of the tail.
- [VNAnimalBodyPoseObservationJointNameTailBottom](jointname/tailbottom.md): A joint name that represents the bottom of the tail.

## See Also

### Accessing Points

- [availableJointNames](availablejointnames.md): The names of the available joints in the observation.
- [availableJointGroupNames](availablejointgroupnames.md): The available joint group names in the observation.
- [VNAnimalBodyPoseObservationJointsGroupName](jointsgroupname.md): The joint group names for an animal body pose.
- [recognizedPointForJointName:error:](recognizedpoint%28__%29.md): Returns the point for a joint name the observation recognizes.
- [recognizedPointsForJointsGroupName:error:](recognizedpoints%28__%29.md): Returns the points for a joint group name the observation recognizes.
