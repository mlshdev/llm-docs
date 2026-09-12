> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnhumanbodyposeobservation/availablejointsgroupnames](https://developer.apple.com/documentation/vision/vnhumanbodyposeobservation/availablejointsgroupnames)

# availableJointsGroupNames (Swift)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The available joint group names in the observation.

## Declaration

```swift
var availableJointsGroupNames: [VNHumanBodyPoseObservation.JointsGroupName] { get }
```

## See Also

### Accessing Points

- [availableJointNames](availablejointnames.md): The names of the available joints in the observation.
- [VNHumanBodyPoseObservation.JointName](jointname.md): The supported joint names for the body pose.
- [VNHumanBodyPoseObservation.JointsGroupName](jointsgroupname.md): The supported joint group names for the body pose.
- [recognizedPoint(\_:)](recognizedpoint%28__%29.md): Retrieves the recognized point for a joint name.
- [recognizedPoints(\_:)](recognizedpoints%28__%29.md): Retrieves the recognized points associated with the joint group name.

# availableJointsGroupNames (Objective-C)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The available joint group names in the observation.

## Declaration

```objectivec
@property (copy, readonly) NSArray<NSString *> * availableJointsGroupNames;
```

## See Also

### Accessing Points

- [availableJointNames](availablejointnames.md): The names of the available joints in the observation.
- [VNHumanBodyPoseObservationJointName](jointname.md): The supported joint names for the body pose.
- [VNHumanBodyPoseObservationJointsGroupName](jointsgroupname.md): The supported joint group names for the body pose.
- [recognizedPointForJointName:error:](recognizedpoint%28__%29.md): Retrieves the recognized point for a joint name.
- [recognizedPointsForJointsGroupName:error:](recognizedpoints%28__%29.md): Retrieves the recognized points associated with the joint group name.
