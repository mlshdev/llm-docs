> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciimageprocessoroutput/metalcommandbuffer](https://developer.apple.com/documentation/coreimage/ciimageprocessoroutput/metalcommandbuffer)

# metalCommandBuffer (Swift)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Returns a Metal command buffer object that can be used for encoding commands.

## Declaration

```swift
var metalCommandBuffer: (any MTLCommandBuffer)? { get }
```

## See Also

### Getting Supplemental Information for Image Processing

- [region](region.md): The rectangular region of the output image that your Core Image Processor Kernel must provide.
- [bytesPerRow](bytesperrow.md): The bytes per row of the CPU memory that your Core Image Processor Kernel can write pixels to.
- [format](format.md): The pixel format of the CPU memory that your Core Image Processor Kernel can write pixels to.

# metalCommandBuffer (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Returns a Metal command buffer object that can be used for encoding commands.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) id<MTLCommandBuffer> metalCommandBuffer;
```

## See Also

### Getting Supplemental Information for Image Processing

- [region](region.md): The rectangular region of the output image that your Core Image Processor Kernel must provide.
- [bytesPerRow](bytesperrow.md): The bytes per row of the CPU memory that your Core Image Processor Kernel can write pixels to.
- [format](format.md): The pixel format of the CPU memory that your Core Image Processor Kernel can write pixels to.
