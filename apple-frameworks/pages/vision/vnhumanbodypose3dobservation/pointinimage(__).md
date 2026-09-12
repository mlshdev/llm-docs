> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnhumanbodypose3dobservation/pointinimage(_:)](https://developer.apple.com/documentation/vision/vnhumanbodypose3dobservation/pointinimage(_:))

# pointInImage(\_:) (Swift)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Returns a 2D point for the joint name you specify, relative to the input image.

## Declaration

```swift
func pointInImage(_ jointName: VNHumanBodyPose3DObservation.JointName) throws -> VNPoint
```

## Parameters

- `jointName`: The name of the human body joint.

<a id="return-value"></a>

## Return Value

A projection of the 3D position onto the original 2D image in normalized, lower left origin coordinates.

## Mentioned In

- [Identifying 3D human body poses in images](../identifying-3d-human-body-poses-in-images.md)

# pointInImageForJointName:error: (Objective-C)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Returns a 2D point for the joint name you specify, relative to the input image.

## Declaration

```objectivec
- (VNPoint *) pointInImageForJointName:(VNHumanBodyPose3DObservationJointName) jointName error:(NSError **) error;
```

## Parameters

- `jointName`: The name of the human body joint.
- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="return-value"></a>

## Return Value

A projection of the 3D position onto the original 2D image in normalized, lower left origin coordinates. On failure, this method returns `nil`.

## Mentioned In

- [Identifying 3D human body poses in images](../identifying-3d-human-body-poses-in-images.md)
