> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnhumanbodypose3dobservation/getcamerarelativeposition:forjointname:error:](https://developer.apple.com/documentation/vision/vnhumanbodypose3dobservation/getcamerarelativeposition:forjointname:error:)

# getCameraRelativePosition:forJointName:error:

**Interface language:** Objective-C

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Gets a position relative to the camera for the body joint you specify.

## Declaration

```objectivec
- (BOOL) getCameraRelativePosition:(simd_float4x4 *) modelPositionOut forJointName:(VNHumanBodyPose3DObservationJointName) jointName error:(NSError **) error;
```

## Parameters

- `modelPositionOut`: The reference to the position.
- `jointName`: The name of the humany body joint.
- `error`: If an error occurs, an error object that describes the error; otherwise, `nil`.

<a id="return-value"></a>

## Return Value

A Boolean value that indicates the success of determining the position.

## See Also

### Getting the Camera Position

- [cameraOriginMatrix](cameraoriginmatrix.md): A transform from the skeleton hip to the camera.
