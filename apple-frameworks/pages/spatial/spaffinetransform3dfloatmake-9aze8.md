> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/spaffinetransform3dfloatmake-9aze8](https://developer.apple.com/documentation/spatial/spaffinetransform3dfloatmake-9aze8)

# SPAffineTransform3DFloatMake

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPAffineTransform3DFloat SPAffineTransform3DFloatMake(SPAffineTransform3D transform);
```

## Parameters

- `transform`: The transform.

<a id="return-value"></a>

## Return Value

A new transform.

<a id="discussion"></a>

## Discussion

Returns a single-precision affine transformation from a double-precision affine transformation.
