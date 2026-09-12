> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciimageprocessoroutput/baseaddress](https://developer.apple.com/documentation/coreimage/ciimageprocessoroutput/baseaddress)

# baseAddress (Swift)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

The base address of CPU memory that your Core Image Processor Kernel can write pixels to.

## Declaration

```swift
var baseAddress: UnsafeMutableRawPointer { get }
```

## See Also

### Providing Output Image Data

- [metalTexture](metaltexture.md): A Metal texture object that can be bound for output using Metal.
- [pixelBuffer](pixelbuffer.md): An output pixelBuffer object that your Core Image Processor Kernel can write to.
- [surface](surface.md): An output surface object that your Core Image Processor Kernel can write to.

# baseAddress (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

The base address of CPU memory that your Core Image Processor Kernel can write pixels to.

## Declaration

```objectivec
@property (nonatomic, readonly) void * baseAddress;
```

## See Also

### Providing Output Image Data

- [metalTexture](metaltexture.md): A Metal texture object that can be bound for output using Metal.
- [pixelBuffer](pixelbuffer.md): An output pixelBuffer object that your Core Image Processor Kernel can write to.
- [surface](surface.md): An output surface object that your Core Image Processor Kernel can write to.
