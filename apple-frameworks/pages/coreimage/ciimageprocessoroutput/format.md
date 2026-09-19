> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreimage/ciimageprocessoroutput/format

# format (Swift)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

The pixel format of the CPU memory that your Core Image Processor Kernel can write pixels to.

## Declaration

```swift
var format: CIFormat { get }
```

## See Also

### Getting Supplemental Information for Image Processing

- [region](region.md): The rectangular region of the output image that your Core Image Processor Kernel must provide.
- [metalCommandBuffer](metalcommandbuffer.md): Returns a Metal command buffer object that can be used for encoding commands.
- [bytesPerRow](bytesperrow.md): The bytes per row of the CPU memory that your Core Image Processor Kernel can write pixels to.

# format (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

The pixel format of the CPU memory that your Core Image Processor Kernel can write pixels to.

## Declaration

```objectivec
@property (nonatomic, readonly) CIFormat format;
```

## See Also

### Getting Supplemental Information for Image Processing

- [region](region.md): The rectangular region of the output image that your Core Image Processor Kernel must provide.
- [metalCommandBuffer](metalcommandbuffer.md): Returns a Metal command buffer object that can be used for encoding commands.
- [bytesPerRow](bytesperrow.md): The bytes per row of the CPU memory that your Core Image Processor Kernel can write pixels to.
