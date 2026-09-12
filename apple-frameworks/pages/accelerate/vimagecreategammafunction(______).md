> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimagecreategammafunction(_:_:_:)](https://developer.apple.com/documentation/accelerate/vimagecreategammafunction(_:_:_:))

# vImageCreateGammaFunction(\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 5.0+ · visionOS 1.0+ · watchOS 1.0+

Returns a gamma function object.

## Declaration

```swift
func vImageCreateGammaFunction(_ gamma: Float, _ gamma_type: Int32, _ flags: vImage_Flags) -> GammaFunction!
```

## Parameters

- `gamma`: The gamma value when `gamma_type` is [kvImageGamma_UseGammaValue](kvimagegamma_usegammavalue.md) or [kvImageGamma_UseGammaValue_half_precision](kvimagegamma_usegammavalue_half_precision.md).
- `gamma_type`: A constant that specifies the gamma type. See [Gamma function types](1584480-gamma-function-types.md).
- `flags`: Reserved for future use. Pass [kvImageNoFlags](kvimagenoflags.md).

<a id="return-value"></a>

## Return Value

A gamma function object that encapsulates a gamma value, a gamma function type, and option flags.

<a id="Discussion"></a>

## Discussion

Use this function to create a gamma function object that you pass to [vImageGamma_Planar8toPlanarF(\_:\_:\_:\_:)](vimagegamma_planar8toplanarf%28________%29.md), [vImageGamma_PlanarFtoPlanar8(\_:\_:\_:\_:)](vimagegamma_planarftoplanar8%28________%29.md), or [vImageGamma_PlanarF(\_:\_:\_:\_:)](vimagegamma_planarf%28________%29.md).

The vImage library provides a user-defined half-precision gamma type and constant half-precision gamma types, such as [kvImageGamma_sRGB_forward_half_precision](kvimagegamma_srgb_forward_half_precision.md). Use a half-precision gamma type when creating a gamma function for image data that’s intended for conversion to 8-bit. The half-precision gamma types work with floating-point values in the range `0...1` and provide a precision of ±1 / 4,096.

The gamma correction functions that use a [GammaFunction](gammafunction.md) object are symmetric around zero. That is, they treat negative values as if they’re positive, and restore the sign after applying the exponent.

## See Also

### Applying a gamma function

- [Gamma function types](1584480-gamma-function-types.md): Types of full- or half-precision gamma functions.
- [vImageGamma_Planar8toPlanarF(\_:\_:\_:\_:)](vimagegamma_planar8toplanarf%28________%29.md): Applies a gamma function to an 8-bit planar image to produce a 32-bit planar image.
- [vImageGamma_PlanarFtoPlanar8(\_:\_:\_:\_:)](vimagegamma_planarftoplanar8%28________%29.md): Applies a gamma function to a 32-bit planar image to produce an 8-bit planar image.
- [vImageGamma_PlanarF(\_:\_:\_:\_:)](vimagegamma_planarf%28________%29.md): Applies a gamma function to a PlanarF image.
- [vImageDestroyGammaFunction(\_:)](vimagedestroygammafunction%28__%29.md): Destroys a gamma function object.
- [Adjusting saturation and applying tone mapping](adjusting-saturation-and-applying-tone-mapping.md): Convert an RGB image to discrete luminance and chrominance channels, and apply color and contrast treatments.

# vImageCreateGammaFunction (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 5.0+ · visionOS 1.0+ · watchOS 1.0+

Returns a gamma function object.

## Declaration

```objectivec
GammaFunctionvImageCreateGammaFunction(float gamma, int gamma_type, vImage_Flags flags);
```

## Parameters

- `gamma`: The gamma value when `gamma_type` is [kvImageGamma_UseGammaValue](kvimagegamma_usegammavalue.md) or [kvImageGamma_UseGammaValue_half_precision](kvimagegamma_usegammavalue_half_precision.md).
- `gamma_type`: A constant that specifies the gamma type. See [Gamma function types](1584480-gamma-function-types.md).
- `flags`: Reserved for future use. Pass [kvImageNoFlags](kvimagenoflags.md).

<a id="return-value"></a>

## Return Value

A gamma function object that encapsulates a gamma value, a gamma function type, and option flags.

<a id="Discussion"></a>

## Discussion

Use this function to create a gamma function object that you pass to [vImageGamma_Planar8toPlanarF](vimagegamma_planar8toplanarf%28________%29.md), [vImageGamma_PlanarFtoPlanar8](vimagegamma_planarftoplanar8%28________%29.md), or [vImageGamma_PlanarF](vimagegamma_planarf%28________%29.md).

The vImage library provides a user-defined half-precision gamma type and constant half-precision gamma types, such as [kvImageGamma_sRGB_forward_half_precision](kvimagegamma_srgb_forward_half_precision.md). Use a half-precision gamma type when creating a gamma function for image data that’s intended for conversion to 8-bit. The half-precision gamma types work with floating-point values in the range `0...1` and provide a precision of ±1 / 4,096.

The gamma correction functions that use a [GammaFunction](gammafunction.md) object are symmetric around zero. That is, they treat negative values as if they’re positive, and restore the sign after applying the exponent.

## See Also

### Applying a gamma function

- [Gamma function types](1584480-gamma-function-types.md): Types of full- or half-precision gamma functions.
- [vImageGamma_Planar8toPlanarF](vimagegamma_planar8toplanarf%28________%29.md): Applies a gamma function to an 8-bit planar image to produce a 32-bit planar image.
- [vImageGamma_PlanarFtoPlanar8](vimagegamma_planarftoplanar8%28________%29.md): Applies a gamma function to a 32-bit planar image to produce an 8-bit planar image.
- [vImageGamma_PlanarF](vimagegamma_planarf%28________%29.md): Applies a gamma function to a PlanarF image.
- [vImageDestroyGammaFunction](vimagedestroygammafunction%28__%29.md): Destroys a gamma function object.
