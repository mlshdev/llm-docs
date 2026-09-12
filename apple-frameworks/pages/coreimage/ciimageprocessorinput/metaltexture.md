> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciimageprocessorinput/metaltexture](https://developer.apple.com/documentation/coreimage/ciimageprocessorinput/metaltexture)

# metalTexture (Swift)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

A MTLTexture object that can be bound for input using Metal.

## Declaration

```swift
var metalTexture: (any MTLTexture)? { get }
```

<a id="discussion"></a>

## Discussion

> **Warning**

> This texture must not be modified by the [CIImageProcessorKernel](../ciimageprocessorkernel.md).

## See Also

### Accessing Input Image Data

- [baseAddress](baseaddress.md): The base address of CPU memory that your Core Image Processor Kernel can read pixels from.
- [pixelBuffer](pixelbuffer.md): An input pixel buffer object that your Core Image Processor Kernel can read from.
- [surface](surface.md): An input surface object that your Core Image Processor Kernel can read from.

# metalTexture (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

A MTLTexture object that can be bound for input using Metal.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) id<MTLTexture> metalTexture;
```

<a id="discussion"></a>

## Discussion

> **Warning**

> This texture must not be modified by the [CIImageProcessorKernel](../ciimageprocessorkernel.md).

## See Also

### Accessing Input Image Data

- [baseAddress](baseaddress.md): The base address of CPU memory that your Core Image Processor Kernel can read pixels from.
- [pixelBuffer](pixelbuffer.md): An input pixel buffer object that your Core Image Processor Kernel can read from.
- [surface](surface.md): An input surface object that your Core Image Processor Kernel can read from.
