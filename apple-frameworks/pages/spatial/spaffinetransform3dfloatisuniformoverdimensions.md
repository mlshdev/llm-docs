> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/spaffinetransform3dfloatisuniformoverdimensions](https://developer.apple.com/documentation/spatial/spaffinetransform3dfloatisuniformoverdimensions)

# SPAffineTransform3DFloatIsUniformOverDimensions

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static bool SPAffineTransform3DFloatIsUniformOverDimensions(SPAffineTransform3DFloat transform, SPAxis dimensionFlags);
```

## Parameters

- `transform`: The transform.
- `dimensionFlags`: A bitmask that specifies which dimensions the function queries. Use logical OR to combine axes .

<a id="return-value"></a>

## Return Value

@P true if the transform is rectilinear and the specified axes have equal scales.

<a id="discussion"></a>

## Discussion

Returns `true` if the transform scales equally over the specified dimensions.

Passing @p dimensionFlags of @p SPAxisX|SPAxisY|SPAxisZ returns the same result as @p SPAffineTransform3DFloatIsUniform . Passing a @p dimensionFlags  that specifies zero or one axis returns the same result as @p SPAffineTransform3DFloatIsRectilinear .
