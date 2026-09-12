> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtltexturedescriptor/texturebufferdescriptor(with:width:resourceoptions:usage:)](https://developer.apple.com/documentation/metal/mtltexturedescriptor/texturebufferdescriptor(with:width:resourceoptions:usage:))

# textureBufferDescriptor(with:width:resourceOptions:usage:) (Swift)

**Framework:** Metal  
**Kind:** Type Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

Creates a texture descriptor object for a texture buffer.

## Declaration

```swift
class func textureBufferDescriptor(with pixelFormat: MTLPixelFormat, width: Int, resourceOptions: MTLResourceOptions = [], usage: MTLTextureUsage) -> MTLTextureDescriptor
```

## Parameters

- `pixelFormat`: The format describing how every pixel on the texture buffer is stored. The default value is [MTLPixelFormat.rgba8Unorm](../mtlpixelformat/rgba8unorm.md).
- `width`: The width of the texture buffer. The value needs to be greater than or equal to `1`.
- `resourceOptions`: The access options to use for the new texture buffer.
- `usage`: The allowed usage of the new texture buffer.

<a id="return-value"></a>

## Return Value

A pointer to a texture descriptor object for a texture buffer.

## See Also

### Creating texture descriptors

- [texture2DDescriptor(pixelFormat:width:height:mipmapped:)](texture2ddescriptor%28pixelformat_width_height_mipmapped_%29.md): Creates a texture descriptor object for a 2D texture.
- [textureCubeDescriptor(pixelFormat:size:mipmapped:)](texturecubedescriptor%28pixelformat_size_mipmapped_%29.md): Creates a texture descriptor object for a cube texture.

# textureBufferDescriptorWithPixelFormat:width:resourceOptions:usage: (Objective-C)

**Framework:** Metal  
**Kind:** Type Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

Creates a texture descriptor object for a texture buffer.

## Declaration

```objectivec
+ (MTLTextureDescriptor *) textureBufferDescriptorWithPixelFormat:(MTLPixelFormat) pixelFormat width:(NSUInteger) width resourceOptions:(MTLResourceOptions) resourceOptions usage:(MTLTextureUsage) usage;
```

## Parameters

- `pixelFormat`: The format describing how every pixel on the texture buffer is stored. The default value is [MTLPixelFormatRGBA8Unorm](../mtlpixelformat/rgba8unorm.md).
- `width`: The width of the texture buffer. The value needs to be greater than or equal to `1`.
- `resourceOptions`: The access options to use for the new texture buffer.
- `usage`: The allowed usage of the new texture buffer.

<a id="return-value"></a>

## Return Value

A pointer to a texture descriptor object for a texture buffer.

## See Also

### Creating texture descriptors

- [texture2DDescriptorWithPixelFormat:width:height:mipmapped:](texture2ddescriptor%28pixelformat_width_height_mipmapped_%29.md): Creates a texture descriptor object for a 2D texture.
- [textureCubeDescriptorWithPixelFormat:size:mipmapped:](texturecubedescriptor%28pixelformat_size_mipmapped_%29.md): Creates a texture descriptor object for a cube texture.
