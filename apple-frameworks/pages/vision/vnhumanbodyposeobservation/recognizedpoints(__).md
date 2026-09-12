> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnhumanbodyposeobservation/recognizedpoints(_:)](https://developer.apple.com/documentation/vision/vnhumanbodyposeobservation/recognizedpoints(_:))

# recognizedPoints(\_:) (Swift)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Retrieves the recognized points associated with the joint group name.

## Declaration

```swift
func recognizedPoints(_ jointsGroupName: VNHumanBodyPoseObservation.JointsGroupName) throws -> [VNHumanBodyPoseObservation.JointName : VNRecognizedPoint]
```

## Parameters

- `jointsGroupName`: The joint group name of the points to retrieve.

<a id="return-value"></a>

## Return Value

The array of points associated with the joint group name.

## Mentioned In

- [Detecting Human Body Poses in Images](../detecting-human-body-poses-in-images.md)

## See Also

### Accessing Points

- [availableJointNames](availablejointnames.md): The names of the available joints in the observation.
- [VNHumanBodyPoseObservation.JointName](jointname.md): The supported joint names for the body pose.
- [availableJointsGroupNames](availablejointsgroupnames.md): The available joint group names in the observation.
- [VNHumanBodyPoseObservation.JointsGroupName](jointsgroupname.md): The supported joint group names for the body pose.
- [recognizedPoint(\_:)](recognizedpoint%28__%29.md): Retrieves the recognized point for a joint name.

# recognizedPointsForJointsGroupName:error: (Objective-C)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Retrieves the recognized points associated with the joint group name.

## Declaration

```objectivec
- (NSDictionary<NSString *,VNRecognizedPoint *> *) recognizedPointsForJointsGroupName:(VNHumanBodyPoseObservationJointsGroupName) jointsGroupName error:(NSError **) error;
```

## Parameters

- `jointsGroupName`: The joint group name of the points to retrieve.
- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="return-value"></a>

## Return Value

The array of points associated with the joint group name. On failure, this method returns `nil`.

## Mentioned In

- [Detecting Human Body Poses in Images](../detecting-human-body-poses-in-images.md)

## See Also

### Accessing Points

- [availableJointNames](availablejointnames.md): The names of the available joints in the observation.
- [VNHumanBodyPoseObservationJointName](jointname.md): The supported joint names for the body pose.
- [availableJointsGroupNames](availablejointsgroupnames.md): The available joint group names in the observation.
- [VNHumanBodyPoseObservationJointsGroupName](jointsgroupname.md): The supported joint group names for the body pose.
- [recognizedPointForJointName:error:](recognizedpoint%28__%29.md): Retrieves the recognized point for a joint name.
