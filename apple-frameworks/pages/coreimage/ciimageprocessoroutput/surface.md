> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciimageprocessoroutput/surface](https://developer.apple.com/documentation/coreimage/ciimageprocessoroutput/surface)

# surface (Swift)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

An output surface object that your Core Image Processor Kernel can write to.

## Declaration

```swift
var surface: IOSurfaceRef { get }
```

## See Also

### Providing Output Image Data

- [baseAddress](baseaddress.md): The base address of CPU memory that your Core Image Processor Kernel can write pixels to.
- [metalTexture](metaltexture.md): A Metal texture object that can be bound for output using Metal.
- [pixelBuffer](pixelbuffer.md): An output pixelBuffer object that your Core Image Processor Kernel can write to.

# surface (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

An output surface object that your Core Image Processor Kernel can write to.

## Declaration

```objectivec
@property (nonatomic, readonly) IOSurfaceRef surface;
```

## See Also

### Providing Output Image Data

- [baseAddress](baseaddress.md): The base address of CPU memory that your Core Image Processor Kernel can write pixels to.
- [metalTexture](metaltexture.md): A Metal texture object that can be bound for output using Metal.
- [pixelBuffer](pixelbuffer.md): An output pixelBuffer object that your Core Image Processor Kernel can write to.
