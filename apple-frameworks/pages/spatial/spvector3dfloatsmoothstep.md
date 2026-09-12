> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/spvector3dfloatsmoothstep](https://developer.apple.com/documentation/spatial/spvector3dfloatsmoothstep)

# SPVector3DFloatSmoothstep

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPVector3DFloat SPVector3DFloatSmoothstep(SPVector3DFloat edge0, SPVector3DFloat edge1, SPVector3DFloat x);
```

## Parameters

- `edge0`: The lower edge of the interpolation function.
- `edge1`: The upper edge of the interpolation function.
- `x`: The value that the function interpolates at.

<a id="return-value"></a>

## Return Value

A new vector with each element set to `0` if `x <= edge0`, `1` if `x >= edge1`, and a Hermite interpolation between `0` and `1` if `edge0 < x < edge1`.

<a id="discussion"></a>

## Discussion

Returns a Spatial vector that represents the smooth interpolation at @p x between two vectors.
