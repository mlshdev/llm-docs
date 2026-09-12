> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciimageprocessoroutput/bytesperrow](https://developer.apple.com/documentation/coreimage/ciimageprocessoroutput/bytesperrow)

# bytesPerRow (Swift)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

The bytes per row of the CPU memory that your Core Image Processor Kernel can write pixels to.

## Declaration

```swift
var bytesPerRow: Int { get }
```

## See Also

### Getting Supplemental Information for Image Processing

- [region](region.md): The rectangular region of the output image that your Core Image Processor Kernel must provide.
- [metalCommandBuffer](metalcommandbuffer.md): Returns a Metal command buffer object that can be used for encoding commands.
- [format](format.md): The pixel format of the CPU memory that your Core Image Processor Kernel can write pixels to.

# bytesPerRow (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

The bytes per row of the CPU memory that your Core Image Processor Kernel can write pixels to.

## Declaration

```objectivec
@property (nonatomic, readonly) size_t bytesPerRow;
```

## See Also

### Getting Supplemental Information for Image Processing

- [region](region.md): The rectangular region of the output image that your Core Image Processor Kernel must provide.
- [metalCommandBuffer](metalcommandbuffer.md): Returns a Metal command buffer object that can be used for encoding commands.
- [format](format.md): The pixel format of the CPU memory that your Core Image Processor Kernel can write pixels to.
