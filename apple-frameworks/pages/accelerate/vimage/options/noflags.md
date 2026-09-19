> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accelerate/vimage/options/noflags

# noFlags

**Framework:** Accelerate  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

A flag that sets the behavior to the default.

## Declaration

```swift
static let noFlags: vImage.Options
```

## See Also

### Related Documentation

- [kvImageNoFlags](../../kvimagenoflags.md): A flag that sets the behavior to the default.

### Type Properties

- [backgroundColorFill](backgroundcolorfill.md): A flag that uses the background color for missing pixels.
- [copyInPlace](copyinplace.md): A flag that copies the value of the edge pixel in the source to the destination.
- [doNotClamp](donotclamp.md): A flag that disables clamping in some conversions to floating-point formats.
- [doNotTile](donottile.md): A flag that disables vImage internal tiling routines.
- [getTempBufferSize](gettempbuffersize.md): A flag that returns the minimum temporary buffer size for the operation, given the parameters provided.
- [hdrContent](hdrcontent.md): A flag that uses HDR-aware methods.
- [highQualityResampling](highqualityresampling.md): A flag that uses a higher quality, slower resampling filter for geometry operations.
- [imageExtend](imageextend.md): A flag that extends the edges of the image infinitely.
- [leaveAlphaUnchanged](leavealphaunchanged.md): A flag that restricts the operation to red, green, and blue channels only.
- [noAllocate](noallocate.md): A flag that prevents vImage from allocating additional storage.
- [printDiagnosticsToConsole](printdiagnosticstoconsole.md): A flag that prints a debug message if the operation fails.
- [truncateKernel](truncatekernel.md): A flag that uses only the part of the kernel that overlaps the image.
