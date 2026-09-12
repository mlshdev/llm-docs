> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/qcrenderer/init(offscreenwith:colorspace:composition:)](https://developer.apple.com/documentation/quartz/qcrenderer/init(offscreenwith:colorspace:composition:))

# init(offScreenWith:colorSpace:composition:) (Swift)

**Framework:** Quartz  
**Kind:** Initializer  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Creates an offscreen renderer of a given size with the provided color space and composition object.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
init!(offScreenWith size: NSSize, colorSpace: CGColorSpace!, composition: QCComposition!)
```

## Parameters

- `size`: The size of the offscreen renderer.
- `colorSpace`: A Quartz color space object. This must be an RGB color space. Pass `NULL` to use the default RGB color space. For more information on Quartz color spaces, see [Quartz 2D Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/drawingwithquartz2d/Introduction/Introduction.html#//apple_ref/doc/uid/TP30001066).
- `composition`: A [QCComposition](../qccomposition.md) object.

<a id="return-value"></a>

## Return Value

The initialized `QCRenderer` object or `nil` if initialization is not successful.

<a id="Discussion"></a>

## Discussion

This method creates an internal OpenGL context and pixel buffer. Because offscreen rendering is performed on the GPU, the maximum rendering size is limited to the GPU capacity. On typical hardware, the limit is at least 2048 by 2048, but is often 4096 by 4096. The available VRAM affects performance.

## See Also

### Creating and Initializing a Renderer

- [init(composition:colorSpace:)](init%28composition_colorspace_%29.md): Deprecated. Creates a renderer object with a composition object and a color space.
- [init(openGLContext:pixelFormat:file:)](init%28openglcontext_pixelformat_file_%29.md): Deprecated. Creates a renderer object with an `NSOpenGLContext` object and a composition file.
- [init(cglContext:pixelFormat:colorSpace:composition:)](init%28cglcontext_pixelformat_colorspace_composition_%29-7at42.md): Deprecated. Creates a renderer object with a `CGLContextObj` object, a pixel format, a color space, and a composition object.

# initOffScreenWithSize:colorSpace:composition: (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Creates an offscreen renderer of a given size with the provided color space and composition object.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
- (id) initOffScreenWithSize:(NSSize) size colorSpace:(CGColorSpaceRef) colorSpace composition:(QCComposition *) composition;
```

## Parameters

- `size`: The size of the offscreen renderer.
- `colorSpace`: A Quartz color space object. This must be an RGB color space. Pass `NULL` to use the default RGB color space. For more information on Quartz color spaces, see [Quartz 2D Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/drawingwithquartz2d/Introduction/Introduction.html#//apple_ref/doc/uid/TP30001066).
- `composition`: A [QCComposition](../qccomposition.md) object.

<a id="return-value"></a>

## Return Value

The initialized `QCRenderer` object or `nil` if initialization is not successful.

<a id="Discussion"></a>

## Discussion

This method creates an internal OpenGL context and pixel buffer. Because offscreen rendering is performed on the GPU, the maximum rendering size is limited to the GPU capacity. On typical hardware, the limit is at least 2048 by 2048, but is often 4096 by 4096. The available VRAM affects performance.

## See Also

### Creating and Initializing a Renderer

- [initWithComposition:colorSpace:](init%28composition_colorspace_%29.md): Deprecated. Creates a renderer object with a composition object and a color space.
- [initWithOpenGLContext:pixelFormat:file:](init%28openglcontext_pixelformat_file_%29.md): Deprecated. Creates a renderer object with an `NSOpenGLContext` object and a composition file.
- [initWithCGLContext:pixelFormat:colorSpace:composition:](init%28cglcontext_pixelformat_colorspace_composition_%29-7at42.md): Deprecated. Creates a renderer object with a `CGLContextObj` object, a pixel format, a color space, and a composition object.
