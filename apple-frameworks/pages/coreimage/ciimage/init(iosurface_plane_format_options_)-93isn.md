> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciimage/init(iosurface:plane:format:options:)-93isn](https://developer.apple.com/documentation/coreimage/ciimage/init(iosurface:plane:format:options:)-93isn)

# init(ioSurface:plane:format:options:) (Swift)

**Framework:** Core Image  
**Kind:** Initializer  
**Availability:** macOS 10.9+ (deprecated in 10.11)

Initializes, using the specified format and options, an image with the contents of a specific data plane in an IOSurface.

## Declaration

```swift
init(ioSurface surface: IOSurfaceRef, plane: Int, format: CIFormat, options: [CIImageOption : Any]? = nil)
```

## Parameters

- `surface`: An IOSurface object.
- `plane`: The index of the data plane in the IOSurface object containing bitmap data for initializing the image.
- `format`: A pixel format constant. See `Pixel Formats`.
- `options`: A dictionary specifying image options. (See `Image Dictionary Keys`.)

<a id="return-value"></a>

## Return Value

An image object initialized with the data from the IOSurface.

## See Also

### Deprecated

- [init(cgLayer:)](init%28cglayer_%29-2lgo6.md): Deprecated. Initializes an image object from the contents supplied by a CGLayer object.
- [init(cgLayer:options:)](init%28cglayer_options_%29-3p3l3.md): Deprecated. Initializes an image object from the contents supplied by a CGLayer object, using the specified options.
- [init(texture:size:flipped:colorSpace:)](init%28texture_size_flipped_colorspace_%29.md): Deprecated. Initializes an image object with data supplied by an OpenGL texture.
- [init(texture:size:flipped:options:)](init%28texture_size_flipped_options_%29.md): Deprecated. Initializes an image object with data supplied by an OpenGL texture.
- [textureTarget](../ciimageoption/texturetarget.md): Deprecated. The key for an OpenGL texture target.
- [textureFormat](../ciimageoption/textureformat.md): Deprecated. The key for an OpenGL texture format.

# initWithIOSurface:plane:format:options: (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** macOS 10.9+ (deprecated in 10.11)

Initializes, using the specified format and options, an image with the contents of a specific data plane in an IOSurface.

## Declaration

```objectivec
- (instancetype) initWithIOSurface:(IOSurfaceRef) surface plane:(size_t) plane format:(CIFormat) format options:(NSDictionary<NSString *,id> *) options;
```

## Parameters

- `surface`: An IOSurface object.
- `plane`: The index of the data plane in the IOSurface object containing bitmap data for initializing the image.
- `format`: A pixel format constant. See `Pixel Formats`.
- `options`: A dictionary specifying image options. (See `Image Dictionary Keys`.)

<a id="return-value"></a>

## Return Value

An image object initialized with the data from the IOSurface.

## See Also

### Deprecated

- [imageWithCGLayer:](imagewithcglayer_.md): Deprecated. Creates and returns an image object from the contents supplied by a `CGLayer` object.
- [imageWithCGLayer:options:](imagewithcglayer_options_.md): Deprecated. Creates and returns an image object from the contents supplied by a `CGLayer` object, using the specified options.
- [initWithCGLayer:](init%28cglayer_%29-2lgo6.md): Deprecated. Initializes an image object from the contents supplied by a CGLayer object.
- [initWithCGLayer:options:](init%28cglayer_options_%29-3p3l3.md): Deprecated. Initializes an image object from the contents supplied by a CGLayer object, using the specified options.
- [imageWithTexture:size:flipped:colorSpace:](imagewithtexture_size_flipped_colorspace_.md): Deprecated. Creates and returns an image object initialized with data supplied by an OpenGL texture.
- [imageWithTexture:size:flipped:options:](imagewithtexture_size_flipped_options_.md): Deprecated. Creates and returns an image object initialized with data supplied by an OpenGL texture.
- [initWithTexture:size:flipped:colorSpace:](init%28texture_size_flipped_colorspace_%29.md): Deprecated. Initializes an image object with data supplied by an OpenGL texture.
- [initWithTexture:size:flipped:options:](init%28texture_size_flipped_options_%29.md): Deprecated. Initializes an image object with data supplied by an OpenGL texture.
- [imageWithIOSurface:options:](imagewithiosurface_options_.md): Creates, using the specified options, and returns an image from the contents of an IOSurface.
- [kCIImageTextureTarget](../ciimageoption/texturetarget.md): Deprecated. The key for an OpenGL texture target.
- [kCIImageTextureFormat](../ciimageoption/textureformat.md): Deprecated. The key for an OpenGL texture format.
