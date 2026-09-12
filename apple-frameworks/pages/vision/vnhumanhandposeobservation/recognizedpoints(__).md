> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnhumanhandposeobservation/recognizedpoints(_:)](https://developer.apple.com/documentation/vision/vnhumanhandposeobservation/recognizedpoints(_:))

# recognizedPoints(\_:) (Swift)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Retrieves the recognized points associated with the joint group name.

## Declaration

```swift
func recognizedPoints(_ jointsGroupName: VNHumanHandPoseObservation.JointsGroupName) throws -> [VNHumanHandPoseObservation.JointName : VNRecognizedPoint]
```

## Parameters

- `jointsGroupName`: The joint group name of the points to retrieve.

<a id="return-value"></a>

## Return Value

The array of points associated with the joint group name.

## See Also

### Retrieving Points

- [availableJointNames](availablejointnames.md): The names of the available joints in the observation.
- [VNHumanHandPoseObservation.JointName](jointname.md): The supported joint names for the hand pose.
- [availableJointsGroupNames](availablejointsgroupnames.md): The joint group names available in the observation.
- [VNHumanHandPoseObservation.JointsGroupName](jointsgroupname.md): The supported joint group names for the hand pose.
- [recognizedPoint(\_:)](recognizedpoint%28__%29.md): Retrieves the recognized point for a joint name.

# recognizedPointsForJointsGroupName:error: (Objective-C)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Retrieves the recognized points associated with the joint group name.

## Declaration

```objectivec
- (NSDictionary<NSString *,VNRecognizedPoint *> *) recognizedPointsForJointsGroupName:(VNHumanHandPoseObservationJointsGroupName) jointsGroupName error:(NSError **) error;
```

## Parameters

- `jointsGroupName`: The joint group name of the points to retrieve.
- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="return-value"></a>

## Return Value

The array of points associated with the joint group name. On failure, this method returns `nil`.

## See Also

### Retrieving Points

- [availableJointNames](availablejointnames.md): The names of the available joints in the observation.
- [VNHumanHandPoseObservationJointName](jointname.md): The supported joint names for the hand pose.
- [availableJointsGroupNames](availablejointsgroupnames.md): The joint group names available in the observation.
- [VNHumanHandPoseObservationJointsGroupName](jointsgroupname.md): The supported joint group names for the hand pose.
- [recognizedPointForJointName:error:](recognizedpoint%28__%29.md): Retrieves the recognized point for a joint name.
