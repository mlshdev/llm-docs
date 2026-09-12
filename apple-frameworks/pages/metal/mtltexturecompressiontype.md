> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtltexturecompressiontype](https://developer.apple.com/documentation/metal/mtltexturecompressiontype)

# MTLTextureCompressionType (Swift)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.5+ · tvOS 16.0+ · visionOS 1.0+

## Declaration

```swift
enum MTLTextureCompressionType
```

## Topics

### Enumeration Cases

- [MTLTextureCompressionType.lossless](mtltexturecompressiontype/lossless.md)
- [MTLTextureCompressionType.lossy](mtltexturecompressiontype/lossy.md)

### Initializers

- [init(rawValue:)](mtltexturecompressiontype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Texture basics

- [Understanding color-renderable pixel format sizes](understanding-color-renderable-pixel-format-sizes.md): Know the size limits of color render targets in Apple GPUs based on the target’s pixel format.
- [Optimizing texture data](optimizing-texture-data.md): Optimize a texture’s data to improve GPU or CPU access.
- [MTLTexture](mtltexture.md): A resource that holds formatted image data.
- [MTLTextureDescriptor](mtltexturedescriptor.md): An instance that you use to configure new Metal texture instances.
- [MTKTextureLoader](../metalkit/mtktextureloader.md): An object that creates textures from existing data in common image formats.
- [MTLSharedTextureHandle](mtlsharedtexturehandle.md): A texture handle that can be shared across process address space boundaries.
- [MTLPixelFormat](mtlpixelformat.md): The data formats that describe the organization and characteristics of individual pixels in a texture.

# MTLTextureCompressionType (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.5+ · tvOS 16.0+ · visionOS 1.0+

## Declaration

```objectivec
enum MTLTextureCompressionType : NSInteger;
```

## Topics

### Enumeration Cases

- [MTLTextureCompressionTypeLossless](mtltexturecompressiontype/lossless.md)
- [MTLTextureCompressionTypeLossy](mtltexturecompressiontype/lossy.md)

## See Also

### Texture basics

- [Understanding color-renderable pixel format sizes](understanding-color-renderable-pixel-format-sizes.md): Know the size limits of color render targets in Apple GPUs based on the target’s pixel format.
- [Optimizing texture data](optimizing-texture-data.md): Optimize a texture’s data to improve GPU or CPU access.
- [MTLTexture](mtltexture.md): A resource that holds formatted image data.
- [MTLTextureDescriptor](mtltexturedescriptor.md): An instance that you use to configure new Metal texture instances.
- [MTKTextureLoader](../metalkit/mtktextureloader.md): An object that creates textures from existing data in common image formats.
- [MTLSharedTextureHandle](mtlsharedtexturehandle.md): A texture handle that can be shared across process address space boundaries.
- [MTLPixelFormat](mtlpixelformat.md): The data formats that describe the organization and characteristics of individual pixels in a texture.
