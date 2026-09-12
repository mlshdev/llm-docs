> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/sprect3dfloatrotatebyquaternion](https://developer.apple.com/documentation/spatial/sprect3dfloatrotatebyquaternion)

# SPRect3DFloatRotateByQuaternion

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPRect3DFloat SPRect3DFloatRotateByQuaternion(SPRect3DFloat rect, simd_quatf quaternion);
```

## Parameters

- `rect`: The source rectangle.
- `quaternion`: The quaternion that defines the rotation.

<a id="return-value"></a>

## Return Value

A rectangle that’s rotated by the specified rotation.

<a id="discussion"></a>

## Discussion

Returns a rectangle that’s rotated by the specified quaternion around the origin.

This function is equivalent to calling @p SPRect3DFloatRotateByQuaternionAroundPoint with a zero vector for the pivot.

Because affine transforms do not preserve rectangles in general, this function returns the smallest rectangle that contains the transformed corner points of the `rect` parameter.
