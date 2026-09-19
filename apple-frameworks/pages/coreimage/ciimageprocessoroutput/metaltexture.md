> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreimage/ciimageprocessoroutput/metaltexture

# metalTexture (Swift)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

A Metal texture object that can be bound for output using Metal.

## Declaration

```swift
var metalTexture: (any MTLTexture)? { get }
```

## See Also

### Providing Output Image Data

- [baseAddress](baseaddress.md): The base address of CPU memory that your Core Image Processor Kernel can write pixels to.
- [pixelBuffer](pixelbuffer.md): An output pixelBuffer object that your Core Image Processor Kernel can write to.
- [surface](surface.md): An output surface object that your Core Image Processor Kernel can write to.

# metalTexture (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

A Metal texture object that can be bound for output using Metal.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) id<MTLTexture> metalTexture;
```

## See Also

### Providing Output Image Data

- [baseAddress](baseaddress.md): The base address of CPU memory that your Core Image Processor Kernel can write pixels to.
- [pixelBuffer](pixelbuffer.md): An output pixelBuffer object that your Core Image Processor Kernel can write to.
- [surface](surface.md): An output surface object that your Core Image Processor Kernel can write to.
