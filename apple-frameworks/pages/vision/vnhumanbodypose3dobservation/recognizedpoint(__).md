> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnhumanbodypose3dobservation/recognizedpoint(_:)](https://developer.apple.com/documentation/vision/vnhumanbodypose3dobservation/recognizedpoint(_:))

# recognizedPoint(\_:) (Swift)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Returns the point for a joint name that the observation recognizes.

## Declaration

```swift
func recognizedPoint(_ jointName: VNHumanBodyPose3DObservation.JointName) throws -> VNHumanBodyRecognizedPoint3D
```

## Parameters

- `jointName`: The joint name to retrieve.

<a id="return-value"></a>

## Return Value

The point for the joint name.

## See Also

### Accessing Points

- [availableJointNames](availablejointnames.md): The names of the available joints in the observation.
- [VNHumanBodyPose3DObservation.JointName](jointname.md): The joint names for a 3D body pose.
- [availableJointsGroupNames](availablejointsgroupnames.md): The available joint group names in the observation.
- [VNHumanBodyPose3DObservation.JointsGroupName](jointsgroupname.md): The joint group names for a 3D body pose.
- [recognizedPoints(\_:)](recognizedpoints%28__%29.md): Returns a collection of points for the group name you specify.

# recognizedPointForJointName:error: (Objective-C)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Returns the point for a joint name that the observation recognizes.

## Declaration

```objectivec
- (VNHumanBodyRecognizedPoint3D *) recognizedPointForJointName:(VNHumanBodyPose3DObservationJointName) jointName error:(NSError **) error;
```

## Parameters

- `jointName`: The joint name to retrieve.
- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="return-value"></a>

## Return Value

The point for the joint name. On failure, this method returns `nil`.

## See Also

### Accessing Points

- [availableJointNames](availablejointnames.md): The names of the available joints in the observation.
- [VNHumanBodyPose3DObservationJointName](jointname.md): The joint names for a 3D body pose.
- [availableJointsGroupNames](availablejointsgroupnames.md): The available joint group names in the observation.
- [VNHumanBodyPose3DObservationJointsGroupName](jointsgroupname.md): The joint group names for a 3D body pose.
- [recognizedPointsForJointsGroupName:error:](recognizedpoints%28__%29.md): Returns a collection of points for the group name you specify.
