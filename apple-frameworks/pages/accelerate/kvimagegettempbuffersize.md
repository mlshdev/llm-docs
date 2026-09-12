> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/kvimagegettempbuffersize](https://developer.apple.com/documentation/accelerate/kvimagegettempbuffersize)

# kvImageGetTempBufferSize (Swift)

**Framework:** Accelerate  
**Kind:** Global Variable  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A flag that returns the minimum temporary buffer size for the operation, given the parameters provided.

## Declaration

```swift
var kvImageGetTempBufferSize: Int { get }
```

## Mentioned In

- [Applying geometric transforms to images](applying-geometric-transforms-to-images.md)

<a id="Discussion"></a>

## Discussion

When you set this flag, the function returns the number of bytes required for the temporary buffer instead of performing the operation. A negative value indicates an error, and if the function does not accept a temporary buffer, zero is returned.

## See Also

### Constants

- [vImage.Options](vimage/options.md): Set flags on vImage operations to specify processing options.
- [kvImageNoFlags](kvimagenoflags.md): A flag that sets the behavior to the default.
- [kvImageLeaveAlphaUnchanged](kvimageleavealphaunchanged.md): A flag that restricts the operation to red, green, and blue channels only.
- [kvImageDoNotTile](kvimagedonottile.md): A flag that disables vImage internal tiling routines.
- [kvImageHighQualityResampling](kvimagehighqualityresampling.md): A flag that uses a higher-quality, slower resampling filter for geometry operations.
- [kvImagePrintDiagnosticsToConsole](kvimageprintdiagnosticstoconsole.md): A flag that prints a debug message if the operation fails.
- [kvImageNoAllocate](kvimagenoallocate.md): A flag that prevents vImage from allocating additional storage.
- [kvImageHDRContent](kvimagehdrcontent.md): A flag that uses HDR-aware methods.
- [kvImageDoNotClamp](kvimagedonotclamp.md): A flag that disables clamping in some conversions to floating-point formats.
- [kvImageUseFP16Accumulator](kvimageusefp16accumulator.md): A flag that specifies vImage uses faster but lower-precision internal arithmetic for floating-point 16-bit operations.

# kvImageGetTempBufferSize (Objective-C)

**Framework:** Accelerate  
**Kind:** Enumeration Case  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A flag that returns the minimum temporary buffer size for the operation, given the parameters provided.

## Declaration

```objectivec
kvImageGetTempBufferSize
```

## Mentioned In

- [Applying geometric transforms to images](applying-geometric-transforms-to-images.md)

<a id="Discussion"></a>

## Discussion

When you set this flag, the function returns the number of bytes required for the temporary buffer instead of performing the operation. A negative value indicates an error, and if the function does not accept a temporary buffer, zero is returned.

## See Also

### Constants

- [kvImageNoFlags](kvimagenoflags.md): A flag that sets the behavior to the default.
- [kvImageLeaveAlphaUnchanged](kvimageleavealphaunchanged.md): A flag that restricts the operation to red, green, and blue channels only.
- [kvImageDoNotTile](kvimagedonottile.md): A flag that disables vImage internal tiling routines.
- [kvImageHighQualityResampling](kvimagehighqualityresampling.md): A flag that uses a higher-quality, slower resampling filter for geometry operations.
- [kvImagePrintDiagnosticsToConsole](kvimageprintdiagnosticstoconsole.md): A flag that prints a debug message if the operation fails.
- [kvImageNoAllocate](kvimagenoallocate.md): A flag that prevents vImage from allocating additional storage.
- [kvImageHDRContent](kvimagehdrcontent.md): A flag that uses HDR-aware methods.
- [kvImageDoNotClamp](kvimagedonotclamp.md): A flag that disables clamping in some conversions to floating-point formats.
- [kvImageUseFP16Accumulator](kvimageusefp16accumulator.md): A flag that specifies vImage uses faster but lower-precision internal arithmetic for floating-point 16-bit operations.
