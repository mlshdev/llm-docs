> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimagegetperspectivewarp(_:_:_:_:)](https://developer.apple.com/documentation/accelerate/vimagegetperspectivewarp(_:_:_:_:))

# vImageGetPerspectiveWarp(\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns a projective-transformation structure that defines the mapping between a source quadrilateral and a destination quadrilateral.

## Declaration

```swift
func vImageGetPerspectiveWarp(_ srcPoints: UnsafePointer<(Float, Float)>, _ destPoints: UnsafePointer<(Float, Float)>, _ transform: UnsafeMutablePointer<vImage_PerpsectiveTransform>, _ flags: vImage_Flags) -> vImage_Error
```

## Parameters

- `srcPoints`: The four source points.
- `destPoints`: The four destination points.
- `transform`: On output, a [vImage_PerpsectiveTransform](vimage_perpsectivetransform.md) structure that describes the transformation from the source points to the destination points.
- `flags`: The options to use when performing the operation. If your code implements its own tiling or its own multithreading, pass [kvImageDoNotTile](kvimagedonottile.md); otherwise, pass [kvImageNoFlags](kvimagenoflags.md).

<a id="return-value"></a>

## Return Value

[kvImageNoError](kvimagenoerror.md); otherwise, one of the error codes in [Data Types and Constants](data-types-and-constants.md).

## Mentioned In

- [Transforming an image in three dimensions](transforming-an-image-in-three-dimensions.md)

## See Also

### Computing a projective transformation from source and destination quadrilaterals

- [Transforming an image in three dimensions](transforming-an-image-in-three-dimensions.md): Create and use a projective transformation to apply a perspective warp to an image.
- [vImage_PerpsectiveTransform](vimage_perpsectivetransform.md): A projective-transformation matrix.

# vImageGetPerspectiveWarp (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns a projective-transformation structure that defines the mapping between a source quadrilateral and a destination quadrilateral.

## Declaration

```objectivec
vImage_Error vImageGetPerspectiveWarp(const float srcPoints[4][2], const float destPoints[4][2], vImage_PerpsectiveTransform *transform, vImage_Flags flags);
```

## Parameters

- `srcPoints`: The four source points.
- `destPoints`: The four destination points.
- `transform`: On output, a [vImage_PerpsectiveTransform](vimage_perpsectivetransform.md) structure that describes the transformation from the source points to the destination points.
- `flags`: The options to use when performing the operation. If your code implements its own tiling or its own multithreading, pass [kvImageDoNotTile](kvimagedonottile.md); otherwise, pass [kvImageNoFlags](kvimagenoflags.md).

<a id="return-value"></a>

## Return Value

[kvImageNoError](kvimagenoerror.md); otherwise, one of the error codes in [Data Types and Constants](data-types-and-constants.md).

## Mentioned In

- [Transforming an image in three dimensions](transforming-an-image-in-three-dimensions.md)

## See Also

### Computing a projective transformation from source and destination quadrilaterals

- [Transforming an image in three dimensions](transforming-an-image-in-three-dimensions.md): Create and use a projective transformation to apply a perspective warp to an image.
- [vImage_PerpsectiveTransform](vimage_perpsectivetransform.md): A projective-transformation matrix.
