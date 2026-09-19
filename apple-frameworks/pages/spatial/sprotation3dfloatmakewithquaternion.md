> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/spatial/sprotation3dfloatmakewithquaternion

# SPRotation3DFloatMakeWithQuaternion

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPRotation3DFloat SPRotation3DFloatMakeWithQuaternion(simd_quatf quaternion);
```

## Parameters

- `quaternion`: The source quaternion.

<a id="return-value"></a>

## Return Value

A new rotation stucture.

<a id="discussion"></a>

## Discussion

Returns a rotation from the specified quaternion.
