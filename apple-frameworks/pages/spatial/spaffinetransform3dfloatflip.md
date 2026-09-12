> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/spaffinetransform3dfloatflip](https://developer.apple.com/documentation/spatial/spaffinetransform3dfloatflip)

# SPAffineTransform3DFloatFlip

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPAffineTransform3DFloat SPAffineTransform3DFloatFlip(SPAffineTransform3DFloat transform, SPAxis flipAxis);
```

## Parameters

- `flipAxis`: The flip axis.

<a id="return-value"></a>

## Return Value

A new transform flipped along the specified axis.

<a id="discussion"></a>

## Discussion

Returns an affine transform that’s flipped along the specified axis.

If you pass a flip axis that’s not @p x , @p y , or @p z , the function returns @p transform unmodified.
