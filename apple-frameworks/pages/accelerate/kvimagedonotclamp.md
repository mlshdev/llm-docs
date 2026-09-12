> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/kvimagedonotclamp](https://developer.apple.com/documentation/accelerate/kvimagedonotclamp)

# kvImageDoNotClamp (Swift)

**Framework:** Accelerate  
**Kind:** Global Variable  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 2.2+

A flag that disables clamping in some conversions to floating-point formats.

## Declaration

```swift
var kvImageDoNotClamp: Int { get }
```

<a id="Discussion"></a>

## Discussion

Use this flag if the input data describes values outside `[0,1]` that should be preserved.

## See Also

### Constants

- [vImage.Options](vimage/options.md): Set flags on vImage operations to specify processing options.
- [kvImageNoFlags](kvimagenoflags.md): A flag that sets the behavior to the default.
- [kvImageLeaveAlphaUnchanged](kvimageleavealphaunchanged.md): A flag that restricts the operation to red, green, and blue channels only.
- [kvImageDoNotTile](kvimagedonottile.md): A flag that disables vImage internal tiling routines.
- [kvImageHighQualityResampling](kvimagehighqualityresampling.md): A flag that uses a higher-quality, slower resampling filter for geometry operations.
- [kvImageGetTempBufferSize](kvimagegettempbuffersize.md): A flag that returns the minimum temporary buffer size for the operation, given the parameters provided.
- [kvImagePrintDiagnosticsToConsole](kvimageprintdiagnosticstoconsole.md): A flag that prints a debug message if the operation fails.
- [kvImageNoAllocate](kvimagenoallocate.md): A flag that prevents vImage from allocating additional storage.
- [kvImageHDRContent](kvimagehdrcontent.md): A flag that uses HDR-aware methods.
- [kvImageUseFP16Accumulator](kvimageusefp16accumulator.md): A flag that specifies vImage uses faster but lower-precision internal arithmetic for floating-point 16-bit operations.

# kvImageDoNotClamp (Objective-C)

**Framework:** Accelerate  
**Kind:** Enumeration Case  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 2.2+

A flag that disables clamping in some conversions to floating-point formats.

## Declaration

```objectivec
kvImageDoNotClamp
```

<a id="Discussion"></a>

## Discussion

Use this flag if the input data describes values outside `[0,1]` that should be preserved.

## See Also

### Constants

- [kvImageNoFlags](kvimagenoflags.md): A flag that sets the behavior to the default.
- [kvImageLeaveAlphaUnchanged](kvimageleavealphaunchanged.md): A flag that restricts the operation to red, green, and blue channels only.
- [kvImageDoNotTile](kvimagedonottile.md): A flag that disables vImage internal tiling routines.
- [kvImageHighQualityResampling](kvimagehighqualityresampling.md): A flag that uses a higher-quality, slower resampling filter for geometry operations.
- [kvImageGetTempBufferSize](kvimagegettempbuffersize.md): A flag that returns the minimum temporary buffer size for the operation, given the parameters provided.
- [kvImagePrintDiagnosticsToConsole](kvimageprintdiagnosticstoconsole.md): A flag that prints a debug message if the operation fails.
- [kvImageNoAllocate](kvimagenoallocate.md): A flag that prevents vImage from allocating additional storage.
- [kvImageHDRContent](kvimagehdrcontent.md): A flag that uses HDR-aware methods.
- [kvImageUseFP16Accumulator](kvimageusefp16accumulator.md): A flag that specifies vImage uses faster but lower-precision internal arithmetic for floating-point 16-bit operations.
