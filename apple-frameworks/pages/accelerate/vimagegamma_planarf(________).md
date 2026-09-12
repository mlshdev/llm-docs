> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimagegamma_planarf(_:_:_:_:)](https://developer.apple.com/documentation/accelerate/vimagegamma_planarf(_:_:_:_:))

# vImageGamma_PlanarF(\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 5.0+ · visionOS 1.0+ · watchOS 1.0+

Applies a gamma function to a PlanarF image.

## Declaration

```swift
func vImageGamma_PlanarF(_ src: UnsafePointer<vImage_Buffer>, _ dest: UnsafePointer<vImage_Buffer>, _ gamma: GammaFunction!, _ flags: vImage_Flags) -> vImage_Error
```

## Parameters

- `src`: The source vImage buffer.
- `dest`: A pointer to the destination vImage buffer structure. You’re responsible for filling out the `height`, `width`, and `rowBytes` fields of this structure, and for allocating a data buffer of the appropriate size. On return, the data buffer this structure points to contains the destination image data. When you no longer need the data buffer, deallocate the memory to prevent memory leaks.
- `gamma`: The gamma function object.
- `flags`: The options to use when performing the operation. If your code implements its own tiling or its own multithreading, pass [kvImageDoNotTile](kvimagedonottile.md); otherwise, pass [kvImageNoFlags](kvimagenoflags.md).

<a id="return-value"></a>

## Return Value

[kvImageNoError](kvimagenoerror.md); otherwise, one of the error codes in [Data Types and Constants](data-types-and-constants.md).

## See Also

### Applying a gamma function

- [vImageCreateGammaFunction(\_:\_:\_:)](vimagecreategammafunction%28______%29.md): Returns a gamma function object.
- [Gamma function types](1584480-gamma-function-types.md): Types of full- or half-precision gamma functions.
- [vImageGamma_Planar8toPlanarF(\_:\_:\_:\_:)](vimagegamma_planar8toplanarf%28________%29.md): Applies a gamma function to an 8-bit planar image to produce a 32-bit planar image.
- [vImageGamma_PlanarFtoPlanar8(\_:\_:\_:\_:)](vimagegamma_planarftoplanar8%28________%29.md): Applies a gamma function to a 32-bit planar image to produce an 8-bit planar image.
- [vImageDestroyGammaFunction(\_:)](vimagedestroygammafunction%28__%29.md): Destroys a gamma function object.
- [Adjusting saturation and applying tone mapping](adjusting-saturation-and-applying-tone-mapping.md): Convert an RGB image to discrete luminance and chrominance channels, and apply color and contrast treatments.

# vImageGamma_PlanarF (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 5.0+ · visionOS 1.0+ · watchOS 1.0+

Applies a gamma function to a PlanarF image.

## Declaration

```objectivec
vImage_Error vImageGamma_PlanarF(const vImage_Buffer *src, const vImage_Buffer *dest, GammaFunction const gamma, vImage_Flags flags);
```

## Parameters

- `src`: The source vImage buffer.
- `dest`: A pointer to the destination vImage buffer structure. You’re responsible for filling out the `height`, `width`, and `rowBytes` fields of this structure, and for allocating a data buffer of the appropriate size. On return, the data buffer this structure points to contains the destination image data. When you no longer need the data buffer, deallocate the memory to prevent memory leaks.
- `gamma`: The gamma function object.
- `flags`: The options to use when performing the operation. If your code implements its own tiling or its own multithreading, pass [kvImageDoNotTile](kvimagedonottile.md); otherwise, pass [kvImageNoFlags](kvimagenoflags.md).

<a id="return-value"></a>

## Return Value

[kvImageNoError](kvimagenoerror.md); otherwise, one of the error codes in [Data Types and Constants](data-types-and-constants.md).

## See Also

### Applying a gamma function

- [vImageCreateGammaFunction](vimagecreategammafunction%28______%29.md): Returns a gamma function object.
- [Gamma function types](1584480-gamma-function-types.md): Types of full- or half-precision gamma functions.
- [vImageGamma_Planar8toPlanarF](vimagegamma_planar8toplanarf%28________%29.md): Applies a gamma function to an 8-bit planar image to produce a 32-bit planar image.
- [vImageGamma_PlanarFtoPlanar8](vimagegamma_planarftoplanar8%28________%29.md): Applies a gamma function to a 32-bit planar image to produce an 8-bit planar image.
- [vImageDestroyGammaFunction](vimagedestroygammafunction%28__%29.md): Destroys a gamma function object.
