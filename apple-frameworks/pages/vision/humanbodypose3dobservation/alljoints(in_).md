> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/vision/humanbodypose3dobservation/alljoints(in:)

# allJoints(in:)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

Retrieves a dictionary of all joints in a joint group.

## Declaration

```swift
func allJoints(in groupName: HumanBodyPose3DObservation.JointsGroupName? = nil) -> [HumanBodyPose3DObservation.JointName : Joint3D]
```

## See Also

### Getting the joints

- [availableJointsGroupNames](availablejointsgroupnames.md): The names of the available joint groupings in the observation.
- [HumanBodyPose3DObservation.JointsGroupName](jointsgroupname.md): The supported joint group names for the body pose.
- [joint(for:)](joint%28for_%29.md): Retrieves a joint for a given joint name.
- [availableJointNames](availablejointnames.md): The names of the available joints in the observation.
- [HumanBodyPose3DObservation.JointName](jointname.md): The supported joint names for the body pose.
