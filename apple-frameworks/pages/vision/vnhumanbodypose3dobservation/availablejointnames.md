> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnhumanbodypose3dobservation/availablejointnames](https://developer.apple.com/documentation/vision/vnhumanbodypose3dobservation/availablejointnames)

# availableJointNames (Swift)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

The names of the available joints in the observation.

## Declaration

```swift
var availableJointNames: [VNHumanBodyPose3DObservation.JointName] { get }
```

## See Also

### Accessing Points

- [VNHumanBodyPose3DObservation.JointName](jointname.md): The joint names for a 3D body pose.
- [availableJointsGroupNames](availablejointsgroupnames.md): The available joint group names in the observation.
- [VNHumanBodyPose3DObservation.JointsGroupName](jointsgroupname.md): The joint group names for a 3D body pose.
- [recognizedPoint(\_:)](recognizedpoint%28__%29.md): Returns the point for a joint name that the observation recognizes.
- [recognizedPoints(\_:)](recognizedpoints%28__%29.md): Returns a collection of points for the group name you specify.

# availableJointNames (Objective-C)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

The names of the available joints in the observation.

## Declaration

```objectivec
@property (copy, readonly) NSArray<NSString *> * availableJointNames;
```

## See Also

### Accessing Points

- [VNHumanBodyPose3DObservationJointName](jointname.md): The joint names for a 3D body pose.
- [availableJointsGroupNames](availablejointsgroupnames.md): The available joint group names in the observation.
- [VNHumanBodyPose3DObservationJointsGroupName](jointsgroupname.md): The joint group names for a 3D body pose.
- [recognizedPointForJointName:error:](recognizedpoint%28__%29.md): Returns the point for a joint name that the observation recognizes.
- [recognizedPointsForJointsGroupName:error:](recognizedpoints%28__%29.md): Returns a collection of points for the group name you specify.
