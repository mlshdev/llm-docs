> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnhumanhandposeobservation/availablejointsgroupnames](https://developer.apple.com/documentation/vision/vnhumanhandposeobservation/availablejointsgroupnames)

# availableJointsGroupNames (Swift)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The joint group names available in the observation.

## Declaration

```swift
var availableJointsGroupNames: [VNHumanHandPoseObservation.JointsGroupName] { get }
```

## See Also

### Retrieving Points

- [availableJointNames](availablejointnames.md): The names of the available joints in the observation.
- [VNHumanHandPoseObservation.JointName](jointname.md): The supported joint names for the hand pose.
- [VNHumanHandPoseObservation.JointsGroupName](jointsgroupname.md): The supported joint group names for the hand pose.
- [recognizedPoint(\_:)](recognizedpoint%28__%29.md): Retrieves the recognized point for a joint name.
- [recognizedPoints(\_:)](recognizedpoints%28__%29.md): Retrieves the recognized points associated with the joint group name.

# availableJointsGroupNames (Objective-C)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The joint group names available in the observation.

## Declaration

```objectivec
@property (copy, readonly) NSArray<NSString *> * availableJointsGroupNames;
```

## See Also

### Retrieving Points

- [availableJointNames](availablejointnames.md): The names of the available joints in the observation.
- [VNHumanHandPoseObservationJointName](jointname.md): The supported joint names for the hand pose.
- [VNHumanHandPoseObservationJointsGroupName](jointsgroupname.md): The supported joint group names for the hand pose.
- [recognizedPointForJointName:error:](recognizedpoint%28__%29.md): Retrieves the recognized point for a joint name.
- [recognizedPointsForJointsGroupName:error:](recognizedpoints%28__%29.md): Retrieves the recognized points associated with the joint group name.
