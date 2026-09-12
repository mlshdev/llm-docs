> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/spprojectivetransform3dfloatgetrotation](https://developer.apple.com/documentation/spatial/spprojectivetransform3dfloatgetrotation)

# SPProjectiveTransform3DFloatGetRotation

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPRotation3DFloat SPProjectiveTransform3DFloatGetRotation(SPProjectiveTransform3DFloat transform);
```

## Parameters

- `transform`: The source transform.

<a id="return-value"></a>

## Return Value

A rotation structure that represents the transform’s rotation.

<a id="discussion"></a>

## Discussion

Returns a projective transform’s rotation.

> **Note**

> This function computes the rotation from the first three rows of the transform matrix and ignores the fourth row. If the projective transform isn’t an affine scale-rotate-translate transform, this function returns @p SPRotation3DFloatInvalid.
