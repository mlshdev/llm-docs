> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/spray3dfloatrotatebyquaternion](https://developer.apple.com/documentation/spatial/spray3dfloatrotatebyquaternion)

# SPRay3DFloatRotateByQuaternion

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPRay3DFloat SPRay3DFloatRotateByQuaternion(SPRay3DFloat ray, simd_quatf quaternion);
```

## Parameters

- `ray`: The source ray.
- `quaternion`: The quaternion that defines the rotation.

<a id="return-value"></a>

## Return Value

A ray with a direction that’s rotated by the specified quaternion.

<a id="discussion"></a>

## Discussion

Returns a ray that’s rotated by the specified quaternion.
