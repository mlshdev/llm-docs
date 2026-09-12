> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtltexturedescriptor/texture2ddescriptor(pixelformat:width:height:mipmapped:)](https://developer.apple.com/documentation/metal/mtltexturedescriptor/texture2ddescriptor(pixelformat:width:height:mipmapped:))

# texture2DDescriptor(pixelFormat:width:height:mipmapped:) (Swift)

**Framework:** Metal  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Creates a texture descriptor object for a 2D texture.

## Declaration

```swift
class func texture2DDescriptor(pixelFormat: MTLPixelFormat, width: Int, height: Int, mipmapped: Bool) -> MTLTextureDescriptor
```

## Parameters

- `pixelFormat`: The format describing how every pixel on the texture image is stored. The default value is [MTLPixelFormat.rgba8Unorm](../mtlpixelformat/rgba8unorm.md).
- `width`: The width of the 2D texture image. The value needs to be greater than or equal to `1`.
- `height`: The height of the 2D texture image. The value needs to be greater than or equal to `1`.
- `mipmapped`: A Boolean indicating whether the resulting image should be mipmapped. If [true](https://developer.apple.com/documentation/swift/true), then the [mipmapLevelCount](mipmaplevelcount.md) property in the returned descriptor is computed from `width` and `height`. If [false](https://developer.apple.com/documentation/swift/false), then [mipmapLevelCount](mipmaplevelcount.md) is `1`.

<a id="return-value"></a>

## Return Value

A pointer to a texture descriptor object for a 2D texture.

## See Also

### Related Documentation

- [Metal Shading Language Guide](https://developer.apple.com/library/archive/documentation/Metal/Reference/MetalShadingLanguageGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40014364)
- [Metal Programming Guide](https://developer.apple.com/library/archive/documentation/Miscellaneous/Conceptual/MetalProgrammingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40014221)

### Creating texture descriptors

- [textureCubeDescriptor(pixelFormat:size:mipmapped:)](texturecubedescriptor%28pixelformat_size_mipmapped_%29.md): Creates a texture descriptor object for a cube texture.
- [textureBufferDescriptor(with:width:resourceOptions:usage:)](texturebufferdescriptor%28with_width_resourceoptions_usage_%29.md): Creates a texture descriptor object for a texture buffer.

# texture2DDescriptorWithPixelFormat:width:height:mipmapped: (Objective-C)

**Framework:** Metal  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Creates a texture descriptor object for a 2D texture.

## Declaration

```objectivec
+ (MTLTextureDescriptor *) texture2DDescriptorWithPixelFormat:(MTLPixelFormat) pixelFormat width:(NSUInteger) width height:(NSUInteger) height mipmapped:(BOOL) mipmapped;
```

## Parameters

- `pixelFormat`: The format describing how every pixel on the texture image is stored. The default value is [MTLPixelFormatRGBA8Unorm](../mtlpixelformat/rgba8unorm.md).
- `width`: The width of the 2D texture image. The value needs to be greater than or equal to `1`.
- `height`: The height of the 2D texture image. The value needs to be greater than or equal to `1`.
- `mipmapped`: A Boolean indicating whether the resulting image should be mipmapped. If [true](https://developer.apple.com/documentation/swift/true), then the [mipmapLevelCount](mipmaplevelcount.md) property in the returned descriptor is computed from `width` and `height`. If [false](https://developer.apple.com/documentation/swift/false), then [mipmapLevelCount](mipmaplevelcount.md) is `1`.

<a id="return-value"></a>

## Return Value

A pointer to a texture descriptor object for a 2D texture.

## See Also

### Related Documentation

- [Metal Shading Language Guide](https://developer.apple.com/library/archive/documentation/Metal/Reference/MetalShadingLanguageGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40014364)
- [Metal Programming Guide](https://developer.apple.com/library/archive/documentation/Miscellaneous/Conceptual/MetalProgrammingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40014221)

### Creating texture descriptors

- [textureCubeDescriptorWithPixelFormat:size:mipmapped:](texturecubedescriptor%28pixelformat_size_mipmapped_%29.md): Creates a texture descriptor object for a cube texture.
- [textureBufferDescriptorWithPixelFormat:width:resourceOptions:usage:](texturebufferdescriptor%28with_width_resourceoptions_usage_%29.md): Creates a texture descriptor object for a texture buffer.
