> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/humanbodypose3dobservation/jointsgroupname](https://developer.apple.com/documentation/vision/humanbodypose3dobservation/jointsgroupname)

# HumanBodyPose3DObservation.JointsGroupName

**Framework:** Vision  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

The supported joint group names for the body pose.

## Declaration

```swift
enum JointsGroupName
```

## Topics

### Getting the group names

- [HumanBodyPose3DObservation.JointsGroupName.head](jointsgroupname/head.md)
- [HumanBodyPose3DObservation.JointsGroupName.leftArm](jointsgroupname/leftarm.md)
- [HumanBodyPose3DObservation.JointsGroupName.leftLeg](jointsgroupname/leftleg.md)
- [HumanBodyPose3DObservation.JointsGroupName.rightArm](jointsgroupname/rightarm.md)
- [HumanBodyPose3DObservation.JointsGroupName.rightLeg](jointsgroupname/rightleg.md)
- [HumanBodyPose3DObservation.JointsGroupName.torso](jointsgroupname/torso.md)

## Relationships

### Conforms To

- [CaseIterable](https://developer.apple.com/documentation/swift/caseiterable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the joints

- [allJoints(in:)](alljoints%28in_%29.md): Retrieves a dictionary of all joints in a joint group.
- [availableJointsGroupNames](availablejointsgroupnames.md): The names of the available joint groupings in the observation.
- [joint(for:)](joint%28for_%29.md): Retrieves a joint for a given joint name.
- [availableJointNames](availablejointnames.md): The names of the available joints in the observation.
- [HumanBodyPose3DObservation.JointName](jointname.md): The supported joint names for the body pose.
