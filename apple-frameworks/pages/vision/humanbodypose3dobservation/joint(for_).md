> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/humanbodypose3dobservation/joint(for:)](https://developer.apple.com/documentation/vision/humanbodypose3dobservation/joint(for:))

# joint(for:)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

Retrieves a joint for a given joint name.

## Declaration

```swift
func joint(for jointName: HumanBodyPose3DObservation.JointName) -> Joint3D?
```

## See Also

### Getting the joints

- [allJoints(in:)](alljoints%28in_%29.md): Retrieves a dictionary of all joints in a joint group.
- [availableJointsGroupNames](availablejointsgroupnames.md): The names of the available joint groupings in the observation.
- [HumanBodyPose3DObservation.JointsGroupName](jointsgroupname.md): The supported joint group names for the body pose.
- [availableJointNames](availablejointnames.md): The names of the available joints in the observation.
- [HumanBodyPose3DObservation.JointName](jointname.md): The supported joint names for the body pose.
