> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/spprojectivetransform3dfloatisuniform](https://developer.apple.com/documentation/spatial/spprojectivetransform3dfloatisuniform)

# SPProjectiveTransform3DFloatIsUniform

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static bool SPProjectiveTransform3DFloatIsUniform(SPProjectiveTransform3DFloat transform);
```

## Parameters

- `transform`: The source transform.

<a id="return-value"></a>

## Return Value

A Boolean value that indicates whether the transform is affine and uniform over all dimensions.

<a id="discussion"></a>

## Discussion

Returns a Boolean value that indicates whether the transform is affine and scales equally over all dimensions.
