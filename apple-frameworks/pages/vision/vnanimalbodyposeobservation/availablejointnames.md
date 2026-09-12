> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnanimalbodyposeobservation/availablejointnames](https://developer.apple.com/documentation/vision/vnanimalbodyposeobservation/availablejointnames)

# availableJointNames (Swift)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

The names of the available joints in the observation.

## Declaration

```swift
var availableJointNames: [VNAnimalBodyPoseObservation.JointName] { get }
```

## See Also

### Accessing Points

- [VNAnimalBodyPoseObservation.JointName](jointname.md): The joint names for an animal body pose.
- [availableJointGroupNames](availablejointgroupnames.md): The available joint group names in the observation.
- [VNAnimalBodyPoseObservation.JointsGroupName](jointsgroupname.md): The joint group names for an animal body pose.
- [recognizedPoint(\_:)](recognizedpoint%28__%29.md): Returns the point for a joint name the observation recognizes.
- [recognizedPoints(\_:)](recognizedpoints%28__%29.md): Returns the points for a joint group name the observation recognizes.

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

- [VNAnimalBodyPoseObservationJointName](jointname.md): The joint names for an animal body pose.
- [availableJointGroupNames](availablejointgroupnames.md): The available joint group names in the observation.
- [VNAnimalBodyPoseObservationJointsGroupName](jointsgroupname.md): The joint group names for an animal body pose.
- [recognizedPointForJointName:error:](recognizedpoint%28__%29.md): Returns the point for a joint name the observation recognizes.
- [recognizedPointsForJointsGroupName:error:](recognizedpoints%28__%29.md): Returns the points for a joint group name the observation recognizes.
