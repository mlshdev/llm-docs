> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/qcrenderer/init(cglcontext:pixelformat:colorspace:composition:)-7at42](https://developer.apple.com/documentation/quartz/qcrenderer/init(cglcontext:pixelformat:colorspace:composition:)-7at42)

# init(cglContext:pixelFormat:colorSpace:composition:) (Swift)

**Framework:** Quartz  
**Kind:** Initializer  
**Availability:** macOS 10.5+ (deprecated in 10.14)

Creates a  renderer object  with a `CGLContextObj` object, a pixel format, a color space, and a composition object.

> Quartz Composer OpenGL API deprecated. (Define QC_SILENCE_GL_DEPRECATION to silence these warnings)

## Declaration

```swift
init!(cglContext context: CGLContextObj!, pixelFormat format: CGLPixelFormatObj!, colorSpace: CGColorSpace!, composition: QCComposition!)
```

## Parameters

- `context`: A  `CGLContextObj` object. The object that you supply must have both a color and a depth buffer.
- `format`: A  `CGLPixelFormatObj`  object.
- `colorSpace`: A Quartz color space object. This must be an RGB color space. Pass `NULL` to use the default RGB color space. For more information on Quartz color spaces, see [Quartz 2D Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/drawingwithquartz2d/Introduction/Introduction.html#//apple_ref/doc/uid/TP30001066).
- `composition`: A [QCComposition](../qccomposition.md) object.

<a id="return-value"></a>

## Return Value

The initialized `QCRenderer` object or `nil` if initialization is not successful.

## See Also

### Creating and Initializing a Renderer

- [init(composition:colorSpace:)](init%28composition_colorspace_%29.md): Deprecated. Creates a renderer object with a composition object and a color space.
- [init(openGLContext:pixelFormat:file:)](init%28openglcontext_pixelformat_file_%29.md): Deprecated. Creates a renderer object with an `NSOpenGLContext` object and a composition file.
- [init(offScreenWith:colorSpace:composition:)](init%28offscreenwith_colorspace_composition_%29.md): Deprecated. Creates an offscreen renderer of a given size with the provided color space and composition object.

# initWithCGLContext:pixelFormat:colorSpace:composition: (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.5+ (deprecated in 10.14)

Creates a  renderer object  with a `CGLContextObj` object, a pixel format, a color space, and a composition object.

> Quartz Composer OpenGL API deprecated. (Define QC_SILENCE_GL_DEPRECATION to silence these warnings)

## Declaration

```objectivec
- (id) initWithCGLContext:(CGLContextObj) context pixelFormat:(CGLPixelFormatObj) format colorSpace:(CGColorSpaceRef) colorSpace composition:(QCComposition *) composition;
```

## Parameters

- `context`: A  `CGLContextObj` object. The object that you supply must have both a color and a depth buffer.
- `format`: A  `CGLPixelFormatObj`  object.
- `colorSpace`: A Quartz color space object. This must be an RGB color space. Pass `NULL` to use the default RGB color space. For more information on Quartz color spaces, see [Quartz 2D Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/drawingwithquartz2d/Introduction/Introduction.html#//apple_ref/doc/uid/TP30001066).
- `composition`: A [QCComposition](../qccomposition.md) object.

<a id="return-value"></a>

## Return Value

The initialized `QCRenderer` object or `nil` if initialization is not successful.

## See Also

### Creating and Initializing a Renderer

- [initWithComposition:colorSpace:](init%28composition_colorspace_%29.md): Deprecated. Creates a renderer object with a composition object and a color space.
- [initWithOpenGLContext:pixelFormat:file:](init%28openglcontext_pixelformat_file_%29.md): Deprecated. Creates a renderer object with an `NSOpenGLContext` object and a composition file.
- [initOffScreenWithSize:colorSpace:composition:](init%28offscreenwith_colorspace_composition_%29.md): Deprecated. Creates an offscreen renderer of a given size with the provided color space and composition object.
