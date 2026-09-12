> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciimageprocessoroutput/region](https://developer.apple.com/documentation/coreimage/ciimageprocessoroutput/region)

# region (Swift)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

The rectangular region of the output image that your Core Image Processor Kernel must provide.

## Declaration

```swift
var region: CGRect { get }
```

<a id="discussion"></a>

## Discussion

> **Note**

> This may be different (larger or smaller) than the `extent` that was passed to `/CIImageProcessorKernel/applyWithExtent:inputs:arguments:error:`.

## See Also

### Getting Supplemental Information for Image Processing

- [metalCommandBuffer](metalcommandbuffer.md): Returns a Metal command buffer object that can be used for encoding commands.
- [bytesPerRow](bytesperrow.md): The bytes per row of the CPU memory that your Core Image Processor Kernel can write pixels to.
- [format](format.md): The pixel format of the CPU memory that your Core Image Processor Kernel can write pixels to.

# region (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

The rectangular region of the output image that your Core Image Processor Kernel must provide.

## Declaration

```objectivec
@property (nonatomic, readonly) CGRect region;
```

<a id="discussion"></a>

## Discussion

> **Note**

> This may be different (larger or smaller) than the `extent` that was passed to `/CIImageProcessorKernel/applyWithExtent:inputs:arguments:error:`.

## See Also

### Getting Supplemental Information for Image Processing

- [metalCommandBuffer](metalcommandbuffer.md): Returns a Metal command buffer object that can be used for encoding commands.
- [bytesPerRow](bytesperrow.md): The bytes per row of the CPU memory that your Core Image Processor Kernel can write pixels to.
- [format](format.md): The pixel format of the CPU memory that your Core Image Processor Kernel can write pixels to.
