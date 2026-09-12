> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnhumanhandposeobservation/availablejointnames](https://developer.apple.com/documentation/vision/vnhumanhandposeobservation/availablejointnames)

# availableJointNames (Swift)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The names of the available joints in the observation.

## Declaration

```swift
var availableJointNames: [VNHumanHandPoseObservation.JointName] { get }
```

## See Also

### Retrieving Points

- [VNHumanHandPoseObservation.JointName](jointname.md): The supported joint names for the hand pose.
- [availableJointsGroupNames](availablejointsgroupnames.md): The joint group names available in the observation.
- [VNHumanHandPoseObservation.JointsGroupName](jointsgroupname.md): The supported joint group names for the hand pose.
- [recognizedPoint(\_:)](recognizedpoint%28__%29.md): Retrieves the recognized point for a joint name.
- [recognizedPoints(\_:)](recognizedpoints%28__%29.md): Retrieves the recognized points associated with the joint group name.

# availableJointNames (Objective-C)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The names of the available joints in the observation.

## Declaration

```objectivec
@property (copy, readonly) NSArray<NSString *> * availableJointNames;
```

## See Also

### Retrieving Points

- [VNHumanHandPoseObservationJointName](jointname.md): The supported joint names for the hand pose.
- [availableJointsGroupNames](availablejointsgroupnames.md): The joint group names available in the observation.
- [VNHumanHandPoseObservationJointsGroupName](jointsgroupname.md): The supported joint group names for the hand pose.
- [recognizedPointForJointName:error:](recognizedpoint%28__%29.md): Retrieves the recognized point for a joint name.
- [recognizedPointsForJointsGroupName:error:](recognizedpoints%28__%29.md): Retrieves the recognized points associated with the joint group name.
