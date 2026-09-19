> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreimage/ciimageprocessoroutput/pixelbuffer

# pixelBuffer (Swift)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

An output pixelBuffer object that your Core Image Processor Kernel can write to.

## Declaration

```swift
var pixelBuffer: CVPixelBuffer? { get }
```

## See Also

### Providing Output Image Data

- [baseAddress](baseaddress.md): The base address of CPU memory that your Core Image Processor Kernel can write pixels to.
- [metalTexture](metaltexture.md): A Metal texture object that can be bound for output using Metal.
- [surface](surface.md): An output surface object that your Core Image Processor Kernel can write to.

# pixelBuffer (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

An output pixelBuffer object that your Core Image Processor Kernel can write to.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) CVPixelBufferRef pixelBuffer;
```

## See Also

### Providing Output Image Data

- [baseAddress](baseaddress.md): The base address of CPU memory that your Core Image Processor Kernel can write pixels to.
- [metalTexture](metaltexture.md): A Metal texture object that can be bound for output using Metal.
- [surface](surface.md): An output surface object that your Core Image Processor Kernel can write to.
