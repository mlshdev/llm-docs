> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/1584480-gamma-function-types](https://developer.apple.com/documentation/accelerate/1584480-gamma-function-types)

# Gamma function types (Swift)

**Framework:** Accelerate  
**Kind:** API Collection

Types of full- or half-precision gamma functions.

## Topics

### User-defined gamma values

- [kvImageGamma_UseGammaValue](kvimagegamma_usegammavalue.md): A user-defined gamma value with full-precision calculation.
- [kvImageGamma_UseGammaValue_half_precision](kvimagegamma_usegammavalue_half_precision.md): A user-defined gamma value with half-precision calculation.

### Constant gamma values

- [kvImageGamma_BT709_forward_half_precision](kvimagegamma_bt709_forward_half_precision.md): The ITU-R BT.709 standard.
- [kvImageGamma_BT709_reverse_half_precision](kvimagegamma_bt709_reverse_half_precision.md): The ITU-R BT.709 standard reverse.
- [kvImageGamma_sRGB_forward_half_precision](kvimagegamma_srgb_forward_half_precision.md): A half-precision calculation using the sRGB standard gamma value of 2.2.
- [kvImageGamma_sRGB_reverse_half_precision](kvimagegamma_srgb_reverse_half_precision.md): A half-precision calculation using the sRGB standard gamma value of 1/2.2.
- [kvImageGamma_5_over_9_half_precision](kvimagegamma_5_over_9_half_precision.md): A half-precision calculation using a gamma value of 5/9 or 1/1.8.
- [kvImageGamma_5_over_11_half_precision](kvimagegamma_5_over_11_half_precision.md): A half-precision calculation using a gamma value of 5/11 or 1/2.2.
- [kvImageGamma_9_over_5_half_precision](kvimagegamma_9_over_5_half_precision.md): A half-precision calculation using a gamma value of 9/5 or 1.8.
- [kvImageGamma_9_over_11_half_precision](kvimagegamma_9_over_11_half_precision.md): A half-precision calculation using a gamma value of 9/11 or (9/5)/(11/5).
- [kvImageGamma_11_over_5_half_precision](kvimagegamma_11_over_5_half_precision.md): A half-precision calculation using a gamma value of 11/5 or 2.2.
- [kvImageGamma_11_over_9_half_precision](kvimagegamma_11_over_9_half_precision.md): A half-precision calculation using a gamma value of 11/9 or (11/5)/(9/5).

## See Also

### Applying a gamma function

- [vImageCreateGammaFunction(\_:\_:\_:)](vimagecreategammafunction%28______%29.md): Returns a gamma function object.
- [vImageGamma_Planar8toPlanarF(\_:\_:\_:\_:)](vimagegamma_planar8toplanarf%28________%29.md): Applies a gamma function to an 8-bit planar image to produce a 32-bit planar image.
- [vImageGamma_PlanarFtoPlanar8(\_:\_:\_:\_:)](vimagegamma_planarftoplanar8%28________%29.md): Applies a gamma function to a 32-bit planar image to produce an 8-bit planar image.
- [vImageGamma_PlanarF(\_:\_:\_:\_:)](vimagegamma_planarf%28________%29.md): Applies a gamma function to a PlanarF image.
- [vImageDestroyGammaFunction(\_:)](vimagedestroygammafunction%28__%29.md): Destroys a gamma function object.
- [Adjusting saturation and applying tone mapping](adjusting-saturation-and-applying-tone-mapping.md): Convert an RGB image to discrete luminance and chrominance channels, and apply color and contrast treatments.

# Gamma function types (Objective-C)

**Framework:** Accelerate  
**Kind:** API Collection

Types of full- or half-precision gamma functions.

## Topics

### User-defined gamma values

- [kvImageGamma_UseGammaValue](kvimagegamma_usegammavalue.md): A user-defined gamma value with full-precision calculation.
- [kvImageGamma_UseGammaValue_half_precision](kvimagegamma_usegammavalue_half_precision.md): A user-defined gamma value with half-precision calculation.

### Constant gamma values

- [kvImageGamma_BT709_forward_half_precision](kvimagegamma_bt709_forward_half_precision.md): The ITU-R BT.709 standard.
- [kvImageGamma_BT709_reverse_half_precision](kvimagegamma_bt709_reverse_half_precision.md): The ITU-R BT.709 standard reverse.
- [kvImageGamma_sRGB_forward_half_precision](kvimagegamma_srgb_forward_half_precision.md): A half-precision calculation using the sRGB standard gamma value of 2.2.
- [kvImageGamma_sRGB_reverse_half_precision](kvimagegamma_srgb_reverse_half_precision.md): A half-precision calculation using the sRGB standard gamma value of 1/2.2.
- [kvImageGamma_5_over_9_half_precision](kvimagegamma_5_over_9_half_precision.md): A half-precision calculation using a gamma value of 5/9 or 1/1.8.
- [kvImageGamma_5_over_11_half_precision](kvimagegamma_5_over_11_half_precision.md): A half-precision calculation using a gamma value of 5/11 or 1/2.2.
- [kvImageGamma_9_over_5_half_precision](kvimagegamma_9_over_5_half_precision.md): A half-precision calculation using a gamma value of 9/5 or 1.8.
- [kvImageGamma_9_over_11_half_precision](kvimagegamma_9_over_11_half_precision.md): A half-precision calculation using a gamma value of 9/11 or (9/5)/(11/5).
- [kvImageGamma_11_over_5_half_precision](kvimagegamma_11_over_5_half_precision.md): A half-precision calculation using a gamma value of 11/5 or 2.2.
- [kvImageGamma_11_over_9_half_precision](kvimagegamma_11_over_9_half_precision.md): A half-precision calculation using a gamma value of 11/9 or (11/5)/(9/5).

## See Also

### Applying a gamma function

- [vImageCreateGammaFunction](vimagecreategammafunction%28______%29.md): Returns a gamma function object.
- [vImageGamma_Planar8toPlanarF](vimagegamma_planar8toplanarf%28________%29.md): Applies a gamma function to an 8-bit planar image to produce a 32-bit planar image.
- [vImageGamma_PlanarFtoPlanar8](vimagegamma_planarftoplanar8%28________%29.md): Applies a gamma function to a 32-bit planar image to produce an 8-bit planar image.
- [vImageGamma_PlanarF](vimagegamma_planarf%28________%29.md): Applies a gamma function to a PlanarF image.
- [vImageDestroyGammaFunction](vimagedestroygammafunction%28__%29.md): Destroys a gamma function object.
