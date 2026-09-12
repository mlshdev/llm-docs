> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/spaffinetransform3dfloatgetrotation](https://developer.apple.com/documentation/spatial/spaffinetransform3dfloatgetrotation)

# SPAffineTransform3DFloatGetRotation

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPRotation3DFloat SPAffineTransform3DFloatGetRotation(SPAffineTransform3DFloat transform);
```

## Parameters

- `transform`: The source transform.

<a id="return-value"></a>

## Return Value

A rotation structure that represents the transform’s rotation.

<a id="discussion"></a>

## Discussion

Returns an affine transform’s rotation.

> **Note**

> This function can’t extract rotation from a non-scale-rotate-translate affine transform. In that case, the function returns @p SPRotation3DFloatInvalid.
