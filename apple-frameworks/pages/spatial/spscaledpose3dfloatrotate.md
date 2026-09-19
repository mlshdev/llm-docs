> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/spatial/spscaledpose3dfloatrotate

# SPScaledPose3DFloatRotate

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPScaledPose3DFloat SPScaledPose3DFloatRotate(SPScaledPose3DFloat scaledPose, SPRotation3DFloat rotation);
```

## Parameters

- `scaledPose`: The source scaled pose.
- `rotation`: The rotation structure that defines the rotation.

<a id="return-value"></a>

## Return Value

A scaled pose with a rotation that’s rotated by the specified rotation structure.

<a id="discussion"></a>

## Discussion

Returns a scaled pose with a rotation that’s rotated by the specified rotation.
