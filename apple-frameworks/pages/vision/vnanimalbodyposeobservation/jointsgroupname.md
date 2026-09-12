> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnanimalbodyposeobservation/jointsgroupname](https://developer.apple.com/documentation/vision/vnanimalbodyposeobservation/jointsgroupname)

# VNAnimalBodyPoseObservation.JointsGroupName (Swift)

**Framework:** Vision  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

The joint group names for an animal body pose.

## Declaration

```swift
struct JointsGroupName
```

## Topics

### Getting the Group Names

- [all](jointsgroupname/all.md): A group name that represents all joints.
- [forelegs](jointsgroupname/forelegs.md): A group name that represents the forelegs.
- [head](jointsgroupname/head.md): A group name that represents the head.
- [hindlegs](jointsgroupname/hindlegs.md): A group name that represents the hindlegs.
- [tail](jointsgroupname/tail.md): A group name that represents the tail.
- [trunk](jointsgroupname/trunk.md): A group name that represents the trunk.

### Creating a Group Name

- [init(rawValue:)](jointsgroupname/init%28rawvalue_%29.md): Creates a joint name with the key you specify.

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
- [VNAnimalBodyPoseObservation.JointName](jointname.md): The joint names for an animal body pose.
- [availableJointGroupNames](availablejointgroupnames.md): The available joint group names in the observation.
- [recognizedPoint(\_:)](recognizedpoint%28__%29.md): Returns the point for a joint name the observation recognizes.
- [recognizedPoints(\_:)](recognizedpoints%28__%29.md): Returns the points for a joint group name the observation recognizes.

# VNAnimalBodyPoseObservationJointsGroupName (Objective-C)

**Framework:** Vision  
**Kind:** Type Alias  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

The joint group names for an animal body pose.

## Declaration

```objectivec
typedef VNRecognizedPointGroupKey VNAnimalBodyPoseObservationJointsGroupName;
```

## Topics

### Getting the Group Names

- [VNAnimalBodyPoseObservationJointsGroupNameAll](jointsgroupname/all.md): A group name that represents all joints.
- [VNAnimalBodyPoseObservationJointsGroupNameForelegs](jointsgroupname/forelegs.md): A group name that represents the forelegs.
- [VNAnimalBodyPoseObservationJointsGroupNameHead](jointsgroupname/head.md): A group name that represents the head.
- [VNAnimalBodyPoseObservationJointsGroupNameHindlegs](jointsgroupname/hindlegs.md): A group name that represents the hindlegs.
- [VNAnimalBodyPoseObservationJointsGroupNameTail](jointsgroupname/tail.md): A group name that represents the tail.
- [VNAnimalBodyPoseObservationJointsGroupNameTrunk](jointsgroupname/trunk.md): A group name that represents the trunk.

## See Also

### Accessing Points

- [availableJointNames](availablejointnames.md): The names of the available joints in the observation.
- [VNAnimalBodyPoseObservationJointName](jointname.md): The joint names for an animal body pose.
- [availableJointGroupNames](availablejointgroupnames.md): The available joint group names in the observation.
- [recognizedPointForJointName:error:](recognizedpoint%28__%29.md): Returns the point for a joint name the observation recognizes.
- [recognizedPointsForJointsGroupName:error:](recognizedpoints%28__%29.md): Returns the points for a joint group name the observation recognizes.
