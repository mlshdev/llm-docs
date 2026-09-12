> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/kvimagehighqualityresampling](https://developer.apple.com/documentation/accelerate/kvimagehighqualityresampling)

# kvImageHighQualityResampling (Swift)

**Framework:** Accelerate  
**Kind:** Global Variable  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A flag that uses a higher-quality, slower resampling filter for geometry operations.

## Declaration

```swift
var kvImageHighQualityResampling: Int { get }
```

## Mentioned In

- [Applying geometric transforms to images](applying-geometric-transforms-to-images.md)
- [Building a Basic Image-Processing Workflow](building-a-basic-image-processing-workflow.md)
- [Resampling in vImage](resampling-in-vimage.md)

<a id="Discussion"></a>

## Discussion

vImage uses Lanczos interpolation for resampling.

Lanczos interpolation provides excellent results for geometric operations on images, preserves details, and reduces aliasing artifacts compared to other resampling techniques.

By default, vImage uses the Lanczos-3 algorithm for resampling. Set this flag to switch to the higher-quality Lanczos-5 algorithm.

## See Also

### Constants

- [vImage.Options](vimage/options.md): Set flags on vImage operations to specify processing options.
- [kvImageNoFlags](kvimagenoflags.md): A flag that sets the behavior to the default.
- [kvImageLeaveAlphaUnchanged](kvimageleavealphaunchanged.md): A flag that restricts the operation to red, green, and blue channels only.
- [kvImageDoNotTile](kvimagedonottile.md): A flag that disables vImage internal tiling routines.
- [kvImageGetTempBufferSize](kvimagegettempbuffersize.md): A flag that returns the minimum temporary buffer size for the operation, given the parameters provided.
- [kvImagePrintDiagnosticsToConsole](kvimageprintdiagnosticstoconsole.md): A flag that prints a debug message if the operation fails.
- [kvImageNoAllocate](kvimagenoallocate.md): A flag that prevents vImage from allocating additional storage.
- [kvImageHDRContent](kvimagehdrcontent.md): A flag that uses HDR-aware methods.
- [kvImageDoNotClamp](kvimagedonotclamp.md): A flag that disables clamping in some conversions to floating-point formats.
- [kvImageUseFP16Accumulator](kvimageusefp16accumulator.md): A flag that specifies vImage uses faster but lower-precision internal arithmetic for floating-point 16-bit operations.

# kvImageHighQualityResampling (Objective-C)

**Framework:** Accelerate  
**Kind:** Enumeration Case  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A flag that uses a higher-quality, slower resampling filter for geometry operations.

## Declaration

```objectivec
kvImageHighQualityResampling
```

## Mentioned In

- [Applying geometric transforms to images](applying-geometric-transforms-to-images.md)
- [Building a Basic Image-Processing Workflow](building-a-basic-image-processing-workflow.md)
- [Resampling in vImage](resampling-in-vimage.md)

<a id="Discussion"></a>

## Discussion

vImage uses Lanczos interpolation for resampling.

Lanczos interpolation provides excellent results for geometric operations on images, preserves details, and reduces aliasing artifacts compared to other resampling techniques.

By default, vImage uses the Lanczos-3 algorithm for resampling. Set this flag to switch to the higher-quality Lanczos-5 algorithm.

## See Also

### Constants

- [kvImageNoFlags](kvimagenoflags.md): A flag that sets the behavior to the default.
- [kvImageLeaveAlphaUnchanged](kvimageleavealphaunchanged.md): A flag that restricts the operation to red, green, and blue channels only.
- [kvImageDoNotTile](kvimagedonottile.md): A flag that disables vImage internal tiling routines.
- [kvImageGetTempBufferSize](kvimagegettempbuffersize.md): A flag that returns the minimum temporary buffer size for the operation, given the parameters provided.
- [kvImagePrintDiagnosticsToConsole](kvimageprintdiagnosticstoconsole.md): A flag that prints a debug message if the operation fails.
- [kvImageNoAllocate](kvimagenoallocate.md): A flag that prevents vImage from allocating additional storage.
- [kvImageHDRContent](kvimagehdrcontent.md): A flag that uses HDR-aware methods.
- [kvImageDoNotClamp](kvimagedonotclamp.md): A flag that disables clamping in some conversions to floating-point formats.
- [kvImageUseFP16Accumulator](kvimageusefp16accumulator.md): A flag that specifies vImage uses faster but lower-precision internal arithmetic for floating-point 16-bit operations.
