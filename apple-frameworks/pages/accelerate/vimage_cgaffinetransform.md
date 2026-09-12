> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimage_cgaffinetransform](https://developer.apple.com/documentation/accelerate/vimage_cgaffinetransform)

# vImage_CGAffineTransform (Swift)

**Framework:** Accelerate  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure for values that represent a Core Graphics–compatible affine transformation.

## Declaration

```swift
typealias vImage_CGAffineTransform = vImage_AffineTransform_Double
```

## Mentioned In

- [Applying geometric transforms to images](applying-geometric-transforms-to-images.md)

<a id="Discussion"></a>

## Discussion

This structure represents the 3x2 matrix :

![3 by 2 matrix](https://developer.apple.com/images/com.apple.accelerate/media-2557524.gif)

This structure changes size to be the same size as the Core Graphics [CGAffineTransform](../corefoundation/cgaffinetransform.md) data structure. [CGAffineTransform](../coregraphics/cgaffinetransform.md) describes functions for creating and manipulating matrixes of this form.

## See Also

### Data Types

- [vImage_Buffer](vimage_buffer.md): An image buffer that stores an image’s pixel data, dimensions, and row stride.
- [vImagePixelCount](vimagepixelcount.md): A type for the number of pixels.
- [vImage_AffineTransform](vimage_affinetransform.md): A structure for values that represent an affine transformation.
- [vImage_AffineTransform_Double](vimage_affinetransform_double.md): A structure for values that represent a double-precision affine transformation.
- [vImage_Error](vimage_error.md): A type for image errors.
- [vImage_Flags](vimage_flags.md): A type for processing options.
- [GammaFunction](gammafunction.md): A type for a gamma function.
- [ResamplingFilter](resamplingfilter.md): A pointer to a resampling filter callback function.

# vImage_CGAffineTransform (Objective-C)

**Framework:** Accelerate  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure for values that represent a Core Graphics–compatible affine transformation.

## Declaration

```objectivec
typedef vImage_AffineTransform_Double vImage_CGAffineTransform;
```

## Mentioned In

- [Applying geometric transforms to images](applying-geometric-transforms-to-images.md)

<a id="Discussion"></a>

## Discussion

This structure represents the 3x2 matrix :

![3 by 2 matrix](https://developer.apple.com/images/com.apple.accelerate/media-2557524.gif)

This structure changes size to be the same size as the Core Graphics [CGAffineTransform](../corefoundation/cgaffinetransform.md) data structure. [CGAffineTransform](../coregraphics/cgaffinetransform.md) describes functions for creating and manipulating matrixes of this form.

## See Also

### Data Types

- [vImage_Buffer](vimage_buffer.md): An image buffer that stores an image’s pixel data, dimensions, and row stride.
- [vImagePixelCount](vimagepixelcount.md): A type for the number of pixels.
- [vImage_AffineTransform](vimage_affinetransform.md): A structure for values that represent an affine transformation.
- [vImage_AffineTransform_Double](vimage_affinetransform_double.md): A structure for values that represent a double-precision affine transformation.
- [vImage_Error](vimage_error.md): A type for image errors.
- [vImage_Flags](vimage_flags.md): A type for processing options.
- [GammaFunction](gammafunction.md): A type for a gamma function.
- [ResamplingFilter](resamplingfilter.md): A pointer to a resampling filter callback function.
