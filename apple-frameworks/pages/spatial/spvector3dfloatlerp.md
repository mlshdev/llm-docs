> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/spvector3dfloatlerp](https://developer.apple.com/documentation/spatial/spvector3dfloatlerp)

# SPVector3DFloatLerp

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPVector3DFloat SPVector3DFloatLerp(SPVector3DFloat from, SPVector3DFloat to, SPVector3DFloat t);
```

## Parameters

- `from`: The starting vector.
- `to`: The ending vector.
- `t`: The value, between @p 0 and @p 1, that the function interpolates at.

<a id="return-value"></a>

## Return Value

A new rotation. When @p t=0, the result is the @p from vector. When @p t=1.0, the result is the @p to vector. For any other value of @p t, the result is a linear linear interpolation between the two vectors.

<a id="discussion"></a>

## Discussion

Returns a Spatial vector that represents the linear interpolation at @p t between two vectors.
