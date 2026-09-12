> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimagedestroygammafunction(_:)](https://developer.apple.com/documentation/accelerate/vimagedestroygammafunction(_:))

# vImageDestroyGammaFunction(\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 5.0+ · visionOS 1.0+ · watchOS 1.0+

Destroys a gamma function object.

## Declaration

```swift
func vImageDestroyGammaFunction(_ f: GammaFunction!)
```

## Parameters

- `f`: The gamma function object.

## See Also

### Applying a gamma function

- [vImageCreateGammaFunction(\_:\_:\_:)](vimagecreategammafunction%28______%29.md): Returns a gamma function object.
- [Gamma function types](1584480-gamma-function-types.md): Types of full- or half-precision gamma functions.
- [vImageGamma_Planar8toPlanarF(\_:\_:\_:\_:)](vimagegamma_planar8toplanarf%28________%29.md): Applies a gamma function to an 8-bit planar image to produce a 32-bit planar image.
- [vImageGamma_PlanarFtoPlanar8(\_:\_:\_:\_:)](vimagegamma_planarftoplanar8%28________%29.md): Applies a gamma function to a 32-bit planar image to produce an 8-bit planar image.
- [vImageGamma_PlanarF(\_:\_:\_:\_:)](vimagegamma_planarf%28________%29.md): Applies a gamma function to a PlanarF image.
- [Adjusting saturation and applying tone mapping](adjusting-saturation-and-applying-tone-mapping.md): Convert an RGB image to discrete luminance and chrominance channels, and apply color and contrast treatments.

# vImageDestroyGammaFunction (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 5.0+ · visionOS 1.0+ · watchOS 1.0+

Destroys a gamma function object.

## Declaration

```objectivec
void vImageDestroyGammaFunction(GammaFunction f);
```

## Parameters

- `f`: The gamma function object.

## See Also

### Applying a gamma function

- [vImageCreateGammaFunction](vimagecreategammafunction%28______%29.md): Returns a gamma function object.
- [Gamma function types](1584480-gamma-function-types.md): Types of full- or half-precision gamma functions.
- [vImageGamma_Planar8toPlanarF](vimagegamma_planar8toplanarf%28________%29.md): Applies a gamma function to an 8-bit planar image to produce a 32-bit planar image.
- [vImageGamma_PlanarFtoPlanar8](vimagegamma_planarftoplanar8%28________%29.md): Applies a gamma function to a 32-bit planar image to produce an 8-bit planar image.
- [vImageGamma_PlanarF](vimagegamma_planarf%28________%29.md): Applies a gamma function to a PlanarF image.
