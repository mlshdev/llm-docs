> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsimage/texture](https://developer.apple.com/documentation/metalperformanceshaders/mpsimage/texture)

# texture (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

The underlying texture.

## Declaration

```swift
var texture: any MTLTexture { get }
```

<a id="Discussion"></a>

## Discussion

This is a 2D texture if `numberOfImages=1` and `featureChannels<=4`. It is a 2D texture array otherwise.

To avoid the high cost of premature allocation of the underlying texture, avoid accessing this property except when strictly necessary. Calls to the `encode` methods of an [MPSCNNKernel](../mpscnnkernel.md) object typically cause their arguments to become allocated. Likewise, [MPSImage](../mpsimage.md) objects initialized with the [init(texture:featureChannels:)](init%28texture_featurechannels_%29.md) method have already been allocated.

## See Also

### Properties

- [device](device.md): The device on which the image will be used.
- [width](width.md): The formal width of the image, in pixels.
- [height](height.md): The formal height of the image, in pixels.
- [featureChannels](featurechannels.md): The number of feature channels per pixel.
- [numberOfImages](numberofimages.md): The number of images for batch processing.
- [textureType](texturetype.md): The type of the underlying texture.
- [MTLTextureType](../../metal/mtltexturetype.md): The dimension of each image, including whether multiple images are arranged into an array or a cube.
- [pixelFormat](pixelformat.md): The pixel format of the underlying texture.
- [MTLPixelFormat](../../metal/mtlpixelformat.md): The data formats that describe the organization and characteristics of individual pixels in a texture.
- [precision](precision.md): The number of bits of numeric precision available for each feature channel.
- [usage](usage.md): The intended usage of the underlying texture.
- [MTLTextureUsage](../../metal/mtltextureusage.md): An enumeration for the various options that determine how you can use a texture.
- [pixelSize](pixelsize.md): The number of bytes from the first byte of one pixel to the first byte of the next pixel, in storage order. (Includes padding.)
- [MTLTexture](../../metal/mtltexture.md): A resource that holds formatted image data.
- [label](label.md): A string to help identify this object.

# texture (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

The underlying texture.

## Declaration

```objectivec
@property (nonatomic, readonly, nonnull) id<MTLTexture> texture;
```

<a id="Discussion"></a>

## Discussion

This is a 2D texture if `numberOfImages=1` and `featureChannels<=4`. It is a 2D texture array otherwise.

To avoid the high cost of premature allocation of the underlying texture, avoid accessing this property except when strictly necessary. Calls to the `encode` methods of an [MPSCNNKernel](../mpscnnkernel.md) object typically cause their arguments to become allocated. Likewise, [MPSImage](../mpsimage.md) objects initialized with the [initWithTexture:featureChannels:](init%28texture_featurechannels_%29.md) method have already been allocated.

## See Also

### Properties

- [device](device.md): The device on which the image will be used.
- [width](width.md): The formal width of the image, in pixels.
- [height](height.md): The formal height of the image, in pixels.
- [featureChannels](featurechannels.md): The number of feature channels per pixel.
- [numberOfImages](numberofimages.md): The number of images for batch processing.
- [textureType](texturetype.md): The type of the underlying texture.
- [MTLTextureType](../../metal/mtltexturetype.md): The dimension of each image, including whether multiple images are arranged into an array or a cube.
- [pixelFormat](pixelformat.md): The pixel format of the underlying texture.
- [MTLPixelFormat](../../metal/mtlpixelformat.md): The data formats that describe the organization and characteristics of individual pixels in a texture.
- [precision](precision.md): The number of bits of numeric precision available for each feature channel.
- [usage](usage.md): The intended usage of the underlying texture.
- [MTLTextureUsage](../../metal/mtltextureusage.md): An enumeration for the various options that determine how you can use a texture.
- [pixelSize](pixelsize.md): The number of bytes from the first byte of one pixel to the first byte of the next pixel, in storage order. (Includes padding.)
- [MTLTexture](../../metal/mtltexture.md): A resource that holds formatted image data.
- [label](label.md): A string to help identify this object.
