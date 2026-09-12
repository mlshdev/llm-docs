> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/spaffinetransform3dmake-5pau5](https://developer.apple.com/documentation/spatial/spaffinetransform3dmake-5pau5)

# SPAffineTransform3DMake

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPAffineTransform3D SPAffineTransform3DMake(SPAffineTransform3DFloat transform);
```

## Parameters

- `transform`: The transform.

<a id="return-value"></a>

## Return Value

A new transform.

<a id="discussion"></a>

## Discussion

Returns a double-precision affine transformation from a single-precision affine transformation.
