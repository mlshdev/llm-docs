> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/qcrenderer/init(openglcontext:pixelformat:file:)](https://developer.apple.com/documentation/quartz/qcrenderer/init(openglcontext:pixelformat:file:))

# init(openGLContext:pixelFormat:file:) (Swift)

**Framework:** Quartz  
**Kind:** Initializer  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Creates a  renderer object with an `NSOpenGLContext` object and a composition file.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
init!(openGLContext context: NSOpenGLContext!, pixelFormat format: NSOpenGLPixelFormat!, file path: String!)
```

## Parameters

- `context`: An [NSOpenGLContext](../../appkit/nsopenglcontext.md) object. The object that you supply must have both a color and a depth buffer.
- `format`: An  [NSOpenGLPixelFormat](../../appkit/nsopenglpixelformat.md)  object.
- `path`: A string that specifies the location of a composition(`.qtz`) file.

<a id="return-value"></a>

## Return Value

An initialized `QCRenderer` object or `nil` if initialization is not successful.

## See Also

### Creating and Initializing a Renderer

- [init(composition:colorSpace:)](init%28composition_colorspace_%29.md): Deprecated. Creates a renderer object with a composition object and a color space.
- [init(cglContext:pixelFormat:colorSpace:composition:)](init%28cglcontext_pixelformat_colorspace_composition_%29-7at42.md): Deprecated. Creates a renderer object with a `CGLContextObj` object, a pixel format, a color space, and a composition object.
- [init(offScreenWith:colorSpace:composition:)](init%28offscreenwith_colorspace_composition_%29.md): Deprecated. Creates an offscreen renderer of a given size with the provided color space and composition object.

# initWithOpenGLContext:pixelFormat:file: (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Creates a  renderer object with an `NSOpenGLContext` object and a composition file.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
- (id) initWithOpenGLContext:(NSOpenGLContext *) context pixelFormat:(NSOpenGLPixelFormat *) format file:(NSString *) path;
```

## Parameters

- `context`: An [NSOpenGLContext](../../appkit/nsopenglcontext.md) object. The object that you supply must have both a color and a depth buffer.
- `format`: An  [NSOpenGLPixelFormat](../../appkit/nsopenglpixelformat.md)  object.
- `path`: A string that specifies the location of a composition(`.qtz`) file.

<a id="return-value"></a>

## Return Value

An initialized `QCRenderer` object or `nil` if initialization is not successful.

## See Also

### Creating and Initializing a Renderer

- [initWithComposition:colorSpace:](init%28composition_colorspace_%29.md): Deprecated. Creates a renderer object with a composition object and a color space.
- [initWithCGLContext:pixelFormat:colorSpace:composition:](init%28cglcontext_pixelformat_colorspace_composition_%29-7at42.md): Deprecated. Creates a renderer object with a `CGLContextObj` object, a pixel format, a color space, and a composition object.
- [initOffScreenWithSize:colorSpace:composition:](init%28offscreenwith_colorspace_composition_%29.md): Deprecated. Creates an offscreen renderer of a given size with the provided color space and composition object.
