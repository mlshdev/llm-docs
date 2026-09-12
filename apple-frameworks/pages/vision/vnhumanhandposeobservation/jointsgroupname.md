> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnhumanhandposeobservation/jointsgroupname](https://developer.apple.com/documentation/vision/vnhumanhandposeobservation/jointsgroupname)

# VNHumanHandPoseObservation.JointsGroupName (Swift)

**Framework:** Vision  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The supported joint group names for the hand pose.

## Declaration

```swift
struct JointsGroupName
```

## Topics

### Group Names

- [thumb](jointsgroupname/thumb.md): The thumb.
- [indexFinger](jointsgroupname/indexfinger.md): The index finger.
- [littleFinger](jointsgroupname/littlefinger.md): The little finger.
- [middleFinger](jointsgroupname/middlefinger.md): The middle finger.
- [ringFinger](jointsgroupname/ringfinger.md): The ring finger.
- [all](jointsgroupname/all.md): All hand group names.

### Initializers

- [init(rawValue:)](jointsgroupname/init%28rawvalue_%29.md): Creates a joint group name with a recognized point group key.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Retrieving Points

- [availableJointNames](availablejointnames.md): The names of the available joints in the observation.
- [VNHumanHandPoseObservation.JointName](jointname.md): The supported joint names for the hand pose.
- [availableJointsGroupNames](availablejointsgroupnames.md): The joint group names available in the observation.
- [recognizedPoint(\_:)](recognizedpoint%28__%29.md): Retrieves the recognized point for a joint name.
- [recognizedPoints(\_:)](recognizedpoints%28__%29.md): Retrieves the recognized points associated with the joint group name.

# VNHumanHandPoseObservationJointsGroupName (Objective-C)

**Framework:** Vision  
**Kind:** Type Alias  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The supported joint group names for the hand pose.

## Declaration

```objectivec
typedef VNRecognizedPointGroupKey VNHumanHandPoseObservationJointsGroupName;
```

## Topics

### Group Names

- [VNHumanHandPoseObservationJointsGroupNameThumb](jointsgroupname/thumb.md): The thumb.
- [VNHumanHandPoseObservationJointsGroupNameIndexFinger](jointsgroupname/indexfinger.md): The index finger.
- [VNHumanHandPoseObservationJointsGroupNameLittleFinger](jointsgroupname/littlefinger.md): The little finger.
- [VNHumanHandPoseObservationJointsGroupNameMiddleFinger](jointsgroupname/middlefinger.md): The middle finger.
- [VNHumanHandPoseObservationJointsGroupNameRingFinger](jointsgroupname/ringfinger.md): The ring finger.
- [VNHumanHandPoseObservationJointsGroupNameAll](jointsgroupname/all.md): All hand group names.

## See Also

### Retrieving Points

- [availableJointNames](availablejointnames.md): The names of the available joints in the observation.
- [VNHumanHandPoseObservationJointName](jointname.md): The supported joint names for the hand pose.
- [availableJointsGroupNames](availablejointsgroupnames.md): The joint group names available in the observation.
- [recognizedPointForJointName:error:](recognizedpoint%28__%29.md): Retrieves the recognized point for a joint name.
- [recognizedPointsForJointsGroupName:error:](recognizedpoints%28__%29.md): Retrieves the recognized points associated with the joint group name.
