> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnhumanbodypose3dobservation/recognizedpoints(_:)](https://developer.apple.com/documentation/vision/vnhumanbodypose3dobservation/recognizedpoints(_:))

# recognizedPoints(\_:) (Swift)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Returns a collection of points for the group name you specify.

## Declaration

```swift
func recognizedPoints(_ jointsGroupName: VNHumanBodyPose3DObservation.JointsGroupName) throws -> [VNHumanBodyPose3DObservation.JointName : VNHumanBodyRecognizedPoint3D]
```

## Parameters

- `jointsGroupName`: The name of the human body joints group.

<a id="return-value"></a>

## Return Value

A collection of points.

## See Also

### Accessing Points

- [availableJointNames](availablejointnames.md): The names of the available joints in the observation.
- [VNHumanBodyPose3DObservation.JointName](jointname.md): The joint names for a 3D body pose.
- [availableJointsGroupNames](availablejointsgroupnames.md): The available joint group names in the observation.
- [VNHumanBodyPose3DObservation.JointsGroupName](jointsgroupname.md): The joint group names for a 3D body pose.
- [recognizedPoint(\_:)](recognizedpoint%28__%29.md): Returns the point for a joint name that the observation recognizes.

# recognizedPointsForJointsGroupName:error: (Objective-C)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Returns a collection of points for the group name you specify.

## Declaration

```objectivec
- (NSDictionary<NSString *,VNHumanBodyRecognizedPoint3D *> *) recognizedPointsForJointsGroupName:(VNHumanBodyPose3DObservationJointsGroupName) jointsGroupName error:(NSError **) error;
```

## Parameters

- `jointsGroupName`: The name of the human body joints group.
- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="return-value"></a>

## Return Value

A collection of points. On failure, this method returns `nil`.

## See Also

### Accessing Points

- [availableJointNames](availablejointnames.md): The names of the available joints in the observation.
- [VNHumanBodyPose3DObservationJointName](jointname.md): The joint names for a 3D body pose.
- [availableJointsGroupNames](availablejointsgroupnames.md): The available joint group names in the observation.
- [VNHumanBodyPose3DObservationJointsGroupName](jointsgroupname.md): The joint group names for a 3D body pose.
- [recognizedPointForJointName:error:](recognizedpoint%28__%29.md): Returns the point for a joint name that the observation recognizes.
