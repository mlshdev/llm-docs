> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/kvimagenoflags](https://developer.apple.com/documentation/accelerate/kvimagenoflags)

# kvImageNoFlags (Swift)

**Framework:** Accelerate  
**Kind:** Global Variable  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A flag that sets the behavior to the default.

## Declaration

```swift
var kvImageNoFlags: Int { get }
```

## Mentioned In

- [Building a Basic Image-Processing Workflow](building-a-basic-image-processing-workflow.md)

## See Also

### Constants

- [vImage.Options](vimage/options.md): Set flags on vImage operations to specify processing options.
- [kvImageLeaveAlphaUnchanged](kvimageleavealphaunchanged.md): A flag that restricts the operation to red, green, and blue channels only.
- [kvImageDoNotTile](kvimagedonottile.md): A flag that disables vImage internal tiling routines.
- [kvImageHighQualityResampling](kvimagehighqualityresampling.md): A flag that uses a higher-quality, slower resampling filter for geometry operations.
- [kvImageGetTempBufferSize](kvimagegettempbuffersize.md): A flag that returns the minimum temporary buffer size for the operation, given the parameters provided.
- [kvImagePrintDiagnosticsToConsole](kvimageprintdiagnosticstoconsole.md): A flag that prints a debug message if the operation fails.
- [kvImageNoAllocate](kvimagenoallocate.md): A flag that prevents vImage from allocating additional storage.
- [kvImageHDRContent](kvimagehdrcontent.md): A flag that uses HDR-aware methods.
- [kvImageDoNotClamp](kvimagedonotclamp.md): A flag that disables clamping in some conversions to floating-point formats.
- [kvImageUseFP16Accumulator](kvimageusefp16accumulator.md): A flag that specifies vImage uses faster but lower-precision internal arithmetic for floating-point 16-bit operations.

# kvImageNoFlags (Objective-C)

**Framework:** Accelerate  
**Kind:** Enumeration Case  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A flag that sets the behavior to the default.

## Declaration

```objectivec
kvImageNoFlags
```

## Mentioned In

- [Building a Basic Image-Processing Workflow](building-a-basic-image-processing-workflow.md)

## See Also

### Constants

- [kvImageLeaveAlphaUnchanged](kvimageleavealphaunchanged.md): A flag that restricts the operation to red, green, and blue channels only.
- [kvImageDoNotTile](kvimagedonottile.md): A flag that disables vImage internal tiling routines.
- [kvImageHighQualityResampling](kvimagehighqualityresampling.md): A flag that uses a higher-quality, slower resampling filter for geometry operations.
- [kvImageGetTempBufferSize](kvimagegettempbuffersize.md): A flag that returns the minimum temporary buffer size for the operation, given the parameters provided.
- [kvImagePrintDiagnosticsToConsole](kvimageprintdiagnosticstoconsole.md): A flag that prints a debug message if the operation fails.
- [kvImageNoAllocate](kvimagenoallocate.md): A flag that prevents vImage from allocating additional storage.
- [kvImageHDRContent](kvimagehdrcontent.md): A flag that uses HDR-aware methods.
- [kvImageDoNotClamp](kvimagedonotclamp.md): A flag that disables clamping in some conversions to floating-point formats.
- [kvImageUseFP16Accumulator](kvimageusefp16accumulator.md): A flag that specifies vImage uses faster but lower-precision internal arithmetic for floating-point 16-bit operations.
