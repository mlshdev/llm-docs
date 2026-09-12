> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtltexturedescriptor/texturecubedescriptor(pixelformat:size:mipmapped:)](https://developer.apple.com/documentation/metal/mtltexturedescriptor/texturecubedescriptor(pixelformat:size:mipmapped:))

# textureCubeDescriptor(pixelFormat:size:mipmapped:) (Swift)

**Framework:** Metal  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Creates a texture descriptor object for a cube texture.

## Declaration

```swift
class func textureCubeDescriptor(pixelFormat: MTLPixelFormat, size: Int, mipmapped: Bool) -> MTLTextureDescriptor
```

## Parameters

- `pixelFormat`: The format describing how every pixel on the texture image is stored. The default value is [MTLPixelFormat.rgba8Unorm](../mtlpixelformat/rgba8unorm.md).
- `size`: The width and height of each slice of the cube texture. The value needs to be greater than or equal to `1`.
- `mipmapped`: A Boolean indicating whether the resulting image should be mipmapped. If [true](https://developer.apple.com/documentation/swift/true), then the [mipmapLevelCount](mipmaplevelcount.md) property in the returned descriptor is computed from `width` and `height`. If [false](https://developer.apple.com/documentation/swift/false), then [mipmapLevelCount](mipmaplevelcount.md) is `1`.

<a id="return-value"></a>

## Return Value

A pointer to a texture descriptor object for a cube texture.

<a id="discussion"></a>

## Discussion

For a cube texture, the property values describe one slice, which is any one of its six sides. Each slice is a square.

## See Also

### Creating texture descriptors

- [texture2DDescriptor(pixelFormat:width:height:mipmapped:)](texture2ddescriptor%28pixelformat_width_height_mipmapped_%29.md): Creates a texture descriptor object for a 2D texture.
- [textureBufferDescriptor(with:width:resourceOptions:usage:)](texturebufferdescriptor%28with_width_resourceoptions_usage_%29.md): Creates a texture descriptor object for a texture buffer.

# textureCubeDescriptorWithPixelFormat:size:mipmapped: (Objective-C)

**Framework:** Metal  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Creates a texture descriptor object for a cube texture.

## Declaration

```objectivec
+ (MTLTextureDescriptor *) textureCubeDescriptorWithPixelFormat:(MTLPixelFormat) pixelFormat size:(NSUInteger) size mipmapped:(BOOL) mipmapped;
```

## Parameters

- `pixelFormat`: The format describing how every pixel on the texture image is stored. The default value is [MTLPixelFormatRGBA8Unorm](../mtlpixelformat/rgba8unorm.md).
- `size`: The width and height of each slice of the cube texture. The value needs to be greater than or equal to `1`.
- `mipmapped`: A Boolean indicating whether the resulting image should be mipmapped. If [true](https://developer.apple.com/documentation/swift/true), then the [mipmapLevelCount](mipmaplevelcount.md) property in the returned descriptor is computed from `width` and `height`. If [false](https://developer.apple.com/documentation/swift/false), then [mipmapLevelCount](mipmaplevelcount.md) is `1`.

<a id="return-value"></a>

## Return Value

A pointer to a texture descriptor object for a cube texture.

<a id="discussion"></a>

## Discussion

For a cube texture, the property values describe one slice, which is any one of its six sides. Each slice is a square.

## See Also

### Creating texture descriptors

- [texture2DDescriptorWithPixelFormat:width:height:mipmapped:](texture2ddescriptor%28pixelformat_width_height_mipmapped_%29.md): Creates a texture descriptor object for a 2D texture.
- [textureBufferDescriptorWithPixelFormat:width:resourceOptions:usage:](texturebufferdescriptor%28with_width_resourceoptions_usage_%29.md): Creates a texture descriptor object for a texture buffer.
