> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciimage/imagewithtexture:size:flipped:options:](https://developer.apple.com/documentation/coreimage/ciimage/imagewithtexture:size:flipped:options:)

# imageWithTexture:size:flipped:options:

**Interface language:** Objective-C

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** macOS 10.9+ (deprecated in 10.14)

Creates and returns an image object initialized with data supplied by an OpenGL texture.

## Declaration

```objectivec
+ (CIImage *) imageWithTexture:(unsigned int) name size:(CGSize) size flipped:(BOOL) flipped options:(NSDictionary<NSString *,id> *) options;
```

## Parameters

- `name`: An OpenGL texture. Because [CIImage](../ciimage.md) objects are immutable, the texture  must remain unchanged for the life of the image object. See the discussion for more information.
- `size`: The dimensions of the texture.
- `flipped`: `true` to have Core Image flip the coordinates of the texture vertically to convert between OpenGL and Core Image coordinate systems.
- `options`: A dictionary specifying image options. (See `Image Dictionary Keys`.)

<a id="return-value"></a>

## Return Value

An image object initialized with the texture data.

<a id="Discussion"></a>

## Discussion

When using a texture to create a [CIImage](../ciimage.md) object, the texture must be valid in the Core Image context ([CIContext](../cicontext.md)) that you draw the [CIImage](../ciimage.md) object into. This means that one of the following must be true:

- The texture must be created using the `CGLContext` object that the Core Image context is based on.
- The context that the texture was created in must be shared with the `CGLContext` that the Core Image context is based on.

Note that textures do not have a retain and release mechanism. This means that your application must make sure that the texture exists for the life cycle of the image. When you no longer need the image, you can delete the texture.

Core Image ignores the texture filtering and wrap modes (`GL_TEXTURE_FILTER` and `GL_TEXTURE_WRAP`) that you set through OpenGL. The filter and wrap modes are overridden by what the [CISampler](../cisampler.md) object specifies when you apply a filter to the [CIImage](../ciimage.md) object.

## See Also

### Deprecated

- [imageWithCGLayer:](imagewithcglayer_.md): Deprecated. Creates and returns an image object from the contents supplied by a `CGLayer` object.
- [imageWithCGLayer:options:](imagewithcglayer_options_.md): Deprecated. Creates and returns an image object from the contents supplied by a `CGLayer` object, using the specified options.
- [initWithCGLayer:](init%28cglayer_%29-2lgo6.md): Deprecated. Initializes an image object from the contents supplied by a CGLayer object.
- [initWithCGLayer:options:](init%28cglayer_options_%29-3p3l3.md): Deprecated. Initializes an image object from the contents supplied by a CGLayer object, using the specified options.
- [imageWithTexture:size:flipped:colorSpace:](imagewithtexture_size_flipped_colorspace_.md): Deprecated. Creates and returns an image object initialized with data supplied by an OpenGL texture.
- [initWithTexture:size:flipped:colorSpace:](init%28texture_size_flipped_colorspace_%29.md): Deprecated. Initializes an image object with data supplied by an OpenGL texture.
- [initWithTexture:size:flipped:options:](init%28texture_size_flipped_options_%29.md): Deprecated. Initializes an image object with data supplied by an OpenGL texture.
- [imageWithIOSurface:options:](imagewithiosurface_options_.md): Creates, using the specified options, and returns an image from the contents of an IOSurface.
- [initWithIOSurface:plane:format:options:](init%28iosurface_plane_format_options_%29-93isn.md): Deprecated. Initializes, using the specified format and options, an image with the contents of a specific data plane in an IOSurface.
- [kCIImageTextureTarget](../ciimageoption/texturetarget.md): Deprecated. The key for an OpenGL texture target.
- [kCIImageTextureFormat](../ciimageoption/textureformat.md): Deprecated. The key for an OpenGL texture format.
