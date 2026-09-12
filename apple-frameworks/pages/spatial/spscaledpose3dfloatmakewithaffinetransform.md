> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/spscaledpose3dfloatmakewithaffinetransform](https://developer.apple.com/documentation/spatial/spscaledpose3dfloatmakewithaffinetransform)

# SPScaledPose3DFloatMakeWithAffineTransform

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPScaledPose3DFloat SPScaledPose3DFloatMakeWithAffineTransform(SPAffineTransform3DFloat transform);
```

## Parameters

- `transform`: The source transform. The function only considers the transform’s scale, rotation, and translation components.

<a id="return-value"></a>

## Return Value

A scaled pose with a position and rotation that are defined by an affine transform.

<a id="discussion"></a>

## Discussion

Returns a scaled pose with with a position, rotation, and scale that are defined by an affine transform.

> **Note**

> This function can’t extract rotation from a non-scale-rotate-translate affine transform. In that case, the function returns @p SPScaledPose3DFloatInvalid. If the specified  @p SPAffineTransform3DFloat doesn’t have uniform scale (that is,  @p SPAffineTransform3DFloatIsUniform returns  @p false), the function returns
