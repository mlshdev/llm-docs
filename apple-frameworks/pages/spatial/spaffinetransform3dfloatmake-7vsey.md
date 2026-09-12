> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/spaffinetransform3dfloatmake-7vsey](https://developer.apple.com/documentation/spatial/spaffinetransform3dfloatmake-7vsey)

# SPAffineTransform3DFloatMake

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPAffineTransform3DFloat SPAffineTransform3DFloatMake(SPSize3DFloat scale, SPRotation3DFloat rotation, SPVector3DFloat translation);
```

## Parameters

- `scale`: The scale.
- `rotation`: The rotation.
- `translation`: The translation.

<a id="return-value"></a>

## Return Value

A new affine transform structure.

<a id="discussion"></a>

## Discussion

Returns a new scale, rotate, translate affine transform.
