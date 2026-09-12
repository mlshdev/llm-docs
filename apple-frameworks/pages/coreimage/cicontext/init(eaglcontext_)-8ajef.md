> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cicontext/init(eaglcontext:)-8ajef](https://developer.apple.com/documentation/coreimage/cicontext/init(eaglcontext:)-8ajef)

# init(eaglContext:) (Swift)

**Framework:** Core Image  
**Kind:** Initializer  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · tvOS  (deprecated in 12.0)

Creates a Core Image context from an EAGL context.

> Core Image OpenGLES API deprecated. (Define CI_SILENCE_GL_DEPRECATION to silence these warnings)

## Declaration

```swift
init(eaglContext: EAGLContext)
```

## Parameters

- `eaglContext`: The EAGL context to render to.

<a id="return-value"></a>

## Return Value

A Core Image context that targets OpenGL ES.

<a id="Discussion"></a>

## Discussion

The OpenGL ES context must support OpenGL ES 2.0. All drawing performed using the methods listed in Drawing Images is rendered directly into the context.

## See Also

### Deprecated

- [init(cglContext:pixelFormat:colorSpace:options:)](init%28cglcontext_pixelformat_colorspace_options_%29-6rp6d.md): Deprecated. Creates a Core Image context from a CGL context, using the specified options, color space, and pixel format object.
- [init(eaglContext:options:)](init%28eaglcontext_options_%29-6uyqj.md): Deprecated. Creates a Core Image context from an EAGL context using the specified options.
- [init(forOfflineGPUAtIndex:)](init%28forofflinegpuatindex_%29.md): Deprecated. Creates an OpenGL-based Core Image context using a GPU that is not currently driving a display.
- [init(forOfflineGPUAtIndex:colorSpace:options:sharedContext:)](init%28forofflinegpuatindex_colorspace_options_sharedcontext_%29.md): Deprecated. Creates an OpenGL-based Core Image context using a GPU that is not currently driving a display, with the specified options.
- [createCGLayer(with:info:)](createcglayer%28with_info_%29.md): Deprecated. Creates a CGLayer object from the provided parameters.
- [draw(\_:at:from:)](draw%28__at_from_%29.md): Deprecated. Renders a region of an image to a point in the context destination.

# contextWithEAGLContext: (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · tvOS  (deprecated in 12.0)

Creates a Core Image context from an EAGL context.

> Core Image OpenGLES API deprecated. (Define CI_SILENCE_GL_DEPRECATION to silence these warnings)

## Declaration

```objectivec
+ (CIContext *) contextWithEAGLContext:(EAGLContext *) eaglContext;
```

## Parameters

- `eaglContext`: The EAGL context to render to.

<a id="return-value"></a>

## Return Value

A Core Image context that targets OpenGL ES.

<a id="Discussion"></a>

## Discussion

The OpenGL ES context must support OpenGL ES 2.0. All drawing performed using the methods listed in Drawing Images is rendered directly into the context.

## See Also

### Deprecated

- [contextWithCGLContext:pixelFormat:colorSpace:options:](init%28cglcontext_pixelformat_colorspace_options_%29-6rp6d.md): Deprecated. Creates a Core Image context from a CGL context, using the specified options, color space, and pixel format object.
- [contextWithCGLContext:pixelFormat:options:](contextwithcglcontext_pixelformat_options_.md): Deprecated. Creates a Core Image context from a CGL context, using the specified options and pixel format object.
- [contextWithEAGLContext:options:](init%28eaglcontext_options_%29-6uyqj.md): Deprecated. Creates a Core Image context from an EAGL context using the specified options.
- [createCGLayerWithSize:info:](createcglayer%28with_info_%29.md): Deprecated. Creates a CGLayer object from the provided parameters.
- [drawImage:atPoint:fromRect:](draw%28__at_from_%29.md): Deprecated. Renders a region of an image to a point in the context destination.
