> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/spatial/spaffinetransform3dfloatmakewithscaledpose

# SPAffineTransform3DFloatMakeWithScaledPose

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPAffineTransform3DFloat SPAffineTransform3DFloatMakeWithScaledPose(SPScaledPose3DFloat pose);
```

## Parameters

- `pose`: The source scaled pose.

<a id="return-value"></a>

## Return Value

A new affine transform structure.

<a id="discussion"></a>

## Discussion

Returns a new affine transform structure from the specified scaled pose structure.
