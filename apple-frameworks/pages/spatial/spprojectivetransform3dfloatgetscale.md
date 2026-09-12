> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/spprojectivetransform3dfloatgetscale](https://developer.apple.com/documentation/spatial/spprojectivetransform3dfloatgetscale)

# SPProjectiveTransform3DFloatGetScale

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPSize3DFloat SPProjectiveTransform3DFloatGetScale(SPProjectiveTransform3DFloat transform);
```

## Parameters

- `transform`: The source transform.

<a id="return-value"></a>

## Return Value

A size structure that represents the transform’s scale.

<a id="discussion"></a>

## Discussion

Returns a projective transform’s scale.

> **Note**

> This function computes the scale from the first three rows of the transform matrix and ignores the fourth row.
