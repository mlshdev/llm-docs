> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimageaffinewarp_argb16f(_:_:_:_:_:_:)](https://developer.apple.com/documentation/accelerate/vimageaffinewarp_argb16f(_:_:_:_:_:_:))

# vImageAffineWarp_ARGB16F(\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

## Declaration

```swift
func vImageAffineWarp_ARGB16F(_ src: UnsafePointer<vImage_Buffer>, _ dest: UnsafePointer<vImage_Buffer>, _ tempBuffer: UnsafeMutableRawPointer!, _ transform: UnsafePointer<vImage_AffineTransform>, _ backColor: UnsafePointer<UInt16>!, _ flags: vImage_Flags) -> vImage_Error
```

## See Also

### Single-Precision Affine Transformation

- [vImageAffineWarp_Planar8(\_:\_:\_:\_:\_:\_:)](vimageaffinewarp_planar8%28____________%29.md): Applies a single-precision affine transformation to an 8-bit planar image.
- [vImageAffineWarp_PlanarF(\_:\_:\_:\_:\_:\_:)](vimageaffinewarp_planarf%28____________%29.md): Applies a single-precision affine transformation to a 32-bit planar image.
- [vImageAffineWarp_ARGB16U(\_:\_:\_:\_:\_:\_:)](vimageaffinewarp_argb16u%28____________%29.md): Applies a single-precision affine transformation to an unsigned 16-bit-per-channel, 4-channel interleaved image.
- [vImageAffineWarp_ARGB16S(\_:\_:\_:\_:\_:\_:)](vimageaffinewarp_argb16s%28____________%29.md): Applies a single-precision affine transformation to a signed 16-bit-per-channel, 4-channel interleaved image.
- [vImageAffineWarp_ARGB8888(\_:\_:\_:\_:\_:\_:)](vimageaffinewarp_argb8888%28____________%29.md): Applies a single-precision affine transformation to an 8-bit-per-channel, 4-channel interleaved image.
- [vImageAffineWarp_ARGBFFFF(\_:\_:\_:\_:\_:\_:)](vimageaffinewarp_argbffff%28____________%29.md): Applies a single-precision affine transformation to a 32-bit-per-channel, 4-channel interleaved image.
- [vImageAffineWarp_CbCr16F(\_:\_:\_:\_:\_:\_:)](vimageaffinewarp_cbcr16f%28____________%29.md)
- [vImageAffineWarp_Planar16F(\_:\_:\_:\_:\_:\_:)](vimageaffinewarp_planar16f%28____________%29.md)

# vImageAffineWarp_ARGB16F (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

## Declaration

```objectivec
vImage_Error vImageAffineWarp_ARGB16F(const vImage_Buffer *src, const vImage_Buffer *dest, void *tempBuffer, const vImage_AffineTransform *transform, const Pixel_ARGB_16F backColor, vImage_Flags flags);
```

## See Also

### Single-Precision Affine Transformation

- [vImageAffineWarp_Planar8](vimageaffinewarp_planar8%28____________%29.md): Applies a single-precision affine transformation to an 8-bit planar image.
- [vImageAffineWarp_PlanarF](vimageaffinewarp_planarf%28____________%29.md): Applies a single-precision affine transformation to a 32-bit planar image.
- [vImageAffineWarp_ARGB16U](vimageaffinewarp_argb16u%28____________%29.md): Applies a single-precision affine transformation to an unsigned 16-bit-per-channel, 4-channel interleaved image.
- [vImageAffineWarp_ARGB16S](vimageaffinewarp_argb16s%28____________%29.md): Applies a single-precision affine transformation to a signed 16-bit-per-channel, 4-channel interleaved image.
- [vImageAffineWarp_ARGB8888](vimageaffinewarp_argb8888%28____________%29.md): Applies a single-precision affine transformation to an 8-bit-per-channel, 4-channel interleaved image.
- [vImageAffineWarp_ARGBFFFF](vimageaffinewarp_argbffff%28____________%29.md): Applies a single-precision affine transformation to a 32-bit-per-channel, 4-channel interleaved image.
- [vImageAffineWarp_CbCr16F](vimageaffinewarp_cbcr16f%28____________%29.md)
- [vImageAffineWarp_Planar16F](vimageaffinewarp_planar16f%28____________%29.md)
