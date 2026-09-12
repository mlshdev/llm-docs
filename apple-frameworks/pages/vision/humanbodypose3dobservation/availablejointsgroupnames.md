> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/humanbodypose3dobservation/availablejointsgroupnames](https://developer.apple.com/documentation/vision/humanbodypose3dobservation/availablejointsgroupnames)

# availableJointsGroupNames

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

The names of the available joint groupings in the observation.

## Declaration

```swift
var availableJointsGroupNames: [HumanBodyPose3DObservation.JointsGroupName] { get }
```

## See Also

### Getting the joints

- [allJoints(in:)](alljoints%28in_%29.md): Retrieves a dictionary of all joints in a joint group.
- [HumanBodyPose3DObservation.JointsGroupName](jointsgroupname.md): The supported joint group names for the body pose.
- [joint(for:)](joint%28for_%29.md): Retrieves a joint for a given joint name.
- [availableJointNames](availablejointnames.md): The names of the available joints in the observation.
- [HumanBodyPose3DObservation.JointName](jointname.md): The supported joint names for the body pose.
