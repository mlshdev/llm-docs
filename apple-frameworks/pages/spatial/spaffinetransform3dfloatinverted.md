> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/spaffinetransform3dfloatinverted](https://developer.apple.com/documentation/spatial/spaffinetransform3dfloatinverted)

# SPAffineTransform3DFloatInverted

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPAffineTransform3DFloat SPAffineTransform3DFloatInverted(SPAffineTransform3DFloat transform);
```

## Parameters

- `transform`: The source transform.

<a id="return-value"></a>

## Return Value

A new transform that’s constructed by inverting an existing affine transform.

<a id="discussion"></a>

## Discussion

Returns a new transform that’s constructed by inverting an existing affine transform.

> **Note**

> The source transform must be invertible, call @p SPAffineTransform3DFloatIsInvertible to test whether this is the case. If the source transform isn’t invertible, the function returns @p SPAffineTransform3DFloatInvalid .
