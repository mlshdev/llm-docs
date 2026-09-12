> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimage_affinetransform_double](https://developer.apple.com/documentation/accelerate/vimage_affinetransform_double)

# vImage_AffineTransform_Double (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure for values that represent a double-precision affine transformation.

## Declaration

```swift
struct vImage_AffineTransform_Double
```

<a id="overview"></a>

## Overview

This structure represents the 3x2 matrix :

![3 by 2 matrix](https://developer.apple.com/images/com.apple.accelerate/media-2557524.gif)

In 64-bit applications, this structure is just like the Core Graphics [CGAffineTransform](../corefoundation/cgaffinetransform.md) data structure. In 32-bit applications, the Core Graphics data structure is equivalent to [vImage_AffineTransform](vimage_affinetransform.md). Most of the time, you should use the [vImage_CGAffineTransform](vimage_cgaffinetransform.md) data structure, which changes size depending on architecture.

The [CGAffineTransform](../coregraphics/cgaffinetransform.md) describes functions for creating and manipulating matrixes of this form.

## Topics

### Initializers

- [init(a:b:c:d:tx:ty:)](vimage_affinetransform_double/init%28a_b_c_d_tx_ty_%29-9nehj.md): Returns a new affine transform.
- [init()](vimage_affinetransform_double/init%28%29.md)
- [init(a:b:c:d:tx:ty:)](vimage_affinetransform_double/init%28a_b_c_d_tx_ty_%29-4gqxp.md)

### Affine Transform Matrix Elements

- [a](vimage_affinetransform_double/a.md): The entry at position `[1,1]` in the matrix.
- [b](vimage_affinetransform_double/b.md): The entry at position `[1,2]` in the matrix.
- [c](vimage_affinetransform_double/c.md): The entry at position `[2,1]` in the matrix.
- [d](vimage_affinetransform_double/d.md): The entry at position `[2,2]` in the matrix.
- [tx](vimage_affinetransform_double/tx.md): The entry at position `[3,1]` in the matrix.
- [ty](vimage_affinetransform_double/ty.md): The entry at position `[3,2]` in the matrix.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Data Types

- [vImage_Buffer](vimage_buffer.md): An image buffer that stores an image’s pixel data, dimensions, and row stride.
- [vImagePixelCount](vimagepixelcount.md): A type for the number of pixels.
- [vImage_AffineTransform](vimage_affinetransform.md): A structure for values that represent an affine transformation.
- [vImage_CGAffineTransform](vimage_cgaffinetransform.md): A structure for values that represent a Core Graphics–compatible affine transformation.
- [vImage_Error](vimage_error.md): A type for image errors.
- [vImage_Flags](vimage_flags.md): A type for processing options.
- [GammaFunction](gammafunction.md): A type for a gamma function.
- [ResamplingFilter](resamplingfilter.md): A pointer to a resampling filter callback function.

# vImage_AffineTransform_Double (Objective-C)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure for values that represent a double-precision affine transformation.

## Declaration

```objectivec
typedef struct vImage_AffineTransform_Double { ... } vImage_AffineTransform_Double;
```

<a id="overview"></a>

## Overview

This structure represents the 3x2 matrix :

![3 by 2 matrix](https://developer.apple.com/images/com.apple.accelerate/media-2557524.gif)

In 64-bit applications, this structure is just like the Core Graphics [CGAffineTransform](../corefoundation/cgaffinetransform.md) data structure. In 32-bit applications, the Core Graphics data structure is equivalent to [vImage_AffineTransform](vimage_affinetransform.md). Most of the time, you should use the [vImage_CGAffineTransform](vimage_cgaffinetransform.md) data structure, which changes size depending on architecture.

The [CGAffineTransform](../coregraphics/cgaffinetransform.md) describes functions for creating and manipulating matrixes of this form.

## Topics

### Affine Transform Matrix Elements

- [a](vimage_affinetransform_double/a.md): The entry at position `[1,1]` in the matrix.
- [b](vimage_affinetransform_double/b.md): The entry at position `[1,2]` in the matrix.
- [c](vimage_affinetransform_double/c.md): The entry at position `[2,1]` in the matrix.
- [d](vimage_affinetransform_double/d.md): The entry at position `[2,2]` in the matrix.
- [tx](vimage_affinetransform_double/tx.md): The entry at position `[3,1]` in the matrix.
- [ty](vimage_affinetransform_double/ty.md): The entry at position `[3,2]` in the matrix.

## See Also

### Data Types

- [vImage_Buffer](vimage_buffer.md): An image buffer that stores an image’s pixel data, dimensions, and row stride.
- [vImagePixelCount](vimagepixelcount.md): A type for the number of pixels.
- [vImage_AffineTransform](vimage_affinetransform.md): A structure for values that represent an affine transformation.
- [vImage_CGAffineTransform](vimage_cgaffinetransform.md): A structure for values that represent a Core Graphics–compatible affine transformation.
- [vImage_Error](vimage_error.md): A type for image errors.
- [vImage_Flags](vimage_flags.md): A type for processing options.
- [GammaFunction](gammafunction.md): A type for a gamma function.
- [ResamplingFilter](resamplingfilter.md): A pointer to a resampling filter callback function.
