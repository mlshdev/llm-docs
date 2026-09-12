> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnanimalbodyposeobservation/recognizedpoints(_:)](https://developer.apple.com/documentation/vision/vnanimalbodyposeobservation/recognizedpoints(_:))

# recognizedPoints(\_:) (Swift)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Returns the points for a joint group name the observation recognizes.

## Declaration

```swift
func recognizedPoints(_ jointsGroupName: VNAnimalBodyPoseObservation.JointsGroupName) throws -> [VNAnimalBodyPoseObservation.JointName : VNRecognizedPoint]
```

## Parameters

- `jointsGroupName`: The joint group of the points to retrieve.

<a id="return-value"></a>

## Return Value

The dictionary of points the observation associates with the group name.

## See Also

### Accessing Points

- [availableJointNames](availablejointnames.md): The names of the available joints in the observation.
- [VNAnimalBodyPoseObservation.JointName](jointname.md): The joint names for an animal body pose.
- [availableJointGroupNames](availablejointgroupnames.md): The available joint group names in the observation.
- [VNAnimalBodyPoseObservation.JointsGroupName](jointsgroupname.md): The joint group names for an animal body pose.
- [recognizedPoint(\_:)](recognizedpoint%28__%29.md): Returns the point for a joint name the observation recognizes.

# recognizedPointsForJointsGroupName:error: (Objective-C)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Returns the points for a joint group name the observation recognizes.

## Declaration

```objectivec
- (NSDictionary<NSString *,VNRecognizedPoint *> *) recognizedPointsForJointsGroupName:(VNAnimalBodyPoseObservationJointsGroupName) jointsGroupName error:(NSError **) error;
```

## Parameters

- `jointsGroupName`: The joint group of the points to retrieve.
- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="return-value"></a>

## Return Value

The dictionary of points the observation associates with the group name. On failure, this method returns `nil`.

## See Also

### Accessing Points

- [availableJointNames](availablejointnames.md): The names of the available joints in the observation.
- [VNAnimalBodyPoseObservationJointName](jointname.md): The joint names for an animal body pose.
- [availableJointGroupNames](availablejointgroupnames.md): The available joint group names in the observation.
- [VNAnimalBodyPoseObservationJointsGroupName](jointsgroupname.md): The joint group names for an animal body pose.
- [recognizedPointForJointName:error:](recognizedpoint%28__%29.md): Returns the point for a joint name the observation recognizes.
