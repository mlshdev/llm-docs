> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciimageprocessorinput/surface](https://developer.apple.com/documentation/coreimage/ciimageprocessorinput/surface)

# surface (Swift)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

An input surface object that your Core Image Processor Kernel can read from.

## Declaration

```swift
var surface: IOSurfaceRef { get }
```

<a id="discussion"></a>

## Discussion

> **Warning**

> This surface must not be modified by the [CIImageProcessorKernel](../ciimageprocessorkernel.md).

## See Also

### Accessing Input Image Data

- [baseAddress](baseaddress.md): The base address of CPU memory that your Core Image Processor Kernel can read pixels from.
- [metalTexture](metaltexture.md): A MTLTexture object that can be bound for input using Metal.
- [pixelBuffer](pixelbuffer.md): An input pixel buffer object that your Core Image Processor Kernel can read from.

# surface (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

An input surface object that your Core Image Processor Kernel can read from.

## Declaration

```objectivec
@property (nonatomic, readonly) IOSurfaceRef surface;
```

<a id="discussion"></a>

## Discussion

> **Warning**

> This surface must not be modified by the [CIImageProcessorKernel](../ciimageprocessorkernel.md).

## See Also

### Accessing Input Image Data

- [baseAddress](baseaddress.md): The base address of CPU memory that your Core Image Processor Kernel can read pixels from.
- [metalTexture](metaltexture.md): A MTLTexture object that can be bound for input using Metal.
- [pixelBuffer](pixelbuffer.md): An input pixel buffer object that your Core Image Processor Kernel can read from.
