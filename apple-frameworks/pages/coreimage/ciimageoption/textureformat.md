> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciimageoption/textureformat](https://developer.apple.com/documentation/coreimage/ciimageoption/textureformat)

# textureFormat (Swift)

**Framework:** Core Image  
**Kind:** Type Property  
**Availability:** macOS 10.9+ (deprecated in 10.14)

The key for an OpenGL texture format.

> Core Image OpenGL API deprecated. (Define CI_SILENCE_GL_DEPRECATION to silence these warnings)

## Declaration

```swift
static let textureFormat: CIImageOption
```

<a id="Discussion"></a>

## Discussion

The value for this key must be an [NSNumber](../../foundation/nsnumber.md) object containing a Core Image pixel format constant. (See `Pixel Formats`.) You may only use this key when initializing an image using the [init(texture:size:flipped:options:)](../ciimage/init%28texture_size_flipped_options_%29.md) method.

## See Also

### Deprecated

- [init(cgLayer:)](../ciimage/init%28cglayer_%29-2lgo6.md): Deprecated. Initializes an image object from the contents supplied by a CGLayer object.
- [init(cgLayer:options:)](../ciimage/init%28cglayer_options_%29-3p3l3.md): Deprecated. Initializes an image object from the contents supplied by a CGLayer object, using the specified options.
- [init(texture:size:flipped:colorSpace:)](../ciimage/init%28texture_size_flipped_colorspace_%29.md): Deprecated. Initializes an image object with data supplied by an OpenGL texture.
- [init(texture:size:flipped:options:)](../ciimage/init%28texture_size_flipped_options_%29.md): Deprecated. Initializes an image object with data supplied by an OpenGL texture.
- [init(ioSurface:plane:format:options:)](../ciimage/init%28iosurface_plane_format_options_%29-93isn.md): Deprecated. Initializes, using the specified format and options, an image with the contents of a specific data plane in an IOSurface.
- [textureTarget](texturetarget.md): Deprecated. The key for an OpenGL texture target.

# kCIImageTextureFormat (Objective-C)

**Framework:** Core Image  
**Kind:** Global Variable  
**Availability:** macOS 10.9+ (deprecated in 10.14)

The key for an OpenGL texture format.

> Core Image OpenGL API deprecated. (Define CI_SILENCE_GL_DEPRECATION to silence these warnings)

## Declaration

```objectivec
extern CIImageOption const kCIImageTextureFormat;
```

<a id="Discussion"></a>

## Discussion

The value for this key must be an [NSNumber](../../foundation/nsnumber.md) object containing a Core Image pixel format constant. (See `Pixel Formats`.) You may only use this key when initializing an image using the [initWithTexture:size:flipped:options:](../ciimage/init%28texture_size_flipped_options_%29.md) method.

## See Also

### Deprecated

- [imageWithCGLayer:](../ciimage/imagewithcglayer_.md): Deprecated. Creates and returns an image object from the contents supplied by a `CGLayer` object.
- [imageWithCGLayer:options:](../ciimage/imagewithcglayer_options_.md): Deprecated. Creates and returns an image object from the contents supplied by a `CGLayer` object, using the specified options.
- [initWithCGLayer:](../ciimage/init%28cglayer_%29-2lgo6.md): Deprecated. Initializes an image object from the contents supplied by a CGLayer object.
- [initWithCGLayer:options:](../ciimage/init%28cglayer_options_%29-3p3l3.md): Deprecated. Initializes an image object from the contents supplied by a CGLayer object, using the specified options.
- [imageWithTexture:size:flipped:colorSpace:](../ciimage/imagewithtexture_size_flipped_colorspace_.md): Deprecated. Creates and returns an image object initialized with data supplied by an OpenGL texture.
- [imageWithTexture:size:flipped:options:](../ciimage/imagewithtexture_size_flipped_options_.md): Deprecated. Creates and returns an image object initialized with data supplied by an OpenGL texture.
- [initWithTexture:size:flipped:colorSpace:](../ciimage/init%28texture_size_flipped_colorspace_%29.md): Deprecated. Initializes an image object with data supplied by an OpenGL texture.
- [initWithTexture:size:flipped:options:](../ciimage/init%28texture_size_flipped_options_%29.md): Deprecated. Initializes an image object with data supplied by an OpenGL texture.
- [imageWithIOSurface:options:](../ciimage/imagewithiosurface_options_.md): Creates, using the specified options, and returns an image from the contents of an IOSurface.
- [initWithIOSurface:plane:format:options:](../ciimage/init%28iosurface_plane_format_options_%29-93isn.md): Deprecated. Initializes, using the specified format and options, an image with the contents of a specific data plane in an IOSurface.
- [kCIImageTextureTarget](texturetarget.md): Deprecated. The key for an OpenGL texture target.
