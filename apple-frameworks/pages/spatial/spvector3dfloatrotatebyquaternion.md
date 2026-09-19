> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/spatial/spvector3dfloatrotatebyquaternion

# SPVector3DFloatRotateByQuaternion

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPVector3DFloat SPVector3DFloatRotateByQuaternion(SPVector3DFloat vector, simd_quatf quaternion);
```

## Parameters

- `vector`: The source vector.
- `quaternion`: The quaternion that defines the rotation.

<a id="return-value"></a>

## Return Value

A vector that’s rotated by the specified quaternion.

<a id="discussion"></a>

## Discussion

Returns a vector that’s rotated by the specified quaternion around the origin.
