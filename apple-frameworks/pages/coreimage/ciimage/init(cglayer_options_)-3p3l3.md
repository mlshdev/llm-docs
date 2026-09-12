> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciimage/init(cglayer:options:)-3p3l3](https://developer.apple.com/documentation/coreimage/ciimage/init(cglayer:options:)-3p3l3)

# init(cgLayer:options:) (Swift)

**Framework:** Core Image  
**Kind:** Initializer  
**Availability:** macOS 10.4+ (deprecated in 10.11)

Initializes an image object  from the contents supplied by a CGLayer object, using the  specified options.

> Use initWithCGImage:options instead.

## Declaration

```swift
init(cgLayer layer: CGLayer, options: [CIImageOption : Any]? = nil)
```

## Parameters

- `layer`: A CGLayer object. For more information see [Quartz 2D Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/drawingwithquartz2d/Introduction/Introduction.html#//apple_ref/doc/uid/TP30001066) and [CGLayer](../../coregraphics/cglayer.md).
- `options`: A dictionary specifying image options. (See `Image Dictionary Keys`.)

<a id="return-value"></a>

## Return Value

The initialized image object.

## See Also

### Deprecated

- [init(cgLayer:)](init%28cglayer_%29-2lgo6.md): Deprecated. Initializes an image object from the contents supplied by a CGLayer object.
- [init(texture:size:flipped:colorSpace:)](init%28texture_size_flipped_colorspace_%29.md): Deprecated. Initializes an image object with data supplied by an OpenGL texture.
- [init(texture:size:flipped:options:)](init%28texture_size_flipped_options_%29.md): Deprecated. Initializes an image object with data supplied by an OpenGL texture.
- [init(ioSurface:plane:format:options:)](init%28iosurface_plane_format_options_%29-93isn.md): Deprecated. Initializes, using the specified format and options, an image with the contents of a specific data plane in an IOSurface.
- [textureTarget](../ciimageoption/texturetarget.md): Deprecated. The key for an OpenGL texture target.
- [textureFormat](../ciimageoption/textureformat.md): Deprecated. The key for an OpenGL texture format.

# initWithCGLayer:options: (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.11)

Initializes an image object  from the contents supplied by a CGLayer object, using the  specified options.

> Use initWithCGImage:options instead.

## Declaration

```objectivec
- (instancetype) initWithCGLayer:(CGLayerRef) layer options:(NSDictionary<NSString *,id> *) options;
```

## Parameters

- `layer`: A CGLayer object. For more information see [Quartz 2D Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/drawingwithquartz2d/Introduction/Introduction.html#//apple_ref/doc/uid/TP30001066) and [CGLayerRef](../../coregraphics/cglayer.md).
- `options`: A dictionary specifying image options. (See `Image Dictionary Keys`.)

<a id="return-value"></a>

## Return Value

The initialized image object.

## See Also

### Related Documentation

- [imageWithCGLayer:options:](imagewithcglayer_options_.md): Deprecated. Creates and returns an image object from the contents supplied by a `CGLayer` object, using the specified options.

### Deprecated

- [imageWithCGLayer:](imagewithcglayer_.md): Deprecated. Creates and returns an image object from the contents supplied by a `CGLayer` object.
- [imageWithCGLayer:options:](imagewithcglayer_options_.md): Deprecated. Creates and returns an image object from the contents supplied by a `CGLayer` object, using the specified options.
- [initWithCGLayer:](init%28cglayer_%29-2lgo6.md): Deprecated. Initializes an image object from the contents supplied by a CGLayer object.
- [imageWithTexture:size:flipped:colorSpace:](imagewithtexture_size_flipped_colorspace_.md): Deprecated. Creates and returns an image object initialized with data supplied by an OpenGL texture.
- [imageWithTexture:size:flipped:options:](imagewithtexture_size_flipped_options_.md): Deprecated. Creates and returns an image object initialized with data supplied by an OpenGL texture.
- [initWithTexture:size:flipped:colorSpace:](init%28texture_size_flipped_colorspace_%29.md): Deprecated. Initializes an image object with data supplied by an OpenGL texture.
- [initWithTexture:size:flipped:options:](init%28texture_size_flipped_options_%29.md): Deprecated. Initializes an image object with data supplied by an OpenGL texture.
- [imageWithIOSurface:options:](imagewithiosurface_options_.md): Creates, using the specified options, and returns an image from the contents of an IOSurface.
- [initWithIOSurface:plane:format:options:](init%28iosurface_plane_format_options_%29-93isn.md): Deprecated. Initializes, using the specified format and options, an image with the contents of a specific data plane in an IOSurface.
- [kCIImageTextureTarget](../ciimageoption/texturetarget.md): Deprecated. The key for an OpenGL texture target.
- [kCIImageTextureFormat](../ciimageoption/textureformat.md): Deprecated. The key for an OpenGL texture format.
