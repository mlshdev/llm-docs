> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/spprojectivetransform3dfloatflip](https://developer.apple.com/documentation/spatial/spprojectivetransform3dfloatflip)

# SPProjectiveTransform3DFloatFlip

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPProjectiveTransform3DFloat SPProjectiveTransform3DFloatFlip(SPProjectiveTransform3DFloat transform, SPAxis flipAxis);
```

## Parameters

- `flipAxis`: The flip axis.

<a id="return-value"></a>

## Return Value

A new transform flipped along the specified axis.

<a id="discussion"></a>

## Discussion

Returns a projective transform that’s flipped along the specified axis.

> **Note**

> The transform must be affine, otherwise the function returns @p SPProjectiveTransform3DFloatInvalid .

If you pass a shear axis that’s not @p x , @p y , or @p z , the function returns @p transform unmodified.
