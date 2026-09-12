> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/kvimagenoallocate](https://developer.apple.com/documentation/accelerate/kvimagenoallocate)

# kvImageNoAllocate (Swift)

**Framework:** Accelerate  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A flag that prevents vImage from allocating additional storage.

## Declaration

```swift
var kvImageNoAllocate: Int { get }
```

<a id="Discussion"></a>

## Discussion

When you set this flag, vImage uses the memory provided to the buffer rather than allocating new memory. For example, instead of overwriting a buffer’s [data](vimage_buffer/data.md) property with a newly allocated pointer to memory, vImage uses the memory pointed to by the [data](vimage_buffer/data.md) property directly. In other cases, it may cause the function to assume ownership of a buffer, rather than allocating a copy. You are responsible for making sure the buffer that you allocate is large enough to hold the image. Most vImage functions do not allocate memory and assume that the buffer’s data is already allocated, and, in the case of source image buffers, contain valid pixel data.

## See Also

### Constants

- [vImage.Options](vimage/options.md): Set flags on vImage operations to specify processing options.
- [kvImageNoFlags](kvimagenoflags.md): A flag that sets the behavior to the default.
- [kvImageLeaveAlphaUnchanged](kvimageleavealphaunchanged.md): A flag that restricts the operation to red, green, and blue channels only.
- [kvImageDoNotTile](kvimagedonottile.md): A flag that disables vImage internal tiling routines.
- [kvImageHighQualityResampling](kvimagehighqualityresampling.md): A flag that uses a higher-quality, slower resampling filter for geometry operations.
- [kvImageGetTempBufferSize](kvimagegettempbuffersize.md): A flag that returns the minimum temporary buffer size for the operation, given the parameters provided.
- [kvImagePrintDiagnosticsToConsole](kvimageprintdiagnosticstoconsole.md): A flag that prints a debug message if the operation fails.
- [kvImageHDRContent](kvimagehdrcontent.md): A flag that uses HDR-aware methods.
- [kvImageDoNotClamp](kvimagedonotclamp.md): A flag that disables clamping in some conversions to floating-point formats.
- [kvImageUseFP16Accumulator](kvimageusefp16accumulator.md): A flag that specifies vImage uses faster but lower-precision internal arithmetic for floating-point 16-bit operations.

# kvImageNoAllocate (Objective-C)

**Framework:** Accelerate  
**Kind:** Enumeration Case  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A flag that prevents vImage from allocating additional storage.

## Declaration

```objectivec
kvImageNoAllocate
```

<a id="Discussion"></a>

## Discussion

When you set this flag, vImage uses the memory provided to the buffer rather than allocating new memory. For example, instead of overwriting a buffer’s [data](vimage_buffer/data.md) property with a newly allocated pointer to memory, vImage uses the memory pointed to by the [data](vimage_buffer/data.md) property directly. In other cases, it may cause the function to assume ownership of a buffer, rather than allocating a copy. You are responsible for making sure the buffer that you allocate is large enough to hold the image. Most vImage functions do not allocate memory and assume that the buffer’s data is already allocated, and, in the case of source image buffers, contain valid pixel data.

## See Also

### Constants

- [kvImageNoFlags](kvimagenoflags.md): A flag that sets the behavior to the default.
- [kvImageLeaveAlphaUnchanged](kvimageleavealphaunchanged.md): A flag that restricts the operation to red, green, and blue channels only.
- [kvImageDoNotTile](kvimagedonottile.md): A flag that disables vImage internal tiling routines.
- [kvImageHighQualityResampling](kvimagehighqualityresampling.md): A flag that uses a higher-quality, slower resampling filter for geometry operations.
- [kvImageGetTempBufferSize](kvimagegettempbuffersize.md): A flag that returns the minimum temporary buffer size for the operation, given the parameters provided.
- [kvImagePrintDiagnosticsToConsole](kvimageprintdiagnosticstoconsole.md): A flag that prints a debug message if the operation fails.
- [kvImageHDRContent](kvimagehdrcontent.md): A flag that uses HDR-aware methods.
- [kvImageDoNotClamp](kvimagedonotclamp.md): A flag that disables clamping in some conversions to floating-point formats.
- [kvImageUseFP16Accumulator](kvimageusefp16accumulator.md): A flag that specifies vImage uses faster but lower-precision internal arithmetic for floating-point 16-bit operations.
