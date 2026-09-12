> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/sppoint3dfloatrotatebyquaternion](https://developer.apple.com/documentation/spatial/sppoint3dfloatrotatebyquaternion)

# SPPoint3DFloatRotateByQuaternion

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPPoint3DFloat SPPoint3DFloatRotateByQuaternion(SPPoint3DFloat point, simd_quatf quaternion);
```

## Parameters

- `point`: The source point.
- `quaternion`: The quaternion that defines the rotation.

<a id="return-value"></a>

## Return Value

A point that’s rotated by the specified rotation.

<a id="discussion"></a>

## Discussion

Returns a point that’s rotated by the specified quaternion around the origin.

This function is equivalent to calling @p SPPoint3DFloatRotateByQuaternionAroundPoint with a zero vector for the pivot.
