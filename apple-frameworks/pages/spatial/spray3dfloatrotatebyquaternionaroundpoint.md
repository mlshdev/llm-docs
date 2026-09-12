> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/spray3dfloatrotatebyquaternionaroundpoint](https://developer.apple.com/documentation/spatial/spray3dfloatrotatebyquaternionaroundpoint)

# SPRay3DFloatRotateByQuaternionAroundPoint

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPRay3DFloat SPRay3DFloatRotateByQuaternionAroundPoint(SPRay3DFloat ray, simd_quatf quaternion, SPPoint3DFloat pivot);
```

## Parameters

- `ray`: The source ray.
- `quaternion`: The quaternion that defines the rotation.
- `pivot`: The center of rotation.

<a id="return-value"></a>

## Return Value

A ray with a direction that’s rotated by the specified quaternion.

<a id="discussion"></a>

## Discussion

Returns a ray that’s rotated by the specified quaternion around a specified pivot.
