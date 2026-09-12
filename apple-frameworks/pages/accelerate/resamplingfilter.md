> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/resamplingfilter](https://developer.apple.com/documentation/accelerate/resamplingfilter)

# ResamplingFilter (Swift)

**Framework:** Accelerate  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A pointer to a resampling filter callback function.

## Declaration

```swift
typealias ResamplingFilter = UnsafeMutableRawPointer
```

<a id="Discussion"></a>

## Discussion

You pass a resampling filter callback to a shear function. The resampling filter pointer can point to a structure that contains a function, rows of precalculated values, flag settings, and so on. The shear function requires that the structure contains a scale factor.

## See Also

### Data Types

- [vImage_Buffer](vimage_buffer.md): An image buffer that stores an image’s pixel data, dimensions, and row stride.
- [vImagePixelCount](vimagepixelcount.md): A type for the number of pixels.
- [vImage_AffineTransform](vimage_affinetransform.md): A structure for values that represent an affine transformation.
- [vImage_AffineTransform_Double](vimage_affinetransform_double.md): A structure for values that represent a double-precision affine transformation.
- [vImage_CGAffineTransform](vimage_cgaffinetransform.md): A structure for values that represent a Core Graphics–compatible affine transformation.
- [vImage_Error](vimage_error.md): A type for image errors.
- [vImage_Flags](vimage_flags.md): A type for processing options.
- [GammaFunction](gammafunction.md): A type for a gamma function.

# ResamplingFilter (Objective-C)

**Framework:** Accelerate  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A pointer to a resampling filter callback function.

## Declaration

```objectivec
typedef void * ResamplingFilter;
```

<a id="Discussion"></a>

## Discussion

You pass a resampling filter callback to a shear function. The resampling filter pointer can point to a structure that contains a function, rows of precalculated values, flag settings, and so on. The shear function requires that the structure contains a scale factor.

## See Also

### Data Types

- [vImage_Buffer](vimage_buffer.md): An image buffer that stores an image’s pixel data, dimensions, and row stride.
- [vImagePixelCount](vimagepixelcount.md): A type for the number of pixels.
- [vImage_AffineTransform](vimage_affinetransform.md): A structure for values that represent an affine transformation.
- [vImage_AffineTransform_Double](vimage_affinetransform_double.md): A structure for values that represent a double-precision affine transformation.
- [vImage_CGAffineTransform](vimage_cgaffinetransform.md): A structure for values that represent a Core Graphics–compatible affine transformation.
- [vImage_Error](vimage_error.md): A type for image errors.
- [vImage_Flags](vimage_flags.md): A type for processing options.
- [GammaFunction](gammafunction.md): A type for a gamma function.
