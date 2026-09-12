> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimage/pixelbuffer/transform(_:backgroundcolor:usefloat16accumulator:destination:)-1lvaa](https://developer.apple.com/documentation/accelerate/vimage/pixelbuffer/transform(_:backgroundcolor:usefloat16accumulator:destination:)-1lvaa)

# transform(\_:backgroundColor:useFloat16Accumulator:destination:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Applies a Core Graphics affine transformation to a floating-point 16-bit-per-channel, four-channel interleaved pixel buffer.

## Declaration

```swift
func transform(_ transform: CGAffineTransform, backgroundColor: Pixel_ARGB_16F? = (0, 0, 0, 0), useFloat16Accumulator: Bool = false, destination: vImage.PixelBuffer<Format>)
```

## Parameters

- `transform`: The affine transformation matrix.
- `backgroundColor`: An optional background color. If you pass `nil`, the operation uses the [kvImageEdgeExtend](../../kvimageedgeextend.md) flag to extend the edges of the image infinitely.
- `useFloat16Accumulator`: A Boolean value that specifies that the function uses faster, but lower-precision, internal arithmetic. For more information, see [kvImageUseFP16Accumulator](../../kvimageusefp16accumulator.md).
- `destination`: The destination pixel buffer.

## See Also

### Related Documentation

- [Applying geometric transforms to images](../../applying-geometric-transforms-to-images.md): Reflect, shear, rotate, and scale image buffers using vImage.

### Applying affine transformations to images

- [transform(\_:backgroundColor:destination:)](transform%28__backgroundcolor_destination_%29-4wy4q.md): Conforms when `Format` is `vImage.Planar8`. Applies a Core Graphics affine transformation to an 8-bit planar pixel buffer.
- [transform(\_:backgroundColor:useFloat16Accumulator:destination:)](transform%28__backgroundcolor_usefloat16accumulator_destination_%29-1470p.md): Conforms when `Format` is `vImage.Planar16F`. Applies a Core Graphics affine transformation to a floating-point 16-bit planar pixel buffer.
- [transform(\_:backgroundColor:destination:)](transform%28__backgroundcolor_destination_%29-1s38.md): Conforms when `Format` is `vImage.PlanarF`. Applies a Core Graphics affine transformation to a floating-point 32-bit planar pixel buffer.
- [transform(\_:backgroundColor:useFloat16Accumulator:destination:)](transform%28__backgroundcolor_usefloat16accumulator_destination_%29-4w4jr.md): Conforms when `Format` is `vImage.Interleaved16Fx2`. Applies a Core Graphics affine transformation to a floating-point 16-bit-per-channel, two-channel interleaved pixel buffer.
- [transform(\_:backgroundColor:destination:)](transform%28__backgroundcolor_destination_%29-5kxj6.md): Conforms when `Format` is `vImage.Interleaved8x4`. Applies a Core Graphics affine transformation to an 8-bit-per-channel, four-channel interleaved pixel buffer.
- [transform(\_:backgroundColor:destination:)](transform%28__backgroundcolor_destination_%29-nl6g.md): Conforms when `Format` is `vImage.Interleaved16Ux4`. Applies a Core Graphics affine transformation to an unsigned 16-bit-per-channel, four-channel interleaved pixel buffer.
- [transform(\_:backgroundColor:destination:)](transform%28__backgroundcolor_destination_%29-9ggt.md): Conforms when `Format` is `vImage.InterleavedFx4`. Applies a Core Graphics affine transformation to a floating-point 32-bit-per-channel, four-channel interleaved pixel buffer.
