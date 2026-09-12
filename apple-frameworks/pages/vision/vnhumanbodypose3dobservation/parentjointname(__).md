> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnhumanbodypose3dobservation/parentjointname(_:)](https://developer.apple.com/documentation/vision/vnhumanbodypose3dobservation/parentjointname(_:))

# parentJointName(\_:) (Swift)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Returns the parent joint of the joint name you specify.

## Declaration

```swift
func parentJointName(_ jointName: VNHumanBodyPose3DObservation.JointName) -> VNHumanBodyPose3DObservation.JointName?
```

## Parameters

- `jointName`: The name of the body joint to return the parent of.

<a id="return-value"></a>

## Return Value

The name of the parent joint.

# parentJointNameForJointName: (Objective-C)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Returns the parent joint of the joint name you specify.

## Declaration

```objectivec
- (VNHumanBodyPose3DObservationJointName) parentJointNameForJointName:(VNHumanBodyPose3DObservationJointName) jointName;
```

## Parameters

- `jointName`: The name of the body joint to return the parent of.

<a id="return-value"></a>

## Return Value

The name of the parent joint.
